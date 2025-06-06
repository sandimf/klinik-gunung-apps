<?php

namespace App\Http\Controllers\Paramedis\v2;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Users\Patients;
use App\Models\EMR\MedicalRecord;
use App\Http\Controllers\Controller;
use App\Jobs\SyncPatientsToAirtable;
use Illuminate\Support\Facades\Auth;
use App\Jobs\SendScreeningNotification;
use App\Models\Clinic\PhysicalExamination;

class HealthCheckController extends Controller
{

    protected function generateMedicalRecordNumber()
    {
        $lastRecord = MedicalRecord::latest()->first(); // Ambil rekam medis terakhir
        $lastNumber = $lastRecord ? intval(substr($lastRecord->medical_record_number, 2)) : 0; // Ambil angka terakhir
        $newNumber = $lastNumber + 1; // Tambah 1 untuk nomor baru

        return 'MR' . str_pad($newNumber, 4, '0', STR_PAD_LEFT); // Format nomor: MR0001, MR0002, dst.
    }
    public function store(Request $request)
    {
        $user = Auth::user(); // Get the authenticated user

        // Validate the request data
        $request->validate([
            'paramedis_id' => 'required|exists:paramedis,id',
            'patient_id' => 'required|exists:patients,id',
            'blood_pressure' => 'nullable|string',
            'heart_rate' => 'nullable|integer',
            'oxygen_saturation' => 'nullable|integer',
            'respiratory_rate' => 'nullable|integer',
            'body_temperature' => 'nullable|numeric',
            'physical_assessment' => 'required|string',
            'reason' => 'nullable|string',
            'medical_advice' => 'nullable|string',
            'health_status' => 'required|in:healthy,butuh_dokter,butuh_pendamping',
        ]);

        // Create the physical examination record
        $examination = PhysicalExamination::create([
            'patient_id' => $request->patient_id,
            'paramedis_id' => $request->paramedis_id,
            'blood_pressure' => $request->blood_pressure,
            'heart_rate' => $request->heart_rate,
            'oxygen_saturation' => $request->oxygen_saturation,
            'respiratory_rate' => $request->respiratory_rate,
            'body_temperature' => $request->body_temperature,
            'physical_assessment' => $request->physical_assessment,
            'reason' => $request->reason,
            'medical_advice' => $request->medical_advice,
            'health_status' => $request->health_status,
        ]);

        // Generate the medical record number
        $medicalRecordNumber = $this->generateMedicalRecordNumber();

        // Create a new medical record
        $medicalRecord = MedicalRecord::create([
            'patient_id' => $request->patient_id,
            'physical_examination_id' => $examination->id,
            'medical_record_number' => $medicalRecordNumber,
        ]);

        // Update patient's screening status to 'completed'
        $patient = Patients::find($request->patient_id);
        $patient->screening_status = 'completed';
        $patient->health_status = $request->health_status;
        $patient->health_check_status = 'completed';
        $patient->save();

        // Dispatch a notification
        SendScreeningNotification::dispatch($patient);

        SyncPatientsToAirtable::dispatch();

        return back()->with('message', 'Pemeriksaan Fisik Berhasil Berhasil di Simpan!');
    }
    public function show($uuid)
    {
        $patient = Patients::with(['answers.question'])
            ->where('uuid', $uuid)
            ->firstOrFail();

        // Menyiapkan data pertanyaan dan jawaban
        $questionsAndAnswers = $patient->answers->map(function ($answer) {
            return [
                'question' => $answer->question->question_text,
                'answer' => $answer->answer_text,
                'id' => $answer->id,
                'queue' => $answer->queue, // Menambahkan nomor antrian
            ];
        });

        // Mengirim data ke halaman Inertia
        return Inertia::render('Dashboard/Paramedis/Screenings/Offline/Details/Index', [
            'patient' => $patient,
            'questionsAndAnswers' => $questionsAndAnswers,
            'queue' => $patient->answers->max('queue'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = Auth::user(); // Get the authenticated user

        // Validate the request data
        $request->validate([
            'blood_pressure' => 'nullable|string',
            'heart_rate' => 'nullable|integer',
            'oxygen_saturation' => 'nullable|integer',
            'respiratory_rate' => 'nullable|integer',
            'body_temperature' => 'nullable|numeric',
            'physical_assessment' => 'required|string',
            'reason' => 'nullable|string',
            'medical_advice' => 'nullable|string',
            'health_status' => 'required|in:healthy,butuh_dokter,butuh_pendamping',
        ]);

        $examination = PhysicalExamination::findOrFail($id); // Find the record by ID

        // Update the physical examination record
        $examination->update([
            'blood_pressure' => $request->blood_pressure,
            'heart_rate' => $request->heart_rate,
            'oxygen_saturation' => $request->oxygen_saturation,
            'respiratory_rate' => $request->respiratory_rate,
            'body_temperature' => $request->body_temperature,
            'physical_assessment' => $request->physical_assessment,
            'reason' => $request->reason,
            'medical_advice' => $request->medical_advice,
            'health_status' => $request->health_status,
        ]);

        // Update the related patient's health status
        $patient = Patients::find($examination->patient_id);
        $patient->health_status = $request->health_status;
        $patient->save();

        return back()->with('message', 'Pemeriksaan Fisik berhasil diperbarui.');
    }
}

import React, { useEffect } from "react";
import { Head, usePage } from "@inertiajs/react";
import Sidebar from "@/Layouts/Dashboard/PatientsSidebarLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { CalendarDays, Activity, Pill, Phone, CircleCheck } from "lucide-react";
import { toast, Toaster } from "sonner";

export default function Dashboard({ screening, visitCount, emergency }) {
    const user = usePage().props.auth.user;

    const { flash } = usePage().props;
    useEffect(() => {
        if (flash.message) {
            toast(flash.message, {
                icon: <CircleCheck className="w-5 h-5 text-green-500" />,
            });
        }
    }, [flash.message]);

    return (
        <Sidebar header={"Welcome"}>
            <Head title="Dashboard" />
            <Toaster position="top-center" />
            <div className="overflow-x-auto pb-2 w-full">
                <h1 className="mb-4 text-2xl font-bold tracking-tight">
                    Selamat Datang di Klinik Gunung,{user.name}{" "}
                </h1>

                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="screening">Screening</TabsTrigger>
                        <TabsTrigger value="appointments">
                            Appointments
                        </TabsTrigger>
                        <TabsTrigger value="records">
                            Medical Records
                        </TabsTrigger>
                        <TabsTrigger value="charts">Health Charts</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
                                    <CardTitle className="text-sm font-medium">
                                        Screening
                                    </CardTitle>
                                    <CalendarDays className="w-4 h-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    {screening ? (
                                        <>
                                            <div className="text-2xl font-bold">
                                                {new Date(
                                                    screening.created_at
                                                ).toLocaleDateString("id-ID")}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                Hour{" "}
                                                {new Date(
                                                    screening.created_at
                                                ).toLocaleTimeString("id-ID", {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </p>
                                        </>
                                    ) : (
                                        <p className="text-xs text-muted-foreground">
                                            Kamu Belum Memiliki Screening
                                        </p>
                                    )}
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
                                    <CardTitle className="text-sm font-medium">
                                        Kujungan Terkini
                                    </CardTitle>
                                    <Activity className="w-4 h-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {visitCount}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Dalam 3 bulan terakhir
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
                                    <CardTitle className="text-sm font-medium">
                                        Lorem, ipsum dolor.
                                    </CardTitle>
                                    <Pill className="w-4 h-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        Lorem, ipsum.
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
                                    <CardTitle className="text-sm font-medium">
                                        Emergency Contact
                                    </CardTitle>
                                    <Phone className="w-4 h-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    {emergency ? (
                                        <>
                                            <div className="text-2xl font-bold">
                                                {emergency.contact}
                                            </div>
                                            <p className="mt-2 text-xs text-muted-foreground">
                                                {emergency.name}
                                            </p>
                                        </>
                                    ) : (
                                        <p className="text-xs text-muted-foreground">
                                            -
                                        </p>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Sidebar>
    );
}

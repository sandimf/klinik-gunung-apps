import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import DoctorSidebar from "@/Layouts/Dashboard/DoctorSidebarLayout"

const BodyMap = ({ bodyPartData }) => {
    const [hoveredPart, setHoveredPart] = useState(null);
    const [selectedPart, setSelectedPart] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
 

    const handleMouseEnter = (partId) => {
        setHoveredPart(partId);
    };

    const handleMouseLeave = () => {
        setHoveredPart(null);
    };

    const handleClick = (partId) => {
        if (bodyPartData[partId]) {
            setSelectedPart(partId);
            setIsDialogOpen(true);
        }
    };

    const getPartColor = (partId) => {
        if (bodyPartData[partId]) return "rgb(255, 0, 0)";
        if (partId === hoveredPart) return "rgb(200, 200, 200)";
        return "transparent";
    };

    return (
        <DoctorSidebar>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="1360px"
                viewBox="0 0 800 1360"
            >
                {/* <image
                    href="https://www.humananatomyillustrations.com/assets/images/demo/ext-image.png"
                    width="800"
                    height="1440"
                /> */}

                <path
                    id="head"
                    fill={getPartColor("head")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["head"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M346,106.834c2.04,7.695,6.667,23,6.667,33c-3.333,6.5-7.168,2.833-8.5,1.667c-1.333-1.167-6.167-12.166-7.167-15.833S333.833,109,337.833,105S345,105.001,346,106.834z M400.167,182c21.667,0,36.5-8.667,45.708-23c2.625-5.625,5-15.25,4.75-18.625c-0.708-5.125,4.708-28.041,5.709-32.708c0.667-7.333,1.666-6.667,0-38.667C454.668,37,420,18,401,18c-30.833,0-50.167,31.5-53.167,44.5c-1.915,8.295-2.833,23.5-2.5,28.167s1,12.333,0.667,16.167c2.04,7.695,6.667,23,6.667,33c0.667,5.167,1.167,12.5,3.333,18.834C359,162.667,378.5,182,400.167,182z M450.625,140.375c3.75,6.375,8.875,3.25,10-1.75s7.625-7.875,6.75-23.625s-8.041-11.666-11.041-7.333C455.333,112.334,449.917,135.25,450.625,140.375z"
                    onMouseEnter={() => handleMouseEnter("head")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("head")}
                />

                <path
                    id="neck"
                    fill={getPartColor("neck")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["neck"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M345.667,243.167c15.667-0.833,41.167-2.166,45.333,3.667c4.167,5.833,15.834,6,19.667,0c3.833-6,38.028-6.245,50.833-4.333c4.95,0.739,9.833,0.81,14.438,0.363c10.976-1.066,20.373-5.078,25.342-10.017c-8.889,0.081-18.524-5.195-31.03-10.721C454.125,215,445.625,206.25,445,203.5s0.125-34.5,0.875-44.5c-9.208,14.333-24.041,23-45.708,23C378.5,182,359,162.667,356,158.667c2.167,6.333,1.5,29.833,0.75,45.333c-8.5,15.25-40,24-48,27.5c2.042,1.655,10.695,6.598,20.857,9.508C334.793,242.493,340.373,243.448,345.667,243.167z"
                    onMouseEnter={() => handleMouseEnter("neck")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("neck")}
                />

                <path
                    id="chest"
                    fill={getPartColor("chest")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["chest"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M524.5,294c-2.018-20.749-37.75-48.25-48.562-51.137c-4.605,0.447-9.488,0.376-14.438-0.363c-12.805-1.911-47-1.667-50.833,4.333c-3.833,6-15.5,5.833-19.667,0c-4.167-5.833-29.667-4.5-45.333-3.667c-5.294,0.281-10.873-0.674-16.059-2.159c-8.004,3.48-46.033,26.426-52.127,58.308c1.013-1.67,1.948-3.439,2.793-5.316c-0.845,1.877-1.78,3.645-2.793,5.316c-0.459,2.402-0.744,4.853-0.814,7.351c-1,35.667,0.003,72.11-0.165,85.722c0.383-0.096,9.665,25.111,12.165,30.778c2.5,5.667,5.083,17.833,8.583,24.583C305.5,455.5,344,473,370.5,466s36.5-6.244,65,0.128c28.5,6.372,52.668-2.794,73.084-27.211c1.25-3.25,4.75-11.75,5.333-15s2.667-6.999,4.084-9.749c1.417-2.75,7.455-21.675,8.005-21.176C526.678,379.65,525.667,306.001,524.5,294z"
                    onMouseEnter={() => handleMouseEnter("chest")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("chest")}
                />

                <path
                    id="abdomen"
                    fill={getPartColor("abdomen")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["abdomen"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M435.5,466.128C407,459.756,397,459,370.5,466s-65-10.5-73.25-18.25c3.5,6.75,2,12,3.75,17.75s5,21.334,0.5,41.501c-4.5,20.167-1.667,35.666-0.5,40.166c0.785,3.029,2.326,5.001,1.419,8.814C314,567.5,332.834,590.5,402.917,590.5s86.417-20.498,98.75-33.499c-1.666-4.5-0.501-12,2.499-21.167s-3.499-44.667-3.833-52.833c-0.334-8.166,2.501-21.5,2.751-27.584c0.25-6.084,4.25-13.25,5.5-16.5C488.168,463.334,464,472.5,435.5,466.128z"
                    onMouseEnter={() => handleMouseEnter("abdomen")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("abdomen")}
                />
                <path
                    id="pelvis"
                    fill={getPartColor("pelvis")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["pelvis"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M402.917,590.5c-70.083,0-88.917-23-100.498-34.519c-0.44,1.851-1.458,4.137-3.419,7.188c-2.708,4.214-5.009,15.491-6.673,27.332c10.34,9.027,56.211,47.94,84.085,82.636c7.636,9.505,13.921,18.693,17.755,26.864c1-2.167,2.75-2.833,6.833-3.167s5.75,0.834,6.917,1.584c3.8-7.69,10.228-16.519,18.101-25.734c28.214-33.03,74.964-71.046,85.649-79.515c-1-13.666-8.334-31.667-10-36.167C489.334,570.002,473,590.5,402.917,590.5z"
                    onMouseEnter={() => handleMouseEnter("pelvis")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("pelvis")}
                />
                <path
                    id="shoulder_rt"
                    fill={getPartColor("shoulder_rt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["shoulder_rt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M277.48,299.316c6.094-31.881,44.123-54.828,52.127-58.308c-10.162-2.91-18.816-7.852-20.857-9.508c-8,3.5-15.5,2-26.75,4.25S240.5,249,228.5,273.5s-9.5,57-9.25,65.75c0.034,1.203,0.012,2.258-0.058,3.222C232.058,327.084,262.9,323.345,277.48,299.316z"
                    onMouseEnter={() => handleMouseEnter("shoulder_rt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("shoulder_rt")}
                />

                <path
                    id="shoulder_lt"
                    fill={getPartColor("shoulder_lt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["shoulder_lt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M524.5,294c13.5,30.001,46.022,30.211,58.595,48.44c-0.768-3.438-1.004-7.947-0.345-14.44c1.931-19.007-4.875-52.125-17.875-68.5s-53.125-26.75-63.595-26.654c-4.969,4.939-14.366,8.951-25.342,10.017C486.75,245.75,522.482,273.251,524.5,294z"
                    onMouseEnter={() => handleMouseEnter("shoulder_lt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("shoulder_lt")}
                />

                <path
                    id="arm_rt"
                    fill={getPartColor("arm_rt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["arm_rt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M276.667,306.667c0.07-2.499,0.355-4.949,0.814-7.351c-14.58,24.029-45.423,27.768-58.288,43.156c-0.436,6.049-2.914,8.093-7.442,14.778C206.5,365,196.5,396.5,193,408.5c-0.507,1.738-0.896,3.229-1.221,4.551c-1.412,17.735,10.718,25.876,24.421,31.618c11.394,4.774,24.502,8.306,33.45,1.543c0.711-1.544,1.634-3.368,2.85-5.712c3.5-6.75,23.363-47.953,24.001-48.111C276.669,378.777,275.667,342.334,276.667,306.667z"
                    onMouseEnter={() => handleMouseEnter("arm_rt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("arm_rt")}
                />

                <path
                    id="arm_lt"
                    fill={getPartColor("arm_lt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["arm_lt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M587.573,444.669c14.284-5.985,25.869-14.57,23.177-33.919c-1.625-11.25-17.875-51.25-22-57.25c-2.265-3.294-4.53-6.027-5.655-11.06C570.522,324.211,538,324.001,524.5,294c1.167,12.001,2.178,85.65,1.506,98.992c0.108,0.098,20.827,42.675,23.494,48.175C558.012,454.281,574.009,450.353,587.573,444.669z"
                    onMouseEnter={() => handleMouseEnter("arm_rl")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("arm_lt")}
                />

                <path
                    id="elbow_rt"
                    fill={getPartColor("elbow_rt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["elbow_rt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M216.2,444.669c-13.703-5.742-25.834-13.883-24.421-31.618c-1.918,7.803-1.51,9.506-8.779,18.699c-5.907,7.47-15.794,29.063-22.537,48.927c15.883-28.244,68.495,4.696,75.547,19.871c6.154-16.332,11.13-43.69,11.49-47.172c0.245-2.366,0.814-4.26,2.15-7.163C240.702,452.974,227.594,449.443,216.2,444.669z"
                    onMouseEnter={() => handleMouseEnter("arm_rt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("elbow_rt")}
                />

                <path
                    id="elbow_lt"
                    fill={getPartColor("elbow_lt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["elbow_rt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M644,484.25c-2.028-7.858-4.954-16.439-9.03-24.074c-4.97-9.31-16.414-30.066-17.72-32.176c-3.25-5.25-5.336-9.194-6.5-17.25c2.692,19.349-8.893,27.934-23.177,33.919c-13.564,5.684-29.562,9.612-38.073-3.502c2.667,5.5,7,11.333,7,17.333c0,1.363,1.692,13.781,4.385,25.353c2.187,9.397,5.372,18.235,6.115,20.147C565.5,491,629.5,447,644,484.25z"
                    onMouseEnter={() => handleMouseEnter("elbow_lt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("elbow_lt")}
                />

                <path
                    id="forearm_rt"
                    fill={getPartColor("forearm_rt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["elbow_rt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M160.463,480.677c-2.961,8.721-5.319,17.111-6.463,23.823c-2.028,11.896-8.779,39.212-16.707,62.487c-1.735,5.094-3.563,9.992-5.337,14.495c1.723,9.015,32.509,23.476,42.633,18.606c1.457-2.714,2.764-5.01,3.745-6.587c4.667-7.5,11.917-19.251,24.917-35.251s25.5-39.75,32-55.75c0.255-0.629,0.508-1.285,0.76-1.953C228.958,485.372,176.345,452.433,160.463,480.677z"
                    onMouseEnter={() => handleMouseEnter("forearm_rt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("forearm_rt")}
                />

                <path
                    id="forearm_lt"
                    fill={getPartColor("forearm_lt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["forearm_lt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M670.833,580.06c-2.89-7.643-5.898-16.096-8.083-21.56c-4-10-12.75-51-18.75-74.25C629.5,447,565.5,491,567,504c7,18,35.75,60.25,40.375,65.875s16.49,23.007,19.5,28.25C633.414,608.279,672.667,589.667,670.833,580.06z"
                    onMouseEnter={() => handleMouseEnter("forearm_lt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("forearm_lt")}
                />

                <path
                    id="wrist_rt"
                    fill={getPartColor("wrist_rt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["wrist_rt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M131.956,581.482c-5.112,12.974-9.774,22.651-10.456,24.143c-0.886,1.939-1.456,3.337-2.977,4.62c9.057,0.416,28.988,8.685,43.015,19.44c2.127-7.809,8.37-20.88,13.05-29.598C164.465,604.958,133.678,590.497,131.956,581.482z"
                    onMouseEnter={() => handleMouseEnter("wrist_rt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("wrist_rt")}
                />
                <path
                    id="wrist_lt"
                    fill={getPartColor("wrist_lt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["wrist_lt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M686.75,610.25c-8.5-4-5.75-8.25-9.5-15c-1.7-3.061-4.019-8.847-6.417-15.19c1.834,9.607-37.419,28.219-43.958,18.065c1.544,2.69,5.188,10.481,8.506,17.668c3.15,6.824,6.007,13.104,6.494,13.957C656.75,617.834,678.333,609.666,686.75,610.25z"
                    onMouseEnter={() => handleMouseEnter("wrist_lt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("wrist_lt")}
                />

                <path
                    id="hand_rt"
                    fill={getPartColor("hand_rt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["wrist_lt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M105.75,615.375c-13.375,3.75-33.125,20.25-37.75,23.25s-7.75,8.375-11.875,10.5s-4.125,8.625,0,10.5s9.625,0.125,13-1.5s9.042-8.457,15.5-10.5c3.788-1.198,7.625-1.5,7.625,0.125s-8.5,22.375-9.125,25.5s-3.875,13.875-5.875,21.125s-5.5,21.25-6.75,29.25s0.875,11.75,5.125,12.625s7.875-7.625,8.646-10.625c0.771-3,2.854-12.75,3.979-15.5s6.625-18.75,8-22s2.375-8.625,4.375-7.75s-0.375,5.875-1.75,9.75S91.75,714.875,91,718.75s-5,19.75-5.25,22.5s-1.875,8.75,2.75,10.5s7.75-1.875,9.5-5.625s5.375-17.625,7.375-26.125s5.75-19.5,7.125-24s2.125-8,3.875-7.875s1.5,2.5,0.75,4.75S111,713.5,110,718.5s-4.25,16.125-5.375,20.375s-1.75,9.25,2.5,10.75s6.875-1.5,8.75-4.75s7.875-21.5,9.369-27.125c1.494-5.625,4.756-18.5,6.131-22.375s2.5-5.625,3.625-5.5s0.25,2.625-1.125,7s-5.375,18.5-7.125,25s-2.25,9.625,0,12s7.083-0.541,8.25-2.541s3-11,5.667-16.333c1.676-3.352,3.669-11.246,6.53-19.381c1.691-4.808,4.336-9.699,5.636-13.786c3.5-11,4.333-18.833,7-28.5c2.667-9.667,0.167-11.667,1-20.167c0.096-0.974,0.344-2.156,0.705-3.482c-14.027-10.755-33.958-19.024-43.015-19.44C116.612,611.857,113.198,613.287,105.75,615.375z"
                    onMouseEnter={() => handleMouseEnter("hand_rt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("hand_rt")}
                />

                <path
                    id="hand_lt"
                    fill={getPartColor("hand_lt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["hand_lt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M740.25,640.25c-2.75-3.75-17.5-11.5-21.75-14.5c-2.125-1.5-7.938-4.375-14.281-7.375c-6.344-3-13.219-6.125-17.469-8.125c-8.417-0.584-30,7.584-44.875,19.5c1,1.75-0.875,7.125,0.125,16.25s4.125,23.25,6.375,32.125s7,18.375,8.5,22.875s9.403,29.364,12.625,32c2.75,2.25,7.5,0.75,8.25-2.75s-1.625-10.875-2.5-14.125s-5.625-19.25-6.5-21.75s-2-5.125-0.25-5.125s2.125,2.75,3.25,5.625s5.875,19.5,6.875,24.125s4.5,17,6.25,21.75s5,10,9,9.75s4.875-4.75,5.125-8.375s-5.875-23.5-6.375-27.625s-5.375-19.25-6.125-21.25s-1.375-5,0.625-5.125s2.875,5.625,3.75,8.625s9.75,31.875,10.25,35.5s2.625,14.5,6,17.75c2.744,2.643,5.625,3.875,8.625,0.875s2.25-10,0.875-15.25s-4.625-21.125-5.5-25s-6.375-20.875-7.25-24s-2.125-5.375-1.125-5.75s2.25,1.125,3.5,5.25s6.625,20.5,8.375,25.5s1.5,11.625,4.125,17.375s7,7.625,10.625,7.125s4.277-7.391,4.375-10.125c0.098-2.734-4.75-20.5-6.25-27.375s-5.25-16.625-6.5-23s-7.375-23.375-8.625-26s-0.625-4.75,2.5-3.875s9.25,2.625,13,7.625s10.875,6.75,13.375,7s8.5,0.375,9.25-6.375S743,644,740.25,640.25z"
                    onMouseEnter={() => handleMouseEnter("hand_lt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("hand_lt")}
                />

                <path
                    id="thigh_rt"
                    fill={getPartColor("thigh_rt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["thigh_rt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M292.327,590.5c-2.021,14.389-3.102,29.611-2.827,34c0.5,8-6.5,46-11.5,70c-3.981,19.107-12.131,56.915-14.376,92.477c-0.575,9.106,0.172,18.064,0.376,26.523c0.845,35.061,9.541,55.489,16.139,69.427c35.654,13.2,53.799,56.767,88.484,34.358c2.478-11.204,8.03-39.965,9.627-52.285c1.75-13.5,10.083-66.333,11.815-88.167c1.732-21.834,1.269-38.833,0.435-43.166s-0.167-12.667-0.417-21.334s3.083-10.166,4.083-12.333c-3.835-8.171-10.12-17.359-17.755-26.864C348.538,638.44,302.667,599.527,292.327,590.5z"
                    onMouseEnter={() => handleMouseEnter("thigh_rt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("thigh_rt")}
                />

                <path
                    id="thigh_lt"
                    fill={getPartColor("thigh_lt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["thigh_ltt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M426.018,672.683c-7.872,9.216-14.301,18.044-18.101,25.734c1.167,0.75,3.083,5.083,4.333,8.083s1,20.75-0.25,31.5s1.5,59.75,3.75,71s8.417,55.334,10.084,67.001c1.667,11.667,5.166,31.5,7.166,39.833c36.334,25.833,52.478-20.023,89.334-33.168c5.667-10,13.999-27.333,15.999-52.333c0.874-10.926,1.602-27.168,0.824-43.078c-1.002-20.493-3.844-40.436-5.157-47.754c-2.333-13-14.834-82.834-17-92.667s-4.333-40-5.333-53.666C500.981,601.637,454.231,639.652,426.018,672.683z"
                    onMouseEnter={() => handleMouseEnter("thigh_lt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("thigh_lt")}
                />

                <path
                    id="knee_rt"
                    fill={getPartColor("knee_rt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["thigh_rt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M280.139,882.927c1.212,2.56,2.353,4.901,3.361,7.073c6.5,14,6,37.5,6.5,61c0.078,3.657,0.262,7.679,0.348,11.922c10.591,44.449,51.025,21.222,68.904,3.937c0.325-1.35,0.929-2.658,1.373-3.483c0.875-1.625,2.125-10.625,3.375-16.625s2-18.5,4-26.75c0.175-0.721,0.386-1.642,0.623-2.715C333.938,939.693,315.793,896.127,280.139,882.927z"
                    onMouseEnter={() => handleMouseEnter("knee_rt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("knee_rt")}
                />

                <path
                    id="knee_lt"
                    fill={getPartColor("knee_lt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["knee_lt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M433,915.834c2,8.333,4.333,14.167,4.333,24s4,22.167,5.167,25c17.417,18.167,61,46.833,69.25-8.834c0-11.5,3.25-39.334,3.584-50.334c0.334-11,1.333-13,7-23C485.478,895.81,469.334,941.667,433,915.834z"
                    onMouseEnter={() => handleMouseEnter("knee_lt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("knee_lt")}
                />
                <path
                    id="leg_rt"
                    fill={getPartColor("leg_rt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["leg_rt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M290.348,962.922c0.085,4.202,0.072,8.621-0.239,13.121c-1.393,20.15-4.799,41.913-4.109,52.957c1,16,4.5,62,7.5,83s6.875,83,7.125,87.5c0.06,1.082,0.008,2.26-0.107,3.477c6.992-11.484,36.464-9.869,44.754-6.1c-1.079-3.858-2.297-10.523-2.438-15.043c-0.167-5.333,7.5-47.167,8.333-58.333c0.833-11.166,3.667-29.5,4.333-33.333s5.75-17.168,9.5-25.918s3.5-20,2.5-27.25s-3.75-45.75-4.5-51.375s-2.25-13.125-3.5-15.125c-0.615-0.985-0.563-2.333-0.248-3.642C341.372,984.144,300.939,1007.37,290.348,962.922z"
                    onMouseEnter={() => handleMouseEnter("leg_rt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("leg_rt")}
                />

                <path
                    id="reg_lt"
                    fill={getPartColor("reg_lt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["reg_lt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M442.5,964.834c1.167,2.833-1.25,16.416-4.25,33.916s-4.083,48.751-3.083,56.751s9.667,28.833,11.833,35s0.667,8.833,2,20.833s7.167,47.334,9,59s1.5,21-0.667,27.167C464,1193,500,1190.5,503.5,1206c-0.75-4.25-1.75-10-1-22.25s5-60.25,8.25-87.75s6.75-82,4.5-96.5s-3.5-32-3.5-43.5C503.5,1011.667,459.917,983.001,442.5,964.834z"
                    onMouseEnter={() => handleMouseEnter("reg_lt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("reg_lt")}
                />

                <path
                    id="ankle_rt"
                    fill={getPartColor("ankle_rt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["ankle_rt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M300.518,1202.977c-0.363,3.847-1.388,8.109-1.768,11.148c-0.5,4,2.125,8.625,1.375,15.875c-0.034,0.332-0.091,0.67-0.146,1.008c12.665-4.423,40.242,8.667,48.998,21.075c1.177-7.815,1.064-15.23-0.477-19.082c-1.667-4.166-2.167-7.167-0.833-12.5s-0.667-18.667-1.833-21.834c-0.178-0.483-0.368-1.096-0.562-1.79C336.981,1193.108,307.51,1191.493,300.518,1202.977z"
                    onMouseEnter={() => handleMouseEnter("ankle_rt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("ankle_rt")}
                />

                <path
                    id="ankle_lt"
                    fill={getPartColor("leg_rt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["leg_rt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M457.333,1197.501c-2.167,6.167-3.166,21-2.666,22.667s0.833,9.333-1,13.499c-1.833,4.166-1.667,13.334-0.667,21.5c6-13.583,37-29.917,50-23.667c-2-5.5-2.25-5.75-1-9.25s2.25-12,1.5-16.25C500,1190.5,464,1193,457.333,1197.501z"
                    onMouseEnter={() => handleMouseEnter("leg_rt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("leg_rt")}
                />

                <path
                    id="foot_rt"
                    fill={getPartColor("ankle_lt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["ankle_lt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M299.979,1231.008c-1.15,7.046-6.68,15.392-10.854,23.742c-4.375,8.75-13,19.375-21,28.25s-10.375,26.375-10.125,29.5s3.125,5.875,6.125,5.5c0,1.125,1,2.875,4.25,2.5c0.25,2,0,6.25,8.25,5c4,4.875,7.875,4.625,10.75,1.75c5.292,6.314,10.383,6.492,15.75,5.809c4.375-0.558,11.125-7.809,12.25-10.559s2.25-3.875,5.875-6.75c1.972-1.563,3.795-4.086,5.156-8.824c1.141-3.973,1.957-10.098,2.261-12.758c0.667-5.833,0.667-10.834,4.5-21.334c8.667-3.667,14-10.333,15.5-18.833c0.113-0.641,0.215-1.28,0.311-1.918C340.221,1239.676,312.644,1226.585,299.979,1231.008z"
                    onMouseEnter={() => handleMouseEnter("ankle_lt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("ankle_lt")}
                />

                <path
                    id="foot_lt"
                    fill={getPartColor("foot_lt")}
                    stroke="#8C8C8C"
                    strokeWidth={bodyPartData["foot_lt"] ? "2" : "1"}
                    vectorEffect="non-scaling-stroke"
                    d="M453,1255.167c1,8.166,12,15,15,16.5s3,4.167,3.833,7c0.833,2.833,2.834,10.667,3.834,21s6.25,15.749,8.666,17.666c2.416,1.917,2.834,3,3.667,4.667s3.417,6.083,11.167,9.75s14.999-1.167,16.749-4.75c4.5,4.5,11.084,0.416,12.25-2.084c4.916,1.416,7.834-3.25,7.917-5.166c1.583,0.334,3.584-1.082,4.25-2.582c0.833,0.334,2.5,0.666,5-3.334s-3-17.5-4.167-21.667s-9.666-14.833-16.333-21.833s-7.833-11.333-12.5-18.667C507.666,1244.333,505,1237,503,1231.5C490,1225.25,459,1241.584,453,1255.167z"
                    onMouseEnter={() => handleMouseEnter("foot_lt")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("foot_lt")}
                />
            </svg>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                            {selectedPart}
                        </DialogTitle>
                        <DialogDescription className="text-lg">
                            {bodyPartData[selectedPart]}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6 flex justify-end">
                        <Button onClick={() => setIsDialogOpen(false)}>
                            Close
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </DoctorSidebar>
    );
};

export default BodyMap;

"use client";
import React, { MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { Box, CardMedia } from "@mui/material";

export default function MagnifierImg({ sampleImg }: { sampleImg: any }) {
    // Constants for magnifier size and zoom level
    const MAGNIFIER_SIZE = 200;
    const ZOOM_LEVEL = 3;

    // magnifierImg componenta
    // State variables
    const [zoomable, setZoomable] = useState(true);
    const [imageSize, setImageSize] = useState<any>({
        width: "100%",
        height: "100%",
    });
    const [position, setPosition] = useState({
        x: 1000,
        y: 1000,
        mouseX: 100,
        mouseY: 100,
    });

    // Event handlers
    const handleMouseEnter = (e: MouseEvent) => {
        let element = e.currentTarget;
        let { width, height } = element.getBoundingClientRect();
        setImageSize({ width, height });
        setZoomable(true);
        updatePosition(e);
    };

    const handleMouseLeave = (e: MouseEvent) => {
        setZoomable(false);
        updatePosition(e);
    };

    const handleMouseMove = (e: MouseEvent) => {
        updatePosition(e);
    };

    const updatePosition = (e: MouseEvent) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - left;
        let y = e.clientY - top;
        setPosition({
            x: -x * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
            y: -y * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
            mouseX: x - MAGNIFIER_SIZE / 2,
            mouseY: y - MAGNIFIER_SIZE / 2,
        });
    };
    // https://m.media-amazon.com/images/I/61eLvunkWML._AC_SX569_.jpg
    // Render method
    return (
        <Box className="flex min-h-[500px]  max-h-[800px] max-xl:max-h-[800px] max-lg:max-h-[500px] max-lg:w-full w-[600px]    justify-center items-center ">
            <div
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                className="bg-[rgba(0,0,0,0.03)] relative flex justify-center items-center  overflow-hidden  "
            >
                <CardMedia
                    className="max-h-[800px] max-xl:max-h-[800px] max-lg:max-h-[500px] p-1 max-lg:max-w-full flex justify-center items-center object-contain  z-10 "
                    alt=""
                    component="img"
                    image={sampleImg}
                />
                <div
                    style={{
                        backgroundPosition: `${position.x}px ${position.y}px`,
                        backgroundImage: `url(${sampleImg})`,
                        backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${imageSize.height * ZOOM_LEVEL}px`,
                        backgroundRepeat: "no-repeat",
                        display: zoomable ? "block" : "none",
                        top: `${position.mouseY}px`,
                        left: `${position.mouseX}px`,
                        width: `${MAGNIFIER_SIZE}px`,
                        height: `${MAGNIFIER_SIZE / 1.2}px`,
                    }}
                    className={`flex  max-md:!hidden justify-contain  object-cover z-50 border-4 border-transparent rounded-sm cursor-zoom-in  absolute `}
                />
            </div>
        </Box>
    );
};


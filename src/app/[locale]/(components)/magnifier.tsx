'use client'
import React, {
    MouseEvent, useEffect, useState,
} from 'react';
import Image from 'next/image';
import { Box, CardMedia } from '@mui/material';

// Constants for magnifier size and zoom level
const MAGNIFIER_SIZE = 180;
const ZOOM_LEVEL = 3;

// magnifierImg componenta
const MagnifierImg = ({ sampleImg }: { sampleImg: any }) => {
    // State variables
    const [zoomable, setZoomable] = useState(true);
    const [imageSize, setImageSize] = useState<any>({ width: "100%", height: "100%" });
    const [position, setPosition] = useState({ x: 100, y: 100, mouseX: 0, mouseY: 0 });

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
            x: -x * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
            y: -y * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
            mouseX: x - (MAGNIFIER_SIZE / 2),
            mouseY: y - (MAGNIFIER_SIZE / 2),
        });
    };

    // Render method
    return (
        <Box>
            <div
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                style={{
                    width: "40vw",
                    height: "auto",
                    position: "relative",
                    overflow: "hidden"
                }}>
                <CardMedia className='object-cover border z-10'
                    alt=""
                    component="img"
                    image={sampleImg} />
                <div
                    style={{
                        backgroundPosition: `${position.x}px ${position.y}px`,
                        backgroundImage: `url(${sampleImg})`,
                        backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${imageSize.height * ZOOM_LEVEL}px`,
                        backgroundRepeat: 'no-repeat',
                        display: zoomable ? 'block' : 'none',
                        top: `${position.mouseY}px`,
                        left: `${position.mouseX}px`,
                        width: `${MAGNIFIER_SIZE}px`,
                        height: `${MAGNIFIER_SIZE}px`,
                    }}
                    className={`object-cover z-50 border-4 rounded-full pointer-events-none absolute border-gray-500`}
                />
            </div>
        </Box>
    );
};

export default MagnifierImg;
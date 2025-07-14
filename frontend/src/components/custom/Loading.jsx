import React from 'react';
import '@/css/Loading.css'; // Make sure this path is correct

const Loading = () => {
    return (
        <div
            className="loading flex items-center justify-center h-screen bg-gradient-to-r from-[#e0c8f2] to-[#e9b3d8] dark:from-[#4a0040] dark:to-[#9B177E]"
            role="status"
            aria-label="Loading animation"
        >
            <svg
                viewBox="0 0 187.3 93.7"
                height="200px"
                width="300px"
                className="svgbox"
            >
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop stopColor="pink" offset="0%" />
                        <stop stopColor="blue" offset="100%" />
                    </linearGradient>
                </defs>

                <path
                    stroke="url(#gradient)"
                    fill="none"
                    strokeWidth="8"
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5
                    c-9.7,0.1-13.3,7.2-22.1,17.1c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                />
            </svg>
        </div>
    );
};

export default Loading;

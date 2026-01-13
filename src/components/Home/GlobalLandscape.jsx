"use client";

import React from "react";
import Image from "next/image";

const countries = [
    {
        name: "Canada",
        flag: "https://flagcdn.com/w80/ca.png",
        top: "40%",
        left: "15%",
    },
    {
        name: "India",
        flag: "https://flagcdn.com/w80/in.png",
        top: "55%",
        right: "15%",
    },
    {
        name: "Nepal",
        flag: "https://flagcdn.com/w80/np.png",
        top: "38%",
        right: "25%",
    },
    {
        name: "Singapore",
        flag: "https://flagcdn.com/w80/sg.png",
        top: "85%",
        left: "20%",
    },
    {
        name: "Philippines",
        flag: "https://flagcdn.com/w80/ph.png",
        top: "55%",
        left: "10%",
    },
    {
        name: "Laos",
        flag: "https://flagcdn.com/w80/la.png",
        top: "68%",
        left: "15%",
    },
    {
        name: "Myanmar",
        flag: "https://flagcdn.com/w80/mm.png",
        top: "70%",
        right: "15%",
    },
    {
        name: "Cambodia",
        flag: "https://flagcdn.com/w80/kh.png",
        top: "88%",
        right: "15%",
    },
];

const GlobalLandscape = () => {
    return (
        <section className="relative 2xl:h-[90vh] h-screen md:py-8 2xl:pt-2 overflow-hidden bg-white selection:bg-black selection:text-white">
            {/* Background Watermark Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <h1 className="text-[18vw] font-bold text-[#F5F5F5] uppercase tracking-tighter opacity-80 leading-none">
                    WORLDWIDE
                </h1>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                {/* Headings */}
                <div className="relative z-30 space-y-4">
                    <h3 className="text-4xl md:text-6xl font-semibold text-gray-900 hover:text-[#ea9237] transition-colors duration-300 cursor-default">
                        Global Operations, Local Impact
                    </h3>
                    <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                        We combine regulatory expertise, market insights, and innovation to bridge therapy gaps and elevate healthcare worldwide.
                    </p>
                </div>

                {/* Globe and Markers Container */}
                <div className="-mt-32 relative w-full max-w-4xl mx-auto aspect-square flex items-center justify-center">
                    {/* Wireframe Globe SVG */}
                    <div className="absolute inset-0 flex items-center justify-center animate-pulse-slow">
                        <img src="/globe1.png" alt="" className="bg-opacity-10" />
                    </div>

                    {/* Markers */}
                    {countries.map((country, index) => (
                        <div
                            key={index}
                            className="-mt-40 absolute group z-20 transition-all duration-500 hover:scale-110"
                            style={{
                                top: country.top,
                                left: country.left,
                                right: country.right,
                            }}
                        >
                            <div className="flex items-center gap-6 px-4 py-2 bg-white/70 backdrop-blur-md border border-white/50 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-all cursor-pointer">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-100 shadow-sm">
                                    <img
                                        src={country.flag}
                                        alt={`${country.name} flag`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-sm md:text-lg font-semibold text-gray-800 whitespace-nowrap">
                                    {country.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default GlobalLandscape;

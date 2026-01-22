"use client";

import React from "react";

const countries = [
    { name: "Canada", flag: "https://flagcdn.com/w80/ca.png", top: "40%", left: "15%" },
    { name: "India", flag: "https://flagcdn.com/w80/in.png", top: "55%", right: "15%" },
    { name: "Nepal", flag: "https://flagcdn.com/w80/np.png", top: "38%", right: "25%" },
    { name: "Singapore", flag: "https://flagcdn.com/w80/sg.png", top: "85%", left: "20%" },
    { name: "Philippines", flag: "https://flagcdn.com/w80/ph.png", top: "55%", left: "10%" },
    { name: "Laos", flag: "https://flagcdn.com/w80/la.png", top: "68%", left: "15%" },
    { name: "Myanmar", flag: "https://flagcdn.com/w80/mm.png", top: "70%", right: "15%" },
    { name: "Cambodia", flag: "https://flagcdn.com/w80/kh.png", top: "88%", right: "15%" },
];

const GlobalLandscape = () => {
    return (
        <section className="relative h-auto md:h-screen 2xl:h-[90vh] py-16 md:py-8 2xl:pt-2 overflow-hidden bg-white">

            {/* Background Watermark */}
            <div className="absolute inset-0 md:top-0 top-10 flex items-center justify-center pointer-events-none select-none">
                <h1 className="text-[20vw] md:text-[18vw] font-bold text-[#F5F5F5] uppercase tracking-tighter opacity-80 leading-none">
                    WORLDWIDE
                </h1>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">

                {/* Headings */}
                <div className="relative z-30 space-y-4">
                    <h3 className="text-2xl sm:text-3xl md:text-6xl font-semibold text-gray-900 hover:text-[#ea9237] transition-colors">
                        Global Operations, Local Impact
                    </h3>
                    <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-xl text-gray-500 font-medium leading-relaxed">
                        We combine regulatory expertise, market insights, and innovation to bridge therapy gaps and elevate healthcare worldwide.
                    </p>
                </div>

                {/* Globe */}
                <div className="relative mt-1 md:-mt-32 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto aspect-square flex items-center justify-center">

                    {/* Globe Image */}
                    <div className="absolute inset-0 flex items-center justify-center animate-pulse-slow">
                        <img
                            src="/globe1.png"
                            alt=""
                            className="
                                w-full h-full
                                md:w-[85%] md:h-[85%]
                                lg:w-[75%] lg:h-[75%]
                                opacity-90
                            "
                        />
                    </div>

                    {/* Country Markers */}
                    {countries.map((country, index) => (
                        <div
                            key={index}
                            className="
                                absolute z-20 transition-transform duration-300
                                scale-75 sm:scale-90 md:scale-100
                                md:-mt-40
                            "
                            style={{
                                top: country.top,
                                left: country.left,
                                right: country.right,
                            }}
                        >
                            <div className="
                                flex items-center gap-2 md:gap-6 md:mt-0 -mt-20
                                px-3 py-1.5 md:px-4 md:py-2
                                bg-white/80 backdrop-blur-md
                                border border-white/50
                                rounded-full shadow-md
                            ">
                                <div className="relative w-6 h-6 md:w-10 md:h-10 rounded-full overflow-hidden border">
                                    <img
                                        src={country.flag}
                                        alt={country.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-xs sm:text-sm md:text-lg font-semibold text-gray-800 whitespace-nowrap">
                                    {country.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalLandscape;

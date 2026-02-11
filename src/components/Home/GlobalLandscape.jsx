"use client";
import { useEffect, useState } from "react";

function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return isDesktop;
}

const countries = [

    {
        name: "India",
        flag: "https://flagcdn.com/w80/in.png",
        mobile: { top: "45%", left: "72%" },
        desktop: { top: "25%", right: "15%" },
    },
    {
        name: "Nepal",
        flag: "https://flagcdn.com/w80/np.png",
        mobile: { top: "25%", left: "70%" },
        desktop: { top: "18%", right: "25%" },
    },
     {
        name: "China",
        flag: "https://flagcdn.com/w80/cn.png",
        mobile: { top: "40%", left: "80%" },
        desktop: { top: "33%", right: "5%" },
    },
    {
        name: "Bangladesh",
        flag: "https://flagcdn.com/w80/bd.png",
        mobile: { top: "50%", left: "72%" },
        desktop: { top: "40%", right: "12%" },
    },
      {
        name: "Pakistan",
        flag: "https://flagcdn.com/w80/pk.png",
        mobile: { top: "46%", left: "68%" },
        desktop: { top: "50%", right: "12%" },
    },

    {
        name: "Myanmar",
        flag: "https://flagcdn.com/w80/mm.png",
        mobile: { top: "65%", left: "65%" },
        desktop: { top: "60%", right: "10%" },
    },
    {
        name: "Cambodia",
        flag: "https://flagcdn.com/w80/kh.png",
        mobile: { top: "78%", left: "48%" },
        desktop: { top: "72%", right: "15%" },
    },
   










    {
        name: "Canada",
        flag: "https://flagcdn.com/w80/ca.png",
        mobile: { top: "22%", left: "15%" },
        desktop: { top: "20%", left: "15%" }, // ⬅ moved right (was 65%)
    },
    {
        name: "Singapore",
        flag: "https://flagcdn.com/w80/sg.png",
        mobile: { top: "72%", left: "12%" },
        desktop: { top: "30%", left: "10%" }, // ⬅ moved right (was -80%)
    },
    {
        name: "Philippines",
        flag: "https://flagcdn.com/w80/ph.png",
        mobile: { top: "40%", left: "6%" },
        desktop: { top: "40%", left: "10%" }, // ⬅ moved right (was 10%)
    },
    {
        name: "Vietnam",
        flag: "https://flagcdn.com/w80/vn.png",
        mobile: { top: "60%", left: "15%" },
        desktop: { top: "50%", left: "15%" },
    },
   
    {
        name: "Argentina",
        flag: "https://flagcdn.com/w80/ar.png",
        mobile: { top: "68%", left: "20%" },
        desktop: { top: "60%", left: "20%" },
    },
     {
        name: "Laos",
        flag: "https://flagcdn.com/w80/la.png",
        mobile: { top: "52%", left: "10%" },
        desktop: { top: "70%", left: "20%" }, // ⬅ moved right (was 85%)
    },
   
    

];


const GlobalLandscape = () => {
    const isDesktop = useIsDesktop();

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

                    {countries.map((country, index) => {
                        const position = isDesktop ? country.desktop : country.mobile;

                        return (
                            <div
                                key={index}
                                className="absolute z-20 transition-transform duration-300 scale-75 md:scale-100"
                                style={{
                                    top: position.top,
                                    left: position.left,
                                    right: position.right,
                                }}
                            >
                                <div className="
        flex items-center gap-2 md:gap-6
        px-3 py-1.5 md:px-4 md:py-2
        bg-white/80 backdrop-blur-md
        border border-white/50
        rounded-full shadow-md
      ">
                                    <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border">
                                        <img
                                            src={country.flag}
                                            alt={country.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-xs sm:text-lg md:text-xl font-semibold text-gray-800 whitespace-nowrap">
                                        {country.name}
                                    </span>
                                </div>
                            </div>
                        );
                    })}


                </div>
            </div>
        </section>
    );
};

export default GlobalLandscape;

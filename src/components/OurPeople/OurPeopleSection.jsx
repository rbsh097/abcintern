import React from "react";

export default function OurPeopleSection() {
    return (
        <section className="py-10 bg-white pt-30 h-auto lg:h-[95vh]">
            <div className="container mx-auto px-4 lg:px-0
                grid grid-cols-1
                lg:grid-rows-[2.2fr_1fr]
                gap-4
            ">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-[2rem]">

                    {/* TEXT + BG IMAGE */}
                    <div
                        style={{ backgroundImage: "url('/peeps/2.png')" }}
                        className="w-full bg-cover bg-center bg-no-repeat rounded-[2rem] flex"
                    >
                        <div className="p-6 sm:p-8 lg:p-12 2xl:p-20 rounded-[2rem] flex flex-col justify-center">
                            <h1 className="text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl font-bold text-black tracking-tight mb-6 hover:text-[#e57f00]">
                                Our People
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-black/80 font-medium leading-relaxed max-w-xl">
                                ABC International is supported by a team of like-minded and highly experienced professionals who united with a shared vision of building a trusted healthcare organization. This vision is driven by strong values, customer-centricity, ethical governance, CSR, and recognition of employee contributions.
                            </p>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="w-full h-[260px] sm:h-[340px] lg:h-full">
                        <img
                            src="/peeps/1.png"
                            alt="Our Team"
                            className="w-full h-full object-cover rounded-[2rem]"
                        />
                    </div>
                </div>

                {/* BOTTOM TEXT BLOCK */}
                <div className="w-full bg-gray-100 rounded-[2rem]
                    flex items-center
                    px-6 sm:px-8 lg:px-12
                    py-8 lg:py-0
                ">
                    <p className="text-sm sm:text-base lg:text-lg text-black/80 font-medium leading-relaxed max-w-7xl">
                        ABC International is backed by a team of like-minded and highly experienced professionals who came together with a shared vision of creating a trusted healthcare organization of repute, driven by values, customer centricity, ethical governance, and CSR where employees are recognized for the unique contributions they make every day.
                    </p>
                </div>

            </div>
        </section>
    );
}

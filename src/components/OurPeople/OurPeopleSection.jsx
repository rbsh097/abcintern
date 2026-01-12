import React from "react";

export default function OurPeopleSection() {
    return (
        <section className=" py-10 h-[95vh] bg-white mt-20">
            {/* Left Column: Vertical Split */}
            <div className="container mx-auto grid grid-rows-2 gap-4">
                <div className="w-full grid grid-cols-2 gap-4  rounded-[2rem] ">
                    {/* Top Half: Background Image */}
                    <div
                        style={{ backgroundImage: "url('/p.png')" }}
                        className=" w-full bg-cover bg-center bg-no-repeat rounded-[2rem] "
                    >
                        {/* Optional overlay or empty if image is the primary focus */}
                        <div className="p-6 rounded-[2rem]">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black  tracking-tight p-6 hover:text-[#e57f00]">
                                Our People
                            </h1>
                            <p className="text-lg md:text-lg text-black/80 font-medium leading-relaxed p-6">
                                ABC International is supported by a team of like-minded and highly experienced professionals who united with a shared vision of establishing a reputable and trusted healthcare organization. This vision is underpinned by shared values and a strong commitment to customer-centricity, all while upholding the highest standards of corporate governance and demonstrating a dedication to Corporate Social Responsibility (CSR). Additionally, we make it a priority to acknowledge and appreciate our employees for their unique contributions each day.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">

                        <img
                            src="/p1.png"
                            alt="Our Team"
                            className="w-full h-full object-cover rounded-[2rem]"
                        />
                    </div>


                    {/* Bottom Half: Yellow Background with Text */}

                </div>

                {/* Right Column: Full Height Image */}
                <div className="h-full lg:h-1/3 bg-gray-100 flex flex-col justify-center px-8 md:px-8 py-16 lg:py-0 rounded-[2rem]">
                    <p className="text-lg md:text-lg p-6 text-black/80 font-medium leading-relaxed">
                        ABC International is backed by a team of like minded and highly experienced professionals who came together with a shared vision of creating a trusted healthcare organisation of repute that is driven by shared values and customer centricity while adhering to highest forms of corporate governance & committed to CSR where employees are recognised for the unique contribution they make every day.
                    </p>
                </div>

            </div>
        </section>
    );
}
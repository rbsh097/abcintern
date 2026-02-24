import React from 'react';
import Image from 'next/image';

const PeopleHighlight = () => {
    return (
        <section className="bg-white md:pb-24 p-4 md:pt-32 2xl:pt-30">
            <div className="container mx-auto">
                <div className="bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f] rounded-[2.5rem] overflow-hidden relative min-h-[400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        {/* Left Side: Text (Wider) */}
                        <div className="lg:col-span-7 p-8 md:p-10 2xl:p-12 lg:p-10 text-black">
                            <h1 className='text-4xl md:text-4xl font-medium  mb-4'>Chairman's Message</h1>
                            <div className="space-y-4">
                                <p className="text-black/90 text-sm md:text-base 2xl:text-lg leading-relaxed font-medium">
                                   ABC International provides access to high-quality & affordable Healthcare products and services to its customers with an objective to bridge the therapy gaps. Since its incorporation in 2016, the company has witnessed a steady growth in the pharmaceutical industry of Myanmar, gaining market share in critical therapeutic segments such as Biosimilars, Oncology, hematology, nephrology, Endocrinology, dermatology, respiratory, cardiovascular, anti-diabetics, Oral healthcare, nutraceuticals, etc.
                                </p>
                                <p className="text-black/90 text-sm md:text-base 2xl:text-lg leading-relaxed font-medium">
                                    While the differentiated products and services have been the growth drivers, we believe that our success is orchestrated by our people, guided by the philosophy of execution excellence within the ecosystem governed by our core values. We are a dedicated team of experienced industry experts and energetic professionals working tirelessly towards our mission to be a leading player in the healthcare space in South East Asia.
                                </p>
                                <p className="text-black/90 text-sm md:text-base 2xl:text-lg leading-relaxed font-medium">
                                    We envision our company to be a valued partner for our esteemed customers, exhibiting their unwavering trust in our offerings and to be an organization, seen by our people as a great place to work.
                                </p>
                                <p className="text-black/90 text-sm md:text-base 2xl:text-lg leading-relaxed font-medium">
                                    We express our gratitude to our esteemed clients who helped us in achieving the growth trajectory we have set ourselves on and we look forward to their continued support.
                                </p>
                            </div>

                            <div className="mt-8">
                                <p className="text-black font-bold text-lg">Your Sincerely,</p>
                                <p className="text-black font-extrabold text-2xl md:text-3xl mt-1 ">Rajeev Rawal</p>
                            </div>
                        </div>

                        {/* Right Side: Image (Smaller) */}
                        <div className="lg:col-span-5 h-[650px] 2xl:h-[800px] lg:h-full relative min-h-[300px]">
                            <img
                                src="/chairman1.png"
                                alt="Our Team"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Gradient Overlay for mobile */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#ef662e] via-transparent to-transparent lg:hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeopleHighlight;

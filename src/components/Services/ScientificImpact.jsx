"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Laptop, Ship, Megaphone, Truck, FileCheck, ShieldCheck, Users } from "lucide-react";

const servicesData = [
    {
        id: "01",
        name: "Pharmaceutical Consultation",
        icon: <Ship />,
        heading: "Pharmaceutical Consultation",
        description: "Backed with deep understanding of the pharmaceutical value chain and Myanmar market, ABC International offers end-to-end pharmaceutical consultation services.",
        highlights: [
            "Market entry strategy for global healthcare and pharma companies",
            "Portfolio development & sourcing support",
            "Assistance in setting up manufacturing facilities in Myanmar",
            "Liaising for turnkey projects for global clients",
        ],
        progress: 16
    },
    {
        id: "02",
        name: "Regulatory",
        icon: <Megaphone />,
        heading: "Regulatory",
        description: "FDA requires every pharmaceutical and healthcare product to be registered before import into Myanmar. ABC International manages the entire regulatory process on behalf of its clients.",
        highlights: [
            "Product registration for drugs, OTC, medical devices, cosmetics & food",
            "Handling renewals and lifecycle maintenance of registrations",
            "Variation filings and documentation follow-up",
            "End-to-end regulatory coordination with authorities",
        ],
        progress: 32
    },
    {
        id: "03",
        name: "Trademark Registration",
        icon: <Truck />,
        heading: "Trademark Registration",
        description: "To protect the intellectual property of its clients, ABC International provides complete Trademark Registration services.",
        highlights: [
            "End-to-end trademark registration process management",
            "Filing in the name of the client for brand protection",
            "Timely and cost-effective execution",
            "Ongoing support for renewals and related IP matters",
        ],
        progress: 48
    },
    {
        id: "04",
        name: "Marketing",
        icon: <FileCheck />,
        heading: "Marketing",
        description: "ABC International offers comprehensive marketing solutions with strong in-house sales, marketing, and supply chain capabilities.",
        highlights: [
            "Dedicated team with expertise in CRM, sales & marketing, and SCM",
            "Brand-building for global pharma majors in Myanmar",
            "Strategic market positioning and promotional planning",
            "Data-driven approach to grow prescription and product uptake",
        ],
        progress: 64
    },
    {
        id: "05",
        name: "Importation",
        icon: <ShieldCheck />,
        heading: "Importation",
        description: "ABC International has an established framework to import products from multiple countries across the globe.",
        highlights: [
            "Imports managed from various international manufacturing locations",
            "Unique model to mitigate intellectual property risks",
            "Maintaining Drug Registration Certificates (DRCs) on behalf of clients",
            "Import handling for further distribution within Myanmar",
        ],
        progress: 82
    },
    {
        id: "06",
        name: "Distribution",
        icon: <Users />,
        heading: "Distribution",
        description: "With a countrywide network, ABC International provides seamless distribution services for all dosage forms and cold chain products.",
        highlights: [
            "Nationwide coverage via captive warehouses, branches, and dealers",
            "Cost-effective, quality distribution across all product categories",
            "Specialized handling of Oncology, Bio-similar, and other cold chain products",
            "Reliable last-mile delivery to healthcare providers and partners",
        ],
        progress: 100
    }
];

const ScientificImpact = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = servicesData[activeIndex];

    return (
        <section className="py-16  bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-[#f2f2f2] rounded-[2.5rem] overflow-hidden p-6  flex flex-col md:flex-row gap-12 items-center">

                    {/* Left Column: Image with Overlays */}
                    <div className="relative w-full md:w-1/2 rounded-[2rem] overflow-hidden group min-h-[80vh]">
                        <img
                            src="/s.png"
                            alt="Scientific Research"
                            className="absolute  w-full h-full object-cover transition-transform duration-700 "
                        />

                        {/* 6 Floating Service Chips */}
                        <div className="absolute inset-0 p-6 md:p-8">
                            {[
                                { index: 0, top: "5%" },
                                { index: 1, top: "20%" },
                                { index: 2, top: "35%" },
                                { index: 3, top: "50%" },
                                { index: 4, top: "65%" },
                                { index: 5, top: "80%" },
                            ].map((pos, i) => {
                                const service = servicesData[pos.index];
                                const isActive = activeIndex === pos.index;
                                return (
                                    <div
                                        key={i}
                                        onMouseEnter={() => setActiveIndex(pos.index)}
                                        className={`absolute flex gap-3 px-6 py-6 bg-white text-black rounded-lg transition-all duration-300 cursor-pointer animate-fade-in ${isActive
                                            ? "bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f] hover:text-black  scale-[1.02] z-20"
                                            : "border-white/30 hover:bg-white/60 hover:scale-[1.01] z-10"
                                            }`}
                                        style={{
                                            top: pos.top,
                                            bottom: pos.bottom,
                                            left: "1.5rem",
                                            right: "1.5rem",
                                            animationDelay: `${i * 150}ms`
                                        }}
                                    >
                                        <div className={`w-8 h-8 *:w-full *:h-full ${isActive ? "text-black" : "text-black"}`}>
                                            {service.icon}
                                        </div>
                                        <span className="text-sm md:text-xl font-bold text-black">
                                            {service.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full md:w-1/2 space-y-8 transition-opacity duration-300">
                        {/* Index and Progress Bar */}
                        <div className="space-y-6">
                            <span className="text-2xl font-bold text-gray-900">{activeService.id}</span>
                            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#ff4d1c] rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${activeService.progress}%` }}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-300">
                                {activeService.heading}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed transition-all duration-300">
                                {activeService.description}
                            </p>
                        </div>

                        {/* Highlights Box */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 space-y-6  border border-gray-100 min-h-[250px] transition-all duration-300">
                            {activeService.highlights.map((text, index) => (
                                <div key={index} className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                                    <div className="bg-black rounded-full p-1.5 mt-1 shrink-0">
                                        <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                                    </div>
                                    <p className="text-gray-800 font-medium text-sm md:text-base leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Learn More Button */}
                        {/* <button className="group flex items-center gap-3 bg-black text-white px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all duration-300">
                            <span className="font-bold text-lg">Learn More</span>
                            <div className="bg-white/10 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="w-5 h-5 text-white" />
                            </div>
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScientificImpact;

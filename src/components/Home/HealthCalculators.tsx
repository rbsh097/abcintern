'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Activity } from 'lucide-react';

const calculators = [
    {
        type: "bmi",
        title: "BMI Calculator",
        icon: "/calculator/3.png",
        href: "/calculators?type=bmi",
        description: "Calculate your Body Mass Index (BMI) to understand if you are at a healthy weight for your height. It's a quick and useful screening tool used globally by health professionals."
    },
    {
        type: "bmr",
        title: "BMR Calculator",
        icon: "/calculator/1.png",
        href: "/calculators?type=bmr",
        description: "Determine your Basal Metabolic Rate (BMR) to understand exactly how many calories your body needs to maintain basic functions. Essential for planning nutrition and fitness goals."
    },
    {
        type: "bodyfat",
        title: "Body Fat Calculator",
        icon: "/calculator/2.png",
        href: "/calculators?type=bodyfat",
        description: "Estimate your body fat percentage to get a clearer picture of your overall body composition and metabolic health, providing insights beyond just weight."
    },
    {
        type: "heartrate",
        title: "Heart Rate Zone",
        icon: "/calculator/4.png",
        href: "/calculators?type=heartrate",
        description: "Identify your heart rate zones to optimize your training. Whether you're aiming for fat burn or peak performance, work out more effectively."
    }
];

const HealthCalculators = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-16 md:py-24 bg-gray-200 px-4 md:px-6">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-medium uppercase text-black mb-4 md:mb-6 hover:text-[#ea9237]">
                        Health Tools & Calculators
                    </h2>
                    <p className="text-gray-500 text-base md:text-xl font-medium px-2">
                        Quickly assess your key health metrics with our pro-grade calculators. Precise, science-backed tools designed to help you monitor your journey toward a healthier lifestyle.
                    </p>
                </div>

                {/* Grid Section - Showcasing UI */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-16 lg:gap-y-8 max-w-7xl mx-auto">
                    {calculators.map((calc, index) => (
                        <Link
                            href={calc.href}
                            key={calc.type}
                            className="relative group cursor-pointer block"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Image/Icon Wrapper - Styled like Showcasing cards */}
                            <div className={`relative h-48 md:h-56 rounded-3xl overflow-hidden flex items-center justify-center transition-all duration-500 bg-white shadow-sm group-hover:shadow-md`}>

                                <Image
                                    src={calc.icon}
                                    alt={calc.title}
                                    width={180}
                                    height={180}
                                    className="object-contain transition-transform duration-700 group-hover:scale-110 md:w-[220px] md:h-[220px]"
                                />
                            </div>

                            {/* Floating Content Box - Matches Showcasing style */}
                            <div className="-mt-6 md:-mt-7 px-4 md:px-6 relative z-10 w-full">
                                <div className="bg-gray-200 rounded-[2.5rem] px-4 py-2 w-full border border-gray-100 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg lg:text-lg font-medium text-black truncate pr-2">
                                            {calc.title}
                                        </h3>
                                        <div className="bg-black group-hover:bg-[#ea9237] text-white w-8 h-8 lg:w-6 lg:h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HealthCalculators;

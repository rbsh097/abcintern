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
        icon: "/images/calculators/bmi.png",
        href: "/calculators?type=bmi",
        description: "Calculate your Body Mass Index (BMI) to understand if you are at a healthy weight for your height. It's a quick and useful screening tool used globally by health professionals."
    },
    {
        type: "bmr",
        title: "BMR Calculator",
        icon: "/images/calculators/bmr.png",
        href: "/calculators?type=bmr",
        description: "Determine your Basal Metabolic Rate (BMR) to understand exactly how many calories your body needs to maintain basic functions. Essential for planning nutrition and fitness goals."
    },
    {
        type: "bodyfat",
        title: "Body Fat Calculator",
        icon: "/images/calculators/bodyfat.png",
        href: "/calculators?type=bodyfat",
        description: "Estimate your body fat percentage to get a clearer picture of your overall body composition and metabolic health, providing insights beyond just weight."
    },
    {
        type: "heartrate",
        title: "Heart Rate Zone",
        icon: "/images/calculators/heartrate.png",
        href: "/calculators?type=heartrate",
        description: "Identify your heart rate zones to optimize your training. Whether you're aiming for fat burn or peak performance, work out more effectively."
    }
];

const HealthCalculators = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f] px-4 md:px-6">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium uppercase text-black mb-6 hover:text-[#ea9237]">
                        Health Tools & Calculators
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl font-medium">
                        Quickly assess your key health metrics with our pro-grade calculators. Precise, science-backed tools designed to help you monitor your journey toward a healthier lifestyle.
                    </p>
                </div>

                {/* Grid Section - Showcasing UI */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, staggerChildren: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-8 max-w-7xl mx-auto"
                >
                    {calculators.map((calc, index) => (
                        <motion.div
                            key={calc.type}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <Link
                                href={calc.href}
                                className="relative group cursor-pointer block"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Image/Icon Wrapper - Styled like Showcasing cards */}
                                <div className={`relative h-56 rounded-3xl overflow-hidden border-2 flex items-center justify-center transition-all duration-500 bg-gray-50`}>
                                    {calc.type === "heartrate" ? (
                                        <div className="w-full h-full bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                            <Activity className="w-24 h-24 text-white animate-pulse" />
                                        </div>
                                    ) : (
                                        <Image
                                            src={calc.icon}
                                            alt={calc.title}
                                            width={420}
                                            height={220}
                                            className="object-cover transition-transform duration-700 "
                                        />
                                    )}
                                    {/* Background glow effect on hover */}
                                    <div className="absolute inset-0 bg-white/5 transition-opacity duration-500"></div>
                                </div>

                                {/* Floating Content Box - Matches Showcasing style */}
                                <div className="-mt-7 px-6  relative z-10 w-full">
                                    <div
                                        className="bg-gray-200 rounded-[2.5rem] px-4 py-2 w-full border border-gray-100"
                                    >
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl lg:text-lg font-medium text-black  ">
                                                {calc.title}
                                            </h3>
                                            <div className="bg-black group-hover:bg-[#ea9237] text-white w-10 h-10 lg:w-6 lg:h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                                                <ArrowUpRight className="w-5 h-5 lg:w-5 lg:h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HealthCalculators;

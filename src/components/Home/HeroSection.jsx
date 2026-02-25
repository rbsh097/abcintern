'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentStatIndex, setCurrentStatIndex] = useState(0);

    const slides = [
        {
            image: '/header/1.png',
            showOverlay: true,
            stats: [
                { number: '34+', item: 'Countries' },
                { number: '800+', item: 'Products' },
                { number: '300+', item: 'Companies' }
            ]
        },
        {
            image: '/header/2.png',
            showOverlay: true,
            stats: [
                { number: '12', item: 'States & Regions' },
                { number: '47', item: 'Cities' },
                { number: '3k+', item: 'Touchpoints' }
            ]
        },
        {
            image: '/header/3.png',
            showOverlay: false
        }
    ];

    useEffect(() => {
        if (slides[currentSlide].showOverlay) {
            const statInterval = setInterval(() => {
                setCurrentStatIndex(
                    (prev) => (prev + 1) % slides[currentSlide].stats.length
                );
            }, 1500);
            return () => clearInterval(statInterval);
        }
    }, [currentSlide]);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setCurrentStatIndex(0);
        }, 4000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-white pt-30 py-10 overflow-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row gap-6 px-4 lg:px-0">

                {/* FIRST SECTION */}
                <div
                    className="relative w-full lg:w-2/3 2xl:w-2/3 rounded-[2rem] bg-center bg-no-repeat
                               min-h-[520px] lg:min-h-[700px] flex flex-col justify-center"
                    style={{ backgroundImage: "url('/h11.png')", backgroundSize: "cover" }}
                >
                    <div
                        className="absolute inset-0 flex flex-col gap-6 items-center mt-20 text-center px-4 lg:px-6"
                    >
                        <span className="bg-[#ea9237] px-4 py-2 rounded-full text-white font-medium text-sm lg:text-base 2xl:text-lg">
                            ABC International Limited.
                        </span>

                        <h1 className="px-2 lg:px-6">
                            <span className="block text-xl sm:text-2xl lg:text-[2.4rem] 2xl:text-[3rem] text-gray-500 leading-tight">
                                Bridging Therapy Gaps with Novel,
                            </span>
                            <span className="block text-2xl sm:text-3xl lg:text-[2.4rem] 2xl:text-[2.9rem] md:leading-[1.1] 2xl:leading-none text-black font-bold mt-2">
                                High Quality & Affordable Medicines
                            </span>
                        </h1>

                        <p className="text-gray-700 text-sm sm:text-base 2xl:text-2xl lg:text-md max-w-xl">
                            To become one of the most trusted and respected healthcare organizations admired by our stakeholders for our customer-centricity, governed by strong core values, ethical corporate governance, social responsibility, and a deep commitment to employee recognition and empowerment.
                        </p>

                        {/* Newsletter */}
                        <div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex items-center gap-4 mt-6"
                        >
                            <Link href="/service" className="group bg-[#ea9237] hover:bg-white text-white hover:text-[#ea9237] md:px-8 px-4 md:py-4 py-2 rounded-full font-bold md:text-lg text-sm transition-all duration-300 flex items-center gap-2 ">
                                Explore Our Services
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">

                    {/* CAROUSEL */}
                    <div
                        className="relative min-h-[500px] lg:min-h-[700px] 2xl:min-h-[780px]
                                   bg-cover rounded-[2rem] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
                    >
                        {slides[currentSlide].showOverlay && (
                            <div
                                className="absolute bottom-4 left-4
                                           lg:left-4
                                           bg-white rounded-lg
                                           px-4 py-3 lg:p-6
                                           w-auto max-w-[90%] lg:max-w-md
                                        "
                            >
                                <div className="flex items-center gap-3 lg:gap-4">
                                    {/* Number */}
                                    <span className="oxygen-regular text-3xl lg:text-6xl font-black text-gray-900 leading-none">
                                        {slides[currentSlide].stats[currentStatIndex].number}
                                    </span>

                                    {/* Labels */}
                                    <div className="flex flex-col leading-tight">
                                        {slides[currentSlide].stats.map((stat, idx) => (
                                            <span
                                                key={idx}
                                                className={`text-sm lg:text-3xl ${idx === currentStatIndex
                                                    ? 'font-bold text-black'
                                                    : 'font-medium text-gray-500'
                                                    }`}
                                            >
                                                {stat.item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* THIRD IMAGE */}
                    <div
                        className="min-h-[220px] lg:min-h-[300px] 2xl:min-h-[350px] md:bg-cover rounded-[2rem]"
                        style={{ backgroundImage: "url('/h.png')" }}
                    />
                </div>
            </div>
        </section>
    );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Play, ArrowRight, FlaskConical, Users, ThumbsUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
    // Carousel state for auto-rotating section
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentStatIndex, setCurrentStatIndex] = useState(0);

    const slides = [
        {
            image: '/h2/1.png',
            showOverlay: true,
            stats: [
                { number: '65+', item: 'Countries' },
                { number: '800+', item: 'Products' },
                { number: '300+', item: 'Companies' }
            ]
        },
        {
            image: '/h2/2.png',
            showOverlay: true,
            stats: [
                { number: '12', item: 'States & Regions' },
                { number: '47', item: 'Cities' },
                { number: '3k+', item: 'Touchpoints' }
            ]
        },
        {
            image: '/h2/3.png',
            showOverlay: false
        }
    ];

    // Cycle through stats within current slide every 1.5 seconds
    useEffect(() => {
        if (slides[currentSlide].showOverlay) {
            const statInterval = setInterval(() => {
                setCurrentStatIndex((prev) => (prev + 1) % slides[currentSlide].stats.length);
            }, 1500);

            return () => clearInterval(statInterval);
        }
    }, [currentSlide, slides]);

    // Cycle through slides every 5 seconds and reset stat index
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setCurrentStatIndex(0); // Reset to first stat when slide changes
        }, 4000);

        return () => clearInterval(slideInterval);
    }, [slides.length]);
    return (
        <section className="relative w-full min-h-screen bg-white pt-30 py-10 overflow-hidden">
            <div className='container mx-auto flex flex-row  gap-6'>
                {/* First Section */}
                <div
                    className='max-w-7xl mx-auto relative w-2/3 rounded-[2rem] bg-center bg-no-repeat min-h-[700px] flex flex-col justify-center'
                    style={{ backgroundImage: "url('/h11.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                >
                    <div className='absolute top-20  flex flex-col gap-6 items-center justify-center text-center px-6 '>
                        <div className='flex flex-col gap-6 items-center justify-center text-center px-6'>
                            <span className='bg-[#ea9237] px-4 py-2 rounded-full text-white font-medium'>ABC International Limited.</span>
                            <h1 className='px-6'>
                                <span className="inter-tight-1 text-4xl lg:text-[3.5rem] text-gray-500 hover:text-[#ea9237] leading-tight">
                                    Bridging Therapy  Gaps with Novel,
                                </span> <br />
                                <span className="inter-tight-1 text-3xl lg:text-[3.5rem] leading-[1.1] text-black font-bold p-4 -mt-4">
                                    High Quality & Affordable
                                    Medicines

                                </span>
                            </h1>


                            <p className="text-gray-700 text-lg max-w-2xl mt-2">
                                To become one of the most trusted and respected healthcare organizations admired by our stakeholders for our customer-centricity, governed by strong core values, ethical corporate governance, social responsibility, and a deep commitment to employee recognition and empowerment.


                            </p>
                        </div>


                        <div className="max-w-7xl mx-auto relative flex items-center bg-white rounded-full p-1.5 shadow-md border border-gray-100">
                            <input
                                type="email"
                                placeholder="Enter your email and subscribe"
                                className="w-sm bg-transparent px-6 py-2 outline-none text-gray-700 placeholder:text-gray-400"
                            />
                            <button className="p-3 bg-black rounded-full hover:bg-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 text-white" />
                            </button>
                            {/* </div> */}

                        </div>

                        {/* Newsletter */}
                    </div>

                    {/* Newsletter - Positioned at bottom */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md w-full px-6">


                        {/* <p className="mt-3 text-sm text-gray-500 text-center">Started get any update and information</p> */}
                    </div>
                </div>


                <div className='w-1/2 flex flex-col gap-6'>
                    {/* Second Section - Auto-Rotating Carousel */}
                    <div
                        className='relative min-h-[700px] flex flex-col justify-center bg-cover rounded-[2rem] bg-no-repeat transition-all duration-700'
                        style={{
                            backgroundImage: `url('${slides[currentSlide].image}')`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Conditional Overlay Card */}
                        {slides[currentSlide].showOverlay && (
                            <div
                                className="
                                absolute top-1/3 left-0 right-0
                                p-6 max-w-sm self-start ml-6 lg:ml-12
                                rounded-xl
                                bg-white
                                relative -mt-6
                                transition-opacity duration-500
                                "
                            >
                                {/* Inner subtle glass highlight */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-50 w-104 rounded-xl pointer-events-none border-[30px] border-[#FFFFFF38]" />

                                <div className="flex flex-row w-96 h-30 relative z-10 gap-4">
                                    {/* Show only current stat number */}
                                    <div className="flex items-center gap-6 transition-all duration-300">
                                        <span className="inter-tight-1 text-6xl leading-none font-black text-gray-900">
                                            {slides[currentSlide].stats[currentStatIndex].number}
                                        </span>
                                    </div>

                                    {/* Show all items with conditional highlighting */}
                                    <div className="flex flex-col gap-2">
                                        {slides[currentSlide].stats.map((stat, idx) => (
                                            <span
                                                key={idx}
                                                className={`text-3xl leading-tight transition-all duration-300 ${idx === currentStatIndex
                                                    ? 'font-extrabold text-black'
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


                    {/* Third Section */}
                    <div className='bg-red-200 min-h-[300px] shadow-md flex flex-col justify-center bg-cover rounded-[2rem] bg-no-repeat'
                        style={{ backgroundImage: "url('/h3.png')" }}>
                        third div
                    </div>
                </div>

            </div>
        </section>
    );
}

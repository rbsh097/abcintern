'use client';
import { useState, useEffect, useRef } from 'react';

// Counter component with animation
function AnimatedCounter({ target, suffix = '+' }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        const duration = 2000; // 2 seconds animation

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * target);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, target]);

    return (
        <div ref={counterRef} className="text-5xl font-bold text-black hover:text-[#ea9237]">
            {count}{suffix}
        </div>
    );
}

export default function NextSection() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = ['/h4.png', '/t2.png']; // Add your second image path here

    // Auto-slide images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="py-10 bg-white text-black">
                <div className="container mx-auto flex flex-row bg-gray-100 rounded-lg">
                    <div className="w-1/2 relative rounded-[1rem] p-4">
                        {/* Image Carousel */}
                        <div className="relative w-full h-auto rounded-2xl overflow-hidden">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className={`rounded-2xl w-full h-auto transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Overlay with Statistics */}
                        <div className="absolute bottom-15 left-1/2 bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f] rounded-[1rem] md:w-[120vh] w-[90%] py-8 pl-6 shadow-md -translate-x-1/5">
                            <div className="grid grid-cols-4 gap-8">
                                {/* Stat 1 - Positive Reviews */}
                                <div className="space-y-2">
                                    <AnimatedCounter target={1000} />
                                    <div className="text-lg text-black leading-tight">
                                        Positive Reviews
                                    </div>
                                </div>

                                {/* Stat 2 - Satisfied Clients */}
                                <div className="space-y-2">
                                    <AnimatedCounter target={50000} />
                                    <div className="text-lg text-black leading-tight">
                                        Satisfied Clients
                                    </div>
                                </div>

                                {/* Stat 3 - Experienced Staffs */}
                                <div className="space-y-2">
                                    <AnimatedCounter target={250} />
                                    <div className="text-lg text-black leading-tight">
                                        Experienced Staffs
                                    </div>
                                </div>

                                {/* Stat 4 - Quality Brands */}
                                <div className="space-y-2">
                                    <AnimatedCounter target={600} />
                                    <div className="text-lg text-black leading-tight">
                                        Quality Brands
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-2/3">
                        <h1 className="p-4 text-[3rem] leading-[1.2] font-medium ">Welcome to <br /> <span className="text-[3.5rem] font-bold hover:text-[#ea9237]">ABC International</span></h1>

                        <div className="p-4 text-lg bg-white mr-4 rounded-[1rem]">
                            <p className="mb-4">ABC International is one of the fastest-growing healthcare conglomerates with a vision to lead the market and build trust in the world of medicine.</p>
                            <p className="mb-4">We, at ABC International, are driven by the goal to support various verticals in the medical field to establish their brand and narrate their growth story. ABC International is a strategic planner, experienced executor, regulatory advisor, and marketer of pharmaceutical products.</p>
                            <p className="mb-4">Our strategists work diligently to evaluate the most pressing issues and opportunities that can elevate our clients' growth trajectory. Our insight helps us expand beyond political boundaries including Myanmar & worldwide.</p>
                        </div>


                    </div>

                </div>
            </div>

        </>
    );
}

'use client';
import { useState, useEffect, useRef } from 'react';

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
        if (counterRef.current) observer.observe(counterRef.current);
        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;
        let startTime;
        const duration = 2000;

        const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * target));
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [isVisible, target]);

    return (
        <div ref={counterRef} className="text-3xl lg:text-5xl font-bold text-black hover:text-[#ea9237]">
            {count}{suffix}
        </div>
    );
}

export default function NextSection() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = ['/t2.png', '/auntum.png'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="about" className="py-10 bg-white text-black scroll-mt-16">
            <div className="container mx-auto flex flex-col lg:flex-row bg-gray-100 rounded-lg gap-6 px-4 lg:px-0">

                {/* LEFT IMAGE SECTION */}
                <div className="relative w-full lg:w-1/2 rounded-[1rem] p-4">
                    <div className="relative w-full rounded-2xl overflow-hidden">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt=""
                                className={`w-full rounded-2xl transition-opacity duration-1000 ${index === currentImage
                                    ? 'opacity-100'
                                    : 'opacity-0 absolute inset-0'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* STATS OVERLAY */}
                    <div
                        className="
                        absolute 2xl:bottom-14 bottom-4 lg:bottom-14 md:left-9/8 left-1/2 -translate-x-1/2
                        w-[95%] lg:w-[120vh]
                        bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f]
                        rounded-[1rem] shadow-md
                        py-4 lg:py-8 px-4 lg:pl-6
                        "
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-center lg:text-left">
                            <div>
                                <AnimatedCounter target={1000} />
                                <p className="text-sm lg:text-lg">Positive Reviews</p>
                            </div>
                            <div>
                                <AnimatedCounter target={50000} />
                                <p className="text-sm lg:text-lg">Satisfied Clients</p>
                            </div>
                            <div>
                                <AnimatedCounter target={250} />
                                <p className="text-sm lg:text-lg">Experienced Staffs</p>
                            </div>
                            <div>
                                <AnimatedCounter target={600} />
                                <p className="text-sm lg:text-lg">Quality Brands</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-full lg:w-2/3">
                    <h1 className="p-4 text-2xl sm:text-3xl lg:text-[3rem] 2xl:text-[5rem] leading-tight font-medium">
                        Welcome to <br />
                        <span className="font-bold hover:text-[#ea9237]">
                            ABC International
                        </span>
                    </h1>

                    <div className="p-4 lg:p-8 text-sm sm:text-base lg:text-xl 2xl:text-2xl bg-white rounded-[1rem] 2xl:mr-10 lg:mr-10">
                        <p className="mb-4">
                            ABC International is one of the fastest-growing healthcare conglomerates with a vision to lead the market and build trust in the world of medicine.
                        </p>
                        <p className="mb-4">
                            We support multiple medical verticals as strategic planners, regulatory advisors, and marketers of pharmaceutical products.
                        </p>
                        <p>
                            Our insights help expand growth beyond political boundaries including Myanmar and worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

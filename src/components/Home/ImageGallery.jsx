'use client';
import { useState } from 'react';

export default function ImageGallery() {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const images = [
        {
            src: '/h2/1.png',
            title: 'Check Eligibility Criteria',
            description: 'Review age, medical history, and condition-specific requirements before joining any clinical study.'
        },
        {
            src: '/h2/2.png',
            title: 'Advanced Research',
            description: 'Cutting-edge medical research and development for innovative healthcare solutions.'
        },
        {
            src: '/h2/3.png',
            title: 'Quality Testing',
            description: 'Rigorous quality control and testing procedures ensuring the highest standards.'
        }
    ];

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto ">
                <div className="flex gap-4 items-start justify-center">
                    {images.map((image, index) => {
                        const isHovered = hoveredIndex === index;
                        const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${isHovered
                                    ? 'w-[700px] h-[600px]'
                                    : isOtherHovered
                                        ? 'w-[200px] h-[600px]'
                                        : 'w-[350px] h-[600px]'
                                    }`}
                            >
                                {/* Image */}
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Gradient Overlay - appears on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />

                                {/* Text Content - animates from bottom on hover */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 text-white transition-all duration-700 p-6 ${isHovered
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-full opacity-0'
                                        }`}
                                >
                                    <p className="text-sm font-medium mb-2 tracking-wide">
                                        {image.title}
                                    </p>
                                    <h3 className="text-3xl font-bold leading-tight">
                                        {image.description}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

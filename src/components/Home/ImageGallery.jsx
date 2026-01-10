'use client';
import { useState } from 'react';

export default function ImageGallery() {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const images = [
        {
            src: '/u.png',
            title: 'Sponsorship',
            description: 'ABC International sponsored Miss World Myanmar 2023, with Orofresh as the key sponsor, strengthening our global brand presence.'
        },
        {
            src: '/u2.png',
            title: 'Asia Business Outlook',
            description: 'An Emerging Firm With A Vision To Lead The Market & Build A Name In The World Of Medicine.'
        },
        {
            src: '/u3.png',
            title: 'Certification',
            description: 'ISO 9001:2015 Certified Pharmaceutical Warehouse Opening In Yangon Myanmar.'
        }
    ];

    return (
        <div
            className="bg-white py-16"
            onMouseLeave={() => setHoveredIndex(0)}
        >
            <div className="container mx-auto ">
                <div className="flex gap-4 items-start justify-center">
                    {images.map((image, index) => {
                        const isHovered = hoveredIndex === index;
                        const isOtherHovered = hoveredIndex !== index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700  ${isHovered
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
                                    className="w-[700px] h-full object-cover max-w-none"
                                />

                                {/* Gradient Overlay - appears on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-0'
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
                                    <h3 className="text-2xl font-bold leading-tight">
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

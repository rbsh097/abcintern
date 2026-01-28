'use client';
import { useState } from 'react';

export default function ImageGallery() {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const images = [
        {
            src: '/u.png',
            title: 'Social Responsibility',
            description: 'R-Biomeds Singapore donated essential medicines to Cambodia’s border-affected communities in partnership with Pharmacie De La Gare and Ke Sinoun Hospital, Battambang.'
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
        },
        {
            src: '/u3.png',
            title: 'Certification',
            description: 'ISO 9001:2015 Certified Pharmaceutical Warehouse Opening In Yangon Myanmar.'
        },
        {
            src: '/u3.png',
            title: 'Certification',
            description: 'ISO 9001:2015 Certified Pharmaceutical Warehouse Opening In Yangon Myanmar.'
        },
        {
            src: '/u3.png',
            title: 'Certification',
            description: 'ISO 9001:2015 Certified Pharmaceutical Warehouse Opening In Yangon Myanmar.'
        }
    ];

    return (
        <div
            className="bg-white md:py-16 px-10"
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
                                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 md:bg-transparent bg-black  ${isHovered
                                    ? '2xl:w-[900px] md:w-[700px] md:h-[600px] w-[1000px] h-[400px]  2xl:h-[750px]'
                                    : isOtherHovered
                                        ? '2xl:w-[400px] md:w-[100px] w-[200px] h-[400px] md:h-[600px] 2xl:h-[750px]'
                                        : '2xl:w-[400px] md:w-[330px] w-[900px] h-[400px] md:h-[600px] 2xl:h-[750px]'
                                    }`}
                            >
                                {/* Image */}
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="2xl:w-[800px] w-[700px] md:h-full md:object-contain object-contain md:max-w-none"
                                />

                                {/* Gradient Overlay - appears on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-0'
                                        }`}
                                />

                                {/* Text Content - animates from bottom on hover */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 text-white transition-all duration-700 p-6 md:bg-transparent bg-black ${isHovered
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-full opacity-0'
                                        }`}
                                >
                                    <p className="text-sm font-medium mb-2 tracking-wide">
                                        {image.title}
                                    </p>
                                    <h3 className="md:text-2xl sm:bg-black md:bg-transparent text-base font-bold leading-tight">
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

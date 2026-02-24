'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ImageGallery() {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const images = [
        {
            src: '/slider/1.png',
            title: 'Great Place to Work Certified',
            description: 'We’re thrilled to announce that ABC International has been certified as a Great Place to Work for 2025, making us only the second pharmaceutical company in Myanmar to receive this honor.'
        },
        {
            src: '/slider/3.png',
            title: 'Asia Business Outlook',
            description: 'An Emerging Firm With A Vision To Lead The Market & Build A Name In The World Of Medicine.'
        },
        {
            src: '/slider/4.png',
            title: 'Certification',
            description: 'ISO 9001:2015 Certified Pharmaceutical Warehouse Opening In Yangon Myanmar.'
        },
        {
            src: '/slider/5.png',
            title: 'Myanmar Radiation Oncology Conference',
            description: 'Participated in the radiation conference. All radio- oncologist from Yangon , Mandalay Nay Pyi Taw , Taunggyi attend the conference.'
        },
        {
            src: '/slider/6.png',
            title: 'ABC Derma Care',
            description: 'Luzo Club Meet at PyiNOoLwin - Engaging Dermatologist from Mandalay & TaungGyi'
        },
        {
            src: '/slider/7.png',
            title: 'Social Responsibility',
            description: 'ABC International sponsored Miss World Myanmar 2023, with Orofresh as the key sponsor, strengthening our global brand presence.'
        }
    ];

    return (
        <div
            className="bg-white md:py-16 px-10 py-10"
            onMouseLeave={() => setHoveredIndex(0)}
        >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-4 items-start justify-center">
                    {images.map((image, index) => {
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                className={`
                                    relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700
                                    w-full
                                    h-[400px] md:h-[600px] 2xl:h-[750px]
                                    ${isHovered
                                        ? 'md:w-[700px] 2xl:w-[900px] md:flex-grow'
                                        : 'md:w-[100px] 2xl:w-[150px] md:flex-none'
                                    }
                                `}
                            >
                                {/* Image */}
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Gradient Overlay */}
                                <div
                                    className={`
                                        absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500
                                        ${isHovered ? 'opacity-100' : 'md:opacity-0 opacity-100'}
                                    `}
                                />

                                {/* Text Content */}
                                <div
                                    className={`
                                        absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transition-all duration-700
                                        ${isHovered
                                            ? 'translate-y-0 opacity-100'
                                            : 'md:translate-y-full md:opacity-0 translate-y-0 opacity-100'
                                        }
                                    `}
                                >
                                    <p className="text-[#ffffff] text-xs font-bold uppercase tracking-widest mb-2">
                                        {image.title}
                                    </p>
                                    <h3 className="text-xl md:text-2xl font-bold leading-tight">
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

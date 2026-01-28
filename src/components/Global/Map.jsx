'use client';
import React from 'react';

const Map = () => {
    const directionsUrl = `https://maps.app.goo.gl/r74FZVpewJmkq3Ns5`;

    return (
        <>
            <div className='bg-white'>
                <div className="container mx-auto relative w-full h-[250px] rounded-[2.5rem] overflow-hidden group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.782696858307!2d96.15730428312105!3d16.787483478575894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193e3bff98b73%3A0xf81298d1f0d4293d!2sABC%20International%20Myanmar!5e0!3m2!1sen!2sus!4v1769592762120!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="transition-all duration-1000 scale-[1.02] group-hover:scale-100"
                    ></iframe>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                    {/* Get Directions Button */}
                    <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-[#ea9237] px-8 py-3 rounded-full font-bold text-base shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#ea9237] hover:text-white flex items-center gap-2 z-10"
                    >
                        Get Directions
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Map;

'use client';
import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import { Mail, Phone, MapPin, Warehouse, Building2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer id='contact' className="font-inter-tight-1 bg-white pt-20 pb-10 relative overflow-hidden">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 z-0 opacity-60 pointer-events-none"
                style={{
                    backgroundImage: "url('/footerbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            />
            <div className="container mx-auto px-6 relative z-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-16">
                    <div className="w-full md:w-[70%]">
                        <div className='w-full'>
                            {/* Office Addresses Grid (Highlighted) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Head Office Card */}
                                <div className="bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f] rounded-[2rem] p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500  border border-white/5">
                                    <div className="w-15 h-15 bg-[#ea9237] rounded-full flex items-center justify-center mb-5 shadow-lg shadow-[#ea9237]/20 group-hover:scale-110 transition-transform">
                                        <Building2 className="w-8 h-8 text-white" />
                                    </div>
                                    <p className="text-black text-lg font-black uppercase mb-2">Head Office</p>
                                    <p className="text-black text-md font-medium leading-relaxed opacity-90">
                                        Room I+J, 2nd Floor, Atrium Condominium, Upper Pansodan Rd, Mingalar Taung Nyunt Township, Yangon.
                                    </p>
                                </div>
                                {/* Warehouse Card */}
                                <div className="bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f] rounded-[2rem] p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500  border border-white/5">
                                    <div className="w-15 h-15 bg-[#ea9237] rounded-full flex items-center justify-center mb-5 shadow-lg shadow-[#ea9237]/20 group-hover:scale-110 transition-transform">
                                        <Warehouse className="w-8 h-8 text-white" />
                                    </div>
                                    <p className="text-black text-lg font-black uppercase mb-2">Warehouse</p>
                                    <p className="text-black text-md font-medium leading-relaxed opacity-90">
                                        No.91,92 Mya Khwar Nyo Housing, Thaketa Township, Yangon, Myanmar.
                                    </p>
                                </div>

                                {/* Mandalay Office Card */}
                                <div className="bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f] rounded-[2rem] p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500  border border-white/5">
                                    <div className="w-15 h-15 bg-[#ea9237] rounded-full flex items-center justify-center mb-5 shadow-lg shadow-[#ea9237]/20 group-hover:scale-110 transition-transform">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                    <p className="text-black text-lg font-black uppercase mb-2">Mandalay Office</p>
                                    <p className="text-black text-md font-medium leading-relaxed opacity-90">
                                        No.22, Ward NarGyi/2, Chan Mya Thar Si Township, Mandalay.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-10 pt-12">
                                <div className="group cursor-pointer">
                                    <h4 className="font-bold text-lg mb-1 text-black group-hover:text-[#ea9237] transition-all">Send a Message</h4>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-[#ea9237]" />
                                        <p className="text-gray-500 font-medium group-hover:text-black transition-colors">info@abcinternational.com</p>
                                    </div>
                                </div>
                                <div className="group cursor-pointer">
                                    <h4 className="font-bold text-lg mb-1 text-black group-hover:text-[#ea9237] transition-all">Call us</h4>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-[#ea9237]" />
                                        <p className="text-gray-500 font-medium group-hover:text-black transition-colors">+95 9979386000</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h1 className="font-bold text-xl text-black">Follow us on:</h1>
                                    <div className='flex flex-row gap-4'>
                                        <a href="https://www.facebook.com/abcinternational.global" className="text-black w-6 h-6 flex items-center justify-center hover:bg-[#ea9237] rounded-full transition-all transform hover:scale-110 group ">
                                            <FaFacebook className='w-full h-full' />
                                        </a>
                                        <a href="https://www.linkedin.com/company/abcinternational-mm/" className="text-black w-6 h-6 flex items-center justify-center hover:bg-[#ea9237] rounded-full transition-all transform hover:scale-110 group ">
                                            <RxLinkedinLogo className='w-full h-full' />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Circular Badge and Form */}
                    <div className="w-full md:w-[30%]">


                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl">
                            <h4 className="font-bold text-2xl mb-6 text-black">Get in Touch</h4>
                            <form className="space-y-4">
                                <input type="text" placeholder="Name" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors placeholder:text-gray-400" />
                                <input type="email" placeholder="Email" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors placeholder:text-gray-400" />
                                <textarea placeholder="Comment or Message" rows="4" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors resize-none placeholder:text-gray-400"></textarea>
                                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f] text-black font-bold rounded-full hover:bg-[#ea9237] transition-all transform hover:scale-[1.02] ">
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

                {/* Lime Green Banner */}
                <div className="bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f] text-black rounded-[1.5rem] p-8 flex flex-col md:flex-row justify-between items-center transition-all hover:shadow-2xl hover:shadow-yellow-100">
                    <h3 className="text-black text-2xl md:text-[1.5rem] 2xl:text-[1.8rem] font-bold text-center md:text-left md:mb-0  leading-tight">
                        Get in touch with ABC International for business, partnership, or healthcare inquiries.
                    </h3>
                    <button className="bg-[#1a1a1a] md:mt-0 mt-4 text-white px-8 py-2 rounded-2xl font-extrabold text-lg hover:bg-black transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
                        Call Us Now
                    </button>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 md:text-sm text-xs font-medium">
                    <p>© Copyright 2026 - ABC International All Rights Reserved Copyright.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="https://rbshstudio.com" target="_blank" className="transition-colors">Powered By <span className="text-[#ea9237] font-bold">RBSH Studio</span> </a>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

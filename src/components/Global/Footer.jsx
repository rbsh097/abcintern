'use client';
import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";

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
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
                    <div className="max-w-7xl">
                        <h2 className="text-6xl md:text-6xl font-bold text-gray-500 leading-tight mb-8 hover:text-[#ea9237] transition-colors cursor-pointer">
                            We'd love to hear from you!
                        </h2>
                        <div className='max-w-3xl'>


                            {/* Links/Contact Columns */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-black">Send a Message</h4>
                                    <p className="text-gray-500 mb-2 hover:text-[#ea9237] transition-colors cursor-pointer font-medium">info@abcinternational.com</p>

                                    <h4 className="font-bold text-lg mt-3 mb-1 text-black">Call us</h4>
                                    <p className="text-gray-500 mb-2 hover:text-[#ea9237] transition-colors cursor-pointer font-medium">
                                        +959979386000</p>

                                    <h4 className="font-bold text-lg mt-3 mb-1 text-black ">Address</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-black font-bold text-sm ">Head Office </p>
                                            <p className="text-gray-500 hover:text-[#ea9237] transition-colors cursor-pointer font-medium leading-relaxed">
                                                Room I+J, 2nd Floor, Atrium Condominium, Upper Pansodan Rd, Mingalar Taung Nyunt Township, Yangon.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-black font-bold text-sm ">Warehouse </p>
                                            <p className="text-gray-500 hover:text-[#ea9237] transition-colors cursor-pointer font-medium leading-relaxed">
                                                No.91,92 Mya Khwar Nyo ( Aung Kaung Kyaw ) Housing, Thaketa Township, Yangon, Myanmar.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-black font-bold text-sm ">Mandalay Office </p>
                                            <p className="text-gray-500 hover:text-[#ea9237] transition-colors cursor-pointer font-medium leading-relaxed">
                                                No.22, Ward (NarGyi/2), Myothit 1 quarter, Chan Mya Thar Si Township, Mandalay.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-10">
                                    <div>
                                        <h4 className="font-bold text-lg mb-4 text-black">Quick Links</h4>
                                        <ul className="space-y-3">
                                            <li><a href="#" className="text-gray-500 hover:text-[#ea9237] transition-colors font-medium">Home</a></li>
                                            <li><a href="#" className="text-gray-500 hover:text-[#ea9237] transition-colors font-medium">About us</a></li>
                                            <li><a href="#" className="text-gray-500 hover:text-[#ea9237] transition-colors font-medium">Service</a></li>
                                            <li><a href="#" className="text-gray-500 hover:text-[#ea9237] transition-colors font-medium">Our Products</a></li>
                                            <li><a href="#" className="text-gray-500 hover:text-[#ea9237] transition-colors font-medium">Our Peoples</a></li>
                                            <li><a href="#" className="text-gray-500 hover:text-[#ea9237] transition-colors font-medium">Contact us</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-4 text-black">Our Products</h4>
                                        <ul className="space-y-3">
                                            <li><a href="#" className="text-gray-500 hover:text-[#ea9237] transition-colors font-medium whitespace-nowrap">ABC</a></li>
                                            <li><a href="#" className="text-gray-500 hover:text-[#ea9237] transition-colors font-medium whitespace-nowrap">ABC</a></li>
                                            <li><a href="#" className="text-gray-500 hover:text-[#ea9237] transition-colors font-medium whitespace-nowrap">ABC</a></li>
                                            <li><a href="#" className="text-gray-500 hover:text-[#ea9237] transition-colors font-medium whitespace-nowrap">ABC</a></li>
                                            <li><a href="#" className="text-gray-500 hover:text-[#ea9237] transition-colors font-medium whitespace-nowrap">ABC</a></li>
                                            <li><a href="#" className="text-gray-500 hover:text-[#ea9237] transition-colors font-medium whitespace-nowrap">ABC</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Circular Badge and Form */}
                    <div className="w-full md:w-[400px]">


                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl">
                            <h4 className="font-bold text-2xl mb-6 text-black">Get a Proposal</h4>
                            <form className="space-y-4">
                                <input type="text" placeholder="Company name" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors placeholder:text-gray-400" />
                                <input type="email" placeholder="Your email address" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors placeholder:text-gray-400" />
                                <input type="tel" placeholder="Phone no." className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors placeholder:text-gray-400" />
                                <textarea placeholder="Tell us about your project" rows="4" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors resize-none placeholder:text-gray-400"></textarea>
                                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f] text-black font-bold rounded-full hover:bg-[#ea9237] transition-all transform hover:scale-[1.02] ">
                                    Request a Consultation
                                </button>
                            </form>
                        </div>
                        <div className='flex flex-row gap-4 mt-18 px-6'>
                            <h1 className="font-bold text-xl text-black">Follow us on:</h1>
                            <a href="https://www.facebook.com/abcinternational.global" className="text-black w-6 h-6 flex items-center justify-center hover:bg-[#ea9237] transition-all transform hover:scale-110 group ">
                                <FaFacebook className='w-full h-full' />
                            </a>
                            <a href="https://www.linkedin.com/company/abcinternational-mm/" className="text-black w-6 h-6 flex items-center justify-center hover:bg-[#ea9237] transition-all transform hover:scale-110 group ">
                                <RxLinkedinLogo className='w-full h-full' />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Lime Green Banner */}
                <div className="bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f] text-black rounded-[1.5rem] p-8 flex flex-col md:flex-row justify-between items-center transition-all hover:shadow-2xl hover:shadow-yellow-100">
                    <h3 className="text-black text-3xl md:text-[1.5rem] font-bold text-center md:text-left md:mb-0  leading-tight">
                        Get in touch with ABC International for business, partnership, or healthcare inquiries.
                    </h3>
                    <button className="bg-[#1a1a1a] text-white px-8 py-2 rounded-2xl font-extrabold text-lg hover:bg-black transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
                        Call Us Now
                    </button>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium">
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

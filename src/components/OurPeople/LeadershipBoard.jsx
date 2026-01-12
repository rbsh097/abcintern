"use client";

import React from "react";

const LeadershipBoard = ({
    title = "Meet Our Leadership Board",
    leaders,
}) => {
    return (
        <section className="py-10 bg-[#F8F9FA]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight hover:text-[#e57f00]">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leaders.map((leader, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 h-[300px]"
                        >
                            {/* Image */}
                            <img
                                src={leader.image}
                                alt={leader.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Bottom Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white transition-opacity duration-500 group-hover:opacity-0">
                                <h3 className="text-2xl font-bold mb-1">
                                    {leader.name}
                                </h3>
                                <p className="text-[#fae57f] font-medium">
                                    {leader.role}
                                </p>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#fae57f]/95 p-10 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <h3 className="text-3xl font-bold text-black mb-2">
                                    {leader.name}
                                </h3>
                                <p className="text-black/60 font-bold mb-6 text-sm uppercase tracking-widest">
                                    {leader.role}
                                </p>
                                <div className="w-12 h-1 bg-black mb-6"></div>
                                <p className="text-black/80 text-lg leading-relaxed font-medium">
                                    {leader.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipBoard;

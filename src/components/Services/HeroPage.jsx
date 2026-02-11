"use client";

import React from "react";

const phases = [
    {
        id: "01",
        title: "Preferred Partners",
        image: "/serviceicon/1.png",
        description:
            "We are the trusted importer, distributor, and marketing partner for leading multinational brands across Myanmar and beyond, recognized for excellence.",
        bgColor: "bg-[#F5F5F5]",
        textColor: "text-black",
    },
    {
        id: "02",
        title: "Global Reach, Local Expertise",
        image: "/serviceicon/2.png",
        description:
            "With a presence in key markets across Myanmar, we combine our global reach with deep-rooted local insights to deliver tailored solutions. ",
        bgColor: "bg-[#F5F5F5]",
        textColor: "text-black",
    },
    {
        id: "03",
        title: "Regulatory Prowess",
        image: "/serviceicon/3.png",
        description:
            "Navigate the complex regulatory landscape with confidence. Our dedicated team ensures compliance at every step, allowing you to focus on what matters most your mission. ",
        bgColor: "bg-[#F5F5F5]",
        textColor: "text-black",
    },
    {
        id: "04",
        title: "Trademark Guardians",
        image: "/serviceicon/4.png",
        description:
            "Safeguard your brand with our seamless trademark registration services. We understand the value of your intellectual property and take every measure to protect it. ",
        bgColor: "bg-[#F5F5F5]",
        textColor: "text-black",
        className: "md:col-span-1.5",
    },
    {
        id: "05",
        title: "Strategic Healthcare Consultancy",
        image: "/serviceicon/5.png",
        description:
            "Leverage our extensive industry knowledge to make informed decisions. Whether it's market entry strategies or product positioning, our consultancy services empower you to thrive.",
        bgColor: "bg-[#F5F5F5]",
        textColor: "text-black",
        className: "md:col-span-1.5",
    },
];

const PhaseCard = ({
  id,
  title,
  description,
  bgColor,
  textColor,
  className,
  image,
}) => (
  <div
    className={`group p-8 md:p-6 rounded-[2rem] flex flex-col gap-12 transition-all duration-500 cursor-default hover:bg-gradient-to-bl hover:from-white hover:to-[#fae57f] ${bgColor} ${className}`}
  >
    {/* Top Section - Image + Number */}
    <div className="flex items-center gap-4">
     

      <span className={`text-4xl font-medium ${textColor}`}>
        {id}
      </span>
       <div className="relative w-12 h-12">
        <img
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
    </div>

    {/* Content */}
    <div className="space-y-2">
      <h4 className={`text-xl md:text-2xl font-medium ${textColor}`}>
        {title}
      </h4>
      <p
        className={`text-sm md:text-base leading-relaxed opacity-80 ${textColor}`}
      >
        {description}
      </p>
    </div>
  </div>
);

export default function HeroPage() {
    return (
        <section className="py-24 bg-white selection:bg-black selection:text-white">
            <div className="container mx-auto px-4">
                {/* Headings */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-semibold text-black hover:text-[#e57f00]">
                        Our Services
                    </h1>
                    <p className="max-w-7xl mx-auto text-gray-500 text-lg md:text-xl font-medium pt-4 mb-10">
                        At ABC International, we offer a comprehensive suite of services tailored to meet the dynamic
                        needs of the healthcare industry. Our expertise spans Importation, Marketing, Distribution,
                        Regulatory Compliance, Trademark Registration, and Healthcare Consultancy.
                    </p>
                </div>

                {/* Phase Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                    {/* Top Row: 1, 2, 3 */}
                    {phases.slice(0, 3).map((phase) => (
                        <PhaseCard key={phase.id} {...phase} />
                    ))}

                    {/* Bottom Row: 4, 5 (centered with 1.5 span equivalent layout) */}
                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full mx-auto w-full">
                        {phases.slice(3).map((phase) => (
                            <PhaseCard key={phase.id} {...phase} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
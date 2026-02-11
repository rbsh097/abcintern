import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

const OurBusinesses = () => {
    const businesses = [
        {
            title: "MAXXCARE",
            subTitle: "We Know How",
            logo: "/logoaa.png",
            description: "Powering rapid market expansion for pharmaceutical and FMCG brands across Asia",
            bgGradient: "from-[#ef662a] via-white/10 to-[#ef662a]",
            textColor: "text-slate-800",
            accent: "text-cyan-700",
            link: "https://rbiomed.netlify.app/",
            type: "maxxcare",
        },
        {
            title: "Natural",
            subTitle: "We Care",
            logo: "/logob.png",
            description: "Science-led pet nutrition and FDA-grade medicines , quietly affordable",
            bgGradient: "from-[#9444A1] via-white to-[#9444A1]",
            textColor: "text-green-900",
            accent: "text-green-700",
            link: "https://rbvetshi.netlify.app/",
            type: "natural",
        },
    ];

    return (
        <section className="py-28 bg-white">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium uppercase text-black mb-6 hover:text-[#ea9237]">
                        Our <span className="">Businesses</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Independent brands working together to improve lives globally.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {businesses.map((biz, index) => (
                        <a
                            key={index}
                            href={biz.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block h-full"
                        >
                            <div
                                className={`relative h-full rounded-[2.5rem] p-12 
                bg-gradient-to-br ${biz.bgGradient}
                border border-black/5
               
                transition-all duration-500`}
                            >
                                {/* Floating external icon */}
                                <ExternalLink className="absolute top-8 right-8 w-5 h-5 text-black/30 group-hover:text-black transition" />

                                {/* Logo */}
                                <div className="h-44 flex items-center justify-center mb-10">
                                    {biz.logo ? (
                                        <Image
                                            src={biz.logo}
                                            alt={biz.title}
                                            width={260}
                                            height={120}
                                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center">
                                            <div className="w-28 h-28 bg-green-600 rounded-[40%_60%_40%_60%] flex items-center justify-center shadow-xl group-hover:rotate-3 transition">
                                                <span className="text-white font-black text-xl">
                                                    Natural
                                                </span>
                                            </div>
                                            <span className="mt-4 text-2xl font-black text-green-800 italic tracking-tight">
                                                We Care
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <p
                                    className={`text-2xl md:text-3xl font-medium leading-snug text-center text-black mb-12`}
                                >
                                    {biz.description}
                                </p>

                                {/* CTA */}
                                <div className="flex justify-center">
                                    <div
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-black uppercase tracking-widest text-xs
                                        group-hover:bg-[#ea9237] transition-all duration-300 group-hover:gap-5 shadow-lg group-hover:shadow-[#ea9237]/20"
                                    >
                                        Visit Website
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurBusinesses;

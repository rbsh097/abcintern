export default function Section() {
    const leftCards = [
        {
            icon: "🏢",
            title: "Our Vision",
            description: "To be a trusted health care organization of repute, admired by its stakeholders for its customer centricity, governed by core values and commitment to the principles of corporate governance, social responsibilities & employee recognition."
        },
        {
            icon: "💎",
            title: "Our Value",
            description: "At ABC International, we are driven by a commitment to quality and excellence while maintaining a strong focus on customer-centricity and unwavering respect for individuals."
        },
        {
            icon: "🌟",
            title: "Our Culture",
            description: "At ABC International, we cultivate an environment that empowers individuals, promotes and supports creativity, and fosters a collaborative atmosphere with shared goals."
        }
    ];

    const rightCards = [
        {
            icon: "👥",
            title: "Our People",
            description: "Our people are at the heart of all our endeavors, embodying the essence and spirit of ABC International Limited, constituting its very DNA."
        },
        {
            icon: "⚡",
            title: "Execution Excellence",
            description: "Through a combination of proficient capabilities and a steadfast commitment to our core values, our team consistently demonstrates a high degree of accountability, ensuring optimal outcomes."
        },
        {
            icon: "📈",
            title: "Employee Value Proposition",
            description: "Recognizing the pivotal role that career advancement plays in an individual's journey at ABC International, we prioritize and support professional development as a cornerstone of our commitment to our valued employees."
        }
    ];

    return (
        <div className="bg-white md:py-10 py-10 md:pt-15 pt-30 2xl:py-6">
            <div className="font-inner-tight-1 container mx-auto px-6">
                <h1 className="md:text-[8.5rem] text-[2.5rem] 2xl:text-[9.2rem] text-gray-200 font-extrabold uppercase -mt-20">
                    Our Eco System
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Left Column - Cards */}
                    <div className="space-y-6">
                        {leftCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 hover:border-0 hover:bg-gradient-to-br hover:from-white hover:to-[#fae57f] rounded-2xl p-8 group"
                            >
                                <div className="flex items-start gap-4">

                                    <div>
                                        <h3 className="text-2xl font-bold text-black mb-4  transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Column - Image */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            <img
                                src="/tree1.png"
                                alt="ABC International"
                                className="w-full h-auto rounded-3xl"
                            />
                        </div>
                    </div>

                    {/* Right Column - Cards */}
                    <div className="space-y-6">
                        {rightCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 hover:border-0 hover:bg-gradient-to-br hover:from-white hover:to-[#fae57f] rounded-2xl p-8 group"
                            >
                                <div className="flex items-start gap-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-black mb-4 transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

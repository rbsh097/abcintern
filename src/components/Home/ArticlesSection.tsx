import ArticleCard from "./ArticleCard";

const articles = [
    {
        image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=2070&auto=format&fit=crop",
        date: "July 31, 2026",
        title: "Innovating the path to better wellness",
        href: "/articles?id=1",
    },
    {
        image: "https://images.unsplash.com/photo-1579154276502-7bc24618?q=80&w=2070&auto=format&fit=crop",
        date: "July 24, 2026",
        title: "The future of bio-tech research",
        href: "/articles?id=2",
    },
    {
        image: "https://images.unsplash.com/photo-1579254276502-7bc24618?q=80&w=2070&auto=format&fit=crop",
        date: "June 12, 2026",
        title: "Global health outreach programs",
        href: "/articles?id=3",
    },
];

const ArticlesSection = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium uppercase text-black mb-6 hover:text-[#ea9237] text-center mb-12">Blogs</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {articles.map((article, index) => (
                        <ArticleCard key={index} {...article} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <a
                        href="/articles"
                        className="group relative inline-flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-[#ea9237] transition-all duration-300 shadow-xl hover:shadow-[#ea9237]/20 overflow-hidden"
                    >
                        <span className="relative z-10 text-white">Explore More Blogs</span>
                        <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#ea9237] transition-all">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ArticlesSection;

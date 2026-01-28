'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const initialHeroArticles = [
    {
        id: 1,
        title: "Innovating the path to better wellness",
        description: "Our latest research into genomic medicine is uncovering new ways to personalize patient care at a global scale.",
        image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=2070&auto=format&fit=crop",
        category: "Research"
    },
    {
        id: 2,
        title: "The future of bio-tech research",
        description: "Exploring the intersection of artificial intelligence and biological systems to accelerate drug discovery.",
        image: "https://images.unsplash.com/photo-1579154276502-7bc24618?q=80&w=2070&auto=format&fit=crop",
        category: "Innovation"
    },
    {
        id: 3,
        title: "Global health outreach programs",
        description: "How Rbiomeds is expanding its footprint to provide critical diagnostic tools to remote regions across Southeast Asia.",
        image: "https://images.unsplash.com/photo-1579254276502-7bc24618?q=80&w=2070&auto=format&fit=crop",
        category: "Community"
    }
];

const initialJournalArticles = [
    {
        id: 101,
        title: "Innovation in Diagnostics",
        description: "Rbiomeds is pioneering new diagnostic protocols that reduce wait times by up to 60% in clinical settings.",
        image: "https://images.unsplash.com/photo-1579154276502-7bc24618?q=80&w=2070&auto=format&fit=crop",
        date: "July 24, 2026"
    },
    {
        id: 102,
        title: "Global Expansion: Cambodia",
        description: "Our new facility in Phnom Penh marks a significant milestone in our mission to serve the Southeast Asian market.",
        image: "https://images.unsplash.com/photo-1483366759022-7a0e8ecdac5a?q=80&w=2071&auto=format&fit=crop",
        date: "June 12, 2026"
    },
    {
        id: 103,
        title: "Healthcare Policy Updates",
        description: "Analyzing the impact of recent international healthcare regulations on biomedical research and development.",
        image: "https://images.unsplash.com/photo-1454165833767-027ffea9e78b?q=80&w=2070&auto=format&fit=crop",
        date: "May 30, 2026"
    },
    {
        id: 104,
        title: "Sustainable Biotech Research",
        description: "Implementing green energy solutions and zero-waste protocols in our state-of-the-art laboratory facilities.",
        image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=2070&auto=format&fit=crop",
        date: "April 15, 2026"
    },
    {
        id: 105,
        title: "Our Global Mission",
        description: "From Singapore to Canada, we are building a network of excellence in biomedical research. Our goal is simple: to bring life-changing treatments to those who need them most.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
        date: "March 01, 2026"
    },
    {
        id: 106,
        title: "Advancing Patient Care",
        description: "How new patient monitoring systems are improving outcomes in post-operative care.",
        image: "https://images.unsplash.com/photo-1581594658553-359bc7e9545b?q=80&w=2070&auto=format&fit=crop",
        date: "February 20, 2026"
    },
    {
        id: 107,
        title: "Stem Cell Breakthroughs",
        description: "New findings in stem cell research that could revolutionize treatment for chronic heart disease.",
        image: "https://images.unsplash.com/photo-1584622723567-d6e9c1d93540?q=80&w=2070&auto=format&fit=crop",
        date: "January 15, 2026"
    },
    {
        id: 108,
        title: "Precision Medicine Progress",
        description: "Tailoring treatments to the individual's genetic profile for more effective cancer therapies.",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop",
        date: "December 10, 2025"
    },
    {
        id: 109,
        title: "Digital Health Evolution",
        description: "The integration of AI and wearable tech in modern healthcare delivery systems.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        date: "November 22, 2025"
    }
];

const ArticlesContent = () => {
    const searchParams = useSearchParams();
    const [heroArticles, setHeroArticles] = useState(initialHeroArticles);
    const [journalArticles, setJournalArticles] = useState(initialJournalArticles);
    const [currentPage, setCurrentPage] = useState(1);
    const [featuredId, setFeaturedId] = useState(105);

    const itemsPerPage = 4;

    useEffect(() => {
        const id = searchParams.get('id');
        if (id) {
            const articleId = parseInt(id);
            const index = initialHeroArticles.findIndex(a => a.id === articleId);
            if (index !== -1) {
                // If it's a hero article, swap it to the top
                const newArticles = [...initialHeroArticles];
                const temp = newArticles[0];
                newArticles[0] = newArticles[index];
                newArticles[index] = temp;
                setHeroArticles(newArticles);

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // Check if it's a journal article
                const exists = initialJournalArticles.some(a => a.id === articleId);
                if (exists) {
                    setFeaturedId(articleId);
                    // Scroll to the second section
                    const section = document.getElementById('journal-section');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }, [searchParams]);

    const handleHeroSwap = (index: number) => {
        const newArticles = [...heroArticles];
        const temp = newArticles[0];
        newArticles[0] = newArticles[index];
        newArticles[index] = temp;
        setHeroArticles(newArticles);
    };

    const handleJournalSwap = (articleId: number) => {
        setFeaturedId(articleId);
    };

    const currentHero = heroArticles[0];
    const heroSidebar = heroArticles.slice(1);
    const currentJournalFeatured = journalArticles.find(a => a.id === featuredId) || journalArticles[0];
    const gridPool = journalArticles.filter(a => a.id !== featuredId);
    const totalPages = Math.ceil(gridPool.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentGridItems = gridPool.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 italic uppercase tracking-tighter">
                        Our Journal
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl font-medium">
                        Insights, breakthroughs, and wellness guides from the world of Rbiomeds.
                    </p>
                </div>

                <section className="flex flex-col lg:flex-row gap-12 mb-24">
                    <div className="lg:w-2/3 group">
                        <div className="relative w-full h-[550px] rounded-[3.5rem] overflow-hidden mb-8 shadow-sm">
                            <Image
                                src={currentHero.image}
                                alt={currentHero.title}
                                fill
                                className="object-cover transition-all duration-1000 animate-in fade-in zoom-in-95"
                                key={currentHero.id}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-10 left-10 max-w-2xl">
                                <span className="bg-[#ef662e] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                                    {currentHero.category}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-tight mb-4 tracking-tighter">
                                    {currentHero.title}
                                </h2>
                                <p className="text-white/80 text-lg font-medium">
                                    {currentHero.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 flex flex-col gap-6">
                        {heroSidebar.map((article, i) => (
                            <div
                                key={article.id}
                                onClick={() => handleHeroSwap(i + 1)}
                                className="flex-1 bg-white border border-gray-100 rounded-[2.5rem] p-6 transition-all group flex flex-col cursor-pointer hover:shadow-2xl hover:border-[#ef662e]/20"
                            >
                                <div className="relative w-full h-[160px] rounded-2xl overflow-hidden mb-5">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-3 uppercase italic tracking-tighter flex-1">
                                    {article.title}
                                </h3>
                                <button className="inline-flex items-center gap-2 text-[#ef662e] font-black uppercase text-xs tracking-widest mt-4">
                                    Click to Swap <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="journal-section" className="flex flex-col lg:flex-row gap-12 pt-20 border-t border-gray-100">
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-[600px]">
                            {currentGridItems.map((article) => (
                                <div
                                    key={article.id}
                                    onClick={() => handleJournalSwap(article.id)}
                                    className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all"
                                >
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 active:scale-95"
                                        key={article.id}
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{article.date}</p>
                                        <h4 className="text-white text-xl font-black uppercase italic tracking-tighter leading-tight">
                                            {article.title}
                                        </h4>
                                        <div className="h-0 group-hover:h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                                            <span className="text-white text-[10px] font-bold uppercase tracking-widest">Swap with Featured</span>
                                            <ArrowRight className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="mt-12 flex items-center justify-center gap-4">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group transition-all ${currentPage === 1 ? 'opacity-30' : 'hover:bg-black'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 transition-colors ${currentPage === 1 ? 'text-gray-300' : 'text-gray-500 group-hover:text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <div className="flex items-center gap-2">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => setCurrentPage(num)}
                                            className={`w-12 h-12 rounded-full font-black text-sm transition-all hover:scale-110 ${num === currentPage
                                                    ? 'bg-[#ef662e] text-white shadow-lg shadow-[#ef662e]/20'
                                                    : 'bg-white text-gray-400 border border-gray-100 hover:border-[#ef662e] hover:text-[#ef662e]'
                                                }`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group transition-all ${currentPage === totalPages ? 'opacity-30' : 'hover:bg-black'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 transition-colors ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-500 group-hover:text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="lg:w-1/3">
                        <div className="sticky top-24">
                            <div className="relative w-full h-[450px] rounded-[3.5rem] overflow-hidden mb-8 border-2 border-[#ef662e]/10 shadow-sm">
                                <Image
                                    src={currentJournalFeatured.image}
                                    alt={currentJournalFeatured.title}
                                    fill
                                    className="object-cover animate-in fade-in slide-in-from-right-10 duration-1000"
                                    key={currentJournalFeatured.id}
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-[#ef662e] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                        Featured
                                    </span>
                                </div>
                            </div>
                            <div className="px-4 animate-in fade-in slide-in-from-bottom-5 duration-700" key={`journal-text-${currentJournalFeatured.id}`}>
                                <h3 className="text-3xl font-black text-gray-900 mb-6 uppercase italic tracking-tighter leading-none">
                                    {currentJournalFeatured.title}
                                </h3>
                                <p className="text-gray-600 text-lg font-medium leading-relaxed">
                                    {currentJournalFeatured.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

const ArticlesPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Journal...</div>}>
            <ArticlesContent />
        </Suspense>
    );
};

export default ArticlesPage;

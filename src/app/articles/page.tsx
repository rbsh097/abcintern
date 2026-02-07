'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Initial data moved to lib/data/articles.json via backend API

const ArticlesContent = () => {
    const searchParams = useSearchParams();
    const [heroArticles, setHeroArticles] = useState<any[]>([]);
    const [journalArticles, setJournalArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [featuredId, setFeaturedId] = useState<string | null>(null);

    const itemsPerPage = 4;

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://rbiomedsback.onrender.com/api/articles?site=abc-international');
                const data = await response.json();

                if (data.length > 0) {
                    // First 3 articles are for hero
                    const hero = data.slice(0, 3);
                    const journal = data.slice(3);

                    setHeroArticles(hero);
                    setJournalArticles(journal);

                    // Handle search params for deep linking
                    const id = searchParams.get('id');
                    if (id) {
                        const heroIndex = hero.findIndex((a: any) => a.id === id);
                        if (heroIndex !== -1) {
                            // If it's a hero article, swap it to the top
                            const newHero = [...hero];
                            const temp = newHero[0];
                            newHero[0] = newHero[heroIndex];
                            newHero[heroIndex] = temp;
                            setHeroArticles(newHero);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                            const journalExists = journal.some((a: any) => a.id === id);
                            if (journalExists) {
                                setFeaturedId(id);
                                setTimeout(() => {
                                    const section = document.getElementById('journal-section');
                                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }
                        }
                    } else if (journal.length > 0) {
                        setFeaturedId(journal[0].id);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [searchParams]);

    const handleHeroSwap = (index: number) => {
        const newArticles = [...heroArticles];
        const temp = newArticles[0];
        newArticles[0] = newArticles[index];
        newArticles[index] = temp;
        setHeroArticles(newArticles);
    };

    const handleJournalSwap = (articleId: string) => {
        setFeaturedId(articleId);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 border-4 border-[#ef662e] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 font-medium animate-pulse">Loading Journal...</p>
            </div>
        );
    }

    if (heroArticles.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-gray-500 font-medium">No articles found.</p>
            </div>
        );
    }

    const currentHero = heroArticles[0];
    const heroSidebar = heroArticles.slice(1);
    const currentJournalFeatured = journalArticles.find((a: any) => a.id === featuredId) || journalArticles[0];
    const gridPool = journalArticles.filter((a: any) => a.id !== featuredId);
    const totalPages = Math.ceil(gridPool.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentGridItems = gridPool.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <main className="bg-white min-h-screen pt-30 pb-20">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium uppercase text-black mb-6 hover:text-[#ea9237]">
                        Our Journal
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl font-medium">
                        Insights, breakthroughs, and wellness guides from the world of Rbiomeds.
                    </p>
                </div>

                <section className="flex flex-col lg:flex-row gap-12 mb-24">
                    <div className="lg:w-2/3 group">
                        <div className="relative w-full h-[550px] rounded-2xl overflow-hidden mb-8">
                            <img
                                src={currentHero.image}
                                alt={currentHero.title}
                                className="object-cover transition-all duration-1000 animate-in fade-in zoom-in-95"
                                key={currentHero.id}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-10 left-10 max-w-2xl">
                                <span className="bg-[#ef662e] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                                    {currentHero.category}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4 tracking-tighter">
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
                                className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 transition-all group flex flex-col cursor-pointer hover:border-[#ef662e]/20"
                            >
                                <div className="relative w-full h-[160px] rounded-2xl overflow-hidden mb-5">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tighter flex-1">
                                    {article.title}
                                </h3>
                                <button className="inline-flex items-center gap-2 text-[#ef662e] font-black uppercase text-xs tracking-widest mt-4">
                                    Click to Swap <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {journalArticles.length > 0 && (
                    <section id="journal-section" className="flex flex-col lg:flex-row gap-12 pt-20 border-t border-gray-100">
                        <div className="lg:w-2/3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-[600px]">
                                {currentGridItems.map((article) => (
                                    <div
                                        key={article.id}
                                        onClick={() => handleJournalSwap(article.id)}
                                        className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer transition-all"
                                    >
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 active:scale-95"
                                            key={article.id}
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                            <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{article.date}</p>
                                            <h4 className="text-white text-xl font-black uppercase tracking-tighter leading-tight">
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
                                                    ? 'bg-[#ef662e] text-white'
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
                                {currentJournalFeatured && (
                                    <>
                                        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden mb-8 border-2 border-[#ef662e]/10">
                                            <img
                                                src={currentJournalFeatured.image}
                                                alt={currentJournalFeatured.title}
                                                className="object-cover animate-in fade-in slide-in-from-right-10 duration-1000"
                                                key={currentJournalFeatured.id}
                                            />
                                            <div className="absolute top-6 left-6">
                                                <span className="bg-[#ef662e] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                    Featured
                                                </span>
                                            </div>
                                        </div>
                                        <div className="px-4 animate-in fade-in slide-in-from-bottom-5 duration-700" key={`journal-text-${currentJournalFeatured.id}`}>
                                            <h3 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-none">
                                                {currentJournalFeatured.title}
                                            </h3>
                                            <p className="text-gray-600 text-lg font-medium leading-relaxed">
                                                {currentJournalFeatured.description}
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </section>
                )}
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

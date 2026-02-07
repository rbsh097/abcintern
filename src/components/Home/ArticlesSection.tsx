"use client";
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { Loader2 } from "lucide-react";

const ArticlesSection = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://rbiomedsback.onrender.com/api/articles?site=abc-international');
                const data = await response.json();
                // Get the latest 3 articles
                setArticles(data.slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch articles for home section:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium uppercase text-black hover:text-[#ea9237] text-center mb-16 tracking-tighter font-black">Latest Insights</h1>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-8 h-8 text-[#ea9237] animate-spin" />
                    </div>
                ) : articles.length === 0 ? (
                    <div className="text-center py-10">
                        <p className="text-gray-400 font-medium ">New stories coming soon...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {articles.map((article, index) => (
                            <ArticleCard
                                key={article.id || index}
                                image={article.image}
                                title={article.title}
                                date={article.date}
                                href={`/articles?id=${article.id}`}
                            />
                        ))}
                    </div>
                )}

                <div className="flex justify-center mt-12">
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


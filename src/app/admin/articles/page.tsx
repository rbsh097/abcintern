"use client";
import React, { useState, useEffect } from "react";
import { Plus, Trash2, ArrowLeft, Image as ImageIcon, Loader2, Sparkles, LayoutGrid, Calendar, Edit2, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Article {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    sites: string[];
    date: string;
    createdAt: string;
}

const AdminArticles = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        category: "",
        sites: ["rbiomeds"], // Default site
    });

    const fetchArticles = async () => {
        try {
            const response = await fetch("https://rbiomedsback.onrender.com/api/articles");
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            setArticles(data);
        } catch (error) {
            console.error("Failed to fetch:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const url = editingId
                ? `https://rbiomedsback.onrender.com/api/articles/${editingId}`
                : "https://rbiomedsback.onrender.com/api/articles";
            const method = editingId ? "PUT" : "POST";

            const response = await fetch(url, {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setFormData({ title: "", description: "", image: "", category: "", sites: ["rbiomeds"] });
                setEditingId(null);
                fetchArticles();
            }
        } catch (error) {
            console.error(editingId ? "Failed to update:" : "Failed to create:", error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleEdit = (article: Article) => {
        setFormData({
            title: article.title,
            description: article.description,
            image: article.image || "",
            category: article.category || "",
            sites: article.sites || ["rbiomeds"],
        });
        setEditingId(article.id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this article? This action cannot be undone.")) return;
        try {
            const response = await fetch(`https://rbiomedsback.onrender.com/api/articles/${id}`, { method: "DELETE" });
            if (response.ok) fetchArticles();
        } catch (error) {
            console.error("Failed to delete:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] pt-24 pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <Link href="/admin" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ef662e] transition-colors mb-4 font-bold text-xs uppercase tracking-widest">
                            <ArrowLeft className="w-3 h-3" />
                            Back to Dashboard
                        </Link>
                        <h1 className="text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-2">
                            Article <span className="text-[#ef662e]">Manager</span>
                        </h1>
                        <p className="text-gray-500 font-medium">Create and manage your journal entries from this central hub.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white px-6 py-3 rounded-2xl border border-gray-100  flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs font-black text-gray-900 uppercase tracking-widest">{articles.length} Total Entries</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Create Form - Sticks on scroll */}
                    <div className="lg:col-span-4">
                        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100  sticky top-28 overflow-hidden group">
                            {/* Decorative background flare */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef662e] opacity-[0.03] rounded-bl-full transition-transform group-hover:scale-110" />

                            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8 flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-3">
                                    <Sparkles className="w-6 h-6 text-[#ef662e]" />
                                    {editingId ? "Edit" : "New"} Entry
                                </div>
                                {editingId && (
                                    <button
                                        onClick={() => {
                                            setEditingId(null);
                                            setFormData({ title: "", description: "", image: "", category: "", sites: ["rbiomeds"] });
                                        }}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Title</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full text-black bg-gray-50 border-2 border-transparent focus:border-[#ef662e]/20 focus:bg-white rounded-2xl p-4 text-sm font-medium transition-all outline-none"
                                        placeholder="Article Headline"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Category</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full text-black bg-gray-50 border-2 border-transparent focus:border-[#ef662e]/20 focus:bg-white rounded-2xl p-4 text-sm font-medium transition-all outline-none"
                                        placeholder="e.g. Innovation"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Image URL</label>
                                    <div className="relative">
                                        <input
                                            type="url"
                                            value={formData.image}
                                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                            className="w-full text-black bg-gray-50 border-2 border-transparent focus:border-[#ef662e]/20 focus:bg-white rounded-2xl p-4 pl-11 text-sm font-medium transition-all outline-none"
                                            placeholder="https://..."
                                        />
                                        <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Description</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full text-black bg-gray-50 border-2 border-transparent focus:border-[#ef662e]/20 focus:bg-white rounded-2xl p-4 text-sm font-medium transition-all outline-none resize-none"
                                        placeholder="Brief summary for the preview card..."
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Publish to</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { id: "rbiomeds", label: "Rbiomeds" },
                                            { id: "abc-international", label: "ABC" }
                                        ].map((site) => (
                                            <label
                                                key={site.id}
                                                className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.sites.includes(site.id)
                                                    ? "border-[#ef662e] bg-[#ef662e]/5 text-[#ef662e]"
                                                    : "border-gray-50 bg-gray-50 text-gray-400"
                                                    }`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={formData.sites.includes(site.id)}
                                                    onChange={(e) => {
                                                        const newSites = e.target.checked
                                                            ? [...formData.sites, site.id]
                                                            : formData.sites.filter(s => s !== site.id);
                                                        setFormData({ ...formData, sites: newSites });
                                                    }}
                                                />
                                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${formData.sites.includes(site.id) ? "border-[#ef662e] bg-[#ef662e]" : "border-gray-300"
                                                    }`}>
                                                    {formData.sites.includes(site.id) && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                                </div>
                                                <span className="text-xs font-black uppercase tracking-wider">{site.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    disabled={submitting}
                                    className="w-full bg-[#ef662e] text-white p-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
                                >
                                    {submitting ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            {editingId ? "Save Changes" : "Publish Entry"}
                                            {editingId ? (
                                                <Edit2 className="w-5 h-5" />
                                            ) : (
                                                <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
                                            )}
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Article List Section */}
                    <div className="lg:col-span-8">
                        <div className="flex items-center justify-between mb-8 px-2">
                            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter flex items-center gap-2">
                                <LayoutGrid className="w-5 h-5 text-gray-400" />
                                Live Entries
                            </h2>
                            <div className="flex gap-2">
                                <div className="p-2 bg-white rounded-lg border border-gray-100 text-gray-400">
                                    <LayoutGrid className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {loading ? (
                                <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[2.5rem] border border-gray-100">
                                    <Loader2 className="w-12 h-12 text-[#ef662e] animate-spin mb-4" />
                                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Loading Database...</p>
                                </div>
                            ) : articles.length === 0 ? (
                                <div className="bg-white p-20 rounded-[2.5rem] border border-gray-100 text-center">
                                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                                        <Plus className="w-8 h-8" />
                                    </div>
                                    <p className="text-gray-900 font-black uppercase tracking-tighter text-xl mb-2">No Entries Found</p>
                                    <p className="text-gray-400 font-medium">Start by creating your first journal entry on the left.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-6">
                                    {articles.map((article, index) => (
                                        <div
                                            key={article.id}
                                            className="bg-white p-6 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row items-center gap-8 group hover:border-[#ef662e]/10 transition-all duration-500"
                                        >
                                            <div className="relative w-full md:w-40 h-40 rounded-[2rem] overflow-hidden flex-shrink-0 bg-gray-100">
                                                {article.image ? (
                                                    <img src={article.image} alt={article.title} className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                        <ImageIcon className="w-10 h-10" />
                                                    </div>
                                                )}
                                                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest rounded-full z-10">
                                                    Slot {index + 1}
                                                </div>
                                            </div>

                                            <div className="flex-1 w-full">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ef662e] bg-[#ef662e]/5 px-3 py-1 rounded-full border border-[#ef662e]/10">
                                                        {article.category}
                                                    </span>
                                                    <div className="flex items-center gap-1.5 text-gray-400">
                                                        <Calendar className="w-3 h-3" />
                                                        <span className="text-[10px] font-bold uppercase tracking-wider">{article.date}</span>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        {article.sites?.map(site => (
                                                            <span key={site} className="text-[8px] font-black uppercase tracking-widest bg-gray-900 text-white px-2 py-0.5 rounded">
                                                                {site === 'rbiomeds' ? 'Rbiomeds' : 'ABC Intl'}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-tight mb-3 group-hover:text-[#ef662e] transition-colors">
                                                    {article.title}
                                                </h3>
                                                <p className="text-gray-500 text-sm font-medium line-clamp-2 leading-relaxed mb-6">
                                                    {article.description}
                                                </p>

                                                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex -space-x-2">
                                                            {[1, 2, 3].map((_, i) => (
                                                                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                                                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Draft</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => handleEdit(article)}
                                                            className="p-3 text-gray-300 hover:text-blue-500 hover:bg-blue-50 rounded-2xl transition-all"
                                                            title="Edit Entry"
                                                        >
                                                            <Edit2 className="w-5 h-5" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(article.id)}
                                                            className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                                                            title="Delete Entry"
                                                        >
                                                            <Trash2 className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminArticles;


"use client";
import React, { useState } from 'react';
import { Search, ChevronRight, Filter, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const allCategories = [
    // Prescription Medicines
    { id: 'cardiovascular', title: 'Cardiovascular', tab: 'prescription', slug: 'cardiovascular-prescription' },
    { id: 'anti-infectives', title: 'Anti-Infectives', tab: 'prescription', slug: 'anti-infectives-prescription' },
    { id: 'oncology', title: 'Oncology', tab: 'prescription', slug: 'oncology-prescription' },
    { id: 'ENT', title: 'ENT', tab: 'prescription', slug: 'ENT-prescription' },
    { id: 'haematology', title: 'Haematology', tab: 'prescription', slug: 'haematology-prescription' },
    { id: 'local-anesthetics', title: 'Local Anesthetics', tab: 'prescription', slug: 'local-anesthetics-prescription' },
    { id: 'dermatology', title: 'Dermatology', tab: 'prescription', slug: 'dermatology-prescription' },
    { id: 'endocrinology', title: 'Endocrinology', tab: 'prescription', slug: 'endocrinology-prescription' },
    { id: 'analgesic', title: 'Analgesic', tab: 'prescription', slug: 'analgesic-prescription' },
    { id: 'hepatology', title: 'Hepatology', tab: 'prescription', slug: 'hepatology-prescription' },
    { id: 'nephrology', title: 'Nephrology', tab: 'prescription', slug: 'nephrology-prescription' },
    { id: 'gi', title: 'GI', tab: 'prescription', slug: 'gi-prescription' },
    { id: 'urology', title: 'Urology', tab: 'prescription', slug: 'urology-prescription' },
    { id: 'oral-care', title: 'Oral Care', tab: 'prescription', slug: 'oral-care-prescription' },
    { id: 'biosimilar', title: 'Biosimilar', tab: 'prescription', slug: 'biosimilar-prescription' },
    { id: 'neurology', title: 'Neurology', tab: 'prescription', slug: 'neurology-prescription' },

    // Wellness and Nutrition
    { id: 'kids-care-wellness', title: 'Kids Care', tab: 'wellness', slug: 'kids-care-wellness' },
    { id: 'general-wellbeing-wellness', title: 'General Wellbeing', tab: 'wellness', slug: 'general-wellbeing-wellness' },
    { id: 'women-wellness', title: 'Women', tab: 'wellness', slug: 'women-wellness' },
    { id: 'diabetic-care-wellness', title: 'Diabetic Care', tab: 'wellness', slug: 'diabetic-care-wellness' },
    { id: 'eye-care-wellness', title: 'Eye Care', tab: 'wellness', slug: 'eye-care-wellness' },
    { id: 'neuro-wellness', title: 'Neuro', tab: 'wellness', slug: 'neuro-wellness' },
    { id: 'bone-health-wellness', title: 'Bone Health', tab: 'wellness', slug: 'bone-health-wellness' },

    // Health Concerns
    { id: 'general-wellbeing-health', title: 'General Wellbeing', tab: 'health', slug: 'general-wellbeing-health' },
    { id: 'child-health', title: 'Child', tab: 'health', slug: 'child-health' },
    { id: 'women-health', title: 'Women', tab: 'health', slug: 'women-health' },

    // Medical Devices
    { id: 'medical-devices', title: 'Medical Devices', tab: 'medical', slug: 'medical-devices' },

    // Vet Care
    { id: 'nutrition-vetcare', title: 'Nutrition', tab: 'vetcare', slug: 'nutrition-vetcare' },
    { id: 'food-vetcare', title: 'Food', tab: 'vetcare', slug: 'food-vetcare' },
];

const tabTitles = {
    prescription: 'Prescription Medicines',
    wellness: 'Wellness & Nutrition',
    health: 'Health Concerns',
    medical: 'Medical Devices',
    vetcare: 'Vet Care'
};

export default function Sidebar({ activeCategory }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const filteredCategories = allCategories.filter(cat =>
        cat.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Group categories by tab
    const groupedCategories = filteredCategories.reduce((acc, cat) => {
        if (!acc[cat.tab]) acc[cat.tab] = [];
        acc[cat.tab].push(cat);
        return acc;
    }, {});

    return (
        <div className="group/sidebar">
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-3.5 mb-6 text-black font-bold shadow-sm active:scale-[0.98] transition-all"
            >
                <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-[#e57f00]" />
                    <span>Filter by Category</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500">
                        {isOpen ? 'Close' : 'View All'}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </button>

            {/* Sidebar Content */}
            <div className={`
                ${isOpen ? 'block' : 'hidden'} 
                lg:block space-y-10 animate-in fade-in slide-in-from-top-4 duration-300 lg:animate-none
            `}>
                {/* Filter by Category */}
                <div>
                    <h3 className="hidden lg:block text-xl font-bold text-black mb-6">Filter by Category</h3>

                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="Search Categories"
                            className="w-full bg-gray-50 border border-gray-200 rounded-full pl-12 pr-5 py-3 text-gray-600 outline-none focus:border-[#e57f00] focus:ring-4 focus:ring-[#e57f00]/5 transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>

                    <div className="space-y-8 max-h-[500px] lg:max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                        {Object.entries(groupedCategories).map(([tabKey, cats]) => (
                            <div key={tabKey} className="space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 px-2 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-[#e57f00] rounded-full"></span>
                                    {tabTitles[tabKey]}
                                </h4>
                                <div className="space-y-1">
                                    {cats.map((cat) => (
                                        <Link
                                            key={cat.slug}
                                            href={`/ourproduct/${cat.slug}`}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center justify-between px-3 py-2.5 rounded-xl group/item transition-all ${activeCategory === cat.slug
                                                ? 'bg-[#e57f00] text-white font-semibold shadow-md shadow-[#e57f00]/20'
                                                : 'text-gray-600 hover:bg-gray-100 hover:text-[#e57f00]'
                                                }`}
                                        >
                                            <span className="text-[15px]">{cat.title}</span>
                                            <ChevronRight className={`w-4 h-4 transition-all duration-300 ${activeCategory === cat.slug
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0'
                                                }`} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {Object.keys(groupedCategories).length === 0 && (
                            <div className="text-center py-10 bg-gray-50 rounded-2xl border border-dashed border-gray-200 mx-2">
                                <Search className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                                <p className="text-gray-400 text-sm">No categories found</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

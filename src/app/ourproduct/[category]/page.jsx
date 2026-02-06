
import Sidebar from "@/components/Products/Sidebar";
import productsData from "@/components/data/products_detail.json";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/Products/ProductCard";

export default async function CategoryPage({ params }) {
    const { category: categorySlug } = await params;
    const products = productsData[categorySlug] || [];

    // Title mapping for better display
    const titleMap = {
        'cardiovascular-prescription': 'Cardiovascular',
        'anti-infectives-prescription': 'Anti-Infectives',
        'oncology-prescription': 'Oncology',
        'ENT-prescription': 'ENT',
        'haematology-prescription': 'Haematology',
        'local-anesthetics-prescription': 'Local Anesthetics',
        'dermatology-prescription': 'Dermatology',
        'endocrinology-prescription': 'Endocrinology',
        'analgesic-prescription': 'Analgesic',
        'hepatology-prescription': 'Hepatology',
        'nephrology-prescription': 'Nephrology',
        'gi-prescription': 'GI',
        'urology-prescription': 'Urology',
        'oral-care-prescription': 'Oral Care',
        'biosimilar-prescription': 'Biosimilar',
        'neurology-prescription': 'Neurology',
        'kids-care-wellness': 'Kids Care',
        'general-wellbeing-wellness': 'General Wellbeing',
        'women-wellness': 'Women\'s Care',
        'diabetic-care-wellness': 'Diabetic Care',
        'eye-care-wellness': 'Eye Care',
        'neuro-wellness': 'Neuro Care',
        'bone-health-wellness': 'Bone Health',
        'general-wellbeing-health': 'General Wellbeing',
        'child-health': 'Child Health',
        'women-health': 'Women\'s Health',
        'medical-devices': 'Medical Devices',
        'nutrition-vetcare': 'Vet Nutrition',
        'food-vetcare': 'Vet Food'
    };

    const categoryTitle = titleMap[categorySlug] || categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return (
        <div className="min-h-screen bg-white">

            <main className="pt-28 pb-20">
                <div className="container mx-auto px-6">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-[#fae57f]">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/ourproduct" className="hover:text-[#fae57f]">Products</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-[#000000] font-medium">{categoryTitle}</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <aside className="w-full lg:w-72 flex-shrink-0">
                            <Sidebar activeCategory={categorySlug} />
                        </aside>

                        {/* Product Content */}
                        <div className="flex-1">
                            <h1 className="text-4xl font-bold text-[#000000] mb-10">{categoryTitle}</h1>

                            {products.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                    {products.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                                    <p className="text-gray-400 text-lg">No products found for this category.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white  ">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-30 h-30 flex items-center justify-center overflow-hidden">
                        {/* Using the uploaded logo. If it's the pill shape in the image, we might need to adjust, but assuming it's the icon */}
                        <Image
                            src="/logoa.png"
                            alt="ABC International Logo"
                            width={150}
                            height={150}
                            className="object-cover" // Adjust as needed based on the actual image content
                        />
                    </div>

                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-[#ea9237] underline font-medium text-lg transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors">
                        About
                    </Link>
                    <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors">
                        Services
                    </Link>
                    <Link href="/ourproducts" className="text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors">
                        Our Products
                    </Link>
                    <Link href="/ourpeoples" className="text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors">
                        Our Peoples
                    </Link>


                </nav>

                {/* CTA Button */}
                <div className="flex items-center">
                    <Link href="/contact" className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
                        Contact us
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

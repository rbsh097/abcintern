"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Header() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-30 h-30 flex items-center justify-center overflow-hidden">
                        <Image
                            src="/logoa.png"
                            alt="ABC International Logo"
                            width={150}
                            height={150}
                            className="object-cover"
                        />
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'About', href: '#about' },
                        { name: 'Services', href: '/service' },
                        { name: 'Our Products', href: '#ourproducts' },
                        { name: 'Our Peoples', href: '#ourpeoples' },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${isActive(link.href)
                                ? 'text-[#ea9237]'
                                : 'text-gray-600 hover:text-gray-900'
                                } font-medium text-lg transition-colors`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="flex items-center">
                    <Link href="#contact" className="flex items-center gap-2 bg-gray-100 hover:bg-[#ea9237] text-black px-6 py-2.5 rounded-full text-lg font-medium hover:text-white transition-colors">
                        Contact us
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

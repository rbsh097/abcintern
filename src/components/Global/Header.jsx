"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => pathname === path;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/service" },
        { name: "Our Products", href: "/ourproduct" },
        { name: "Our People", href: "/ourpeople" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="ABC International Logo"
                        width={140}
                        height={140}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${isActive(link.href)
                                ? "text-[#ea9237]"
                                : "text-gray-600 hover:text-gray-900"
                                } font-medium text-lg transition-colors`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex">
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 bg-gray-100 hover:bg-[#ea9237] text-black px-6 py-2.5 rounded-full text-lg font-medium hover:text-white transition-colors"
                    >
                        Contact us
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-800"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t shadow-lg">
                    <nav className="flex flex-col px-6 py-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`${isActive(link.href)
                                    ? "text-[#ea9237]"
                                    : "text-gray-700"
                                    } text-lg font-medium`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Mobile CTA */}
                        <Link
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-4 inline-flex items-center justify-center gap-2 bg-[#ea9237] text-white px-6 py-3 rounded-full text-lg font-medium"
                        >
                            Contact us
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

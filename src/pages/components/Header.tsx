import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#EAF4FB] shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Resilient IT Services Logo"
                        width={150}
                        height={50}
                        className="object-contain max-h-[50px]"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-[#0F2C52] hover:text-blue-600">Home</Link>
                    <Link href="/services" className="text-[#0F2C52] hover:text-blue-600">Services</Link>
                    <Link href="/blog" className="text-[#0F2C52] hover:text-blue-600">Blog</Link>
                    <Link href="/#contact" className="text-[#0F2C52] hover:text-blue-600">Contact</Link>
                </nav>

                {/* Desktop CTA */}
                <a
                    href="/#contact"
                    className="hidden md:inline-block bg-[#1E90FF] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Let’s Talk
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6 text-[#0F2C52]" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d={isOpen
                                ? "M6 18L18 6M6 6l12 12" // X icon
                                : "M4 6h16M4 12h16M4 18h16"} // Hamburger
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Nav Panel */}
            {isOpen && (
                <div className="md:hidden animate-slideDown bg-[#EAF4FB]/90 backdrop-blur-md border-t border-blue-100 px-6 py-6 shadow-inner">
                    <nav className="flex flex-col gap-4 transition-opacity duration-300 ease-in-out">
                        <Link href="/" className="text-[#0F2C52] hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/services" className="text-[#0F2C52] hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="/blog" className="text-[#0F2C52] hover:text-blue-600" onClick={() => setIsOpen(false)}>Blog</Link>
                        <Link href="/#contact" className="text-[#0F2C52] hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
                        <a
                            href="/#contact"
                            className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Let’s Talk
                        </a>
                    </nav>
                </div>
            )}

        </header>
    );
}

import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-[#EAF4FB] shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Resilient IT Services Logo"
                        width={150}
                        height={50}
                        className="object-contain max-h-[50px]"
                    />
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-[#0F2C52] hover:text-blue-600">Home</Link>
                    <Link href="/services" className="text-[#0F2C52] hover:text-blue-600">Services</Link>
                    <Link href="/blog" className="text-[#0F2C52] hover:text-blue-600">Blog</Link>
                    <Link href="/#contact" className="text-[#0F2C52] hover:text-blue-600">Contact</Link>
                </nav>

                <a
                    href="/#contact"
                    className="hidden md:inline-block bg-[#1E90FF] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Let’s Talk
                </a>
            </div>
        </header>
    );
}

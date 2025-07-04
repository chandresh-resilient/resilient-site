'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as Element;
    if (target && !target.closest('.sidebar')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      window.location.href = e.currentTarget.href;
    }, 300);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm backdrop-blur-md text-gray-700' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Resilient Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* 🔹 Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-white-700 font-medium">
            <a href="/aboutus" className="hover:text-[#10B981] transition">About us</a>
            <div className="group relative">
              <button className="hover:text-[#10B981] transition flex items-center">Solutions <ChevronDown className="ml-1" size={16} /></button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                <a href="/our-solutions#Hyper-automation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Hyper automation</a>
                <a href="/our-solutions#Application-development" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Application development</a>
                <a href="/our-solutions#Extended-prototyping" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Extended prototyping</a>
                <a href="/low-code-enablement" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Low-code enablement</a>
                <a href="/our-solution-2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mendix Expert Review</a>
                <a href="/our-solutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">All solutions</a>
              </div>
            </div>
            <div className="group relative">
              <button className="hover:text-[#10B981] transition flex items-center">Industries <ChevronDown className="ml-1" size={16} /></button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                <a href="/industry-collections/healthcare" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Healthcare</a>
                <a href="/industry-collections/logistics-supply-chain" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logistics & Supply Chain</a>
                <a href="/industry-collections/manufacturing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Manufacturing</a>
                <a href="/industries" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">All industries</a>
              </div>
            </div>
            <a href="#team" className="hover:text-[#10B981] transition">Our team</a>
            <a href="#projects" className="hover:text-[#10B981] transition">Projects</a>
            <a href="#partners" className="hover:text-[#10B981] transition">Partners</a>
            <div className="group relative">
              <button className="hover:text-[#10B981] transition flex items-center">Resources <ChevronDown className="ml-1" size={16} /></button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                <a href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blogs</a>
                <a href="/low-code-cafe" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Low-Code Café</a>
                <a href="/white-paper" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Whitepapers</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Webinars & events</a>
              </div>
            </div>
            <a href="#vacancies" className="hover:text-[#10B981] transition">Vacancies</a>
            <a
              href="#contact"
              className="ml-4 px-4 py-2 bg-[#1E90FF] text-white rounded-full font-semibold hover:bg-blue-600 transition"
            >
              Get in touch
            </a>
          </nav>

          {/* 🔹 Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="md:hidden text-gray-700"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* 🔹 Mobile Sidebar */}
      {/* 🔹 Mobile Sidebar (Updated to Match Desktop) */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-md transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } sidebar`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="text-xl font-semibold text-[#1E90FF]">Menu</div>
          <button onClick={() => setIsOpen(false)} className="text-gray-700">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-gray-800 font-medium">
          <a href="#about" onClick={handleMenuItemClick}>About us</a>

          <span className="text-sm text-gray-500 uppercase mt-2">Solutions</span>
          <a href="/our-solutions#Hyper-automation" onClick={handleMenuItemClick}>Hyper automation</a>
          <a href="/our-solutions#Application-development" onClick={handleMenuItemClick}>Application development</a>
          <a href="/our-solutions#Extended-prototyping" onClick={handleMenuItemClick}>Extended prototyping</a>
          <a href="/low-code-enablement" onClick={handleMenuItemClick}>Low-code enablement</a>
          <a href="/our-solution-2" onClick={handleMenuItemClick}>Mendix Expert Review</a>
          <a href="/our-solutions" onClick={handleMenuItemClick}>All solutions</a>

          <span className="text-sm text-gray-500 uppercase mt-2">Industries</span>
          <a href="/industry-collections/healthcare" onClick={handleMenuItemClick}>Healthcare</a>
          <a href="/industry-collections/logistics-supply-chain" onClick={handleMenuItemClick}>Logistics & Supply Chain</a>
          <a href="/industry-collections/manufacturing" onClick={handleMenuItemClick}>Manufacturing</a>
          <a href="/industries" onClick={handleMenuItemClick}>All industries</a>

          <a href="#team" onClick={handleMenuItemClick}>Our team</a>
          <a href="#projects" onClick={handleMenuItemClick}>Projects</a>
          <a href="#partners" onClick={handleMenuItemClick}>Partners</a>

          <span className="text-sm text-gray-500 uppercase mt-2">Resources</span>
          <a href="/blog" onClick={handleMenuItemClick}>Blogs</a>
          <a href="/low-code-cafe" onClick={handleMenuItemClick}>Low-Code Café</a>
          <a href="/white-paper" onClick={handleMenuItemClick}>Whitepapers</a>
          <a href="#" onClick={handleMenuItemClick}>Webinars & events</a>

          <a href="#vacancies" onClick={handleMenuItemClick}>Vacancies</a>
          <a href="#contact" onClick={handleMenuItemClick}>Get in touch</a>
          <a href="#lang" onClick={handleMenuItemClick}>EN</a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

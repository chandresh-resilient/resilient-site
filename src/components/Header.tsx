'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white text-gray-800 transition-colors sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-purple-800 hover:text-purple-600">
         <img src="/logo.png" alt="Resilient IT Logo"  className="h-10 w-auto object-contain"/>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-md font-medium">
          <Link href="/" className=" hover:text-blue-600 ">Home</Link>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#technologies" className="hover:text-blue-600 transition">Technologies</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-800 bg-white">
           <Link href="/" className=" hover:text-blue-600 ">Home</Link>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#technologies" className="hover:text-blue-600 transition">Technologies</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      )}
    </header>
  )
} 

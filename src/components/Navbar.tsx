import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as Element;
    if (target && !target.closest('.sidebar')) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
   

    if (isOpen) {   
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      window.location.href = e.currentTarget.href;
    }, 300); // Adjust the delay as needed
  };

  return (
    <>
      <div className="w-full px-4">
        {/* 🔹 Desktop Nav Bar */}
        <div className="hidden md:flex items-center justify-between bg-background shadow">
          <div className="flex items-center gap-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Resilient Logo"
                width={100}
                height={50}
                className="object-cover w-full h-full"
              />
            </Link>
          </div>
          <nav className="flex justify-center gap-8 text-text font-medium pr-6">
            <a href="/" className="hover-text-primary px-2 pr-4 transition duration-200 ease-in-out">Home</a>
            <a href="/services" className="hover-text-primary px-2 pr-4 transition duration-200 ease-in-out">Services</a>
            <a href="/blog" className="hover-text-primary px-2 pr-4 transition duration-200 ease-in-out">Blog</a>
            <a href="/#contact" className="hover-text-primary px-2 pr-10 transition duration-200 ease-in-out">Contact</a>
          </nav>
        </div>
        {/* 🔹 Mobile Nav Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-background shadow md:hidden">
          <button onClick={(event) => { event.stopPropagation(); setIsOpen(!isOpen); }} className="text-text">
            <Menu size={28} />
          </button>
          <div className="flex items-center gap-0">
            <Link href="/">
              <Image
                src="/mlogo.png"
                alt="Resilient Mobile Logo"
                width={30}
                height={40}  // Adjusted height for better fit
                className="object-cover"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* 🔹 Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-background shadow-md transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sidebar`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="text-xl font-semibold text-primary">Menu</div>
          <button onClick={() => setIsOpen(false)} className="text-text">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-text">
          <a href="/" onClick={handleMenuItemClick} className="hover-text-primary">Home</a>
          <a href="/about" onClick={handleMenuItemClick} className="hover-text-primary">About</a>
          <a href="/services" onClick={handleMenuItemClick} className="hover-text-primary">Services</a>
          <a href="/blog" onClick={handleMenuItemClick} className="hover-text-primary">Blog</a>
          <a href="/contact" onClick={handleMenuItemClick} className="hover-text-primary">Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

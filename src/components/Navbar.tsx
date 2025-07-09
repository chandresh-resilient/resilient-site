import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Shield,
  Server,
  Cloud,
  Code,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "About us", href: "/aboutus" },
    {
      name: "Solutions",
      href: "/solutions",
      hasDropdown: true,
      subItems: [
        { name: "Cloud Migration", href: "/solutions#cloud-migration" },
        { name: "Cybersecurity", href: "/solutions#cybersecurity" },
        {
          name: "Infrastructure Management",
          href: "/solutions#infrastructure",
        },
        {
          name: "Digital Transformation",
          href: "/solutions#digital-transformation",
        },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      hasDropdown: true,
      subItems: [
        { name: "Healthcare", href: "/industries#healthcare" },
        { name: "Finance", href: "/industries#finance" },
        { name: "Education", href: "/industries#education" },
        { name: "Manufacturing", href: "/industries#manufacturing" },
        { name: "Retail", href: "/industries#retail" },
      ],
    },
    { name: "Our team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Case Studies", href: "/case-studies" },
    {
      name: "Resources",
      href: "/blog",
      hasDropdown: true,
      subItems: [
        { name: "Blog", href: "/blog" },
        { name: "Whitepapers", href: "/blog#whitepapers" },
        { name: "Documentation", href: "/blog#documentation" },
        { name: "Webinars", href: "/blog#webinars" },
      ],
    },
    { name: "Careers", href: "/career" },
  ];

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const services = [
    {
      icon: Shield,
      title: "Cybersecurity",
      desc: "Advanced threat protection",
    },
    {
      icon: Server,
      title: "Infrastructure",
      desc: "Scalable server solutions",
    },
    { icon: Cloud, title: "Cloud Services", desc: "Seamless cloud migration" },
    { icon: Code, title: "Development", desc: "Custom software solutions" },
  ];

  return (
    <div className="bg-gray-900 relative overflow-hidden font-sans">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all  duration-300 ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-lg border-b border-blue-500/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg hover:shadow-[0_0_8px_#00A3E0] transition-all duration-300">
                  <img
                    src="/mlogo.png"
                    alt="Resilient Logo"
                    className="w-8 h-10"
                  />
                </div>
                <h1 className="text-2xl  font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                  Resilient IT Services
                </h1>
              </div>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-5 text-sm">
                {navigationItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.hasDropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                        </Link>

                        {/* Dropdown Menu */}
                        <div
                          className={`absolute top-full left-0 mt-1 w-56 bg-gray-900/95 backdrop-blur-lg border border-blue-500/30 rounded-lg shadow-xl transition-all duration-200 ${
                            activeDropdown === index
                              ? "opacity-100 visible transform translate-y-0"
                              : "opacity-0 invisible transform -translate-y-2"
                          }`}
                        >
                          <div className="py-2">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-500/10 transition-colors duration-200"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact-detail"
                  className="bg-gradient-to-r  from-blue-500 to-blue-300 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-400 transition-all duration-200 transform hover:scale-105 shadow-[0_0_5px_#00A3E0] hover:shadow-[0_0_8px_#00A3E0]"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-b border-blue-500/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(index)}
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === index && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact-detail"
                className="block text-center bg-gradient-to-r  from-blue-500 to-blue-300 text-white px-3 py-2 rounded-lg hover:from-blue-600 hover:to-blue-400 transition-all duration-200 mt-2 shadow-[0_0_5px_#00A3E0] hover:shadow-[0_0_8px_#00A3E0]"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-500/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400/50 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
}

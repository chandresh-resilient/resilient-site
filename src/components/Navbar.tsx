import React, { useState, useEffect } from "react";
import { Menu, X, Shield, Server, Cloud, Code, ArrowRight, ChevronDown } from "lucide-react";

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
    { name: "About us", href: "#about" },
    {
      name: "Solutions",
      href: "/solutions",
      hasDropdown: true,
      subItems: [
        { name: "Cloud Migration", href: "/solutions#cloud-migration" },
        { name: "Cybersecurity", href: "/solutions#cybersecurity" },
        { name: "Infrastructure Management", href: "/solutions#infrastructure" },
        { name: "Digital Transformation", href: "/solutions#digital-transformation" },
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
    { icon: Shield, title: "Cybersecurity", desc: "Advanced threat protection" },
    { icon: Server, title: "Infrastructure", desc: "Scalable server solutions" },
    { icon: Cloud, title: "Cloud Services", desc: "Seamless cloud migration" },
    { icon: Code, title: "Development", desc: "Custom software solutions" },
  ];

  return (
    <div className=" bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-30"></div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-900/90 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 animate-float">
              <div className="w-10 h-10  rounded-lg flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                <img src="/mlogo.png" alt="Resilient Logo" className="w-8 h-10" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Resilient IT Services
              </h1>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-6">
                {navigationItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.hasDropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <a
                          href={item.href}
                          className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                        </a>

                        {/* Dropdown Menu */}
                        <div
                          className={`absolute top-full left-0 mt-1 w-56 bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl transition-all duration-200 ${
                            activeDropdown === index
                              ? "opacity-100 visible transform translate-y-0"
                              : "opacity-0 invisible transform -translate-y-2"
                          }`}
                        >
                          <div className="py-2">
                            {item.subItems.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
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
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <button className="w-full text-left bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

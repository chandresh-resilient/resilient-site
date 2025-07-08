// "use client";
// import { useState, useEffect } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const handleScroll = () => {
//     setScrolled(window.scrollY > 20);
//   };

//   const handleOutsideClick = (event: MouseEvent) => {
//     const target = event.target as Element;
//     if (target && !target.closest(".sidebar")) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     if (isOpen) {
//       document.addEventListener("click", handleOutsideClick);
//     } else {
//       document.removeEventListener("click", handleOutsideClick);
//     }
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [isOpen]);

  

//   const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     // e.preventDefault();
//     setIsOpen(false);
//     // setTimeout(() => {
//     //   window.location.href = e.currentTarget.href;
//     // }, 300);
//   };

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white shadow-sm backdrop-blur-md  text-black"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/logo.png"
//               alt="Resilient Logo"
//               width={100}
//               height={50}
//               className="object-contain"
//             />
//           </Link>

//           {/* 🔹 Desktop Menu */}
//           <nav className="hidden md:flex items-center gap-6 font-medium">
//             <a href="/aboutus" className="hover:text-[#10B981] transition">
//               About us
//             </a>
//             <div className="relative group">
//               {/* Trigger */}
//               <button className="hover:text-[#10B981] transition cursor-pointer flex items-center">
//                 Solutions <ChevronDown className="ml-1" size={16} />
//               </button>

//               {/* Dropdown Menu */}
//               <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                 <a
//                   href="/solutions#Hyper-automation"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Hyper automation
//                 </a>
//                 <a
//                   href="/solutions#Application-development"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Application development
//                 </a>
//                 <a
//                   href="/solutions#Extended-prototyping"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Extended prototyping
//                 </a>
//                 <a
//                   href="/solutions#low-code-enablement"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Low-code enablement
//                 </a>
//                 <a
//                   href="/solutions#expert-review"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Mendix Expert Review
//                 </a>
//                 <a
//                   href="/solutions"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   All solutions
//                 </a>
//               </div>
//             </div>
//             <div className="group relative">
//               <button className="hover:text-[#10B981] transition  cursor-pointer flex items-center">
//                 Industries <ChevronDown className="ml-1" size={16} />
//               </button>
//               <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                 <a
//                   href="/industries#healthcare"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Healthcare
//                 </a>
//                 <a
//                   href="/industries#retail"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Logistics & Supply Chain
//                 </a>
//                 <a
//                   href="/industries#finance"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Finance
//                 </a>
//                 <a
//                   href="/industries"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   All industries
//                 </a>
//               </div>
//             </div>
//             <a href="/team" className="hover:text-[#10B981] transition">
//               Our team
//             </a>
//             <a href="/projects" className="hover:text-[#10B981] transition">
//               Projects
//             </a>
//             <a href="/case-studies" className="hover:text-[#10B981] transition">
//               Case Studies
//             </a>
//             <div className="group relative">
//               <button className="hover:text-[#10B981] transition  cursor-pointer flex items-center">
//                 Resources <ChevronDown className="ml-1" size={16} />
//               </button>
//               <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                 <a
//                   href="/blog"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Blogs
//                 </a>
//                 <a
//                   href="/blog#low-code-cafe"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Low-Code Café
//                 </a>
//                 <a
//                   href="/blog#white-paper"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Whitepapers
//                 </a>
//                 <a
//                   href="/blog#webinars-events"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Webinars & events
//                 </a>
//               </div>
//             </div>
//             <a href="/career" className="hover:text-[#10B981] transition">
//               Careers
//             </a>
//             <a
//               href="/contact-detail"
//               className="ml-4 px-4 py-2 bg-[#1E90FF] text-white rounded-full font-semibold hover:bg-blue-600 transition"
//             >
//               Get in touch
//             </a>
//           </nav>

//           {/* 🔹 Mobile Menu Button */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setIsOpen(!isOpen);
//             }}
//             className="md:hidden text-gray-700"
//           >
//             <Menu size={28} />
//           </button>
//         </div>
//       </header>

//       {/* 🔹 Mobile Sidebar */}
//       {/* 🔹 Mobile Sidebar (Updated to Match Desktop) */}
//       <div
//         className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-md transform transition-transform duration-300 md:hidden overflow-y-auto max-h-screen  ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } sidebar`}
//       >
//         <div className="flex items-center justify-between px-4 py-3 border-b">
//           <div className="text-xl font-semibold text-[#1E90FF]">Menu</div>
//           <button onClick={() => setIsOpen(false)} className="text-gray-700">
//             <X size={24} />
//           </button>
//         </div>
//         <nav className="flex flex-col gap-4 p-4 text-gray-800 font-medium">
//           <a href="/aboutus" onClick={handleMenuItemClick}>
//             About us
//           </a>

//           <span className="text-sm text-gray-500 uppercase mt-2">
//             Solutions
//           </span>
//           <a
//             href="/solutions#Hyper-automation"
//             onClick={handleMenuItemClick}
//           >
//             Hyper automation
//           </a>
//           <a
//             href="/solutions#Application-development"
//             onClick={handleMenuItemClick}
//           >
//             Application development
//           </a>
//           <a
//             href="/solutions#Extended-prototyping"
//             onClick={handleMenuItemClick}
//           >
//             Extended prototyping
//           </a>
//           <a href="/solutions#low-code-enablement" onClick={handleMenuItemClick}>
//             Low-code enablement
//           </a>
//           <a href="/solutions#expert-review" onClick={handleMenuItemClick}>
//             Mendix Expert Review
//           </a>
//           <a href="/solutions" onClick={handleMenuItemClick}>
//             All solutions
//           </a>

//           <span className="text-sm text-gray-500 uppercase mt-2">
//             Industries
//           </span>
//           <a
//             href="/industries#healthcare"
//             onClick={handleMenuItemClick}
//           >
//             Healthcare
//           </a>
//           <a
//             href="/industries#retail"
//             onClick={handleMenuItemClick}
//           >
//             Logistics & Supply Chain
//           </a>
//           <a
//             href="/industries#finance"
//             onClick={handleMenuItemClick}
//           >
//             Finance
//           </a>
//           <a href="/industries" onClick={handleMenuItemClick}>
//             All industries
//           </a>

//           <a href="/team" onClick={handleMenuItemClick}>
//             Our team
//           </a>
//           <a href="/projects" onClick={handleMenuItemClick}>
//             Projects
//           </a>
//           <a href="/case-studies" onClick={handleMenuItemClick}>
//             Case Studies
//           </a>

//           <span className="text-sm text-gray-500 uppercase mt-2">
//             Resources
//           </span>
//           <a href="/blog" onClick={handleMenuItemClick}>
//             Blogs
//           </a>
//           <a href="/blog#low-code-cafe" onClick={handleMenuItemClick}>
//             Low-Code Café
//           </a>
//           <a href="/blog#white-paper" onClick={handleMenuItemClick}>
//             Whitepapers
//           </a>
//           <a href="/blog#webinars-events" onClick={handleMenuItemClick}>
//             Webinars & events
//           </a>

//           <a href="/career" onClick={handleMenuItemClick}>
//             Careers
//           </a>
//           <a href="/contact-detail" onClick={handleMenuItemClick}>
//             Get in touch
//           </a>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Server, Cloud, Code, ArrowRight, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'About us', href: '#about' },
    { 
      name: 'Solutions', 
      href: '/solutions',
      hasDropdown: true,
      subItems: [
        { name: 'Cloud Migration', href: '/solutions#cloud-migration' },
        { name: 'Cybersecurity', href: '/solutions#cybersecurity' },
        { name: 'Infrastructure Management', href: '/solutions#infrastructure' },
        { name: 'Digital Transformation', href: '/solutions#digital-transformation' }
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
      hasDropdown: true,
      subItems: [
        { name: 'Healthcare', href: '/industries#healthcare' },
        { name: 'Finance', href: '/industries#finance' },
        { name: 'Education', href: '/industries#education' },
        { name: 'Manufacturing', href: '/industries#manufacturing' },
        { name: 'Retail', href: '/industries#retail' }
      ]
    },
    { name: 'Our team', href: '/team' },
    { name: 'Projects', href: '/projects' },
    { name: 'Case Studies', href: '/case-studies' },
    { 
      name: 'Resources', 
      href: '/blog',
      hasDropdown: true,
      subItems: [
        { name: 'Blog', href: '/blog' },
        { name: 'Whitepapers', href: '/blog#whitepapers' },
        { name: 'Documentation', href: '/blog#documentation' },
        { name: 'Webinars', href: '/blog#webinars' }
      ]
    },
    { name: 'Careers', href: '/career' }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const services = [
    { icon: Shield, title: "Cybersecurity", desc: "Advanced threat protection" },
    { icon: Server, title: "Infrastructure", desc: "Scalable server solutions" },
    { icon: Cloud, title: "Cloud Services", desc: "Seamless cloud migration" },
    { icon: Code, title: "Development", desc: "Custom software solutions" }
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
          

 <div className="flex items-center space-x-3 animate-float">
          <div className="w-10 h-10  rounded-lg flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
            <img src="/mlogo.png" alt="Resilient Logo" className='w-8 h-10' />
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
                        <div className={`absolute top-full left-0 mt-1 w-56 bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl transition-all duration-200 ${
                          activeDropdown === index 
                            ? 'opacity-100 visible transform translate-y-0' 
                            : 'opacity-0 invisible transform -translate-y-2'
                        }`}>
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
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
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

      {/* Hero Section */}
      {/* <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8"> */}
            {/* Badge */}
            {/* <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Trusted by 500+ businesses</span>
            </div> */}

            {/* Main Heading */}
            {/* <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Resilient IT</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Empowering businesses with cutting-edge technology solutions that drive innovation, enhance security, and ensure operational excellence.
              </p>
            </div> */}

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
                Learn More
              </button>
            </div> */}

            {/* Services Grid */}
            {/* <div className="mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Stats */}
            {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"> */}
              {/* <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div> */}
            {/* </div> */}
          {/* </div>
        </div>
      </div> */}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
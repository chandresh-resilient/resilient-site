"use client";

import Image from "next/image";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import HeroHeader from "@/components/Heroheader";
import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">(
    "values"
  );
  const [start, setStart] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = {
    mission: `Empower clients through innovative low-code solutions that drive digital transformation.`,
    vision: `Be the leading force in revolutionizing how businesses build software through cutting-edge low-code platforms.`,
    values: `
      Innovation: Embrace creativity and cutting-edge technology to deliver superior solutions.
      \n\nWork Culture: Foster an open work culture that empowers employees to achieve maximum performance while maintaining a healthy work-life balance.
    `,
  };

  const counters = [
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 24, suffix: "*7", label: "Support Available" },
    { value: 5, suffix: "+", label: "Years Experience" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  function AnimatedCounter({
    value,
    suffix,
  }: {
    value: number;
    suffix?: string;
  }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = value;
      const duration = 1200;
      const increment = end / (duration / 16);

      const step = () => {
        start += increment;
        if (start < end) {
          setCount(Math.ceil(start));
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      step();
    }, [value]);

    return (
      <>
        {count}
        {suffix}
      </>
    );
  }
  return (
    <Layout>
      <HeroHeader heading="About Us"></HeroHeader>
      <section
        className="max-w-7xl  text-black  mx-auto px-4 py-16"
        id="about"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Resilient IT Services
            </h2>
            <p className="text-lg text-black mb-4 leading-relaxed">
              Resilient IT Services is a forward-thinking technology company
              focused on delivering agile and scalable digital solutions using
              cutting-edge low-code platforms like Mendix, OutSystems, Caspio,
              and modern stacks like React and Vite.
            </p>
            <p className="text-md text-purple-700">
              We empower businesses to streamline operations and accelerate
              innovation by reducing development time while maintaining high
              quality and flexibility. Our goal is to help clients digitally
              transform with confidence and speed.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-10 text-black">
          About core Strength
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/about.png"
              alt="Team Meeting"
              width={800}
              height={600}
              className="rounded-md shadow-lg object-cover"
            />
          </div>

          {/* Right Tabs */}
          <div className="w-full md:w-1/2">
            {/* Tabs */}
            <div className="flex space-x-6 border-b mb-6">
              {["mission", "vision", "values"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`pb-2 text-lg font-semibold capitalize ${
                    activeTab === tab
                      ? "border-b-2 border-purple-500 text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <p className="text-gray-700 whitespace-pre-line">
              {content[activeTab]}
            </p>
          </div>
        </div>
      </section>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="intersection-observer">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're not just another IT company. We're your strategic partner
                in digital transformation, specializing in low-code technologies
                that deliver results faster than traditional development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      10x Faster Development
                    </h3>
                    <p className="text-gray-600">
                      Accelerate your time-to-market with our low-code expertise
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Cost-Effective Solutions
                    </h3>
                    <p className="text-gray-600">
                      Reduce development costs by up to 70% with our approach
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600">
                      Certified professionals with deep platform expertise
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="intersection-observer">
              <div className="floating-card bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
                <p className="mb-6">
                  Join hundreds of businesses that have accelerated their
                  digital journey with us.
                </p>
                <div
                  ref={sectionRef}
                  className="grid grid-cols-2 gap-4 text-center"
                >
                  {counters.map(({ value, suffix, label }, index) => (
                    <div key={index} className="text-center">
                      <h3 className="text-3xl md:text-4xl font-bold">
                        {start ? (
                          <AnimatedCounter value={value} suffix={suffix} />
                        ) : (
                          `0${suffix}`
                        )}
                      </h3>
                      <p className="mt-2 text-sm">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;



















// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Shield, Server, Cloud, Code, Users, ArrowRight, Play, CheckCircle } from 'lucide-react';

// const ResilientITServices = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const timer = setInterval(() => {
//       setCurrentSlide(prev => (prev + 1) % services.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   const services = [
//     {
//       icon: <Shield className="w-12 h-12" />,
//       title: "Cybersecurity Solutions",
//       description: "Protect your business with enterprise-grade security measures and threat detection systems.",
//       features: ["24/7 Monitoring", "Threat Intelligence", "Incident Response"]
//     },
//     {
//       icon: <Cloud className="w-12 h-12" />,
//       title: "Cloud Infrastructure",
//       description: "Scalable cloud solutions that grow with your business needs and optimize performance.",
//       features: ["AWS/Azure Migration", "Auto-scaling", "Cost Optimization"]
//     },
//     {
//       icon: <Server className="w-12 h-12" />,
//       title: "Managed IT Services",
//       description: "Complete IT management and support to keep your systems running smoothly 24/7.",
//       features: ["Remote Support", "System Maintenance", "Backup Solutions"]
//     },
//     {
//       icon: <Code className="w-12 h-12" />,
//       title: "Custom Development",
//       description: "Tailored software solutions built to meet your specific business requirements.",
//       features: ["Web Applications", "Mobile Apps", "API Integration"]
//     }
//   ];

//   const stats = [
//     { number: "500+", label: "Clients Served" },
//     { number: "99.9%", label: "Uptime Guaranteed" },
//     { number: "24/7", label: "Support Available" },
//     { number: "10+", label: "Years Experience" }
//   ];

//   const FloatingParticles = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(20)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 3}s`,
//             animationDuration: `${3 + Math.random() * 2}s`
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
//       <FloatingParticles />
      
//       {/* Animated Background Grid */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.05)_50%,_transparent_100%)]" />
//       </div>

//       {/* Header */}
//       <header className="relative z-10 p-6 flex justify-between items-center">
//         <div className="flex items-center space-x-3">
//           <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//             <Shield className="w-6 h-6 text-white" />
//           </div>
//           <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Resilient IT Services
//           </h1>
//         </div>
        
//         <nav className="hidden md:flex space-x-8">
//           {['Home', 'Services', 'About', 'Contact'].map((item) => (
//             <a
//               key={item}
//               href="#"
//               className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
//             >
//               {item}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
//             </a>
//           ))}
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="relative z-10 px-6 py-20 text-center">
//         <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
//             Future-Ready
//             <br />
//             <span className="text-white">IT Solutions</span>
//           </h2>
          
//           <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Empowering businesses with cutting-edge technology solutions that drive innovation, 
//             enhance security, and accelerate digital transformation.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
//             <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
//               <span className="relative z-10 flex items-center">
//                 Get Started Today
//                 <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>
            
//             <button className="group flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg hover:border-white/40 transition-all duration-300 hover:bg-white/5">
//               <Play className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
//               Watch Demo
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
//                 <div className="text-gray-400">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Slider */}
//       <section className="relative z-10 px-6 py-20">
//         <div className="max-w-6xl mx-auto">
//           <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Our Services
//           </h3>

//           <div className="relative">
//             <div className="overflow-hidden rounded-2xl">
//               <div 
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               >
//                 {services.map((service, index) => (
//                   <div key={index} className="min-w-full px-4">
//                     <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
//                       <div className="flex flex-col md:flex-row items-center gap-8">
//                         <div className="flex-shrink-0 text-blue-400 mb-6 md:mb-0">
//                           {service.icon}
//                         </div>
                        
//                         <div className="flex-1 text-center md:text-left">
//                           <h4 className="text-3xl font-bold mb-4 text-white">{service.title}</h4>
//                           <p className="text-gray-300 text-lg mb-6 leading-relaxed">{service.description}</p>
                          
//                           <div className="flex flex-wrap gap-3 justify-center md:justify-start">
//                             {service.features.map((feature, featureIndex) => (
//                               <span
//                                 key={featureIndex}
//                                 className="flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30"
//                               >
//                                 <CheckCircle className="w-4 h-4 mr-2" />
//                                 {feature}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Slider Navigation */}
//             <div className="flex justify-center mt-8 gap-4">
//               <button
//                 onClick={() => setCurrentSlide(prev => (prev - 1 + services.length) % services.length)}
//                 className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
              
//               <div className="flex space-x-2 items-center">
//                 {services.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentSlide ? 'bg-blue-400 scale-125' : 'bg-white/30 hover:bg-white/50'
//                     }`}
//                   />
//                 ))}
//               </div>
              
//               <button
//                 onClick={() => setCurrentSlide(prev => (prev + 1) % services.length)}
//                 className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="relative z-10 px-6 py-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20 hover:border-white/30 transition-all duration-300">
//             <Users className="w-16 h-16 text-blue-400 mx-auto mb-6" />
//             <h3 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h3>
//             <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//               Join hundreds of businesses that trust Resilient IT Services to power their digital future. 
//               Let's discuss how we can help you achieve your technology goals.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
//                 <span className="relative z-10 flex items-center justify-center">
//                   Schedule Consultation
//                   <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </button>
              
//               <button className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg hover:border-white/40 transition-all duration-300 hover:bg-white/5">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative z-10 px-6 py-12 border-t border-white/20">
//         <div className="max-w-6xl mx-auto text-center">
//           <div className="flex items-center justify-center space-x-3 mb-6">
//             <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//               <Shield className="w-5 h-5 text-white" />
//             </div>
//             <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Resilient IT Services
//             </span>
//           </div>
//           <p className="text-gray-400">
//             © 2025 Resilient IT Services. All rights reserved. Building tomorrow's technology today.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ResilientITServices;
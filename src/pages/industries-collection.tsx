'use client';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { link } from 'fs';

const industries = [
  {
    title: "Healthcare",
    description:
      "Improving patient outcomes through modern digital solutions and data-driven care.",
    image: "/industries/healthcare.jpg",
    link: "/industries#healthcare",
  },
  {
    title: "Automobiles",
    description:
      "Driving innovation with connected vehicle technologies and smart manufacturing.",
    image: "/industries/automobiles.jpg",
    link: "/industries#automobiles",
  },
  {
    title: "Finance",
    description:
      "Enabling secure, fast, and user-friendly digital finance platforms for modern banking.",
    image: "/industries/finance.jpg",
    link: "/industries#finance",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Delivering seamless shopping experiences with intelligent supply chain and omnichannel tech.",
    image: "/industries/retail.jpg",
    link: "/industries#retail",
  },
  {
    title: "Logistics",
    description:
      "Optimizing operations with real-time tracking, route planning, and smart warehouses.",
    image: "/industries/logistics.jpg",
    link: "/industries#logistics",
  },
  {
    title: "Education",
    description:
      "Empowering learners and educators with intuitive, remote-first learning experiences.",
    image: "/industries/education.jpg",
    link: "/industries#education",
  },
];

export default function IndustriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative bg-white px-4 sm:px-6 py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-black">
        Industries We Serve
      </h2>

      <div className="relative">
        {/* Scroll buttons - hidden on small screens */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full"
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </button>

        {/* Scrollable card container */}
        <div
          ref={scrollRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-auto no-scrollbar scroll-smooth px-1 sm:px-2"
        >
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[65vw] max-w-[350px] h-[350px] sm:h-[460px] flex-shrink-0 rounded-xl overflow-hidden group shadow-lg"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-75 group-hover:grayscale"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                <p className="text-xs sm:text-sm mt-1 line-clamp-3">{item.description}</p>
                <a href={item.link} className="mt-2 flex items-center gap-1 text-sm font-medium tracking-wide">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

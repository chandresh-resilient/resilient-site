'use client';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const industries = [
  {
    title: "Healthcare",
    description:
      "Improving patient outcomes through modern digital solutions and data-driven care.",
    image: "/industries/healthcare.jpg",
  },
  {
    title: "Automobiles",
    description:
      "Driving innovation with connected vehicle technologies and smart manufacturing.",
    image: "/industries/automobiles.jpg",
  },
  {
    title: "Finance",
    description:
      "Enabling secure, fast, and user-friendly digital finance platforms for modern banking.",
    image: "/industries/finance.jpg",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Delivering seamless shopping experiences with intelligent supply chain and omnichannel tech.",
    image: "/industries/retail.jpg",
  },
  {
    title: "Logistics",
    description:
      "Optimizing operations with real-time tracking, route planning, and smart warehouses.",
    image: "/industries/logistics.jpg",
  },
  {
    title: "Education",
    description:
      "Empowering learners and educators with intuitive, remote-first learning experiences.",
    image: "/industries/education.jpg",
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
    <div className="relative bg-white px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-900">Industries We Serve</h2>

      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full"
        >
           <ChevronLeft className="w-5 h-5 text-black text-6xl" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full"
        >
        <ChevronRight className="w-5 h-5 text-black text-6xl" />
        </button>

        {/* Scrollable card container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth px-2"
        >
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[350px] h-[480px] flex-shrink-0 rounded-xl overflow-hidden group shadow-lg"
            >
              {/* Image with hover scale */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

              {/* Text content */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <h5 className='text-white text-sm line-clamp-3'>{item.description}</h5>
                <p className="mt-3 flex items-center gap-1 text-sm font-medium tracking-wide">
                  <span>→</span> READ MORE
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Emily Zhao",
    company: "Allianz Trade",
    quote: "Resilient IT helped us modernize our insurance portal. The team was professional, fast, and delivered measurable results.",
    image: "/images/person1.jpg",
  },
  {
    name: "Jeroen De Vries",
    company: "Zendeq",
    quote: "We doubled our conversion rate after implementing their low-code trading solution. Incredible speed and quality.",
    image: "/images/person2.jpg",
  },
  {
    name: "Li Wei",
    company: "Tencent",
    quote: "Their Kubernetes-native Mendix solution improved our release velocity by 60%. We’re extremely happy with the partnership.",
    image: "/images/person3.jpg",
  },
  {
    name: "Aditi Sharma",
    company: "Tech Innovators",
    quote: "The team at Resilient IT Services transformed our digital operations. Their expertise in low-code platforms is unmatched.",
    image: "/images/person4.jpg",
  },
  {
    name: "Carlos Mendez",
    company: "Global Logistics",
    quote: "Their low-code solutions streamlined our logistics processes, saving us time and resources. Highly recommend!",
    image: "/images/person1.jpg",
  },
  {
    name: "Sofia Petrova",
    company: "EduTech Solutions",
    quote: "Resilient IT Services delivered a robust low-code platform for our educational tools. Their support was exceptional.",
    image: "/images/person3.jpg",
  },
];

const itemsPerPage = 3;

export default function TestimonialCarousel() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  useEffect(() => {
    const timer = setInterval(() => nextPage(), 6000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = testimonials.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-6 text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index }}
              className="bg-white border border-gray-100 shadow-md rounded-xl p-6 flex flex-col justify-between text-left hover:shadow-lg transition-all"
            >
              <p className="text-sm italic text-gray-600 mb-4 leading-relaxed">
                “{testimonial.quote}”
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <p className="font-semibold text-[#1a103d] text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={prevPage}
          className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>
        <button
          onClick={nextPage}
          className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              page === i ? 'bg-blue-600 scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

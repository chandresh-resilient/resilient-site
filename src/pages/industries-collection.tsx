'use client';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react';

type Industry = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const industries: Industry[] = [
  {
    title: 'Healthcare',
    description: 'Improving patient outcomes through modern digital solutions and data-driven care.',
    image: '/industries/healthcare.jpg',
    link: '/industries#healthcare',
  },
  {
    title: 'Automobiles',
    description: 'Driving innovation with connected vehicle technologies and smart manufacturing.',
    image: '/industries/automobiles.jpg',
    link: '/industries#automobiles',
  },
  {
    title: 'Finance',
    description: 'Enabling secure, fast, and user-friendly digital finance platforms for modern banking.',
    image: '/industries/finance.jpg',
    link: '/industries#finance',
  },
  {
    title: 'Retail & E-commerce',
    description: 'Delivering seamless shopping experiences with intelligent supply chain and omnichannel tech.',
    image: '/industries/retail.jpg',
    link: '/industries#retail',
  },
  {
    title: 'Logistics',
    description: 'Optimizing operations with real-time tracking, route planning, and smart warehouses.',
    image: '/industries/logistics.jpg',
    link: '/industries#logistics',
  },
  {
    title: 'Education',
    description: 'Empowering learners and educators with intuitive, remote-first learning experiences.',
    image: '/industries/education.jpg',
    link: '/industries#education',
  },
];

// Animation Variants
const cardVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeInOut' },
  }),
};

const IndustriesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-12 sm:py-16 bg-gray-900 font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-gray-900/50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%2300A3E0 fill-opacity=0.15%3E%3Cpath d=M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent"
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We empower diverse industries with innovative IT solutions, leveraging AI-driven automation, low-code
            platforms, and strategic consulting to drive efficiency and transformation.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden px-2"
          >
            {industries.map((item, idx) => (
              <motion.div
                key={item.title}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-[90%] sm:w-[300px] h-[400px] sm:h-[460px] flex-shrink-0 snap-start mx-2 relative rounded-xl overflow-hidden border border-blue-500/30 shadow-lg group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 z-10 text-white space-y-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm line-clamp-3">{item.description}</p>
                  <a
                    href={item.link}
                    className="inline-flex items-center mt-2 text-sm font-medium bg-blue-600 rounded-full px-4 py-2 text-white transition hover:bg-blue-700"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => scroll('left')}
              className="bg-gray-800/70 hover:bg-gray-800/90 text-blue-400 p-3 rounded-full border border-blue-500/30 hover:border-blue-500 transition hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-gray-800/70 hover:bg-gray-800/90 text-blue-400 p-3 rounded-full border border-blue-500/30 hover:border-blue-500 transition hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

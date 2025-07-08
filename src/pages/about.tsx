'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Circle } from 'lucide-react';

const phrases = [
  {
    headline: 'build faster and deliver smarter.',
    subheading: 'Low-code platforms and AI copilots power our enterprise-grade solutions.',
  },
  {
    headline: 'experts turn ideas into scalable apps.',
    subheading: 'From Mendix to OutSystems, our experts turn ideas into scalable, reusable apps.',
  },
  {
    headline: 'speed up go-to-market and reduce cost.',
    subheading: 'AI-assisted low-code solutions that eliminate rework and unlock innovation.',
  },
  {
    headline: 'engineer outcomes and eliminate complexity.',
    subheading: 'With reusable components and intelligent frameworks, we future-proof your tech.',
  },
  {
    headline: 'modernize legacy, streamline new builds.',
    subheading: 'Using low-code platforms, we digitize workflows with speed, scale, and confidence.',
  },
  {
    headline: 'turn business goals into smart apps.',
    subheading: 'Our AI-powered low-code delivery model accelerates impact across industries.',
  },
  {
    headline: 'combine low-code and custom engineering.',
    subheading: 'Delivering stable, scalable apps through reusable logic and AI-driven insights.',
  },
  {
    headline: 'reduce bugs and improve timelines.',
    subheading: 'With prebuilt modules, AI copilots, and one-click updates — development gets smoother.',
  },
  {
    headline: 'align design and delivery from day one.',
    subheading: 'Using component libraries and visual modeling, we cut down time-to-value.',
  },
  {
    headline: 'build digital foundations, drive change.',
    subheading: 'Whether it’s Mendix, OutSystems, PowerApps, or Caspio — we bring your ideas to life, faster.',
  },
];

const AboutSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scrolling effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 5000); // Change phrase every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Navigation handler for dots
  const handleDotClick = (idx: number) => {
    setIndex(idx);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000); // Resume auto-scroll after 3s
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -15, filter: 'blur(4px)', transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98, rotate: 2 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.03, boxShadow: '0px 0px 12px rgba(96, 165, 250, 0.3)', transition: { duration: 0.2 } },
  };

  return (
    <section
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      id="about"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="bg-[url('/patterns/stars.png')] bg-repeat animate-twinkle opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] animate-pulse-slow" />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div
            className="text-center lg:text-left"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="min-h-[12rem] flex flex-col justify-center gap-6" aria-live="polite">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-100 leading-tight">
                We{' '}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    {phrases[index].headline}
                  </motion.span>
                </AnimatePresence>
              </h1>
              <AnimatePresence mode="wait">
                <motion.p
                  key={index + '-sub'}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0"
                >
                  {phrases[index].subheading}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center lg:justify-start gap-2 mt-6">
              {phrases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === idx ? 'bg-blue-400 scale-110' : 'bg-gray-500/50 hover:bg-gray-400/50'
                  }`}
                  aria-label={`Go to phrase ${idx + 1}`}
                >
                  <span className="sr-only">Go to phrase {idx + 1}</span>
                </button>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="/aboutus"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="group inline-flex items-center mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white text-base transition-all duration-300 hover:shadow-md hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Learn more about our services"
            >
              Let’s Build Smarter
              <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" />
            </motion.a>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden border border-white/20"
            >
              <img
                src="/about.png"
                alt="Futuristic technology illustration"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-30 transition-opacity duration-300 hover:opacity-20" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CSS for Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0.2;
          }
        }
        @keyframes pulse-slow {
          0% {
            background-position: 50% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 50% 50%;
          }
        }
        .animate-twinkle {
          animation: twinkle 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
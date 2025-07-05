<<<<<<< HEAD
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  {
    headline: 'build faster and deliver smarter.',
    subheading: 'Low-code platforms and AI copilots power our enterprise-grade solutions.'
  },
  {
    headline: 'automate delivery and simplify development.',
    subheading: 'From Mendix to OutSystems, our experts turn ideas into scalable, reusable apps.'
  },
  {
    headline: 'speed up go-to-market and reduce cost.',
    subheading: 'AI-assisted low-code solutions that eliminate rework and unlock innovation.'
  },
  {
    headline: 'engineer outcomes and eliminate complexity.',
    subheading: 'With reusable components and intelligent frameworks, we future-proof your tech.'
  },
  {
    headline: 'modernize legacy systems and streamline new builds.',
    subheading: 'Using low-code platforms, we digitize workflows with speed, scale, and confidence.'
  },
  {
    headline: 'turn business goals into smart applications.',
    subheading: 'Our AI-powered low-code delivery model accelerates impact across industries.'
  },
  {
    headline: 'combine low-code platforms and custom engineering.',
    subheading: 'Delivering stable, scalable apps through reusable logic and AI-driven insights.'
  },
  {
    headline: 'reduce bugs and improve timelines.',
    subheading: 'With prebuilt modules, AI copilots, and one-click updates — development gets smoother.'
  },
  {
    headline: 'align design and delivery from day one.',
    subheading: 'Using component libraries and visual modeling, we cut down time-to-value.'
  },
  {
    headline: 'build reusable digital foundations and drive transformation.',
    subheading: 'Whether it’s Mendix, OutSystems, PowerApps, or Caspio — we bring your ideas to life, faster.'
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 5000); // Change phrase every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
            We
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 2 }}
                className="inline-block text-primary"
              >
              {phrases[index].headline}
              </motion.span>
            </AnimatePresence>
          </h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={index + '-sub'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 2 }}
              className="mt-4 text-lg text-text"
            >
              {phrases[index].subheading}
            </motion.p>
          </AnimatePresence>

          {/* CTA */}
          <motion.a
            href="/contact"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 12px rgba(var(--primary-color),0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            className="group inline-block mt-6 px-7 py-3 bg-primary text-white font-semibold rounded-full relative overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let’s Build Smarter
              <motion.span
                className="inline-block"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                →
              </motion.span>
            </span>
            <motion.span
              layoutId="cta-ripple"
              className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{
                repeat: Infinity,
                repeatDelay: 2,
                duration: 2,
                ease: 'easeInOut',
              }}
            />
          </motion.a>
        </div>

        {/* Right Visual (you can update this) */}
        <div className="mt-10 md:mt-0 md:w-1/2 relative h-full">
          <div className="w-40 h-40 bg-gray-200 flex items-center justify-center">
            <span>Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
=======
'use client'

import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const counters = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '*7', label: 'Support Available' },
  { value: 5, suffix: '+', label: 'Years Experience' },
]

export default function Hero() {
  const [start, setStart] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section className="relative text-white overflow-hidden bg-[#1a103d]">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/back.jpg" 
          alt="Background"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-24 md:py-36 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build Tomorrow's <span className="text-yellow-400">Solutions</span> Today
        </h1>
        <p className="mt-4 text-purple-100 text-lg md:text-xl">
          Accelerate your digital transformation with cutting-edge low-code technologies
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link
            href="contact"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Get Started
          </Link>
          <Link
            href="#about"
            className="bg-white/10 text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div
          ref={sectionRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {counters.map(({ value, suffix, label }, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold">
                {start ? <AnimatedCounter value={value} suffix={suffix} /> : `0${suffix}`}
              </h3>
              <p className="mt-2 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chevron down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce">
        <ChevronDown size={28} />
      </div>

      {/* Bottom curved SVG */}
      <div className="relative z-10">
        <svg
          className="w-full -mb-1"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,40 C360,150 1080,0 1440,80 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  )
}

function AnimatedCounter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const duration = 1200
    const increment = end / (duration / 16)

    const step = () => {
      start += increment
      if (start < end) {
        setCount(Math.ceil(start))
        requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    step()
  }, [value])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}
>>>>>>> refs/heads/sid

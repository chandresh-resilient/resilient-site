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

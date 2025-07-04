'use client'
import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <section className="bg-white text-purple-900 py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12" data-aos="fade-up" data-aos-duration="1000">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Resilient IT Services</h2>
          <p className="text-lg text-purple-700 mb-4 leading-relaxed">
            Resilient IT Services is a forward-thinking technology company focused on delivering agile and scalable digital solutions using cutting-edge low-code platforms like Mendix, OutSystems, Caspio, and modern stacks like React and Vite.
          </p>
          <p className="text-md text-purple-700">
            We empower businesses to streamline operations and accelerate innovation by reducing development time while maintaining high quality and flexibility. Our goal is to help clients digitally transform with confidence and speed.
          </p>
          <button className="mt-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">Learn More →</button>
        </motion.div>

        {/* Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src="/about.png"
            alt="About us illustration"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  )
}

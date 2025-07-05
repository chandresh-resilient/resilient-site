'use client'
import { motion } from 'framer-motion'

const technologies = [
  { name: 'Mendix', logo: '/logos/mendix.png' },
  { name: 'Caspio', logo: '/logos/caspio.png' },
  { name: 'OutSystems', logo: '/logos/outsystem.png' },
  { name: 'React', logo: '/logos/react.png' },
  { name: 'Vite', logo: '/logos/vite.jpg' },
  { name: 'Java', logo: '/logos/java.png' },
]

export default function Technologies() {
  return (
    <section className="bg-white py-20" id="technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-purple-900 mb-12"
        >
          Technologies We Specialize In
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center justify-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-2 hover:scale-105 transition"
            >
              <img src={tech.logo} alt={tech.name} className="h-12 w-auto object-contain hover:grayscale transition" />
              <span className="text-sm text-purple-700 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

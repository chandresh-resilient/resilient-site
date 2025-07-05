'use client'
import { motion } from 'framer-motion'
import { Code, Workflow, Layers, Shield } from 'lucide-react' // or any icon library

const services = [
  {
    title: 'Low-Code App Development',
    description: 'Rapid application delivery using platforms like Mendix, OutSystems, and Caspio to reduce time-to-market.',
    icon: Workflow,
  },
  {
    title: 'Custom React & Vite Apps',
    description: 'Scalable frontend solutions built with modern JavaScript frameworks for high performance and flexibility.',
    icon: Code,
  },
  {
    title: 'Business Automation',
    description: 'Streamline workflows and reduce manual effort through intelligent automation and integration.',
    icon: Layers,
  },
  {
    title: 'Enterprise Consulting',
    description: 'Technical expertise to guide your digital transformation journey and align with business goals.',
    icon: Shield,
  },
]

export default function Services() {
  return (
    <section className="bg-purple-50 py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black mb-12"
        >
          Our Core Services
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg border border-purple-100 text-left"
            >
              <service.icon className="w-8 h-8 text-purple-700 mb-4" />
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{service.title}</h3>
              <p className="text-purple-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

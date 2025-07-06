'use client'
import { motion } from 'framer-motion'
import { Workflow, Layers, Shield, Bot, Compass } from 'lucide-react';


const services = [
  {
    title: 'Low-Code Transformation',
    description: 'Accelerate digital delivery using enterprise-grade platforms like Mendix, OutSystems, and Caspio — reducing cost, risk, and time-to-market.',
    icon: Workflow,
  },
  {
    title: 'Application & Data Migration',
    description: 'Seamless migration from legacy systems to modern cloud-native platforms using tools like Migration Center — with zero disruption to operations.',
    icon: Layers,
  },
  {
    title: 'Content & Document Management',
    description: 'Enterprise-grade content solutions with Documentum to manage regulatory compliance, streamline collaboration, and ensure secure access to information.',
    icon: Shield,
  },
  {
    title: 'AI-Driven Business Automation',
    description: 'Enhance efficiency by automating workflows and integrating smart decisioning — powered by AI, low-code, and intelligent process automation.',
    icon: Bot,
  },
  {
    title: 'Enterprise IT Consulting',
    description: 'Strategic technology advisory to modernize architecture, improve delivery pipelines, and align IT initiatives with long-term business goals.',
    icon: Compass,
  },
];


export default function Services() {
  return (
    <section className="py-20 " id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-secondary mb-12"
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
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 text-left transition-colors duration-200"
            >
              <service.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
              <p className=" text-sm text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

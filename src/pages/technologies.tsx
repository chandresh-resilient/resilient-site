'use client'
import { motion } from 'framer-motion'

const technologies = [
  { name: "Mendix", logo: "/logos/mendix.png" },
  { name: "OutSystems", logo: "/logos/outsystem.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Documentum", logo: "/logos/documentum.png" },
  { name: "Java", logo: "/logos/java.png" },
  { name: "Node.js", logo: "/logos/nodejs.png" },
  { name: "Angular", logo: "/logos/angular.png" },
  { name: "Vue.js", logo: "/logos/vuejs.png" },
  { name: "Kotlin", logo: "/logos/kotlin.png" },
  { name: "Caspio", logo: "/logos/caspio.png" },
  { name: "PowerApps", logo: "/logos/powerapps.png" },
  { name: "Docker", logo: "/logos/docker.png" },
  { name: "Kubernetes", logo: "/logos/kubernetes.png" },
  { name: "PostgreSQL", logo: "/logos/postgresql.png" },
  { name: "MySQL", logo: "/logos/mysql.png" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
];

export default function TechnologiesPage() {
  return (
    <section
      className="max-h-screen py-20 px-4 sm:px-8 md:px-12 bg-black bg-cover bg-center bg-no-repeat"
    
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl text-white font-bold mb-14"
        >
          Technologies We Specialize In
        </motion.h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6 sm:gap-8 justify-items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain hover:grayscale transition"
              />
              <span className="text-sm sm:text-base text-white font-medium text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

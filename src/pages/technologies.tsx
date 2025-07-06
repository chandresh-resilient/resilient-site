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

export default function Technologies() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-20 bg-[url('/techno.png')] bg-cover bg-center  ">
    <section 
    className=" bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 py-20 rounded-4xl "
     id="technologies">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold  mb-12"
        >
          Technologies We Specialize In
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-10 items-center justify-center">
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
              <span className="text-sm text-white font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

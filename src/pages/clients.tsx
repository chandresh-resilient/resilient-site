'use client'
import { motion } from 'framer-motion'

const clients = [
  { name: 'Dubai Municipality', logo: '/clients/dubai.png' },
  { name: 'Springer Nature', logo: '/clients/springer.png' },
  { name: 'KASP Securities', logo: '/clients/kasp.png' },
  { name: 'Royal IHC', logo: '/clients/ihc.png' },
  { name: 'WeatherFord', logo: '/clients/weatherford.png' },
  { name: 'Trane Technologies', logo: '/clients/trane.png' },
]

export default function Clients() {
  return (
    <section  className="bg-purple-50 py-20 px-4" id="clients">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black mb-10"
        >
          Trusted by Global Clients
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition flex flex-col items-center justify-center h-[120px]"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 object-contain  hover:grayscale transition"
              />
              <p className="mt-2 text-sm text-purple-800 font-medium">{client.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

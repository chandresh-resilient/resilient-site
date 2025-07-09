// 'use client'
// import { motion } from 'framer-motion'

// const clients = [
//   { name: 'Dubai Municipality', logo: '/clients/dubai.png' },
//   { name: 'Springer Nature', logo: '/clients/springer.png' },
//   { name: 'KASP Securities', logo: '/clients/kasp.png' },
//   { name: 'Royal IHC', logo: '/clients/ihc.png' },
//   { name: 'WeatherFord', logo: '/clients/weather.png' },
//   { name: 'Trane Technologies', logo: '/clients/trane.png' },
// ]

// export default function Clients() {
//   return (
//     <section  className="bg-purple-50 py-20 px-4" id="clients">
//       <div className="max-w-7xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-black mb-10"
//         >
//           Trusted by Global Clients
//         </motion.h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-center">
//           {clients.map((client, index) => (
//             <motion.div
//               key={client.name}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white p-4 rounded-xl shadow hover:shadow-md transition flex flex-col items-center justify-center h-[120px]"
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 className="max-h-12 object-contain  hover:grayscale transition"
//               />
//               <p className="mt-2 text-sm text-purple-800 font-medium">{client.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const ProofSection: React.FC = () => {
  // Scalable company data array
 const companies = [
  { name: 'Dubai Municipality', logo: '/clients/dubai.png' },
  { name: 'Springer Nature', logo: '/clients/springer.png' },
  { name: 'KASP Securities', logo: '/clients/kasp.png' },
  { name: 'Royal IHC', logo: '/clients/ihc.png' },
  { name: 'WeatherFord', logo: '/clients/weather.png' },
  { name: 'Trane Technologies', logo: '/clients/trane.png' },
]

  // Stats array
  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '99.9%', label: 'Uptime Guaranteed' },
    { number: '24/7', label: 'Support Available' },
    { number: '10+', label: 'Years Experience' },
  ];

  const [hoveredCompany, setHoveredCompany] = useState<number | null>(null);

  return (
    <section className="relative py-20 overflow-hidden bg-gray-900">
     

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our proven track record and partnerships with top companies showcase our commitment to excellence.
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="relative group flex justify-center items-center p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-500/25"
              onMouseEnter={() => setHoveredCompany(index)}
              onMouseLeave={() => setHoveredCompany(null)}
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={100}
                height={50}
                className="object-contain transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-md"
              />
              {/* Tooltip on Hover */}
              {hoveredCompany === index && (
                <div className="absolute -top-10 bg-blue-900 text-white text-sm px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {company.name}
                </div>
              )}
              {/* Hover Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-purple-600/20"
            >
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-3xl font-bold text-blue-400">{stat.number}</h3>
              </div>
              <p className="text-gray-300 text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

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
          background-size: 200% 200%;
          animation: pulse-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProofSection;
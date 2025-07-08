import React, { JSX } from 'react';
import { motion, Variants } from 'framer-motion';
import { Workflow, Layers, Shield, Bot, Compass, CheckCircle } from 'lucide-react';

interface Service {
  icon: JSX.Element;
  features: string[];
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Workflow className="w-14 h-14 text-blue-400" />,
      features: ['Rapid App Development', 'Citizen Developer Tools', 'Workflow Customization', 'Integration Platforms'],
    },
    {
      icon: <Layers className="w-14 h-14 text-blue-400" />,
      features: ['Cloud Migration', 'Data Transformation', 'Legacy System Integration', 'Downtime Minimization'],
    },
    {
      icon: <Shield className="w-14 h-14 text-blue-400" />,
      features: ['Document Digitization', 'Content Searchability', 'Version Control', 'Compliance Management'],
    },
    {
      icon: <Bot className="w-14 h-14 text-blue-400" />,
      features: ['Process Automation', 'AI Workflow Optimization', 'Predictive Analytics', 'Chatbot Integration'],
    },
    {
      icon: <Compass className="w-14 h-14 text-blue-400" />,
      features: ['Architecture Modernization', 'Delivery Pipeline Optimization', 'Strategic IT Planning', 'Business Alignment'],
    },
    {
      icon: <CheckCircle className="w-14 h-14 text-blue-400" />,
      features: ['24/7 Support', 'Performance Monitoring', 'Security Audits', 'Compliance Assurance'],
    },
  ];

  // Animation Variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeInOut' },
    }),
  };

  const featureVariants: Variants = {
    initial: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
    }),
    hover: { scale: 1.03, transition: { duration: 0.2 } },
  };

  const buttonVariants: Variants = {
    initial: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="bg-[url('/patterns/stars.png')] bg-repeat animate-twinkle opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Transformative IT Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Our cutting-edge services drive digital transformation through AI-driven automation, low-code development,
            seamless application and data migration, advanced content management, and strategic IT consulting,
            ensuring efficiency, innovation, and alignment with your business goals.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-purple-600/20"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="mb-6"
                >
                  {service.icon}
                </motion.div>
                <div className="flex flex-wrap justify-center gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.span
                      key={featureIndex}
                      custom={featureIndex}
                      initial="initial"
                      animate="visible"
                      whileHover="hover"
                      variants={featureVariants}
                      className="flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30 transition-colors duration-300 hover:bg-blue-500/30"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href="#"
                  variants={buttonVariants}
                  whileHover="hover"
                  className="mt-6 inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label={`Learn more about service ${index + 1}`}
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>

              {/* Decorative Hover Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-400/20 to-purple-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"
                animate={{
                  borderColor: [
                    'rgba(96, 165, 250, 0.2)',
                    'rgba(147, 51, 234, 0.2)',
                    'rgba(96, 165, 250, 0.2)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scoped CSS Animations */}
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
          animation: pulse-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;

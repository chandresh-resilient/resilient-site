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
    <section className="relative py-12 sm:py-16 bg-gray-900 font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-gray-900/50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%2300A3E0 fill-opacity=0.15%3E%3Cpath d=M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent"
          >
            Transformative IT Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Our cutting-edge services drive digital transformation through AI-driven automation, low-code development,
            seamless application and data migration, advanced content management, and strategic IT consulting,
            ensuring efficiency, innovation, and alignment with your business goals.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto"
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
              className="p-6 sm:p-8 bg-gray-800/60 rounded-lg border border-blue-500/20 transition-all duration-300"
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
                      className="flex items-center px-3 py-2 bg-blue-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30 transition-colors duration-300 hover:bg-blue-500/30"
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
                  className="mt-6 inline-flex items-center px-4 sm:px-6 py-2 bg-blue-600 rounded-md font-semibold text-white text-sm transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-300/20 opacity-0 transition-opacity duration-300 rounded-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
'use client';
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Discovery & Analysis",
    description:
      "Deep dive into your business requirements with AI-powered analysis and strategic planning.",
    icon: "🔍",
    duration: "1-2 weeks",
    image: "/images/process1.jpg",
  },
  {
    title: "Architecture Design",
    description:
      "Enterprise-grade architecture with security-first approach and scalability planning.",
    icon: "🏗️",
    duration: "2-3 weeks",
    image: "/images/process2.jpeg",
  },
  {
    title: "Development & Testing",
    description:
      "Agile development with continuous integration and automated testing protocols.",
    icon: "⚙️",
    duration: "4-8 weeks",
    image: "/images/process3.jpeg",
  },
  {
    title: "Security & Optimization",
    description:
      "Multi-layer security implementation and performance optimization using AI insights.",
    icon: "🔒",
    duration: "1-2 weeks",
    image: "/images/process4.jpeg",
  },
  {
    title: "Deployment & Support",
    description:
      "Cloud deployment with 24/7 monitoring and continuous support ecosystem.",
    icon: "🚀",
    duration: "Ongoing",
    image: "/images/process5.jpeg",
  },
];

const ProcessPage = () => {
  return (
    <section id="process" className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent"
          >
            Our Proven Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A proven, AI-enhanced methodology that ensures successful digital transformation from concept to deployment.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-16 md:mb-24 flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center md:items-start gap-6`}
            >
              {/* Left content */}
              <div className="md:w-1/2 w-full px-2 md:px-6">
                <motion.div
                  whileHover={{ scale: 1.03, y: -6 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-blue-400 text-sm sm:text-base font-medium">
                        {step.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-md">
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* Connecting dot on line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Right image */}
              <div className="md:w-1/2 w-full px-2 md:px-6">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-52 sm:h-64 md:h-44 object-cover rounded-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessPage;

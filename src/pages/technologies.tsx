"use client";

import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
// import type { Variants } from 'framer-motion';
import { Users, ArrowRight } from "lucide-react";

interface Technology {
  name: string;
  logo: string;
}

const technologies: Technology[] = [
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

const TechnologiesSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.playbackRate = 1;
          video.play().catch((e) => {
            console.warn("Autoplay prevented:", e);
          });
        } else {
          video.pause();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const techVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: i * 0.05, ease: "easeOut" },
    }),
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } },
    hover: {
      scale: 1.03,
      boxShadow: "0px 0px 12px rgba(96, 165, 250, 0.3)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative min-h-[auto] py-24 overflow-hidden bg-gray-900 ">
      
      {/* Background Video */}
      <div className="w-screen h-full z-[1] overflow-hidden absolute inset-0">
        <video
          ref={videoRef}
          playsInline
          muted
          poster="https://github.githubassets.com/images/modules/site/copilot/hero/bg-poster@2x.webp"
          className="w-full h-full object-cover"
        >
          <source
            type="video/webm"
            src="https://github.githubassets.com/images/modules/site/copilot/hero/bg@1.5x.webm"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={textVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8"
          >
            Building the Future with Cutting-Edge Technologies
          </motion.h1>

          {/* Technology Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 justify-items-center mb-16"
            variants={containerVariants}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                custom={index}
                variants={techVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain hover:grayscale transition"
                />
                <span className="text-xs sm:text-sm md:text-base text-white font-medium text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <div className="max-w-3xl sm:max-w-4xl mx-auto text-center">
            <motion.div
              className="backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-gray-800 hover:shadow-[0_0_25px_#38bdf8,0_0_45px_#a855f7] transition-all duration-300"
              variants={containerVariants}
            >
              <motion.div variants={textVariants}>
                <Users className="w-12 sm:w-16 h-12 sm:h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed line-clamp-3">
                  Join hundreds of businesses that trust Resilient IT Services to power their
                  digital future. Let’s discuss how we can help you achieve your technology goals.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={containerVariants}
              >
                <motion.a
                  href="/contact-detail"
                  variants={buttonVariants}
                  whileHover="hover"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-base sm:text-lg text-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25  focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0  transition-opacity duration-300" />
                </motion.a>

                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="px-8 py-4 border-2 text-white border-white/20 rounded-full font-semibold text-base sm:text-lg hover:border-white/40 transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animation Styles */}
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

export default TechnologiesSection;

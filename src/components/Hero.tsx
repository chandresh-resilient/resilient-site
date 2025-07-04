'use client';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>
            <section className="bg-[#EAF4FB] py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Text */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0F2C52] leading-tight">
                            We Deliver Smarter Apps with Low-Code and AI
                        </h1>
                        <p className="mt-4 text-lg text-gray-700">
                            From Mendix to OutSystems, Caspio to PowerApps — Resilient helps you launch faster, scale better, and cut costs without compromise.
                        </p>

                        <motion.a
                            href="/contact"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0px 0px 12px rgba(30,144,255,0.6)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-block mt-6 px-7 py-3 bg-[#1E90FF] text-white font-semibold rounded-full relative overflow-hidden transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Let’s Build Smarter
                                <motion.span
                                    className="inline-block"
                                    whileHover={{ x: 6 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    →
                                </motion.span>
                            </span>

                            {/* Background ripple pulse on hover */}
                            <motion.span
                                layoutId="cta-ripple"
                                className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-full"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    duration: 2,
                                    ease: 'easeInOut',
                                }}
                            />
                        </motion.a>
                    </div>

                    {/* Right Logos with Floating Animation */}
                    <div className="mt-10 md:mt-0 md:w-1/2 relative h-full">
                        <div className="w-40 h-40 bg-gray-200 flex items-center justify-center">
                            <span>Placeholder</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;

'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
	{
		headline: 'build faster and deliver smarter.',
		subheading: 'Low-code platforms and AI copilots power our enterprise-grade solutions.',
	},
	{
		headline: 'Experts turn ideas into scalable apps.',
		subheading: 'From Mendix to OutSystems, our experts turn ideas into scalable, reusable apps.',
	},
	{
		headline: 'speed up go-to-market and reduce cost.',
		subheading: 'AI-assisted low-code solutions that eliminate rework and unlock innovation.',
	},
	{
		headline: 'engineer outcomes and eliminate complexity.',
		subheading: 'With reusable components and intelligent frameworks, we future-proof your tech.',
	},
	{
		headline: 'modernize legacy, streamline new builds.',
		subheading: 'Using low-code platforms, we digitize workflows with speed, scale, and confidence.',
	},
	{
		headline: 'turn business goals into smart apps.',
		subheading: 'Our AI-powered low-code delivery model accelerates impact across industries.',
	},
	{
		headline: 'combine low-code and custom engineering.',
		subheading: 'Delivering stable, scalable apps through reusable logic and AI-driven insights.',
	},
	{
		headline: 'reduce bugs and improve timelines.',
		subheading: 'With prebuilt modules, AI copilots, and one-click updates — development gets smoother.',
	},
	{
		headline: 'align design and delivery from day one.',
		subheading: 'Using component libraries and visual modeling, we cut down time-to-value.',
	},
	{
		headline: 'build digital foundations, drive change.',
		subheading: 'Whether it’s Mendix, OutSystems, PowerApps, or Caspio — we bring your ideas to life, faster.',
	},
];

const About = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % phrases.length);
		}, 5000); // Change phrase every 5 seconds
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="bg-black py-20 px-6 md:px-12" id='about'>
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
				{/* Left Text */}
				<div className="md:w-1/2 text-center md:text-left">
					<div style={{ minHeight: '10rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }} aria-live="polite">
						<h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight w-full">
							We
							<AnimatePresence mode="wait">
								<motion.span
									key={index}
									initial={{ opacity: 0, x: 0 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 0 }}
									transition={{ duration: 2 }}
									className="inline-block text-primary"
								>
									{phrases[index].headline}
								</motion.span>
							</AnimatePresence>
						</h1>
						<AnimatePresence mode="wait">
							<motion.p
								key={index + '-sub'}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 2 }}
								className="text-lg text-text w-full"
							>
								{phrases[index].subheading}
							</motion.p>
						</AnimatePresence>
					</div>

					{/* CTA */}
					<motion.a
						href="/aboutus"
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
						whileHover={{
							scale: 1.05,
							boxShadow: '0px 0px 12px rgba(var(--primary-color),0.6)',
						}}
						whileTap={{ scale: 0.95 }}
						className="group inline-block mt-6 px-7 py-3 bg-primary text-white font-semibold rounded-full relative overflow-hidden transition-all duration-300"
					>
						<span className="relative z-10 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full">
							Let’s Build Smarter
							<motion.span
								className="inline-block"
								whileHover={{ x: 6 }}
								transition={{ type: 'spring', stiffness: 300 }}
							>
								→
							</motion.span>
						</span>
						<motion.span
							layoutId="cta-ripple"
							className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 rounded-full"
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

				{/* Right Visual (you can update this) */}
				<div className="mt-10 md:mt-0 md:w-1/2 relative h-full">
					<div className=" flex items-center justify-center">
						<motion.div
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<img
							src="/about.png"
								alt="About us illustration"
								className="w-full h-auto rounded-xl shadow-md  hover:scale-105 transition-transform duration-300"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

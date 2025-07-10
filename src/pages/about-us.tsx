"use client";

import Image from "next/image";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import HeroHeader from "@/components/Heroheader";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">(
    "values"
  );
  const [start, setStart] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = {
    mission: `Empower our clients by delivering cutting-edge low-code solutions that streamline operations, enhance agility, and accelerate digital transformation. By leveraging modern low-code platforms, we enable organizations to rapidly build and deploy scalable, secure, and user-friendly applications—reducing development time and costs while fostering innovation across their digital ecosystem.`,
    vision: `To be the driving force behind a global shift in software development—empowering businesses to innovate faster, smarter, and more efficiently through the transformative power of cutting-edge low-code platforms.`,
    values: `Innovation
      We embrace creativity, curiosity, and cutting-edge technology to craft transformative low-code solutions. We continuously explore new ideas to stay ahead of the curve and deliver meaningful impact to our clients.
      
      Work Culture
      We cultivate a collaborative, transparent, and inclusive work environment that empowers every team member. By supporting personal growth and maintaining a healthy work-life balance, we ensure our people thrive both professionally and personally.
    `,
  };

  const counters = [
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 24, suffix: "/7", label: "Support Available" },
    { value: 5, suffix: "+", label: "Years Experience" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  function AnimatedCounter({
    value,
    suffix,
  }: {
    value: number;
    suffix?: string;
  }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = value;
      const duration = 1200;
      const increment = end / (duration / 16);

      const step = () => {
        start += increment;
        if (start < end) {
          setCount(Math.ceil(start));
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      step();
    }, [value]);

    return (
      <>
        {count}
        {suffix}
      </>
    );
  }
  return (
    <>
      <Head>
        <title>About Us | Resilient IT Services</title>
        <meta
          name="description"
          content="Discover the vision, mission, and people behind Resilient IT Services—your partner in low-code development and digital growth."
        />
        <meta property="og:title" content="About Us | Resilient IT Services" />
        <meta
          property="og:description"
          content="Meet the team and values that drive our innovative low-code solutions."
        />
        <meta
          property="og:image"
          content="https://resilientitservices.com/logo-og.png"
        />
        <meta property="og:url" content="https://www.resilientitservices.com" />
      </Head>
      <Layout>
        <HeroHeader heading="About Us"></HeroHeader>
        <section
          className="max-w-7xl  text-black  mx-auto px-4 py-16"
          id="about"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About Resilient IT Services
              </h2>
              <p className="text-lg text-black mb-4 leading-relaxed">
                Resilient IT Services is a forward-thinking technology company
                focused on delivering agile and scalable digital solutions using
                cutting-edge low-code platforms like Mendix, OutSystems, Caspio,
                and modern stacks like React and Vite.
              </p>
              <p className="text-lg text-black leading-relaxed">
                We empower businesses to streamline operations and accelerate
                innovation by reducing development time while maintaining high
                quality and flexibility. Our goal is to help clients digitally
                transform with confidence and speed.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-10 text-black">
            About core Strength
          </h2>
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Image */}
            <div className="w-full md:w-1/2">
              <Image
                src="/about.png"
                alt="Team Meeting"
                width={800}
                height={600}
                className="rounded-md shadow-lg object-cover"
              />
            </div>

            {/* Right Tabs */}
            <div className="w-full md:w-1/2">
              {/* Tabs */}
              <div className="flex space-x-6 border-b mb-6">
                {["mission", "vision", "values"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`pb-2 text-lg font-semibold capitalize ${
                      activeTab === tab
                        ? "border-b-2 border-purple-500 text-black"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg whitespace-pre-line">
                {content[activeTab]}
              </p>
            </div>
          </div>
        </section>
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="intersection-observer">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Us?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We're not just another IT company. We're your strategic
                  partner in digital transformation, specializing in low-code
                  technologies that deliver results faster than traditional
                  development.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        10x Faster Development
                      </h3>
                      <p className="text-gray-600">
                        Accelerate your time-to-market with our low-code
                        expertise
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Cost-Effective Solutions
                      </h3>
                      <p className="text-gray-600">
                        Reduce development costs by up to 70% with our approach
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Expert Team
                      </h3>
                      <p className="text-gray-600">
                        Certified professionals with deep platform expertise
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intersection-observer">
                <div className="floating-card bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Transform?
                  </h3>
                  <p className="mb-6">
                    Join hundreds of businesses that have accelerated their
                    digital journey with us.
                  </p>
                  <div
                    ref={sectionRef}
                    className="grid grid-cols-2 gap-4 text-center"
                  >
                    {counters.map(({ value, suffix, label }, index) => (
                      <div key={index} className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold">
                          {start ? (
                            <AnimatedCounter value={value} suffix={suffix} />
                          ) : (
                            `0${suffix}`
                          )}
                        </h3>
                        <p className="mt-2 text-sm">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AboutUs;

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Code, Server, Clock, Award, Phone, MapPin } from "lucide-react";

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  interface Slide {
    id: number;
    bgImage: string;
    title: string;
    subtitle: string;
    description: string;
    stats: { projects: string; years: string; satisfaction: string };
  }

  const slides: Slide[] = [
    {
      id: 1,
      bgImage:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Innovate with Technology",
      subtitle: "Empowering Your Business with Cutting-Edge Solutions",
      description:
        "With over 20 years of expertise, we deliver transformative IT solutions tailored to your needs, driving innovation and efficiency.",
      stats: { projects: "1200+", years: "20+", satisfaction: "95%" },
    },
    {
      id: 2,
      bgImage:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      title: "Trusted IT Partners",
      subtitle: "Your Success, Our Code",
      description:
        "We partner with our clients to navigate complex IT challenges, delivering scalable solutions with precision and expertise.",
      stats: { projects: "800+", years: "15+", satisfaction: "97%" },
    },
    {
      id: 3,
      bgImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
      title: "Future-Proof IT Solutions",
      subtitle: "Building Tomorrow’s Technology Today",
      description:
        "Our team of skilled developers and engineers crafts innovative IT strategies, blending creativity with robust technical expertise.",
      stats: { projects: "1000+", years: "18+", satisfaction: "96%" },
    },
  ];

  const handleSlideChange = useCallback((newSlide: number | ((prev: number) => number)) => {
    if (typeof newSlide === "function") {
      setCurrentSlide((prev) => newSlide(prev));
    } else {
      setCurrentSlide(newSlide);
    }
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 800);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((prev: number) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [handleSlideChange, slides.length]);

  const nextSlide = () => handleSlideChange((currentSlide + 1) % slides.length);
  const prevSlide = () => handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => handleSlideChange(index);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-slate-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%236b7280 fill-opacity=0.1%3E%3Cpath d=M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Slide Images */}
      <div className="absolute inset-0">
        {slides.map((slide: Slide, index: number) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scaleелару"
            }`}
          >
            <img src={slide.bgImage} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/80 to-indigo-900/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-blue-400/10"></div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full z-20 flex justify-between px-4">
        <button
          onClick={prevSlide}
          className="bg-blue-900/40 hover:bg-blue-900/70 text-blue-400 p-4 rounded-full backdrop-blur-md border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-400/25"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="bg-blue-900/40 hover:bg-blue-900/70 text-blue-400 p-4 rounded-full backdrop-blur-md border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-400/25"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-400/20 text-blue-400 rounded-full border border-blue-400/30 backdrop-blur-sm">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Award-Winning IT Solutions</span>
              </div>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-[800ms] ${
                  isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {slides[currentSlide].title.split(" ").slice(0, 2).join(" ")}
                </span>
                <span className="block text-white mt-2">
                  {slides[currentSlide].title.split(" ").slice(2).join(" ")}
                </span>
              </h1>

              <h2
                className={`text-xl md:text-2xl text-blue-400 font-medium transition-all duration-[800ms] delay-200 ${
                  isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
              >
                {slides[currentSlide].subtitle}
              </h2>

              <p
                className={`text-lg text-gray-300 leading-relaxed transition-all duration-[800ms] delay-300 ${
                  isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
              >
                {slides[currentSlide].description}
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-[800ms] delay-400 ${
                  isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
              >
                <button className="relative overflow-hidden bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/50">
                  <span className="relative z-10 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" /> Get a Free Quote
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25">
                  <span className="flex items-center justify-center">
                    <MapPin className="w-5 h-5 mr-2" /> Our Services
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div
                className={`grid grid-cols-3 gap-6 pt-8 border-t border-blue-400/20 transition-all duration-[800ms] delay-500 ${
                  isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
              >
                {[
                  { label: "Projects Delivered", value: slides[currentSlide].stats.projects },
                  { label: "Years in Business", value: slides[currentSlide].stats.years },
                  { label: "Client Satisfaction", value: slides[currentSlide].stats.satisfaction },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div
              className={`space-y-6 transition-all duration-[800ms] delay-600 ${
                isTransitioning ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0"
              }`}
            >
              {[
                {
                  icon: <Code className="w-8 h-8 text-blue-400" />,
                  title: "Custom Software Development",
                  desc: "Tailored software solutions to meet your unique business needs",
                },
                {
                  icon: <Server className="w-8 h-8 text-blue-400" />,
                  title: "Cloud Infrastructure",
                  desc: "Scalable and secure cloud solutions for optimal performance",
                },
                {
                  icon: <Clock className="w-8 h-8 text-blue-400" />,
                  title: "24/7 Support",
                  desc: "Dedicated support for your IT systems around the clock",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group bg-blue-900/40 hover:bg-blue-900/60 backdrop-blur-md rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/25"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-400/20 p-3 rounded-lg group-hover:bg-blue-400/30">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-blue-900/40 backdrop-blur-md rounded-full px-6 py-3 border border-blue-400/20">
          {slides.map((_, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden transition-all duration-500 ${
                index === currentSlide
                  ? "w-12 h-3 bg-blue-400 rounded-full"
                  : "w-3 h-3 bg-blue-400/50 hover:bg-blue-400/80 rounded-full"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

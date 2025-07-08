import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Award,
  Phone,
  MapPin,
  Shield,
  Server,
  Cloud,
  Code,
  Terminal,
  Cpu,
  Network,
  Database,
  LucideIcon,
} from "lucide-react";

interface Slide {
  id: number;
  bgImage: string;
  title: string;
  subtitle: string;
  description: string;
  stats: {
    projects: string;
    years: string;
    satisfaction: string;
  };
}

interface MousePosition {
  x: number;
  y: number;
}

interface CursorTrailItem extends MousePosition {
  id: number;
}

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState<CursorTrailItem[]>([]);
  const [currentCursorIcon, setCurrentCursorIcon] = useState<number>(0);

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

  // Cursor icons
  const cursorIcons: LucideIcon[] = [Terminal, Cpu, Network, Database, Code, Shield, Server, Cloud];

  // Mouse move tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });

      setCursorTrail((prev) => [...prev.slice(-20), { x: clientX, y: clientY, id: Date.now() }]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Rotate cursor icons every 2s
  useEffect(() => {
    const iconTimer = setInterval(() => {
      setCurrentCursorIcon((prev) => (prev + 1) % cursorIcons.length);
    }, 2000);

    return () => clearInterval(iconTimer);
  }, []);

  // Auto slide change

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
      handleSlideChange((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [handleSlideChange, slides.length]);

  const nextSlide = () => handleSlideChange((currentSlide + 1) % slides.length);
  const prevSlide = () => handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => handleSlideChange(index);

  const CustomCursor: React.FC = () => {
    const CurrentIcon = cursorIcons[currentCursorIcon];
    return (
      <>
        <div
          className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            transition: "all 0.1s ease-out",
          }}
        >
          <div className="w-full h-full bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
            <CurrentIcon className="w-4 h-4 text-white" />
          </div>
        </div>

        {cursorTrail.map((point, index) => (
          <div
            key={point.id}
            className="fixed w-2 h-2 bg-blue-400/30 rounded-full pointer-events-none z-40"
            style={{
              left: point.x - 4,
              top: point.y - 4,
              opacity: (index / cursorTrail.length) * 0.5,
              transition: "opacity 0.3s ease-out",
            }}
          />
        ))}
      </>
    );
  };

  // Return JSX (as in your code)...
  return (
    // Your existing JSX markup here...
    // I've removed it from this block to avoid redundancy
    // Please paste the JSX you already had in the `return` statement
    <>
      <CustomCursor />
      {/* ...continue rendering slides */}
    </>
  );
};

export default HeroSlider;

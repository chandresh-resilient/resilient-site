export const dynamic = "error";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            setCount(Math.min(Math.floor(start), end));
            if (start >= end) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, isVisible]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [preloaderProgress, setPreloaderProgress] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreloaderProgress((prev) => {
        if (prev >= 100) {
          setShowPreloader(false);
          setIsLoaded(true);
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const ScrollIndicator = () => (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 z-100"
      style={{
        scaleX:
          scrollY /
          (document.documentElement.scrollHeight - window.innerHeight),
        transformOrigin: "0%",
      }}
    />
  );

  const Preloader = () => (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
        >
          <div className="text-center flex flex-col items-center">
            <div className="relative flex items-center justify-center w-32 h-32 mx-auto mb-6">
              <div className="absolute w-full h-full rounded-full bg-purple-500 blur-2xl z-0 opacity-60 animate-pulse" />
              <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-purple-500/20 border-t-purple-500 z-10 origin-center ">
                <img
                  src="/mlogo.png"
                  alt="logo"
                  className="w-12 h-auto object-contain "
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Resilient IT Services
            </h2>
            <p className="text-gray-400 mb-4">
              Optimizing Performance... Just Like Our Code.
            </p>
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                style={{ width: `${preloaderProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-gray-400 mt-2">{preloaderProgress}% Loaded</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  if (!isLoaded) {
    return <Preloader />;
  }

  return (
    <>
      <ScrollIndicator />
      <AnimatePresence>{showPreloader && <Preloader />}</AnimatePresence>
      <Component {...pageProps} />
    </>
  );
}

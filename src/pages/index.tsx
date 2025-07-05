import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="min-h-screen bg-background text-secondary font-sans">
        <div className="max-w-5xl mx-auto py-20 px-6">
          <h1 className="text-5xl font-bold mb-4">Resilient IT Services</h1>
          <p className="text-xl text-text mb-8">
            We build smart, scalable low-code solutions using Mendix, OutSystems, PowerApps & more — powered by AI and proven delivery.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow hover-bg-dark transition"
          >
            Let’s Build Smarter →
          </a>
        </div>
      </main>
    </>
  );
}

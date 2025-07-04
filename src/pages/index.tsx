import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import AboutUs from "./about";
import Services from "./services";
import Technologies from "./technologies";
import Contact from "./contact";
import Clients from "./clients";

export default function Home() {
  return (
      <Layout>
      {/* <main className="min-h-screen bg-[#EAF4FB] text-[#0F2C52] font-sans">
        <div className="max-w-5xl mx-auto py-20 px-6">
          <h1 className="text-5xl font-bold mb-4">Resilient IT Services</h1>
          <p className="text-xl text-[#333] mb-8">
            We build smart, scalable low-code solutions using Mendix, OutSystems, PowerApps & more — powered by AI and proven delivery.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#1E90FF] text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Let’s Build Smarter →
          </a>
        </div>
      </main> */}
      <Hero />
      <AboutUs />
      <Services />
      <Technologies />
      <Clients />
      <Contact />
      </Layout>
  );
}

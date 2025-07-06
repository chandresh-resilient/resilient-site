import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import AboutUs from "./about";
import Services from "./services";
import Technologies from "./technologies";
import Contact from "./contact";
import Clients from "./clients";
import IndustriesPage from "./industries-collection";
import HeroWithVideoBackground from "@/components/herovideo";

export default function Home() {
  return (
      <Layout>
      <Hero />
      <Services />
      <AboutUs />
      <IndustriesPage />
      <HeroWithVideoBackground />
      <Technologies />
      <Clients />
      <Contact />
      </Layout>
  );
}

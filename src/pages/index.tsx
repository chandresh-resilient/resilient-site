import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import AboutUs from "./about";
import Services from "./services";
import Technologies from "./technologies";
import Contact from "./contact";
import Clients from "./clients";
import IndustriesPage from "./industries-collection";
import HeroWithVideoBackground from "@/components/Herovideo";
import HeroBanner from "@/components/Herobanner";

export default function Home() {
  return (
      <Layout>
      <Hero />
      <Services />
      <HeroBanner
      backgroundImage="/images/team.jpg"
      title="Discover how your business grows with our low-code solutions"
      buttonText="Schedule a free consult"
      onButtonClick={() => window.location.href = "#contact"}
    /> 
      <AboutUs />
      <IndustriesPage />
      <HeroWithVideoBackground />
      <Technologies />
      <Clients />
      <Contact />
      </Layout>
  );
}

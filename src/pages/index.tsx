import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import AboutUs from "./about";
import Services from "./services";
import Technologies from "./technologies";
import Contact from "./contact";
import Clients from "./clients";
import IndustriesPage from "./industries";

export default function Home() {
  return (
      <Layout>
      <Hero />
      <AboutUs />
      <Services />
      <Technologies />
      <IndustriesPage />
      <Clients />
      <Contact />
      </Layout>
  );
}

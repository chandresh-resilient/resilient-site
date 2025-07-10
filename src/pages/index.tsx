export const dynamic = "error";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import AboutUs from "./about";
import Services from "./services";
import Technologies from "./technologies";
import Clients from "./clients";
import IndustriesPage from "./industries-collection";
import HeroWithVideoBackground from "@/components/herovideo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resilient IT Services | Low-Code Innovation Experts</title>
        <meta
          name="description"
          content="Accelerating digital transformation with scalable low-code solutions using Mendix, OutSystems, React, and more."
        />
        <meta
          property="og:title"
          content="Resilient IT Services | Low-Code Innovation Experts"
        />
        <meta
          property="og:description"
          content="Empowering businesses through low-code platforms that deliver fast, reliable, and scalable software."
        />
        <meta
          property="og:image"
          content="https://resilientitservices.com/logo-og.png"
        />
        <meta property="og:url" content="https://www.resilientitservices.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout>
        <Hero />
        <Clients />
        <Services />
        <HeroWithVideoBackground />
        <AboutUs />
        <IndustriesPage />
        <Technologies />
      </Layout>
    </>
  );
}

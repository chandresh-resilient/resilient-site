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
import ProcessPage from "./process";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resilient IT Services | Low-Code Innovation Experts</title>
        <meta name="google-site-verification" content="KOQ9ZtuDz6mI0CNJI4wmQK1FknRWrwS7rcXXJ9d2qd0" />
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
         <link rel="canonical" href="https://resilientitservices.com/" />
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Resilient IT Services",
              "url": "https://resilientitservices.com",
              "logo": "https://resilientitservices.com/logo-og.png",
              "sameAs": [
                "https://www.linkedin.com/company/resilientitservices"
              ],
              "description": "Resilient IT Services specializes in low-code technologies like Mendix, OutSystems, and React to accelerate digital transformation with innovative software solutions.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer support",
                "email": "info@resilientitservices.com",
                "areaServed": "IN",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "SR NO.60, 3 FL NO.1102, AUSTIN PARK, PUNE CITY",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411046",
                "addressCountry": "IN"
              }
            })
          }}
        />

      </Head>
      <Layout>
        <Hero />
        <Clients />
        <Services />
        <ProcessPage />
        <HeroWithVideoBackground />
        <AboutUs />
        <IndustriesPage />
        <Technologies />
      </Layout>
    </>
  );
}

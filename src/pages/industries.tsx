"use client";

import HeroHeader from "@/components/Heroheader";
import Layout from "@/components/Layout";
import { i } from "framer-motion/client";
import Image from "next/image";

const industries = [
  {
    title: "Healthcare",
    description:
      "The healthcare industry continually faces significant challenges, including outdated technology, complex processes, and the delivery of optimal client care with minimal staffing. Moreover, strict regulations and rapidly evolving technology intensify the pressure. Low-code technology helps healthcare organizations in digitizing and hyper-automating their processes, leading to efficient time and cost savings that benefit both employees and clients.",
    image: "/images/healthcare.jpg",
    id: "healthcare",
  },
  {
    title: "Education",
    description:
      "Education institutions are increasingly turning to low-code solutions to streamline admissions, student data management, and learning experiences. With automation and seamless integrations, these platforms provide personalized learning and improved administrative efficiency.",
    image: "/images/education.jpg",
    id: "education",
  },
  {
    title: "Logistics",
    description:
      "Logistics companies rely on complex workflows and data-heavy operations. Low-code solutions optimize these operations through real-time tracking, automated scheduling, and predictive analytics, reducing delays and improving transparency.",
    image: "/images/logistics.jpg",
    id: "logistics",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Retail and e-commerce companies require agile platforms for inventory, order management, and customer engagement. Low-code platforms enable rapid deployment of tailored customer experiences and backend optimizations.",
    image: "/images/retail.jpg",
    id: "retail",
  },
  {
    title: "Finance",
    description:
      "Financial services need secure, compliant, and fast solutions for operations like loan processing, KYC, and client onboarding. Low-code allows rapid iteration, compliance enforcement, and process automation with high security.",
    image: "/images/finance.jpg",
    id: "finance",
  },
  {
    title: "Automobiles",
    description:
      "The automobile sector is embracing low-code to streamline production monitoring, supply chain management, and vehicle tracking. These solutions ensure cost-effective operations and quick adaptations to market demands.",
    image: "/images/automobiles.jpg",
    id: "automobile",
  },
];

export default function IndustriesPage() {
  return (
    <Layout>
      <HeroHeader heading="Industries We Serve" />
    <div className="bg-[#eaf2fb]">
      {industries.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={index}
            className={`flex flex-col-reverse md:flex-row ${
              !isEven ? "md:flex-row-reverse" : ""
            } items-center justify-between gap-8 py-12 px-6 md:px-20`}
            id={item.id}
          >
            <div className="flex flex-col justify-center items-start gap-4 w-full md:w-1/2 lg:w-3/5 xl:w-2/3 2xl:w-1/2 text-left">
              <h2 className="text-purple-600 text-4xl font-bold mb-6">
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {item.description}
              </p>
              <a href="/contact-detail" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
                Consult an expert
              </a>
            </div>

            <div className="md:w-1/2 relative w-full aspect-[3/2]">
            
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl border-t-4 border-l-4 border-purple-500 "
                style={{ borderRadius: '0 50% 0 50%' }}
              />
            </div>
          </section>
        );
      })}
    </div>
    </Layout>
  );
}

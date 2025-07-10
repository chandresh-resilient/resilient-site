"use client";
import Layout from "@/components/Layout";
import Image from "next/image";
import HeroHeader from "@/components/Heroheader";
import { motion } from "framer-motion";
import Head from "next/head";

// Sample data grouped by section
const sections = [
  {
    title: "Blogs & Updates",
    id: "blogs",
    items: [
      {
        title: "Follow the money | Heel Holland Digitaliseert",
        subtitle: "Digital transformation can feel like climbing a mountain...",
        author: "Eric Weijers",
        date: "July 4, 2025",
        image: "/images/blog.jpg",
        avatar: "/images/user.jpg",
        badgeText: "HEEL HOLLAND",
        badgeHighlight: "DIGITALISEERT",
        badgeSub: "Follow the money",
      },
      {
        title: "Mendix Expert Jay Cadogan joins Blue green Solutions",
        subtitle: "Mendix Developer Jay Cadogan joins our Blue Green team.",
        author: "Nina Morsa",
        date: "July 4, 2025",
        image: "/images/blog.jpg",
        avatar: "/images/user.jpg",
      },
      {
        title: "The spot on the horizon",
        subtitle:
          "When companies go digital, they usually skip one crucial step: defining a strategy...",
        author: "Eric Weijers",
        date: "June 18, 2025",
        image: "/images/blog.jpg",
        avatar: "/images/user.jpg",
        badgeText: "HEEL HOLLAND",
        badgeHighlight: "DIGITALISEERT",
        badgeSub: "The spot on the horizon",
      },
    ],
  },
  {
    title: "Low-Code Café",
    id: "low-code",
    items: [
      {
        title: "Why Low-Code is the Future",
        subtitle:
          "Discover how low-code platforms are redefining development...",
        author: "Siddharth Mishra",
        date: "July 8, 2025",
        image: "/images/team.jpg",
        avatar: "/images/user.jpg",
      },
      {
        title: "Low-Code Café: Rapid App Development",
        subtitle: "Learn how to build apps faster with low-code tools...",
        author: "Anna Klein",
        date: "July 7, 2025",
        image: "/images/experts.jpg",
        avatar: "/images/user.jpg",
      },
    ],
  },
];

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blogs & Resources | Resilient IT Services</title>
        <meta
          name="description"
          content="Explore our blogs and resources to stay updated on the latest trends in low-code development and digital transformation."
        />
        <meta
          property="og:title"
          content="Blogs & Resources | Resilient IT Services"
        />
        <meta
          property="og:description"
          content="Discover insights, tips, and updates from our experts in low-code development."
        />
        <meta
          property="og:image"
          content="https://resilientitservices.com/logo-og.png"
        />
        <meta
          property="og:url"
          content="https://www.resilientitservices.com/blog"
        />
        <link rel="canonical" href="https://resilientitservices.com/blog" />

      </Head>
      <Layout>
        <HeroHeader heading="Blogs & Resources" />
        <main className="bg-[#f9fafb] py-16 px-6">
          <div className="max-w-7xl mx-auto space-y-20">
            {sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                  {section.title}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                      {/* Item Image */}
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-2xl"
                        />
                        {item.badgeText && (
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
                            <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center px-4">
                              <h3 className="text-white font-bold text-lg uppercase">
                                {item.badgeText}{" "}
                                <span className="text-green-400">
                                  {item.badgeHighlight}
                                </span>
                              </h3>
                              <p className="text-white text-xl font-semibold">
                                {item.badgeSub}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Item Content */}
                      <div className="p-5">
                        <h3 className="font-semibold text-lg text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2 mb-4">
                          {item.subtitle}
                        </p>
                        <motion.a
                          href="#"
                          whileHover="hover"
                          className="my-4 cursor-pointer inline-flex items-center px-4 sm:px-6 py-2 bg-blue-600 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          aria-label={`Learn more about service ${index + 1}`}
                        >
                          Read More
                        </motion.a>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <img
                            src={item.avatar}
                            alt={item.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <span>{item.author}</span>
                          <span>|</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default BlogPage;

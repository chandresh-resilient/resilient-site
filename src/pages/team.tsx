"use client";
import Layout from "@/components/Layout";
import Image from "next/image";
import { LinkedinIcon } from "lucide-react";
import HeroBanner from "@/components/Herobanner";
import HeroHeader from "@/components/Heroheader";
import Head from "next/head";

const teamMembers = [
  {
    name: "Chandresh Shukla",
    role: "Founder & CEO",
    image: "/images/user.jpg",
    bio: "Passionate about low-code technologies, Chandresh leads innovation at Resilient IT Services with a focus on scalable and fast delivery.",
    linkedin:
      "https://www.linkedin.com/company/resilient-it-services/posts/?feedView=all",
  },
  {
    name: "Rajnish Singh",
    role: "Head of Delivery",
    image: "/images/user.jpg",
    bio: "Expert in Mendix and client management, Rajnish ensures our projects are always on time and exceed expectations.",
    linkedin:
      "https://www.linkedin.com/company/resilient-it-services/posts/?feedView=all",
  },
  {
    name: "Sukhvinder Singh",
    role: "Senior Mendix Developer",
    image: "/images/user.jpg",
    bio: "Sukhvinder builds robust applications using Mendix and mentors junior developers on low-code best practices.",
    linkedin:
      "https://www.linkedin.com/company/resilient-it-services/posts/?feedView=all",
  },
  {
    name: "Sachin Yadav",
    role: "UX/UI Designer",
    image: "/images/user.jpg",
    bio: "Sachin creates clean and intuitive user experiences that enhance application usability across industries.",
    linkedin:
      "https://www.linkedin.com/company/resilient-it-services/posts/?feedView=all",
  },
  {
    name: "Gautam Kapoor",
    role: "Lead Frontend Engineer",
    image: "/images/user.jpg",
    bio: "With a keen eye for detail, Gautam develops responsive and engaging user interfaces using React and Tailwind CSS.",
    linkedin:
      "https://www.linkedin.com/company/resilient-it-services/posts/?feedView=all",
  },
  {
    name: "Devesh Bajpayee",
    role: "Business Strategist",
    image: "/images/user.jpg",
    bio: "Devesh drives our business strategy, ensuring we align technology solutions with client goals and market trends.",
    linkedin:
      "https://www.linkedin.com/company/resilient-it-services/posts/?feedView=all",
  },
];

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Meet the Experts | Resilient IT Services</title>
        <meta
          name="description"
          content="Meet the team behind Resilient IT Services, experts in low-code development and digital transformation."
        />
        <meta
          property="og:title"
          content="Meet the Experts | Resilient IT Services"
        />
        <meta
          property="og:description"
          content="Discover the minds driving innovation at Resilient IT Services."
        />
        <meta
          property="og:image"
          content="https://resilientitservices.com/logo-og.png"
        />
        <meta property="og:url" content="https://www.resilientitservices.com" />
      </Head>
      <Layout>
        <HeroHeader heading="Meet the experts" />
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-[#1a103d]">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold">
              The Minds Behind Our Mission
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Resilient IT Services is powered by a team of innovators,
              engineers, and designers passionate about building low-code
              solutions that drive impact.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <Image
              src="/images/fullteam.jpg"
              alt="Our Team"
              width={1200}
              height={600}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </section>

        <HeroBanner
          backgroundImage="/images/team.jpg"
          title="Want to be part of our team?"
          buttonText="Explore Careers"
          onButtonClick={() => (window.location.href = "/career")}
        />

        <section className="bg-white  px-4 sm:px-6 lg:px-8 text-[#1a103d]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mt-16 px-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#f9fafb] rounded-xl shadow-md hover:shadow-lg p-5 text-center transition"
              >
                <div className="relative w-full aspect-square mb-4">
                  <div className="absolute top-0 left-0 w-full h-full bg-purple-700 rounded-br-[120px] translate-x-2 translate-y-2 z-0" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="relative z-10 object-cover rounded-br-[120px] bg-white"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-[#1E90FF] hover:underline"
                  >
                    <LinkedinIcon className="inline-block mr-1 w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TeamPage;

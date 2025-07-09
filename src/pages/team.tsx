'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { LinkedinIcon } from 'lucide-react';
import HeroBanner from '@/components/Herobanner';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: '/images/person1.jpg',
    bio: 'Passionate about low-code technologies, Siddharth leads innovation at Resilient IT Services with a focus on scalable and fast delivery.',
    linkedin: 'https://linkedin.com/in/siddharth',
  },
  {
    name: 'Neha Sharma',
    role: 'Head of Delivery',
    image: '/images/person2.jpg',
    bio: 'Expert in Mendix and client management, Neha ensures our projects are always on time and exceed expectations.',
    linkedin: 'https://linkedin.com/in/neha',
  },
  {
    name: 'Jay Cadogan',
    role: 'Senior Mendix Developer',
    image: '/images/person3.jpg',
    bio: 'Jay builds robust applications using Mendix and mentors junior developers on low-code best practices.',
    linkedin: 'https://linkedin.com/in/jaycadogan',
  },
  {
    name: 'Nina Morsa',
    role: 'UX/UI Designer',
    image: '/images/person4.jpg',
    bio: 'Nina creates clean and intuitive user experiences that enhance application usability across industries.',
    linkedin: 'https://linkedin.com/in/ninamorsa',
  },
];

const TeamPage = () => {
  return (
    <Layout>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-[#1a103d]">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold">Meet Our Team</h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Resilient IT Services is powered by a team of innovators, engineers, and designers passionate about building low-code solutions that drive impact.
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
          onButtonClick={() => window.location.href = "/career"}
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
              <p className="text-sm text-blue-600 font-medium">{member.role}</p>
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
  );
};

export default TeamPage;

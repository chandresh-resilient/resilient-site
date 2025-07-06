'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: '/images/team/siddharth.jpg',
    bio: 'Passionate about low-code technologies, Siddharth leads innovation at Resilient IT Services with a focus on scalable and fast delivery.',
    linkedin: 'https://linkedin.com/in/siddharth',
  },
  {
    name: 'Neha Sharma',
    role: 'Head of Delivery',
    image: '/images/team/neha.jpg',
    bio: 'Expert in Mendix and client management, Neha ensures our projects are always on time and exceed expectations.',
    linkedin: 'https://linkedin.com/in/neha',
  },
  {
    name: 'Jay Cadogan',
    role: 'Senior Mendix Developer',
    image: '/images/team/jay.jpg',
    bio: 'Jay builds robust applications using Mendix and mentors junior developers on low-code best practices.',
    linkedin: 'https://linkedin.com/in/jaycadogan',
  },
  {
    name: 'Nina Morsa',
    role: 'UX/UI Designer',
    image: '/images/team/nina.jpg',
    bio: 'Nina creates clean and intuitive user experiences that enhance application usability across industries.',
    linkedin: 'https://linkedin.com/in/ninamorsa',
  },
];

const TeamPage = () => {
  return (
    <Layout>
    <main className="bg-white py-20 px-6 text-[#1a103d]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p className="mt-4 text-gray-600">
          Resilient IT Services is powered by a team of innovators, engineers, and designers passionate about building low-code solutions that drive impact.
        </p>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#f9fafb] rounded-xl shadow-md hover:shadow-lg p-6 text-center transition"
          >
            <div className="w-28 h-28 mx-auto mb-4 relative">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                className="rounded-full object-cover"
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
                LinkedIn &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
    </Layout>
  );
};

export default TeamPage;

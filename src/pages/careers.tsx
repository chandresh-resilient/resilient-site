'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const jobs = [
  {
    title: 'Mendix Developer',
    location: 'Remote / India',
    experience: '3+ years',
    type: 'Full-time',
    description:
      'We are looking for a skilled Mendix Developer to help us build low-code solutions for clients across various industries.',
  },
  {
    title: 'React Frontend Engineer',
    location: 'Remote / Hybrid',
    experience: '2+ years',
    type: 'Contract / Freelance',
    description:
      'Join our team to develop beautiful and interactive user interfaces using React and Tailwind for enterprise-grade applications.',
  },
  {
    title: 'Low-Code Consultant',
    location: 'Bangalore, India',
    experience: '5+ years',
    type: 'Full-time',
    description:
      'Looking for professionals with experience in platforms like OutSystems, Caspio, or Mendix to advise and deliver digital transformation solutions.',
  },
];

const CareerPage = () => {
  return (
    <Layout>
    <main className="bg-[#f9fafb] text-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[#1a103d]">Join Resilient IT Services</h1>
          <p className="mt-4 text-lg text-gray-600">
            Be part of a passionate team delivering low-code innovation with Mendix, OutSystems, and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#1a103d] mb-2">{job.title}</h3>
                <div className="text-sm text-gray-500 mb-4">
                  {job.location} &middot; {job.type} &middot; {job.experience}
                </div>
                <p className="text-gray-600 text-sm mb-6">{job.description}</p>
              </div>
              <a
                href="mailto:info@resilientitservices.com"
                className="text-sm text-blue-600 font-medium hover:underline"
              >
                Send Us Resume &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* Section: Why work with us */}
        <section className="mt-24 grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/images/team.jpg"
            alt="Team"
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#1a103d] mb-4">Why work with us?</h2>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Collaborate with certified Mendix & low-code experts</li>
              <li>Get hands-on experience with cutting-edge technologies</li>
              <li>Flexible working hours and hybrid opportunities</li>
              <li>Continuous learning and upskilling support</li>
              <li>Friendly and inclusive team culture</li>
            </ul>
          </div>
        </section>

        {/* Section: CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-[#1a103d] mb-4">
            Didn’t find a role that fits?
          </h3>
          <p className="text-gray-600 mb-6">
            We’re always open to new talent. Send us your resume, and we’ll get in touch!
          </p>
          <a
            href="mailto:info@resilientitservices.com"
            className="inline-block bg-[#1E90FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Contact HR
          </a>
        </div>
      </div>
    </main>
    </Layout>
  );
};

export default CareerPage;

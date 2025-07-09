'use client';
import Image from 'next/image';
import Layout from '@/components/Layout';
import HeroBanner from '@/components/Herobanner';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ClientMarquee from '@/components/Clientscroll';

const caseStudies = [
  {
    title: 'Digital Insurance Portal for Allianz Trade',
    client: 'Allianz Trade',
    industry: 'Insurance',
    image: '/images/education.jpg',
    summary:
      'We built a multi-tenant, scalable insurance portal for risk assessment and escalation tracking, reducing processing time by 45%.',
    location: 'Singapore',
  },
  {
    title: 'Low-Code Trading System for Zendeq',
    client: 'Zendeq',
    industry: 'Supply Chain / Logistics',
    image: '/images/automobiles.jpg',
    summary:
      'Developed a low-code lead generation platform to manage trading operations, resulting in 2x sales conversion rate.',
    location: 'Netherlands',
  },
  {
    title: 'Kubernetes-Based DevOps Platform for Tencent',
    client: 'Tencent',
    industry: 'Technology',
    image: '/images/logistics.jpg',
    summary:
      'Reverse engineered Mendix tools and deployed on Kubernetes with CI/CD, accelerating release cycles by 60%.',
    location: 'China',
  },
];


const CaseStudiesPage = () => {
  return (
    <Layout>
    <main className="bg-white py-20 ">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-[#1a103d]">Case Studies</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Explore how we help clients solve real business challenges using low-code solutions.
        </p>
      </div>

    <ClientMarquee/>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 px-4 py-8 gap-10 max-w-6xl mx-auto">
        {caseStudies.map((cs, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-100 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <div className="relative h-52 w-full">
              <Image
                src={cs.image}
                alt={cs.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-[#1E90FF] mb-1">{cs.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Client:</strong> {cs.client} | <strong>Industry:</strong> {cs.industry}
              </p>
              <p className="text-gray-700 text-sm mb-4">{cs.summary}</p>
              <span className="inline-block text-xs text-white bg-blue-600 px-3 py-1 rounded-full">
                {cs.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>

     

             <HeroBanner 
          backgroundImage="/images/team.jpg"
          title="Transforming Businesses with Low-Code Solutions"
          buttonText="Consult Today"
          onButtonClick={() => window.location.href = "/career"}
        />

    <section className="mt-24 bg-gray-100 py-16 px-4">
  <div className="max-w-6xl mx-auto text-center mb-10">
    <h2 className="text-3xl font-bold text-[#1a103d]">What Our Clients Say</h2>
    <p className="text-gray-600 mt-2">
      Trusted by global enterprises for their mission-critical solutions.
    </p>
  </div>
  <TestimonialCarousel />
</section>


   
    </Layout>
  );
};

export default CaseStudiesPage;

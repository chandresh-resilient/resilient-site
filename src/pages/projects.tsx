'use client';
import { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import HeroHeader from '@/components/Heroheader';
import ClientMarquee from '@/components/Clientscroll';

const allProjects = [
  {
    title: 'Allianz Trade - Escalations',
    description: 'Insurance digital portal | Risk assessment | Multi-tenant | Singapore',
    image: '/images/education.jpg',
  },
  {
    title: 'Zendeq - Trading Platform',
    description: 'Sourcing and Lead Generation platform | Agile Software Development | SME',
    image: '/images/healthcare.jpg',
  },
  {
    title: 'Mendix - Tencent Platform',
    description: 'Deployed on Kubernetes using git pipelines | Reverse engineered integrations to mimic Sprintr, Mendix App Store, Mx New',
    image: '/images/retail.jpg',
  },
  {
    title: 'Fleet Management App',
    description: 'Vehicle tracking | Dashboard analytics | Enterprise mobility',
    image: '/images/finance.jpg',
  },
  {
    title: 'EduTrack LMS',
    description: 'E-learning portal | Assessment engine | Responsive UI | India',
    image: '/images/automobiles.jpg',
  },
  {
    title: 'FinanceBot AI',
    description: 'Automated financial reporting tool using LLMs | Fintech sector',
    image: '/images/logistics.jpg',
  },
];

const ITEMS_PER_PAGE = 3;

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);

  const paginatedProjects = allProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Layout>
    <HeroHeader heading="Our Projects" />
    <ClientMarquee/>
    <main className="bg-[#f9fafb] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="mt-4 text-gray-600 text-3xl max-w-xl mx-auto">
          Explore how Resilient IT Services delivers impact using low-code solutions across industries.
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 max-w-6xl mx-auto">
        {paginatedProjects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
            <div className="h-52 w-full relative">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold text-blue-600">{project.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-12 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full font-medium transition ${
            currentPage === 1 ? 'bg-gray-300 text-white' : 'bg-[#1E90FF] text-white hover:bg-blue-700'
          }`}
        >
          &larr; Prev
        </button>
        <span className="text-lg font-semibold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-full font-medium transition ${
            currentPage === totalPages ? 'bg-gray-300 text-white' : 'bg-[#1E90FF] text-white hover:bg-blue-700'
          }`}
        >
          Next &rarr;
        </button>
      </div>
    </main>
    </Layout>
  );
};

export default ProjectsPage;

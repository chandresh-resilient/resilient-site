'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import HeroHeader from '@/components/Heroheader';
import { div } from 'framer-motion/client';

const blogs = [
  {
    title: 'Follow the money | Heel Holland Digitaliseert',
    subtitle: 'Digital transformation can feel like climbing a mountain...',
    author: 'Eric Weijers',
    date: 'July 4, 2025',
    image: '/images/blog.jpg',
    avatar: '/images/person1.jpg',
    badgeText: 'HEEL HOLLAND',
    badgeHighlight: 'DIGITALISEERT',
    badgeSub: 'Follow the money',
  },
  {
    title: 'Mendix Expert Jay Cadogan joins Blue green Solutions',
    subtitle: 'Mendix Developer Jay Cadogan joins our Blue Green team.',
    author: 'Nina Morsa',
    date: 'July 4, 2025',
    image: '/images/blog.jpg',
    avatar: '/images/person2.jpg',
  },
  {
    title: 'The spot on the horizon',
    subtitle:
      'When companies go digital, they usually skip one crucial step: defining a strategy...',
    author: 'Eric Weijers',
    date: 'June 18, 2025',
    image: '/images/blog.jpg',
    avatar: '/images/person3.jpg',
    badgeText: 'HEEL HOLLAND',
    badgeHighlight: 'DIGITALISEERT',
    badgeSub: 'The spot on the horizon',
  },
];

const BlogPage = () => {
  return (
    <Layout>
    <HeroHeader heading="Blogs & Updates" />
    <main className="bg-[#f9fafb] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Blog Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
                {/* Optional Banner Text */}
                {blog.badgeText && (

                 < div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
                  <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-center px-4">
                    <h3 className="text-white font-bold text-lg uppercase">
                      {blog.badgeText}{' '}
                      <span className="text-green-400">{blog.badgeHighlight}</span>
                    </h3>
                    <p className="text-white text-xl font-semibold">{blog.badgeSub}</p>
                  </div>
                </div>

                )}
              </div>

              {/* Blog Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900">{blog.title}</h3>
                <p className="text-sm text-gray-600 mt-2 mb-4">{blog.subtitle}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Image
                    src={blog.avatar}
                    alt={blog.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span>{blog.author}</span>
                  <span>|</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </Layout>
  );
};

export default BlogPage;

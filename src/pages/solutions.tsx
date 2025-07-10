'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, RefreshCw, Target } from 'lucide-react';
import HeroHeader from '@/components/Heroheader';
import Layout from '@/components/Layout';
import HeroBanner from '@/components/Herobanner';
import Head from 'next/head';

const SolutionsPage = () => {
  return (
    <>
    <Head>
      <title>Our Solutions | Resilient IT Services</title>
      <meta name="description" content="Explore our low-code solutions using Mendix to accelerate your digital transformation." />
      <meta property="og:title" content="Our Solutions | Resilient IT Services" />
      <meta property="og:description" content="Discover how our low-code solutions can transform your business processes." />
      <meta property="og:image" content="/logo-og.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Layout>
    <HeroHeader heading="Our solutions"></HeroHeader>
    <main className="bg-[#f9fafb] text-gray-800">
      {/* 🔹 Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">Why Mendix low-code?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-lg">
            <p>
             Using <Link href="https://www.mendix.com/" target="_blank" className="text-blue-600 underline">Mendix low-code</Link>, we efficiently develop scalable and adaptable applications.
By leveraging pre-built components, we avoid writing repetitive code, which speeds up development and minimizes the chances of errors.
            </p>
            <p>
           With our deep expertise in Mendix, we quickly identify how this low-code platform can address your specific requirements and deliver value from your application in no time.
            </p>
            <p>
             We selected Mendix for its robustness and comprehensive features. In fact, <Link href="https://www.gartner.com" target="_blank" className="text-blue-600 underline">Gartner</Link> has recognized Mendix as a global leader in low-code platforms for eight consecutive years.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/images/team.jpg"
              width={600}
              height={400}
              alt="Our Team"
              className="rounded-2xl shadow-md w-full"
            />
          </div>
        </div>
      </section>

      {/* 🔹 Features Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform">
              <ShieldCheck className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg">Official Mendix Certified Experts</h4>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform">
              <RefreshCw className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg">Flexible and scalable software solutions</h4>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform">
              <Target className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold text-lg">Secured & Optimized Solutions</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Use Case Section */}
      <section className=" mx-auto py-20 space-y-20">
        {/* Item 1 */}
        <div className="grid md:grid-cols-2  mx-auto max-w-7xl px-6 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Workflow automation & digitalisation</h3>
            <p className="mb-4">
              Want your processes to be more efficient, intelligent, and agile? We design workflows within new applications or seamlessly integrate them with core systems like SAP, PLM, Teamcenter, AFAS, Exact, IBM Maximo, Oracle, and multiple TMS platforms.
            </p>
            <p>
              Digitizing and automating your processes enhances information flow, minimizes repetitive work, and provides clearer visibility into your process data for smarter decision-making.
            </p>
          </div>
          <Image
            src="/images/auto.jpg"
            width={600}
            height={400}
            alt="Workflow Automation"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="grid md:grid-cols-2  mx-auto max-w-7xl px-6 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Performance Optimisation</h3>
            <p className="mb-4">
             We optimize performance in Mendix low-code apps by implementing efficient microflows, minimizing database queries, leveraging non-persistent entities, and using best practices for UI rendering—ensuring fast, scalable, and responsive applications.
            </p>
            <p>
             Whether building from scratch or extending existing systems, we streamline your operations by creating smart, automated workflows tailored to your business needs.
            </p>
          </div>
          <Image
            src="/images/performance.jpg"
            width={600}
            height={400}
            alt="Workflow Automation"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <HeroBanner 
          backgroundImage="/images/person4.jpg"
          title="Want to see how Mendix low-code can help your business?"
          buttonText="Get your free consultation"
          onButtonClick={() => window.location.href = "/contact-detail"}
        />

        {/* Item 2 */}
        <div className="grid md:grid-cols-2 mx-auto gap-12 max-w-7xl px-6 items-center" id='expert-review'>
          <Image
            src="/images/security.jpg"
            width={600}
            height={400}
            alt="Mendix Expert Scan"
            className="rounded-2xl shadow-lg order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Security Enhancement</h3>
            <p>
             We prioritize security by implementing robust authentication, role-based access control, data encryption, and compliance with industry standards to ensure your applications are protected end to end.
            </p>
          </div>
        </div>
         <div className="grid md:grid-cols-2 mx-auto gap-12 max-w-7xl px-6 items-center" id='expert-review'>
          <Image
            src="/images/experts.jpg"
            width={600}
            height={400}
            alt="Mendix Expert Scan"
            className="rounded-2xl shadow-lg order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mendix Development & Maintenance</h3>
            <p>
             We specialize in Mendix development and optimization by building high-performance, low-code applications that are scalable, maintainable, and tailored to your business goals—while ensuring seamless integration and fast user experiences.
            </p>
            <p>We build intelligent workflows that simplify operations, boost efficiency, and seamlessly integrate with your existing enterprise systems.</p>
          </div>
        </div>
      </section>
    </main>
    </Layout>
    </>
  );
};

export default SolutionsPage;

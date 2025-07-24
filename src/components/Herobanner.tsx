import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroBannerProps {
  backgroundImage: string; 
  title: string;
  subtitle?: string;
  buttonText: string;
  href: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  href,
}) => {
  return (
    <div
      className="relative flex items-center justify-center h-[350px] md:h-[400px] text-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
 <div className="absolute inset-0 bg-black opacity-50"></div>

       <div className="relative z-10 max-w-2xl px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-xl mt-2">{subtitle}</p>}
        <Link
          href={href}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-base font-medium transition-all cursor-pointer"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;

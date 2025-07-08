import React from 'react';
import Image from 'next/image';

interface HeroBannerProps {
  backgroundImage: string; 
  title: string;
  subtitle?: string;
  buttonText: string;
  onButtonClick: () => void;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div
      className="relative flex items-center justify-center h-[350px] md:h-[400px] text-center overflow-hidden my-8 text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
 <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-xl mt-2">{subtitle}</p>}
        <button
          onClick={onButtonClick}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-base font-medium transition-all"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;

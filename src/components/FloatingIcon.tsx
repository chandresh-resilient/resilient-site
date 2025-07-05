import React from 'react';

const FloatingIcon = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <div className={`grayscale hover:grayscale-0 transition floating ${className}`}>
    <img src={src} alt={alt} className="w-40 h-40" />
  </div>
);

export default FloatingIcon; 
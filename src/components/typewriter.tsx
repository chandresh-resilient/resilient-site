'use client';
import React, { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  lines: string[];
  speed?: number;
  pause?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ lines, speed = 100, pause = 1500 }) => {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[lineIndex % lines.length];

    let timeout: any;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentText => currentText.slice(0, -1));
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setText(currentText => currentLine.slice(0, currentText.length + 1));
      }, speed);
    }

    if (!isDeleting && text === currentLine) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLineIndex(prev => (prev + 1) % lines.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, lineIndex, lines, speed, pause]);

  return (
    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
      {text}
      <span className="border-r-2 border-white animate-blink ml-1" />
    </h2>
  );
};

export default TypewriterEffect;

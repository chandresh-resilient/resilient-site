'use client';

export default function HeroWithVideoBackground() {
  return (
    <section className="relative h-screen w-full bg-[#1a103d] overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        src="/videos/intro.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          How <span className="text-white">we</span> <span className="text-yellow-400">work?</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-10">
          We are a team of passionate professionals dedicated to delivering innovative solutions that drive success for our clients. Our approach combines creativity, technology, and strategy to create impactful results.
        </p>

        <a
          href="#"
          className="bg-white text-black px-6 py-3 rounded-full font-medium text-lg hover:bg-yellow-400 transition"
        >
          Learn More
        </a>

      </div>
    </section>
  );
}

'use client';

export default function HeroWithVideoBackground() {
  return (
    <section className="relative h-screen w-full bg-[#1a103d] overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
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
          From <span className="text-white">Complexity</span> to <span className="text-yellow-400">Clarity</span>
          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full ml-2 animate-pulse"></span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-10">
          Cut the waste and keep the pace with smarter, leaner, and more efficient supply chains.
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

import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const btn = btnRef.current;

    if (title) {
      title.classList.add('animate-fade-in');
    }

    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add('animate-fade-in');
      }, 300);
    }

    if (btn) {
      setTimeout(() => {
        btn.classList.add('animate-fade-in');
      }, 600);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-90"></div>
      
      {/* Red accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 transition-opacity duration-1000 tracking-tight"
          >
            Transforming Ideas into <span className="text-red-500">Digital Excellence</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-white/80 mb-8 opacity-0 transition-opacity duration-1000 delay-300"
          >
            SynapTechVerse delivers cutting-edge solutions in web and mobile development, 
            technology consulting, AI implementation, and digital marketing to propel your business forward.
          </p>
          <button
            ref={btnRef}
            onClick={onScrollDown}
            className="px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 opacity-0 transition-opacity duration-1000 delay-600"
          >
            Discover Our Services
          </button>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce cursor-pointer"
        onClick={onScrollDown}
      >
        <ChevronDown className="text-white/50 hover:text-white transition-colors duration-300" size={32} />
      </div>
    </section>
  );
};

export default Hero;
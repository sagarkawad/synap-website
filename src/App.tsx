import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Events from './components/sections/Events';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-element');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    animatedElements.forEach(element => observer.observe(element));

    // Add scroll event listener for active section detection
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (
          scrollPosition >= sectionTop && 
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    handleNavClick('services');
  };

  return (
    <div className="font-sans text-gray-900 antialiased">
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />
      <Hero onScrollDown={scrollToServices} />
      <Services />
      <Projects />
      <Events />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
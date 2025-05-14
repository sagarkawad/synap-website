import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Trainings from './pages/Trainings';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showTrainings, setShowTrainings] = useState(false);

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

    const handleScroll = () => {
      if (!showTrainings) {
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
      }
    };

    if (!showTrainings) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [showTrainings]);

  const handleNavClick = (section: string) => {
    if (section === 'trainings') {
      setShowTrainings(true);
      return;
    }

    setShowTrainings(false);
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

  if (showTrainings) {
    return (
      <div className="font-sans text-gray-900 antialiased">
        <Navbar activeSection="trainings" handleNavClick={handleNavClick} />
        <Trainings />
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-900 antialiased">
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />
      <Hero onScrollDown={scrollToServices} />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
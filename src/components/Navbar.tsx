import React, { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  handleNavClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, handleNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['home', 'services', 'trainings', 'about', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <BrainCircuit size={28} className="text-red-500 mr-2" />
            <span className="text-white font-bold text-xl md:text-2xl tracking-tight">
              SynapTech<span className="text-red-500">Verse</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`nav-link text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                      activeSection === item
                        ? 'text-red-500'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    handleNavClick(item);
                    toggleMobileMenu();
                  }}
                  className={`text-xl uppercase tracking-wider font-medium transition-colors duration-300 ${
                    activeSection === item
                      ? 'text-red-500'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
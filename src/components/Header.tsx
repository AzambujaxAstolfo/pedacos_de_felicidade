import React, { useState, useEffect } from 'react';
import { CakeSlice, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CakeSlice className="h-8 w-8 text-rose-500" />
          <span className="font-bold text-lg md:text-xl text-rose-600">Pedaços de Felicidade</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-800 hover:text-rose-500 transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('menu')}
            className="text-gray-800 hover:text-rose-500 transition-colors"
          >
            Cardápio
          </button>
          <button 
            onClick={() => scrollToSection('hours')}
            className="text-gray-800 hover:text-rose-500 transition-colors"
          >
            Horários
          </button>
          <button 
            onClick={() => scrollToSection('reservation')}
            className="text-gray-800 hover:text-rose-500 transition-colors"
          >
            Reserva
          </button>
          <button 
            onClick={() => scrollToSection('location')}
            className="text-gray-800 hover:text-rose-500 transition-colors"
          >
            Localização
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-800 hover:text-rose-500 transition-colors py-2"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-800 hover:text-rose-500 transition-colors py-2"
            >
              Cardápio
            </button>
            <button 
              onClick={() => scrollToSection('hours')}
              className="text-gray-800 hover:text-rose-500 transition-colors py-2"
            >
              Horários
            </button>
            <button 
              onClick={() => scrollToSection('reservation')}
              className="text-gray-800 hover:text-rose-500 transition-colors py-2"
            >
              Reserva
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-gray-800 hover:text-rose-500 transition-colors py-2"
            >
              Localização
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
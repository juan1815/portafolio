import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Terminal } from 'lucide-react';
import { NavItem, Language } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavigationProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navigation: React.FC<NavigationProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <Terminal className="h-8 w-8 text-cyber-primary mr-2" />
            <span className="font-bold text-xl tracking-wider text-white">DATA<span className="text-cyber-primary">SCI</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-cyber-primary hover:bg-cyber-dark px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {language === 'en' ? item.labelEn : item.labelEs}
                </button>
              ))}
              <button onClick={toggleLang} className="ml-4 flex items-center text-cyber-secondary hover:text-white transition-colors">
                <Globe className="h-5 w-5 mr-1" />
                <span className="uppercase font-mono text-xs">{language}</span>
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-cyber-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {language === 'en' ? item.labelEn : item.labelEs}
              </button>
            ))}
            <button onClick={toggleLang} className="text-cyber-secondary block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center">
               <Globe className="h-5 w-5 mr-2" /> {language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
import React from 'react';
import { ArrowDown, Database, Cpu, Network } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-black">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-dark to-cyber-black opacity-80"></div>
        {/* Animated Grid */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.2
        }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center space-x-4">
           <Database className="text-cyber-secondary h-8 w-8 animate-pulse-slow" />
           <Cpu className="text-cyber-primary h-8 w-8 animate-pulse" />
           <Network className="text-cyber-secondary h-8 w-8 animate-pulse-slow" />
        </div>
        
        <h2 className="text-cyber-primary font-mono text-lg md:text-xl mb-4 tracking-widest uppercase">
          {language === 'en' ? 'Hello, I am' : 'Hola, soy'}
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text tracking-tight">
          GUZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary">DATA</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cyber-dim mb-10 font-light">
          {language === 'en' 
            ? 'Transforming raw data into actionable intelligence.' 
            : 'Transformando datos brutos en inteligencia accionable.'}
        </p>

        <div className="flex justify-center gap-4">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-cyber-primary text-cyber-black font-bold rounded hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.5)]"
          >
            {language === 'en' ? 'View Portfolio' : 'Ver Portafolio'}
          </button>
          <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-3 border border-cyber-primary text-cyber-primary font-bold rounded hover:bg-cyber-primary/10 transition-all duration-300"
          >
            {language === 'en' ? 'Contact Me' : 'Contáctame'}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="text-cyber-dim h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;
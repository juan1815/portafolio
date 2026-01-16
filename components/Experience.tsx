import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Language } from '../types';
import { EXPERIENCE } from '../constants';

interface ExperienceProps {
  language: Language;
}

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  return (
    <section id="experience" className="py-20 bg-cyber-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Journey' : 'Trayectoria'}
          </h2>
          <div className="h-1 w-24 bg-cyber-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((item, index) => (
              <div key={item.id} className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div>
                
                <div className="z-10 bg-cyber-black border-2 border-cyber-secondary rounded-full p-3 shadow-[0_0_15px_rgba(112,0,255,0.5)]">
                  {item.type === 'work' ? <Briefcase className="h-6 w-6 text-white" /> : <GraduationCap className="h-6 w-6 text-white" />}
                </div>
                
                <div className="w-5/12 glass-panel p-6 rounded-xl border border-gray-800 hover:border-cyber-primary transition-colors">
                  <div className="flex items-center text-cyber-primary mb-2 text-sm font-mono">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {language === 'en' ? item.titleEn : item.titleEs}
                  </h3>
                  <h4 className="text-lg text-cyber-secondary mb-3">{item.company}</h4>
                  <p className="text-gray-400 text-sm">
                    {language === 'en' ? item.descEn : item.descEs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
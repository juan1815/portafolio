import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { Language } from '../types';
import { SKILLS_DATA } from '../constants';

interface SkillsProps {
  language: Language;
}

const Skills: React.FC<SkillsProps> = ({ language }) => {
  return (
    <section id="skills" className="py-20 bg-cyber-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Technical Arsenal' : 'Arsenal Técnico'}
          </h2>
          <div className="h-1 w-24 bg-cyber-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="h-[400px] w-full glass-panel rounded-xl p-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_DATA}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name={language === 'en' ? "Skill Level" : "Nivel de Habilidad"}
                  dataKey="A"
                  stroke="#00f0ff"
                  strokeWidth={3}
                  fill="#00f0ff"
                  fillOpacity={0.3}
                />
                <Legend wrapperStyle={{ color: '#fff' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Text Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyber-primary">
              {language === 'en' ? 'Data Science & Analytics' : 'Ciencia de Datos y Analítica'}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {language === 'en' 
                ? 'My expertise lies at the intersection of statistical analysis, machine learning implementation, and impactful data visualization. I build scalable models that solve real-world problems.'
                : 'Mi experiencia se encuentra en la intersección del análisis estadístico, la implementación de aprendizaje automático y la visualización de datos impactante. Construyo modelos escalables que resuelven problemas del mundo real.'}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              {['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'PostgreSQL', 'Docker'].map((tech) => (
                <div key={tech} className="flex items-center space-x-2 text-sm text-cyber-text font-mono">
                  <span className="h-2 w-2 bg-cyber-secondary rounded-full"></span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
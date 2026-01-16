import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Language } from '../types';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  language: Language;
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const [filter, setFilter] = useState<'All' | 'NLP' | 'ML' | 'Computer Vision' | 'Data Viz'>('All');

  const categories = ['All', 'NLP', 'ML', 'Computer Vision', 'Data Viz'];
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-cyber-black relative z-10 border-t border-gray-900/50">
       {/* Decorative blob */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-secondary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {language === 'en' ? 'Featured Projects' : 'Proyectos Destacados'}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-mono transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-cyber-primary text-cyber-black border-cyber-primary shadow-[0_0_20px_rgba(0,240,255,0.4)] font-bold' 
                    : 'bg-cyber-dark/50 text-gray-400 hover:text-white border-gray-800 hover:border-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-panel rounded-2xl overflow-hidden hover:border-cyber-primary/40 transition-all duration-500 group flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-cyber-secondary/80 backdrop-blur-md text-white text-[10px] rounded-full font-bold uppercase tracking-widest border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                  {language === 'en' ? project.descriptionEn : project.descriptionEs}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono font-semibold text-cyber-primary border border-cyber-primary/20 px-2.5 py-1 rounded-md bg-cyber-primary/5 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center border-t border-gray-800/50 pt-6 mt-auto">
                   <a href="#" className="flex items-center text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
                      <Github className="h-4 w-4 mr-2" /> Code
                   </a>
                   <a href="#" className="flex items-center text-xs font-bold text-cyber-primary hover:text-white transition-colors uppercase tracking-widest">
                      <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
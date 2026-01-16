import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, MapPin } from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(language === 'en' ? "Message simulation sent!" : "¡Simulación de mensaje enviada!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-cyber-black relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Initialize Link' : 'Inicializar Enlace'}
          </h2>
          <div className="h-1 w-24 bg-cyber-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">
              {language === 'en' ? "Let's Collaborate" : "Colaboremos"}
            </h3>
            <p className="text-gray-400">
              {language === 'en' 
                ? "I'm always open to discussing data science projects, AI research, or partnership opportunities. The future is built on data."
                : "Siempre estoy dispuesto a discutir proyectos de ciencia de datos, investigación en IA u oportunidades de asociación. El futuro se construye sobre datos."}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 text-cyber-primary mr-3" />
                <span>sebastianvj45@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 text-cyber-primary mr-3" />
                <span>Colombia, Bogotá; Distrito Capital / Remote</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-gray-800 rounded-full hover:bg-cyber-primary hover:text-cyber-black transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-xl space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                {language === 'en' ? 'Name' : 'Nombre'}
              </label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-cyber-dark border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:border-cyber-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-cyber-dark border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:border-cyber-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                {language === 'en' ? 'Message' : 'Mensaje'}
              </label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-cyber-dark border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:border-cyber-primary"
              ></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-cyber-secondary text-white font-bold rounded hover:bg-white hover:text-cyber-secondary transition-all">
              {language === 'en' ? 'Transmit' : 'Transmitir'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
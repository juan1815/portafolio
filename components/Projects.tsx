import React, { useState, useRef } from 'react';
import { Mail, Linkedin, Twitter, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Language } from '../types';

// Note: To make this work, you need to sign up at emailjs.com (it's free)
// and replace the placeholder strings with your actual IDs.

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulation of sending - For real usage, install @emailjs/browser 
      // and use emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      alert(language === 'en' ? "Error sending message. Please try again." : "Error enviando el mensaje. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
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
          {/* Info Side */}
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
                <div className="p-2 bg-cyber-primary/10 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-cyber-primary" />
                </div>
                <span>sebastianvj45@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="p-2 bg-cyber-primary/10 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-cyber-primary" />
                </div>
                <span>Colombia, Bogotá D.C. / Remote</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-gray-800 rounded-full hover:bg-cyber-primary hover:text-cyber-black transition-all border border-gray-700 hover:border-cyber-primary">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            {isSuccess && (
              <div className="absolute inset-0 z-10 glass-panel rounded-xl flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
                <CheckCircle className="h-16 w-16 text-cyber-primary mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">
                  {language === 'en' ? 'Transmission Successful' : 'Transmisión Exitosa'}
                </h4>
                <p className="text-gray-400">
                  {language === 'en' ? 'Your data has been uploaded to my inbox.' : 'Tus datos han sido cargados a mi bandeja de entrada.'}
                </p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className={`glass-panel p-8 rounded-xl space-y-6 transition-opacity duration-500 ${isSuccess ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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
                  placeholder="John Doe"
                  className="w-full bg-cyber-dark border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyber-primary transition-colors"
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
                  placeholder="john@example.com"
                  className="w-full bg-cyber-dark border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyber-primary transition-colors"
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
                  placeholder={language === 'en' ? "Describe your project..." : "Describe tu proyecto..."}
                  className="w-full bg-cyber-dark border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyber-primary transition-colors"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-cyber-secondary text-white font-bold rounded-lg hover:bg-cyber-primary hover:text-cyber-black transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group shadow-[0_0_15px_rgba(112,0,255,0.3)] hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    {language === 'en' ? 'Transmitting...' : 'Transmitiendo...'}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    {language === 'en' ? 'Transmit Message' : 'Transmitir Mensaje'}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
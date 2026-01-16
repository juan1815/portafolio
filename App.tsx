import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';
import { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="bg-cyber-black min-h-screen text-gray-200 font-sans selection:bg-cyber-primary selection:text-cyber-black">
      <Navigation language={language} setLanguage={setLanguage} />
      
      <main>
        <Hero language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Experience language={language} />
        <Contact language={language} />
      </main>

      <AIChatbot language={language} />

      <footer className="py-6 text-center text-gray-600 text-sm bg-black">
        <p>&copy; {new Date().getFullYear()} Guz Data. All systems nominal.</p>
      </footer>
    </div>
  );
}

export default App;
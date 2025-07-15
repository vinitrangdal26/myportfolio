import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThreeBackground from './components/ThreeBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
        <ThreeBackground />
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
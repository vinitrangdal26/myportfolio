import { useState } from 'react';
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
import BootUpOverlay from './components/BootUpOverlay';
import CustomCursor from './components/CustomCursor';

function App() {
  const [bootDone, setBootDone] = useState(false);

  return (
    <ThemeProvider>
      <div className="bg-space-bg text-white overflow-x-hidden transition-colors duration-300">
        <ThreeBackground />
        <CustomCursor />
        {!bootDone && (
          <BootUpOverlay onComplete={() => setBootDone(true)} />
        )}
        {bootDone && (
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
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
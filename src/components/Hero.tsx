import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const typewriterTexts = [
    "I build AI tools.",
    "I solve problems.",
    "I analyze data.",
    "I create solutions."
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typewriterTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900' 
          : 'bg-gradient-to-br from-gray-50 via-emerald-50/20 to-gray-50'
      }`}>
        <div className={`absolute inset-0 opacity-30 ${
          isDark 
            ? 'bg-[url("data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%233b82f6%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
            : 'bg-[url("data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2310b981%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
        }`}></div>
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
              Vinit Rangdal
            </span>
          </h1>
          
          <div className={`text-xl md:text-2xl mb-8 h-16 flex items-center justify-center ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <span className="inline-block min-w-[300px] text-left">
              {typewriterTexts[currentText]}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Data Science Enthusiast | AI Developer | Problem Solver
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToAbout()}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Explore My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 border-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                isDark 
                  ? 'border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900'
                  : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className={`transition-colors duration-200 ${
            isDark 
              ? 'text-gray-400 hover:text-emerald-400' 
              : 'text-gray-500 hover:text-blue-500'
          }`}
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
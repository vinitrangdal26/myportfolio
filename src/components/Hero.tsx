import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile.svg';

// Define the motion variants for staggered entry
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Stagger delay between children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    },
  },
};

const Hero: React.FC = () => {
  const { isDark } = useTheme();
  
  // State for the simple cycling text (used in place of the complex typewriter component for this structure)
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const typewriterTexts = [
    "I build AI tools.",
    "I solve problems.",
    "I analyze data.",
    "I create solutions."
  ];
  
  // This effect handles the text cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
    }, 2000); // Cycles every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-gray-900 transition-colors duration-300"
    >
      
      {/* 1. Animated Background - Tech Look */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-black via-gray-900/80 to-black' 
          : 'bg-gradient-to-br from-gray-50 via-emerald-50/20 to-gray-50'
      }`}>
        <div className={`absolute inset-0 opacity-10 ${
          isDark 
            ? 'bg-[url("data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2306b6d4%22 fill-opacity=%220.08%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
            : 'bg-[url("data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2310b981%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
        }`}></div>
      </div>

      {/* Main Content Container with Staggered Animation */}
      <motion.div 
        className="relative z-20 px-6 max-w-5xl mx-auto md:flex md:items-center md:justify-between md:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text column */}
        <div className="flex-1 text-center md:text-left">
          
          {/* 2. Main Name H1 - Stagger 1 */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight font-mono text-white">
              <span className="text-cyan-300">VINIT</span> RANGDAL
            </h1>
          </motion.div>
        
          {/* 3. Dynamic Animated Text (The Typewriter Cycle) - Stagger 2 */}
          <motion.div 
            variants={itemVariants} 
            className={`text-xl md:text-2xl mb-8 h-10 md:h-12 flex items-center justify-center md:justify-start ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            <span className="inline-block min-w-[300px] text-left">
              <motion.span 
                key={currentTextIndex} // Key changes to trigger Framer Motion transition on text change
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {typewriterTexts[currentTextIndex]}
              </motion.span>
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>
        
          {/* 4. Static Professional Title (The long tagline) - Stagger 3 */}
          <motion.div variants={itemVariants}>
            <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto md:mx-0 ${isDark ? 'text-gray-400 font-mono' : 'text-gray-500'}`}>
              Full Stack Developer | Mobile App Developer | Problem Solver
            </p>
          </motion.div>
        
          {/* 5. Buttons - Stagger 4 */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                onClick={scrollToAbout}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-gray-900 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-cyan-400/50"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.7)" }}
              >
                Explore My Work
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-4 border-2 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isDark 
                    ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-cyan-400/40' 
                    : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Profile placeholder column */}
        <div className="mt-12 md:mt-0 flex-shrink-0 mx-auto">
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-cyan-400 bg-gray-700 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.25)] relative"
            variants={itemVariants}
            transition={{ delay: 1.8, duration: 0.8 }} // Delayed entrance after text
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(6, 182, 212, 0.8)" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
                  <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Final Staggered Fade-In */}
      <motion.div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-700`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
      >
        <button
          onClick={scrollToAbout}
          className={`transition-colors duration-200 ${
            isDark 
              ? 'text-gray-400 hover:text-cyan-400' 
              : 'text-gray-500 hover:text-blue-500'
          }`}
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
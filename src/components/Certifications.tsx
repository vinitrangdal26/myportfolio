import { useState } from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';

const Certifications = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCert, setSelectedCert] = useState(0); // State to track selected cert

  const certifications = [
    {
      title: "Data Science Real-time Project",
      provider: "Industry Certification",
      category: "NLP, Audio Processing, Machine Learning",
      description: "Comprehensive certification covering real-world data science applications including natural language processing, audio analysis, and machine learning implementation.",
      color: "from-cyan-500 to-teal-500",
      skills: ["NLP", "Audio Processing", "Machine Learning", "Real-time Systems"]
    },
    {
      title: "Python for Data Analysis",
      provider: "Professional Certification",
      category: "Data Analysis & Visualization",
      description: "Advanced certification in Python programming for data analysis, covering pandas, numpy, matplotlib, and statistical analysis techniques.",
      color: "from-teal-500 to-cyan-500",
      skills: ["Python", "Pandas", "Data Visualization", "Statistical Analysis"]
    },
    {
      title: "Machine Learning Foundations",
      provider: "Technical Certification",
      category: "AI & Machine Learning",
      description: "Foundational certification in machine learning concepts, algorithms, and implementation using modern frameworks and libraries.",
      color: "from-blue-600 to-cyan-600",
      skills: ["ML Algorithms", "Model Training", "Feature Engineering", "Model Evaluation"]
    }
  ];

  const selectedData = certifications[selectedCert];

  // Animation variants for the content panel
  const panelVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section 
      id="certifications" 
      className={`py-24 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-gray-50'} transition-colors duration-300`}
    >
      {/* Techie Background Animation (Same as Projects) */}
      <div className={`absolute inset-0 z-0 opacity-5 ${
        isDark 
          ? 'bg-[url("data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%2306b6d4%22 fill-opacity=%220.1%22 fill-rule=%22evenodd%22%3E%3Cpath d=%22M0 40L40 0H20L0 20M40 40V20L20 40%22/%3E%3C/g%3E%3C/svg%3E")] animate-pulse-slow'
          : 'bg-[url("data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%232563eb%22 fill-opacity=%220.08%22 fill-rule=%22evenodd%22%3E%3Cpath d=%22M0 40L40 0H20L0 20M40 40V20L20 40%22/%3E%3C/g%3E%3C/svg%3E")]'
      } rounded-2xl`}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div 
          ref={ref} 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              Certifications
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDark ? 'bg-cyan-400' : 'bg-blue-600'
            }`}></div>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            
            {/* Left Column: Interactive Tab Buttons */}
            <div className="flex md:flex-col gap-4">
              {certifications.map((cert, index) => (
                <motion.button
                  key={cert.title}
                  onClick={() => setSelectedCert(index)}
                  className={`w-full p-4 rounded-lg text-left font-semibold transition-all duration-300 transform ${
                    selectedCert === index
                      ? (isDark ? 'bg-cyan-800/50 text-cyan-300 ring-2 ring-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'bg-blue-100 text-blue-700 ring-2 ring-blue-500')
                      : (isDark ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/60 hover:text-cyan-400' : 'bg-gray-100 text-gray-500 hover:bg-gray-200')
                  }`}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} className={selectedCert === index ? (isDark ? 'text-cyan-400' : 'text-blue-500') : (isDark ? 'text-gray-500' : 'text-gray-400')} />
                    <span>{cert.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right Column: Animated Content Panel */}
            <div className={`md:col-span-2 relative rounded-2xl p-8 min-h-[300px] ${
              isDark ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20' : 'bg-white/60 backdrop-blur-sm border border-gray-200/30'
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedData.title} // This key triggers the animation
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-r ${selectedData.color} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Award size={32} className="text-white" />
                      </motion.div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-cyan-300' : 'text-gray-900'}`}>{selectedData.title}</h3>
                      <p className={`text-lg font-semibold ${isDark ? 'text-cyan-300/90' : 'text-blue-600'}`}>{selectedData.provider}</p>
                      <p className={`text-sm mt-1 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{selectedData.category}</p>
                      
                      <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{selectedData.description}</p>
                      
                      <div>
                        <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Key Skills Covered</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedData.skills.map((skill) => (
                            <span key={skill} className={`px-3 py-1 rounded-full text-sm border transition-all duration-200 hover:scale-105 ${
                              isDark 
                                ? 'bg-cyan-600/20 text-cyan-300 border-cyan-400/30 hover:bg-cyan-600/30' 
                                : 'bg-blue-100 text-blue-600 border-blue-500/30 hover:bg-blue-200'
                            }`}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles moved to a separate CSS file */}
    </section>
  );
};

export default Certifications;
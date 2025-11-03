import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';

const Certifications = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      title: "Data Science Real-time Project",
      provider: "Industry Certification",
      category: "NLP, Audio Processing, Machine Learning",
      description: "Comprehensive certification covering real-world data science applications including natural language processing, audio analysis, and machine learning implementation.",
      color: "from-cyan-500 to-teal-500", // Consistent Cyan/Teal
      skills: ["NLP", "Audio Processing", "Machine Learning", "Real-time Systems"]
    },
    {
      title: "Python for Data Analysis",
      provider: "Professional Certification",
      category: "Data Analysis & Visualization",
      description: "Advanced certification in Python programming for data analysis, covering pandas, numpy, matplotlib, and statistical analysis techniques.",
      color: "from-teal-500 to-cyan-500", // Consistent Teal/Cyan
      skills: ["Python", "Pandas", "Data Visualization", "Statistical Analysis"]
    },
    {
      title: "Machine Learning Foundations",
      provider: "Technical Certification",
      category: "AI & Machine Learning",
      description: "Foundational certification in machine learning concepts, algorithms, and implementation using modern frameworks and libraries.",
      color: "from-blue-600 to-cyan-600", // Consistent Blue/Cyan
      skills: ["ML Algorithms", "Model Training", "Feature Engineering", "Model Evaluation"]
    }
  ];

  return (
    <section id="certifications" className={`py-24 ${isDark ? 'bg-black' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={ref} className={`transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-cyan-400' : 'text-blue-600' // Cyan accent
            }`}>
              Certifications
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDark ? 'bg-cyan-400' : 'bg-blue-600'
            }`}></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    // Corrected the hover shadow to match the boot-up overlay glow
                    whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(6,182,212,0.4)' }}
                  >
                    {/* Glassmorphism Card Style */}
                    <div className={`relative rounded-2xl p-8 ${isDark ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 hover:shadow-cyan-400/30' : 'bg-white/60 backdrop-blur-sm border border-gray-200/30 hover:shadow-blue-200/20'}`}>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <motion.div 
                          className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Award size={32} className="text-white" />
                        </motion.div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div>
                            {/* Cyan Accent for Title */}
                            <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-cyan-300' : 'text-gray-900'}`}>{cert.title}</h3>
                            <p className={`text-lg font-semibold ${isDark ? 'text-cyan-300/90' : 'text-blue-600'}`}>{cert.provider}</p>
                            <p className={`text-sm mt-1 ${
                              isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>{cert.category}</p>
                          </div>
                        </div>
                        
                        <p className={`mb-4 leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>{cert.description}</p>
                        
                        <div>
                          <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Key Skills Covered</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <span key={skill} className={`px-3 py-1 rounded-full text-sm border transition-all duration-200 hover:scale-105 ${
                                isDark 
                                  ? 'bg-cyan-600/20 text-cyan-300 border-cyan-400/30 hover:bg-cyan-600/30' // Cyan Skill Tags
                                  : 'bg-blue-100 text-blue-600 border-blue-500/30 hover:bg-blue-200'
                              }`}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
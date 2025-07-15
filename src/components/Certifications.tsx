import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
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
      color: "from-blue-500 to-emerald-500",
      skills: ["NLP", "Audio Processing", "Machine Learning", "Real-time Systems"]
    },
    {
      title: "Python for Data Analysis",
      provider: "Professional Certification",
      category: "Data Analysis & Visualization",
      description: "Advanced certification in Python programming for data analysis, covering pandas, numpy, matplotlib, and statistical analysis techniques.",
      color: "from-emerald-500 to-blue-500",
      skills: ["Python", "Pandas", "Data Visualization", "Statistical Analysis"]
    },
    {
      title: "Machine Learning Foundations",
      provider: "Technical Certification",
      category: "AI & Machine Learning",
      description: "Foundational certification in machine learning concepts, algorithms, and implementation using modern frameworks and libraries.",
      color: "from-blue-600 to-emerald-600",
      skills: ["ML Algorithms", "Model Training", "Feature Engineering", "Model Evaluation"]
    }
  ];

  return (
    <section id="certifications" className={`py-24 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={ref} className={`transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-2xl blur opacity-10 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className={`relative backdrop-blur-sm rounded-2xl p-8 border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isDark 
                      ? 'bg-gray-700/50 border-gray-600/50' 
                      : 'bg-white/80 border-gray-200/50'
                  }`}>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Award size={32} className="text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div>
                            <h3 className={`text-2xl font-bold mb-1 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>{cert.title}</h3>
                            <p className={`text-lg font-semibold ${
                              isDark ? 'text-emerald-400' : 'text-blue-600'
                            }`}>{cert.provider}</p>
                            <p className={`text-sm mt-1 ${
                              isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>{cert.category}</p>
                          </div>
                          {/* <button className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-4 sm:mt-0 ${
                            isDark 
                              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                              : 'bg-blue-500 hover:bg-blue-600 text-white'
                          }`}>
                            <ExternalLink size={16} />
                            View Certificate
                          </button> */}
                        </div>
                        
                        <p className={`mb-4 leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>{cert.description}</p>
                        
                        <div>
                          <h4 className={`text-lg font-semibold mb-3 ${
                            isDark ? 'text-emerald-400' : 'text-blue-600'
                          }`}>Key Skills Covered</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <span key={skill} className={`px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105 ${
                                isDark 
                                  ? 'bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600/30' 
                                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                              }`}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
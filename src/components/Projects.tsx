import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "RoleMatch AI",
      description: "AI-powered resume screener for job-role prediction using advanced machine learning algorithms",
      tech: ["Python", "TF-IDF", "KNN", "Pickle", "Scikit-learn"],
      features: [
        "Intelligent resume parsing and analysis",
        "Job role prediction with high accuracy",
        "Automated candidate screening",
        "Real-time matching algorithms"
      ],
      color: "from-blue-500 to-emerald-500"
    },
    {
      title: "Netflix Stock Sentiment Analysis",
      description: "Comprehensive analysis combining time series forecasting with sentiment analysis to track stock price patterns",
      tech: ["Python", "VADER", "Time Series", "Pandas", "Matplotlib"],
      features: [
        "Real-time sentiment tracking",
        "Time series price prediction",
        "Market trend analysis",
        "Interactive visualizations"
      ],
      color: "from-emerald-500 to-blue-500"
    },
    {
      title: "iPhone Review Sentiment System",
      description: "Flask-based web application for real-time sentiment analysis and review filtering",
      tech: ["Flask", "TextBlob", "Octoparse", "NLP", "Web Scraping"],
      features: [
        "Real-time sentiment scoring",
        "Advanced review filtering",
        "Interactive web interface",
        "Automated data collection"
      ],
      color: "from-blue-600 to-emerald-600"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={ref} className={`transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${currentProject * 100}%)` }}>
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className={`group ${
                      isDark ? 'bg-gray-800/50' : 'bg-gray-50/80'
                    } backdrop-blur-sm rounded-2xl p-8 border ${
                      isDark ? 'border-gray-700/50' : 'border-gray-200/50'
                    } hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                      <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-6">
                          <div>
                            <h3 className={`text-3xl font-bold mb-3 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>{project.title}</h3>
                            <p className={`text-lg leading-relaxed ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>{project.description}</p>
                          </div>

                          <div>
                            <h4 className={`text-xl font-semibold mb-3 ${
                              isDark ? 'text-emerald-400' : 'text-blue-600'
                            }`}>Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                                    isDark ? 'bg-emerald-400' : 'bg-blue-500'
                                  }`}></span>
                                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* <div className="flex gap-4">
                            <button className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                              isDark 
                                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                            }`}>
                              <Github size={20} />
                              View Code
                            </button>
                            <button className={`flex items-center gap-2 px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                              isDark 
                                ? 'border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900'
                                : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                            }`}>
                              <ExternalLink size={20} />
                              Live Demo
                            </button>
                          </div> */}
                        </div>

                        <div className="relative group">
                          <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                          <div className={`relative backdrop-blur-sm rounded-2xl p-6 ${
                            isDark ? 'bg-gray-700/50' : 'bg-white/50'
                          }`}>
                            <div className={`aspect-video rounded-xl flex items-center justify-center ${
                              isDark ? 'bg-gray-800' : 'bg-gray-100'
                            }`}>
                              <div className={`text-center ${
                                isDark ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                <div className="text-4xl mb-2">💻</div>
                                <div className="text-sm">Project Preview</div>
                              </div>
                            </div>
                            <div className="mt-4">
                              <h4 className={`text-lg font-semibold mb-2 ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}>Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                  <span key={tech} className={`px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105 ${
                                    isDark 
                                      ? 'bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600/30' 
                                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                                  }`}>
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevProject}
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentProject 
                        ? (isDark ? 'bg-emerald-400' : 'bg-blue-500') 
                        : (isDark ? 'bg-gray-600' : 'bg-gray-300')
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextProject}
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';
import rolematchImg from '../assets/images/rolematch.png';
import netflixImg from '../assets/images/netflix-stock.png';
import iphoneImg from '../assets/images/iphone-reviews.png';

// Import local images - Adjust paths if your folder structure is different
// If you were using next/image, you would import like this:
// import RoleMatchAIImage from '/public/assets/images/rolematch-ai.png'; 
// import NetflixSentimentImage from '/public/assets/images/netflix-sentiment.png';
// import IphoneSentimentImage from '/public/assets/images/iphone-sentiment.png';

const Projects = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "RoleMatch AI",
      description: "AI-powered resume screener for job-role prediction using advanced machine learning algorithms.",
      tech: ["Python", "TF-IDF", "KNN", "Pickle", "Scikit-learn"],
      features: [
        "Intelligent resume parsing and analysis",
        "Job role prediction with high accuracy",
        "Automated candidate screening",
        "Real-time matching algorithms"
      ],
      color: "from-cyan-500 to-teal-500",
      imageUrl: rolematchImg
    },
    {
      title: "Netflix Stock Sentiment Analysis",
      description: "Comprehensive analysis combining time series forecasting with sentiment analysis to track stock price patterns.",
      tech: ["Python", "VADER", "Time Series", "Pandas", "Matplotlib"],
      features: [
        "Real-time sentiment tracking",
        "Time series price prediction",
        "Market trend analysis",
        "Interactive visualizations"
      ],
      color: "from-teal-500 to-cyan-500",
      imageUrl: netflixImg
    },
    {
      title: "iPhone Review Sentiment System",
      description: "Flask-based web application for real-time sentiment analysis and review filtering.",
      tech: ["Flask", "TextBlob", "Octoparse", "NLP", "Web Scraping"],
      features: [
        "Real-time sentiment scoring",
        "Advanced review filtering",
        "Interactive web interface",
        "Automated data collection"
      ],
      color: "from-blue-600 to-cyan-600",
      imageUrl: iphoneImg
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className={`py-24 ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={ref} className={`transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              Featured Projects
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDark ? 'bg-cyan-400' : 'bg-blue-600'
            }`}></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${currentProject * 100}%)` }}>
                {projects.map((project, index) => (
                  <motion.div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4" 
                    whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(6,182,212,0.5)' }} 
                    transition={{ duration: 0.25 }}
                  >
                    <div 
                      className={`group rounded-2xl p-8 relative overflow-hidden ${ // Added relative & overflow-hidden
                        isDark 
                          ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 hover:shadow-cyan-400/30' 
                          : 'bg-white/60 backdrop-blur-sm border border-gray-200/30 hover:shadow-blue-200/20'
                      }`}
                    >
                      {/* Techie Background Animation Overlay */}
                      <div className={`absolute inset-0 z-0 opacity-5 ${ // Low opacity so it's subtle
                        isDark 
                          ? 'bg-[url("data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%2306b6d4%22 fill-opacity=%220.1%22 fill-rule=%22evenodd%22%3E%3Cpath d=%22M0 40L40 0H20L0 20M40 40V20L20 40%22/%3E%3C/g%3E%3C/svg%3E")] animate-pulse-slow' // Cyan triangles, slow pulse
                          : 'bg-[url("data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%232563eb%22 fill-opacity=%220.08%22 fill-rule=%22evenodd%22%3E%3Cpath d=%22M0 40L40 0H20L0 20M40 40V20L20 40%22/%3E%3C/g%3E%3C/svg%3E")]' // Blue triangles
                      } rounded-2xl`}></div>

                      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start"> {/* z-10 for content */}
                        <div className="space-y-6">
                          <div>
                            <h3 className={`text-3xl font-bold mb-3 font-mono ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>{project.title}</h3>
                            <p className={`text-lg leading-relaxed ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>{project.description}</p>
                          </div>

                          <div>
                            <h4 className={`text-xl font-semibold mb-3 ${
                              isDark ? 'text-cyan-400' : 'text-blue-600'
                            }`}>Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                                    isDark ? 'bg-cyan-300' : 'bg-blue-500'
                                  }`}></span>
                                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Action buttons */}
                          <div className="flex gap-4 pt-4">
                            <button className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                              isDark 
                                ? 'bg-cyan-600 hover:bg-cyan-700 text-gray-900 shadow-cyan-400/50'
                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                            }`}>
                              <Code size={20} />
                              View Code
                            </button>
                            <button className={`flex items-center gap-2 px-6 py-3 border-2 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                              isDark 
                                ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                                : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                            }`}>
                              <ExternalLink size={20} />
                              Live Demo
                            </button>
                          </div>
                        </div>

                        <div className="relative group">
                          {/* Inner container for image and tech stack */}
                          <motion.div 
                            className={`relative rounded-2xl p-6 ${isDark ? 'bg-gray-700/50' : 'bg-white/50'}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                          >
                            <div className="overflow-hidden rounded-xl relative">
                              {/* Image Implementation using local path */}
                              <img 
                                src={project.imageUrl} 
                                alt={`${project.title} preview`} 
                                className="w-full h-48 md:h-64 object-cover rounded-xl transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:ring-2 group-hover:ring-cyan-400/50"
                              />
                              {/* Tech Stack Overlay Bar */}
                              <div className={`absolute bottom-0 left-0 right-0 p-2 text-xs font-mono text-center ${isDark ? 'bg-black/70 text-cyan-300' : 'bg-white/70 text-gray-900'} backdrop-blur-sm rounded-b-xl`}>
                                {project.tech.slice(0, 3).join(' | ')}...
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                  <span key={tech} className={`px-3 py-1 rounded-full text-sm border transition-all duration-200 hover:scale-105 ${
                                    isDark 
                                      ? 'bg-cyan-600/20 text-cyan-300 border-cyan-400/30 hover:bg-cyan-600/30'
                                      : 'bg-blue-100 text-blue-600 border-blue-500/30 hover:bg-blue-200'
                                  }`}>
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevProject}
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-cyan-400' 
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
                        ? (isDark ? 'bg-cyan-400' : 'bg-blue-500')
                        : (isDark ? 'bg-gray-600' : 'bg-gray-300')
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextProject}
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-cyan-400'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* pulse-slow animation moved to global CSS (src/index.css) */}
    </section>
  );
};

export default Projects;
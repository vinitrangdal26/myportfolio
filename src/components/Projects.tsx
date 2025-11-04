import { useState } from 'react';
import { Code, ExternalLink, Brain, GitBranch, Database, Shield, Smartphone, Users, Globe, Film, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';

// Import your local images
import rolematchImg from '../assets/images/rolematch.png';
import netflixImg from '../assets/images/netflix-stock.png';
import iphoneImg from '../assets/images/iphone-reviews.png';

// --- GENERATED IMAGES (Placeholders) ---
// Ensure these paths are correct and images exist
import vidconfWebImg from '../assets/images/vidconf-web.png';
import vidconfMobileImg from '../assets/images/vidconf-mobile.png';
import securityScannerImg from '../assets/images/security-scanner.png';

// Placeholder images for the ones not yet explicitly provided
import genericPlaceholderImg from '../assets/images/rolematch.png'; // Using rolematch as a generic placeholder

const Projects = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  // --- Complete Project Database with all 9 projects ---
  // Reverted to original ProjectImage type handling
  type ProjectImage = string | { src: string }; 

  const allProjects: {
    id: string;
    title: string;
    icon: JSX.Element;
    description: string;
    tech: string[];
    features: string[];
    imageUrl: ProjectImage; // Retaining original type
    accent: string;
    glow: string;
    position: string;
  }[] = [
    {
      id: "vidconf-web",
      title: "Video Conference Web App",
      icon: <Film size={24} />,
      description: "A secure, real-time communication platform integrating Jitsi Meet with a Django backend for session management, Keycloak authentication, and SIP configuration.",
      tech: ["Django", "Jitsi Meet API", "Keycloak", "WebRTC", "SIP", "Docker", "PostgreSQL", "Redis", "Nginx"],
      features: ["Real-time Video/Audio", "Secure Keycloak Authentication", "SIP Integration", "Scalable Session Management", "Scheduling Features"],
      imageUrl: vidconfWebImg, // Replaced with imported image
      accent: "text-cyan-400",
      glow: "shadow-cyan-400/50",
      position: "top-[5%] left-[5%]", // top-left
    },
    {
      id: "vidconf-mobile",
      title: "Video Conference Mobile App",
      icon: <Smartphone size={24} />,
      description: "A cross-platform mobile version of the video conferencing app, built with Flutter and WebRTC APIs to ensure seamless communication across devices.",
      tech: ["Flutter", "WebRTC", "Jitsi API", "Dart"],
      features: ["Cross-Platform (iOS/Android)", "Native Performance", "Seamless Mobile/Web Communication"],
      imageUrl: vidconfMobileImg, // Replaced with imported image
      accent: "text-cyan-400",
      glow: "shadow-cyan-400/50",
      position: "top-[5%] left-[35%]", // top-center-left
    },
    {
      id: "security-scanner",
      title: "Flask Security Scanner",
      icon: <Shield size={24} />,
      description: "A Flask web application for vulnerability scanning, network exploitation, and reconnaissance, integrating various security tools into one interface.",
      tech: ["Flask", "Python", "Nmap", "Scapy", "Vulnerability Scanning"],
      features: ["Network Reconnaissance", "Vulnerability Scanning", "Exploitation Utilities", "Web-based Interface"],
      imageUrl: securityScannerImg, // Replaced with imported image
      accent: "text-red-400",
      glow: "shadow-red-400/50",
      position: "top-[5%] left-[65%]", // top-center-right
    },
    {
      id: "rolematch-ai",
      title: "RoleMatch AI",
      icon: <Brain size={24} />,
      description: "AI-powered resume screener for job-role prediction using advanced machine learning algorithms.",
      tech: ["Python", "TF-IDF", "KNN", "Pickle", "Scikit-learn"],
      features: ["Intelligent Resume Parsing", "High-Accuracy Job Role Prediction", "Automated Candidate Screening"],
      imageUrl: rolematchImg,
      accent: "text-teal-400",
      glow: "shadow-teal-400/50",
      position: "top-[30%] left-[20%]", // mid-left
    },
    {
      id: "user-profiling",
      title: "User Profiling URL Predictor",
      icon: <Users size={24} />,
      description: "An ML model that trains on user behavior data to predict the next URL a user is likely to visit, achieving high model accuracy.",
      tech: ["Machine Learning", "Python", "Pandas", "Scikit-learn", "Data Profiling"],
      features: ["User Behavior Analysis", "Predictive Modeling", "High Accuracy", "Personalization Engine"],
      imageUrl: genericPlaceholderImg, // Using genericPlaceholderImg for this one
      accent: "text-teal-400",
      glow: "shadow-teal-400/50",
      position: "top-[30%] left-[50%]", // mid-center
    },
    {
      id: "netflix-sentiment",
      title: "Netflix Stock Sentiment",
      icon: <Brain size={24} />,
      description: "A comprehensive analysis combining time series forecasting (ARIMA) with VADER-based sentiment analysis to track and predict stock price patterns.",
      tech: ["Python", "VADER", "Time Series", "Pandas", "Matplotlib", "ARIMA"],
      features: ["Real-time Sentiment Tracking", "Time Series Price Prediction", "Market Trend Analysis"],
      imageUrl: netflixImg,
      accent: "text-teal-400",
      glow: "shadow-teal-400/50",
      position: "top-[30%] left-[80%]", // mid-right
    },
    {
      id: "translator",
      title: "Language Translator (NMT)",
      icon: <Globe size={24} />,
      description: "A Neural Machine Translation (NMT) model developed using an LSTM-based architecture to translate text between multiple languages.",
      tech: ["Python", "TensorFlow", "LSTM", "NLTK", "Neural Machine Translation"],
      features: ["Multilingual Translation", "LSTM-based NMT", "Sequence-to-Sequence Model"],
      imageUrl: genericPlaceholderImg, // Using genericPlaceholderImg for this one
      accent: "text-purple-400",
      glow: "shadow-purple-400/50",
      position: "top-[55%] left-[5%]", // bottom-left
    },
    {
      id: "ecommerce",
      title: "Python/SQL E-commerce",
      icon: <ShoppingCart size={24} />,
      description: "A full-featured e-commerce backend built with Python and SQL, handling products, users, carts, and orders.",
      tech: ["Python", "SQL", "Flask", "PostgreSQL", "REST API"],
      features: ["User Authentication", "Product Catalog Management", "Shopping Cart Logic", "Order Processing"],
      imageUrl: genericPlaceholderImg, // Using genericPlaceholderImg for this one
      accent: "text-purple-400",
      glow: "shadow-purple-400/50",
      position: "top-[55%] left-[35%]", // bottom-center-left
    },
    {
      id: "iphone-reviews",
      title: "iPhone Review Sentiment",
      icon: <Brain size={24} />,
      description: "A Flask web application for real-time sentiment analysis and review filtering, built by scraping web data using Octoparse and analyzing it with TextBlob.",
      tech: ["Flask", "TextBlob", "Octoparse", "NLP", "Web Scraping"],
      features: ["Real-time Sentiment Scoring", "Advanced Review Filtering", "Web-based Interface"],
      imageUrl: iphoneImg,
      accent: "text-purple-400",
      glow: "shadow-purple-400/50",
      position: "top-[55%] left-[65%]", // bottom-center-right
    },
  ];
  
  const [selectedProjectId, setSelectedProjectId] = useState(allProjects[0].id);
  const selectedProjectData = allProjects.find(p => p.id === selectedProjectId);

  // Animation variants for the detail panel
  const panelVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <section 
      id="projects" 
      className={`py-24 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300`}
    >
      {/* Hacking Rain & Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* System Architecture Grid/Lines */}
        <div className={`absolute inset-0 ${isDark ? 'bg-grid-cyan-800/[0.05]' : 'bg-grid-blue-200/[0.05]'}`}></div>
        {/* Hacking Rain Elements */}
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute font-mono text-xs ${isDark ? 'text-green-400 opacity-20' : 'text-blue-600 opacity-10'}`}
            style={{ left: `${Math.random() * 100}%`, fontSize: `${Math.random() * 8 + 8}px` }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: '100vh', opacity: [0, 0.5, 0] }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          >
            {Array.from({ length: Math.floor(Math.random() * 10 + 5) }).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
          </motion.div>
        ))}
      </div>
      
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
              Project Architecture
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDark ? 'bg-cyan-400' : 'bg-blue-600'
            }`}></div>
          </div>

          {/* Main Content Grid: Graph on Left, Details on Right */}
          <div className="grid md:grid-cols-5 gap-8 min-h-[600px]">
            
            {/* --- Left Column: Interactive Project Graph --- */}
            <div className="md:col-span-3 relative min-h-[500px] md:min-h-0">
              {/* --- Connecting Lines (Manual) --- */}
              {/* Connects top-left to top-center-left */}
              <div className={`absolute top-[7%] left-[20%] w-[15%] h-px ${isDark ? 'bg-cyan-700/50' : 'bg-blue-300/50'}`}></div>
              {/* Connects top-center-left to top-center-right */}
              <div className={`absolute top-[7%] left-[50%] w-[15%] h-px ${isDark ? 'bg-cyan-700/50' : 'bg-blue-300/50'}`}></div>
              {/* Connects top-center-left to mid-center */}
              <div className={`absolute top-[7%] left-[43%] w-px h-[23%] ${isDark ? 'bg-cyan-700/50' : 'bg-blue-300/50'}`}></div>
              {/* Connects mid-center to mid-left */}
              <div className={`absolute top-[32.5%] left-[35%] w-[15%] h-px ${isDark ? 'bg-cyan-700/50' : 'bg-blue-300/50'}`}></div>
              {/* Connects mid-center to mid-right */}
              <div className={`absolute top-[32.5%] left-[65%] w-[15%] h-px ${isDark ? 'bg-cyan-700/50' : 'bg-blue-300/50'}`}></div>
              {/* Connects mid-center to bottom-center-left */}
              <div className={`absolute top-[32.5%] left-[58%] w-px h-[23%] ${isDark ? 'bg-cyan-700/50' : 'bg-blue-300/50'}`}></div>
              {/* Connects bottom-center-left to bottom-left */}
              <div className={`absolute top-[57.5%] left-[20%] w-[15%] h-px ${isDark ? 'bg-cyan-700/50' : 'bg-blue-300/50'}`}></div>
              {/* Connects bottom-center-left to bottom-center-right */}
              <div className={`absolute top-[57.5%] left-[50%] w-[15%] h-px ${isDark ? 'bg-cyan-700/50' : 'bg-blue-300/50'}`}></div>
              
              {/* --- Project Nodes --- */}
              {allProjects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => setSelectedProjectId(project.id)}
                  className={`absolute p-3 rounded-xl flex items-center gap-2 transition-all duration-300 transform ${project.position} ${
                    selectedProjectId === project.id
                      ? (isDark ? `bg-cyan-800/60 ${project.accent} ring-2 ring-current shadow-[0_0_20px_var(--tw-shadow-color)] ${project.glow}` : `bg-blue-100 ${project.accent} ring-2 ring-current`)
                      : (isDark ? 'bg-gray-800/70 backdrop-blur-sm border border-cyan-400/20 text-gray-300 hover:bg-gray-700/80 hover:text-cyan-300' : 'bg-white/80 backdrop-blur-sm border border-gray-200/30 text-gray-600 hover:bg-white')
                  }`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                >
                  <span className={selectedProjectId === project.id ? (isDark ? project.accent : project.accent) : ''}>{project.icon}</span>
                  <span className={`text-sm font-semibold hidden sm:inline-block ${selectedProjectId === project.id ? (isDark ? 'text-white' : 'text-black') : ''}`}>{project.title}</span>
                </motion.button>
              ))}
            </div>

            {/* --- Right Column: Sticky Detail Panel --- */}
            <div className="md:col-span-2 h-fit md:sticky top-24">
              <div className={`relative rounded-2xl p-6 overflow-hidden ${isDark ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20' : 'bg-white/70 backdrop-blur-sm border border-gray-200/30'}`}>
                <AnimatePresence mode="wait">
                  {selectedProjectData && (
                    <motion.div
                      key={selectedProjectData.id}
                      variants={panelVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      {/* Image */}
                      <div className="overflow-hidden rounded-lg mb-4">
                        <img 
                          src={typeof selectedProjectData.imageUrl === 'string' ? selectedProjectData.imageUrl : (selectedProjectData.imageUrl as { src: string }).src} // Correctly handles both string and { src: string }
                          alt={`${selectedProjectData.title} preview`} 
                          className="w-full h-48 object-cover"
                        />
                      </div>

                      {/* Title */}
                      <h3 className={`text-3xl font-bold mb-3 font-mono ${selectedProjectData.accent}`}>
                        {selectedProjectData.title}
                      </h3>

                      {/* Description */}
                      <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {selectedProjectData.description}
                      </p>

                      {/* Features */}
                      <h4 className={`text-xl font-semibold mb-3 ${selectedProjectData.accent}`}>
                        Key Features
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {selectedProjectData.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${selectedProjectData.accent.replace('text-', 'bg-')}`}></span>
                            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <h4 className={`text-xl font-semibold mb-3 ${selectedProjectData.accent}`}>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProjectData.tech.map((tech) => (
                          <span key={tech} className={`px-3 py-1 rounded-full text-sm border ${
                            isDark 
                              ? `bg-cyan-600/20 ${selectedProjectData.accent} border-current/30` 
                              : 'bg-blue-100 text-blue-600 border-blue-500/30'
                          }`}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-6 mt-6 border-t border-cyan-400/20">
                        <motion.button 
                          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                            isDark 
                              ? `bg-gradient-to-r from-cyan-600 to-teal-600 text-gray-900 ${selectedProjectData.glow}`
                              : 'bg-blue-500 hover:bg-blue-600 text-white'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Code size={20} />
                          View Code
                        </motion.button>
                        <motion.button 
                          className={`flex items-center gap-2 px-6 py-3 border-2 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                            isDark 
                              ? `${selectedProjectData.accent.replace('text-','border-')} ${selectedProjectData.accent} hover:bg-current/10`
                              : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </motion.button>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global CSS for custom animations (reused from Skills) */}
      <style >{`
        /* Hacking Rain & Grid (If not already in global.css) */
        @keyframes fall {
          0% { transform: translateY(-100%) translateX(0); opacity: 0; }
          20% { opacity: 0.5; }
          100% { transform: translateY(100vh) translateX(0); opacity: 0; }
        }
        .bg-grid-cyan-800\/[0\.05] {
          background-image: linear-gradient(0deg, transparent 90%, rgba(6,182,212,0.05) 90%), linear-gradient(90deg, transparent 90%, rgba(6,182,212,0.05) 90%);
          background-size: 20px 20px;
        }
        .bg-grid-blue-200\/[0\.05] {
          background-image: linear-gradient(0deg, transparent 90%, rgba(37,99,235,0.05) 90%), linear-gradient(90deg, transparent 90%, rgba(37,99,235,0.05) 90%);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Projects;
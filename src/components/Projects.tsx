import { useState } from 'react';
import { Code, ExternalLink, Brain, Shield, Smartphone, Users, Globe, Film, ShoppingCart, ChevronDown } from 'lucide-react';
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
  }[] = [
    {
      id: "vidconf-web",
      title: "Video Conference Web App",
      icon: <Film size={24} />,
      description: "A secure, real-time communication platform integrating Jitsi Meet with a Django backend for session management, Keycloak authentication, and SIP configuration.",
      tech: ["Django", "Jitsi Meet API", "Keycloak", "WebRTC", "SIP", "Docker", "PostgreSQL", "Redis", "Nginx"],
      features: ["Real-time Video/Audio", "Secure Keycloak Authentication", "SIP Integration", "Scalable Session Management", "Scheduling Features"],
      imageUrl: vidconfWebImg,
  accent: "text-cyan-400",
  glow: "shadow-cyan-400/50",
    },
    {
      id: "vidconf-mobile",
      title: "Video Conference Mobile App",
      icon: <Smartphone size={24} />,
      description: "A cross-platform mobile version of the video conferencing app, built with Flutter and WebRTC APIs to ensure seamless communication across devices.",
      tech: ["Flutter", "WebRTC", "Jitsi API", "Dart"],
      features: ["Cross-Platform (iOS/Android)", "Native Performance", "Seamless Mobile/Web Communication"],
      imageUrl: vidconfMobileImg,
  accent: "text-cyan-400",
  glow: "shadow-cyan-400/50",
    },
    {
      id: "security-scanner",
      title: "Flask Security Scanner",
      icon: <Shield size={24} />,
      description: "A Flask web application for vulnerability scanning, network exploitation, and reconnaissance, integrating various security tools into one interface.",
      tech: ["Flask", "Python", "Nmap", "Scapy", "Vulnerability Scanning"],
      features: ["Network Reconnaissance", "Vulnerability Scanning", "Exploitation Utilities", "Web-based Interface"],
      imageUrl: securityScannerImg,
  accent: "text-red-400",
  glow: "shadow-red-400/50",
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
    },
    {
      id: "user-profiling",
      title: "User Profiling URL Predictor",
      icon: <Users size={24} />,
      description: "An ML model that trains on user behavior data to predict the next URL a user is likely to visit, achieving high model accuracy.",
      tech: ["Machine Learning", "Python", "Pandas", "Scikit-learn", "Data Profiling"],
      features: ["User Behavior Analysis", "Predictive Modeling", "High Accuracy", "Personalization Engine"],
      imageUrl: genericPlaceholderImg,
  accent: "text-teal-400",
  glow: "shadow-teal-400/50",
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
    },
    {
      id: "translator",
      title: "Language Translator (NMT)",
      icon: <Globe size={24} />,
      description: "A Neural Machine Translation (NMT) model developed using an LSTM-based architecture to translate text between multiple languages.",
      tech: ["Python", "TensorFlow", "LSTM", "NLTK", "Neural Machine Translation"],
      features: ["Multilingual Translation", "LSTM-based NMT", "Sequence-to-Sequence Model"],
      imageUrl: genericPlaceholderImg,
  accent: "text-purple-400",
  glow: "shadow-purple-400/50",
    },
    {
      id: "ecommerce",
      title: "Python/SQL E-commerce",
      icon: <ShoppingCart size={24} />,
      description: "A full-featured e-commerce backend built with Python and SQL, handling products, users, carts, and orders.",
      tech: ["Python", "SQL", "Flask", "PostgreSQL", "REST API"],
      features: ["User Authentication", "Product Catalog Management", "Shopping Cart Logic", "Order Processing"],
      imageUrl: genericPlaceholderImg,
  accent: "text-purple-400",
  glow: "shadow-purple-400/50",
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
    },
  ];

  // Family Tree Structure: Projects organized by category with responsive spacing
  const projectTree = {
    root: {
      id: "root",
      label: "Portfolio",
      x: 50,
      y: 8,
      level: 0,
      children: ["communication", "security", "ai-ml", "streaming"],
    },
    categories: {
      communication: {
        id: "communication",
        label: "Communication",
        x: 12,
        y: 28,
        level: 1,
        color: "cyan",
        children: ["vidconf-web", "vidconf-mobile"],
      },
      security: {
        id: "security",
        label: "Security",
        x: 35,
        y: 28,
        level: 1,
        color: "red",
        children: ["security-scanner"],
      },
      "ai-ml": {
        id: "ai-ml",
        label: "AI & ML",
        x: 62,
        y: 28,
        level: 1,
        color: "teal",
        children: ["rolematch-ai", "user-profiling", "netflix-sentiment", "translator"],
      },
      streaming: {
        id: "streaming",
        label: "Data & Insights",
        x: 88,
        y: 28,
        level: 1,
        color: "purple",
        children: ["ecommerce", "iphone-reviews"],
      },
    },
    projects: {
      "vidconf-web": { x: 5, y: 55 },
      "vidconf-mobile": { x: 19, y: 55 },
      "security-scanner": { x: 35, y: 55 },
      "rolematch-ai": { x: 52, y: 55 },
      "user-profiling": { x: 61, y: 55 },
      "netflix-sentiment": { x: 70, y: 55 },
      "translator": { x: 79, y: 55 },
      "ecommerce": { x: 85, y: 55 },
      "iphone-reviews": { x: 96, y: 55 },
    },
  };

  // Generate tree connector lines
  const generateTreeLines = () => {
    const lines: any[] = [];
    const catData = projectTree.categories;
    const root = projectTree.root;

    // Root to categories
    Object.values(catData).forEach((cat: any) => {
      lines.push({ x1: root.x, y1: root.y, x2: cat.x, y2: cat.y });
    });

    // Categories to projects
    Object.entries(projectTree.categories).forEach(([_, cat]: any) => {
      cat.children.forEach((projectId: string) => {
        const projPos = (projectTree.projects as any)[projectId];
        if (projPos) {
          lines.push({ x1: cat.x, y1: cat.y, x2: projPos.x, y2: projPos.y });
        }
      });
    });

    return lines;
  };

  const treeLines = generateTreeLines();
  
  const [selectedProjectId, setSelectedProjectId] = useState(allProjects[0].id);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleProjectSelect = (projectId: string) => {
    setSelectedProjectId(projectId);
    setIsExpanded(false);
  };
  const selectedProjectData = allProjects.find(p => p.id === selectedProjectId);

  const summaryFeatureCount = 2;
  const summaryTechCount = 3;

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
          <div className="grid md:grid-cols-5 gap-8 min-h-[600px] lg:min-h-[700px]">

            {/* Mobile list view */}
            <div className="md:hidden space-y-4">
              {allProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectSelect(project.id)}
                  className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 transition-colors text-left ${
                    selectedProjectId === project.id
                      ? (isDark ? 'border-cyan-400 bg-cyan-500/10 text-cyan-200' : 'border-blue-500 bg-blue-50 text-blue-600')
                      : (isDark ? 'border-gray-700 bg-gray-800 text-gray-200' : 'border-gray-200 bg-white text-gray-700')
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={isDark ? project.accent : 'text-blue-600'}>{project.icon}</span>
                    <span className="font-semibold">{project.title}</span>
                  </span>
                  <span className="text-xs uppercase tracking-wide opacity-70">Select</span>
                </button>
              ))}
            </div>

            {/* --- Left Column: Interactive Project Graph --- */}
            <div className="hidden md:block md:col-span-3 relative min-h-[650px] lg:min-h-[750px]">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="treeLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={isDark ? '#22d3ee44' : '#3b82f644'} />
                    <stop offset="100%" stopColor={isDark ? '#0ea5e944' : '#2563eb44'} />
                  </linearGradient>
                </defs>
                {treeLines.map((line, idx) => (
                  <line
                    key={idx}
                    x1={`${line.x1}%`}
                    y1={`${line.y1}%`}
                    x2={`${line.x2}%`}
                    y2={`${line.y2}%`}
                    stroke="url(#treeLineGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                ))}
              </svg>

              {/* Root Node */}
              <motion.div
                className={`absolute md:-translate-x-1/2 md:-translate-y-1/2 px-4 py-2 rounded-lg font-bold text-center text-sm whitespace-nowrap ${
                  isDark ? 'bg-cyan-900/70 text-cyan-200 border border-cyan-500/50 shadow-lg shadow-cyan-500/20' : 'bg-blue-100 text-blue-700 border border-blue-400 shadow-md'
                }`}
                style={{ left: '50%', top: '8%' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {projectTree.root.label}
              </motion.div>

              {/* Category Nodes */}
              {Object.values(projectTree.categories).map((cat: any, idx: number) => (
                <motion.div
                  key={cat.id}
                  className={`absolute md:-translate-x-1/2 md:-translate-y-1/2 px-3 py-2 rounded-lg font-semibold text-center text-xs lg:text-sm whitespace-nowrap transition-all ${
                    isDark
                      ? `bg-${cat.color}-900/60 text-${cat.color}-200 border border-${cat.color}-500/40 shadow-lg shadow-${cat.color}-500/20 hover:shadow-${cat.color}-500/40 hover:bg-${cat.color}-900/80`
                      : `bg-${cat.color}-100 text-${cat.color}-700 border border-${cat.color}-400/60 shadow-md hover:shadow-lg hover:bg-${cat.color}-150`
                  }`}
                  style={{ left: `${cat.x}%`, top: `${cat.y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {cat.label}
                </motion.div>
              ))}

              {/* Project Nodes */}
              {allProjects.map((project, index) => {
                const projPos = (projectTree.projects as any)[project.id];
                if (!projPos) return null;

                return (
                  <motion.button
                    key={project.id}
                    onClick={() => handleProjectSelect(project.id)}
                    className={`absolute md:-translate-x-1/2 md:-translate-y-1/2 p-2.5 lg:p-3 rounded-lg lg:rounded-xl flex items-center justify-center transition-all duration-300 transform ${
                      selectedProjectId === project.id
                        ? (isDark ? `bg-cyan-800/70 ${project.accent} ring-2 ring-current shadow-[0_0_25px_var(--tw-shadow-color)] ${project.glow}` : `bg-blue-100 ${project.accent} ring-2 ring-current shadow-md`)
                        : (isDark ? 'bg-gray-800/80 backdrop-blur-sm border border-cyan-400/20 text-gray-300 hover:bg-gray-700/90 hover:text-cyan-300 hover:border-cyan-400/40' : 'bg-white/90 backdrop-blur-sm border border-gray-200/40 text-gray-600 hover:bg-white hover:border-gray-300')
                    }`}
                    style={{ left: `${projPos.x}%`, top: `${projPos.y}%` }}
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.06 }}
                    whileHover={{ scale: 1.15, zIndex: 20 }}
                    title={project.title}
                  >
                    <span className="text-lg lg:text-xl">{project.icon}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* --- Right Column: Compact Detail Panel --- */}
            <div className="md:col-span-2 md:sticky top-24 h-fit">
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
                      <div className="overflow-hidden rounded-lg mb-4 aspect-video">
                        <img
                          src={typeof selectedProjectData.imageUrl === 'string' ? selectedProjectData.imageUrl : (selectedProjectData.imageUrl as { src: string }).src}
                          alt={`${selectedProjectData.title} preview`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="space-y-4">
                        <h3 className={`text-3xl font-bold font-mono ${selectedProjectData.accent}`}>
                          {selectedProjectData.title}
                        </h3>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                          {selectedProjectData.description}
                        </p>
                      </div>

                      <div className="mt-6 space-y-4">
                        <div>
                          <h4 className={`text-xl font-semibold mb-3 ${selectedProjectData.accent}`}>
                            Highlights
                          </h4>
                          <ul className="space-y-2">
                            {selectedProjectData.features.slice(0, summaryFeatureCount).map((feature) => (
                              <li key={feature} className="flex items-start">
                                <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${selectedProjectData.accent.replace('text-', 'bg-')}`}></span>
                                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                              </li>
                            ))}
                            {selectedProjectData.features.length > summaryFeatureCount && (
                              <li className={`text-sm italic ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                +{selectedProjectData.features.length - summaryFeatureCount} more capabilities inside
                              </li>
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className={`text-xl font-semibold mb-3 ${selectedProjectData.accent}`}>
                            Core Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProjectData.tech.slice(0, summaryTechCount).map((tech) => (
                              <span
                                key={tech}
                                className={`px-3 py-1 rounded-full text-sm border ${
                                  isDark
                                    ? `bg-cyan-600/20 ${selectedProjectData.accent} border-current/30`
                                    : 'bg-blue-100 text-blue-600 border-blue-500/30'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                            {selectedProjectData.tech.length > summaryTechCount && (
                              <span
                                className={`px-3 py-1 rounded-full text-sm border border-dashed ${
                                  isDark ? 'border-cyan-400/40 text-cyan-200' : 'border-blue-400/50 text-blue-600'
                                }`}
                              >
                                +{selectedProjectData.tech.length - summaryTechCount} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <motion.button
                        type="button"
                        onClick={() => setIsExpanded((prev) => !prev)}
                        className={`mt-6 w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-colors ${
                          isDark
                            ? 'border-cyan-500/30 text-cyan-200 hover:bg-cyan-500/10'
                            : 'border-blue-400/60 text-blue-600 hover:bg-blue-50'
                        }`}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <span className="font-semibold tracking-wide uppercase text-xs">
                          {isExpanded ? 'Hide Full Breakdown' : 'View Full Breakdown'}
                        </span>
                        <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown size={18} />
                        </motion.span>
                      </motion.button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            key="expanded"
                            initial={{ height: 0, opacity: 0, y: -8 }}
                            animate={{ height: 'auto', opacity: 1, y: 0 }}
                            exit={{ height: 0, opacity: 0, y: -8 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className={`mt-6 pt-6 space-y-6 ${isDark ? 'border-t border-cyan-400/20' : 'border-t border-blue-200/60'}`}
                          >
                            <div>
                              <h4 className={`text-xl font-semibold mb-3 ${selectedProjectData.accent}`}>
                                Full Feature Set
                              </h4>
                              <ul className="space-y-2">
                                {selectedProjectData.features.map((feature) => (
                                  <li key={feature} className="flex items-start">
                                    <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${selectedProjectData.accent.replace('text-', 'bg-')}`}></span>
                                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className={`text-xl font-semibold mb-3 ${selectedProjectData.accent}`}>
                                Full Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {selectedProjectData.tech.map((tech) => (
                                  <span
                                    key={tech}
                                    className={`px-3 py-1 rounded-full text-sm border ${
                                      isDark
                                        ? `bg-cyan-600/20 ${selectedProjectData.accent} border-current/30`
                                        : 'bg-blue-100 text-blue-600 border-blue-500/30'
                                    }`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-2">
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
                                    ? `${selectedProjectData.accent.replace('text-', 'border-')} ${selectedProjectData.accent} hover:bg-current/10`
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
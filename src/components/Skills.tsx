import React, { useState, useEffect } from "react";
import { Code, Database, Brain, BarChart, Mic, Rocket, Zap, GitBranch, Terminal, Globe, Cloud } from "lucide-react"; // Added Globe, Cloud icons
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState(0); // State for active category tab
  const [currentSpecialization, setCurrentSpecialization] = useState(0); // State for animating specialization

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={28} />, // Larger icon
      skills: ["Python", "SQL", "JavaScript", "TypeScript", "Bash"],
      description: "Proficient in foundational and advanced programming languages crucial for data science, web development, and system automation and scripting.",
      color: "from-cyan-500 to-teal-500",
      accent: "text-cyan-400", // Accent color for highlighting
      glow: "shadow-cyan-400/40", // Glow for hover effects
    },
    {
      title: "Web Frameworks & Tools",
      icon: <Globe size={28} />, // Changed icon for web frameworks
      skills: ["Flask", "Django", "FastAPI", "React", "Node.js", "Express.js", "Next.js"],
      description: "Experience building robust web applications and APIs, utilizing modern frameworks and libraries for both frontend and backend development, focusing on scalable and efficient solutions.",
      color: "from-teal-500 to-cyan-500",
      accent: "text-teal-400",
      glow: "shadow-teal-400/40",
    },
    {
      title: "Machine Learning",
      icon: <Brain size={28} />,
      skills: ["TensorFlow", "Keras", "Scikit-learn", "PyTorch", "XGBoost", "LSTM", "Transformers"],
      description: "Strong understanding and practical application of various machine learning algorithms, deep learning models, and predictive analytics techniques, from classical models to advanced neural networks.",
      color: "from-blue-600 to-cyan-600",
      accent: "text-blue-400",
      glow: "shadow-blue-400/40",
    },
    {
      title: "Data Analysis & Viz",
      icon: <BarChart size={28} />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau"],
      description: "Expertise in data manipulation, statistical analysis, and creating compelling visualizations to extract actionable insights and communicate complex findings effectively to diverse audiences.",
      color: "from-cyan-600 to-blue-600",
      accent: "text-cyan-500",
      glow: "shadow-cyan-500/40",
    },
    {
      title: "Audio Processing",
      icon: <Mic size={28} />,
      skills: ["Audio-to-Text", "Speech Recognition", "Librosa", "PyAudio", "VAD"],
      description: "Specialized skills in processing and analyzing audio data, including speech recognition, voice activity detection, and converting audio signals into actionable insights and structured data.",
      color: "from-teal-600 to-cyan-600",
      accent: "text-teal-500",
      glow: "shadow-teal-500/40",
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud size={28} />, // Changed icon for cloud/DevOps
      skills: ["Docker", "Kubernetes", "AWS (EC2, S3, Lambda)", "Git", "CI/CD", "Keycloak"],
      description: "Practical knowledge of DevOps practices, containerization, cloud deployment on AWS, version control, and continuous integration/delivery for robust and scalable software delivery.",
      color: "from-purple-600 to-pink-600",
      accent: "text-purple-400",
      glow: "shadow-purple-400/40",
    },
  ];

  const specializations = [
    "Natural Language Processing (NLP)",
    "Time Series Analysis",
    "Data Visualization",
    "RESTful APIs",
    "Identity & Access Management (Keycloak)",
    "Containerization with Docker",
    "Cloud Deployments (AWS)",
    "Real-time Data Pipelines",
    "System Design & Architecture"
  ];

  // Effect to cycle through specializations for the command line animation
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentSpecialization((prev) => (prev + 1) % specializations.length);
      }, 2500); // Change specialization every 2.5 seconds
      return () => clearInterval(interval);
    }
  }, [isVisible, specializations.length]);

  // Framer Motion variants for the skill detail panel
  const detailPanelVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const currentAccentColor = skillCategories[selectedCategory].accent;
  const currentGlowColor = skillCategories[selectedCategory].glow;

  return (
    <section
      id="skills"
      className={`py-24 relative overflow-hidden ${
        isDark ? "bg-black" : "bg-white"
      } transition-colors duration-300`}
    >
      {/* Hacking Rain Background & System Architecture Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* System Architecture Grid/Lines */}
        <div className={`absolute inset-0 ${isDark ? 'bg-grid-cyan-800/[0.05]' : 'bg-grid-blue-200/[0.05]'}`}></div>
        {/* Subtle Diagonal Lines (System Connections) */}
        <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-cyan-900/10 to-transparent animate-pulse-subtle`}></div>
        <div className={`absolute inset-0 bg-gradient-to-tl from-transparent via-teal-900/10 to-transparent animate-pulse-subtle delay-1000`}></div>
        
        {/* Hacking Rain Elements */}
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute font-mono text-xs ${isDark ? 'text-green-400 opacity-20' : 'text-blue-600 opacity-10'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 8 + 8}px`, // 8-16px
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: '100vh', opacity: [0, 0.5, 0] }}
            transition={{
              duration: Math.random() * 15 + 10, // 10-25s fall
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10, // Stagger starting times
            }}
          >
            {/* Random Binary/Hex String */}
            {Array.from({ length: Math.floor(Math.random() * 10 + 5) }).map(() =>
              Math.random() > 0.5 ? '1' : '0' // Or use Math.random().toString(16)[2] for hex
            ).join('')}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              Skills & Expertise
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDark ? 'bg-cyan-400' : 'bg-blue-600'
            }`}></div>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
            {/* Left Column: Skill Category Tabs (Architecture Nodes) */}
            <div className="md:col-span-2 flex md:flex-col gap-4 overflow-x-auto pb-4 md:pb-0 md:pr-4">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={category.title}
                  onClick={() => setSelectedCategory(index)}
                  className={`flex items-center gap-3 p-4 rounded-lg text-left font-semibold flex-shrink-0 md:flex-shrink w-full transition-all duration-300 transform relative overflow-hidden group ${
                    selectedCategory === index
                      ? (isDark ? `bg-cyan-800/60 ${category.accent} ring-2 ring-current shadow-[0_0_20px_var(--tw-shadow-color)] ${category.glow}` : `bg-blue-100 ${category.accent} ring-2 ring-current`)
                      : (isDark ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/60 hover:text-cyan-400' : 'bg-gray-100 text-gray-500 hover:bg-gray-200')
                  }`}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {/* Active/Hover Glow Border */}
                  {selectedCategory === index && (
                    <motion.div
                      layoutId="active-skill-tab" // Unique ID for shared layout animation
                      className={`absolute inset-0 rounded-lg -z-10 ${isDark ? `bg-gradient-to-r from-cyan-500/30 to-teal-500/30 blur-sm` : `bg-gradient-to-r from-blue-500/30 to-sky-500/30 blur-sm`}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white relative z-10 ${category.color} ${selectedCategory === index ? 'shadow-lg' : ''}`}
                    initial={{ rotate: 0 }}
                    animate={selectedCategory === index ? { scale: 1.1, rotate: 360, transition: { duration: 10, repeat: Infinity, ease: "linear" } } : { scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {category.icon}
                    {/* Glowing ring for active icon */}
                    {selectedCategory === index && (
                       <motion.span
                         className={`absolute inset-0 rounded-full ring-2 ${isDark ? 'ring-cyan-300' : 'ring-blue-500'} opacity-75 animate-ping-once`}
                         initial={{ scale: 0.5, opacity: 0 }}
                         animate={{ scale: 1.5, opacity: 0 }}
                         transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                       />
                    )}
                  </motion.div>
                  <span className={`whitespace-nowrap relative z-10 ${selectedCategory === index ? (isDark ? 'text-white' : 'text-gray-900') : ''}`}>{category.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Right Column: Animated Skill Detail Panel */}
            <div className={`md:col-span-3 relative rounded-2xl p-8 min-h-[300px] ${
              isDark ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20' : 'bg-white/60 backdrop-blur-sm border border-gray-200/30'
            } ${isDark ? `shadow-lg shadow-black/30 ring-1 ring-inset ring-${currentAccentColor.replace('text-', '')}/20` : ''}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory} // Key changes to trigger animation
                  variants={detailPanelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="h-full flex flex-col" // Ensure content fills height
                >
                  <h3 className={`text-3xl font-bold mb-3 ${currentAccentColor}`}>
                    {skillCategories[selectedCategory].title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {skillCategories[selectedCategory].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-auto"> {/* mt-auto pushes skills to bottom */}
                    {skillCategories[selectedCategory].skills.map((skill) => (
                      <span key={skill} className={`px-4 py-2 rounded-full text-sm border font-medium transition-all duration-200 hover:scale-105 ${
                        isDark 
                          ? `bg-cyan-600/20 ${currentAccentColor} border-current/30 hover:bg-cyan-600/30` 
                          : 'bg-blue-100 text-blue-600 border-blue-500/30 hover:bg-blue-200'
                      }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Specializations - Dynamic Command Line Panel */}
          <motion.div
            className={`mt-12 rounded-2xl p-6 ${
              isDark ? 'bg-gray-900/70 backdrop-blur-sm border border-cyan-600/30 shadow-lg shadow-cyan-900/20' : 'bg-gray-100/70 backdrop-blur-sm border border-blue-300/30 shadow-lg shadow-blue-200/20'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className={`text-xl font-bold mb-4 text-center ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>
              <Terminal size={20} className="inline-block mr-2" /> Current Focus & Specializations
            </h3>
            <div className={`font-mono text-sm p-4 rounded-lg overflow-hidden relative ${isDark ? 'bg-black/80 text-green-400' : 'bg-gray-800 text-lime-300'}`}>
              <span className="text-cyan-500 mr-2">{'>'}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSpecialization}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="inline-block"
                >
                  {specializations[currentSpecialization]}
                </motion.span>
              </AnimatePresence>
              <span className="animate-pulse ml-1">_</span> {/* Blinking cursor */}
            </div>
          </motion.div>

        </div>
      </div>
      {/* Global CSS for custom animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Hacking Rain Animation */
        @keyframes fall {
          0% { transform: translateY(-100%) translateX(0); opacity: 0; }
          20% { opacity: 0.5; }
          100% { transform: translateY(100vh) translateX(0); opacity: 0; }
        }

        /* Subtle Background Pulse for System Architecture */
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 10s infinite ease-in-out;
        }

        /* Grid Background Pattern for Architecture */
        .bg-grid-cyan-800\/[0\.05] {
          background-image: linear-gradient(0deg, transparent 90%, rgba(6,182,212,0.05) 90%), linear-gradient(90deg, transparent 90%, rgba(6,182,212,0.05) 90%);
          background-size: 20px 20px; /* Adjust grid density */
        }
        .bg-grid-blue-200\/[0\.05] {
          background-image: linear-gradient(0deg, transparent 90%, rgba(37,99,235,0.05) 90%), linear-gradient(90deg, transparent 90%, rgba(37,99,235,0.05) 90%);
          background-size: 20px 20px;
        }

        /* Custom Ping Animation (faster, single pulse) */
        @keyframes ping-once {
          0% { transform: scale(0.5); opacity: 0.75; }
          75% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-once {
          animation: ping-once 1.5s cubic-bezier(0, 0, 0.2, 1) forwards;
        }
      `,
        }}
      />
    </section>
  );
};

export default Skills;
import React from "react";
import { Code, Database, Brain, BarChart, Mic } from "lucide-react";
import { motion } from "framer-motion"; // Added motion import
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Python", "SQL", "JavaScript"],
      color: "from-cyan-500 to-teal-500", // Consistent Cyan/Teal Gradient
    },
    {
      title: "Web Frameworks & Tools",
      icon: <Database size={24} />,
      skills: ["Flask", "Django", "FastAPI", "React", "Node.js"],
      color: "from-teal-500 to-cyan-500", // Consistent Teal/Cyan Gradient
    },
    {
      title: "Machine Learning",
      icon: <Brain size={24} />,
      skills: ["TensorFlow", "Scikit-learn", "LSTM"],
      color: "from-blue-600 to-cyan-600", // Consistent Blue/Cyan Gradient
    },
    {
      title: "Data Analysis",
      icon: <BarChart size={24} />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
      color: "from-cyan-600 to-blue-600", // Consistent Cyan/Blue Gradient
    },
    {
      title: "Audio Processing",
      icon: <Mic size={24} />,
      skills: ["Audio-to-Text", "Speech Recognition"],
      color: "from-teal-600 to-cyan-600", // Consistent Teal/Cyan Gradient
    },
  ];

  const specializations = [
    "Natural Language Processing (NLP)",
    "Time Series Analysis",
    "Data Visualization",
    "RESTful APIs",
    "Keycloak (Identity & Access Management)",
    "Docker (Containerization)",
  ];

  return (
    <section
      id="skills"
      className={`py-24 ${
        isDark ? "bg-black" : "bg-white" // Black Background
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-cyan-400' : 'text-blue-600' // Cyan Accent
            }`}>
              Skills & Expertise
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDark ? 'bg-cyan-400' : 'bg-blue-600'
            }`}></div>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Technical Skills - Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {skillCategories.map((category, index) => (
                <motion.div 
                  key={index} 
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  // Glassmorphism Card Style & Glow
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(6,182,212,0.4)' }}
                >
                  <div className={`relative rounded-2xl p-6 h-full ${
                    isDark ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 hover:shadow-cyan-400/30' : 'bg-white/60 backdrop-blur-sm border border-gray-200/30 hover:shadow-blue-200/20'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white shadow-md`}
                      >
                        {category.icon}
                      </div>
                      <h3
                        className={`text-xl font-bold ${
                          isDark ? "text-cyan-300" : "text-gray-900" // Cyan Accent
                        }`}
                      >
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm border transition-all duration-200 hover:scale-105 ${
                            isDark
                              ? "bg-cyan-600/20 text-cyan-300 border-cyan-400/30 hover:bg-cyan-600/30" // Cyan Tags
                              : "bg-blue-100 text-blue-600 border-blue-500/30 hover:bg-blue-200"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Specializations - Data Stream Panel */}
            <div className={`rounded-2xl p-8 transition-all duration-300 ${
              isDark ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 hover:shadow-cyan-400/30 scan-border' : 'bg-white/60 backdrop-blur-sm border border-gray-200/30 hover:shadow-blue-200/20'
            }`}>
              <h3
                className={`text-2xl font-bold mb-6 text-center ${
                  isDark ? "text-cyan-400" : "text-blue-600" // Cyan Accent
                }`}
              >
                Areas of Specialization
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-[1.03] ${
                      isDark
                        ? "bg-gray-700/30 hover:bg-gray-700/50 border border-transparent hover:border-cyan-500/30" // Subtle hover border
                        : "bg-white/60 hover:bg-white/80 border border-transparent hover:border-blue-500/30"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.08, duration: 0.3 }}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isDark ? "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" : "bg-blue-500" // Cyan Glow Dot
                      }`}
                    ></div>
                    <span
                      className={isDark ? "text-gray-300 font-mono" : "text-gray-600"}
                    >
                      {spec}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
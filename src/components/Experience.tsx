import React, { useState } from "react";
import { Calendar, MapPin, Briefcase, ChevronDown, Code, PenTool, Brain, GitBranch } from "lucide-react"; // Updated icons
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

const Experience = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null); // State to track expanded experience

  // *** CORRECTED EXPERIENCE DATA BASED ON YOUR PROVIDED RESUME ***
  const experiences = [
    {
      title: "Trainee Software Developer",
      company: "Shyena Solutions Pvt. Ltd",
      period: "May 2025 - Present",
      location: "Bengaluru, India",
      icon: <Code size={28} className="text-white" />, // Representing software development
      description: "Actively involved in developing and maintaining robust full-stack applications, utilizing a diverse tech stack to deliver scalable and user-centric solutions for various clients.",
      achievements: [
        "Developed and maintained multiple full-stack applications using Django, Flutter, and Jitsi Meet.",
        "Built a secure, real-time video conferencing web application, integrating Jitsi Meet with a Django backend for comprehensive session management, authentication, and scalability.",
        "Created a cross-platform video conferencing mobile application using Flutter and WebRTC APIs, ensuring seamless communication across diverse devices.",
        "Contributed to the development of the MPPCB Mobile App, specifically tailored for the Madhya Pradesh Pollution Control Board.",
        "Implemented advanced user profiling and robust role-based access management features for enterprise clients, enhancing security and customization.",
        "Managed Dockerized deployments, configured SSL, and optimized Nginx setup for production environments.",
        "Tech Stack: Django, Flutter, Jitsi Meet API, Docker, PostgreSQL, Redis, Nginx.",
      ],
      color: "from-cyan-500 to-teal-500",
      accent: "text-cyan-400",
      lightAccent: "bg-cyan-500/10",
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Laptop Service Center Management System", // Project name as company for freelance
      period: "Aug 2025 - Present",
      location: "Remote",
      icon: <PenTool size={28} className="text-white" />, // Representing freelance/design/creation
      description: "Spearheading the design and development of a comprehensive full-stack platform aimed at streamlining laptop service request management and customer support.",
      achievements: [
        "Designing a full-stack platform for managing laptop service requests, encompassing customer registration, authentication, and an AI-powered chatbot for enhanced support.",
        "Implementing secure authentication and authorization mechanisms using JWT (JSON Web Tokens) for robust user security.",
        "Utilizing Django REST Framework for building scalable and efficient backend APIs.",
        "Developing a responsive and interactive frontend with React to provide a seamless user experience.",
        "Planning for cloud deployment on AWS, ensuring high availability and scalability of the system.",
        "Leveraging Docker for containerization to facilitate consistent development and deployment environments.",
        "Tech Stack: Django REST Framework, React, PostgreSQL, AWS, JWT, Docker.",
      ],
      color: "from-purple-500 to-pink-500", // A different color for distinction
      accent: "text-purple-400",
      lightAccent: "bg-purple-500/10",
    },
    {
      title: "Data Science Intern",
      company: "Nullclass",
      period: "June 2024 - July 2024",
      location: "Remote",
      icon: <Brain size={28} className="text-white" />, // Representing data science/ML
      description: "Focused on developing advanced machine learning models and sophisticated audio processing pipelines, contributing to innovative solutions in natural language and speech technologies.",
      achievements: [
        "Developed a multilingual translation model using an LSTM-based Neural Machine Translation (NMT) architecture for accurate language conversion.",
        "Implemented a real-time audio-to-text translation pipeline, significantly improving preprocessing techniques and achieving higher model evaluation accuracy.",
        "Leveraged Python, TensorFlow, LSTM, Pandas, and NLTK to build and optimize data science solutions.",
        "Gained practical experience in model training, evaluation, and deployment within a data science context.",
      ],
      color: "from-teal-500 to-cyan-500",
      accent: "text-teal-400",
      lightAccent: "bg-teal-500/10",
    },
  ];

  // Animation variants for the unfolding details
  const contentVariants = {
    collapsed: { height: 0, opacity: 0, overflow: 'hidden' },
    expanded: { height: "auto", opacity: 1, overflow: 'visible', transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const handleToggle = (index: number) => {
    setSelectedExperience(selectedExperience === index ? null : index);
  };

  return (
    <section
      id="experience"
      className={`py-24 relative overflow-hidden ${
        isDark ? "bg-black" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      {/* Data Stream Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Particle Stream */}
        {Array.from({ length: 70 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isDark ? 'bg-cyan-400' : 'bg-blue-400'} opacity-10`}
            style={{
              width: `${Math.random() * 3 + 1}px`, // 1-4px
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ['0vh', '100vh'], // Move top to bottom
              x: [0, Math.random() * 20 - 10], // Slight horizontal drift
              opacity: [0, 0.2, 0], // Fade in/out
              scale: [0.8, 1.2, 0.8], // Subtle pulse
            }}
            transition={{
              duration: Math.random() * 15 + 10, // 10-25s animation
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
        {/* Subtle Diagonal Lines (Energy Flow) */}
        <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-cyan-900/10 to-transparent animate-pulse-subtle`}></div>
        <div className={`absolute inset-0 bg-gradient-to-tl from-transparent via-teal-900/10 to-transparent animate-pulse-subtle delay-1000`}></div>
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
              Professional Journey
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDark ? 'bg-cyan-400' : 'bg-blue-600'
            }`}></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-dashed border-gray-400/50 dark:border-cyan-600/50 pl-8 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  {/* Timeline Dot/Icon */}
                  <motion.div
                    className={`absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      selectedExperience === index
                        ? `bg-gradient-to-r ${exp.color} ring-4 ring-current/20 shadow-lg`
                        : (isDark ? 'bg-gray-700 ring-2 ring-gray-600' : 'bg-gray-200 ring-2 ring-gray-300')
                    } ${selectedExperience === index ? exp.accent : ''}`} // Apply accent for ring color
                    whileHover={{ scale: 1.2 }}
                  >
                    {exp.icon || <Briefcase size={16} className="text-white" />}
                  </motion.div>

                  {/* Experience Card */}
                  <motion.div
                    className={`relative rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20' 
                        : 'bg-white/70 backdrop-blur-sm border border-gray-200/30'
                    } ${
                      selectedExperience === index 
                        ? `shadow-lg ${isDark ? `shadow-${exp.accent.replace('text-', '')}/40` : 'shadow-blue-200/20'} ring-1 ring-inset ring-current/20 ${exp.lightAccent}`
                        : (isDark ? 'hover:shadow-cyan-400/30' : 'hover:shadow-blue-200/20')
                    }`}
                    onClick={() => handleToggle(index)}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h3 className={`text-2xl font-bold mb-1 ${selectedExperience === index ? exp.accent : (isDark ? 'text-cyan-300' : 'text-gray-900')}`}>{exp.title}</h3>
                        <p className={`text-xl font-semibold ${selectedExperience === index ? exp.accent : (isDark ? 'text-cyan-300/90' : 'text-blue-600')}`}>{exp.company}</p>
                      </div>
                      <div
                        className={`flex flex-col sm:text-right mt-2 sm:mt-0 ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <div className="flex items-center justify-end gap-2 mb-1">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {exp.description}
                    </p>

                    <AnimatePresence>
                      {selectedExperience === index && (
                        <motion.div
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          variants={contentVariants}
                          className="pt-4 border-t border-dashed border-gray-300/50 dark:border-cyan-700/50"
                        >
                          <h4 className={`text-lg font-semibold mb-3 ${selectedExperience === index ? exp.accent : (isDark ? 'text-cyan-400' : 'text-blue-600')}`}>
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${selectedExperience === index ? exp.accent.replace('text-', 'bg-') : (isDark ? 'bg-cyan-300' : 'bg-blue-500')}`}></span>
                                <span
                                  className={
                                    isDark ? "text-gray-300" : "text-gray-600"
                                  }
                                >
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Chevron Indicator */}
                    <motion.div
                      className={`absolute bottom-3 right-3 p-1 rounded-full ${isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'} `}
                      animate={{ rotate: selectedExperience === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} className={isDark ? 'text-cyan-400' : 'text-blue-600'} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Global CSS for custom animations */}
       <style>{`
        /* Subtle Background Pulse for System Architecture (reused) */
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 10s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Experience;



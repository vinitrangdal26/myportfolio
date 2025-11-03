import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

const Experience = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: "Full Stack Trainee",
      company: "Shyena Solutions Pvt. Ltd",
      period: "May 2025 - Current",
      location: "Bengaluru",
      description: "Developed a video conferencing application",
      achievements: [
        "Built a full-stack video conferencing app with secure login and user roles using Keycloak",
        "Integrated WebRTC and socket connections for real-time audio/video communication",
        "Dockerized the entire application for easy deployment and consistent dev environments",
        "Worked with Django templates and backend routing for dynamic views and API integration",
        "Gained hands-on experience in real-time networking, API workflows, and system design",
      ],

      color: "from-cyan-500 to-teal-500", // Consistent Cyan/Teal
    },
    {
      title: "Data Science Intern",
      company: "Nullclass",
      period: "Jun 2024 - Jul 2024",
      location: "Remote",
      description:
        "Developed advanced machine learning solutions and audio processing systems",
      achievements: [
        "Built LSTM-based multilingual translator for English → Hindi/French translation",
        "Designed comprehensive audio-to-text pipeline with advanced error-handling",
        "Implemented time-stamp extraction and synchronization features",
        "Optimized model performance achieving 92% translation accuracy",
      ],
      color: "from-teal-500 to-cyan-500", // Consistent Teal/Cyan
    },
  ];

  return (
    <section
      id="experience"
      className={`py-24 ${
        isDark ? "bg-black" : "bg-gray-50" // Black background
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
              isDark ? 'text-cyan-400' : 'text-blue-600' // Cyan accent
            }`}>
              Experience
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDark ? 'bg-cyan-400' : 'bg-blue-600'
            }`}></div>
          </div>

          <div className="max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative group mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                // Corrected the hover shadow to match the boot-up overlay glow
                whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(6,182,212,0.4)' }}
              >
                {/* Glassmorphism Card Style */}
                <div className={`relative rounded-2xl p-8 ${isDark ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 hover:shadow-cyan-400/30' : 'bg-white/60 backdrop-blur-sm border border-gray-200/30 hover:shadow-blue-200/20'}`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Briefcase size={32} className="text-white" />
                      </motion.div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          {/* Cyan Accent for Title */}
                          <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-cyan-300' : 'text-gray-900'}`}>{exp.title}</h3>
                          <p className={`text-xl font-semibold ${isDark ? 'text-cyan-300/90' : 'text-blue-600'}`}>{exp.company}</p>
                        </div>
                        <div
                          className={`flex flex-col sm:text-right mt-2 sm:mt-0 ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p
                        className={`mb-6 leading-relaxed ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {exp.description}
                      </p>

                      <div>
                        <h4
                          className={`text-lg font-semibold mb-3 ${
                            isDark ? "text-cyan-400" : "text-blue-600" // Cyan Accent
                          }`}
                        >
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              {/* Cyan Dot */}
                              <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${isDark ? 'bg-cyan-300' : 'bg-blue-500'}`}></span>
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
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
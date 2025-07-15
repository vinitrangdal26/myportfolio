import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
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
        "Built LSTM-based multilingual translator for English → Hindi/French translation",
        "Designed comprehensive audio-to-text pipeline with advanced error-handling",
        "Implemented time-stamp extraction and synchronization features",
        "Optimized model performance achieving 92% translation accuracy",
      ],
      color: "from-emerald-200 to-blue-900",
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
      color: "from-emerald-500 to-blue-500",
    },
  ];

  return (
    <section
      id="experience"
      className={`py-24 ${
        isDark ? "bg-gray-800" : "bg-gray-50"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group mb-8">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur opacity-10 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div
                  className={`relative backdrop-blur-sm rounded-2xl p-8 border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isDark
                      ? "bg-gray-700/50 border-gray-600/50"
                      : "bg-white/80 border-gray-200/50"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <Briefcase size={32} className="text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3
                            className={`text-2xl font-bold mb-1 ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {exp.title}
                          </h3>
                          <p
                            className={`text-xl font-semibold ${
                              isDark ? "text-emerald-400" : "text-blue-600"
                            }`}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <div
                          className={`flex flex-col sm:text-right mt-2 sm:mt-0 ${
                            isDark ? "text-gray-300" : "text-gray-600"
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
                            isDark ? "text-emerald-400" : "text-blue-600"
                          }`}
                        >
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span
                                className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                                  isDark ? "bg-emerald-400" : "bg-blue-500"
                                }`}
                              ></span>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

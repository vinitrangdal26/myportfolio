import React from "react";
import { Code, Database, Brain, BarChart, Mic, Eye } from "lucide-react";
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
      color: "from-blue-500 to-emerald-500",
    },
    {
      title: "Web Frameworks",
      icon: <Database size={24} />,
      skills: ["Flask", "Django", "FastAPI", "React", "Node.js"],
      color: "from-emerald-500 to-blue-500",
    },
    {
      title: "Machine Learning",
      icon: <Brain size={24} />,
      skills: ["TensorFlow", "Scikit-learn", "LSTM"],
      color: "from-blue-600 to-emerald-600",
    },
    {
      title: "Data Analysis",
      icon: <BarChart size={24} />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
      color: "from-emerald-600 to-blue-600",
    },
    // {
    //   title: "Computer Vision",
    //   icon: <Eye size={24} />,
    //   skills: ["OpenCV", "Image Processing", "CNN", "Object Detection"],
    //   color: "from-blue-500 to-emerald-600",
    // },
    {
      title: "Audio Processing",
      icon: <Mic size={24} />,
      skills: ["Audio-to-Text", "Speech Recognition"],
      color: "from-emerald-500 to-blue-600",
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
        isDark ? "bg-gray-900" : "bg-white"
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Technical Skills */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {skillCategories.map((category, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-10 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`relative backdrop-blur-sm rounded-2xl p-6 border h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                      isDark
                        ? "bg-gray-800/50 border-gray-700/50"
                        : "bg-gray-50/80 border-gray-200/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white`}
                      >
                        {category.icon}
                      </div>
                      <h3
                        className={`text-xl font-bold ${
                          isDark ? "text-white" : "text-gray-900"
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
                              ? "bg-gray-700/50 text-gray-300 border-gray-600/50 hover:bg-gray-600/50"
                              : "bg-white text-gray-600 border-gray-300/50 hover:bg-gray-100"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Specializations */}
            <div
              className={`backdrop-blur-sm rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 ${
                isDark
                  ? "bg-gray-800/50 border-gray-700/50"
                  : "bg-gray-50/80 border-gray-200/50"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 text-center ${
                  isDark ? "text-emerald-400" : "text-blue-600"
                }`}
              >
                Areas of Specialization
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {specializations.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-105 ${
                      isDark
                        ? "bg-gray-700/30 hover:bg-gray-700/50"
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isDark ? "bg-emerald-400" : "bg-blue-500"
                      }`}
                    ></div>
                    <span
                      className={isDark ? "text-gray-300" : "text-gray-600"}
                    >
                      {spec}
                    </span>
                  </div>
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

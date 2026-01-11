import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';
import Interactive3D from './Interactive3D';

const About = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className={`py-24 ${
        isDark ? "bg-black" : "bg-gray-50" // Black Background
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? "text-cyan-400" : "text-blue-600" // Cyan Accent
            }`}>
              About Me
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDark ? "bg-cyan-400" : "bg-blue-600"
            }`}></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              {/* Glassmorphism Card 1 - Summary */}
              <div className={`group rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                isDark ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 hover:shadow-cyan-400/30' : 'bg-white/60 backdrop-blur-sm border border-gray-200/30 hover:shadow-blue-200/20'
              }`}>
                <p
                  className={`leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  I am a Full-Stack & AI Engineer focused on shipping production-ready software. I specialize in complex backend architectures and real-time systems. Most recently, I architected a regulatory AI chatbot that cut user wait times by 95% and engineered a secure video meeting platform supporting 500+ users. Whether it's optimizing inference pipelines or deploying Dockerized microservices on AWS, I love building tools that make a measurable impact.
                </p>
              </div>

              {/* Glassmorphism Card 2 - Languages */}
              <div className={`group rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                isDark ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 hover:shadow-cyan-400/30' : 'bg-white/60 backdrop-blur-sm border border-gray-200/30 hover:shadow-blue-200/20'
              }`}>
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-cyan-400" : "text-blue-600" // Cyan Accent
                  }`}
                >
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["English", "Hindi", "Kannada", "Marathi", "Telugu"].map(
                    (lang) => (
                      <span
                        key={lang}
                        className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 hover:scale-105 ${
                          isDark
                            ? "bg-cyan-600/20 text-cyan-300 border-cyan-400/30 hover:bg-cyan-600/30" // Cyan Tags
                            : "bg-blue-100 text-blue-600 border-blue-500/30 hover:bg-blue-200"
                        }`}
                      >
                        {lang}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* The new skill orbit animation is placed here */}
                <Interactive3D className="mb-8" /> 
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            {/* Glassmorphism Quote Card */}
            <div className={`rounded-2xl p-8 hover:shadow-xl transition-all duration-300 scan-border ${
              isDark ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 hover:shadow-cyan-400/30' : 'bg-white/60 backdrop-blur-sm border border-gray-200/30 hover:shadow-blue-200/20'
            }`}>
              <p
                className={`text-xl max-w-3xl mx-auto leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                "I believe in the power of artificial intelligence to
                revolutionize how we solve problems. Every line of code I write
                is a step towards creating smarter, more efficient solutions
                that can positively impact the world around us."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
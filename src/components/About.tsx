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
        isDark ? "bg-gray-800" : "bg-gray-50"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div
                className={`group ${
                  isDark ? "bg-gray-700/50" : "bg-white/80"
                } backdrop-blur-sm rounded-2xl p-8 border ${
                  isDark ? "border-gray-600/30" : "border-gray-200/50"
                } hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                {/* <h3
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-emerald-400" : "text-blue-600"
                  }`}
                >
                  Background
                </h3> */}
                <p
                  className={`leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Hey there! I’m a Full Stack Developer Trainee currently
                  working at a software company, where I recently built a
                  complete video conferencing app. I started off deep in the
                  world of AI and Machine Learning—solving real-world problems
                  with smart systems—but now I’m also diving into web
                  development and APIs to build more dynamic, user-focused
                  applications. I love bringing ideas to life through clean
                  code, clever logic, and a touch of curiosity.
                </p>
              </div>

              <div
                className={`group ${
                  isDark ? "bg-gray-700/50" : "bg-white/80"
                } backdrop-blur-sm rounded-2xl p-8 border ${
                  isDark ? "border-gray-600/30" : "border-gray-200/50"
                } hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    isDark ? "text-emerald-400" : "text-blue-600"
                  }`}
                >
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["English", "Hindi", "Kannada", "Marathi", "Telugu"].map(
                    (lang) => (
                      <span
                        key={lang}
                        className={`px-4 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105 ${
                          isDark
                            ? "bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600/30"
                            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
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
                <Interactive3D className="mb-8" />

                {/* <div className={`${
                  isDark ? 'bg-gray-700/50' : 'bg-white/80'
                } backdrop-blur-sm rounded-2xl p-6 border ${
                  isDark ? 'border-gray-600/30' : 'border-gray-200/50'
                } hover:shadow-xl transition-all duration-300`}>
                  <img
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Profile"
                    className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div> */}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div
              className={`${
                isDark ? "bg-gray-700/30" : "bg-white/60"
              } backdrop-blur-sm rounded-2xl p-8 border ${
                isDark ? "border-gray-600/20" : "border-gray-200/30"
              } hover:shadow-xl transition-all duration-300`}
            >
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
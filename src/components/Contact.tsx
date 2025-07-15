import React, { useState } from "react";
import { Mail, Github, Linkedin, Download, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState("Send a Message");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_50k0lma", // e.g., service_xxx
        "template_5mf5454", // e.g., template_yyy
        formData,
        "41yxUHKcX8Qw9co7c" // e.g., 'xzyabc123'
      )
      .then(
        (result) => {
          console.log("✅ Email sent!", result.text);
          setFormData({ name: "", email: "", message: "" });
          setSent("sent");
          // alert("Message sent successfully!");
        },
        (error) => {
          console.error("Email failed:", error.text);
          // alert("Oops! Email sending failed 😓");
          setSent("fail");
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
            <p
              className={`text-xl mt-6 max-w-2xl mx-auto ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Ready to collaborate on innovative AI solutions? Let's connect and
              create something amazing together.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div
                  className={`backdrop-blur-sm rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isDark
                      ? "bg-gray-800/50 border-gray-700/50"
                      : "bg-gray-50/80 border-gray-200/50"
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-6 ${
                      isDark ? "text-emerald-400" : "text-blue-600"
                    }`}
                  >
                    Let's Connect
                  </h3>

                  <div className="space-y-6">
                    {/* Email */}
                    <a
                      href="mailto:vinitrangdal26@gmail.com"
                      className="flex items-center gap-4 hover:scale-[1.02] transition-transform"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Mail size={24} className="text-white" />
                      </div>
                      <div>
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Email
                        </p>
                        <p
                          className={`font-semibold ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          vinitrangdal26@gmail.com
                        </p>
                      </div>
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/vinitrangdal26"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 hover:scale-[1.02] transition-transform"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Github size={24} className="text-white" />
                      </div>
                      <div>
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          GitHub
                        </p>
                        <p
                          className={`font-semibold ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          github.com/vinitrangdal26
                        </p>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/vinit-rangdal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 hover:scale-[1.02] transition-transform"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Linkedin size={24} className="text-white" />
                      </div>
                      <div>
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          LinkedIn
                        </p>
                        <p
                          className={`font-semibold ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          linkedin.com/in/vinitrangdal
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Resume Download */}
                {/* <div
                  className={`backdrop-blur-sm rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isDark
                      ? "bg-gray-800/50 border-gray-700/50"
                      : "bg-gray-50/80 border-gray-200/50"
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-6 ${
                      isDark ? "text-emerald-400" : "text-blue-600"
                    }`}
                  >
                    Download Resume
                  </h3>
                  <p
                    className={`${
                      isDark ? "text-gray-300" : "text-gray-600"
                    } mb-6`}
                  >
                    Get a comprehensive overview of my experience, skills, and
                    achievements.
                  </p>
                  <a
                    href="/resume.pdf" // 🔁 Replace this with the actual resume path
                    download
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <Download size={20} />
                    Download Resume
                  </a>
                </div> */}
              </div>

              {/* Contact Form */}
              <div
                className={`backdrop-blur-sm rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800/50 border-gray-700/50"
                    : "bg-gray-50/80 border-gray-200/50"
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    isDark ? "text-emerald-400" : "text-blue-600"
                  }`}
                >
                  {sent}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 ${
                        isDark
                          ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                      }`}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 ${
                        isDark
                          ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                      }`}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 resize-none ${
                        isDark
                          ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                      }`}
                      placeholder="Enter your message"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`mt-20 pt-8 border-t ${
          isDark ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="container mx-auto px-6 text-center">
          <p className={isDark ? "text-gray-400" : "text-gray-500"}>
            © 2024 Vinit Rangdal. Built with React, TypeScript, and Tailwind
            CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

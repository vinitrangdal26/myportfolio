import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
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

  const [sent, setSent] = useState<"Send a Message" | "sent" | "fail">(
    "Send a Message"
  );

  // Auto-reset status after 3 seconds
  useEffect(() => {
    if (sent === "sent" || sent === "fail") {
      const timer = setTimeout(() => {
        setSent("Send a Message");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // NOTE: Keep your actual service/template/user IDs secure.
    emailjs
      .send(
        "service_50k0lma",
        "template_5mf5454",
        formData,
        "41yxUHKcX8Qw9co7c"
      )
      .then(
        () => {
          console.log("✅ Email sent!");
          setFormData({ name: "", email: "", message: "" });
          setSent("sent");
        },
        (error) => {
          console.error("❌ Email failed:", error.text);
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

  const glassPanelClasses = isDark 
    ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 hover:shadow-cyan-400/30' 
    : 'bg-white/60 backdrop-blur-sm border border-gray-200/30 hover:shadow-blue-200/20';

  const inputClasses = isDark
    ? "bg-gray-800/60 border border-gray-700 text-white placeholder-gray-500 font-mono focus:border-cyan-400 focus:ring-cyan-400/30 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
    : "bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20";


  return (
    <section
      id="contact"
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
              Get In Touch
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDark ? 'bg-cyan-400' : 'bg-blue-600'
            }`}></div>
            <p
              className={`text-xl mt-6 max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Ready to collaborate on innovative AI solutions? Let's connect and
              create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side – Info (Glass Panel) */}
            <div className={`space-y-8 ${glassPanelClasses} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <div>
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    isDark ? "text-cyan-400" : "text-blue-600" // Cyan Accent
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
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
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
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
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
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
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
                        linkedin.com/in/vinit-rangdal
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side – Form (Glass Panel) */}
            <div className={`${glassPanelClasses} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDark ? "text-cyan-400" : "text-blue-600" // Cyan Accent
                }`}
              >
                Send a Message
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
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 ${inputClasses}`}
                    placeholder="$name>"
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
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 ${inputClasses}`}
                    placeholder="$email>"
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
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 resize-none ${inputClasses}`}
                    placeholder="$message>"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-gray-900 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-cyan-400/50" // Cyan/Teal button
                >
                  <Send size={20} />
                  Send Message
                </button>

                {/* ✨ Status Message */}
                {sent === "sent" && (
                  <p className="text-cyan-500 text-sm font-medium mt-2">
                    ✅ Message sent successfully!
                  </p>
                )}
                {sent === "fail" && (
                  <p className="text-red-500 text-sm font-medium mt-2">
                    ❌ Failed to send message. Try again!
                  </p>
                )}
              </form>
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
            © {new Date().getFullYear()}. Built with React, TypeScript, and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
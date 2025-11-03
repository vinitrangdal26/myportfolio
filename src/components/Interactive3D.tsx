import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { 
  FileType, Database, Brain, Code, Terminal, Infinity, Cpu, Server, Layers, 
  Settings, Zap, Shield, GitBranch, Cloud, FileCode, Search, Activity, Target 
} from 'lucide-react';

interface Interactive3DProps {
  className?: string;
}

// 18 Skill Icons with varied colors for visual interest
const skills = [
  { icon: FileType, color: 'text-yellow-400', size: 24, label: 'Python' },
  { icon: Brain, color: 'text-cyan-400', size: 28, label: 'ML/AI' },
  { icon: Database, color: 'text-teal-400', size: 26, label: 'SQL' },
  { icon: Code, color: 'text-gray-300', size: 22, label: 'Dev' },
  { icon: Terminal, color: 'text-green-500', size: 20, label: 'CLI' },
  { icon: Infinity, color: 'text-red-500', size: 24, label: 'DevOps' },
  { icon: Cpu, color: 'text-purple-400', size: 26, label: 'CPU' },
  { icon: Server, color: 'text-blue-500', size: 22, label: 'Server' },
  { icon: Layers, color: 'text-pink-400', size: 24, label: 'Stack' },
  { icon: Settings, color: 'text-gray-400', size: 28, label: 'Config' },
  { icon: Zap, color: 'text-orange-400', size: 20, label: 'FastAPI' },
  { icon: Shield, color: 'text-indigo-400', size: 26, label: 'Security' },
  { icon: GitBranch, color: 'text-yellow-600', size: 22, label: 'Git' },
  { icon: Cloud, color: 'text-sky-300', size: 28, label: 'Cloud' },
  { icon: FileCode, color: 'text-lime-500', size: 20, label: 'Codebase' },
  { icon: Search, color: 'text-cyan-600', size: 24, label: 'Search' },
  { icon: Activity, color: 'text-rose-500', size: 22, label: 'Data' },
  { icon: Target, color: 'text-amber-500', size: 26, label: 'Target' },
];

const Interactive3D: React.FC<Interactive3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDark } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate position relative to the center of the container
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        // Sensitivity control (Reduced from 20 to 12 for smoother parallax)
        setMousePosition({ x: x * 12, y: y * 12 }); 
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const baseSpeed = 25; // Base duration for a full orbit in seconds
  const orbitRadius = 100; // Radius for the main orbit path (in pixels)

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative w-64 h-64 mx-auto perspective-1000">
        
        {/* Main 3D Container (Rotates based on mouse) */}
        <div
          className={`absolute inset-0 transform-gpu transition-transform duration-300 ease-out`}
          style={{
            // Tilt the entire system based on mouse position (Parallax effect)
            transform: `rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(0px)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Central Core - The Tech Earth */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full ${
            isDark ? 'bg-gray-800/70 border border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.8)]' : 'bg-gray-200/70 border shadow-md'
          } flex items-center justify-center backdrop-blur-sm z-10`}>
            <span className="text-cyan-400 text-3xl font-extrabold font-mono tracking-widest">VR</span>
          </div>

          {/* Orbiting Skill Icons (The Skill Galaxy) */}
          {skills.map((skill, i) => {
            const index = i + 1;
            const orbitDuration = baseSpeed + (index % 3); // Vary speed slightly
            const reverseOrbit = index % 4 === 0; // Reverse direction for some
            const angle = (index / skills.length) * 360; // Base angle separation

            // Z-axis positioning for 3D sphere look: cycles from -50 to +50
            const zPosition = Math.sin((index / skills.length) * Math.PI * 2 + Math.PI / 2) * 60; 
            
            const IconComponent = skill.icon;
            
            return (
              <motion.div
                key={i}
                className="absolute w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 cursor-pointer"
                title={skill.label} // Tooltip
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.3, zIndex: 20 }}
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: '-20px',
                  marginTop: '-20px',
                  // The combination of rotations and translation creates the orbit path
                  transform: `
                    rotate(${angle}deg) 
                    translate(${orbitRadius}px) 
                    rotate(${-angle}deg) 
                    translateZ(${zPosition}px)
                  `,
                  // Complex orbit animation using CSS keyframes
                  animation: `orbit${reverseOrbit ? 'CCW' : 'CW'} ${orbitDuration}s linear infinite`,
                  animationDelay: `${i * 0.8}s`
                }}
              >
                <div className={`w-10 h-10 rounded-full ${isDark ? 'bg-gray-700 border-2 border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'bg-white border-2'} flex items-center justify-center transition-colors duration-300`}>
                  <IconComponent size={skill.size} className={skill.color} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* CSS Keyframes for Orbit */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes orbitCW {
          0% { transform: rotate(0deg) translate(${orbitRadius}px) rotate(0deg) translateZ(0px); }
          100% { transform: rotate(360deg) translate(${orbitRadius}px) rotate(-360deg) translateZ(0px); }
        }
        @keyframes orbitCCW {
          0% { transform: rotate(0deg) translate(${orbitRadius}px) rotate(0deg) translateZ(0px); }
          100% { transform: rotate(-360deg) translate(${orbitRadius}px) rotate(360deg) translateZ(0px); }
        }
        /* Note: The 'translateZ' is dynamically calculated in React for the sphere effect, 
           and the base orbit animation uses Z=0 here for simplicity in keyframes. 
           The complex 'rotate(angle) translate(radius) rotate(-angle)' ensures the icon faces forward.
           The Z-axis variation applied inline provides the spherical distortion. */
      `}</style>
    </div>
  );
};

export default Interactive3D;
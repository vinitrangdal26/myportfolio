import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Interactive3DProps {
  className?: string;
}

const Interactive3D: React.FC<Interactive3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDark } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x: x * 20, y: y * 20 });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative w-64 h-64 mx-auto perspective-1000">
        {/* Main 3D Object */}
        <div
          className={`absolute inset-0 transform-gpu transition-transform duration-300 ease-out preserve-3d ${
            isDark ? 'bg-gradient-to-br from-blue-500/20 to-emerald-500/20' : 'bg-gradient-to-br from-emerald-500/20 to-blue-500/20'
          } rounded-2xl backdrop-blur-sm border ${
            isDark ? 'border-blue-500/30' : 'border-emerald-500/30'
          }`}
          style={{
            transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(20px)`
          }}
        >
          {/* Inner elements */}
          <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm">
            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-blue-400 animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className={`w-16 h-16 rounded-xl ${
                isDark ? 'bg-gradient-to-br from-blue-500 to-emerald-500' : 'bg-gradient-to-br from-emerald-500 to-blue-500'
              } shadow-lg transform rotate-45 animate-spin-slow`}></div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDark ? 'bg-blue-400' : 'bg-emerald-400'
            } animate-float`}
            style={{
              left: `${20 + (i * 40)}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translateZ(${30 + i * 10}px)`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Interactive3D;
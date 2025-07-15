import React, { useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThreeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D-like floating objects
    const objects: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      type: 'cube' | 'sphere' | 'triangle';
    }> = [];

    // Initialize objects
    for (let i = 0; i < 15; i++) {
      objects.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 100 + 50,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 30 + 10,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: ['cube', 'sphere', 'triangle'][Math.floor(Math.random() * 3)] as 'cube' | 'sphere' | 'triangle'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      objects.forEach(obj => {
        // Update position
        obj.x += obj.vx;
        obj.y += obj.vy;
        obj.z += obj.vz;
        obj.rotation += obj.rotationSpeed;

        // Boundary checks
        if (obj.x < -50 || obj.x > canvas.width + 50) obj.vx *= -1;
        if (obj.y < -50 || obj.y > canvas.height + 50) obj.vy *= -1;
        if (obj.z < 20 || obj.z > 150) obj.vz *= -1;

        // 3D perspective
        const scale = 100 / obj.z;
        const size = obj.size * scale;
        const opacity = Math.max(0.1, Math.min(0.3, (150 - obj.z) / 100));

        ctx.save();
        ctx.translate(obj.x, obj.y);
        ctx.rotate(obj.rotation);
        ctx.globalAlpha = opacity;

        // Color based on theme
        const baseColor = isDark ? '59, 130, 246' : '16, 185, 129'; // blue-500 or emerald-500
        ctx.fillStyle = `rgba(${baseColor}, ${opacity})`;
        ctx.strokeStyle = `rgba(${baseColor}, ${opacity * 2})`;
        ctx.lineWidth = 2;

        // Draw different shapes
        switch (obj.type) {
          case 'cube':
            ctx.fillRect(-size/2, -size/2, size, size);
            ctx.strokeRect(-size/2, -size/2, size, size);
            break;
          case 'sphere':
            ctx.beginPath();
            ctx.arc(0, 0, size/2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -size/2);
            ctx.lineTo(-size/2, size/2);
            ctx.lineTo(size/2, size/2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
        }

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ThreeBackground;
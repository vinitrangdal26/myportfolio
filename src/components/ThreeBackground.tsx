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

    // Track mouse for parallax effect
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX - window.innerWidth / 2;
      mouseY = e.clientY - window.innerHeight / 2;
    });

    const objects: Array<any> = [];

    for (let i = 0; i < 25; i++) {
      objects.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 100 + 50,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 30 + 15,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: ['cube', 'sphere', 'triangle', 'hex'][Math.floor(Math.random() * 4)]
      });
    }

    const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    bgGradient.addColorStop(0, isDark ? '#0f172a' : '#ecfdf5');
    bgGradient.addColorStop(1, isDark ? '#1e293b' : '#f0fdfa');

    const getScrollFactor = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
      return Math.min(1, Math.max(0, window.scrollY / maxScroll));
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const t = getScrollFactor();
      // Color transitions between cyber teal and violet as you scroll
      const from = isDark ? [59, 130, 246] : [16, 185, 129];
      const to = [138, 125, 255];
      const r = Math.round(lerp(from[0], to[0], t));
      const g = Math.round(lerp(from[1], to[1], t));
      const b = Math.round(lerp(from[2], to[2], t));
      const rgb = `${r}, ${g}, ${b}`;

      objects.forEach(obj => {
        obj.x += obj.vx;
        obj.y += obj.vy;
        obj.z += obj.vz;
        obj.rotation += obj.rotationSpeed;

        if (obj.x < -100 || obj.x > canvas.width + 100) obj.vx *= -1;
        if (obj.y < -100 || obj.y > canvas.height + 100) obj.vy *= -1;
        if (obj.z < 30 || obj.z > 200) obj.vz *= -1;

        const scale = 100 / obj.z;
        const size = obj.size * scale;
        const opacity = Math.max(0.12, Math.min(0.45, (200 - obj.z) / 200));

        ctx.save();
        // Slightly increase parallax with scroll
        const parallax = 0.05 + t * 0.05;
        ctx.translate(obj.x + mouseX * scale * parallax, obj.y + mouseY * scale * parallax);
        ctx.rotate(obj.rotation);
        ctx.globalAlpha = opacity;

        // Glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = `rgba(${rgb}, 0.8)`;

        ctx.fillStyle = `rgba(${rgb}, ${opacity})`;
        ctx.strokeStyle = `rgba(${rgb}, ${opacity * 2})`;
        ctx.lineWidth = 2;

        switch (obj.type) {
          case 'cube':
            ctx.fillRect(-size / 2, -size / 2, size, size);
            break;
          case 'sphere':
            ctx.beginPath();
            ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -size / 2);
            ctx.lineTo(-size / 2, size / 2);
            ctx.lineTo(size / 2, size / 2);
            ctx.closePath();
            ctx.fill();
            break;
          case 'hex':
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i;
              ctx.lineTo(Math.cos(angle) * size / 2, Math.sin(angle) * size / 2);
            }
            ctx.closePath();
            ctx.fill();
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

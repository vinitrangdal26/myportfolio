import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootUpOverlayProps {
  onComplete: () => void;
  durationMs?: number;
}

const bootLines = [
  'Initializing Portfolio Matrix…',
  'Loading Skillset Core…',
  'Accessing Project Database…',
  'Mounting Experience Modules…',
  'Calibrating Visual Systems…',
];

const BootUpOverlay: React.FC<BootUpOverlayProps> = ({ onComplete, durationMs = 3200 }) => {
  useEffect(() => {
    const t = setTimeout(onComplete, durationMs);
    return () => clearTimeout(t);
  }, [onComplete, durationMs]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Grid/faint noise backdrop */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,209,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,209,0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />

        <div className="relative glass-panel rounded-2xl p-8 md:p-10 w-[92%] max-w-2xl scan-border">
          {/* Logo / Initials with glitch */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold tracking-widest"
                style={{ fontFamily: 'Space Mono, ui-monospace, monospace' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                VR
              </motion.h1>
              <motion.span
                className="absolute inset-0 text-5xl md:text-6xl font-extrabold text-cyan-300"
                style={{ clipPath: 'inset(0 0 50% 0)' }}
                initial={{ x: -2, opacity: 0 }}
                animate={{ x: [2, -2, 0], opacity: [0, 0.6, 0] }}
                transition={{ duration: 0.8, repeat: 1, repeatType: 'reverse' }}
              >
                VR
              </motion.span>
            </div>
          </div>

          {/* Loading lines */}
          <div className="space-y-2 font-mono text-sm md:text-base text-gray-300">
            {bootLines.map((line, idx) => (
              <motion.div
                key={line}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.25, duration: 0.35 }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(0,255,209,0.9)]" />
                <span>{line}</span>
                <motion.span
                  className="ml-auto text-cyan-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0, 1] }}
                  transition={{ delay: 0.5 + idx * 0.25, duration: 0.8 }}
                >
                  ▓▓▓▓▓
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Headline reveal text */}
          <motion.p
            className="mt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Decrypting interface… stand by
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BootUpOverlay;



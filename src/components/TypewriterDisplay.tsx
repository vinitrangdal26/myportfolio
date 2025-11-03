// TypewriterDisplay.tsx

import React, { useState, useEffect } from 'react';

interface TypewriterDisplayProps {
  texts: string[];
  isDark: boolean;
  initialDelayMs: number; // Delay before the whole effect starts
}

const TypewriterDisplay: React.FC<TypewriterDisplayProps> = ({ texts, isDark, initialDelayMs }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [isInitialRun, setIsInitialRun] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Wait for the initial delay before starting the whole animation
    if (initialDelayMs > 0) {
      timer = setTimeout(() => {
        setIsInitialRun(false); // Start the animation
      }, initialDelayMs);
      return () => clearTimeout(timer);
    }
  }, [initialDelayMs]);

  useEffect(() => {
    if (isInitialRun) return; // Wait for initial delay to pass

    let timer: NodeJS.Timeout;

    const fullText = texts[textIndex % texts.length];
    
    // Typing logic
    if (!isDeleting && displayText !== fullText) {
      setSpeed(isInitialRun ? 50 : 150); // Faster initial typing
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, speed);
    } 
    // Reached end of text, start deleting after a pause
    else if (!isDeleting && displayText === fullText) {
      setSpeed(isInitialRun ? 2000 : 1000); // Pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, speed);
    } 
    // Deleting logic
    else if (isDeleting && displayText !== '') {
      setSpeed(isInitialRun ? 50 : 75); // Deletion speed
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, speed);
    } 
    // Finished deleting, move to next text
    else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex(prev => prev + 1);
      setSpeed(500); // Short pause before next word starts typing
      timer = setTimeout(() => {
        // continue to next word
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts, isInitialRun]);

  return (
    <div className={`text-xl md:text-2xl mb-8 h-16 flex items-center justify-center ${
      isDark ? 'text-gray-300' : 'text-gray-600'
    }`}>
      <span className="inline-block min-w-[300px] text-left">
        {displayText}
        <span className={`inline-block ${isDeleting || displayText === texts[textIndex % texts.length] ? 'animate-pulse' : ''}`}>
          |
        </span>
      </span>
    </div>
  );
};

export default TypewriterDisplay;
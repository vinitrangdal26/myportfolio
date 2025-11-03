import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseenter', enter);
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseenter', enter);
      window.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div
      className="cursor-dot"
      style={{ left: pos.x, top: pos.y, opacity: visible ? 1 : 0 }}
      aria-hidden
    />
  );
};

export default CustomCursor;



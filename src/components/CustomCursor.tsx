import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);
  const [hoveredBorderRadius, setHoveredBorderRadius] = useState('50%');

  // Use springs for smooth following
  const cursorX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorWidth = useSpring(16, { stiffness: 300, damping: 20 });
  const cursorHeight = useSpring(16, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('a') || target.closest('button') || target.closest('[role="button"]');
      
      if (clickable) {
        const rect = clickable.getBoundingClientRect();
        setHoveredRect(rect);
        const style = window.getComputedStyle(clickable);
        setHoveredBorderRadius(style.borderRadius !== '0px' ? style.borderRadius : '12px');
      } else {
        setHoveredRect(null);
        setHoveredBorderRadius('50%');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    if (hoveredRect) {
      cursorX.set(hoveredRect.left + hoveredRect.width / 2);
      cursorY.set(hoveredRect.top + hoveredRect.height / 2);
      cursorWidth.set(hoveredRect.width + 16);
      cursorHeight.set(hoveredRect.height + 16);
    } else {
      cursorX.set(mousePosition.x);
      cursorY.set(mousePosition.y);
      cursorWidth.set(16);
      cursorHeight.set(16);
    }
  }, [mousePosition, hoveredRect, cursorX, cursorY, cursorWidth, cursorHeight]);

  return (
    <motion.div
      className="fixed top-0 left-0 bg-primary pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
        width: cursorWidth,
        height: cursorHeight,
        borderRadius: hoveredBorderRadius,
        mixBlendMode: 'difference',
      }}
      animate={{
        opacity: hoveredRect ? 0.3 : 1,
      }}
      transition={{ duration: 0.2 }}
    />
  );
};

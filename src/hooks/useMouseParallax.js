import { useState, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export const useMouseParallax = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch || prefersReducedMotion) return;

    let animationFrameId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;
        const normalizedX = (x / window.innerWidth - 0.5) * 2; // -1 to 1
        const normalizedY = (y / window.innerHeight - 0.5) * 2; // -1 to 1

        setMousePos({ x, y, normalizedX, normalizedY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return mousePos;
};

import React from 'react';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const MouseGlow = () => {
  const { x, y } = useMouseParallax();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion || (x === 0 && y === 0)) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '500px',
        height: '500px',
        transform: `translate3d(${x - 250}px, ${y - 250}px, 0)`,
        willChange: 'transform',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(124, 45, 18, 0.04) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }}
      aria-hidden="true"
    />
  );
};

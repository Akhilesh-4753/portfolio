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
        left: `${x}px`,
        top: `${y}px`,
        width: '500px',
        height: '500px',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(139, 92, 246, 0.04) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'transform 0.08s ease-out'
      }}
      aria-hidden="true"
    />
  );
};

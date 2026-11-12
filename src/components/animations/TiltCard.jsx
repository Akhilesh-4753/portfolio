import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const TiltCard = ({
  children,
  className = '',
  maxTilt = 8,
  glare = false,
  style = {},
  onClick
}) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const rafRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;

      if (glare && glareRef.current) {
        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;
        glareRef.current.style.opacity = '0.15';
        glareRef.current.style.background = `radial-gradient(circle at ${px.toFixed(1)}% ${py.toFixed(1)}%, rgba(255,255,255,0.2) 0%, transparent 60%)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`glass-panel ${className}`}
      style={{
        transition: 'transform 0.18s cubic-bezier(0.2, 0, 0.2, 1), box-shadow 0.25s ease, border-color 0.25s ease',
        transformStyle: 'preserve-3d',
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
    >
      {glare && (
        <div
          ref={glareRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)'
          }}
        />
      )}
      {children}
    </div>
  );
};

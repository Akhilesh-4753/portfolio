import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const MagneticButton = ({ children, className = '', style = {}, onClick, pullFactor = 0.25 }) => {
  const btnRef = useRef(null);
  const rafRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !btnRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const btn = btnRef.current;
      if (!btn) return;
      const { left, top, width, height } = btn.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = (clientX - centerX) * pullFactor;
      const deltaY = (clientY - centerY) * pullFactor;
      btn.style.transition = 'none';
      btn.style.transform = `translate3d(${deltaX.toFixed(1)}px, ${deltaY.toFixed(1)}px, 0)`;
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (btnRef.current) {
      btnRef.current.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      btnRef.current.style.transform = 'translate3d(0px, 0px, 0)';
    }
  };

  return (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        display: 'inline-block',
        ...style
      }}
      className={className}
    >
      {children}
    </div>
  );
};

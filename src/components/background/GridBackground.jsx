import React from 'react';

export const GridBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        backgroundImage: `
          linear-gradient(to right, var(--border-subtle) 1px, transparent 1px),
          linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        opacity: 0.35,
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%)'
      }}
    />
  );
};

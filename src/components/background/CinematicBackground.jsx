import React from 'react';

export const CinematicBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        backgroundColor: '#080808'
      }}
      aria-hidden="true"
    >
      {/* Base Gradient: Deep Black (#080808) to Charcoal (#111111) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 120% 100% at 90% 10%, #111111 0%, #0c0c0c 45%, #080808 100%)'
        }}
      />

      {/* Cinematic Radial Orange Glow 1: Upper Right (Behind Hero visual / Top Right) */}
      <div
        className="cinematic-glow-top"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '75vw',
          height: '75vw',
          maxWidth: '900px',
          maxHeight: '900px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(124, 45, 18, 0.11) 32%, rgba(253, 186, 116, 0.03) 50%, rgba(8, 8, 8, 0) 72%)',
          filter: 'blur(70px)',
          transform: 'translateZ(0)'
        }}
      />

      {/* Cinematic Radial Orange Glow 2: Mid-Right (Soft burnt orange & amber illumination) */}
      <div
        className="cinematic-glow-mid"
        style={{
          position: 'absolute',
          top: '40%',
          right: '-8%',
          width: '65vw',
          height: '65vw',
          maxWidth: '820px',
          maxHeight: '820px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 45, 18, 0.13) 0%, rgba(249, 115, 22, 0.08) 35%, rgba(253, 186, 116, 0.02) 55%, rgba(8, 8, 8, 0) 75%)',
          filter: 'blur(90px)',
          transform: 'translateZ(0)'
        }}
      />

      {/* Cinematic Radial Orange Glow 3: Lower-Right subtle ambient illumination */}
      <div
        className="cinematic-glow-bottom"
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '5%',
          width: '50vw',
          height: '50vw',
          maxWidth: '650px',
          maxHeight: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 45, 18, 0.09) 0%, rgba(249, 115, 22, 0.05) 30%, rgba(8, 8, 8, 0) 70%)',
          filter: 'blur(80px)',
          transform: 'translateZ(0)'
        }}
      />

      {/* Left-Side Dark Zone Mask: Keeps left side deep and pristine for 100% text readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #080808 0%, rgba(8, 8, 8, 0.98) 38%, rgba(8, 8, 8, 0.72) 65%, transparent 100%)'
        }}
      />

      {/* Subtle Developer Grid: Soft, non-distracting geometric texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '52px 52px',
          opacity: 0.35,
          maskImage: 'radial-gradient(ellipse 70% 60% at 75% 35%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 75% 35%, black 20%, transparent 80%)'
        }}
      />

      {/* Responsive mobile adjustments */}
      <style>{`
        @media (max-width: 768px) {
          .cinematic-glow-top {
            width: 90vw !important;
            height: 90vw !important;
            top: -5% !important;
            right: -20% !important;
            opacity: 0.75 !important;
            filter: blur(50px) !important;
          }
          .cinematic-glow-mid {
            display: none !important;
          }
          .cinematic-glow-bottom {
            width: 80vw !important;
            height: 80vw !important;
            opacity: 0.6 !important;
            filter: blur(60px) !important;
          }
        }
      `}</style>
    </div>
  );
};


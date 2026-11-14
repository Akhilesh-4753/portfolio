import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Premium Intro Reveal / Preloader Overlay.
 * Solves the refresh flash by masking the viewport while initial route/hash layout settles,
 * pre-scrolling to the target section, and revealing the page with an award-level curtain wipe.
 */
export const IntroReveal = () => {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    // Show only on initial page load / refresh per browser session
    return !sessionStorage.getItem('akhilesh_session_loaded');
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return undefined;

    if (prefersReducedMotion) {
      sessionStorage.setItem('akhilesh_session_loaded', 'true');
      setVisible(false);
      return undefined;
    }

    // Animate progress smoothly from 0% to 100% over 800ms
    const startTime = Date.now();
    const duration = 800;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (elapsed >= duration) {
        clearInterval(timer);

        // Pre-scroll to requested section while the curtain is still completely covering the view
        const hash = window.location.hash;
        const pathname = window.location.pathname.replace(/^\//, '');
        const targetId = (hash ? hash.replace('#', '') : pathname) || '';

        if (targetId && targetId !== 'home') {
          const el = document.getElementById(targetId);
          if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'instant' });
          }
        }

        // Lift the curtain
        setTimeout(() => {
          sessionStorage.setItem('akhilesh_session_loaded', 'true');
          setVisible(false);
        }, 150);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [visible, prefersReducedMotion]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          key="intro-reveal-curtain"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1] // Award-winning Apple / Linear curtain curve
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#080808',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            pointerEvents: 'all'
          }}
          aria-hidden="true"
        >
          {/* Centered Brand Monogram & Loading Animation */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '320px',
              width: '100%'
            }}
          >
            {/* Logo Icon with Subtle Pulse */}
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                border: '1px solid rgba(249, 115, 22, 0.35)',
                boxShadow: '0 0 30px rgba(249, 115, 22, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="#F97316"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />
              </svg>
            </m.div>

            {/* Typography */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.18em',
                color: '#f4f4f5',
                fontWeight: 700,
                marginBottom: '0.4rem',
                textTransform: 'uppercase'
              }}
            >
              Akhilesh P
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                color: 'var(--text-muted, #71717a)',
                marginBottom: '1.75rem',
                textTransform: 'uppercase'
              }}
            >
              Full-Stack Developer
            </div>

            {/* High-Precision Progress Bar */}
            <div
              style={{
                width: '100%',
                height: '2px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '9999px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #EA580C 0%, #F97316 60%, #FDBA74 100%)',
                  boxShadow: '0 0 12px rgba(249, 115, 22, 0.65)',
                  transition: 'width 0.05s linear'
                }}
              />
            </div>

            {/* Status Percentage */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '0.65rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--text-muted, #71717a)'
              }}
            >
              <span>{progress === 100 ? 'SYSTEM READY' : 'INITIALIZING'}</span>
              <span>{progress}%</span>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};


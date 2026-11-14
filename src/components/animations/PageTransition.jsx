import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Award-Level Page Transition with subtle fade-slide and optional cinematic curtain wipe.
 * - Easing: cubic-bezier(0.76, 0, 0.24, 1)
 * - Duration: 0.7s
 * - Handles route changes smoothly with AnimatePresence
 */
export const PageTransition = ({ children }) => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <m.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        transition={{
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1] // Award-winning Linear / Apple curve
        }}
        style={{ width: '100%', minHeight: '100%' }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
};


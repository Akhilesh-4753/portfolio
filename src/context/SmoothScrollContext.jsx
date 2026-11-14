import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from '../hooks/useReducedMotion';

const SmoothScrollContext = createContext({
  lenis: null,
  scrollTo: () => {}
});

/**
 * Premium Inertia-Based Smooth Scrolling Provider powered by Lenis.
 * Features:
 * - easeOutExpo cubic interpolation curve
 * - Synchronized requestAnimationFrame update loop
 * - Header offset compensation (-80px)
 * - Automatic prefers-reduced-motion fallback
 */
export const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Disable smooth inertia on SSR or if user prefers reduced motion
    if (typeof window === 'undefined' || prefersReducedMotion) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.25, // Award-winning duration (1.1s - 1.3s)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
      autoRaf: false // driven directly by our RAF loop
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let rafId = null;
    function update(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(update);
    }
    rafId = requestAnimationFrame(update);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      delete window.__lenis;
    };
  }, [prefersReducedMotion]);

  /**
   * Smoothly scrolls to target with inertia and header offset.
   * @param {string|number|HTMLElement} target - CSS selector ('#about'), pixel position, or DOM node
   * @param {object} options - Custom options (offset, duration, immediate)
   */
  const scrollTo = (target, options = {}) => {
    const lenis = lenisRef.current;
    const defaultOffset = -80;
    const defaultDuration = 1.4;

    if (lenis && !prefersReducedMotion) {
      if (lenis.isStopped) {
        try {
          lenis.start();
        } catch {
          // ignore
        }
      }
      lenis.scrollTo(target, {
        offset: options.offset !== undefined ? options.offset : defaultOffset,
        duration: options.duration !== undefined ? options.duration : defaultDuration,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options
      });
      return;
    }

    // Native fallback for reduced-motion or environments where Lenis is disabled
    if (typeof window !== 'undefined') {
      if (target === 0) {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        return;
      }
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el) {
        const yOffset = options.offset !== undefined ? options.offset : defaultOffset;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = () => useContext(SmoothScrollContext);


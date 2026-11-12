import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 24,
  immediate = false,
  className = '',
  style = {}
}) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate || prefersReducedMotion || visible) return undefined;
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate, prefersReducedMotion, visible]);

  if (prefersReducedMotion || immediate) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const offsets = {
    up: `translate3d(0, ${distance}px, 0)`,
    down: `translate3d(0, -${distance}px, 0)`,
    left: `translate3d(${distance}px, 0, 0)`,
    right: `translate3d(-${distance}px, 0, 0)`,
    none: 'translate3d(0, 0, 0)'
  };

  const hiddenTransform = offsets[direction] || offsets.up;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0, 0, 0)' : hiddenTransform,
        transition: `opacity ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
        willChange: visible ? 'auto' : 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
};

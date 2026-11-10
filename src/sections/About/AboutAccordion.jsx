import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from '../../components/animations/FadeIn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Minimalist single-expand accordion for the About narrative sections.
 */
export const AboutAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  if (!items?.length) return null;

  const toggleItem = (idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <FadeIn direction="up" delay={0.12}>
      <div
        className="about-accordion-wrap"
        style={{
          maxWidth: '880px',
          margin: '0 auto',
          background: 'var(--bg-card)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid var(--border-card)',
          borderRadius: '18px',
          overflow: 'hidden'
        }}
      >
        {items.map((item, idx) => {
          const isOpen = activeIndex === idx;
          const buttonId = `about-accordion-btn-${item.number}`;
          const panelId = `about-accordion-panel-${item.number}`;
          const content = (
            <div className="about-accordion-panel">
              <p className="about-accordion-text">{item.description}</p>
            </div>
          );

          return (
            <div
              key={item.number}
              style={{
                borderBottom:
                  idx < items.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                backgroundColor: isOpen ? 'rgba(249, 115, 22, 0.04)' : 'transparent',
                boxShadow: isOpen ? 'inset 3px 0 0 #F97316' : 'inset 3px 0 0 transparent',
                transition: 'background-color 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(idx)}
                className="about-accordion-trigger"
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', textAlign: 'left' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      flexWrap: 'wrap',
                      gap: '0.55rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: isOpen ? '#F97316' : 'var(--text-muted)',
                        transition: 'color 0.25s ease'
                      }}
                    >
                      {item.number}
                    </span>
                    <span
                      style={{
                        color: isOpen ? 'rgba(249, 115, 22, 0.6)' : 'var(--text-muted)',
                        fontWeight: 500
                      }}
                      aria-hidden="true"
                    >
                      —
                    </span>
                    <h3
                      style={{
                        fontSize: 'clamp(1.02rem, 1.5vw, 1.15rem)',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: 0,
                        transition: 'color 0.25s ease'
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <span
                    style={{
                      fontSize: '0.84rem',
                      color: isOpen ? '#FDBA74' : 'var(--text-muted)',
                      transition: 'color 0.25s ease'
                    }}
                  >
                    {item.subtitle}
                  </span>
                </div>

                {/* Right-aligned Dropdown Icon */}
                <span
                  aria-hidden="true"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: isOpen
                      ? 'rgba(249, 115, 22, 0.14)'
                      : 'rgba(255, 255, 255, 0.03)',
                    border: isOpen
                      ? '1px solid rgba(249, 115, 22, 0.4)'
                      : '1px solid var(--border-subtle)',
                    color: isOpen ? '#F97316' : 'var(--text-secondary)',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.28s ease, background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease'
                  }}
                >
                  <ChevronDown size={17} />
                </span>
              </button>

              {prefersReducedMotion ? (
                isOpen && (
                  <div id={panelId} role="region" aria-labelledby={buttonId}>
                    {content}
                  </div>
                )
              ) : (
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      {content}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .about-accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          padding: 1.35rem 1.75rem;
          background: transparent;
          border: none;
          cursor: pointer;
          color: inherit;
          font-family: inherit;
        }

        .about-accordion-trigger:hover h3 {
          color: #FDBA74 !important;
        }

        .about-accordion-trigger:focus-visible {
          outline: 2px solid #F97316;
          outline-offset: -2px;
        }

        .about-accordion-panel {
          padding: 0 1.75rem 1.5rem 1.75rem;
        }

        .about-accordion-text {
          font-size: 0.96rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin: 0;
        }

        @media (max-width: 640px) {
          .about-accordion-trigger {
            padding: 1.15rem 1.2rem;
            gap: 0.9rem;
          }

          .about-accordion-panel {
            padding: 0 1.2rem 1.25rem 1.2rem;
          }
        }
      `}</style>
    </FadeIn>
  );
};

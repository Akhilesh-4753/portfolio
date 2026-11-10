import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Globe, Server, Code2, Sparkles, ArrowRight } from 'lucide-react';
import { FadeIn } from '../../components/animations/FadeIn';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const STAGE_ICONS = {
  briefcase: Briefcase,
  globe: Globe,
  server: Server,
  code: Code2,
  sparkles: Sparkles
};

/**
 * Connected career progression timeline (horizontal on desktop, vertical on tablet/mobile).
 */
export const CareerJourneyTimeline = ({ journey }) => {
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  if (!journey?.stages?.length) return null;

  const railStyle = {
    position: 'absolute',
    zIndex: 1,
    pointerEvents: 'none',
    ...(isDesktop
      ? {
          top: '21px',
          left: '10%',
          right: '10%',
          height: '2px',
          background:
            'linear-gradient(90deg, rgba(124, 45, 18, 0.5) 0%, #F97316 60%, #FDBA74 100%)',
          boxShadow: '0 0 12px rgba(249, 115, 22, 0.35)'
        }
      : {
          top: '21px',
          bottom: '21px',
          left: '20px',
          width: '2px',
          background:
            'linear-gradient(to bottom, rgba(124, 45, 18, 0.5) 0%, #F97316 65%, #FDBA74 100%)',
          boxShadow: '0 0 12px rgba(249, 115, 22, 0.35)'
        })
  };

  return (
    <div style={{ margin: '0 auto 4rem auto' }}>
      {/* Section Sub-Header */}
      <FadeIn direction="up" delay={0.1}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3
            style={{
              fontSize: 'clamp(1.45rem, 2.5vw, 1.85rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem',
              color: 'var(--text-primary)'
            }}
          >
            {journey.heading}{' '}
            <span className="gradient-text">{journey.highlight}</span>
          </h3>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.02em'
            }}
          >
            {journey.stages.map((s) => s.role).join(' → ')}
          </p>
        </div>
      </FadeIn>

      {/* Connected Timeline Container */}
      <div className="career-timeline-grid">
        {/* Animated Glowing Connector Rail */}
        {prefersReducedMotion ? (
          <div style={railStyle} aria-hidden="true" />
        ) : (
          <motion.div
            key={isDesktop ? 'desktop-rail' : 'mobile-rail'}
            style={{
              ...railStyle,
              transformOrigin: isDesktop ? 'left center' : 'top center'
            }}
            initial={isDesktop ? { scaleX: 0 } : { scaleY: 0 }}
            whileInView={isDesktop ? { scaleX: 1 } : { scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
        )}

        {journey.stages.map((stage, idx) => {
          const Icon = STAGE_ICONS[stage.icon] || Code2;
          const isGoal = Boolean(stage.isGoal);
          const isLast = idx === journey.stages.length - 1;

          return (
            <FadeIn
              key={stage.step}
              delay={0.12 + idx * 0.09}
              direction={isDesktop ? 'up' : 'left'}
              style={{ display: 'flex' }}
            >
              <div className="career-step">
                {/* Circular Timeline Node */}
                <div
                  className={`career-node ${isGoal ? 'career-node-goal' : ''}`}
                  aria-hidden="true"
                >
                  <Icon size={18} />
                </div>

                {/* Stage Detail Card */}
                <div className={`career-card ${isGoal ? 'career-card-goal' : ''}`}>
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '0.4rem',
                        marginBottom: '0.55rem'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          color: isGoal ? '#FDBA74' : 'var(--text-muted)'
                        }}
                      >
                        {stage.step}
                      </span>

                      {isGoal ? (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.66rem',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            padding: '0.16rem 0.5rem',
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(249, 115, 22, 0.16)',
                            color: '#FDBA74',
                            border: '1px solid rgba(249, 115, 22, 0.38)'
                          }}
                        >
                          <span
                            className="animate-status-pulse"
                            style={{
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              backgroundColor: '#F97316',
                              boxShadow: '0 0 8px #F97316'
                            }}
                          />
                          GOAL
                        </span>
                      ) : !isLast ? (
                        <ArrowRight
                          size={13}
                          className="career-step-arrow"
                          style={{ color: 'rgba(249, 115, 22, 0.55)', flexShrink: 0 }}
                        />
                      ) : null}
                    </div>

                    <h4
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        lineHeight: 1.3,
                        marginBottom: '0.2rem'
                      }}
                    >
                      {stage.role}
                    </h4>

                    <div
                      style={{
                        fontSize: '0.79rem',
                        fontWeight: 600,
                        color: isGoal ? '#FDBA74' : 'var(--color-blue)',
                        marginBottom: '0.6rem',
                        lineHeight: 1.35
                      }}
                    >
                      {stage.company}
                    </div>

                    <p
                      style={{
                        fontSize: '0.81rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.55,
                        marginBottom: '0.9rem'
                      }}
                    >
                      {stage.description}
                    </p>
                  </div>

                  {/* Relevant Technologies / Skills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.35rem',
                      marginTop: 'auto'
                    }}
                  >
                    {stage.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="tech-tag"
                        style={{
                          fontSize: '0.69rem',
                          padding: '0.18rem 0.48rem',
                          ...(isGoal
                            ? {
                                borderColor: 'rgba(249, 115, 22, 0.28)',
                                color: '#f4f4f5',
                                backgroundColor: 'rgba(249, 115, 22, 0.08)'
                              }
                            : {})
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <style>{`
        .career-timeline-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          align-items: stretch;
        }

        .career-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .career-node {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 2px solid rgba(249, 115, 22, 0.55);
          color: #F97316;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          flex-shrink: 0;
          box-shadow: 0 0 18px rgba(249, 115, 22, 0.22);
          transition: var(--transition-smooth);
        }

        .career-step:hover .career-node {
          border-color: #F97316;
          box-shadow: 0 0 22px rgba(249, 115, 22, 0.4);
          transform: scale(1.06);
        }

        .career-node-goal {
          background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
          border-color: #FDBA74;
          color: #ffffff;
          box-shadow: 0 0 24px rgba(249, 115, 22, 0.5);
        }

        .career-card {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: var(--bg-card);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border-card);
          border-radius: 14px;
          padding: 1.15rem;
          transition: var(--transition-smooth);
        }

        .career-card:hover {
          border-color: var(--border-highlight);
          box-shadow: var(--shadow-glow);
          transform: translateY(-3px);
        }

        .career-card-goal {
          border-color: rgba(249, 115, 22, 0.45);
          background: linear-gradient(160deg, rgba(249, 115, 22, 0.1) 0%, rgba(17, 17, 17, 0.85) 65%);
          box-shadow: 0 10px 28px -8px rgba(249, 115, 22, 0.24);
        }

        .career-card-goal:hover {
          border-color: rgba(253, 186, 116, 0.65);
          box-shadow: 0 12px 34px -6px rgba(249, 115, 22, 0.35);
        }

        @media (max-width: 1024px) {
          .career-timeline-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            max-width: 680px;
            margin: 0 auto;
          }

          .career-step {
            display: grid;
            grid-template-columns: 42px 1fr;
            gap: 1rem;
            align-items: start;
          }

          .career-node {
            margin-bottom: 0;
          }

          .career-step-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </div>
  );
};


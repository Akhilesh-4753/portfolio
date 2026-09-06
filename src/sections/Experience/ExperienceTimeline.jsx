import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/experience';
import { TiltCard } from '../../components/animations/TiltCard';
import { FadeIn } from '../../components/animations/FadeIn';

export const ExperienceTimeline = () => {
  return (
    <div style={{ position: 'relative', maxWidth: '880px', margin: '0 auto' }}>
      {/* Central / Left Connecting Vertical Line */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          bottom: '20px',
          left: '24px',
          width: '2px',
          background: 'linear-gradient(to bottom, var(--color-blue), var(--color-violet), transparent)',
          zIndex: 0
        }}
        className="timeline-rail"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {experiences.map((exp, idx) => (
          <FadeIn key={exp.id} delay={idx * 0.12} direction="up">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                gap: '1.5rem',
                alignItems: 'flex-start',
                position: 'relative'
              }}
              className="timeline-item"
            >
              {/* Timeline Node Icon */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  border: '2px solid var(--color-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-blue)',
                  boxShadow: '0 0 15px rgba(56, 189, 248, 0.3)',
                  zIndex: 1,
                  flexShrink: 0
                }}
              >
                <Briefcase size={20} />
              </div>

              {/* Content Card */}
              <TiltCard style={{ padding: '2rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '0.85rem'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontSize: '1.05rem', color: 'var(--color-blue)', fontWeight: 600 }}>
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        color: 'var(--color-blue)',
                        border: '1px solid rgba(56, 189, 248, 0.2)'
                      }}
                    >
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)'
                      }}
                    >
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '1.25rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem'
                  }}
                >
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{ color: 'var(--color-cyan)', flexShrink: 0, marginTop: '4px' }}
                      />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '1.25rem' }}>
                  {exp.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

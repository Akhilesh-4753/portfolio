import React from 'react';
import { FadeIn } from '../animations/FadeIn';

export const SectionTitle = ({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`section-title-wrap ${className}`}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '760px' : '100%',
        margin: isCenter ? '0 auto 3.5rem auto' : '0 0 2.8rem 0'
      }}
    >
      {badge && (
        <FadeIn direction="down" delay={0.1}>
          <div style={{ marginBottom: '0.9rem', display: 'inline-block' }}>
            <span className="badge-pill">
              <span className="status-dot" style={{ width: '6px', height: '6px' }} />
              {badge}
            </span>
          </div>
        </FadeIn>
      )}

      <FadeIn direction="up" delay={0.15}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            letterSpacing: '-0.025em',
            marginBottom: '1rem',
            fontWeight: 800
          }}
        >
          {title}{' '}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h2>
      </FadeIn>

      {subtitle && (
        <FadeIn direction="up" delay={0.2}>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65
            }}
          >
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
};

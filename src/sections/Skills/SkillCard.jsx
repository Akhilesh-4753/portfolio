import React from 'react';
import { TiltCard } from '../../components/animations/TiltCard';
import { Layout, Server, Database, Smartphone, Layers, Wrench } from 'lucide-react';

const ICON_MAP = {
  Layout,
  Server,
  Database,
  Smartphone,
  Layers,
  Wrench
};

export const SkillCard = ({ category }) => {
  const Icon = ICON_MAP[category.icon] || Layout;

  return (
    <TiltCard
      style={{
        padding: '1.5rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '18px',
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Category Header */}
      <div style={{ marginBottom: '1.1rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.6rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '9px',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                color: 'var(--color-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Icon size={18} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2
                }}
              >
                {category.title}
              </h3>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-cyan)',
                  letterSpacing: '0.04em'
                }}
              >
                {category.category.toUpperCase()}
              </span>
            </div>
          </div>

          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              padding: '0.18rem 0.55rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(148, 163, 184, 0.08)',
              color: 'var(--text-muted)',
              border: '1px solid var(--border-subtle)',
              whiteSpace: 'nowrap'
            }}
          >
            {category.skills.length} Tech
          </span>
        </div>

        <p
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.45,
            margin: 0
          }}
        >
          {category.description}
        </p>
      </div>

      {/* Compact 2-Column Grid of Mini-Cards */}
      <div
        className="tech-category-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.6rem',
          flexGrow: 1,
          alignContent: 'start'
        }}
      >
        {category.skills.map((skill, idx) => {
          // If total skills is odd and this is the last one, span 2 columns for a neat balanced finish
          const isOddLast = category.skills.length % 2 !== 0 && idx === category.skills.length - 1;

          return (
            <div
              key={skill.name}
              style={{
                padding: '0.65rem 0.75rem',
                borderRadius: '9px',
                backgroundColor: 'rgba(11, 16, 28, 0.6)',
                border: '1px solid rgba(148, 163, 184, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.35rem',
                transition: 'all 0.2s ease',
                gridColumn: isOddLast ? 'span 2' : 'span 1'
              }}
              className="tech-mini-card"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.35rem'
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: '0.86rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {skill.name}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: 'var(--color-blue)',
                    backgroundColor: 'rgba(56, 189, 248, 0.08)',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {skill.level}
                </span>
              </div>

              <p
                style={{
                  fontSize: '0.74rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.4,
                  margin: 0
                }}
              >
                {skill.context}
              </p>
            </div>
          );
        })}
      </div>

      <style>{`
        .tech-mini-card:hover {
          border-color: rgba(56, 189, 248, 0.4);
          background-color: rgba(56, 189, 248, 0.06);
          transform: translateY(-2px);
        }
        @media (max-width: 480px) {
          .tech-category-grid {
            grid-template-columns: 1fr !important;
          }
          .tech-category-grid > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </TiltCard>
  );
};

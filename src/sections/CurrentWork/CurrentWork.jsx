import React from 'react';
import { personalInfo } from '../../data/personal';
import { SectionTitle } from '../../components/common/SectionTitle';
import { TiltCard } from '../../components/animations/TiltCard';
import { FadeIn } from '../../components/animations/FadeIn';
import { ShoppingBag, Activity } from 'lucide-react';

export const CurrentWork = () => {
  return (
    <section id="current-work" className="section-wrapper">
      <div className="site-container">
        <SectionTitle
          badge="CURRENTLY BUILDING"
          title="Active Software"
          highlight="Development"
          subtitle="Real-time engineering engagement focusing on mission-critical business transactions."
        />

        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <FadeIn direction="up" delay={0.2}>
            <TiltCard
              style={{
                padding: '2.5rem',
                border: '1px solid var(--border-highlight)',
                boxShadow: 'var(--shadow-glow)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'var(--gradient-primary)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 18px rgba(56, 189, 248, 0.35)'
                    }}
                  >
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {personalInfo.activeWork.title}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      // Sales & Retail Architecture
                    </span>
                  </div>
                </div>

                {/* Pulse Active Project Badge */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    color: 'var(--color-emerald)',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <span className="status-dot animate-status-pulse" />
                  ● ACTIVE PROJECT
                </span>
              </div>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem'
                }}
              >
                {personalInfo.activeWork.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.9rem 1.2rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(148, 163, 184, 0.06)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <Activity size={16} style={{ color: 'var(--color-cyan)', flexShrink: 0 }} />
                <span>Contributing to operational point-of-sale functionality and transactional robustness.</span>
              </div>
            </TiltCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

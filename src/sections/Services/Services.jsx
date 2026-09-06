import React from 'react';
import { services } from '../../data/services';
import { SectionTitle } from '../../components/common/SectionTitle';
import { TiltCard } from '../../components/animations/TiltCard';
import { FadeIn } from '../../components/animations/FadeIn';
import { Layout, Database, Network, Smartphone, Briefcase, Palette } from 'lucide-react';

const ICON_MAP = {
  Layout,
  Database,
  Network,
  Smartphone,
  Briefcase,
  Palette
};

export const Services = () => {
  return (
    <section id="services" className="section-wrapper">
      <div className="site-container">
        <SectionTitle
          badge="CAPABILITIES"
          title="What I"
          highlight="Build & Deliver"
          subtitle="Specialized capabilities delivering high performance, data consistency, and modern user experiences."
        />

        <div className="grid-3">
          {services.map((service, idx) => {
            const Icon = ICON_MAP[service.icon] || Layout;
            return (
              <FadeIn key={service.number} delay={idx * 0.08} direction="up">
                <TiltCard
                  style={{
                    padding: '2rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        color: 'var(--color-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text-muted)'
                      }}
                    >
                      {service.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      marginBottom: '0.75rem',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem',
                      flexGrow: 1
                    }}
                  >
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {service.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-tag" style={{ fontSize: '0.76rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { personalInfo } from '../../data/personal';
import { SectionTitle } from '../../components/common/SectionTitle';
import { FadeIn } from '../../components/animations/FadeIn';
import { TiltCard } from '../../components/animations/TiltCard';
import { Code, Server, Network, Layers, Smartphone, Briefcase } from 'lucide-react';

const ICON_MAP = [Code, Server, Network, Layers, Smartphone, Briefcase];

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <div className="site-container">
        <SectionTitle
          badge="ABOUT ME"
          title="Practical Engineering with"
          highlight="Real-World Impact"
          subtitle="A disciplined approach to building reliable software systems and modern interfaces."
        />

        {/* Bio Story Grid */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto 3.5rem auto',
            textAlign: 'center'
          }}
        >
          {personalInfo.aboutBio.map((paragraph, idx) => (
            <FadeIn key={idx} delay={0.15 + idx * 0.08} direction="up">
              <p
                style={{
                  fontSize: 'clamp(1.02rem, 1.4vw, 1.15rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  marginBottom: '1.25rem'
                }}
              >
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* 6 Core Domain Focus Cards */}
        <div className="grid-3">
          {personalInfo.domainCards.map((card, idx) => {
            const Icon = ICON_MAP[idx] || Code;
            return (
              <FadeIn key={card.title} delay={idx * 0.07} direction="up">
                <TiltCard
                  style={{
                    padding: '1.75rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
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
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{card.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {card.desc}
                  </p>
                </TiltCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { personalInfo } from '../../data/personal';
import { SectionTitle } from '../../components/common/SectionTitle';
import { FadeIn } from '../../components/animations/FadeIn';
import { TiltCard } from '../../components/animations/TiltCard';
import { GraduationCap, Code, TrendingUp, Target } from 'lucide-react';

const ICON_MAP = [GraduationCap, Code, TrendingUp, Target];

/**
 * Renders inline text segments with optional bold primary-color emphasis.
 */
const RichText = ({ segments }) => (
  <>
    {segments.map((seg, idx) =>
      seg.bold ? (
        <strong key={idx} style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
          {seg.text}
        </strong>
      ) : (
        <React.Fragment key={idx}>{seg.text}</React.Fragment>
      )
    )}
  </>
);

export const About = () => {
  const { about } = personalInfo;

  return (
    <section id="about" className="section-wrapper">
      <div className="site-container">
        <SectionTitle
          badge={about.badge}
          title={about.title}
          highlight={about.highlight}
          subtitle={<RichText segments={about.intro} />}
        />

        {/* 4 Journey & Philosophy Cards */}
        <div className="grid-2" style={{ maxWidth: '1040px', margin: '0 auto' }}>
          {about.sections.map((section, idx) => {
            const Icon = ICON_MAP[idx] || Code;
            return (
              <FadeIn key={section.title} delay={idx * 0.08} direction="up">
                <TiltCard
                  style={{
                    padding: '1.85rem',
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
                      backgroundColor: 'rgba(249, 115, 22, 0.12)',
                      color: 'var(--color-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{section.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    <RichText segments={section.segments} />
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

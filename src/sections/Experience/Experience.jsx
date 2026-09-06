import React from 'react';
import { SectionTitle } from '../../components/common/SectionTitle';
import { ExperienceTimeline } from './ExperienceTimeline';
import { freelanceExperience } from '../../data/experience';
import { FadeIn } from '../../components/animations/FadeIn';
import { TiltCard } from '../../components/animations/TiltCard';
import { Palette, MapPin, Sparkles } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="section-wrapper">
      <div className="site-container">
        <SectionTitle
          badge="TRACK RECORD"
          title="Professional Experience &"
          highlight="Career Journey"
          subtitle="Software development history spanning enterprise ERP applications, ASP.NET Core MVC systems, and responsive React frontend engineering."
        />

        {/* Timeline */}
        <ExperienceTimeline />

        {/* Freelance & Creative Section (Section 14) */}
        <div style={{ marginTop: '5rem', maxWidth: '880px', margin: '5rem auto 0 auto' }}>
          <FadeIn direction="up" delay={0.2}>
            <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              <span className="badge-pill">
                <Sparkles size={14} style={{ marginRight: '4px' }} />
                FREELANCE COLLABORATION
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginTop: '0.6rem' }}>
                Freelance & Creative Work
              </h3>
            </div>

            <TiltCard style={{ padding: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    color: 'var(--color-violet)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Palette size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {freelanceExperience.title}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    <MapPin size={13} />
                    <span>{freelanceExperience.location}</span>
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                {freelanceExperience.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {freelanceExperience.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-tag" style={{ color: 'var(--color-violet)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

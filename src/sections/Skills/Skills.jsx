import React from 'react';
import { Calculator, Code2 } from 'lucide-react';
import { skillGroups } from '../../data/skills';
import { SectionTitle } from '../../components/common/SectionTitle';
import { FadeIn } from '../../components/animations/FadeIn';
import { SkillMarqueeRow } from './SkillMarqueeRow';

const GROUP_ICONS = {
  Calculator,
  Code2
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="section-wrapper"
      style={{ overflowX: 'clip' }}
    >
      <div className="site-container">
        <SectionTitle
          badge="SKILLS & EXPERTISE"
          title="Skills &"
          highlight="Expertise"
          subtitle="Accounting and financial operations expertise paired with full-stack software development capabilities."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
          {skillGroups.map((group, gIdx) => {
            const GroupIcon = GROUP_ICONS[group.icon] || Code2;
            const totalSkills = group.categories.reduce(
              (acc, cat) => acc + cat.skills.length,
              0
            );

            return (
              <FadeIn key={group.id} delay={gIdx * 0.1} direction="up">
                <div className="glass-panel skills-domain-panel">
                  {/* Domain Header */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '1rem',
                      paddingBottom: '1.25rem',
                      marginBottom: '1.5rem',
                      borderBottom: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(249, 115, 22, 0.14)',
                          border: '1px solid rgba(249, 115, 22, 0.28)',
                          color: 'var(--color-blue)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 0 18px rgba(249, 115, 22, 0.15)'
                        }}
                      >
                        <GroupIcon size={22} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: 'clamp(1.2rem, 2vw, 1.45rem)',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            marginBottom: '0.15rem'
                          }}
                        >
                          {group.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '0.86rem',
                            color: 'var(--text-secondary)',
                            margin: 0
                          }}
                        >
                          {group.subtitle}
                        </p>
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: '0.76rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        padding: '0.3rem 0.8rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                        color: 'var(--color-blue)',
                        border: '1px solid rgba(249, 115, 22, 0.25)'
                      }}
                    >
                      {totalSkills} Skills
                    </span>
                  </div>

                  {/* Category Marquee Rows */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.65rem' }}>
                    {group.categories.map((cat) => (
                      <SkillMarqueeRow
                        key={cat.id}
                        category={cat}
                        direction={group.direction}
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-domain-panel {
          padding: 2rem;
          border-radius: 20px;
        }
        @media (max-width: 768px) {
          .skills-domain-panel {
            padding: 1.35rem 1.1rem;
            border-radius: 16px;
          }
        }
      `}</style>
    </section>
  );
};

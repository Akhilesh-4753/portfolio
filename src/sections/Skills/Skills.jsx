import React from 'react';
import { skillCategories } from '../../data/skills';
import { SectionTitle } from '../../components/common/SectionTitle';
import { SkillCard } from './SkillCard';
import { FadeIn } from '../../components/animations/FadeIn';

export const Skills = () => {
  return (
    <section id="skills" className="section-wrapper">
      <div className="site-container">
        <SectionTitle
          badge="TECH STACK"
          title="Technologies & Engineering"
          highlight="Toolbox"
          subtitle="Real-world technologies applied across enterprise software, full-stack MVC systems, and responsive web applications."
        />

        {/* 2-Column Balanced Grid for 6 Categories */}
        <div
          className="skills-categories-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}
        >
          {skillCategories.map((cat, idx) => (
            <FadeIn key={cat.id} delay={idx * 0.06} direction="up" style={{ height: '100%' }}>
              <SkillCard category={cat} />
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-categories-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

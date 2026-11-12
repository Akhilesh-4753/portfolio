import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { SectionTitle } from '../../components/common/SectionTitle';
import { CareerJourneyTimeline } from './CareerJourneyTimeline';
import { AboutAccordion } from './AboutAccordion';

export const About = () => {
  const { about } = personalInfo;

  return (
    <section id="about" className="section-wrapper">
      <div className="site-container">
        <SectionTitle
          badge={about.badge}
          title={about.title}
          highlight={about.highlight}
          subtitle={about.intro}
        />

        {/* My Career Journey Connected Timeline */}
        <CareerJourneyTimeline journey={about.careerJourney} />

        {/* Minimalist Narrative Accordion */}
        <AboutAccordion items={about.accordion} />

        {/* Contextual Navigation to Experience & Contact */}
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}
        >
          <Link
            to="/#experience"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--color-blue)'
            }}
          >
            <span>Explore detailed work experience</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link
            to="/#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--text-secondary)'
            }}
          >
            <span>Discuss a role or project</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

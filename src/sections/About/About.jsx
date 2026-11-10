import React from 'react';
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
      </div>
    </section>
  );
};

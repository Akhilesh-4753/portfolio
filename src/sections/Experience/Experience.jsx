import React from 'react';
import { SectionTitle } from '../../components/common/SectionTitle';
import { ExperienceTimeline } from './ExperienceTimeline';
import { FreelanceShowcase } from './FreelanceShowcase';

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

        {/* Freelance & Professional Collaboration Showcase */}
        <FreelanceShowcase />
      </div>
    </section>
  );
};

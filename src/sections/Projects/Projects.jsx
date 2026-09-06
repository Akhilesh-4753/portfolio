import React from 'react';
import { projects } from '../../data/projects';
import { SectionTitle } from '../../components/common/SectionTitle';
import { ProjectGrid } from '../../components/project/ProjectGrid';

export const Projects = () => {
  return (
    <section id="projects" className="section-wrapper">
      <div className="site-container">
        <SectionTitle
          badge="FEATURED WORK"
          title="Software Projects &"
          highlight="Case Studies"
          subtitle="Explore selected engineering projects spanning personal productivity products, enterprise ERP applications, and client solutions."
        />

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
};

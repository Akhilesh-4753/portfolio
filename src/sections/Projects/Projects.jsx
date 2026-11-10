import React from 'react';
import { projects } from '../../data/projects';
import { SectionTitle } from '../../components/common/SectionTitle';
import { ProjectGrid } from '../../components/project/ProjectGrid';

export const Projects = () => {
  return (
    <section id="projects" className="section-wrapper">
      <div className="site-container">
        <SectionTitle
          badge="MY WORK"
          title="Building Ideas Into"
          highlight="Software"
          subtitle="A collection of applications, engineering projects, and digital solutions built through professional experience, independent development, and team collaboration."
        />

        {/* Unified Filterable & Searchable Projects Gallery */}
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
};

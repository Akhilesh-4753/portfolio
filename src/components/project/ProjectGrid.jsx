import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { FadeIn } from '../animations/FadeIn';

const CATEGORIES = [
  'All',
  'Featured',
  'Enterprise & ERP',
  'React & Web',
  'Productivity & Mobile'
];

export const ProjectGrid = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return project.featured;
    if (activeCategory === 'Enterprise & ERP') {
      return (
        project.category.includes('ERP') ||
        project.category.includes('Enterprise') ||
        project.technologies.some((t) => t.includes('.NET'))
      );
    }
    if (activeCategory === 'React & Web') {
      return (
        project.technologies.some((t) => t.includes('React.js')) ||
        project.category.includes('Web') ||
        project.category.includes('Commerce')
      );
    }
    if (activeCategory === 'Productivity & Mobile') {
      return (
        project.category.includes('Productivity') ||
        project.technologies.some((t) => t.includes('Native'))
      );
    }
    return true;
  });

  return (
    <div>
      {/* Filter Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.6rem',
          justifyContent: 'center',
          marginBottom: '3rem'
        }}
      >
        {CATEGORIES.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.86rem',
                fontWeight: 600,
                border: isSelected
                  ? '1px solid var(--color-blue)'
                  : '1px solid var(--border-subtle)',
                backgroundColor: isSelected
                  ? 'rgba(56, 189, 248, 0.12)'
                  : 'var(--bg-card)',
                color: isSelected ? 'var(--color-blue)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Grid of Cards */}
      <div className="grid-3" style={{ alignItems: 'stretch' }}>
        {filteredProjects.map((project, idx) => (
          <FadeIn key={project.id} delay={idx * 0.08} direction="up">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { TiltCard } from '../animations/TiltCard';
import { ProjectPreview } from './ProjectPreview';
import { ProjectStatusPill, ProjectRoleLine, ProjectTechList } from './ProjectMeta';

export const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card-link"
      style={{
        display: 'block',
        height: '100%',
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <TiltCard
        className="project-card"
        glare={true}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: '1.35rem',
          borderRadius: '18px'
        }}
      >
        {/* Screenshot / Preview */}
        <div style={{ marginBottom: '1.15rem' }}>
          <ProjectPreview project={project} aspectRatio="16 / 10" />
        </div>

        {/* Card Header: Category & Status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.75rem',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: '#F97316',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: 600
            }}
          >
            {project.category}
          </span>

          <ProjectStatusPill status={project.status} badge={project.badge} />
        </div>

        {/* Title */}
        <h3
          className="project-card-title"
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            marginBottom: '0.45rem',
            color: 'var(--text-primary)',
            transition: 'color 0.25s ease'
          }}
        >
          {project.title}
        </h3>

        {/* Role & Ownership */}
        <ProjectRoleLine role={project.role} ownership={project.ownership} />

        {/* Concise Description */}
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '1.25rem',
            flexGrow: 1
          }}
        >
          {project.shortDescription}
        </p>

        {/* Max 4 Technology Badges */}
        <div style={{ marginBottom: '1.25rem' }}>
          <ProjectTechList technologies={project.technologies} maxVisible={4} />
        </div>

        {/* Action Footer */}
        <div
          style={{
            paddingTop: '0.95rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span
            className="project-card-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#FDBA74',
              transition: 'color 0.25s ease'
            }}
          >
            <span>Explore Project Details</span>
            <ArrowUpRight size={16} className="project-card-arrow" />
          </span>
        </div>
      </TiltCard>
    </Link>
  );
};

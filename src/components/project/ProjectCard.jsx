import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers } from 'lucide-react';
import { TiltCard } from '../animations/TiltCard';

export const ProjectCard = ({ project }) => {
  return (
    <TiltCard
      className="project-card"
      glare={true}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '1.75rem',
        borderRadius: '16px'
      }}
    >
      {/* Card Header: Category & Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.2rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--color-blue)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          {project.category}
        </span>
        {project.badge && (
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              padding: '0.2rem 0.6rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              color: 'var(--color-blue)',
              border: '1px solid rgba(56, 189, 248, 0.2)'
            }}
          >
            {project.badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          marginBottom: '0.75rem',
          color: 'var(--text-primary)'
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.92rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: '1.5rem',
          flexGrow: 1
        }}
      >
        {project.shortDescription}
      </p>

      {/* Tech Stack Pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.45rem',
          marginBottom: '1.75rem'
        }}
      >
        {project.technologies.slice(0, 4).map((tech, idx) => (
          <span key={idx} className="tech-tag">
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="tech-tag" style={{ color: 'var(--text-muted)' }}>
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>

      {/* Action Footer */}
      <div
        style={{
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Link
          to={`/projects/${project.slug}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: 'var(--color-blue)',
            transition: 'var(--transition-smooth)'
          }}
          className="project-action-link"
        >
          <span>View Project Case Study</span>
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </TiltCard>
  );
};

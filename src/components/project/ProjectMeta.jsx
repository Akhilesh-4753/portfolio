import React from 'react';
import { UserCheck } from 'lucide-react';

/**
 * Renders verified project status badge only when an explicit verified status exists.
 */
export const ProjectStatusPill = ({ status, badge }) => {
  if (status) {
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.38rem',
          fontSize: '0.72rem',
          fontWeight: 600,
          padding: '0.22rem 0.65rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          color: 'var(--color-emerald)',
          border: '1px solid rgba(16, 185, 129, 0.28)',
          whiteSpace: 'nowrap'
        }}
      >
        <span
          className="status-dot animate-status-pulse"
          style={{ width: '6px', height: '6px' }}
          aria-hidden="true"
        />
        {status}
      </span>
    );
  }

  if (badge) {
    return (
      <span
        style={{
          fontSize: '0.72rem',
          fontWeight: 600,
          padding: '0.22rem 0.65rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(249, 115, 22, 0.1)',
          color: '#FDBA74',
          border: '1px solid rgba(249, 115, 22, 0.25)',
          whiteSpace: 'nowrap'
        }}
      >
        {badge}
      </span>
    );
  }

  return null;
};

/**
 * Displays contributor role and ownership context concisely.
 */
export const ProjectRoleLine = ({ role, ownership }) => {
  if (!role && !ownership) return null;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.4rem',
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        marginBottom: '1rem'
      }}
    >
      <UserCheck size={14} style={{ color: '#F97316', flexShrink: 0 }} />
      {role && (
        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{role}</span>
      )}
      {role && ownership && (
        <span style={{ color: 'var(--text-muted)' }} aria-hidden="true">
          ·
        </span>
      )}
      {ownership && (
        <span style={{ color: 'var(--text-muted)' }}>{ownership}</span>
      )}
    </div>
  );
};

/**
 * Renders up to maxVisible technology badges plus a "+N more" pill.
 */
export const ProjectTechList = ({ technologies = [], maxVisible = 4 }) => {
  const visible = technologies.slice(0, maxVisible);
  const remaining = technologies.length - visible.length;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.45rem'
      }}
    >
      {visible.map((tech) => (
        <span key={tech} className="tech-tag">
          {tech}
        </span>
      ))}
      {remaining > 0 && (
        <span className="tech-tag" style={{ color: '#FDBA74', borderColor: 'rgba(249, 115, 22, 0.22)' }}>
          +{remaining} more
        </span>
      )}
    </div>
  );
};


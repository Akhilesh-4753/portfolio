import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Code2,
  Server,
  Home,
  CheckCircle2,
  GitMerge,
  ArrowUpRight
} from 'lucide-react';
import { freelanceExperience } from '../../data/experience';
import { FadeIn } from '../../components/animations/FadeIn';
import { BeyondDevelopment } from './BeyondDevelopment';

/**
 * Editorial showcase for Freelance & Professional Collaboration (Branding Hut & ApnaVilla).
 */
export const FreelanceShowcase = () => {
  const { featuredProject } = freelanceExperience;

  return (
    <div id="freelance" style={{ marginTop: '6.5rem', paddingTop: '1.5rem' }}>
      {/* Card-Free Beyond Development / Branding Hut Collaboration Section */}
      <BeyondDevelopment />

      {/* Featured Team Project Showcase — ApnaVilla */}
      <FadeIn direction="up" delay={0.18}>
        <div
          className="glass-panel apnavilla-showcase-panel"
          style={{
            position: 'relative',
            overflow: 'hidden',
            marginTop: '1.5rem',
            border: '1px solid rgba(249, 115, 22, 0.35)',
            background:
              'linear-gradient(155deg, rgba(249, 115, 22, 0.06) 0%, rgba(17, 17, 17, 0.9) 45%, rgba(10, 10, 10, 0.95) 100%)',
            boxShadow: '0 18px 42px -12px rgba(0, 0, 0, 0.75), 0 0 30px -8px rgba(249, 115, 22, 0.16)'
          }}
        >
          {/* Project Header Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1.25rem',
              paddingBottom: '1.35rem',
              marginBottom: '1.35rem',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                  marginBottom: '0.65rem'
                }}
              >
                <span className="badge-pill">
                  <Home size={12} />
                  {featuredProject.badge}
                </span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#FDBA74'
                  }}
                >
                  // {featuredProject.category}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.15rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  margin: 0
                }}
              >
                {featuredProject.name}
              </h3>
            </div>

            {/* Team & Role Metadata Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <Users size={14} style={{ color: 'var(--text-muted)' }} />
                <span>Team:</span>
                <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  {featuredProject.organization}
                </strong>
              </div>

              <div
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(249, 115, 22, 0.12)',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                  fontSize: '0.82rem',
                  color: '#FDBA74',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <Code2 size={14} style={{ color: '#F97316' }} />
                <span>My Role:</span>
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>
                  {featuredProject.myRole}
                </strong>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <p
            style={{
              fontSize: '1.02rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '1.65rem',
              maxWidth: '860px'
            }}
          >
            {featuredProject.description}
          </p>

          {/* Distinct Split: My Frontend Work vs. Team Laravel Backend */}
          <div className="apnavilla-split-grid" style={{ marginBottom: '1.75rem' }}>
            {/* Column 1: My Frontend Contributions */}
            <div
              style={{
                padding: '1.35rem 1.45rem',
                borderRadius: '14px',
                backgroundColor: 'rgba(249, 115, 22, 0.04)',
                border: '1px solid rgba(249, 115, 22, 0.24)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '1rem'
                }}
              >
                <Code2 size={18} style={{ color: '#F97316' }} />
                <h4
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  My Frontend Contributions
                </h4>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                {featuredProject.myContributions.map((item, cIdx) => (
                  <li
                    key={cIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      style={{ color: '#FDBA74', flexShrink: 0, marginTop: '3px' }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Team Architecture & Backend Separation */}
            <div
              style={{
                padding: '1.35rem 1.45rem',
                borderRadius: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginBottom: '1rem'
                  }}
                >
                  <GitMerge size={18} style={{ color: '#FDBA74' }} />
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: 0
                    }}
                  >
                    Team Collaboration & Architecture
                  </h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(249, 115, 22, 0.07)',
                      border: '1px solid rgba(249, 115, 22, 0.18)'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#F97316',
                        fontWeight: 700,
                        marginBottom: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <Code2 size={13} />
                      FRONTEND (MY SCOPE)
                    </div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {featuredProject.teamCollaborationContext.frontendScope}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.025)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#FDBA74',
                        fontWeight: 700,
                        marginBottom: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <Server size={13} />
                      BACKEND (TEAM SCOPE)
                    </div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {featuredProject.teamCollaborationContext.backendScope}
                    </div>
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.55,
                  margin: 0
                }}
              >
                {featuredProject.teamCollaborationContext.integrationNote}
              </p>
            </div>
          </div>

          {/* Technology Badges */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-subtle)'
            }}
          >
            <span
              style={{
                fontSize: '0.76rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}
            >
              Project Tech Stack
            </span>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {featuredProject.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <Link
              to="/projects/apnavilla"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#FDBA74'
              }}
            >
              <span>Read the ApnaVilla project case study</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </FadeIn>

      <style>{`
        .apnavilla-showcase-panel {
          padding: 2.25rem;
          border-radius: 20px;
        }

        .apnavilla-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 1.35rem;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .apnavilla-split-grid {
            grid-template-columns: 1fr;
            gap: 1.35rem;
          }
        }

        @media (max-width: 640px) {
          .apnavilla-showcase-panel {
            padding: 1.35rem 1.15rem;
            border-radius: 16px;
          }
        }
      `}</style>
    </div>
  );
};

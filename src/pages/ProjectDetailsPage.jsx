import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Award, Calendar, Layers, Sparkles, Target, Activity } from 'lucide-react';
import { projects } from '../data/projects';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { TiltCard } from '../components/animations/TiltCard';
import { FadeIn } from '../components/animations/FadeIn';

export const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div style={{ padding: '10rem 0', textAlign: 'center' }}>
        <Container>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Project Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            The project you are looking for does not exist or has been relocated.
          </p>
          <Button to="/#projects" variant="primary" icon={ArrowLeft} iconPosition="left">
            Back to Projects
          </Button>
        </Container>
      </div>
    );
  }

  const isDaybook = project.slug === 'daybook';

  return (
    <div style={{ paddingTop: '7rem', paddingBottom: '6rem' }}>
      <Container>
        {/* Navigation Bar */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Button to="/#projects" variant="secondary" icon={ArrowLeft} iconPosition="left">
            Back to All Projects
          </Button>
        </div>

        {/* Project Header Hero */}
        <FadeIn direction="up">
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              marginBottom: '3.5rem',
              borderRadius: '24px',
              border: '1px solid var(--border-highlight)',
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <span className="badge-pill">
                <span className="status-dot" />
                {project.category}
              </span>
              {project.badge && (
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--color-violet)',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(139, 92, 246, 0.2)'
                  }}
                >
                  {project.badge}
                </span>
              )}
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '1rem'
              }}
            >
              {project.title}
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '820px',
                marginBottom: '2rem'
              }}
            >
              {project.tagline || project.shortDescription}
            </p>

            {/* Tech Stack List */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag" style={{ fontSize: '0.85rem', padding: '0.35rem 0.8rem' }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Quick Metadata Stats Grid */}
            {project.stats && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1.2rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}
              >
                {project.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </FadeIn>

        {/* =======================================================
            SPECIFIC DEEP CASE STUDY FOR DAYBOOK (SECTION 17)
           ======================================================= */}
        {isDaybook ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {/* The Story Behind Daybook */}
            <FadeIn direction="up">
              <TiltCard style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(56, 189, 248, 0.1)',
                      color: 'var(--color-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Sparkles size={22} />
                  </div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>The Story Behind Daybook</h2>
                </div>

                <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1.2rem', fontSize: '1.15rem' }}>
                    {project.story.intro}
                  </p>
                  {project.story.paragraphs.map((p, idx) => (
                    <p key={idx} style={{ marginBottom: '1.2rem' }}>
                      {p}
                    </p>
                  ))}
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    Daybook was designed to help people:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem' }}>
                    {project.story.objectives.map((obj, oIdx) => (
                      <div
                        key={oIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem',
                          padding: '0.85rem 1rem',
                          backgroundColor: 'rgba(148, 163, 184, 0.05)',
                          borderRadius: '10px',
                          border: '1px solid var(--border-subtle)',
                          fontSize: '0.92rem'
                        }}
                      >
                        <CheckCircle2 size={16} style={{ color: 'var(--color-cyan)', flexShrink: 0 }} />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </FadeIn>

            {/* Plan vs. Action & Core Idea */}
            <FadeIn direction="up">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem'
                }}
                className="case-study-split"
              >
                {/* Core Idea */}
                <TiltCard style={{ padding: '2.5rem', height: '100%' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                    What Is Daybook & The Core Idea
                  </h3>
                  <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    {project.shortDescription}
                  </p>
                  <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    {project.coreIdea.summary}
                  </p>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                    {project.coreIdea.comparison.detail}
                  </p>
                </TiltCard>

                {/* Plan vs Action Diagram */}
                <TiltCard
                  style={{
                    padding: '2.5rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'var(--code-bg)'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', width: '100%', maxWidth: '320px' }}>
                    <div
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        borderRadius: '10px',
                        color: 'var(--color-blue)',
                        fontWeight: 700,
                        letterSpacing: '0.05em'
                      }}
                    >
                      PLANNED INTENTION
                    </div>
                    <div style={{ padding: '1rem 0', color: 'var(--color-cyan)', fontSize: '1.5rem' }}>
                      ↓
                    </div>
                    <div
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        borderRadius: '10px',
                        color: 'var(--color-emerald)',
                        fontWeight: 700,
                        letterSpacing: '0.05em'
                      }}
                    >
                      ACTUAL ACTION
                    </div>
                    <div style={{ marginTop: '1.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      Execution Tracking & Divergence Analysis
                    </div>
                  </div>
                </TiltCard>
              </div>
            </FadeIn>

            {/* Core Features Grid */}
            <FadeIn direction="up">
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>
                  Core System Features
                </h3>
                <div className="grid-3">
                  {project.features.map((feat, fIdx) => (
                    <TiltCard key={fIdx} style={{ padding: '1.75rem' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(56, 189, 248, 0.1)',
                          color: 'var(--color-blue)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1rem'
                        }}
                      >
                        <Target size={18} />
                      </div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                        {feat.title}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        {feat.desc}
                      </p>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Planning Grade & Self Reflection */}
            <FadeIn direction="up">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem'
                }}
                className="case-study-split"
              >
                {/* Planning Grade */}
                <TiltCard style={{ padding: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                    <Award size={22} style={{ color: 'var(--color-violet)' }} />
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>The Planning Grade</h3>
                  </div>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {project.planningGrade}
                  </p>
                  <div
                    style={{
                      marginTop: '1.5rem',
                      padding: '1rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(139, 92, 246, 0.08)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      fontSize: '0.88rem',
                      color: 'var(--color-violet)'
                    }}
                  >
                    Provides actionable clarity without complex or convoluted formulas.
                  </div>
                </TiltCard>

                {/* Self Reflection */}
                <TiltCard style={{ padding: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                    <Activity size={22} style={{ color: 'var(--color-cyan)' }} />
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Self-Reflection</h3>
                  </div>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {project.selfReflection}
                  </p>
                  <div
                    style={{
                      marginTop: '1.5rem',
                      padding: '1rem',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(56, 189, 248, 0.08)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      fontSize: '0.88rem',
                      color: 'var(--color-blue)'
                    }}
                  >
                    Seeing your own actions objectively empowers true personal accountability.
                  </div>
                </TiltCard>
              </div>
            </FadeIn>

            {/* Philosophy Banner */}
            <FadeIn direction="up">
              <div
                className="glass-panel"
                style={{
                  padding: '3rem',
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, rgba(56, 189, 248, 0.06) 0%, rgba(139, 92, 246, 0.06) 100%)',
                  borderRadius: '20px',
                  border: '1px solid var(--border-highlight)'
                }}
              >
                <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--color-cyan)', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>
                  // PRODUCT PHILOSOPHY
                </div>
                <blockquote
                  style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
                    fontWeight: 700,
                    lineHeight: 1.4,
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  "{project.philosophy.motto}"
                </blockquote>
                <p
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--color-blue)',
                    fontWeight: 600
                  }}
                >
                  {project.philosophy.finalStatement}
                </p>
              </div>
            </FadeIn>

            {/* My Contribution & Outcome */}
            <FadeIn direction="up">
              <TiltCard style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>
                  Engineering Contribution & Status
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {project.myContribution}
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {project.outcome}
                </p>
              </TiltCard>
            </FadeIn>
          </div>
        ) : (
          /* =======================================================
              STANDARD CASE STUDY FOR ALL OTHER PROJECTS (SECTION 18)
             ======================================================= */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Overview & Purpose */}
            <FadeIn direction="up">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem'
                }}
                className="case-study-split"
              >
                <TiltCard style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>
                    Project Overview
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {project.overview || project.shortDescription}
                  </p>
                </TiltCard>

                <TiltCard style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>
                    Project Purpose & Objective
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {project.purpose || 'Designed to address core operational requirements with modular architecture and reliable execution.'}
                  </p>
                </TiltCard>
              </div>
            </FadeIn>

            {/* My Role & Development Approach */}
            <FadeIn direction="up">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem'
                }}
                className="case-study-split"
              >
                <TiltCard style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>
                    My Role & Responsibilities
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {project.myRole || 'Developed modules, structured components, and implemented communication pipelines.'}
                  </p>
                </TiltCard>

                <TiltCard style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>
                    Development Approach
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {project.developmentApproach || 'Employed scalable engineering best practices with strict separation of concerns.'}
                  </p>
                </TiltCard>
              </div>
            </FadeIn>

            {/* Key Features */}
            {project.keyFeatures && (
              <FadeIn direction="up">
                <TiltCard style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                    Key Architectural Features
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                    {project.keyFeatures.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          padding: '1rem',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(148, 163, 184, 0.05)',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        <CheckCircle2 size={18} style={{ color: 'var(--color-cyan)', flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </FadeIn>
            )}

            {/* Outcome */}
            {project.outcome && (
              <FadeIn direction="up">
                <TiltCard style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>
                    Project Outcome
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {project.outcome}
                  </p>
                </TiltCard>
              </FadeIn>
            )}
          </div>
        )}

        {/* Back to Projects Action Footer */}
        <div style={{ marginTop: '5rem', textAlign: 'center' }}>
          <Button to="/#projects" variant="primary" icon={ArrowLeft} iconPosition="left">
            Back to Projects Portfolio
          </Button>
        </div>
      </Container>

      <style>{`
        @media (max-width: 840px) {
          .case-study-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

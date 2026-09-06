import React from 'react';
import { ArrowDown, Mail, Download } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Button } from '../../components/common/Button';
import { SocialLinks } from '../../components/common/SocialLinks';
import { TerminalCard } from './TerminalCard';
import { FadeIn } from '../../components/animations/FadeIn';
import { useMouseParallax } from '../../hooks/useMouseParallax';

export const Hero = () => {
  const { normalizedX, normalizedY } = useMouseParallax();

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="site-container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.9fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* LEFT: Text & CTAs */}
          <div style={{ maxWidth: '620px' }}>
            <FadeIn direction="down" delay={0.05} immediate={true}>
              <div style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="badge-pill">
                  <span className="status-dot animate-status-pulse" />
                  {personalInfo.heroLabel}
                </span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  // Kerala, India
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.12} immediate={true}>
              <h1
                style={{
                  fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
                  fontWeight: 800,
                  lineHeight: 1.16,
                  letterSpacing: '-0.025em',
                  marginBottom: '1.25rem',
                  color: 'var(--text-primary)'
                }}
              >
                Building scalable digital experiences with{' '}
                <span className="gradient-text">React</span> &{' '}
                <span className="gradient-text-accent">.NET</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.18} immediate={true}>
              <p
                style={{
                  fontSize: 'clamp(0.98rem, 1.3vw, 1.08rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1.85rem'
                }}
              >
                {personalInfo.heroBio}
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn direction="up" delay={0.24} immediate={true}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.85rem',
                  alignItems: 'center',
                  marginBottom: '1.85rem'
                }}
              >
                <Button
                  onClick={() => handleScrollTo('projects')}
                  variant="primary"
                  icon={ArrowDown}
                >
                  View My Work
                </Button>

                <Button
                  onClick={() => handleScrollTo('contact')}
                  variant="secondary"
                  icon={Mail}
                >
                  Contact Me
                </Button>

                <Button
                  href={personalInfo.resumeUrl}
                  variant="outline"
                  icon={Download}
                  download="Akhilesh_P_Resume.pdf"
                >
                  Download CV
                </Button>
              </div>
            </FadeIn>

            {/* Social Links */}
            <FadeIn direction="up" delay={0.3} immediate={true}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <SocialLinks />
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Profile Photo & Floating Developer Terminal (Zero Overlap) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem',
              width: '100%',
              maxWidth: '390px',
              margin: '0 auto'
            }}
          >
            {/* Unobstructed Professional Portrait Showcase */}
            <FadeIn direction="left" delay={0.15} immediate={true}>
              <div
                style={{
                  position: 'relative',
                  transform: `translate(${(normalizedX * 5).toFixed(1)}px, ${(normalizedY * 5).toFixed(1)}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)'
                }}
              >
                {/* Clean Frame with Subtle Gradient Hairline */}
                <div
                  style={{
                    padding: '5px',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.45) 0%, rgba(139, 92, 246, 0.25) 50%, rgba(34, 211, 238, 0.45) 100%)',
                    boxShadow: '0 16px 36px -8px rgba(0, 0, 0, 0.75), 0 0 20px -5px rgba(56, 189, 248, 0.16)'
                  }}
                >
                  {/* Photo Container */}
                  <div
                    style={{
                      width: '210px',
                      height: '240px',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      backgroundColor: '#0c1220'
                    }}
                  >
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 10%',
                        display: 'block',
                        filter: 'brightness(1.06) contrast(1.04) saturate(1.03)',
                        imageRendering: '-webkit-optimize-contrast'
                      }}
                      onError={(e) => {
                        e.currentTarget.src = '/Akhilesh/Akhilesh.jpeg';
                      }}
                    />
                  </div>
                </div>

                {/* Refined Status Tag Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-11px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap',
                    backgroundColor: 'rgba(10, 15, 26, 0.95)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.6), 0 0 10px -2px rgba(16, 185, 129, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(8px)',
                    zIndex: 2
                  }}
                >
                  <span className="status-dot animate-status-pulse" />
                  <span style={{ color: '#f1f5f9', letterSpacing: '0.02em' }}>{personalInfo.status}</span>
                </div>
              </div>
            </FadeIn>

            {/* Interactive Developer Terminal Card */}
            <FadeIn direction="up" delay={0.25} immediate={true} style={{ width: '100%' }}>
              <TerminalCard />
            </FadeIn>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            margin: 0 auto;
          }
          .hero-grid .badge-pill {
            margin: 0 auto;
          }
          .hero-grid .btn-primary, .hero-grid .btn-secondary, .hero-grid .btn-outline {
            justify-content: center;
          }
          .hero-grid .social-icons-row {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

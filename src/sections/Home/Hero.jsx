import React from 'react';
import { ArrowDown, Mail, Download } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Button } from '../../components/common/Button';
import { SocialLinks } from '../../components/common/SocialLinks';
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
            gridTemplateColumns: '1.1fr 1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* LEFT: Text & CTAs */}
          <div style={{ maxWidth: '620px' }}>
            <FadeIn direction="up" delay={0.06} immediate={true}>
              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                  fontWeight: 800,
                  lineHeight: 1.18,
                  letterSpacing: '-0.025em',
                  marginBottom: '1.25rem',
                  color: 'var(--text-primary)'
                }}
              >
                Web Developer in{' '}
                <span className="gradient-text">Kozhikode, Kerala</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.14} immediate={true}>
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
            <FadeIn direction="up" delay={0.2} immediate={true}>
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
            <FadeIn direction="up" delay={0.26} immediate={true}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <SocialLinks />
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Hero Image filling the right side */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <FadeIn direction="left" delay={0.15} immediate={true} style={{ width: '100%' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '560px',
                  margin: '0 auto',
                  transform: `translate(${(normalizedX * 5).toFixed(1)}px, ${(normalizedY * 5).toFixed(1)}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)'
                }}
              >
                {/* Ambient glow accent behind image */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.32) 0%, rgba(124, 45, 18, 0.25) 50%, rgba(253, 186, 116, 0.22) 100%)',
                    filter: 'blur(22px)',
                    zIndex: 0,
                    opacity: 0.85
                  }}
                  aria-hidden="true"
                />

                {/* Hero Image Container */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '20px',
                    padding: '3px',
                    background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.5) 0%, rgba(124, 45, 18, 0.38) 50%, rgba(253, 186, 116, 0.45) 100%)',
                    boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.85), 0 0 28px -5px rgba(249, 115, 22, 0.22)'
                  }}
                >
                  <div
                    style={{
                      borderRadius: '17px',
                      overflow: 'hidden',
                      backgroundColor: 'var(--bg-card, #111111)',
                      aspectRatio: '1536 / 1024',
                      width: '100%'
                    }}
                  >
                    <img
                      src="/Akhilesh/hero_image.png"
                      alt="Akhilesh P - Web Developer in Kozhikode, Kerala"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        filter: 'brightness(1.02) contrast(1.02)'
                      }}
                      onError={(e) => {
                        e.currentTarget.src = '/Akhilesh/Akhilesh.jpeg';
                      }}
                    />
                  </div>
                </div>
              </div>
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

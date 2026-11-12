import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { socialLinks } from '../../data/socialLinks';
import { Button } from '../../components/common/Button';
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  WhatsappIcon
} from '../../components/common/BrandIcons';
import { FadeIn } from '../../components/animations/FadeIn';
import './Hero.css';

const SOCIAL_ICON_MAP = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  MessageCircle: WhatsappIcon,
  Instagram: InstagramIcon,
  Mail: Mail
};

export const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-split">
          {/* Left Content Area */}
          <div className="hero-content">
            <FadeIn direction="up" delay={0.04} distance={14} duration={0.45} immediate={true}>
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-item">
                  <svg
                    className="hero-eyebrow-icon"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />
                  </svg>
                  <span>FULL-STACK DEVELOPER</span>
                </span>
                <span className="hero-eyebrow-sep" aria-hidden="true">·</span>
                <span className="hero-eyebrow-item">
                  <svg
                    className="hero-eyebrow-icon"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>MALAPPURAM, KERALA</span>
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.09} distance={14} duration={0.45} immediate={true}>
              <h1 className="hero-title">
                Building{' '}
                <span className="gradient-text">Digital Experiences</span>{' '}
                That Make a Difference.
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.14} distance={14} duration={0.45} immediate={true}>
              <p className="hero-subheadline">
                Code. Business. Innovation.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.18} distance={14} duration={0.45} immediate={true}>
              <p className="hero-description">
                I'm Akhilesh P., a Full-Stack Developer who transitioned from finance and accounting into technology. Combining financial expertise with software development, I build ERP systems, responsive web applications, and AI-powered solutions using ASP.NET Core, Django, and React to solve real-world business challenges.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.22} distance={14} duration={0.45} immediate={true}>
              <div className="hero-actions">
                <Button
                  onClick={() => handleScrollTo('projects')}
                  variant="primary"
                  icon={ArrowRight}
                >
                  Explore My Work
                </Button>

                <Button
                  href={personalInfo.resumeUrl}
                  variant="outline"
                  icon={Download}
                  download="Akhilesh_P_Resume_2026.pdf"
                >
                  Download CV
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.26} distance={12} duration={0.45} immediate={true}>
              <nav className="hero-socials" aria-label="Social links">
                {socialLinks.map((item) => {
                  const Icon = SOCIAL_ICON_MAP[item.icon] || Mail;
                  const isExternal = item.url.startsWith('http');
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      aria-label={item.name}
                      title={item.name}
                      className="hero-social-link"
                    >
                      <Icon size={19} />
                    </a>
                  );
                })}
              </nav>
            </FadeIn>
          </div>

          {/* Right Image Area */}
          <div className="hero-media">
            <FadeIn
              direction="up"
              delay={0.12}
              distance={16}
              duration={0.5}
              immediate={true}
            >
              <div className="hero-frame-wrap">
                <div className="hero-frame-glow" aria-hidden="true" />
                <div className="hero-frame">
                  <img
                    src="/Akhilesh/hero-portrait.webp"
                    alt="Akhilesh P., Software Developer in Kozhikode, Kerala"
                    className="hero-photo"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.dataset.fallbackStep) {
                        img.dataset.fallbackStep = '1';
                        img.src = '/Akhilesh/hero_image.png';
                      } else if (img.dataset.fallbackStep === '1') {
                        img.dataset.fallbackStep = '2';
                        img.src = '/Akhilesh/Akhilesh.jpeg';
                      }
                    }}
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { personalInfo } from '../../data/personal';
import { SocialLinks } from './SocialLinks';
import { Code2, ArrowUp } from 'lucide-react';
import { MagneticButton } from '../animations/MagneticButton';

const FOOTER_SECTION_LINKS = [
  { label: 'About Me', id: 'about', path: '/#about' },
  { label: 'Experience', id: 'experience', path: '/#experience' },
  { label: 'Tech Stack', id: 'skills', path: '/#skills' },
  { label: 'Featured Work', id: 'projects', path: '/#projects' },
  { label: 'Contact', id: 'contact', path: '/#contact' }
];

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (e, item) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(item.path);
      return;
    }
    const element = document.getElementById(item.id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-secondary)',
        paddingTop: '4rem',
        paddingBottom: '3rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '380px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontWeight: 800,
                fontSize: '1.25rem',
                marginBottom: '0.6rem'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Code2 size={18} />
              </div>
              <span>{personalInfo.name}</span>
            </div>
            <div style={{ color: 'var(--color-blue)', fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.5rem' }}>
              {personalInfo.title}
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Full-stack web developer focused on React.js, Python Django, ASP.NET Core ERP systems, and practical AI integrations.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {FOOTER_SECTION_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => handleSectionClick(e, item)}
                  style={{ transition: 'var(--transition-smooth)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Social Icons */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Connect
            </div>
            <SocialLinks />
            <div style={{ marginTop: '1.2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {personalInfo.location} • Available for opportunities
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>

          <MagneticButton pullFactor={0.3}>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.9rem',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
};

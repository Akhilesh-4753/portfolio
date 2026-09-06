import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const NAV_ITEMS = [
  { label: 'Home', id: 'home', path: '/' },
  { label: 'About', id: 'about', path: '/#about' },
  { label: 'Experience', id: 'experience', path: '/#experience' },
  { label: 'Skills', id: 'skills', path: '/#skills' },
  { label: 'Projects', id: 'projects', path: '/#projects' },
  { label: 'Services', id: 'services', path: '/#services' },
  { label: 'Contact', id: 'contact', path: '/#contact' }
];

export const NavLinks = ({ activeSection, onItemClick, isMobile = false }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (e, item) => {
    e.preventDefault();
    if (onItemClick) onItemClick();

    if (location.pathname !== '/') {
      navigate(item.path);
      return;
    }

    if (item.id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <ul
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? '1.2rem' : '0.4rem',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === '/' && activeSection === item.id;
        return (
          <li key={item.id} style={{ width: isMobile ? '100%' : 'auto' }}>
            <a
              href={item.path}
              onClick={(e) => handleNav(e, item)}
              style={{
                display: 'block',
                padding: isMobile ? '0.7rem 1rem' : '0.45rem 0.9rem',
                borderRadius: '8px',
                fontSize: isMobile ? '1.1rem' : '0.88rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--color-blue)' : 'var(--text-secondary)',
                backgroundColor: isActive && !isMobile ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

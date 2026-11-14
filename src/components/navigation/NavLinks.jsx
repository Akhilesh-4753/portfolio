import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

export const NAV_ITEMS = [
  { label: 'Home', id: 'home', path: '/' },
  { label: 'About', id: 'about', path: '/#about' },
  { label: 'Experience', id: 'experience', path: '/#experience' },
  { label: 'Skills', id: 'skills', path: '/#skills' },
  { label: 'Projects', id: 'projects', path: '/#projects' },
  { label: 'Services', id: 'services', path: '/#services' },
  { label: 'Contact', id: 'contact', path: '/#contact' }
];

export const NavLinks = ({
  activeSection,
  onSelectSection,
  onItemClick,
  isMobile = false
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollTo } = useSmoothScroll();

  const handleNav = (e, item) => {
    e.preventDefault();

    // 1. Immediately apply optimistic active state before scroll or transition begins
    if (onSelectSection) {
      onSelectSection(item.id);
    }
    if (onItemClick) {
      onItemClick();
    }

    // 2. Cross-route transition handling
    if (location.pathname !== '/' && !NAV_ITEMS.some((nav) => nav.path === location.pathname)) {
      navigate(item.path);
      return;
    }

    // 3. Inertia smooth-scroll with offset
    if (item.id === 'home') {
      scrollTo(0, { duration: 1.4 });
      return;
    }

    scrollTo('#' + item.id, { offset: -80, duration: 1.4 });
  };

  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? '0.6rem' : '0.4rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        width: isMobile ? '100%' : 'auto'
      }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        const linkClass = isMobile
          ? `nav-link-mobile ${isActive ? 'is-active' : ''}`
          : `nav-link-item ${isActive ? 'is-active' : ''}`;

        return (
          <li key={item.id} style={{ width: isMobile ? '100%' : 'auto' }}>
            <a
              href={item.path}
              onClick={(e) => handleNav(e, item)}
              className={linkClass}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

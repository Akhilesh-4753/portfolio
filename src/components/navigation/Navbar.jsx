import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { NavLinks, NAV_ITEMS } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import './Navbar.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollTo } = useSmoothScroll();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#home');
      return;
    }
    scrollTo(0, { duration: 1.4 });
  };

  useEffect(() => {
    let rafId = null;

    const updateNavOnScroll = () => {
      rafId = null;
      const y = window.scrollY;
      const nextScrolled = y > 20;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));

      if (location.pathname === '/') {
        const scrollPosition = y + 120;
        let nextActive = 'home';

        if (y >= 200) {
          for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
            const item = NAV_ITEMS[i];
            const element = document.getElementById(item.id);
            if (element && scrollPosition >= element.offsetTop) {
              nextActive = item.id;
              break;
            }
          }
        }

        setActiveSection((prev) => (prev === nextActive ? prev : nextActive));
      }
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateNavOnScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [location.pathname]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          backgroundColor: scrolled ? 'var(--bg-glass-nav)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease'
        }}
      >
        <div
          className="site-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px'
          }}
        >
          {/* Logo */}
          <a
            href="/"
            className="lg-link"
            aria-label="Akhilesh P, full-stack developer, home"
            onClick={handleLogoClick}
          >
            <span className="lg-tile" aria-hidden="true">
              <svg
                className="lg-icon"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />
              </svg>
            </span>
            <span className="lg-text">
              <span className="lg-name">Akhilesh P</span>
              <span className="lg-role">FULL-STACK DEVELOPER</span>
            </span>
          </a>

          {/* Desktop Nav Items (Aligned to the right on desktop) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center'
            }}
            className="desktop-nav"
          >
            <NavLinks activeSection={activeSection} />
          </nav>

          {/* Mobile Hamburger Toggle (only visible on mobile < 900px) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="mobile-hamburger"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { NavLinks, NAV_ITEMS } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import './Navbar.css';

// Helper to resolve active nav section from URL pathname segments or hash
export const resolveCurrentSection = (pathname = '', hash = '') => {
  // 1. If a hash is present, check if it matches a valid section (e.g. /#about, /#projects)
  const hashTarget = hash.replace(/^#/, '');
  if (hashTarget && NAV_ITEMS.some((item) => item.id === hashTarget)) {
    return hashTarget;
  }

  // 2. Extract path segments (e.g. '/projects/inkspace' -> ['projects', 'inkspace'])
  const segments = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  const firstSegment = segments[0] || '';

  // 3. Match against non-home NAV_ITEMS by root segment (e.g. /projects and /projects/:slug -> 'projects')
  if (firstSegment) {
    const matchedItem = NAV_ITEMS.find(
      (item) => item.id !== 'home' && (item.id === firstSegment || item.path.replace(/^\/+|\/+$/g, '') === firstSegment)
    );
    if (matchedItem) {
      return matchedItem.id;
    }
  }

  // 4. Exact Home route only ('/' with no non-home hash)
  if (pathname === '/' || pathname === '') {
    return 'home';
  }

  // 5. No fallback to home on 404 or unknown routes
  return null;
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollTo } = useSmoothScroll();

  // Initialize active state synchronously from current URL
  const [activeSection, setActiveSection] = useState(() =>
    resolveCurrentSection(
      location.pathname || (typeof window !== 'undefined' ? window.location.pathname : '/'),
      location.hash || (typeof window !== 'undefined' ? window.location.hash : '')
    )
  );

  const isScrollLockedRef = useRef(false);
  const lockTimerRef = useRef(null);

  // Optimistic active section selection with scroll lock
  const handleSelectSection = useCallback((sectionId) => {
    setActiveSection(sectionId);
    isScrollLockedRef.current = true;

    if (lockTimerRef.current) {
      clearTimeout(lockTimerRef.current);
    }

    // Lock scroll-based detection for the duration of the 1.4s smooth scroll
    lockTimerRef.current = setTimeout(() => {
      isScrollLockedRef.current = false;
    }, 1450);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    handleSelectSection('home');
    if (location.pathname !== '/') {
      navigate('/#home');
      return;
    }
    scrollTo(0, { duration: 1.4 });
  };

  // Synchronize active section with URL changes, hash links, and browser back/forward
  useEffect(() => {
    const next = resolveCurrentSection(location.pathname, location.hash);
    setActiveSection(next);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handlePopState = () => {
      const next = resolveCurrentSection(window.location.pathname, window.location.hash);
      setActiveSection(next);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll detection for manual scrolling (locked during programmatic clicks)
  useEffect(() => {
    let rafId = null;

    const updateNavOnScroll = () => {
      rafId = null;
      const y = window.scrollY;
      const nextScrolled = y > 20;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));

      // Skip scroll-based recalculation while smooth-scroll lock is active
      if (isScrollLockedRef.current) {
        return;
      }

      const isHomeOrSection =
        location.pathname === '/' ||
        NAV_ITEMS.some((item) => '/' + item.id === location.pathname);

      if (isHomeOrSection) {
        const scrollPosition = y + 140;
        let nextActive = 'home';

        if (y >= 150) {
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
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
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
            <NavLinks
              activeSection={activeSection}
              onSelectSection={handleSelectSection}
            />
          </nav>

          {/* Mobile Hamburger Toggle (only visible on mobile < 900px) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="mobile-hamburger"
            style={{
              width: '44px',
              height: '44px',
              minWidth: '44px',
              minHeight: '44px',
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
        onSelectSection={handleSelectSection}
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

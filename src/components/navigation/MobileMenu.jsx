import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { SocialLinks } from '../common/SocialLinks';

export const MobileMenu = ({ isOpen, onClose, activeSection }) => {
  // Prevent background scrolling when slide menu is open
  useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100dvh',
            backgroundColor: 'var(--bg-secondary)',
            zIndex: 999,
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-lg)',
            boxSizing: 'border-box',
            overflowY: 'auto',
            overscrollBehavior: 'contain'
          }}
        >
          <div>
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '2rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                <span className="gradient-text">Akhilesh P</span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close menu"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  padding: '0.4rem'
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Column-wise Navigation Links */}
            <nav style={{ width: '100%' }}>
              <NavLinks
                isMobile={true}
                activeSection={activeSection}
                onItemClick={onClose}
              />
            </nav>
          </div>

          {/* Bottom Controls */}
          <div
            style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}
          >
            <SocialLinks />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

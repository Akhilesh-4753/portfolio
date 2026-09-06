import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { SocialLinks } from '../common/SocialLinks';

export const MobileMenu = ({ isOpen, onClose, activeSection }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(6px)',
              zIndex: 998
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '85%',
              maxWidth: '340px',
              backgroundColor: 'var(--bg-secondary)',
              borderLeft: '1px solid var(--border-subtle)',
              zIndex: 999,
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-lg)'
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

              {/* Links */}
              <NavLinks
                isMobile={true}
                activeSection={activeSection}
                onItemClick={onClose}
              />
            </div>

            {/* Bottom Controls */}
            <div
              style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem'
              }}
            >
              <SocialLinks />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

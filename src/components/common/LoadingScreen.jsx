import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

const BOOT_LOGS = [
  'Initializing Akhilesh.dev workspace...',
  '> Loading React components & hooks...',
  '> Initializing ASP.NET Core & REST endpoints...',
  '> Synchronizing experience timeline...',
  '> Loading production projects & case studies...',
  '> System ready. Launching workspace.'
];

export const LoadingScreen = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if session was already loaded to avoid annoying re-runs on route changes
    const hasLoaded = sessionStorage.getItem('akhilesh_has_loaded');
    if (hasLoaded) {
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < BOOT_LOGS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem('akhilesh_has_loaded', 'true');
            setTimeout(() => onComplete?.(), 500);
          }, 350);
          return prev;
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'var(--bg-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              backgroundColor: 'var(--code-bg)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            {/* Terminal Top Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                backgroundColor: 'var(--terminal-header)',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Terminal size={14} />
                <span>akhilesh@developer: ~</span>
              </div>
              <div style={{ width: '40px' }} />
            </div>

            {/* Terminal Body */}
            <div
              style={{
                padding: '1.25rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.86rem',
                minHeight: '190px'
              }}
            >
              {BOOT_LOGS.slice(0, currentLine + 1).map((log, i) => (
                <div
                  key={i}
                  style={{
                    color: i === currentLine ? 'var(--color-cyan)' : 'var(--text-secondary)',
                    marginBottom: '0.45rem'
                  }}
                >
                  {log}
                </div>
              ))}
              <span className="animate-cursor-blink" style={{ color: 'var(--color-blue)' }}>▋</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const COMMAND_SEQUENCE = [
  { cmd: 'whoami', output: 'Akhilesh P' },
  { cmd: 'role', output: 'Software Developer' },
  { cmd: 'stack', output: 'React.js · ASP.NET Core · REST APIs · SQL' },
  { cmd: 'status', output: '● Building real-world software', isStatus: true }
];

export const TerminalCard = () => {
  const [displayedStep, setDisplayedStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedStep((prev) => (prev < COMMAND_SEQUENCE.length ? prev + 1 : prev));
    }, 900);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="glass-panel"
      style={{
        borderRadius: '14px',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-md)',
        backgroundColor: 'var(--code-bg)'
      }}
    >
      {/* Terminal Top Window Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 1rem',
          backgroundColor: 'var(--terminal-header)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <Terminal size={13} />
          <span>akhilesh@developer: ~</span>
        </div>
        <div style={{ width: '35px' }} />
      </div>

      {/* Terminal Content */}
      <div
        style={{
          padding: '1.25rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          lineHeight: 1.7
        }}
      >
        {COMMAND_SEQUENCE.slice(0, displayedStep).map((item, idx) => (
          <div key={idx} style={{ marginBottom: '0.65rem' }}>
            <div style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--color-cyan)' }}>&gt;</span> {item.cmd}
            </div>
            {Array.isArray(item.output) ? (
              <div style={{ paddingLeft: '0.75rem', color: 'var(--text-primary)' }}>
                {item.output.map((line, i) => (
                  <div key={i} style={{ color: 'var(--text-secondary)' }}>
                    • {line}
                  </div>
                ))}
              </div>
            ) : item.isStatus ? (
              <div
                style={{
                  paddingLeft: '0.75rem',
                  color: 'var(--color-emerald)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <span className="status-dot animate-status-pulse" />
                <span>{item.output.replace('● ', '')}</span>
              </div>
            ) : (
              <div style={{ paddingLeft: '0.75rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                {item.output}
              </div>
            )}
          </div>
        ))}
        {displayedStep < COMMAND_SEQUENCE.length && (
          <span className="animate-cursor-blink" style={{ color: 'var(--color-cyan)' }}>
            ▋
          </span>
        )}
      </div>
    </div>
  );
};

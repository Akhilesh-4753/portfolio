import React, { useRef, useState } from 'react';
import { FileSpreadsheet, Landmark, Terminal, Layers, Wrench } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const CATEGORY_ICONS = {
  FileSpreadsheet,
  Landmark,
  Terminal,
  Layers,
  Wrench
};

/**
 * Renders a single rounded skill pill badge with subtle orange/amber indicator.
 */
const SkillBadge = ({ label, accentColor }) => (
  <span className="skill-marquee-badge">
    <span
      style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: accentColor,
        boxShadow: `0 0 8px ${accentColor}88`,
        flexShrink: 0
      }}
      aria-hidden="true"
    />
    <span>{label}</span>
  </span>
);

/**
 * Seamless horizontal marquee row for a skill category.
 * Supports LTR/RTL directions, hover pause, tap-to-pause on touch devices,
 * and static wrapped layout when prefers-reduced-motion is enabled.
 */
export const SkillMarqueeRow = ({ category, direction = 'rtl' }) => {
  const prefersReducedMotion = useReducedMotion();
  const [isTouchPaused, setIsTouchPaused] = useState(false);
  const pointerStartRef = useRef(null);

  const Icon = CATEGORY_ICONS[category.icon] || Layers;
  const isLtr = direction === 'ltr';
  const accentColor = isLtr ? '#FDBA74' : '#F97316';

  // Ensure each half-track is wide enough (> ~16 badges) to prevent gaps on ultra-wide viewports
  const repeatCount = Math.max(1, Math.ceil(16 / category.skills.length));
  const halfTrackBatches = Array.from({ length: repeatCount }, (_, batchIdx) => batchIdx);

  const handlePointerDown = (e) => {
    if (e.pointerType === 'touch') {
      pointerStartRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handlePointerUp = (e) => {
    if (e.pointerType === 'touch' && pointerStartRef.current) {
      const dx = Math.abs(e.clientX - pointerStartRef.current.x);
      const dy = Math.abs(e.clientY - pointerStartRef.current.y);
      if (dx < 8 && dy < 8) {
        setIsTouchPaused((prev) => !prev);
      }
      pointerStartRef.current = null;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
      {/* Sub-category Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              backgroundColor: 'rgba(249, 115, 22, 0.12)',
              border: '1px solid rgba(249, 115, 22, 0.25)',
              color: 'var(--color-blue)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Icon size={15} />
          </span>
          <h4
            style={{
              fontSize: '0.96rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              margin: 0
            }}
          >
            {category.title}
          </h4>
        </div>

        <span
          style={{
            fontSize: '0.73rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)'
          }}
        >
          {category.skills.length} skills
        </span>
      </div>

      {/* Reduced-motion accessible fallback: clean static flex-wrap */}
      {prefersReducedMotion ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            padding: '0.25rem 0'
          }}
        >
          {category.skills.map((skill) => (
            <SkillBadge key={skill} label={skill} accentColor={accentColor} />
          ))}
        </div>
      ) : (
        <div
          className={`marquee-viewport${isTouchPaused ? ' is-paused' : ''}`}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStartRef.current = null;
          }}
          role="region"
          aria-label={category.title}
          style={{ padding: '0.25rem 0' }}
        >
          <div
            className={`marquee-track ${isLtr ? 'marquee-track-ltr' : 'marquee-track-rtl'}`}
            style={{
              animationDuration: `${category.durationSeconds || 40}s`
            }}
          >
            {[0, 1].map((halfIdx) => (
              <div
                key={`half-${halfIdx}`}
                aria-hidden={halfIdx === 1 ? 'true' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  paddingRight: '0.75rem',
                  flexShrink: 0
                }}
              >
                {halfTrackBatches.map((batchIdx) => (
                  <div
                    key={`${halfIdx}-${batchIdx}`}
                    aria-hidden={halfIdx === 0 && batchIdx > 0 ? 'true' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      flexShrink: 0
                    }}
                  >
                    {category.skills.map((skill) => (
                      <SkillBadge
                        key={`${halfIdx}-${batchIdx}-${skill}`}
                        label={skill}
                        accentColor={accentColor}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

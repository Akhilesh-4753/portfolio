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
 * Supports interactive selection with pause and highlight.
 */
const SkillBadge = ({ label, accentColor, isSelected, onToggle }) => (
  <button
    type="button"
    className={`skill-marquee-badge${isSelected ? ' is-selected' : ''}`}
    onClick={(e) => {
      e.stopPropagation();
      onToggle(label);
    }}
    aria-pressed={isSelected}
    aria-label={label}
  >
    <span
      style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: isSelected ? '#F97316' : accentColor,
        boxShadow: isSelected ? '0 0 10px #F97316' : `0 0 8px ${accentColor}88`,
        flexShrink: 0,
        transition: 'background-color 0.2s ease, box-shadow 0.2s ease'
      }}
      aria-hidden="true"
    />
    <span>{label}</span>
  </button>
);

/**
 * Seamless horizontal marquee row for a skill category.
 * Supports LTR/RTL directions, hover pause, tap-to-pause on touch devices,
 * and static wrapped layout when prefers-reduced-motion is enabled.
 */
export const SkillMarqueeRow = ({ category, direction = 'rtl' }) => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const lastToggleTimeRef = useRef(0);

  const Icon = CATEGORY_ICONS[category.icon] || Layers;
  const isLtr = direction === 'ltr';
  const accentColor = isLtr ? '#FDBA74' : '#F97316';
  const isPaused = Boolean(selectedSkill);

  // Ensure each half-track is wide enough (> ~16 badges) to prevent gaps on ultra-wide viewports
  const repeatCount = Math.max(1, Math.ceil(16 / category.skills.length));
  const halfTrackBatches = Array.from({ length: repeatCount }, (_, batchIdx) => batchIdx);

  const handleSkillToggle = (skillName) => {
    const now = Date.now();
    // Guard against accidental double-firing on touch devices (pointerup followed by synthetic click)
    if (now - lastToggleTimeRef.current < 260) {
      return;
    }
    lastToggleTimeRef.current = now;

    setSelectedSkill((prev) => {
      if (prev === skillName) {
        // Deselecting: remove focus so mobile browsers don't retain focus outline/styling
        if (typeof document !== 'undefined' && document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
        return null;
      }
      return skillName;
    });
  };

  const handleViewportClick = (e) => {
    // If user clicks outside any badge on the track/viewport background, clear selection and resume
    if (selectedSkill && (e.target === e.currentTarget || e.target.classList.contains('marquee-track'))) {
      if (typeof document !== 'undefined' && document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
      }
      setSelectedSkill(null);
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
            <SkillBadge
              key={skill}
              label={skill}
              accentColor={accentColor}
              isSelected={selectedSkill === skill}
              onToggle={handleSkillToggle}
            />
          ))}
        </div>
      ) : (
        <div
          className={`marquee-viewport${isPaused ? ' is-paused' : ''}`}
          onClick={handleViewportClick}
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
                        isSelected={selectedSkill === skill}
                        onToggle={handleSkillToggle}
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

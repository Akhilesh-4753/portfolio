import React from 'react';

export const Badge = ({
  children,
  variant = 'blue',
  showDot = false,
  className = '',
  style = {}
}) => {
  return (
    <div
      className={`badge-pill ${className}`}
      style={{
        ...(variant === 'emerald' && {
          background: 'rgba(16, 185, 129, 0.1)',
          color: 'var(--color-emerald)',
          borderColor: 'rgba(16, 185, 129, 0.25)'
        }),
        ...(variant === 'violet' && {
          background: 'rgba(139, 92, 246, 0.1)',
          color: 'var(--color-violet)',
          borderColor: 'rgba(139, 92, 246, 0.25)'
        }),
        ...style
      }}
    >
      {showDot && (
        <span
          className="status-dot animate-status-pulse"
          style={{
            marginRight: '0.2rem',
            ...(variant === 'violet' && { backgroundColor: 'var(--color-violet)', boxShadow: '0 0 8px var(--color-violet)' })
          }}
        />
      )}
      {children}
    </div>
  );
};

import React from 'react';

const CODE_FRAGMENTS = [
  { text: 'const developer = "Akhilesh";', top: '14%', left: '3%', delay: '0s', duration: '20s' },
  { text: '<ReactComponent />', top: '18%', left: '88%', delay: '2s', duration: '22s' },
  { text: 'GET /api/projects → 200 OK', top: '48%', left: '2%', delay: '4s', duration: '24s' },
  { text: 'git commit -m "feat: ERP modules"', top: '62%', left: '86%', delay: '1s', duration: '22s' },
  { text: 'ASP.NET Core MVC', top: '78%', left: '3%', delay: '3s', duration: '25s' },
  { text: 'npm run build --prod', top: '82%', left: '84%', delay: '5s', duration: '20s' },
  { text: 'POST /api/contact [200 OK]', top: '92%', left: '5%', delay: '2.5s', duration: '26s' },
  { text: 'SELECT * FROM Modules WHERE Active=1', top: '34%', left: '88%', delay: '3.5s', duration: '23s' }
];

export const CodeBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {CODE_FRAGMENTS.map((item, idx) => (
        <span
          key={idx}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            opacity: 0.12,
            userSelect: 'none',
            whiteSpace: 'nowrap',
            animation: `code-drift ${item.duration} ease-in-out infinite`,
            animationDelay: item.delay
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
};

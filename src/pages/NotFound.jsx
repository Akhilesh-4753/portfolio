import React from 'react';
import { ArrowLeft, Terminal } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';

export const NotFound = () => {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 0'
      }}
    >
      <Container>
        <div
          className="glass-panel"
          style={{
            maxWidth: '560px',
            margin: '0 auto',
            padding: '3rem',
            textAlign: 'center',
            borderRadius: '20px'
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}
          >
            <Terminal size={28} />
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              color: 'var(--color-cyan)',
              marginBottom: '0.5rem'
            }}
          >
            HTTP 404 // ROUTE_NOT_FOUND
          </div>

          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            Page Not Found
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            The component or route you are searching for does not exist or has been refactored.
          </p>

          <Button to="/" variant="primary" icon={ArrowLeft} iconPosition="left">
            Return to Digital Workspace
          </Button>
        </div>
      </Container>
    </div>
  );
};

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/common/Footer';
import { GridBackground } from '../components/background/GridBackground';
import { CodeBackground } from '../components/background/CodeBackground';
import { MouseGlow } from '../components/background/MouseGlow';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const MainLayout = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Scroll Progress Bar at the Top */}
      <div
        className="scroll-progress-bar"
        style={{
          transform: `scaleX(${scrollProgress})`
        }}
        aria-hidden="true"
      />

      {/* Dynamic Backgrounds */}
      <GridBackground />
      <CodeBackground />
      <MouseGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main style={{ flex: 1, position: 'relative', zIndex: 10 }}>
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

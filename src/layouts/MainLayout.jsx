import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/common/Footer';
import { AIButton } from '../components/common/AIButton';
import { CinematicBackground } from '../components/background/CinematicBackground';
import { CodeBackground } from '../components/background/CodeBackground';
import { MouseGlow } from '../components/background/MouseGlow';

function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const updateProgress = () => {
      rafId = null;
      const bar = barRef.current;
      if (!bar) return;
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? Math.min(1, Math.max(0, totalScroll / windowHeight)) : 0;
      bar.style.transform = `scaleX(${progress.toFixed(4)})`;
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress-bar"
      style={{ transform: 'scaleX(0)' }}
      aria-hidden="true"
    />
  );
}

export const MainLayout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Scroll Progress Bar at the Top */}
      <ScrollProgressBar />

      {/* Dynamic Cinematic Backgrounds */}
      <CinematicBackground />
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

      {/* Floating AI Assistant Launcher */}
      <AIButton />
    </div>
  );
};

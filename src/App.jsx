import React, { useEffect, useRef } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { AppRoutes } from './routes/AppRoutes';
import { getSeoForPath } from './data/seo';

function AnalyticsTracker() {
  const location = useLocation();
  const lastTrackedRef = useRef(null);

  useEffect(() => {
    const pagePath = location.pathname + location.search + location.hash;
    if (lastTrackedRef.current === pagePath) return undefined;

    const rafId = window.requestAnimationFrame(() => {
      lastTrackedRef.current = pagePath;
      const resolvedTitle = getSeoForPath(location.pathname)?.title || document.title;
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_path: pagePath,
          page_location: window.location.href,
          page_title: resolvedTitle
        });
      }
    });

    return () => window.cancelAnimationFrame(rafId);
  }, [location.pathname, location.search, location.hash]);

  return null;
}

export function AppShell({ projectDetailsPage, notFound } = {}) {
  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation} strict>
        <AnalyticsTracker />
        <AppRoutes projectDetailsPage={projectDetailsPage} notFound={notFound} />
      </LazyMotion>
    </ThemeProvider>
  );
}

export function App({ projectDetailsPage, notFound } = {}) {
  return (
    <BrowserRouter>
      <AppShell projectDetailsPage={projectDetailsPage} notFound={notFound} />
    </BrowserRouter>
  );
}

export default App;

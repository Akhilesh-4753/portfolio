import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';

const LazyProjectDetailsPage = lazy(() =>
  import('../pages/ProjectDetailsPage').then((mod) => ({ default: mod.ProjectDetailsPage }))
);
const LazyNotFound = lazy(() =>
  import('../pages/NotFound').then((mod) => ({ default: mod.NotFound }))
);

function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem'
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.88rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.04em'
        }}
      >
        Loading view...
      </div>
    </div>
  );
}

export const AppRoutes = ({ projectDetailsPage: SyncProjectDetailsPage, notFound: SyncNotFound } = {}) => {
  const ProjectDetailsRoute = SyncProjectDetailsPage || LazyProjectDetailsPage;
  const NotFoundRoute = SyncNotFound || LazyNotFound;

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        {/* Semantic section routes rendering HomePage directly with target section */}
        <Route path="/about" element={<HomePage targetSection="about" />} />
        <Route path="/experience" element={<HomePage targetSection="experience" />} />
        <Route path="/skills" element={<HomePage targetSection="skills" />} />
        <Route path="/projects" element={<HomePage targetSection="projects" />} />
        <Route path="/services" element={<HomePage targetSection="services" />} />
        <Route path="/contact" element={<HomePage targetSection="contact" />} />

        {/* Dedicated Project Detail Case Studies */}
        <Route
          path="/projects/:slug"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ProjectDetailsRoute />
            </Suspense>
          }
        />

        {/* Fallback 404 */}
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <NotFoundRoute />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

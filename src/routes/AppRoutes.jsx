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

        {/* Semantic section aliases pointing to home page with section anchors */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/experience" element={<Navigate to="/#experience" replace />} />
        <Route path="/skills" element={<Navigate to="/#skills" replace />} />
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route path="/services" element={<Navigate to="/#services" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />

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

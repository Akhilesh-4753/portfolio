import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { ProjectDetailsPage } from '../pages/ProjectDetailsPage';
import { NotFound } from '../pages/NotFound';

export const AppRoutes = () => {
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
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />

        {/* Fallback 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

import React, { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppShell } from './App.jsx';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { getSeoForPath, renderSeoHeadHtml } from './data/seo.js';

export function render(url) {
  const appHtml = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell projectDetailsPage={ProjectDetailsPage} notFound={NotFound} />
      </StaticRouter>
    </StrictMode>
  );

  const seo = getSeoForPath(url);
  const headHtml = renderSeoHeadHtml(seo);

  return { appHtml, headHtml, seo };
}

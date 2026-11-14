import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ensureChatbotInit } from './components/chatbot/loadChatbot.js';

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const rootElement = document.getElementById('root');
const ssrPath = rootElement.getAttribute('data-ssr-path');
const normalizePath = (value) => (value && value !== '/' ? value.replace(/\/+$/, '') : '/');
const currentPath = normalizePath(window.location.pathname);
const canHydrate =
  Boolean(rootElement.firstElementChild) &&
  ssrPath !== null &&
  normalizePath(ssrPath) === currentPath;

async function bootstrap() {
  let projectDetailsPage;
  let notFound;

  if (canHydrate && currentPath.startsWith('/projects/')) {
    const mod = await import('./pages/ProjectDetailsPage.jsx');
    projectDetailsPage = mod.ProjectDetailsPage;
  } else if (canHydrate && currentPath === '/404') {
    const mod = await import('./pages/NotFound.jsx');
    notFound = mod.NotFound;
  }

  const appTree = (
    <StrictMode>
      <App projectDetailsPage={projectDetailsPage} notFound={notFound} />
    </StrictMode>
  );

  if (canHydrate) {
    hydrateRoot(rootElement, appTree);
  } else {
    createRoot(rootElement).render(appTree);
  }

  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(() => {
      void ensureChatbotInit();
    }, { timeout: 2500 });
  } else {
    window.setTimeout(() => {
      void ensureChatbotInit();
    }, 1500);
  }
}

void bootstrap();

import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import './components/chatbot/chatbot.css';
import App from './App.jsx';
import { initChatbot } from './components/chatbot/chatbot.js';

initChatbot();

const rootElement = document.getElementById('root');
const ssrPath = rootElement.getAttribute('data-ssr-path');
const normalizePath = (value) => (value && value !== '/' ? value.replace(/\/+$/, '') : '/');
const canHydrate =
  Boolean(rootElement.firstElementChild) &&
  ssrPath !== null &&
  normalizePath(ssrPath) === normalizePath(window.location.pathname);

const appTree = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (canHydrate) {
  hydrateRoot(rootElement, appTree);
} else {
  createRoot(rootElement).render(appTree);
}

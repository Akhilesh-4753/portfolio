import React, { useState, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppRoutes } from './routes/AppRoutes';
import { LoadingScreen } from './components/common/LoadingScreen';

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', 'G-8CRCHQSJM4', {
        page_path: location.pathname + location.search + location.hash
      });
    }
  }, [location]);

  return null;
}

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <BrowserRouter>
        <AnalyticsTracker />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import VideoLoader from './components/VideoLoader/VideoLoader';
import { AppProvider } from './context/AppContext';
import './styles/globals.css';

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home/Home'));
const Events = lazy(() => import('./pages/Events/Events'));
const EventDetail = lazy(() => import('./pages/EventDetail/EventDetail'));
const Legacy = lazy(() => import('./pages/Legacy/Legacy'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

// Page transition wrapper
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.35, ease: 'easeInOut' }}
    style={{ minHeight: '100vh' }}
  >
    {children}
  </motion.div>
);

// Fallback loader for lazy-loaded route chunks
const PageLoader: React.FC = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--color-canvas)',
    }}
  >
    <VideoLoader loaderSrc="/loader.mp4" />
  </div>
);

// Animated routes
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/events"
          element={
            <PageTransition>
              <Events />
            </PageTransition>
          }
        />
        <Route
          path="/events/:id"
          element={
            <PageTransition>
              <EventDetail />
            </PageTransition>
          }
        />
        <Route
          path="/legacy"
          element={
            <PageTransition>
              <Legacy />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <PageTransition>
              <div
                style={{
                  minHeight: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  paddingTop: '80px',
                  backgroundColor: 'var(--color-canvas)',
                }}
              >
                <div style={{ fontSize: '4rem', color: 'var(--color-orange)' }}>404</div>
                <p style={{ fontFamily: 'Sofia Sans, sans-serif', color: 'var(--color-slate)' }}>
                  This page does not exist.
                </p>
                <a
                  href="/"
                  style={{
                    fontFamily: 'Sofia Sans, sans-serif',
                    fontSize: '0.85rem',
                    color: 'var(--color-ink)',
                    textDecoration: 'underline',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Return to Home →
                </a>
              </div>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const AppContent: React.FC = () => {
  const [initialLoaderDone, setInitialLoaderDone] = useState(false);

  return (
    <>
      {!initialLoaderDone && (
        <VideoLoader
          loaderSrc="/loader.mp4"
          onComplete={() => setInitialLoaderDone(true)}
        />
      )}
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Suspense fallback={<PageLoader />}>
          <AppContent />
        </Suspense>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;

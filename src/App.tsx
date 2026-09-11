import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import VideoLoader from './components/VideoLoader/VideoLoader';
import Galaxy from './components/Galaxy/Galaxy';
import ScrollToTop from './components/ScrollToTop';
import { AppProvider, useApp } from './context/AppContext';
import './styles/globals.css';
import { getCloudinaryUrl } from './utils/cloudinary';

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home/Home'));
const Events = lazy(() => import('./pages/Events/Events'));
const EventDetail = lazy(() => import('./pages/EventDetail/EventDetail'));
const Sponsors = lazy(() => import('./pages/Sponsors/Sponsors'));
const Calendar = lazy(() => import('./pages/Calendar/Calendar'));
const Legacy = lazy(() => import('./pages/Legacy/Legacy'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

// Page transition wrapper
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
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
};

// Transparent fallback for route chunk loading (never shows video loader screen on route navigation)
const RouteFallback: React.FC = () => (
  <div style={{ minHeight: '100vh', background: 'transparent' }} />
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
          path="/sponsors"
          element={
            <PageTransition>
              <Sponsors />
            </PageTransition>
          }
        />
        <Route
          path="/calendar"
          element={
            <PageTransition>
              <Calendar />
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
        <Route
          path="/privacy"
          element={
            <PageTransition>
              <div className="container" style={{ paddingTop: '140px', paddingBottom: '100px', color: 'var(--color-ink)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '24px', textAlign: 'center' }}>Privacy Policy</h1>
                <div style={{ color: 'var(--color-slate)', lineHeight: '1.8', fontSize: '16px', maxWidth: '860px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', margin: '0 auto', textAlign: 'center' }}>
                  <p style={{ textAlign: 'center' }}>
                    Artimas 26-27 is committed to safeguarding your privacy and data security. All participant details collected during registration—including names, contact numbers, email addresses, and team affiliations—are strictly utilized for event coordination, schedule communication, and prize distribution by AiMSA and PCCOE.
                  </p>
                  <p style={{ textAlign: 'center' }}>
                    No personal information is sold, shared, or distributed to third-party commercial entities. All data collected remains securely stored within institutional records for the duration of the festival.
                  </p>
                  <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '24px', marginTop: '12px', width: '100%', maxWidth: '800px', margin: '12px auto 0', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '18px', color: 'var(--color-orange-light)', marginBottom: '12px', textAlign: 'center' }}>Artistic Intent &amp; Cultural Disclaimer</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-slate)', textAlign: 'center' }}>
                      Pimpri Chinchwad College of Engineering (PCCOE), the Department of Computer Science &amp; Engineering (AI &amp; ML), and AiMSA explicitly state that this web application and festival theme have no intention of hurting the sentiments of any community, religion, person, or belief. The Yuga themes, mythological references, and visual elements depicted in Artimas 26-27 are purely a work of art, creative design, and cultural celebration—portraying Hindu mythology and divine archetypes as enduring symbols of spirituality, duty, strategy, and cosmic wisdom.
                    </p>
                  </div>
                </div>
              </div>
            </PageTransition>
          }
        />
        <Route
          path="/terms"
          element={
            <PageTransition>
              <div className="container" style={{ paddingTop: '140px', paddingBottom: '100px', color: 'var(--color-ink)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '24px', textAlign: 'center' }}>Terms &amp; Conditions</h1>
                <div style={{ color: 'var(--color-slate)', lineHeight: '1.8', fontSize: '16px', maxWidth: '860px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', margin: '0 auto', textAlign: 'center' }}>
                  <p style={{ textAlign: 'center' }}>
                    By registering for or participating in any competition under Artimas 26-27, all participants and team members agree to comply with the rules, timelines, and guidelines established by AiMSA and PCCOE Department of CSE (AI &amp; ML).
                  </p>
                  <ul style={{ paddingLeft: '0', listStylePosition: 'inside', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'center' }}>
                    <li>Participants must maintain professional decorum, sportsmanship, and academic integrity across all events.</li>
                    <li>Plagiarism, infrastructure tampering, or unauthorized code usage will result in immediate disqualification.</li>
                    <li>All event schedules and venue assignments are subject to institutional modifications if required.</li>
                  </ul>
                  <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '24px', marginTop: '12px', width: '100%', maxWidth: '800px', margin: '12px auto 0', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '18px', color: 'var(--color-orange-light)', marginBottom: '12px', textAlign: 'center' }}>Artistic Intent &amp; Cultural Disclaimer</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-slate)', textAlign: 'center' }}>
                      Pimpri Chinchwad College of Engineering (PCCOE), the Department of Computer Science &amp; Engineering (AI &amp; ML), and AiMSA explicitly declare that the festival, web application, and event themes carry no intention of hurting the sentiments of any community, religion, individual, or belief system. The portrayal of Hindu gods, cosmic Yugas, and mythological motifs is strictly a work of art trying to portray divine themes as universal symbols of spirituality, righteousness, and intellect.
                    </p>
                  </div>
                </div>
              </div>
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
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--color-slate)' }}>
                  This page does not exist.
                </p>
                <a
                  href="/"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    color: 'var(--color-ink)',
                    textDecoration: 'underline',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Return to Home ↗
                </a>
              </div>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false
  );
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [breakpoint]);
  return isMobile;
};

const AppContent: React.FC = () => {
  const { isInitialLoaderDone, setInitialLoaderDone } = useApp();
  const isMobile = useIsMobile();

  const handleLoaderComplete = () => {
    setInitialLoaderDone(true);
  };

  React.useEffect(() => {
    // Disable right click / context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable text selection start
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable image & text drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable DevTools & View Source keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 key
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      const key = e.key ? e.key.toLowerCase() : '';

      // Ctrl+Shift+I / J / C (DevTools, Console, Inspect Element)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (key === 'i' || key === 'j' || key === 'c')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Cmd+Option+I / J / C / U (Mac DevTools & Source)
      if (e.metaKey && e.altKey && (key === 'i' || key === 'j' || key === 'c' || key === 'u')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+U / Cmd+U (View Source)
      if ((e.ctrlKey || e.metaKey) && key === 'u') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+S / Cmd+S (Save page)
      if ((e.ctrlKey || e.metaKey) && key === 's') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('selectstart', handleSelectStart);
    window.addEventListener('dragstart', handleDragStart);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('selectstart', handleSelectStart);
      window.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>

      {/* Fixed background Galaxy animation over bg_image — stays active on all pages */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Galaxy
          stars={isMobile ? 35 : 100}
          speed={1.2}
          spread={5}
          focal={2}
          twinkle={0.3}
          trail={1}
          size={isMobile ? 1.0 : 1.4}
          fadeInRange={5}
          reverseFly={true}
          followCursor={!isMobile}
          background="transparent"
          starColor="#ffffff"
        />
      </div>

      {/* Initial Video Loader — ONLY shown on first site visit */}
      {!isInitialLoaderDone && (
        <VideoLoader
          loaderSrc={isMobile 
            ? getCloudinaryUrl('src/assets/loaders/mobile-loader.mp4') 
            : getCloudinaryUrl('src/assets/loaders/final-loader.mp4')}
          onComplete={handleLoaderComplete}
        />
      )}

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Suspense fallback={<RouteFallback />}>
          <AnimatedRoutes />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppProvider>
        <AppContent />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;

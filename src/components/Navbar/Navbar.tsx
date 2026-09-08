import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './Navbar.module.css';

const logoImg = getCloudinaryUrl('src/assets/logo.png');

const NAV_LINKS = [
  { to: '/',        label: 'Home' },
  { to: '/events',  label: 'Events' },
  { to: '/sponsors',label: 'Sponsors' },
  { to: '/calendar',label: 'Calendar' },
  { to: '/legacy',  label: 'Legacy' },
  { to: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Floating pill nav */}
      <header className={`${styles.navWrap} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={styles.pill}>
          {/* Logo */}
          <NavLink to="/" className={styles.logo}>
            <img src={logoImg} alt="Artimas" className={styles.logoImg} />
          </NavLink>

          {/* Desktop links */}
          <ul className={styles.links}>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.linkActive : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className={styles.right}>
            <NavLink to="/events" className={styles.ctaBtn}>
              Register
            </NavLink>

            {/* Mobile hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className={styles.mobilePanel}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className={styles.mobileLinks}>
                {NAV_LINKS.map(({ to, label }, i) => (
                  <motion.li
                    key={to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      className={({ isActive }) =>
                        `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <div className={styles.mobileActions}>
                <NavLink to="/events" className={styles.mobileCta}>
                  Register Now ↗
                </NavLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

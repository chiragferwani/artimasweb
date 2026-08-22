import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, Share2, Play } from 'lucide-react';
import styles from './Footer.module.css';
import { YUGA_ORDER, YUGAS } from '../../data/yugas';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Headline */}
        <div className={styles.headlineRow}>
          <h2 className={styles.headline}>
            We&apos;re always here when you need us
          </h2>
        </div>

        <hr className={styles.divider} />

        {/* Four-column link grid */}
        <div className={styles.grid}>
          {/* Col 1 — Navigate */}
          <div className={styles.col}>
            <div className={styles.colHeader}>Navigate</div>
            <ul className={styles.linkList}>
              <li><NavLink to="/" className={styles.footerLink}>Home</NavLink></li>
              <li><NavLink to="/events" className={styles.footerLink}>Events</NavLink></li>
              <li><NavLink to="/legacy" className={styles.footerLink}>Artimas 25-26</NavLink></li>
              <li><NavLink to="/contact" className={styles.footerLink}>Contact</NavLink></li>
            </ul>
          </div>

          {/* Col 2 — The Four Ages */}
          <div className={styles.col}>
            <div className={styles.colHeader}>The Four Ages</div>
            <ul className={styles.linkList}>
              {YUGA_ORDER.map((key) => (
                <li key={key}>
                  <span className={styles.footerLink}>
                    {YUGAS[key].icon} {YUGAS[key].name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Need Help? */}
          <div className={styles.col}>
            <div className={styles.colHeader}>Need Help?</div>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:aimsa@college.edu" className={styles.footerLink}>
                  <Mail size={14} /> aimsa@college.edu
                </a>
              </li>
              <li>
                <a href="tel:+91XXXXXXXXXX" className={styles.footerLink}>
                  <Phone size={14} /> +91 XXXXXXXXXX
                </a>
              </li>
              <li>
                <NavLink to="/contact" className={styles.footerLink}>
                  Contact Form ↗
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 4 — AIMSA */}
          <div className={styles.col}>
            <div className={styles.colHeader}>AIMSA</div>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  <Share2 size={14} /> Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  <Play size={14} /> YouTube ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © 2026 AIMSA · Artimas 26-27 · All rights reserved.
          </span>
          <div className={styles.logoMark}>
            <span>✦</span>
            <span className={styles.logoWord}>ARTIMAS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

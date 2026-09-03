import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, Globe } from 'lucide-react';
import getCloudinaryUrl from '../../utils/cloudinary';

const aaaiLogo = getCloudinaryUrl('src/assets/clubs/aaai.png');
const aimsaLogo = getCloudinaryUrl('src/assets/clubs/aimsa.png');
const gfgLogo = getCloudinaryUrl('src/assets/clubs/gfg.png');
const ieeecisLogo = getCloudinaryUrl('src/assets/clubs/ieeecis.png');
const ieeecsLogo = getCloudinaryUrl('src/assets/clubs/ieeecs.png');
const innsLogo = getCloudinaryUrl('src/assets/clubs/inns.png');
import styles from './Footer.module.css';

const CLUB_LOGOS = [
  { name: 'AIMSA', src: aimsaLogo },
  { name: 'AAAI', src: aaaiLogo },
  { name: 'GFG', src: gfgLogo },
  { name: 'IEEE CIS', src: ieeecisLogo },
  { name: 'IEEE CS', src: ieeecsLogo },
  { name: 'INNS', src: innsLogo },
];

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Headline & Club Logos */}
        <div className={styles.headlineRow}>
          <h2 className={styles.headline}>
            We&apos;re always here when you need us
          </h2>
          <div className={styles.clubsWrap}>
            {CLUB_LOGOS.map((club) => (
              <div key={club.name} className={styles.clubLogoCard} title={club.name}>
                <img src={club.src} alt={club.name} className={styles.clubLogoImg} />
              </div>
            ))}
          </div>
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
              <li><NavLink to="/calendar" className={styles.footerLink}>Calendar</NavLink></li>
              <li><NavLink to="/sponsors" className={styles.footerLink}>Sponsors</NavLink></li>
              <li><NavLink to="/legacy" className={styles.footerLink}>Legacy</NavLink></li>
              <li><NavLink to="/contact" className={styles.footerLink}>Contact</NavLink></li>
            </ul>
          </div>

          {/* Col 2 — Events */}
          <div className={styles.col}>
            <div className={styles.colHeader}>Events</div>
            <ul className={styles.linkList}>
              <li><NavLink to="/events/hackmatrix" className={styles.footerLink}>Hackmatrix</NavLink></li>
              <li><NavLink to="/events/antaryami" className={styles.footerLink}>Antaryami</NavLink></li>
              <li><NavLink to="/events/setu-nirman" className={styles.footerLink}>Setu Nirman</NavLink></li>
              <li><NavLink to="/events/datathon" className={styles.footerLink}>Datathon</NavLink></li>
              <li><NavLink to="/events/kurukshetra" className={styles.footerLink}>Kurukshetra (CTF)</NavLink></li>
              <li><NavLink to="/events/chakravyuh" className={styles.footerLink}>Chakravyuh</NavLink></li>
              <li><NavLink to="/events/mayavi" className={styles.footerLink}>Mayavi</NavLink></li>
            </ul>
          </div>

          {/* Col 3 — Contact Us */}
          <div className={styles.col}>
            <div className={styles.colHeader}>Contact Us</div>
            <ul className={styles.linkList}>
              <li>
                <a href="tel:+919422001054" className={styles.footerLink}>
                  <Phone size={14} /> +91 94220 01054
                </a>
              </li>
              <li>
                <a href="mailto:pccoeaimsa2022@gmail.com" className={styles.footerLink}>
                  <Mail size={14} /> pccoeaimsa2022@gmail.com
                </a>
              </li>
              <li style={{ marginTop: '6px' }}>
                <NavLink to="/privacy" className={styles.footerLink}>
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className={styles.footerLink}>
                  Terms &amp; Conditions
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 4 — Connect */}
          <div className={styles.col}>
            <div className={styles.colHeader}>Connect</div>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="https://aimsapccoe.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  <Globe size={14} /> Website ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/pccoe-s-aimsa/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  <LinkedinIcon size={14} /> LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pccoe_aimsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  <InstagramIcon size={14} /> Instagram ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © 2026 AIMSA · Department of CSE (AI &amp; ML), PCCOE · Artimas 26-27 · All rights reserved. · Developed by{' '}
            <a
              href="https://chiragferwani.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.devLink}
            >
              chiragferwani
            </a>{' '}
            &amp;{' '}
            <a
              href="https://vrushabhhirap.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.devLink}
            >
              vrushabhhirap
            </a>
          </span>
          <div className={styles.logoMark}>
            <img src="/artimasnav.png" alt="Artimas" className={styles.logoImg} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

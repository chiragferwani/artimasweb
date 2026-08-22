import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';
import YugaCard from '../../components/YugaCard/YugaCard';
import EventCard from '../../components/EventCard/EventCard';
import { YUGAS, YUGA_ORDER, EVENTS } from '../../data/yugas';
import styles from './Home.module.css';

const FEST_DATE = new Date('2027-02-15T09:00:00');

// Orbital arc SVG between Yuga portraits
const OrbitalArc: React.FC<{ color?: string }> = ({ color = '#F37338' }) => (
  <svg
    className={styles.orbitalArc}
    viewBox="0 0 400 80"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M 0 60 Q 200 -20 400 60"
      stroke={color}
      strokeWidth="1.2"
      strokeDasharray="6 6"
      opacity="0.5"
    />
  </svg>
);

const Home: React.FC = () => {
  return (
    <main className={styles.main}>

      {/* ═══════════════════════════════════════
          HERO — Stadium frame on canvas cream
      ═══════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className="container">
          {/* Hero stadium frame */}
          <motion.div
            className={styles.heroFrame}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ghost watermark behind hero */}
            <div className={styles.ghostWatermark}>ARTIMAS</div>

            {/* Hero content */}
            <div className={styles.heroContent}>
              {/* Eyebrow */}
              <motion.div
                className="eyebrow"
                style={{ color: '#F3F0EE', opacity: 0.7 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                AIMSA Presents
              </motion.div>

              <motion.h1
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.16,1,0.3,1] }}
              >
                The Four Yugas
                <br />
                <span className={styles.heroTitleAccent}>Converge</span>
              </motion.h1>

              <motion.p
                className={styles.heroSubtitle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.6 }}
              >
                Artimas 26-27 — where Satyuga, Tretayuga, Dwaparyuga
                and Kalyuga collide in one cosmic celebration.
                The flagship fest of AIMSA.
              </motion.p>

              {/* Yuga pills */}
              <motion.div
                className={styles.yugaPills}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                {YUGA_ORDER.map((key) => (
                  <span key={key} className={styles.yugaPill}>
                    {YUGAS[key].icon} {YUGAS[key].name}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className={styles.heroCtas}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.6 }}
              >
                <Link to="/events" className={styles.heroBtnPrimary}>
                  Explore Events <ArrowRight size={16} />
                </Link>
                <Link to="/legacy" className={styles.heroBtnSecondary}>
                  The Legacy
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Countdown beneath hero frame */}
          <motion.div
            className={styles.countdownRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <span className={styles.countdownLabel}>Days until Artimas</span>
            <CountdownTimer targetDate={FEST_DATE} />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          YUGAS — Four portrait cards
      ═══════════════════════════════════════ */}
      <section className={styles.yugaSection}>
        <div className="container">
          {/* Section header */}
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">The Cosmic Ages</span>
            <h2 className={styles.sectionTitle}>
              The Four Yugas
            </h2>
            <p className={styles.sectionSubtitle}>
              From the dawn of creation to the age of chaos — each era has
              its own legend. Artimas 26-27 is where all four live at once.
            </p>
          </motion.div>

          {/* Orbital arc decoration */}
          <div className={styles.arcRow}>
            <OrbitalArc />
          </div>

          {/* Yuga cards grid */}
          <div className={styles.yugaGrid}>
            {YUGA_ORDER.map((key, i) => (
              <YugaCard key={key} yuga={YUGAS[key]} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT — Lifted cream, stats
      ═══════════════════════════════════════ */}
      <section className={styles.aboutSection}>
        {/* Lifted cream surface */}
        <div className={styles.aboutLiftedBg} />
        <div className="container">
          <div className={styles.aboutGrid}>
            <motion.div
              className={styles.aboutText}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
            >
              <span className="eyebrow">About the Fest</span>
              <h2 className={styles.sectionTitle} style={{ marginTop: 16 }}>
                AIMSA &amp; Artimas
              </h2>
              <p className={styles.aboutPara}>
                <strong>AIMSA</strong> — the Association for Innovative Management and
                Student Affairs — orchestrates Artimas every year: the college's
                flagship celebration of talent, creativity, and intellect.
              </p>
              <p className={styles.aboutPara}>
                Artimas 26-27 weaves the mythology of the four Yugas into every
                event, performance, and competition. This is not just a fest — it
                is a cosmic saga in which every participant plays a hero.
              </p>
              <div className={styles.statRow}>
                {[
                  { num: '9',  lbl: 'Events' },
                  { num: '4',  lbl: 'Yugas' },
                  { num: '2',  lbl: 'Days' },
                  { num: '∞',  lbl: 'Memories' },
                ].map(({ num, lbl }) => (
                  <div key={lbl} className={styles.stat}>
                    <span className={styles.statNum}>{num}</span>
                    <span className={styles.statLbl}>{lbl}</span>
                  </div>
                ))}
              </div>
              <Link to="/events" className={styles.aboutCta}>
                View all events <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Right — circular Yuga portrait constellation */}
            <motion.div
              className={styles.aboutVisual}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              viewport={{ once: true }}
            >
              {/* Ghost watermark */}
              <div className={styles.aboutGhost}>AIMSA</div>

              {/* 2×2 circular portrait grid */}
              <div className={styles.portraitGrid}>
                {YUGA_ORDER.map((key) => {
                  const yuga = YUGAS[key];
                  return (
                    <div key={key} className={styles.portraitWrap}>
                      <div className={styles.portraitCircle}>
                        <span className={styles.portraitEmoji}>{yuga.icon}</span>
                        {/* Satellite CTA */}
                        <div className={styles.satelliteCta}>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                      <span className="eyebrow" style={{ marginTop: 12, fontSize: 11 }}>
                        {yuga.name}
                      </span>
                      <p className={styles.portraitLabel}>{yuga.tagline}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EVENTS — Canvas cream, 3-col grid
      ═══════════════════════════════════════ */}
      <section className={styles.eventsSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">9 Events · 4 Eras</span>
            <h2 className={styles.sectionTitle}>The Arena Awaits</h2>
            <p className={styles.sectionSubtitle}>
              From oratory to hackathons, art to dance — every event is a
              battle in the cosmic tournament. Choose your Yuga.
            </p>
          </motion.div>

          <div className={styles.eventsGrid}>
            {EVENTS.slice(0, 6).map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>

          <motion.div
            className={styles.viewAllRow}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/events" className={styles.viewAllBtn}>
              View all 9 events <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — Ink Black stadium card
      ═══════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.ctaCard}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Ghost watermark on dark */}
            <div className={styles.ctaGhost}>ARTIMAS</div>

            <div className={styles.ctaInner}>
              <span className="eyebrow" style={{ color: 'rgba(243,240,238,0.5)' }}>
                Registration Opening Soon
              </span>
              <h2 className={styles.ctaTitle}>
                The Four Ages
                <br />
                Await You
              </h2>
              <p className={styles.ctaSubtitle}>
                Stay connected with AIMSA to be the first to know
                when registrations open.
              </p>
              <div className={styles.ctaBtns}>
                <Link to="/events" className={styles.ctaBtnWhite}>
                  See all events
                </Link>
                <Link to="/contact" className={styles.ctaBtnGhost}>
                  Contact AIMSA
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { SwastikChakra } from '../../components/SwastikChakra/SwastikChakra';
import CurvedLoop from '../../components/CurvedLoop/CurvedLoop';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import EventCard from '../../components/EventCard/EventCard';
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';
import { EVENTS } from '../../data/yugas';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './Home.module.css';

const lightLogo = getCloudinaryUrl('src/assets/light.png');
const krishnaVideo = getCloudinaryUrl('src/assets/krishnaanimation.mp4');
const heroVideo = getCloudinaryUrl('src/assets/herovid.mp4');
const hanumanImg = getCloudinaryUrl('src/assets/hanuman.png');
const ramImg = getCloudinaryUrl('src/assets/ram.png');
const divinedevVideo = getCloudinaryUrl('src/assets/divinedev.mp4');
const divineasurVideo = getCloudinaryUrl('src/assets/divineasur.mp4');
const ravanVideo = getCloudinaryUrl('src/assets/ravan.mp4');

const ARTIMAS_START_DATE = new Date('2026-10-09T09:00:00');



const playVideo = (video: HTMLVideoElement | null) => {
  if (!video || !video.isConnected) return;
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  const p = video.play();
  if (p !== undefined) {
    p.catch((err) => {
      if (err.name !== 'AbortError') {
        console.warn('Autoplay error:', err);
      }
    });
  }
};

const playVideoFromStart = (video: HTMLVideoElement | null) => {
  if (!video || !video.isConnected) return;
  try {
    video.muted = true;
    video.defaultMuted = true;
    video.currentTime = 0;
    const p = video.play();
    if (p !== undefined) {
      p.catch((err) => {
        if (err.name === 'AbortError') {
          return;
        }
        console.warn('Intersection play error:', err);
        setTimeout(() => {
          if (video && video.isConnected) {
            video.muted = true;
            video.play().catch((playErr) => {
              if (playErr.name !== 'AbortError') {
                console.warn('Retry play error:', playErr);
              }
            });
          }
        }, 150);
      });
    }
  } catch (e) {
    console.warn('Intersection play exception:', e);
  }
};

const Home: React.FC = () => {
  const { isInitialLoaderDone } = useApp();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const aboutVideoRef = React.useRef<HTMLVideoElement>(null);
  const devVideoRef = React.useRef<HTMLVideoElement>(null);
  const asurVideoRef = React.useRef<HTMLVideoElement>(null);
  const ravanVideoRef = React.useRef<HTMLVideoElement>(null);
  const yugaSectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (isInitialLoaderDone) {
      playVideoFromStart(videoRef.current);
      playVideo(aboutVideoRef.current);
    }
  }, [isInitialLoaderDone]);

  React.useEffect(() => {
    // Play Hero & About video immediately on mount
    playVideoFromStart(videoRef.current);
    playVideo(aboutVideoRef.current);

    const handleInteraction = () => {
      if (videoRef.current && videoRef.current.paused && !videoRef.current.ended) {
        playVideo(videoRef.current);
      }
      if (aboutVideoRef.current && aboutVideoRef.current.paused) {
        playVideo(aboutVideoRef.current);
      }
    };

    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });

    // Trigger divine videos ONLY when user scrolls down into Yuga section
    let hasPlayedYuga = false;
    const yugaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedYuga) {
            hasPlayedYuga = true;
            playVideoFromStart(devVideoRef.current);
            playVideoFromStart(asurVideoRef.current);
          }
        });
      },
      { threshold: 0.05, rootMargin: '100px' }
    );

    if (yugaSectionRef.current) {
      yugaObserver.observe(yugaSectionRef.current);
    }

    // Trigger Ravan video ONLY when user scrolls down into Ravan video
    let hasPlayedRavan = false;
    const ravanObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedRavan) {
            hasPlayedRavan = true;
            playVideoFromStart(ravanVideoRef.current);
          }
        });
      },
      { threshold: 0.05, rootMargin: '100px' }
    );

    if (ravanVideoRef.current) {
      ravanObserver.observe(ravanVideoRef.current);
    }

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      yugaObserver.disconnect();
      ravanObserver.disconnect();
    };
  }, []);

  return (
    <main className={styles.main}>

      {/* ═══════════════════════════════════════
          HERO — Video frame
      ═══════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className="container">
          {/* Hero stadium frame containing autoplay video */}
          <motion.div
            className={styles.heroFrame}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              className={styles.heroVideo}
              onLoadedData={() => {
                if (videoRef.current && videoRef.current.paused && !videoRef.current.ended) {
                  playVideo(videoRef.current);
                }
              }}
              onCanPlay={() => {
                if (videoRef.current && videoRef.current.paused && !videoRef.current.ended) {
                  playVideo(videoRef.current);
                }
              }}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className={styles.heroVideoOverlay} />
          </motion.div>

          {/* Live Countdown Row for Oct 9-11, 2026 */}
          <motion.div
            className={styles.countdownRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className={styles.countdownLabel}>Festival Begins Oct 9–11, 2026</span>
            <CountdownTimer targetDate={ARTIMAS_START_DATE} />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          YUGA — Swastik & Dual Video Background
      ═══════════════════════════════════════ */}
      <section ref={yugaSectionRef} className={styles.yugaSection}>
        {/* Layer 1: Dual Video Background (Devas left, Asuras right) */}
        <div className={styles.dualVideoBg}>
          <div className={styles.leftVideoWrap}>
            <video
              ref={devVideoRef}
              muted
              playsInline
              preload="auto"
              className={styles.sideVideo}
            >
              <source src={divinedevVideo} type="video/mp4" />
            </video>
          </div>
          <div className={styles.rightVideoWrap}>
            <video
              ref={asurVideoRef}
              muted
              playsInline
              preload="auto"
              className={styles.sideVideo}
            >
              <source src={divineasurVideo} type="video/mp4" />
            </video>
          </div>
          <div className={styles.dualVideoOverlay} />
        </div>

        {/* Upper Arc Curve framing top of Chakra */}
        <div style={{ width: '100%', marginBottom: '15px', position: 'relative', zIndex: 3 }}>
          <CurvedLoop
            marqueeText="॥ ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥ ✦ "
            speed={2}
            curveAmount={-160}
            direction="right"
            interactive={true}
            className="curved-loop-text-gold"
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Rotating Swastik Chakra behind divine side videos */}
          <SwastikChakra />
        </div>

        {/* Lower Arc Curve framing bottom of Chakra */}
        <div style={{ width: '100%', marginTop: '15px', position: 'relative', zIndex: 3 }}>
          <CurvedLoop
            marqueeText="॥ ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥ ✦ "
            speed={2}
            curveAmount={160}
            direction="left"
            interactive={true}
            className="curved-loop-text-gold"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT — Lifted cream, stats
      ═══════════════════════════════════════ */}
      <section className={styles.aboutSection}>
        {/* Video background container */}
        <div className={styles.aboutVideoContainer}>
          <video
            ref={aboutVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={styles.aboutVideoBg}
            onLoadedData={() => playVideo(aboutVideoRef.current)}
            onCanPlay={() => playVideo(aboutVideoRef.current)}
          >
            <source src={krishnaVideo} type="video/mp4" />
          </video>
          <div className={styles.aboutVideoOverlay} />
        </div>
        <div className="container">
          <div className={styles.aboutGridCentered}>
            <motion.div
              className={styles.aboutTextCentered}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
            >
              {/* AIMSA Light Logo */}
              <img
                src={lightLogo}
                alt="AIMSA"
                className={styles.aboutAimsaLogo}
              />

              <span className="eyebrow" style={{ letterSpacing: '3px' }}>
                presents
              </span>

              {/* ARTIMAS title styled like Hero */}
              <h2 className={styles.aboutHeroTitle}>
                ARTIMAS <span className={styles.aboutYearBadge}>2026</span>
              </h2>

              <p className={styles.aboutPara}>
                <strong>AIMSA</strong> — the Artificial Intelligence and Machine
                Learning Student Association under the <strong>Department of CSE (AI &amp; ML)</strong> — orchestrates Artimas every year: the department&apos;s
                flagship celebration of talent, creativity, and intellect.
              </p>
              <p className={styles.aboutPara}>
                Artimas 2026 weaves the mythology of the four Yugas into every
                event, performance, and competition. This is a cosmic saga in
                which every participant plays a hero across time and destiny.
              </p>
              <div className={styles.statRow}>
                {[
                  { num: '7',  lbl: 'Events' },
                  { num: '4',  lbl: 'Yugas' },
                  { num: '3',  lbl: 'Days' },
                  { num: '∞',  lbl: 'Memories' },
                ].map(({ num, lbl }) => (
                  <div key={lbl} className={styles.stat}>
                    <span className={styles.statNum}>{num}</span>
                    <span className={styles.statLbl}>{lbl}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 16 }}>
                <Link to="/events" className={styles.aboutCta}>
                  View all events <ArrowUpRight size={16} />
                </Link>
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
            <span className="eyebrow">7 Events · 4 Eras</span>
            <h2 className={styles.sectionTitle}>The Arena Awaits</h2>
            <p className={styles.sectionSubtitle}>
              From oratory to hackathons, art to dance — every event is a
              battle in the cosmic tournament. Choose your Yuga.
            </p>
          </motion.div>

          {/* Ram & Hanuman divine illustration section */}
          <div className={styles.ramHanumanContainer}>
            {/* Lord Ram image rendered behind Hanuman */}
            <motion.div
              className={styles.ramImageWrap}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img src={ramImg} alt="Lord Ram" className={styles.ramImg} />
            </motion.div>

            {/* Panchamukhi Hanuman illustration image */}
            <motion.div
              className={styles.hanumanImageWrap}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src={hanumanImg} alt="Panchamukhi Hanuman" className={styles.hanumanImg} />
            </motion.div>
          </div>

          {/* Ravan video section right before event cards */}
          <motion.div
            className={styles.ravanaImageWrap}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <video
              ref={ravanVideoRef}
              muted
              playsInline
              preload="auto"
              className={styles.ravanaVideo}
            >
              <source src={ravanVideo} type="video/mp4" />
            </video>
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
              View all 7 events <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cta Block */}
      <CtaBlock
        primaryButton={{ label: 'See all events', to: '/events' }}
        secondaryButton={{ label: 'Contact AIMSA', to: '/contact' }}
      />
    </main>
  );
};

export default Home;

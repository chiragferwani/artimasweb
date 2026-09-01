import React from 'react';
import { motion } from 'framer-motion';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import ChakravyuhMap from '../../components/ChakravyuhMap/ChakravyuhMap';
import EventCard from '../../components/EventCard/EventCard';
import { EVENTS } from '../../data/yugas';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './Events.module.css';

const ravanaImg = getCloudinaryUrl('src/assets/ravana.png');
const kauravsImg = getCloudinaryUrl('src/assets/kauravs.png');
const hanumanSoloImg = getCloudinaryUrl('src/assets/hanumansolo.png');
const ramImg = getCloudinaryUrl('src/assets/ram.png');

const Events: React.FC = () => {
  return (
    <main className={styles.main}>
      {/* Page header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg} />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.headerContent}
          >
            <div className={styles.breadcrumb}>Artimas 26-27</div>
            <h1 className={styles.pageTitle}>The Arena</h1>
            <p className={styles.pageSubtitle}>
              Seven battles across four cosmic ages. Choose your field. Claim your legend.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events section */}
      <section className={styles.eventsSection}>
        <div className="container">
          {/* Layered hero container for Kauravas & Ravana composition */}
          <div className={styles.kauravsRavanaContainer}>
            {/* Kauravas illustration image placed behind Ravana heads */}
            <motion.div
              className={styles.kauravsImageWrap}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              <img src={kauravsImg} alt="Kauravas" className={styles.kauravsImg} />
            </motion.div>

            {/* Ravana illustration image */}
            <motion.div
              className={styles.ravanaImageWrap}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
            >
              <img src={ravanaImg} alt="Ravana" className={styles.ravanaImg} />
            </motion.div>
          </div>
        </div>

        {/* Chakravyuh map visual container */}
        <ChakravyuhMap />

        {/* Orbit View event cards structure */}
        <div style={{ marginTop: '48px' }}>
          <div className={styles.orbitWrapper}>
            <div className={styles.orbitContainer}>
              {/* Center structure: Lord Ram rotating clockwise behind Lord Hanuman solo */}
              <div className={styles.centerStructure}>
                <div className={styles.ramRotateWrap}>
                  <img src={ramImg} alt="Lord Ram" className={styles.ramImg} />
                </div>
                <div className={styles.hanumanSoloWrap}>
                  <img src={hanumanSoloImg} alt="Lord Hanuman" className={styles.hanumanSoloImg} />
                </div>
              </div>

              {/* Outer orbital ring of event cards (rotating anti-clockwise, slower than Ram image) */}
              <div className={styles.orbitRing}>
                {EVENTS.map((event, index) => {
                  const total = EVENTS.length;
                  const angleDeg = (index / total) * 360;
                  const angleRad = (angleDeg * Math.PI) / 180;
                  const radius = 460;
                  const x = Math.round(radius * Math.cos(angleRad));
                  const y = Math.round(radius * Math.sin(angleRad));
                  return (
                    <div
                      key={event.id}
                      className={styles.orbitSlot}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      <div className={styles.cardUprightWrap}>
                        <EventCard event={event} index={index} compact />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Fallback Grid view — only visible when orbit view is hidden by CSS */}
        <div className={styles.mobileGridSection}>
          <div className="container">
            <div className={styles.grid}>
              {EVENTS.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cta Block */}
      <CtaBlock
        primaryButton={{ label: 'View Schedule & Calendar', to: '/calendar' }}
        secondaryButton={{ label: 'Our Sponsors', to: '/sponsors' }}
      />
    </main>
  );
};

export default Events;

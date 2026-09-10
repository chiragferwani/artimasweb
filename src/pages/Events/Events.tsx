import React from 'react';
import { motion } from 'framer-motion';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import EventCard from '../../components/EventCard/EventCard';
import ChakravyuhMap from '../../components/ChakravyuhMap/ChakravyuhMap';
import { EVENTS } from '../../data/yugas';
import styles from './Events.module.css';

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
            <div className={styles.breadcrumb}>Dept. of CSE (AI &amp; ML) · Artimas 26-27</div>
            <h1 className={styles.pageTitle}>The Arena</h1>
            <p className={styles.pageSubtitle}>
              Eight battles across four cosmic ages. Choose your field. Claim your legend.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events section */}
      <section className={styles.eventsSection}>
        <ChakravyuhMap />
        <div className={styles.eventsGridSection}>
          <div className="container">
            <div className={styles.grid}>
              {EVENTS.filter((event) => event.id !== 'dronevedha').map((event, index) => (
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

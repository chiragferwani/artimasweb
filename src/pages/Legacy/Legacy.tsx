import React from 'react';
import { motion } from 'framer-motion';
import styles from './Legacy.module.css';

const PAST_EVENTS = [
  { name: 'Confluence', type: 'Management', result: 'Team Alpha — Winner' },
  { name: 'Spandan', type: 'Cultural', result: 'House Indra — Winner' },
  { name: 'Cognizance', type: 'Technical', result: 'Team Circuit — Winner' },
  { name: 'Aavahan', type: 'Literary', result: 'Priya Sharma — Winner' },
  { name: 'Synergy', type: 'Group Event', result: 'Block B Team — Winner' },
];

const HIGHLIGHTS = [
  { emoji: '🎭', title: '500+', desc: 'Participants' },
  { emoji: '🏆', title: '6', desc: 'Events' },
  { emoji: '🌟', title: '3', desc: 'Days of festivities' },
  { emoji: '💡', title: '12+', desc: 'Colleges participated' },
];

const Legacy: React.FC = () => {
  return (
    <main className={styles.main}>
      {/* Page Header — styled like an ancient chronicle */}
      <section className={styles.header}>
        <div className={styles.headerBg} />
        <div className={styles.scrollTexture} />
        <div className="container">
          <motion.div
            className={styles.headerContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.chronicleTag}>Chronicle of the Past Age</div>
            <h1 className={styles.pageTitle}>Artimas</h1>
            <div className={styles.editionBadge}>25-26</div>
            <p className={styles.pageSubtitle}>
              Before the four ages converge, there was one. The chronicle of the first saga —
              the age that lit the flame for what Artimas 26-27 shall become.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The story so far */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className={styles.sectionPre}>The Story So Far</div>
              <h2 className={styles.sectionTitle}>
                The First Saga
              </h2>
              <p className={styles.storyText}>
                Artimas 25-26 marked the beginning. AIMSA brought together the brightest minds,
                the most creative souls, and the fiercest competitors for a celebration that set
                the standard for what a college fest could be.
              </p>
              <p className={styles.storyText}>
                It was the age before the Yugas — a time of pure ambition and raw talent. The seeds
                sown in 25-26 have grown into the cosmic saga that is Artimas 26-27. The first
                flame that never went out.
              </p>
              <p className={styles.storyText}>
                From that inaugural edition, AIMSA carried forward one promise: every year,
                Artimas would grow larger, bolder, and more mythic. That promise is fulfilled here.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className={styles.highlightGrid}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
            >
              {HIGHLIGHTS.map(({ emoji, title, desc }) => (
                <div key={desc} className={styles.highlightCard}>
                  <div className={styles.highlightEmoji}>{emoji}</div>
                  <div className={styles.highlightNum}>{title}</div>
                  <div className={styles.highlightDesc}>{desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className={styles.pastEventsSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.sectionPre}>The Battles of 25-26</div>
            <h2 className={styles.sectionTitle}>Past Events</h2>
          </motion.div>

          <div className={styles.eventsTable}>
            {PAST_EVENTS.map((ev, i) => (
              <motion.div
                key={ev.name}
                className={styles.eventRow}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className={styles.eventRowNum}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className={styles.eventRowName}>{ev.name}</div>
                <div className={styles.eventRowType}>
                  <span className={styles.typeTag}>{ev.type}</span>
                </div>
                <div className={styles.eventRowResult}>{ev.result}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery placeholder */}
      <section className={styles.gallerySection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.sectionPre}>Memories from 25-26</div>
            <h2 className={styles.sectionTitle}>Gallery</h2>
          </motion.div>

          <div className={styles.galleryGrid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className={styles.galleryPlaceholder}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <div className={styles.galleryPlaceholderInner}>
                  <span className={styles.galleryPlaceholderIcon}>📷</span>
                  <span className={styles.galleryPlaceholderText}>Photo Coming Soon</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition to 26-27 */}
      <section className={styles.bridgeSection}>
        <div className="container">
          <motion.div
            className={styles.bridgeCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className={styles.bridgeIcon}>✦</div>
            <h2 className={styles.bridgeTitle}>The Saga Continues</h2>
            <p className={styles.bridgeText}>
              From the dawn of the first Artimas, the cosmos set in motion a grander design.
              What began in 25-26 now transcends its origins. The Four Yugas await.
            </p>
            <a href="/" className={styles.bridgeBtn}>
              Enter Artimas 26-27
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Legacy;

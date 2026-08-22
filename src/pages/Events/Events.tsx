import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../../components/EventCard/EventCard';
import { EVENTS, YUGAS, YUGA_ORDER, type YugaKey } from '../../data/yugas';
import styles from './Events.module.css';

const Events: React.FC = () => {
  const [filter, setFilter] = useState<YugaKey | 'all'>('all');

  const filtered = useMemo(
    () => (filter === 'all' ? EVENTS : EVENTS.filter((e) => e.yuga === filter)),
    [filter]
  );

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
              Nine battles across four cosmic ages. Choose your field. Claim your legend.
            </p>

            {/* Yuga filter */}
            <div className={styles.filterRow}>
              <button
                className={`${styles.filterBtn} ${filter === 'all' ? styles.filterActive : ''}`}
                onClick={() => setFilter('all')}
              >
                All Events
              </button>
              {YUGA_ORDER.map((key) => (
                <button
                  key={key}
                  className={`${styles.filterBtn} ${filter === key ? styles.filterActive : ''}`}
                  onClick={() => setFilter(key)}
                  style={
                    filter === key
                      ? ({
                          '--filter-color': YUGAS[key].colors.primary,
                        } as React.CSSProperties)
                      : undefined
                  }
                >
                  {YUGAS[key].icon} {YUGAS[key].name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events grid */}
      <section className={styles.eventsSection}>
        <div className="container">
          <motion.div
            className={styles.grid}
            layout
          >
            {filtered.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </motion.div>
          {filtered.length === 0 && (
            <div className={styles.empty}>
              No events found for this filter.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Events;

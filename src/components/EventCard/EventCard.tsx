import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Event } from '../../data/yugas';
import { YUGAS } from '../../data/yugas';
import styles from './EventCard.module.css';

// Accessible Yuga colors for dark surfaces
const YUGA_COLORS: Record<string, string> = {
  satya:   '#F5D76E',
  treta:   '#62C462',
  dvapara: '#7B9EE8',
  kali:    '#EE5252',
};

interface EventCardProps {
  event: Event;
  index?: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index = 0 }) => {
  const yuga      = YUGAS[event.yuga];
  const yugaColor = YUGA_COLORS[event.yuga] ?? '#F5D76E';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true, margin: '-40px' }}
      className={styles.card}
    >
      {/* Yuga-tinted top strip */}
      <div className={styles.topStrip} style={{ background: yugaColor }} />

      {/* Tag row */}
      <div className={styles.tagRow}>
        <span
          className={styles.yugaTag}
          style={{ color: yugaColor, borderColor: `${yugaColor}50` }}
        >
          {yuga.icon} {yuga.name}
        </span>
        {event.registrationOpen && (
          <span className={styles.openTag}>Open</span>
        )}
      </div>

      <h3 className={styles.eventName}>{event.name}</h3>
      <div className={styles.tagline}>{event.tagline}</div>
      <p className={styles.description}>{event.description}</p>

      {/* Meta */}
      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <Users size={12} />
          <span>{event.teamSize}</span>
        </div>
        <div className={styles.metaItem}>
          <Calendar size={12} />
          <span>{event.date}</span>
        </div>
        <div className={styles.metaItem}>
          <MapPin size={12} />
          <span>{event.venue}</span>
        </div>
      </div>

      <Link to={`/events/${event.id}`} className={styles.viewBtn}>
        View details <ArrowRight size={13} />
      </Link>
    </motion.div>
  );
};

export default EventCard;

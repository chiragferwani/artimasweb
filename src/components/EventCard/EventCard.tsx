import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Lottie } from 'lottie-react';
import type { Event } from '../../data/yugas';
import { YUGAS } from '../../data/yugas';
import orangeFlagAnimation from '../../assets/orangeflag.json';
import redFlagAnimation from '../../assets/redflag.json';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './EventCard.module.css';

const logImg = getCloudinaryUrl('src/assets/log.png');
const antaryamiImg = getCloudinaryUrl('src/assets/eventnames/antaryami.png');
const chakravyuhImg = getCloudinaryUrl('src/assets/eventnames/chakravyuh.png');
const datathonImg = getCloudinaryUrl('src/assets/eventnames/datathon.png');
const hackmatrixImg = getCloudinaryUrl('src/assets/eventnames/hackmatrix.png');
const kurukshetraImg = getCloudinaryUrl('src/assets/eventnames/kurukshetra.png');
const mayaviImg = getCloudinaryUrl('src/assets/eventnames/mayavi.png');
const setunirmanImg = getCloudinaryUrl('src/assets/eventnames/setunirman.png');
const satyugBadgeImg = getCloudinaryUrl('src/assets/eventnames/satyug.png');
const tretayugBadgeImg = getCloudinaryUrl('src/assets/eventnames/tretayug.png');
const dwaparyugBadgeImg = getCloudinaryUrl('src/assets/eventnames/dwaparyug.png');
const kalyugBadgeImg = getCloudinaryUrl('src/assets/eventnames/kalyug.png');

const EVENT_NAME_IMAGES: Record<string, string> = {
  'antaryami': antaryamiImg,
  'chakravyuh': chakravyuhImg,
  'datathon': datathonImg,
  'hackmatrix': hackmatrixImg,
  'kurukshetra': kurukshetraImg,
  'mayavi': mayaviImg,
  'setu-nirman': setunirmanImg,
};

const YUGA_BADGE_IMAGES: Record<string, string> = {
  satya: satyugBadgeImg,
  treta: tretayugBadgeImg,
  dvapara: dwaparyugBadgeImg,
  kali: kalyugBadgeImg,
};

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
  compact?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, index = 0, compact = false }) => {
  const yuga      = YUGAS[event.yuga];
  const yugaColor = YUGA_COLORS[event.yuga] ?? '#F5D76E';
  const flagAnimation = index % 2 === 0 ? orangeFlagAnimation : redFlagAnimation;
  const nameImg = EVENT_NAME_IMAGES[event.id];
  const yugaBadgeImg = YUGA_BADGE_IMAGES[event.yuga];

  if (compact) {
    return (
      <div className={styles.compactCardWrapper}>
        {/* Animated Flag on top */}
        <div className={styles.flagWrap}>
          <Lottie src={flagAnimation} loop autoplay className={styles.flagLottie} />
        </div>

        {/* Transparent compact card containing log.png image, event name PNG image & view details button below */}
        <div className={styles.compactCard}>
          <img src={logImg} alt="" className={styles.logBgImg} draggable={false} />
          <div className={styles.compactCardContent}>
            {nameImg ? (
              <img src={nameImg} alt={event.name} className={styles.compactEventNameImg} />
            ) : (
              <h3 className={styles.compactEventName}>{event.name}</h3>
            )}
            <Link to={`/events/${event.id}`} className={styles.compactViewBtn}>
              Register now <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
        <div className={styles.tagLeft}>
          {yugaBadgeImg ? (
            <img src={yugaBadgeImg} alt={yuga.name} className={styles.yugaBadgeImg} />
          ) : (
            <span
              className={styles.yugaTag}
              style={{ color: yugaColor, borderColor: `${yugaColor}50` }}
            >
              {yuga.icon} {yuga.name}
            </span>
          )}
          {event.registrationOpen && (
            <span className={styles.openTag}>Open</span>
          )}
        </div>
        <div className={styles.teamTag}>
          <Users size={12} />
          <span>{event.teamSize}</span>
        </div>
      </div>

      {nameImg ? (
        <div className={styles.eventNameImgWrap}>
          <img src={nameImg} alt={event.name} className={styles.eventNameImg} />
        </div>
      ) : (
        <h3 className={styles.eventName}>{event.name}</h3>
      )}
      <div className={styles.tagline}>{event.tagline}</div>
      <p className={styles.description}>{event.description}</p>

      <Link to={`/events/${event.id}`} className={styles.viewBtn}>
        Register now <ArrowUpRight size={13} />
      </Link>
    </motion.div>
  );
};

export default EventCard;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Event } from '../../data/yugas';
import { YUGAS } from '../../data/yugas';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './EventCard.module.css';

const logImg = getCloudinaryUrl('src/assets/log.png');
const calImg = getCloudinaryUrl('src/assets/cal.jpeg');
const promptrelayImg = getCloudinaryUrl('src/assets/eventnames/promptrelay.png');
const houdiniheistImg = getCloudinaryUrl('src/assets/eventnames/houdiniheist.png');
const datathonImg = getCloudinaryUrl('src/assets/eventnames/datathon.png');
const hackmatrixImg = getCloudinaryUrl('src/assets/eventnames/hackmatrix.png');
const kurukshetraImg = getCloudinaryUrl('src/assets/eventnames/kurukshetra.png');
const amongusImg = getCloudinaryUrl('src/assets/eventnames/amongus.png');
const brandathonImg = getCloudinaryUrl('src/assets/eventnames/brandathon.png');
const pixelperfectImg = getCloudinaryUrl('src/assets/eventnames/pixelperfect.png');
const dronevedhaImg = getCloudinaryUrl('src/assets/eventnames/dronevedha.png');
const satyugBadgeImg = getCloudinaryUrl('src/assets/eventnames/satyug.png');
const tretayugBadgeImg = getCloudinaryUrl('src/assets/eventnames/tretayug.png');
const dwaparyugBadgeImg = getCloudinaryUrl('src/assets/eventnames/dwaparyug.png');
const kalyugBadgeImg = getCloudinaryUrl('src/assets/eventnames/kalyug.png');

// Event icons
const promptrelayIcon = getCloudinaryUrl('src/assets/eventnames/promptrelayicon.png');
const houdiniheistIcon = getCloudinaryUrl('src/assets/eventnames/houdiniheisticon.png');
const datathonIcon = getCloudinaryUrl('src/assets/eventnames/datathonicon.png');
const hackmatrixIcon = getCloudinaryUrl('src/assets/eventnames/hackmatrixicon.png');
const kurukshetraIcon = getCloudinaryUrl('src/assets/eventnames/kurukshetraicon.png');
const amongusIcon = getCloudinaryUrl('src/assets/eventnames/amongusicon.png');
const brandathonIcon = getCloudinaryUrl('src/assets/eventnames/brandathonicon.png');
const pixelperfectIcon = getCloudinaryUrl('src/assets/eventnames/pixelperfecticon.png');
const dronevedhaIcon = getCloudinaryUrl('src/assets/eventnames/dronevedhaicon.png');

const EVENT_NAME_IMAGES: Record<string, string> = {
  'promptrelay': promptrelayImg,
  'antaryami': promptrelayImg,
  'chakravyuh': houdiniheistImg,
  'datathon': datathonImg,
  'hackmatrix': hackmatrixImg,
  'kurukshetra': kurukshetraImg,
  'mayavi': amongusImg,
  'brandathon': brandathonImg,
  'setu-nirman': brandathonImg,
  'pixelperfect': pixelperfectImg,
  'pixel-perfect': pixelperfectImg,
  'dronevedha': dronevedhaImg,
  'drone-vedha': dronevedhaImg,
};

const EVENT_ICON_IMAGES: Record<string, string> = {
  'promptrelay': promptrelayIcon,
  'antaryami': promptrelayIcon,
  'chakravyuh': houdiniheistIcon,
  'datathon': datathonIcon,
  'hackmatrix': hackmatrixIcon,
  'kurukshetra': kurukshetraIcon,
  'mayavi': amongusIcon,
  'brandathon': brandathonIcon,
  'setu-nirman': brandathonIcon,
  'pixelperfect': pixelperfectIcon,
  'pixel-perfect': pixelperfectIcon,
  'dronevedha': dronevedhaIcon,
  'drone-vedha': dronevedhaIcon,
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
  showDescription?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  index = 0,
  compact = false,
  showDescription = false,
}) => {
  const navigate  = useNavigate();
  const yuga      = YUGAS[event.yuga];
  const yugaColor = YUGA_COLORS[event.yuga] ?? '#F5D76E';
  const nameImg = EVENT_NAME_IMAGES[event.id];
  const iconImg = EVENT_ICON_IMAGES[event.id];
  const yugaBadgeImg = YUGA_BADGE_IMAGES[event.yuga];

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/events/${event.id}`);
  };

  if (compact) {
    return (
      <div className={styles.compactCardWrapper}>
        {/* Clickable scroll card containing log background & enlarged event name logo */}
        <Link to={`/events/${event.id}`} className={styles.compactCard} title={event.name} onClick={handleNavigate}>
          <img src={logImg} alt="" className={styles.logBgImg} draggable={false} />
          <div className={styles.compactCardContent}>
            {iconImg && (
              <img src={iconImg} alt="" className={styles.compactEventIconImg} draggable={false} />
            )}
            {nameImg ? (
              <img src={nameImg} alt={event.name} className={styles.compactEventNameImg} />
            ) : (
              <h3 className={styles.compactEventName}>{event.name}</h3>
            )}
          </div>
        </Link>
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
      style={{ backgroundImage: `url(${calImg})` }}
      onClick={handleNavigate}
    >
      <a
        href={`/events/${event.id}`}
        className={styles.cardLinkOverlay}
        aria-label={event.name}
        onClick={handleNavigate}
      />

      {/* Header row with Yuga Badge on top-left and Team / Open tags on top-right */}
      <div className={styles.cardHeaderRow}>
        <div className={styles.topLeftYugaWrap}>
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
        </div>
        <div className={styles.topRightTagsWrap}>
          {event.registrationOpen && (
            <span className={styles.openTag}>Open</span>
          )}
          <div className={styles.teamTag}>
            <Users size={12} />
            <span>{event.teamSize}</span>
          </div>
        </div>
      </div>

      {nameImg ? (
        <div className={styles.eventNameImgWrap}>
          {iconImg && (
            <img
              src={iconImg}
              alt=""
              className={`${styles.eventIconImg} ${event.id === 'brandathon' || event.id === 'setu-nirman' ? styles.brandathonIcon : ''}`}
              draggable={false}
            />
          )}
          <img src={nameImg} alt={event.name} className={styles.eventNameImg} />
        </div>
      ) : (
        <div className={styles.eventNameImgWrap}>
          {iconImg && (
            <img
              src={iconImg}
              alt=""
              className={`${styles.eventIconImg} ${event.id === 'brandathon' || event.id === 'setu-nirman' ? styles.brandathonIcon : ''}`}
              draggable={false}
            />
          )}
          <h3 className={styles.eventName}>{event.name}</h3>
        </div>
      )}
      <div className={styles.tagline}>{event.tagline}</div>
      {showDescription && event.description && (
        <p className={styles.description}>{event.description}</p>
      )}

      {/* Register Now Button */}
      <a
        href={`/events/${event.id}`}
        className={styles.registerBtn}
        onClick={handleNavigate}
      >
        Register now <ArrowUpRight size={13} />
      </a>
    </motion.div>
  );
};

export default EventCard;

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import ConstellationsBg from '../../components/ConstellationsBg/ConstellationsBg';
import { YUGAS, YUGA_ORDER, type YugaKey } from '../../data/yugas';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './Calendar.module.css';

const calImg = getCloudinaryUrl('src/assets/cal.jpeg');
const saraswatiImg = getCloudinaryUrl('src/assets/saraswati.png');
const swbgImg = getCloudinaryUrl('src/assets/swbg.png');
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

interface ScheduleItem {
  id: string;
  eventId: string;
  name: string;
  yuga: YugaKey;
  day: 'day1' | 'day2' | 'day3';
  dayLabel: string;
  date: string;
  timeSlot: string;
  venue: string;
  description: string;
}

const SCHEDULE: ScheduleItem[] = [
  {
    id: 's-1',
    eventId: 'hackmatrix',
    name: 'Hackmatrix',
    yuga: 'satya',
    day: 'day1',
    dayLabel: 'Day 1',
    date: 'Oct 9, 2026',
    timeSlot: '09:30 AM – 01:30 PM',
    venue: 'Computer Labs, Block D',
    description: 'Matrix of pure code and truth hackathon competition.',
  },
  {
    id: 's-2',
    eventId: 'antaryami',
    name: 'Antaryami',
    yuga: 'satya',
    day: 'day1',
    dayLabel: 'Day 1',
    date: 'Oct 9, 2026',
    timeSlot: '02:30 PM – 05:30 PM',
    venue: 'Seminar Hall, Block A',
    description: 'Prompt relay challenge guiding AI systems with intuition.',
  },
  {
    id: 's-4',
    eventId: 'setu-nirman',
    name: 'Setu Nirman',
    yuga: 'treta',
    day: 'day2',
    dayLabel: 'Day 2',
    date: 'Oct 10, 2026',
    timeSlot: '09:30 AM – 12:30 PM',
    venue: 'Conference Room, Block C',
    description: 'Brandathon building brand identity and marketing strategy.',
  },
  {
    id: 's-5',
    eventId: 'kurukshetra',
    name: 'Kurukshetra (CTF)',
    yuga: 'dvapara',
    day: 'day2',
    dayLabel: 'Day 2',
    date: 'Oct 10, 2026',
    timeSlot: '01:30 PM – 04:30 PM',
    venue: 'Cyber Lab, Block D',
    description: 'Jeopardy-style Capture The Flag cybersecurity competition.',
  },
  {
    id: 's-6',
    eventId: 'datathon',
    name: 'Datathon',
    yuga: 'dvapara',
    day: 'day2',
    dayLabel: 'Day 2',
    date: 'Oct 10, 2026',
    timeSlot: '05:00 PM – 08:00 PM',
    venue: 'Data Analytics Lab, Block D',
    description: 'Data science and analytics battle for strategic insights.',
  },
  {
    id: 's-7',
    eventId: 'chakravyuh',
    name: 'Chakravyuh',
    yuga: 'kali',
    day: 'day3',
    dayLabel: 'Day 3',
    date: 'Oct 11, 2026',
    timeSlot: '10:00 AM – 02:00 PM',
    venue: 'Auditorium, Block A',
    description: 'Houdini-style escape and tactical heist puzzle maze.',
  },
  {
    id: 's-8',
    eventId: 'mayavi',
    name: 'Mayavi',
    yuga: 'kali',
    day: 'day3',
    dayLabel: 'Day 3',
    date: 'Oct 11, 2026',
    timeSlot: '03:00 PM – 07:00 PM',
    venue: 'Main Stage / Open Air Theatre',
    description: 'Social deduction and deception game unmasking impostors.',
  },
];

const Calendar: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<'all' | 'day1' | 'day2' | 'day3'>('all');
  const [selectedYuga, setSelectedYuga] = useState<YugaKey | 'all'>('all');

  const filteredSchedule = useMemo(() => {
    return SCHEDULE.filter((item) => {
      const matchDay = selectedDay === 'all' || item.day === selectedDay;
      const matchYuga = selectedYuga === 'all' || item.yuga === selectedYuga;
      return matchDay && matchYuga;
    });
  }, [selectedDay, selectedYuga]);

  return (
    <main className={styles.main}>
      <ConstellationsBg />
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.breadcrumb}>Artimas 2026 · Oct 9th–11th</div>
            <h1 className={styles.pageTitle}>Event Schedule &amp; Calendar</h1>
            <p className={styles.pageSubtitle}>
              Three days of cosmic competition spanning the 4 Yugas (October 9–11, 2026). Plan your journey through the arena.
            </p>

            {/* Goddess Saraswati illustration with rotating swbg background */}
            <motion.div
              className={styles.saraswatiWrap}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              <div className={styles.saraswatiHeroContainer}>
                <img src={swbgImg} alt="Celestial Background" className={styles.swbgRotateImg} />
                <img src={saraswatiImg} alt="Goddess Saraswati" className={styles.saraswatiHeroImg} />
              </div>
            </motion.div>

            {/* Filter controls */}
            <div className={styles.controlsRow}>
              {/* Day Tabs */}
              <div className={styles.dayTabs}>
                <button
                  className={`${styles.dayTab} ${selectedDay === 'all' ? styles.dayTabActive : ''}`}
                  onClick={() => setSelectedDay('all')}
                >
                  All 3 Days
                </button>
                <button
                  className={`${styles.dayTab} ${selectedDay === 'day1' ? styles.dayTabActive : ''}`}
                  onClick={() => setSelectedDay('day1')}
                >
                  Day 1 (Oct 9)
                </button>
                <button
                  className={`${styles.dayTab} ${selectedDay === 'day2' ? styles.dayTabActive : ''}`}
                  onClick={() => setSelectedDay('day2')}
                >
                  Day 2 (Oct 10)
                </button>
                <button
                  className={`${styles.dayTab} ${selectedDay === 'day3' ? styles.dayTabActive : ''}`}
                  onClick={() => setSelectedDay('day3')}
                >
                  Day 3 (Oct 11)
                </button>
              </div>

              {/* Yuga Filter Pills */}
              <div className={styles.filterRow}>
                <button
                  className={`${styles.filterBtn} ${selectedYuga === 'all' ? styles.filterActive : ''}`}
                  onClick={() => setSelectedYuga('all')}
                >
                  All Yugas
                </button>
                {YUGA_ORDER.map((key) => (
                  <button
                    key={key}
                    className={`${styles.filterBtn} ${selectedYuga === key ? styles.filterActive : ''}`}
                    onClick={() => setSelectedYuga(key)}
                  >
                    {YUGAS[key].icon} {YUGAS[key].name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Timeline List */}
      <section className={styles.scheduleSection}>
        <div className="container">
          <div className={styles.timelineList}>
            {filteredSchedule.map((item, i) => {
              const yugaTheme = YUGAS[item.yuga];
              return (
                <motion.div
                  key={item.id}
                  className={styles.eventCard}
                  style={{ backgroundImage: `url(${calImg})` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.cardHeaderRow}>
                    <div className={styles.topLeftYugaWrap}>
                      {YUGA_BADGE_IMAGES[item.yuga] && (
                        <img
                          src={YUGA_BADGE_IMAGES[item.yuga]}
                          alt={yugaTheme.name}
                          className={styles.yugaBadgeImg}
                        />
                      )}
                    </div>
                    <div className={styles.topRightDateWrap}>
                      <span className={styles.dayBadge}>{item.dayLabel} ({item.date})</span>
                    </div>
                  </div>
                  {EVENT_NAME_IMAGES[item.eventId] ? (
                    <img
                      src={EVENT_NAME_IMAGES[item.eventId]}
                      alt={item.name}
                      className={styles.eventNameImg}
                    />
                  ) : (
                    <h3 className={styles.eventName}>{item.name}</h3>
                  )}

                  <Link to={`/events/${item.eventId}`} className={styles.detailBtn}>
                    Event Info <ArrowUpRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
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

export default Calendar;

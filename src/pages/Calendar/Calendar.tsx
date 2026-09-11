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
const artimasonlineImg = getCloudinaryUrl('src/assets/artimasonline.png');
const artimas9thImg = getCloudinaryUrl('src/assets/artimas9th.png');
const artimas10thImg = getCloudinaryUrl('src/assets/artimas10th.png');
const artimas11thImg = getCloudinaryUrl('src/assets/artimas11th.png');
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

const DAY_BANNER_IMAGES: Record<string, string> = {
  all: artimasonlineImg,
  day1: artimas9thImg,
  day2: artimas10thImg,
  day3: artimas11thImg,
};

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
    id: 's-pixel-perfect',
    eventId: 'pixelperfect',
    name: 'Pixel Perfect',
    yuga: 'satya',
    day: 'day1',
    dayLabel: 'Day 1',
    date: 'Oct 9, 2026',
    timeSlot: '10:00 AM – 05:00 PM',
    venue: 'Computer Lab 3, Block D',
    description: 'Photography and visual mastery competition capturing precision and story.',
  },
  {
    id: 's-datathon',
    eventId: 'datathon',
    name: 'Datathon',
    yuga: 'satya',
    day: 'day1',
    dayLabel: 'Day 1',
    date: 'Oct 9, 2026',
    timeSlot: '09:00 AM – 05:00 PM',
    venue: 'Data Analytics Lab, Block D',
    description: 'Data science and analytics battle for strategic insights.',
  },
  {
    id: 's-mayavi',
    eventId: 'mayavi',
    name: 'Among Us in Real Life',
    yuga: 'kali',
    day: 'day1',
    dayLabel: 'Day 1',
    date: 'Oct 9, 2026',
    timeSlot: '11:00 AM – 04:00 PM',
    venue: 'Main Stage / Open Air Theatre',
    description: 'Social deduction and deception game unmasking impostors.',
  },
  {
    id: 's-promptrelay',
    eventId: 'promptrelay',
    name: 'Prompt Relay',
    yuga: 'treta',
    day: 'day2',
    dayLabel: 'Day 2',
    date: 'Oct 10, 2026',
    timeSlot: '09:00 AM – 05:00 PM',
    venue: 'Seminar Hall, Block A',
    description: 'Prompt relay challenge guiding AI systems with intuition.',
  },
  {
    id: 's-chakravyuh',
    eventId: 'chakravyuh',
    name: 'Houdini Heist',
    yuga: 'dvapara',
    day: 'day2',
    dayLabel: 'Day 2',
    date: 'Oct 10–11, 2026',
    timeSlot: '10:00 AM – 03:00 PM',
    venue: 'Auditorium / Rooms 6517–6519',
    description: 'Mythology-and-riddle-themed escape challenge inspired by the Chakravyuh.',
  },
  {
    id: 's-hackmatrix',
    eventId: 'hackmatrix',
    name: 'HackMatrix',
    yuga: 'kali',
    day: 'day2',
    dayLabel: 'Day 2',
    date: 'Oct 10–11, 2026',
    timeSlot: '09:00 AM (10th) – 11:00 AM (11th)',
    venue: 'Main Auditorium / Innovation Lab',
    description: '30-hour offline hackathon to build working AI/ML-integrated prototypes.',
  },
  {
    id: 's-brandathon',
    eventId: 'brandathon',
    name: 'Brand-A-Thon',
    yuga: 'treta',
    day: 'day3',
    dayLabel: 'Day 3',
    date: 'Oct 11, 2026',
    timeSlot: '07:00 AM – 08:00 PM',
    venue: 'Old Reading Hall, Block C',
    description: 'Brandathon building brand identity, marketing strategy, and shark tank pitch.',
  },
  {
    id: 's-kurukshetra',
    eventId: 'kurukshetra',
    name: 'Kurukshetra (CTF)',
    yuga: 'dvapara',
    day: 'day3',
    dayLabel: 'Day 3',
    date: 'Oct 11, 2026',
    timeSlot: '10:00 AM – 05:00 PM',
    venue: 'Cyber Lab, Block D',
    description: 'Capture The Flag cybersecurity competition and LLM jailbreaking.',
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
            <div className={styles.breadcrumb}>Dept. of CSE (AI &amp; ML) · Artimas 2026 · Oct 9th–11th</div>
            <h1 className={styles.pageTitle}>Event Schedule &amp; Calendar</h1>
            <p className={styles.pageSubtitle}>
              Three days of cosmic competition spanning the 4 Yugas (October 9–11, 2026). Plan your journey through the arena.
            </p>

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
          {/* Day Banner Image Card with curved background */}
          {DAY_BANNER_IMAGES[selectedDay] && (
            <motion.div
              key={selectedDay}
              className={styles.bannerCard}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45 }}
            >
              <img
                src={DAY_BANNER_IMAGES[selectedDay]}
                alt={selectedDay === 'all' ? 'Artimas All 3 Days' : `Artimas ${selectedDay}`}
                className={styles.dayBannerImg}
              />
            </motion.div>
          )}

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
                    <div className={styles.eventNameImgWrap}>
                      <img
                        src={EVENT_NAME_IMAGES[item.eventId]}
                        alt={item.name}
                        className={styles.eventNameImg}
                      />
                    </div>
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
        secondaryButton={{ label: 'Contact AiMSA', to: '/contact' }}
      />
    </main>
  );
};

export default Calendar;

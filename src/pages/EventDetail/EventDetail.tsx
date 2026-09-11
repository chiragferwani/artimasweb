import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Phone, Download, Trophy, Layers, Globe, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import { EVENTS, YUGAS } from '../../data/yugas';
import ParticleField from '../../components/ParticleField/ParticleField';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import getCloudinaryUrl from '../../utils/cloudinary';

const promptrelayName = getCloudinaryUrl('src/assets/eventnames/promptrelay.png');
const houdiniheistName = getCloudinaryUrl('src/assets/eventnames/houdiniheist.png');
const datathonName = getCloudinaryUrl('src/assets/eventnames/datathon.png');
const hackmatrixName = getCloudinaryUrl('src/assets/eventnames/hackmatrix.png');
const kurukshetraName = getCloudinaryUrl('src/assets/eventnames/kurukshetra.png');
const amongusName = getCloudinaryUrl('src/assets/eventnames/amongus.png');
const brandathonName = getCloudinaryUrl('src/assets/eventnames/brandathon.png');
const pixelperfectName = getCloudinaryUrl('src/assets/eventnames/pixelperfect.png');
const dronevedhaName = getCloudinaryUrl('src/assets/eventnames/dronevedha.png');
const satyugBadgeImg = getCloudinaryUrl('src/assets/eventnames/satyug.png');
const tretayugBadgeImg = getCloudinaryUrl('src/assets/eventnames/tretayug.png');
const dwaparyugBadgeImg = getCloudinaryUrl('src/assets/eventnames/dwaparyug.png');
const kalyugBadgeImg = getCloudinaryUrl('src/assets/eventnames/kalyug.png');
const sudarshanImg = getCloudinaryUrl('src/assets/sudarshan.png');
const silverImg = getCloudinaryUrl('src/assets/silver.png');
const goldenImg = getCloudinaryUrl('src/assets/golden.png');
const bronzeImg = getCloudinaryUrl('src/assets/bronze.png');

// ═══════ Event Heads Data ═══════
// ═══════ Event Heads Data ═══════
interface EventHead {
  name: string;
  phone: string;
  avatar: string;
}

const getAvatar = (p: string) => getCloudinaryUrl(p, { width: 220, height: 220, crop: 'fill', quality: 'auto' });

const datathonHeads: EventHead[] = [
  { name: 'Shamal', phone: '9511746783', avatar: getAvatar('src/assets/teamaimsa/shamal.png') },
  { name: 'Meet', phone: '7588235428', avatar: getAvatar('src/assets/teamaimsa/meet.png') },
  { name: 'Rutuja', phone: '8261977022', avatar: getAvatar('src/assets/teamaimsa/rutuja.png') },
  { name: 'Ansh', phone: '8408905979', avatar: getAvatar('src/assets/teamaimsa/ansh.png') },
];

const promptRelayHeads: EventHead[] = [
  { name: 'Muskan', phone: '9266860617', avatar: getAvatar('src/assets/teamaimsa/muskan.png') },
  { name: 'Anuska', phone: '8104595396', avatar: getAvatar('src/assets/teamaimsa/anuska.png') },
];

const houdiniHeads: EventHead[] = [
  { name: 'Parth', phone: '8788423371', avatar: getAvatar('src/assets/teamaimsa/parth.png') },
  { name: 'Sanika', phone: '8605768657', avatar: getAvatar('src/assets/teamaimsa/sanika.png') },
  { name: 'Ved', phone: '8626049559', avatar: getAvatar('src/assets/teamaimsa/ved.png') },
  { name: 'Bhumika', phone: '8766642327', avatar: getAvatar('src/assets/teamaimsa/bhumika.png') },
];

const amongUsHeads: EventHead[] = [
  { name: 'Soham', phone: '7972818734', avatar: getAvatar('src/assets/teamaimsa/soham.png') },
  { name: 'Sarfaraz', phone: '9359800047', avatar: getAvatar('src/assets/teamaimsa/sarfaraz.png') },
  { name: 'Pratham', phone: '8263967306', avatar: getAvatar('src/assets/teamaimsa/pratham.png') },
  { name: 'Jatin', phone: '7841969111', avatar: getAvatar('src/assets/teamaimsa/jatin.png') },
];

const ctfHeads: EventHead[] = [
  { name: 'Kshitij', phone: '93322642174', avatar: getAvatar('src/assets/teamaimsa/kshitij.png') },
  { name: 'Vrushabh', phone: '7499340612', avatar: getAvatar('src/assets/teamaimsa/vrushabh.png') },
];

const brandathonHeads: EventHead[] = [
  { name: 'Debottam', phone: '8698651336', avatar: getAvatar('src/assets/teamaimsa/debottam.png') },
  { name: 'Aarya', phone: '7743850757', avatar: getAvatar('src/assets/teamaimsa/arya.png') },
  { name: 'Tanmayee', phone: '9075859781', avatar: getAvatar('src/assets/teamaimsa/tanmayee.png') },
  { name: 'Sharvari', phone: '8459068976', avatar: getAvatar('src/assets/teamaimsa/sharvari.png') },
  { name: 'Prince', phone: '8459633120', avatar: getAvatar('src/assets/teamaimsa/prince.png') },
];

const surpriseEventHeads: EventHead[] = [
  { name: 'Hari', phone: '9404260399', avatar: getAvatar('src/assets/teamaimsa/hari.png') },
  { name: 'Nirbhay', phone: '8668954048', avatar: getAvatar('src/assets/teamaimsa/nirbhay.png') },
  { name: 'Krish', phone: '9922499717', avatar: getAvatar('src/assets/teamaimsa/krish.png') },
];

const EVENT_HEADS: Record<string, EventHead[]> = {
  datathon: datathonHeads,
  promptrelay: promptRelayHeads,
  antaryami: promptRelayHeads,
  chakravyuh: houdiniHeads,
  houdini: houdiniHeads,
  houdiniheist: houdiniHeads,
  mayavi: amongUsHeads,
  amongus: amongUsHeads,
  kurukshetra: ctfHeads,
  ctf: ctfHeads,
  brandathon: brandathonHeads,
  'setu-nirman': brandathonHeads,
  pixelperfect: surpriseEventHeads,
  'pixel-perfect': surpriseEventHeads,
};

import styles from './EventDetail.module.css';

const EVENT_NAME_IMAGES: Record<string, string> = {
  promptrelay: promptrelayName,
  antaryami: promptrelayName,
  chakravyuh: houdiniheistName,
  datathon: datathonName,
  hackmatrix: hackmatrixName,
  kurukshetra: kurukshetraName,
  mayavi: amongusName,
  brandathon: brandathonName,
  'setu-nirman': brandathonName,
  pixelperfect: pixelperfectName,
  'pixel-perfect': pixelperfectName,
  dronevedha: dronevedhaName,
  'drone-vedha': dronevedhaName,
};

const YUGA_BADGE_IMAGES: Record<string, string> = {
  satya: satyugBadgeImg,
  treta: tretayugBadgeImg,
  dvapara: dwaparyugBadgeImg,
  kali: kalyugBadgeImg,
};


const WhatsAppIcon: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = '#FFFFFF' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color, flexShrink: 0 }}
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16ZM16.56 14.37C16.31 14.25 15.09 13.65 14.86 13.57C14.64 13.48 14.47 13.44 14.31 13.69C14.14 13.93 13.67 14.48 13.53 14.65C13.38 14.81 13.24 14.83 12.99 14.71C12.75 14.59 11.96 14.33 11.03 13.5C10.3 12.85 9.81 12.05 9.67 11.81C9.52 11.56 9.65 11.43 9.77 11.31C9.88 11.2 10.02 11.02 10.14 10.88C10.26 10.74 10.3 10.63 10.39 10.47C10.47 10.31 10.43 10.16 10.37 10.04C10.31 9.92 9.82 8.72 9.62 8.23C9.42 7.76 9.22 7.82 9.07 7.81C8.93 7.81 8.76 7.81 8.6 7.81C8.44 7.81 8.17 7.87 7.95 8.11C7.72 8.36 7.09 8.95 7.09 10.15C7.09 11.35 7.97 12.51 8.09 12.67C8.21 12.84 9.8 15.29 12.24 16.34C12.82 16.59 13.27 16.74 13.63 16.85C14.22 17.04 14.75 17.01 15.18 16.95C15.66 16.88 16.66 16.35 16.86 15.77C17.07 15.2 17.07 14.71 17.01 14.61C16.95 14.51 16.8 14.49 16.56 14.37Z" />
  </svg>
);

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expandedRounds, setExpandedRounds] = React.useState(false);
  const [isScrolledDown, setIsScrolledDown] = React.useState(false);
  const [isRegistering, setIsRegistering] = React.useState(false);
  const mainContentRef = React.useRef<HTMLDivElement>(null);
  const event = EVENTS.find((e) => e.id === id);

  const handleToggleRegister = () => {
    setIsRegistering((prev) => !prev);
    if (!isRegistering && mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [id]);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 40) {
        setIsScrolledDown(false);
      } else if (currentScrollY > lastScrollY + 4 && currentScrollY > 60) {
        setIsScrolledDown(true);
      } else if (currentScrollY < lastScrollY - 6) {
        setIsScrolledDown(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!event || event.id === 'dronevedha') {
    return (
      <main className={styles.notFound}>
        <h2>Event not found</h2>
        <Link to="/events" className={styles.backLink}>
          ← Back to Events
        </Link>
      </main>
    );
  }

  const yuga = YUGAS[event.yuga];

  return (
    <main
      className={styles.main}
      style={
        {
          '--yuga-primary': yuga.colors.primary,
          '--yuga-accent': yuga.colors.accent,
          '--yuga-glow': yuga.colors.glow,
          '--yuga-border': yuga.colors.border,
        } as React.CSSProperties
      }
    >
      {/* Hero banner */}
      <section className={styles.hero}>
        <ParticleField
          colors={[yuga.colors.primary, yuga.colors.accent, '#ffffff20']}
          count={16}
        />

        <div className="container">
          {/* Back button wrapper - aligned left */}
          <div className={styles.backBtnWrap}>
            <button
              className={`${styles.backBtn} ${isScrolledDown ? styles.backBtnCollapsed : ''}`}
              onClick={() => navigate(-1)}
              aria-label="Back to Events"
              title="Back to Events"
            >
              <ArrowLeft size={16} />
              <span className={styles.backBtnText}>Back to Events</span>
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.heroContent}
          >
            {/* Yuga badge PNG image */}
            {YUGA_BADGE_IMAGES[event.yuga] ? (
              <div className={styles.yugaBadgeImgWrap}>
                <img
                  src={YUGA_BADGE_IMAGES[event.yuga]}
                  alt={`${yuga.name} Yuga`}
                  className={styles.yugaBadgeImg}
                />
              </div>
            ) : (
              <div
                className={styles.yugaBadge}
                style={{ color: yuga.colors.primary, borderColor: `${yuga.colors.primary}30` }}
              >
                {yuga.icon} {yuga.name} · {yuga.virtue}
              </div>
            )}

            {/* Event Name Image or Text Title */}
            {EVENT_NAME_IMAGES[event.id] ? (
              <div className={styles.eventNameImgWrap}>
                <img
                  src={EVENT_NAME_IMAGES[event.id]}
                  alt={event.name}
                  className={styles.eventNameImg}
                />
              </div>
            ) : (
              <h1 className={styles.eventTitle}>{event.name}</h1>
            )}

            <p className={styles.eventTagline}>{event.tagline}</p>

            {/* Bhagavad Gita Shloka Card */}
            {event.gitaShloka && (
              <div className={styles.shlokaCard}>
                {/* Blurred Sudarshan Chakra Background */}
                <div className={styles.shlokaSudarshanWrap}>
                  <img
                    src={sudarshanImg}
                    alt=""
                    className={styles.shlokaSudarshanImg}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className={styles.shlokaContent}>
                  <div className={styles.shlokaSanskrit}>
                    {event.gitaShloka.sanskrit.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < event.gitaShloka!.sanskrit.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className={styles.shlokaTransliteration}>{event.gitaShloka.transliteration}</div>
                  <p className={styles.shlokaMeaning}>{event.gitaShloka.meaning}</p>
                </div>
              </div>
            )}

            {/* Meta grid */}
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <div className={styles.metaIconWrap}>
                  <Calendar size={18} />
                </div>
                <div className={styles.metaTextWrap}>
                  <div className={styles.metaLabel}>Date</div>
                  <div className={styles.metaValue}>{event.date}</div>
                </div>
              </div>
              <div className={styles.metaItem}>
                <div className={styles.metaIconWrap}>
                  <MapPin size={18} />
                </div>
                <div className={styles.metaTextWrap}>
                  <div className={styles.metaLabel}>Venue</div>
                  <div className={styles.metaValue}>{event.venue}</div>
                </div>
              </div>
              <div className={styles.metaItem}>
                <div className={styles.metaIconWrap}>
                  <Users size={18} />
                </div>
                <div className={styles.metaTextWrap}>
                  <div className={styles.metaLabel}>Team Size</div>
                  <div className={styles.metaValue}>{event.teamSize}</div>
                </div>
              </div>
              {event.numberOfRounds && (
                <div className={styles.metaItem}>
                  <div className={styles.metaIconWrap}>
                    <Layers size={18} />
                  </div>
                  <div className={styles.metaTextWrap}>
                    <div className={styles.metaLabel}>Rounds</div>
                    <div className={styles.metaValue}>{event.numberOfRounds} Rounds</div>
                  </div>
                </div>
              )}
              <div className={`${styles.metaItem} ${styles.metaItemTime}`}>
                <div className={styles.metaIconWrap}>
                  <Clock size={18} />
                </div>
                <div className={styles.metaTextWrap}>
                  <div className={styles.metaLabel}>Time</div>
                  <div className={styles.metaValue}>{event.time}</div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className="container">
          {/* Centered Prize Pool Section */}
          <motion.div
            className={styles.prizePoolWrap}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {event.prizes && (
              <div className={styles.prizeTotalBanner}>
                <span className={styles.prizeTotalBadge}>
                  <Trophy size={14} /> Total Prize Pool
                </span>
                <span className={styles.prizeTotalValue}>
                  ₹{typeof event.prizes.totalCashPrize === 'number' ? event.prizes.totalCashPrize.toLocaleString('en-IN') : event.prizes.totalCashPrize}
                </span>
              </div>
            )}

            {event.prizes?.prizeList && event.prizes.prizeList.length > 3 ? (
              /* Multi-prize grid for events with >3 awards (e.g. HackMatrix 5 prizes) */
              <div className={styles.multiPrizeGrid}>
                {event.prizes.prizeList.map((prize, pIdx) => {
                  const itemClass =
                    prize.type === 'gold'
                      ? styles.goldenPrizeItem
                      : prize.type === 'silver'
                      ? styles.silverPrizeItem
                      : prize.type === 'bronze'
                      ? styles.bronzePrizeItem
                      : styles.specialPrizeItem;
                  const pedestalImg =
                    prize.type === 'gold'
                      ? goldenImg
                      : prize.type === 'silver'
                      ? silverImg
                      : bronzeImg;

                  return (
                    <div key={pIdx} className={`${styles.prizeItem} ${itemClass}`}>
                      <div className={styles.prizeCardBadge}>
                        <span className={styles.prizeRankLabel}>{prize.label}</span>
                        <span className={styles.prizeRankValue}>{prize.amount}</span>
                      </div>
                      <img
                        src={pedestalImg}
                        alt={prize.label}
                        className={styles.prizePedestalImg}
                        draggable={false}
                      />
                    </div>
                  );
                })}
              </div>
            ) : event.id === 'pixelperfect' ? (
              /* 2 Centered Golden Winners for Pixel Perfect */
              <div className={`${styles.prizePoolGrid} ${styles.dualPrizeGrid}`}>
                <div className={`${styles.prizeItem} ${styles.goldenPrizeItem}`}>
                  <div className={styles.prizeCardBadge}>
                    <span className={styles.prizeRankLabel}>Winner 1</span>
                    <span className={styles.prizeRankValue}>₹1,500</span>
                  </div>
                  <img
                    src={goldenImg}
                    alt="Winner 1 - Golden"
                    className={styles.prizePedestalImg}
                    draggable={false}
                  />
                </div>
                <div className={`${styles.prizeItem} ${styles.goldenPrizeItem}`}>
                  <div className={styles.prizeCardBadge}>
                    <span className={styles.prizeRankLabel}>Winner 2</span>
                    <span className={styles.prizeRankValue}>₹1,500</span>
                  </div>
                  <img
                    src={goldenImg}
                    alt="Winner 2 - Golden"
                    className={styles.prizePedestalImg}
                    draggable={false}
                  />
                </div>
              </div>
            ) : (!event.prizes?.second && !event.prizes?.third) || event.id === 'chakravyuh' || event.id === 'mayavi' ? (
              /* Single Winner Pedestal for Houdini Heist / Among Us / Single prize events */
              <div className={`${styles.prizePoolGrid} ${styles.singlePrizeGrid}`}>
                <div className={`${styles.prizeItem} ${styles.goldenPrizeItem} ${styles.singleGoldenPrize}`}>
                  <div className={styles.prizeCardBadge}>
                    <span className={styles.prizeRankLabel}>Winner</span>
                    <span className={styles.prizeRankValue}>
                      {event.prizes?.first
                        ? `₹${event.prizes.first.toLocaleString('en-IN')}`
                        : `₹${typeof event.prizes?.totalCashPrize === 'number' ? event.prizes.totalCashPrize.toLocaleString('en-IN') : event.prizes?.totalCashPrize || '10,000'}`}
                    </span>
                  </div>
                  <img
                    src={goldenImg}
                    alt="Winner Prize"
                    className={styles.prizePedestalImg}
                    draggable={false}
                  />
                </div>
              </div>
            ) : (
              /* 3 Podium Pedestals */
              <div className={styles.prizePoolGrid}>
                {/* 2nd Prize - Silver */}
                <div className={`${styles.prizeItem} ${styles.silverPrizeItem}`}>
                  <div className={styles.prizeCardBadge}>
                    <span className={styles.prizeRankLabel}>
                      {event.id === 'pixelperfect' ? 'Winner 2' : '2nd Prize'}
                    </span>
                    <span className={styles.prizeRankValue}>
                      {event.prizes?.second ? `₹${event.prizes.second.toLocaleString('en-IN')}` : '—'}
                    </span>
                  </div>
                  <img
                    src={silverImg}
                    alt="2nd Prize - Silver"
                    className={styles.prizePedestalImg}
                    draggable={false}
                  />
                </div>

                {/* 1st Prize - Golden */}
                <div className={`${styles.prizeItem} ${styles.goldenPrizeItem}`}>
                  <div className={styles.prizeCardBadge}>
                    <span className={styles.prizeRankLabel}>
                      {event.id === 'pixelperfect' ? 'Winner 1' : '1st Prize'}
                    </span>
                    <span className={styles.prizeRankValue}>
                      {event.prizes?.first ? `₹${event.prizes.first.toLocaleString('en-IN')}` : '—'}
                    </span>
                  </div>
                  <img
                    src={goldenImg}
                    alt="1st Prize - Golden"
                    className={styles.prizePedestalImg}
                    draggable={false}
                  />
                </div>

                {/* 3rd Prize - Bronze */}
                {event.prizes?.third !== null && event.prizes?.third !== undefined ? (
                  <div className={`${styles.prizeItem} ${styles.bronzePrizeItem}`}>
                    <div className={styles.prizeCardBadge}>
                      <span className={styles.prizeRankLabel}>3rd Prize</span>
                      <span className={styles.prizeRankValue}>
                        {`₹${event.prizes.third.toLocaleString('en-IN')}`}
                      </span>
                    </div>
                    <img
                      src={bronzeImg}
                      alt="3rd Prize - Bronze"
                      className={styles.prizePedestalImg}
                      draggable={false}
                    />
                  </div>
                ) : null}
              </div>
            )}

            {event.prizes?.note && (
              <p className={styles.prizeNoteText}>* {event.prizes.note}</p>
            )}
          </motion.div>

          {/* Mobile Top Register Banner (Task 15: Place Register Now above for mobile view) */}
          <div className={styles.mobileRegisterBanner}>
            {event.id === 'hackmatrix' ? (
              <a
                href="https://hackmatrix.gfgpccoe.in/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileRegisterBtn}
              >
                <span>Register Now for HackMatrix</span>
                <ExternalLink size={16} />
              </a>
            ) : (
              <button
                type="button"
                onClick={handleToggleRegister}
                className={styles.mobileRegisterBtn}
              >
                {isRegistering ? '← View Event Details' : 'Register Now'}
              </button>
            )}
          </div>

          <div className={styles.contentGrid}>
            {/* Main content with flip transition */}
            <div ref={mainContentRef} className={styles.mainContent}>
              <AnimatePresence mode="wait">
                {!isRegistering ? (
                  <motion.div
                    key="event-details"
                    initial={{ opacity: 0, rotateY: -6, y: 15 }}
                    animate={{ opacity: 1, rotateY: 0, y: 0 }}
                    exit={{ opacity: 0, rotateY: 6, y: -15 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={`${styles.block} ${styles.aboutBlock}`}>
                      <h2 className={styles.blockTitle}>About the Event</h2>
                      <p className={styles.blockText}>{event.about || event.description}</p>
                    </div>

                    {/* Competition Rounds & Structure Block */}
                    {event.rounds && event.rounds.length > 0 && (
                      <div className={`${styles.block} ${styles.roundsBlock}`}>
                        <h2 className={styles.blockTitle}>Competition Rounds &amp; Timeline</h2>
                        <div className={styles.roundsList}>
                          {(expandedRounds ? event.rounds : event.rounds.slice(0, 2)).map((round) => (
                            <div key={round.roundNumber} className={styles.roundCard}>
                              <div className={styles.roundHeader}>
                                <div className={styles.roundTitleWrap}>
                                  <span className={styles.roundBadge}>
                                    Round 0{round.roundNumber}
                                  </span>
                                  <h3 className={styles.roundTitle}>{round.title}</h3>
                                </div>
                                <span
                                  className={`${styles.roundModeBadge} ${
                                    round.mode === 'Online'
                                      ? styles.roundModeOnline
                                      : styles.roundModeOffline
                                  }`}
                                >
                                  {round.mode === 'Online' ? <Globe size={12} /> : <MapPin size={12} />}
                                  {round.mode}
                                </span>
                              </div>

                              <div className={styles.roundMetaRow}>
                                {round.date && (
                                  <span className={styles.roundMetaChip}>
                                    <Calendar size={13} /> {round.date}
                                  </span>
                                )}
                                {round.time && (
                                  <span className={styles.roundMetaChip}>
                                    <Clock size={13} /> {round.time}
                                  </span>
                                )}
                                {round.venue && (
                                  <span className={styles.roundMetaChip}>
                                    <MapPin size={13} /> {round.venue}
                                  </span>
                                )}
                              </div>

                              <p className={styles.roundDesc}>{round.description}</p>
                            </div>
                          ))}
                        </div>

                        {event.rounds.length > 2 && (
                          <div className={styles.roundsToggleWrap}>
                            <button
                              type="button"
                              className={styles.roundsToggleBtn}
                              onClick={() => setExpandedRounds((prev) => !prev)}
                            >
                              {expandedRounds ? (
                                <>
                                  <span>Show Less</span>
                                  <ChevronUp size={16} />
                                </>
                              ) : (
                                <>
                                  <span>Read More</span>
                                  <ChevronDown size={16} />
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="registration-form"
                    initial={{ opacity: 0, rotateY: 6, y: 15 }}
                    animate={{ opacity: 1, rotateY: 0, y: 0 }}
                    exit={{ opacity: 0, rotateY: -6, y: -15 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <RegistrationForm
                      event={event}
                      onCancel={() => setIsRegistering(false)}
                      yugaColor={yuga.colors.primary}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <motion.aside
              className={styles.sidebar}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Registration */}
              <div className={`${styles.sideCard} ${styles.registrationSideCard}`}>
                <h3 className={styles.sideTitle}>Registration</h3>
                {event.id === 'hackmatrix' ? (
                  <a
                    href="https://hackmatrix.gfgpccoe.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.registerSideBtn}
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Register Now</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={handleToggleRegister}
                    className={styles.registerSideBtn}
                  >
                    {isRegistering ? 'View Details' : 'Register Now'}
                  </button>
                )}
              </div>

              {/* Registration Fee */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Registration Fee</h3>
                <div className={styles.feeAmount}>
                  {event.id === 'brandathon'
                    ? '₹100 per team'
                    : event.id === 'datathon'
                    ? '₹100 / ₹150'
                    : (event.registrationFee || '₹100')}
                </div>
                <div className={styles.feeNote}>
                  {event.id === 'brandathon'
                    ? '(Round 1 · for outside PCCOE students)'
                    : event.id === 'datathon'
                    ? '(₹100 for 1 · ₹150 for 2 members)'
                    : '(for outside PCCOE students)'}
                </div>
                {event.id === 'brandathon' && (
                  <div className={styles.feeSubNote}>
                    * Additional ₹100 per team for teams qualifying to Round 2 (PCCOE teams free)
                  </div>
                )}
                {event.id === 'datathon' && (
                  <div className={styles.feeSubNote}>
                    * Outside PCCOE: ₹100 for 1 participant, ₹150 for 2 participants (PCCOE teams free)
                  </div>
                )}
              </div>

              {/* Rules of the Event */}
              <div className={`${styles.sideCard} ${styles.rulesSideCard}`}>
                <h3 className={styles.sideTitle}>Rules of the Event</h3>
                <ul className={styles.rulesList}>
                  {event.rules.map((rule, i) => (
                    <li key={i} className={styles.ruleItem}>
                      <span className={styles.ruleNum}>{String(i + 1).padStart(2, '0')}</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.rulesDownloadWrap}>
                  {event.rulebookUrl ? (
                    <a
                      href={event.rulebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.rulesDownloadBtn}
                    >
                      <Download size={16} /> Download Rulebook
                    </a>
                  ) : (
                    <button className={styles.rulesDownloadBtn} disabled>
                      <Download size={16} /> Download Rulebook
                    </button>
                  )}
                </div>
              </div>

              {/* Join WhatsApp Group Button */}
              <div className={styles.joinGroupWrap}>
                <a
                  href="https://chat.whatsapp.com/DgwPI9EgaAQ1Z1epQcUZ40?s=qt&p=a&mlu=4&ilr=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.joinWhatsAppBtn}
                  title="Join WhatsApp Group"
                >
                  <WhatsAppIcon size={20} color="#FFFFFF" />
                  <span>Join WhatsApp Group</span>
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Event Heads Section */}
      {EVENT_HEADS[event.id] && EVENT_HEADS[event.id].length > 0 && (
        <section className={styles.eventHeadsSection}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.eventHeadsHeader}
            >
              <span className={styles.eventHeadsEyebrow}>AiMSA · Event Management</span>
              <h2 className={styles.eventHeadsTitle}>Event Heads</h2>
              <p className={styles.eventHeadsSubtitle}>
                The team behind {event.name}. Reach out for any queries.
              </p>
            </motion.div>

            <div className={styles.eventHeadsGrid}>
              {EVENT_HEADS[event.id].map((head, i) => (
                <motion.div
                  key={head.name}
                  className={styles.eventHeadCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.eventHeadAvatarWrap}>
                    <img
                      src={head.avatar}
                      alt={head.name}
                      className={styles.eventHeadAvatar}
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className={styles.eventHeadInfoRow}>
                    <h4 className={styles.eventHeadName}>{head.name}</h4>
                    <a
                      href={`tel:+91${head.phone}`}
                      className={styles.eventHeadCallIconBtn}
                      title={`Call ${head.name} (+91 ${head.phone})`}
                      aria-label={`Call ${head.name}`}
                    >
                      <Phone size={15} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cta Block */}
      <CtaBlock
        primaryButton={{ label: 'Register for Event', to: '/contact' }}
        secondaryButton={{ label: 'Back to All Events', to: '/events' }}
      />
    </main>
  );
};

export default EventDetail;

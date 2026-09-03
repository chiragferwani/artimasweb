import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Phone, Download, Trophy, Layers, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import { EVENTS, YUGAS } from '../../data/yugas';
import ParticleField from '../../components/ParticleField/ParticleField';
import getCloudinaryUrl from '../../utils/cloudinary';

const antaryamiName = getCloudinaryUrl('src/assets/eventnames/antaryami.png');
const chakravyuhName = getCloudinaryUrl('src/assets/eventnames/chakravyuh.png');
const datathonName = getCloudinaryUrl('src/assets/eventnames/datathon.png');
const hackmatrixName = getCloudinaryUrl('src/assets/eventnames/hackmatrix.png');
const kurukshetraName = getCloudinaryUrl('src/assets/eventnames/kurukshetra.png');
const mayaviName = getCloudinaryUrl('src/assets/eventnames/mayavi.png');
const setunirmanName = getCloudinaryUrl('src/assets/eventnames/setunirman.png');
const satyugBadgeImg = getCloudinaryUrl('src/assets/eventnames/satyug.png');
const tretayugBadgeImg = getCloudinaryUrl('src/assets/eventnames/tretayug.png');
const dwaparyugBadgeImg = getCloudinaryUrl('src/assets/eventnames/dwaparyug.png');
const kalyugBadgeImg = getCloudinaryUrl('src/assets/eventnames/kalyug.png');
const kurukshetraBannerImg = getCloudinaryUrl('src/assets/kurukshetra.png');
const setuNirmanBannerImg = getCloudinaryUrl('src/assets/setunirman.png');
const chakravyuhBannerImg = getCloudinaryUrl('src/assets/chakravyuh.png');
const datathonBannerImg = getCloudinaryUrl('src/assets/datathon.png');
const mayaviBannerImg = getCloudinaryUrl('src/assets/mayavi.png');
const antaryamiBannerImg = getCloudinaryUrl('src/assets/antaryami.png');
const hackmatrixBannerImg = getCloudinaryUrl('src/assets/hackmatrix.png');
const sudarshanImg = getCloudinaryUrl('src/assets/sudarshan.png');
const silverImg = getCloudinaryUrl('src/assets/silver.png');
const goldenImg = getCloudinaryUrl('src/assets/golden.png');
const bronzeImg = getCloudinaryUrl('src/assets/bronze.png');
import styles from './EventDetail.module.css';

const EVENT_NAME_IMAGES: Record<string, string> = {
  antaryami: antaryamiName,
  chakravyuh: chakravyuhName,
  datathon: datathonName,
  hackmatrix: hackmatrixName,
  kurukshetra: kurukshetraName,
  mayavi: mayaviName,
  'setu-nirman': setunirmanName,
};

const YUGA_BADGE_IMAGES: Record<string, string> = {
  satya: satyugBadgeImg,
  treta: tretayugBadgeImg,
  dvapara: dwaparyugBadgeImg,
  kali: kalyugBadgeImg,
};

const EVENT_ALT_IMAGES: Record<string, string> = {
  antaryami: getCloudinaryUrl('src/assets/eventnames/promptrelay.png'),
  mayavi: getCloudinaryUrl('src/assets/eventnames/amongus.png'),
  'setu-nirman': getCloudinaryUrl('src/assets/eventnames/brandathon.png'),
  chakravyuh: getCloudinaryUrl('src/assets/eventnames/houdini.png'),
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
  const event = EVENTS.find((e) => e.id === id);

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

  if (!event) {
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
          count={40}
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
                {EVENT_ALT_IMAGES[event.id] && (
                  <img 
                    src={EVENT_ALT_IMAGES[event.id]} 
                    alt="Alternative Event Name" 
                    className={styles.eventAltNameImg} 
                  />
                )}
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
                  <Clock size={18} />
                </div>
                <div className={styles.metaTextWrap}>
                  <div className={styles.metaLabel}>Time</div>
                  <div className={styles.metaValue}>{event.time}</div>
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
            </div>

            {/* Feature Illustration Image for Kurukshetra & Setu Nirman */}
            {event.id === 'kurukshetra' && (
              <motion.div
                className={styles.heroFeatureImgWrap}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <img
                  src={kurukshetraBannerImg}
                  alt="Kurukshetra CTF Illustration"
                  className={styles.heroFeatureImg}
                />
              </motion.div>
            )}

            {event.id === 'setu-nirman' && (
              <motion.div
                className={`${styles.heroFeatureImgWrap} ${styles.setuNirmanFeatureImgWrap}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <img
                  src={setuNirmanBannerImg}
                  alt="Setu Nirman Illustration"
                  className={`${styles.heroFeatureImg} ${styles.setuNirmanFeatureImg}`}
                />
              </motion.div>
            )}

            {event.id === 'chakravyuh' && (
              <motion.div
                className={`${styles.heroFeatureImgWrap} ${styles.chakravyuhFeatureImgWrap}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <img
                  src={chakravyuhBannerImg}
                  alt="Chakravyuh Illustration"
                  className={`${styles.heroFeatureImg} ${styles.chakravyuhFeatureImg}`}
                />
              </motion.div>
            )}

            {event.id === 'datathon' && (
              <motion.div
                className={`${styles.heroFeatureImgWrap} ${styles.datathonFeatureImgWrap}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <img
                  src={datathonBannerImg}
                  alt="Datathon Illustration"
                  className={`${styles.heroFeatureImg} ${styles.datathonFeatureImg}`}
                />
              </motion.div>
            )}

            {event.id === 'mayavi' && (
              <motion.div
                className={`${styles.heroFeatureImgWrap} ${styles.mayaviFeatureImgWrap}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <img
                  src={mayaviBannerImg}
                  alt="Mayavi Illustration"
                  className={`${styles.heroFeatureImg} ${styles.mayaviFeatureImg}`}
                />
              </motion.div>
            )}

            {event.id === 'antaryami' && (
              <motion.div
                className={`${styles.heroFeatureImgWrap} ${styles.antaryamiFeatureImgWrap}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <img
                  src={antaryamiBannerImg}
                  alt="Antaryami Illustration"
                  className={`${styles.heroFeatureImg} ${styles.antaryamiFeatureImg}`}
                />
              </motion.div>
            )}

            {event.id === 'hackmatrix' && (
              <motion.div
                className={`${styles.heroFeatureImgWrap} ${styles.hackmatrixFeatureImgWrap}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <img
                  src={hackmatrixBannerImg}
                  alt="Hackmatrix Illustration"
                  className={`${styles.heroFeatureImg} ${styles.hackmatrixFeatureImg}`}
                />
              </motion.div>
            )}
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
                  <Trophy size={14} /> Total Cash Prize Pool
                </span>
                <span className={styles.prizeTotalValue}>
                  ₹{typeof event.prizes.totalCashPrize === 'number' ? event.prizes.totalCashPrize.toLocaleString('en-IN') : event.prizes.totalCashPrize}
                </span>
              </div>
            )}

            {(!event.prizes?.second && !event.prizes?.third) || event.id === 'chakravyuh' ? (
              /* Single Winner Pedestal for Chakravyuh / Single prize events */
              <div className={`${styles.prizePoolGrid} ${styles.singlePrizeGrid}`}>
                <div className={`${styles.prizeItem} ${styles.goldenPrizeItem} ${styles.singleGoldenPrize}`}>
                  <div className={styles.prizeCardBadge}>
                    <span className={styles.prizeRankLabel}>1st Prize</span>
                    <span className={styles.prizeRankValue}>
                      {event.prizes?.first
                        ? `₹${event.prizes.first.toLocaleString('en-IN')}`
                        : `₹${typeof event.prizes?.totalCashPrize === 'number' ? event.prizes.totalCashPrize.toLocaleString('en-IN') : event.prizes?.totalCashPrize || '25,000'}`}
                    </span>
                  </div>
                  <img
                    src={goldenImg}
                    alt="1st Prize - Golden"
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
                    <span className={styles.prizeRankLabel}>2nd Prize</span>
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
                    <span className={styles.prizeRankLabel}>1st Prize</span>
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
                <div className={`${styles.prizeItem} ${styles.bronzePrizeItem}`}>
                  <div className={styles.prizeCardBadge}>
                    <span className={styles.prizeRankLabel}>3rd Prize</span>
                    <span className={styles.prizeRankValue}>
                      {event.prizes?.third ? `₹${event.prizes.third.toLocaleString('en-IN')}` : '—'}
                    </span>
                  </div>
                  <img
                    src={bronzeImg}
                    alt="3rd Prize - Bronze"
                    className={styles.prizePedestalImg}
                    draggable={false}
                  />
                </div>
              </div>
            )}

            {event.prizes?.note && (
              <p className={styles.prizeNoteText}>* {event.prizes.note}</p>
            )}
          </motion.div>

          <div className={styles.contentGrid}>
            {/* Main content */}
            <div className={styles.mainContent}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
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
            </div>

            {/* Sidebar */}
            <motion.aside
              className={styles.sidebar}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Registration */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Registration</h3>
                <button className={styles.disabledWhiteBtn} disabled>
                  Registration Opening Soon
                </button>
              </div>

              {/* Registration Fee */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Registration Fee</h3>
                <div className={styles.feeAmount}>{event.registrationFee || '₹100'}</div>
                <div className={styles.feeNote}>(for outside PCCOE students)</div>
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
                  <button className={styles.rulesDownloadBtn} disabled>
                    <Download size={16} /> Download Rulebook
                  </button>
                </div>
              </div>

              {/* Coordinators */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Event Coordinators · AIMSA</h3>
                <div className={styles.coordinatorsList}>
                  {event.coordinators.map((coord, i) => (
                    <div key={i} className={styles.coordinatorCard}>
                      <img
                        src={coord.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(coord.name)}`}
                        alt={coord.name}
                        className={styles.coordAvatar}
                      />
                      <div className={styles.coordName}>{coord.name}</div>
                      <a
                        href={`tel:${coord.phone}`}
                        className={styles.coordCallIconBtn}
                        title={`Call ${coord.name} (${coord.phone})`}
                        aria-label={`Call ${coord.name}`}
                      >
                        <Phone size={16} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Join WhatsApp Group Button */}
              <div className={styles.joinGroupWrap}>
                <button
                  type="button"
                  className={styles.joinWhatsAppBtn}
                  disabled
                  title="WhatsApp Group joining soon"
                >
                  <WhatsAppIcon size={20} color="#FFFFFF" />
                  <span>Join WhatsApp Group</span>
                </button>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Cta Block */}
      <CtaBlock
        primaryButton={{ label: 'Register for Event', to: '/contact' }}
        secondaryButton={{ label: 'Back to All Events', to: '/events' }}
      />
    </main>
  );
};

export default EventDetail;

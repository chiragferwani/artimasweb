import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Phone, Download } from 'lucide-react';
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

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = EVENTS.find((e) => e.id === id);

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
        <div className={styles.heroBg} />

        <div className="container">
          {/* Back button wrapper - aligned left */}
          <div className={styles.backBtnWrap}>
            <button className={styles.backBtn} onClick={() => navigate(-1)}>
              <ArrowLeft size={16} /> Back to Events
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
                {event.id === 'kurukshetra' && (
                  <div className={styles.ctfTitleWrap}>
                    <div className={styles.ctfGhostWatermark}>CTF</div>
                    <div className={styles.ctfMainText}>CTF</div>
                  </div>
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
                  <p className={styles.blockText}>{event.description}</p>
                </div>

                <div className={`${styles.block} ${styles.rulesBlock}`}>
                  <h2 className={styles.blockTitle}>Rules & Format</h2>
                  <ul className={styles.rulesList}>
                    {event.rules.map((rule, i) => (
                      <li key={i} className={styles.ruleItem}>
                        <span className={styles.ruleNum}>{String(i + 1).padStart(2, '0')}</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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

              {/* Coordinators */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Event Coordinators</h3>
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

              {/* Yuga info */}
              <div
                className={styles.yugaSideCard}
                style={{ borderColor: `${yuga.colors.primary}30` }}
              >
                <div
                  className={styles.yugaSideName}
                  style={{ color: yuga.colors.primary }}
                >
                  {yuga.icon} {yuga.name}
                </div>
                <p className={styles.yugaSideDesc}>{yuga.description}</p>
              </div>

              {/* Download Rulebook Button */}
              <div className={styles.rulebookCard}>
                <button className={styles.disabledWhiteBtn} disabled>
                  <Download size={16} /> Download Rulebook
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

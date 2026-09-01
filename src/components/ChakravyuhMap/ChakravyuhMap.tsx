import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lottie } from 'lottie-react';
import getCloudinaryUrl from '../../utils/cloudinary';
import orangeFlagAnimation from '../../assets/orangeflag.json';
import redFlagAnimation from '../../assets/redflag.json';
import styles from './ChakravyuhMap.module.css';

const chakraImg = getCloudinaryUrl('src/assets/chakra.png');
const pvskImg = getCloudinaryUrl('src/assets/pvsk.png');
const ganeshaVid = getCloudinaryUrl('src/assets/ganeshavid.mp4');

// 7 Events mapped along concentric ring pathways inside the Chakravyuh formation
const CHAKRA_FLAGS = [
  { id: 'hackmatrix',    name: 'Hackmatrix',    yuga: 'Satyuga',   top: '55%',   left: '54.5%', red: false },
  { id: 'antaryami',    name: 'Antaryami',    yuga: 'Satyuga',   top: '46%',   left: '45.5%', red: false },
  { id: 'setu-nirman',  name: 'Setu Nirman',  yuga: 'Tretayuga', top: '39%',   left: '68%',   red: false },
  { id: 'datathon',     name: 'Datathon',     yuga: 'Dwaparyuga',top: '75%',   left: '60%',   red: false },
  { id: 'kurukshetra',  name: 'Kurukshetra',  yuga: 'Dwaparyuga',top: '75%',   left: '35.5%', red: true },
  { id: 'chakravyuh',   name: 'Chakravyuh',   yuga: 'Kalyuga',   top: '39%',   left: '29.5%', red: true },
  { id: 'mayavi',       name: 'Mayavi',       yuga: 'Kalyuga',   top: '22%',   left: '47%',   red: true },
];

const ChakravyuhMap: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <motion.div
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className={styles.subHeading}>ENTER THE</span>
          <div className={styles.titleContainer}>
            <div className={styles.ghostWatermark}>CHAKRAVYUH</div>
            <h2 className={styles.chakravyuhTitle}>CHAKRAVYUH</h2>
          </div>
        </motion.div>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          The cosmic battleground — choose your event below
        </motion.p>

        {/* Lord Ganesha video animation after Chakravyuh text */}
        <motion.div
          className={styles.ganeshaImageWrap}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.ganeshaVid}
          >
            <source src={ganeshaVid} type="video/mp4" />
          </video>
        </motion.div>
      </div>

      <div className={styles.mapWrap}>
        {/* Chakravyuh background image (behind layer) */}
        <img
          src={chakraImg}
          alt="Chakravyuh formation"
          className={styles.chakraImage}
          draggable={false}
        />

        {/* Battle scene background (front layer) */}
        <img
          src={pvskImg}
          alt=""
          className={styles.pvskBg}
          draggable={false}
        />

        {/* Interactive Event Flags inside Chakra formation */}
        {CHAKRA_FLAGS.map((flag) => (
          <Link
            key={flag.id}
            to={`/events/${flag.id}`}
            className={styles.flagMarker}
            style={{ top: flag.top, left: flag.left }}
            title={`View ${flag.name} (${flag.yuga})`}
          >
            <div className={styles.flagLottieWrap}>
              <Lottie
                src={flag.red ? redFlagAnimation : orangeFlagAnimation}
                loop
                autoplay
              />
            </div>
            <span className={styles.flagBadge}>
              {flag.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ChakravyuhMap;

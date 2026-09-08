import React from 'react';
import { motion } from 'framer-motion';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './ChakravyuhMap.module.css';

const ganeshaVid = getCloudinaryUrl('src/assets/ganeshavid.mp4');

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
    </section>
  );
};

export default ChakravyuhMap;

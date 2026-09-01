import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import { SwastikChakra } from '../../components/SwastikChakra/SwastikChakra';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './Sponsors.module.css';

const vishnuImg = getCloudinaryUrl('src/assets/vishnu.png');

const Sponsors: React.FC = () => {
  return (
    <main className={styles.main}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.breadcrumb}>Artimas 2026–2027</div>
            <h1 className={styles.pageTitle}>Our Celestial Partners</h1>
            <p className={styles.pageSubtitle}>
              The celestial portal is aligning. The visionary brands powering the 4 Yugas will soon step into the light.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vishnu illustration image before reveal section */}
      <motion.div
        className={styles.vishnuImageWrap}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2 }}
      >
        <img src={vishnuImg} alt="Lord Vishnu" className={styles.vishnuImg} />
      </motion.div>

      {/* Unique "Sponsors Reveal Soon" Showcase */}
      <section className={styles.revealSection}>
        <div className="container">
          {/* Hero Teaser Vault */}
          <motion.div
            className={styles.vaultCard}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Ambient Background Aura */}
            <div className={styles.vaultGlow} />

            {/* Top Live Ticker */}
            <div className={styles.liveTicker}>
              <span className={styles.pulseDot} />
              <span className={styles.tickerText}>CELESTIAL FREQUENCY TRANSMISSION</span>
            </div>

            {/* Small Swastik Chakra */}
            <div className={styles.chakraWrap}>
              <SwastikChakra />
            </div>

            {/* Big Unique Headline */}
            <h2 className={styles.revealTitle}>
              Sponsors <span className={styles.revealHighlight}>Reveal Soon</span>
            </h2>

            <p className={styles.revealDescription}>
              The divine guardians of tech, innovation, and culture are forging alliances behind the cosmic curtain. 
              The grand revelation across all 4 Yugas approaches.
            </p>

            <Link to="/contact" className={styles.ctaBtn}>
              Become a Sponsor <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cta Block */}
      <CtaBlock
        primaryButton={{ label: 'Contact Organizers', to: '/contact' }}
        secondaryButton={{ label: 'See all events', to: '/events' }}
      />
    </main>
  );
};

export default Sponsors;

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Cpu, Utensils, Cookie } from 'lucide-react';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import { SwastikChakra } from '../../components/SwastikChakra/SwastikChakra';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './Sponsors.module.css';

const bgVideo = getCloudinaryUrl('src/assets/BG.mp4');

interface SponsorItem {
  alt: string;
  logo: string;
  website?: string;
}

interface SponsorTier {
  id: string;
  title: string;
  icon: React.ReactNode;
  sponsors: SponsorItem[];
}

const sponsorTiers: SponsorTier[] = [
  {
    id: 'title',
    title: 'Title Sponsor',
    icon: <Crown size={16} className={styles.tierIcon} />,
    sponsors: [
      {
        alt: 'Thynqit',
        logo: getCloudinaryUrl('src/assets/sponsors/Thynqit White Wordmark Logo.png'),
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical Sponsor',
    icon: <Cpu size={16} className={styles.tierIcon} />,
    sponsors: [
      {
        alt: 'Hematite',
        logo: getCloudinaryUrl('src/assets/sponsors/hematite.png'),
      },
    ],
  },
  {
    id: 'food',
    title: 'Food Sponsors',
    icon: <Utensils size={16} className={styles.tierIcon} />,
    sponsors: [
      {
        alt: 'MyFroyoLand',
        logo: getCloudinaryUrl('src/assets/sponsors/MyFroyoLand_Food.jpeg'),
      },
      {
        alt: 'Smoked Taxi',
        logo: getCloudinaryUrl('src/assets/sponsors/smoked_taxi_food.jpeg'),
      },
      {
        alt: 'Food Sponsor',
        logo: getCloudinaryUrl('src/assets/sponsors/foodspons.png'),
      },
    ],
  },
  {
    id: 'cookie',
    title: 'Cookie Sponsor',
    icon: <Cookie size={16} className={styles.tierIcon} />,
    sponsors: [
      {
        alt: 'Cookie Sponsor',
        logo: getCloudinaryUrl('src/assets/sponsors/Cookie Sponsor.jpg'),
      },
    ],
  },
  {
    id: 'munching',
    title: 'Munching Partners',
    icon: <Cookie size={16} className={styles.tierIcon} />,
    sponsors: [
      {
        alt: 'Balaji Wafers',
        logo: getCloudinaryUrl('src/assets/sponsors/balaji_munching.png'),
      },
      {
        alt: 'Budhani Bros',
        logo: getCloudinaryUrl('src/assets/sponsors/budhani_munching.jpeg'),
      },
    ],
  },
];

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
            <div className={styles.breadcrumb}>Dept. of CSE (AI &amp; ML) · Artimas 2026–2027</div>
            <h1 className={styles.pageTitle}>Our Sponsors</h1>
            <p className={styles.pageSubtitle}>
              Proudly supported by visionary industry leaders and brands powering Artimas 2026 across the four Yugas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Sponsors Vault Card Section */}
      <section className={styles.vaultSection}>
        <div className="container">
          <motion.div
            className={styles.vaultCard}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Background Video */}
            <video
              src={bgVideo}
              autoPlay
              loop
              muted
              playsInline
              className={styles.vaultVideoBg}
            />

            {/* Content Wrapper sitting above the video */}
            <div className={styles.vaultContent}>
              {/* Ambient Background Aura */}
              <div className={styles.vaultGlow} />

              {/* Top Live Ticker without celestial wording */}
              <div className={styles.liveTicker}>
                <span className={styles.pulseDot} />
                <span className={styles.tickerText}>OFFICIAL PARTNERS TRANSMISSION</span>
              </div>

              {/* Swastik and 360° Shloka Animation */}
              <div className={styles.chakraWrap}>
                <SwastikChakra />
              </div>

              {/* Main Headline */}
              <h2 className={styles.revealTitle}>
                Artimas <span className={styles.revealHighlight}>Sponsors</span>
              </h2>

              <p className={styles.revealDescription}>
                Honoring the alliances powering technology, dining, and hospitality across the cosmic spectrum.
              </p>

              {/* 3 Tier Groups Inside the Single Block */}
              <div className={styles.tiersContainer}>
                {sponsorTiers.map((tier) => (
                  <div key={tier.id} className={styles.tierBlock}>
                    {/* Tier Title Header */}
                    <div className={styles.tierHeader}>
                      <div className={styles.tierBadge}>
                        {tier.icon}
                        <span>{tier.title}</span>
                      </div>
                    </div>

                    {/* Sponsor Logos Grid */}
                    <div className={styles.sponsorGrid}>
                      {tier.sponsors.map((sponsor, idx) => {
                        const isThynqit = sponsor.alt === 'Thynqit';
                        const isHematite = sponsor.alt === 'Hematite';
                        const isFoodSpons = sponsor.alt === 'Food Sponsor' || sponsor.logo.includes('foodspons');

                        let cardClass = styles.imageCard;
                        if (isThynqit) {
                          cardClass = styles.wordmarkCard;
                        } else if (isHematite) {
                          cardClass = styles.technicalCard;
                        } else if (isFoodSpons) {
                          cardClass = styles.whiteBoxCard;
                        } else if (tier.id === 'food') {
                          cardClass = `${styles.imageCard} ${styles.foodLogoCard}`;
                        }

                        return (
                          <motion.div
                            key={sponsor.alt + idx}
                            className={`${styles.logoCard} ${cardClass}`}
                            whileHover={{ y: -5, scale: 1.03 }}
                            transition={{ duration: 0.2 }}
                          >
                            <img
                              src={sponsor.logo}
                              alt={sponsor.alt}
                              className={styles.sponsorLogo}
                              loading="lazy"
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

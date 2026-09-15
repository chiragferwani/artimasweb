import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Gem, Cpu, Handshake, Megaphone, Utensils, Cookie, Popcorn } from 'lucide-react';
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
    id: 'diamond',
    title: 'Diamond Sponsor',
    icon: <Gem size={16} className={styles.tierIcon} />,
    sponsors: [
      {
        alt: 'RMSS - Angel One',
        logo: getCloudinaryUrl('src/assets/sponsors/angleone.png'),
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
    id: 'associate',
    title: 'Associate Sponsor',
    icon: <Handshake size={16} className={styles.tierIcon} />,
    sponsors: [
      {
        alt: 'Mad Over Donuts',
        logo: getCloudinaryUrl('src/assets/sponsors/mod.jpeg'),
      },
    ],
  },
  {
    id: 'branding',
    title: 'Branding & Promotions Partner',
    icon: <Megaphone size={16} className={styles.tierIcon} />,
    sponsors: [
      {
        alt: 'Gorodok',
        logo: getCloudinaryUrl('src/assets/sponsors/gorodok.png'),
      },
    ],
  },
  {
    id: 'food',
    title: 'Food Sponsors',
    icon: <Utensils size={16} className={styles.tierIcon} />,
    sponsors: [
      {
        alt: 'Cha Time',
        logo: getCloudinaryUrl('src/assets/sponsors/chatime.jpeg'),
      },
      {
        alt: 'Taco Bell',
        logo: getCloudinaryUrl('src/assets/sponsors/tacobell.webp'),
      },
      {
        alt: 'MyFroyoLand',
        logo: getCloudinaryUrl('src/assets/sponsors/MyFroyoLand_Food.jpeg'),
      },
      {
        alt: 'Smoked BBQ Taxi',
        logo: getCloudinaryUrl('src/assets/sponsors/smoked_taxi_food.jpeg'),
      },
      {
        alt: 'The Blends & Brewers Coffee Co. (TBB)',
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
        alt: 'Cookie Man',
        logo: getCloudinaryUrl('src/assets/sponsors/Cookie Sponsor.jpg'),
      },
    ],
  },
  {
    id: 'munching',
    title: 'Munching Partners',
    icon: <Popcorn size={16} className={styles.tierIcon} />,
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

              {/* Sponsor Tier Groups */}
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
                    <div className={`${styles.sponsorGrid} ${tier.id === 'food' ? styles.foodGrid : ''}`}>
                      {tier.sponsors.map((sponsor, idx) => {
                        const isThynqit = sponsor.alt === 'Thynqit';
                        const isDiamond = tier.id === 'diamond';
                        const isHematite = sponsor.alt === 'Hematite';
                        const isAssociate = tier.id === 'associate';
                        const isBranding = tier.id === 'branding';
                        const isWhiteBox =
                          sponsor.alt.includes('Blends & Brewers') ||
                          sponsor.logo.includes('foodspons') ||
                          sponsor.alt === 'Taco Bell' ||
                          sponsor.logo.includes('tacobell') ||
                          sponsor.alt === 'MyFroyoLand' ||
                          sponsor.logo.includes('MyFroyoLand') ||
                          sponsor.alt === 'Cha Time' ||
                          sponsor.logo.includes('chatime') ||
                          sponsor.alt === 'Cookie Man' ||
                          sponsor.logo.includes('Cookie');

                        let cardClass = styles.imageCard;
                        if (isThynqit) {
                          cardClass = styles.wordmarkCard;
                        } else if (isDiamond) {
                          cardClass = styles.diamondCard;
                        } else if (isHematite) {
                          cardClass = styles.technicalCard;
                        } else if (isAssociate) {
                          cardClass = styles.associateCard;
                        } else if (isBranding) {
                          cardClass = styles.brandingCard;
                        } else if (tier.id === 'food') {
                          cardClass = isWhiteBox
                            ? `${styles.whiteBoxCard} ${styles.foodLogoCard}`
                            : `${styles.imageCard} ${styles.foodLogoCard}`;
                        } else if (isWhiteBox) {
                          cardClass = styles.whiteBoxCard;
                        } else if (tier.id === 'cookie' || tier.id === 'munching') {
                          cardClass = `${styles.imageCard} ${styles.munchingLogoCard}`;
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

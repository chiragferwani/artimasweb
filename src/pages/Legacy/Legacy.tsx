import { motion } from 'framer-motion';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './Legacy.module.css';

const aimsaKutumbhVideo = getCloudinaryUrl('src/assets/Aimsa kutumbh.mp4');
const yugaHeroImg = getCloudinaryUrl('src/assets/yuga-hero.jpg', { width: 800 });

const RAW_GALLERY_PATHS = [
  'src/assets/events/artimas/IMG20260124124014.jpg',
  'src/assets/events/artimas/IMG20260124125243.jpg',
  'src/assets/events/artimas/IMG20260124135413.jpg',
  'src/assets/events/artimas/IMG20260124135614.jpg',
  'src/assets/events/artimas/IMG20260124135730.jpg',
  'src/assets/events/artimas/IMG_0423.JPG',
  'src/assets/events/artimas/IMG_0715.JPG',
  'src/assets/events/artimas/IMG_0759.JPG',
  'src/assets/events/artimas/IMG_0774.JPG',
  'src/assets/events/artimas/IMG_1149.JPG',
  'src/assets/events/artimas/IMG_1152.JPG',
  'src/assets/events/artimas/IMG_1173.JPG',
  'src/assets/events/artimas/IMG_1219.JPG',
  'src/assets/events/artimas/IMG_1407.JPG',
  'src/assets/events/artimas/IMG_1429.JPG',
  'src/assets/events/artimas/IMG_1443.JPG',
  'src/assets/events/artimas/IMG_1616.JPG',
  'src/assets/events/artimas/IMG_1625.JPG',
  'src/assets/events/artimas/IMG_1892.JPG',
  'src/assets/events/artimas/IMG_1912.JPG',
  'src/assets/events/artimas/IMG_2038.JPG',
  'src/assets/events/artimas/IMG_2051.JPG',
  'src/assets/events/artimas/IMG_2118.JPG',
  'src/assets/events/artimas/IMG_2166.JPG',
  'src/assets/events/artimas/IMG_2167.JPG',
  'src/assets/events/artimas/IMG_2171.JPG',
  'src/assets/events/artimas/IMG_2173.JPG',
  'src/assets/events/artimas/IMG_2187.JPG',
  'src/assets/events/artimas/IMG_2200.JPG',
  'src/assets/events/artimas/IMG_2213.JPG',
  'src/assets/events/artimas/IMG_2228.JPG',
  'src/assets/events/artimas/IMG_2230.JPG',
  'src/assets/events/aaai/aaai-01.webp',
  'src/assets/events/aaai/aaai-02.webp',
  'src/assets/events/aaai/aaai-03.webp',
  'src/assets/events/aaai/aaai-04.webp',
  'src/assets/events/aaai/aaai-05.webp',
  'src/assets/events/aaai/aaai-06.webp',
  'src/assets/events/gfg/gfg-01.webp',
  'src/assets/events/gfg/gfg-02.webp',
  'src/assets/events/gfg/gfg-03.webp',
  'src/assets/events/gfg/gfg-04.webp',
  'src/assets/events/gfg/gfg-05.webp',
  'src/assets/events/gfg/gfg-06.webp',
  'src/assets/events/ieee-cis/ieee-cis-01.webp',
  'src/assets/events/ieee-cis/ieee-cis-02.webp',
  'src/assets/events/ieee-cis/ieee-cis-03.webp',
  'src/assets/events/ieee-cis/ieee-cis-04.webp',
  'src/assets/events/ieee-cs/ieee-cs-01.webp',
  'src/assets/events/ieee-cs/ieee-cs-02.webp',
  'src/assets/events/ieee-cs/ieee-cs-03.webp',
  'src/assets/events/inns/inns-01.webp',
];

const GALLERY_IMAGES = RAW_GALLERY_PATHS.map((path) =>
  getCloudinaryUrl(path, { width: 300, quality: 'auto', format: 'auto' })
);

const Legacy: React.FC = () => {
  return (
    <main className={styles.main}>
      {/* Page Header — styled like an ancient chronicle */}
      <section className={styles.header}>
        <div className={styles.headerBg} />
        <div className={styles.scrollTexture} />
        <div className="container">
          <motion.div
            className={styles.headerContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.chronicleTag}>Chronicle of the Past Age</div>
            <h1 className={styles.pageTitle}>Artimas</h1>
            <div className={styles.editionBadge}>25-26</div>
            <p className={styles.pageSubtitle}>
              Before the four ages converge, there was one. The chronicle of the first saga presented by the Department of CSE (AI &amp; ML) &amp; AiMSA —
              the age that lit the flame for what Artimas 26-27 shall become.
            </p>

            {/* Concentric Orbiting Rectangular Loops around Lord Krishna */}
            <div className={styles.surroundingGalleryWrap}>
              {/* Top Rows: Outer Clockwise & Inner Counter-Clockwise */}
              <div className={styles.galleryTopRows}>
                {/* Outer Top Row (Clockwise — Leftwards Marquee) */}
                <div className={styles.marqueeContainer}>
                  <div className={styles.marqueeTrackClockwise}>
                    {[...GALLERY_IMAGES.slice(0, 13), ...GALLERY_IMAGES.slice(0, 13)].map((img, i) => (
                      <div key={`outTop-${i}`} className={styles.photoHolderMarquee}>
                        <img src={img} alt={`Event ${i + 1}`} className={styles.photoImg} loading="lazy" decoding="async" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inner Top Row (Counter-Clockwise — Rightwards Marquee) */}
                <div className={styles.marqueeContainer}>
                  <div className={styles.marqueeTrackCounterClockwise}>
                    {[...GALLERY_IMAGES.slice(13, 26), ...GALLERY_IMAGES.slice(13, 26)].map((img, i) => (
                      <div key={`inTop-${i}`} className={styles.photoHolderMarquee}>
                        <img src={img} alt={`Event ${i + 14}`} className={styles.photoImg} loading="lazy" decoding="async" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Middle Section: Concentric Vertical Orbit Columns flanking Lord Krishna */}
              <div className={styles.krishnaMiddleRow}>
                {/* Left Side: Outer Up, Inner Down */}
                <div className={styles.sidePhotosGridLeft}>
                  {/* Outer Left Column (Upwards Vertical Track) */}
                  <div className={styles.verticalMarqueeContainer}>
                    <div className={styles.verticalTrackUp}>
                      {[...GALLERY_IMAGES.slice(26, 32), ...GALLERY_IMAGES.slice(26, 32)].map((img, i) => (
                        <div key={`outL-${i}`} className={styles.photoHolderVertical}>
                          <img src={img} alt={`Event ${i + 27}`} className={styles.photoImg} loading="lazy" decoding="async" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inner Left Column (Downwards Vertical Track) */}
                  <div className={styles.verticalMarqueeContainer}>
                    <div className={styles.verticalTrackDown}>
                      {[...GALLERY_IMAGES.slice(32, 38), ...GALLERY_IMAGES.slice(32, 38)].map((img, i) => (
                        <div key={`inL-${i}`} className={styles.photoHolderVertical}>
                          <img src={img} alt={`Event ${i + 33}`} className={styles.photoImg} loading="lazy" decoding="async" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Central AiMSA Kutumbh Video */}
                <motion.div
                  className={styles.centerVideoWrap}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <video 
                    src={aimsaKutumbhVideo} 
                    className={styles.kutumbhVideo} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                  />
                </motion.div>

                {/* Right Side: Inner Up, Outer Down */}
                <div className={styles.sidePhotosGridRight}>
                  {/* Inner Right Column (Upwards Vertical Track) */}
                  <div className={styles.verticalMarqueeContainer}>
                    <div className={styles.verticalTrackUp}>
                      {[...GALLERY_IMAGES.slice(38, 44), ...GALLERY_IMAGES.slice(38, 44)].map((img, i) => (
                        <div key={`inR-${i}`} className={styles.photoHolderVertical}>
                          <img src={img} alt={`Event ${i + 39}`} className={styles.photoImg} loading="lazy" decoding="async" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outer Right Column (Downwards Vertical Track) */}
                  <div className={styles.verticalMarqueeContainer}>
                    <div className={styles.verticalTrackDown}>
                      {[...GALLERY_IMAGES.slice(44, 50), ...GALLERY_IMAGES.slice(44, 50)].map((img, i) => (
                        <div key={`outR-${i}`} className={styles.photoHolderVertical}>
                          <img src={img} alt={`Event ${i + 45}`} className={styles.photoImg} loading="lazy" decoding="async" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Rows: Inner Counter-Clockwise & Outer Clockwise */}
              <div className={styles.galleryBottomRows}>
                {/* Inner Bottom Row (Counter-Clockwise — Rightwards Marquee) */}
                <div className={styles.marqueeContainer}>
                  <div className={styles.marqueeTrackCounterClockwise}>
                    {[...GALLERY_IMAGES.slice(26, 39), ...GALLERY_IMAGES.slice(26, 39)].map((img, i) => (
                      <div key={`inBot-${i}`} className={styles.photoHolderMarquee}>
                        <img src={img} alt={`Event ${i + 27}`} className={styles.photoImg} loading="lazy" decoding="async" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outer Bottom Row (Clockwise — Leftwards Marquee) */}
                <div className={styles.marqueeContainer}>
                  <div className={styles.marqueeTrackClockwise}>
                    {[...GALLERY_IMAGES.slice(39, 52), ...GALLERY_IMAGES.slice(39, 52)].map((img, i) => (
                      <div key={`outBot-${i}`} className={styles.photoHolderMarquee}>
                        <img src={img} alt={`Event ${i + 40}`} className={styles.photoImg} loading="lazy" decoding="async" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transition to 26-27 */}
      <section className={styles.bridgeSection}>
        <div className="container">
          <motion.div
            className={styles.bridgeCard}
            style={{ backgroundImage: `url(${yugaHeroImg})` }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className={styles.bridgeOverlay} />
            <div className={styles.bridgeContent}>
              <div className={styles.bridgeIcon}>✦</div>
              <h2 className={styles.bridgeTitle}>The Saga Continues</h2>
              <p className={styles.bridgeText}>
                From the dawn of the first Artimas, the cosmos set in motion a grander design.
                What began in 25-26 now transcends its origins. The Four Yugas await.
              </p>
              <a href="/" className={styles.bridgeBtn}>
                Enter Artimas 26-27
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cta Block */}
      <CtaBlock
        primaryButton={{ label: 'Experience Artimas 26-27', to: '/events' }}
        secondaryButton={{ label: 'View Festival Schedule', to: '/calendar' }}
      />
    </main>
  );
};

export default Legacy;

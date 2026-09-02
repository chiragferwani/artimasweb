import { motion } from 'framer-motion';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './Legacy.module.css';

const krishnaVideo = getCloudinaryUrl('src/assets/fluteanimation.mp4');
const waterfallImg = getCloudinaryUrl('src/assets/waterfall.png');
const yugaHeroImg = getCloudinaryUrl('src/assets/yuga-hero.jpg', { width: 800 });

// Import all 32 Artimas event photos from src/assets/events/artimas/
const artimas1 = getCloudinaryUrl('src/assets/events/artimas/IMG20260124124014.jpg');
const artimas2 = getCloudinaryUrl('src/assets/events/artimas/IMG20260124125243.jpg');
const artimas3 = getCloudinaryUrl('src/assets/events/artimas/IMG20260124135413.jpg');
const artimas4 = getCloudinaryUrl('src/assets/events/artimas/IMG20260124135614.jpg');
const artimas5 = getCloudinaryUrl('src/assets/events/artimas/IMG20260124135730.jpg');
const artimas6 = getCloudinaryUrl('src/assets/events/artimas/IMG_0423.JPG');
const artimas7 = getCloudinaryUrl('src/assets/events/artimas/IMG_0715.JPG');
const artimas8 = getCloudinaryUrl('src/assets/events/artimas/IMG_0759.JPG');
const artimas9 = getCloudinaryUrl('src/assets/events/artimas/IMG_0774.JPG');
const artimas10 = getCloudinaryUrl('src/assets/events/artimas/IMG_1149.JPG');
const artimas11 = getCloudinaryUrl('src/assets/events/artimas/IMG_1152.JPG');
const artimas12 = getCloudinaryUrl('src/assets/events/artimas/IMG_1173.JPG');
const artimas13 = getCloudinaryUrl('src/assets/events/artimas/IMG_1219.JPG');
const artimas14 = getCloudinaryUrl('src/assets/events/artimas/IMG_1407.JPG');
const artimas15 = getCloudinaryUrl('src/assets/events/artimas/IMG_1429.JPG');
const artimas16 = getCloudinaryUrl('src/assets/events/artimas/IMG_1443.JPG');
const artimas17 = getCloudinaryUrl('src/assets/events/artimas/IMG_1616.JPG');
const artimas18 = getCloudinaryUrl('src/assets/events/artimas/IMG_1625.JPG');
const artimas19 = getCloudinaryUrl('src/assets/events/artimas/IMG_1892.JPG');
const artimas20 = getCloudinaryUrl('src/assets/events/artimas/IMG_1912.JPG');
const artimas21 = getCloudinaryUrl('src/assets/events/artimas/IMG_2038.JPG');
const artimas22 = getCloudinaryUrl('src/assets/events/artimas/IMG_2051.JPG');
const artimas23 = getCloudinaryUrl('src/assets/events/artimas/IMG_2118.JPG');
const artimas24 = getCloudinaryUrl('src/assets/events/artimas/IMG_2166.JPG');
const artimas25 = getCloudinaryUrl('src/assets/events/artimas/IMG_2167.JPG');
const artimas26 = getCloudinaryUrl('src/assets/events/artimas/IMG_2171.JPG');
const artimas27 = getCloudinaryUrl('src/assets/events/artimas/IMG_2173.JPG');
const artimas28 = getCloudinaryUrl('src/assets/events/artimas/IMG_2187.JPG');
const artimas29 = getCloudinaryUrl('src/assets/events/artimas/IMG_2200.JPG');
const artimas30 = getCloudinaryUrl('src/assets/events/artimas/IMG_2213.JPG');
const artimas31 = getCloudinaryUrl('src/assets/events/artimas/IMG_2228.JPG');
const artimas32 = getCloudinaryUrl('src/assets/events/artimas/IMG_2230.JPG');

// Import all 21 club event photos from src/assets/events/
const aaai1 = getCloudinaryUrl('src/assets/events/aaai/aaai-01.webp');
const aaai2 = getCloudinaryUrl('src/assets/events/aaai/aaai-02.webp');
const aaai3 = getCloudinaryUrl('src/assets/events/aaai/aaai-03.webp');
const aaai4 = getCloudinaryUrl('src/assets/events/aaai/aaai-04.webp');
const aaai5 = getCloudinaryUrl('src/assets/events/aaai/aaai-05.webp');
const aaai6 = getCloudinaryUrl('src/assets/events/aaai/aaai-06.webp');

const gfg1 = getCloudinaryUrl('src/assets/events/gfg/gfg-01.webp');
const gfg2 = getCloudinaryUrl('src/assets/events/gfg/gfg-02.webp');
const gfg3 = getCloudinaryUrl('src/assets/events/gfg/gfg-03.webp');
const gfg4 = getCloudinaryUrl('src/assets/events/gfg/gfg-04.webp');
const gfg5 = getCloudinaryUrl('src/assets/events/gfg/gfg-05.webp');
const gfg6 = getCloudinaryUrl('src/assets/events/gfg/gfg-06.webp');

const ieeeCis1 = getCloudinaryUrl('src/assets/events/ieee-cis/ieee-cis-01.webp');
const ieeeCis2 = getCloudinaryUrl('src/assets/events/ieee-cis/ieee-cis-02.webp');
const ieeeCis3 = getCloudinaryUrl('src/assets/events/ieee-cis/ieee-cis-03.webp');
const ieeeCis4 = getCloudinaryUrl('src/assets/events/ieee-cis/ieee-cis-04.webp');

const ieeeCs1 = getCloudinaryUrl('src/assets/events/ieee-cs/ieee-cs-01.webp');
const ieeeCs2 = getCloudinaryUrl('src/assets/events/ieee-cs/ieee-cs-02.webp');
const ieeeCs3 = getCloudinaryUrl('src/assets/events/ieee-cs/ieee-cs-03.webp');

const inns1 = getCloudinaryUrl('src/assets/events/inns/inns-01.webp');

const GALLERY_IMAGES = [
  artimas1, artimas2, artimas3, artimas4, artimas5, artimas6, artimas7, artimas8,
  artimas9, artimas10, artimas11, artimas12, artimas13, artimas14, artimas15, artimas16,
  artimas17, artimas18, artimas19, artimas20, artimas21, artimas22, artimas23, artimas24,
  artimas25, artimas26, artimas27, artimas28, artimas29, artimas30, artimas31, artimas32,
  aaai1, aaai2, aaai3, aaai4, aaai5, aaai6,
  gfg1, gfg2, gfg3, gfg4, gfg5, gfg6,
  ieeeCis1, ieeeCis2, ieeeCis3, ieeeCis4,
  ieeeCs1, ieeeCs2, ieeeCs3, inns1,
].map((url) => getCloudinaryUrl(url, { width: 300 }));

const SINGLE_MAHAMANTRA = "॥ हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ॥ हरे राम हरे राम राम राम हरे हरे ";
const MAHAMANTRA_TEXT = SINGLE_MAHAMANTRA.repeat(8);

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
              Before the four ages converge, there was one. The chronicle of the first saga —
              the age that lit the flame for what Artimas 26-27 shall become.
            </p>

            {/* Concentric Orbiting Rectangular Loops around Lord Krishna */}
            <div className={styles.surroundingGalleryWrap}>
              {/* Top Rows: Outer Clockwise & Inner Counter-Clockwise */}
              <div className={styles.galleryTopRows}>
                {/* Outer Top Row (Clockwise — Leftwards Marquee) */}
                <div className={styles.marqueeContainer}>
                  <div className={styles.marqueeTrackClockwise}>
                    {[...GALLERY_IMAGES.slice(0, 10), ...GALLERY_IMAGES.slice(0, 10)].map((img, i) => (
                      <div key={`outTop-${i}`} className={styles.photoHolderMarquee}>
                        <img src={img} alt={`Event ${i + 1}`} className={styles.photoImg} loading="lazy" decoding="async" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inner Top Row (Counter-Clockwise — Rightwards Marquee) */}
                <div className={styles.marqueeContainer}>
                  <div className={styles.marqueeTrackCounterClockwise}>
                    {[...GALLERY_IMAGES.slice(10, 20), ...GALLERY_IMAGES.slice(10, 20)].map((img, i) => (
                      <div key={`inTop-${i}`} className={styles.photoHolderMarquee}>
                        <img src={img} alt={`Event ${i + 11}`} className={styles.photoImg} loading="lazy" decoding="async" />
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
                      {[...GALLERY_IMAGES.slice(20, 26), ...GALLERY_IMAGES.slice(20, 26)].map((img, i) => (
                        <div key={`outL-${i}`} className={styles.photoHolderVertical}>
                          <img src={img} alt={`Event ${i + 21}`} className={styles.photoImg} loading="lazy" decoding="async" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inner Left Column (Downwards Vertical Track) */}
                  <div className={styles.verticalMarqueeContainer}>
                    <div className={styles.verticalTrackDown}>
                      {[...GALLERY_IMAGES.slice(26, 32), ...GALLERY_IMAGES.slice(26, 32)].map((img, i) => (
                        <div key={`inL-${i}`} className={styles.photoHolderVertical}>
                          <img src={img} alt={`Event ${i + 27}`} className={styles.photoImg} loading="lazy" decoding="async" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Central Lord Krishna Illustration with Static Rounded Rectangular Shloka Track */}
                <motion.div
                  className={styles.krishnaHeroWrap}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >


                  <div className={styles.shlokaRingContainer}>
                    <div className={styles.clockwiseRing}>
                      <svg viewBox="0 0 500 500" className={styles.shlokaSvg}>
                        <defs>
                          <path
                            id="krishnaShlokaRectPath"
                            pathLength="1651"
                            d="M 250 35 L 425 35 A 40 40 0 0 1 465 75 L 465 425 A 40 40 0 0 1 425 465 L 75 465 A 40 40 0 0 1 35 425 L 35 75 A 40 40 0 0 1 75 35 Z"
                          />
                          <linearGradient id="shlokaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFF2A1" />
                            <stop offset="50%" stopColor="#E8B84B" />
                            <stop offset="100%" stopColor="#F5D76E" />
                          </linearGradient>
                        </defs>

                        {/* Rounded Rectangular Outer and Inner Track Frames */}
                        <rect x="23" y="23" width="454" height="454" rx="48" ry="48" className={styles.shlokaTrackOuter} />
                        <rect x="47" y="47" width="406" height="406" rx="30" ry="30" className={styles.shlokaTrackInner} />

                        <text className={styles.shlokaText}>
                          <textPath
                            href="#krishnaShlokaRectPath"
                            startOffset="0%"
                          >
                            <animate
                              attributeName="startOffset"
                              from="-100%"
                              to="0%"
                              dur="35s"
                              repeatCount="indefinite"
                            />
                            {MAHAMANTRA_TEXT}
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>

                  <img 
                    src={waterfallImg} 
                    alt="Waterfall Background" 
                    className={styles.waterfallBgImg} 
                  />
                  <video 
                    src={krishnaVideo} 
                    className={styles.krishnaHeroImg} 
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
                      {[...GALLERY_IMAGES.slice(32, 38), ...GALLERY_IMAGES.slice(32, 38)].map((img, i) => (
                        <div key={`inR-${i}`} className={styles.photoHolderVertical}>
                          <img src={img} alt={`Event ${i + 33}`} className={styles.photoImg} loading="lazy" decoding="async" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outer Right Column (Downwards Vertical Track) */}
                  <div className={styles.verticalMarqueeContainer}>
                    <div className={styles.verticalTrackDown}>
                      {[...GALLERY_IMAGES.slice(38, 44), ...GALLERY_IMAGES.slice(38, 44)].map((img, i) => (
                        <div key={`outR-${i}`} className={styles.photoHolderVertical}>
                          <img src={img} alt={`Event ${i + 39}`} className={styles.photoImg} loading="lazy" decoding="async" />
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
                    {[...GALLERY_IMAGES.slice(44, 52), ...GALLERY_IMAGES.slice(44, 52)].map((img, i) => (
                      <div key={`inBot-${i}`} className={styles.photoHolderMarquee}>
                        <img src={img} alt={`Event ${i + 45}`} className={styles.photoImg} loading="lazy" decoding="async" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outer Bottom Row (Clockwise — Leftwards Marquee) */}
                <div className={styles.marqueeContainer}>
                  <div className={styles.marqueeTrackClockwise}>
                    {[...GALLERY_IMAGES.slice(0, 10).reverse(), ...GALLERY_IMAGES.slice(0, 10).reverse()].map((img, i) => (
                      <div key={`outBot-${i}`} className={styles.photoHolderMarquee}>
                        <img src={img} alt={`Event ${i + 1}`} className={styles.photoImg} loading="lazy" decoding="async" />
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

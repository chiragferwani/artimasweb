import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './SwastikChakra.module.css';

const swastikImg = getCloudinaryUrl('src/assets/swastik.png');

// Sacred Shloka string repeated for a seamless, unbroken 360-degree ring
const SINGLE_SHLOKA = "॥ ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥ यदा यदा हि धर्मस्य ग्लानिर्भवति भारत अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥ सत्यमेव जयते ॥ सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ॥ ";
const SHLOKA_TEXT = SINGLE_SHLOKA + SINGLE_SHLOKA;

export const SwastikChakra: React.FC = () => {
  return (
    <div className={styles.chakraContainer}>
      <div className={styles.centeredStage}>
        <div className={styles.chakraStage}>
          
          {/* Outer Decorative Ambient Glow Ring */}
          <div className={styles.outerGlowRing} />

          {/* 1. OUTER RING: Rotating Clockwise with Sacred Shlokas (360° Complete Circle) */}
          <div className={styles.shlokaRing}>
            <svg viewBox="0 0 500 500" className={styles.shlokaSvg}>
              <defs>
                {/* Circle path radius 220 -> Circumference ~ 1382.3px */}
                <path
                  id="shlokaCirclePath"
                  d="M 250, 250 m -220, 0 a 220,220 0 1,1 440,0 a 220,220 0 1,1 -440,0"
                />
                <linearGradient id="shlokaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF2A1" />
                  <stop offset="50%" stopColor="#E8B84B" />
                  <stop offset="100%" stopColor="#F5D76E" />
                </linearGradient>
              </defs>

              {/* Inner and Outer Decorative Circle Track */}
              <circle cx="250" cy="250" r="238" className={styles.shlokaTrackOuter} />
              <circle cx="250" cy="250" r="200" className={styles.shlokaTrackInner} />

              {/* Seamless 360-degree Complete Shloka Text */}
              <text className={styles.shlokaText}>
                <textPath
                  xlinkHref="#shlokaCirclePath"
                  startOffset="0%"
                  textLength="1382"
                  lengthAdjust="spacing"
                >
                  {SHLOKA_TEXT}
                </textPath>
              </text>
            </svg>
          </div>

          {/* Swastik Image centered inside the Shlokas Ring */}
          <img
            src={swastikImg}
            alt="Swastik Yugas"
            className={styles.centerSwastikImg}
          />

        </div>
      </div>
    </div>
  );
};


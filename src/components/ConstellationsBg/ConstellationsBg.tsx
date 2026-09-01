import React from 'react';
import styles from './ConstellationsBg.module.css';

const ConstellationsBg: React.FC = () => {
  return (
    <div className={styles.constellationsWrap} aria-hidden="true">
      <svg
        className={styles.constellationSvg}
        viewBox="0 0 1400 3200"
        preserveAspectRatio="xMidYMin slice"
      >
        {/* Background Celestial Coordinate Circles scattered down the page */}
        <circle cx="200" cy="300" r="220" className={styles.celestialCircle} />
        <circle cx="1200" cy="450" r="260" className={styles.celestialCircle} />
        <circle cx="700" cy="1100" r="320" className={styles.celestialCircle} />
        <circle cx="150" cy="1750" r="240" className={styles.celestialCircle} />
        <circle cx="1250" cy="1900" r="280" className={styles.celestialCircle} />
        <circle cx="300" cy="2600" r="250" className={styles.celestialCircle} />
        <circle cx="1100" cy="2850" r="230" className={styles.celestialCircle} />

        {/* 1. LEO (Top Left) */}
        <g transform="translate(70, 120)">
          <line x1="80" y1="180" x2="160" y2="210" className={styles.starLineBright} />
          <line x1="160" y1="210" x2="220" y2="150" className={styles.starLine} />
          <line x1="220" y1="150" x2="200" y2="90" className={styles.starLine} />
          <line x1="200" y1="90" x2="150" y2="70" className={styles.starLine} />
          <line x1="150" y1="70" x2="130" y2="110" className={styles.starLine} />
          <line x1="130" y1="110" x2="160" y2="210" className={styles.starLine} />
          <line x1="80" y1="180" x2="40" y2="120" className={styles.starLine} />
          <line x1="40" y1="120" x2="90" y2="100" className={styles.starLine} />

          <circle cx="160" cy="210" r="4.5" className={styles.starNodeAlpha} />
          <circle cx="80" cy="180" r="3" className={styles.starNode} />
          <circle cx="220" cy="150" r="3.5" className={styles.starNode} />
          <circle cx="200" cy="90" r="2.5" className={styles.starNode} />
          <circle cx="150" cy="70" r="2.5" className={styles.starNode} />
          <circle cx="130" cy="110" r="3" className={styles.starNode} />
          <circle cx="40" cy="120" r="3.5" className={styles.starNode} />
          <circle cx="90" cy="100" r="2.5" className={styles.starNode} />
        </g>

        {/* 2. VIRGO (Top Right) */}
        <g transform="translate(1080, 150)">
          <line x1="130" y1="210" x2="110" y2="150" className={styles.starLineBright} />
          <line x1="110" y1="150" x2="170" y2="90" className={styles.starLine} />
          <line x1="110" y1="150" x2="50" y2="130" className={styles.starLine} />
          <line x1="50" y1="130" x2="30" y2="70" className={styles.starLine} />
          <line x1="130" y1="210" x2="200" y2="190" className={styles.starLine} />
          <line x1="200" y1="190" x2="220" y2="130" className={styles.starLine} />

          <circle cx="130" cy="210" r="4.5" className={styles.starNodeAlpha} />
          <circle cx="110" cy="150" r="3" className={styles.starNode} />
          <circle cx="170" cy="90" r="3" className={styles.starNode} />
          <circle cx="50" cy="130" r="2.5" className={styles.starNode} />
          <circle cx="30" cy="70" r="2.5" className={styles.starNode} />
          <circle cx="200" cy="190" r="3" className={styles.starNode} />
          <circle cx="220" cy="130" r="2.5" className={styles.starNode} />
        </g>

        {/* 3. TAURUS (Upper Mid Left) */}
        <g transform="translate(50, 650)">
          <line x1="120" y1="140" x2="180" y2="100" className={styles.starLineBright} />
          <line x1="120" y1="140" x2="210" y2="160" className={styles.starLine} />
          <line x1="120" y1="140" x2="80" y2="120" className={styles.starLine} />
          <line x1="80" y1="120" x2="40" y2="80" className={styles.starLine} />

          <circle cx="120" cy="140" r="4.5" className={styles.starNodeAlpha} />
          <circle cx="180" cy="100" r="3" className={styles.starNode} />
          <circle cx="210" cy="160" r="3" className={styles.starNode} />
          <circle cx="80" cy="120" r="2.5" className={styles.starNode} />
          <circle cx="40" cy="80" r="3" className={styles.starNode} />
        </g>

        {/* 4. SCORPIO (Upper Mid Right) */}
        <g transform="translate(1120, 680)">
          <line x1="150" y1="90" x2="180" y2="40" className={styles.starLineBright} />
          <line x1="150" y1="90" x2="200" y2="70" className={styles.starLine} />
          <line x1="150" y1="90" x2="110" y2="140" className={styles.starLineBright} />
          <line x1="110" y1="140" x2="80" y2="190" className={styles.starLine} />
          <line x1="80" y1="190" x2="40" y2="210" className={styles.starLine} />
          <line x1="40" y1="210" x2="20" y2="180" className={styles.starLine} />

          <circle cx="150" cy="90" r="4.5" className={styles.starNodeAlpha} />
          <circle cx="180" cy="40" r="3" className={styles.starNode} />
          <circle cx="200" cy="70" r="3" className={styles.starNode} />
          <circle cx="110" cy="140" r="3" className={styles.starNode} />
          <circle cx="80" cy="190" r="3.5" className={styles.starNode} />
          <circle cx="40" cy="210" r="4" className={styles.starNode} />
          <circle cx="20" cy="180" r="2.5" className={styles.starNode} />
        </g>

        {/* 5. SAGITTARIUS (Mid Left) */}
        <g transform="translate(90, 1200)">
          <line x1="120" y1="160" x2="170" y2="110" className={styles.starLineBright} />
          <line x1="170" y1="110" x2="210" y2="140" className={styles.starLine} />
          <line x1="210" y1="140" x2="160" y2="180" className={styles.starLine} />
          <line x1="160" y1="180" x2="120" y2="160" className={styles.starLine} />
          <line x1="170" y1="110" x2="150" y2="60" className={styles.starLine} />
          <line x1="150" y1="60" x2="100" y2="90" className={styles.starLine} />
          <line x1="100" y1="90" x2="120" y2="160" className={styles.starLine} />

          <circle cx="120" cy="160" r="4" className={styles.starNodeAlpha} />
          <circle cx="170" cy="110" r="3" className={styles.starNode} />
          <circle cx="210" cy="140" r="2.5" className={styles.starNode} />
          <circle cx="160" cy="180" r="3" className={styles.starNode} />
          <circle cx="150" cy="60" r="2.5" className={styles.starNode} />
          <circle cx="100" cy="90" r="3" className={styles.starNode} />
        </g>

        {/* 6. GEMINI (Mid Right) */}
        <g transform="translate(1090, 1250)">
          <line x1="80" y1="60" x2="140" y2="70" className={styles.starLineBright} />
          <line x1="80" y1="60" x2="60" y2="130" className={styles.starLine} />
          <line x1="60" y1="130" x2="40" y2="190" className={styles.starLine} />
          <line x1="140" y1="70" x2="130" y2="140" className={styles.starLine} />
          <line x1="130" y1="140" x2="120" y2="200" className={styles.starLine} />
          <line x1="60" y1="130" x2="130" y2="140" className={styles.starLine} />

          <circle cx="80" cy="60" r="4.5" className={styles.starNodeAlpha} />
          <circle cx="140" cy="70" r="4.5" className={styles.starNodeAlpha} />
          <circle cx="60" cy="130" r="3" className={styles.starNode} />
          <circle cx="40" cy="190" r="2.5" className={styles.starNode} />
          <circle cx="130" cy="140" r="3" className={styles.starNode} />
          <circle cx="120" cy="200" r="2.5" className={styles.starNode} />
        </g>

        {/* 7. ARIES (Lower Mid Left) */}
        <g transform="translate(70, 1800)">
          <line x1="40" y1="120" x2="110" y2="90" className={styles.starLineBright} />
          <line x1="110" y1="90" x2="170" y2="100" className={styles.starLine} />
          <line x1="170" y1="100" x2="200" y2="140" className={styles.starLine} />

          <circle cx="110" cy="90" r="4.5" className={styles.starNodeAlpha} />
          <circle cx="40" cy="120" r="3" className={styles.starNode} />
          <circle cx="170" cy="100" r="3" className={styles.starNode} />
          <circle cx="200" cy="140" r="2.5" className={styles.starNode} />
        </g>

        {/* 8. CANCER (Lower Mid Right) */}
        <g transform="translate(1100, 1850)">
          <line x1="120" y1="100" x2="100" y2="150" className={styles.starLineBright} />
          <line x1="120" y1="100" x2="170" y2="70" className={styles.starLine} />
          <line x1="120" y1="100" x2="80" y2="50" className={styles.starLine} />

          <circle cx="120" cy="100" r="4.5" className={styles.starNodeAlpha} />
          <circle cx="100" cy="150" r="3" className={styles.starNode} />
          <circle cx="170" cy="70" r="3" className={styles.starNode} />
          <circle cx="80" cy="50" r="2.5" className={styles.starNode} />
        </g>

        {/* 9. CAPRICORN (Bottom Left) */}
        <g transform="translate(80, 2400)">
          <line x1="60" y1="80" x2="140" y2="50" className={styles.starLineBright} />
          <line x1="140" y1="50" x2="200" y2="100" className={styles.starLine} />
          <line x1="200" y1="100" x2="160" y2="170" className={styles.starLine} />
          <line x1="160" y1="170" x2="90" y2="160" className={styles.starLine} />
          <line x1="90" y1="160" x2="60" y2="80" className={styles.starLine} />

          <circle cx="140" cy="50" r="4.5" className={styles.starNodeAlpha} />
          <circle cx="60" cy="80" r="3" className={styles.starNode} />
          <circle cx="200" cy="100" r="3.5" className={styles.starNode} />
          <circle cx="160" cy="170" r="3" className={styles.starNode} />
          <circle cx="90" cy="160" r="3" className={styles.starNode} />
        </g>

        {/* 10. AQUARIUS (Bottom Right) */}
        <g transform="translate(1080, 2450)">
          <line x1="80" y1="70" x2="140" y2="90" className={styles.starLineBright} />
          <line x1="140" y1="90" x2="190" y2="60" className={styles.starLine} />
          <line x1="140" y1="90" x2="120" y2="150" className={styles.starLine} />
          <line x1="120" y1="150" x2="170" y2="180" className={styles.starLine} />
          <line x1="80" y1="70" x2="50" y2="130" className={styles.starLine} />

          <circle cx="140" cy="90" r="4.5" className={styles.starNodeAlpha} />
          <circle cx="80" cy="70" r="3" className={styles.starNode} />
          <circle cx="190" cy="60" r="3" className={styles.starNode} />
          <circle cx="120" cy="150" r="3" className={styles.starNode} />
          <circle cx="170" cy="180" r="2.5" className={styles.starNode} />
          <circle cx="50" cy="130" r="3" className={styles.starNode} />
        </g>
      </svg>
    </div>
  );
};

export default ConstellationsBg;

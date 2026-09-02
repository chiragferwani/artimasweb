import React from 'react';
import styles from './CurvedDoubleText.module.css';

export const EVENT_ALT_NAMES: Record<string, string> = {
  antaryami: 'PROMPT RELAY',
  'setu-nirman': 'BRANDATHON',
  kurukshetra: 'CTF',
  chakravyuh: 'HOUDINI HEIST',
  mayavi: 'AMONG US',
};

interface CurvedDoubleTextProps {
  text: string;
  variant?: 'hero' | 'card';
}

const CurvedDoubleText: React.FC<CurvedDoubleTextProps> = ({ text, variant = 'card' }) => {
  const chars = text.split('');
  const total = chars.length;
  const mid = (total - 1) / 2;

  return (
    <div className={`${styles.curvedTitleWrap} ${variant === 'hero' ? styles.heroSize : ''}`}>
      <div className={styles.curvedGlow} />
      <div className={styles.curvedRow}>
        {chars.map((char, i) => {
          if (char === ' ') {
            return (
              <span
                key={i}
                className={styles.char3DWrapper}
                style={{ width: '0.3em', display: 'inline-block' }}
              >
                &nbsp;
              </span>
            );
          }

          const offset = total > 1 ? (i - mid) / mid : 0; // -1 (left) to +1 (right)
          
          // 1. Arch drop (edges go down)
          const transY = Math.pow(offset, 2) * 45; 
          
          // 2. Rotation along the curve (tangent)
          const rotZ = offset * 20; 
          
          // 3. 3D depth: edges push back, center pops forward
          const transZ = (1 - Math.pow(offset, 2)) * 60; 
          
          // 4. Wrap around effect (edges turn slightly inwards)
          const rotY = offset * -25;
          
          // 5. Slight tilt back
          const rotX = 15;

          const wrapperStyle: React.CSSProperties = {
            transform: `translateY(${transY}px) translateZ(${transZ}px) rotateZ(${rotZ}deg) rotateY(${rotY}deg) rotateX(${rotX}deg)`,
            transformOrigin: 'center center',
          };

          return (
            <span key={i} className={styles.char3DWrapper} style={wrapperStyle}>
              <span className={styles.charExtrusion} aria-hidden="true">
                {char}
              </span>
              <span className={styles.charFace}>{char}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CurvedDoubleText;

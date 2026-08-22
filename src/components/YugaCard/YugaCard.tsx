import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { YugaTheme } from '../../data/yugas';
import styles from './YugaCard.module.css';

// Dark tint background per Yuga
const YUGA_BG: Record<string, string> = {
  satya:   '#282315',
  treta:   '#162818',
  dvapara: '#162033',
  kali:    '#2A1616',
};

// Accessible luminous text colors on dark background
const YUGA_COLORS: Record<string, string> = {
  satya:   '#F5D76E',
  treta:   '#62C462',
  dvapara: '#7B9EE8',
  kali:    '#EE5252',
};

interface YugaCardProps {
  yuga: YugaTheme;
  index: number;
}

const YugaCard: React.FC<YugaCardProps> = ({ yuga, index }) => {
  const [expanded, setExpanded] = useState(false);
  const yugaColor = YUGA_COLORS[yuga.key] ?? '#F5D76E';
  const yugaBg    = YUGA_BG[yuga.key]    ?? '#242033';

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      viewport={{ once: true, margin: '-40px' }}
      style={
        {
          '--yuga-primary': yugaColor,
          '--yuga-bg':      yugaBg,
        } as React.CSSProperties
      }
    >
      {/* Colored accent bar */}
      <div className={styles.cardAccent} />

      {/* Icon */}
      <div className={styles.iconWrap}>{yuga.icon}</div>

      {/* Sanskrit */}
      <div className={styles.sanskrit}>{yuga.sanskritName}</div>

      {/* Name */}
      <h3 className={styles.yugaName}>{yuga.name}</h3>

      {/* Virtue eyebrow */}
      <div className={styles.virtue}>{yuga.virtue}</div>

      <hr className={styles.divider} />

      {/* Description */}
      <p className={styles.description}>{yuga.description}</p>

      {/* Key highlights */}
      <div className={styles.highlights}>
        <div className={styles.highlightGroup}>
          <div className={styles.highlightTitle}>Key Figures</div>
          {yuga.characters.slice(0, 2).map((c) => (
            <div key={c.name} className={styles.highlightItem}>
              <span className={styles.bullet} />
              <span>
                <strong>{c.name}</strong> — {c.role}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.highlightGroup}>
          <div className={styles.highlightTitle}>Defining Moments</div>
          {yuga.events.map((e) => (
            <div key={e.name} className={styles.highlightItem}>
              <span className={styles.bullet} />
              <span>
                <strong>{e.name}</strong>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Expand toggle */}
      <button
        className={styles.expandBtn}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? 'Less' : 'Learn more'}
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {/* Expanded */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className={styles.expandedContent}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.expandedInner}>
              <p className={styles.longDesc}>{yuga.longDescription}</p>
              <div className={styles.motifRow}>
                <span className={styles.motifLabel}>Motifs:</span>
                <span className={styles.motifValue}>{yuga.motif}</span>
              </div>
              {yuga.characters.length > 2 && (
                <div className={styles.extraChars}>
                  <div className={styles.highlightTitle}>More Figures</div>
                  {yuga.characters.slice(2).map((c) => (
                    <div key={c.name} className={styles.highlightItem}>
                      <span className={styles.bullet} />
                      <span>
                        <strong>{c.name}</strong> — {c.role}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default YugaCard;

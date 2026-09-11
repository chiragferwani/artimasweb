import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './CtaBlock.module.css';
import getCloudinaryUrl from '../../utils/cloudinary';

const shivaBg = getCloudinaryUrl('src/assets/shiva.jpg');

export interface CtaButtonConfig {
  label: string;
  to: string;
  variant?: 'primary' | 'secondary';
  external?: boolean;
}

export interface CtaBlockProps {
  title?: string;
  ghostTitle?: string;
  subtitle?: string;
  ghostSubtitle?: string;
  primaryButton?: CtaButtonConfig;
  secondaryButton?: CtaButtonConfig;
  bgImage?: string;
}

export const CtaBlock: React.FC<CtaBlockProps> = ({
  title = 'ARTIMAS',
  ghostTitle = 'ARTIMAS',
  subtitle = '26-27',
  ghostSubtitle = '26-27',
  primaryButton = { label: 'See all events', to: '/events', variant: 'primary' },
  secondaryButton = { label: 'Contact AiMSA', to: '/contact', variant: 'secondary' },
  bgImage = shivaBg,
}) => {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <motion.div
          className={styles.ctaCard}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background image overlay */}
          <div
            className={styles.ctaBg}
            style={{ backgroundImage: `url(${bgImage})` }}
          />

          <div className={styles.ctaInner}>
            {/* Title with watermarked text stroke effect */}
            <div className={styles.ctaTitleWrap}>
              <div className={styles.ctaTitleLine}>
                <div className={styles.ctaGhostWatermark}>{ghostTitle}</div>
                <h2 className={styles.ctaTitleText}>{title}</h2>
              </div>
              {subtitle && (
                <div className={styles.ctaSubtitleLine}>
                  <div className={styles.ctaGhostWatermarkSub}>{ghostSubtitle || subtitle}</div>
                  <h3 className={styles.ctaSubtitleText}>{subtitle}</h3>
                </div>
              )}
            </div>

            {/* Contextual buttons */}
            <div className={styles.ctaBtns}>
              {primaryButton && (
                primaryButton.external ? (
                  <a
                    href={primaryButton.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaBtnPrimary}
                  >
                    {primaryButton.label}
                  </a>
                ) : (
                  <Link to={primaryButton.to} className={styles.ctaBtnPrimary}>
                    {primaryButton.label}
                  </Link>
                )
              )}

              {secondaryButton && (
                secondaryButton.external ? (
                  <a
                    href={secondaryButton.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaBtnSecondary}
                  >
                    {secondaryButton.label}
                  </a>
                ) : (
                  <Link to={secondaryButton.to} className={styles.ctaBtnSecondary}>
                    {secondaryButton.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBlock;

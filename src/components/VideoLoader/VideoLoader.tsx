import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import startAssetPreloading from '../../utils/preloadAssets';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './VideoLoader.module.css';

interface VideoLoaderProps {
  onComplete?: () => void;
  loaderSrc?: string;
}

const VideoLoader: React.FC<VideoLoaderProps> = ({
  onComplete,
  loaderSrc = getCloudinaryUrl('https://res.cloudinary.com/kxwxs8yo/video/upload/v1788191808/artimasweb/loader.mp4'),
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [preloadPercent, setPreloadPercent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lock body scroll and start preloading ALL app assets immediately on mount
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    startAssetPreloading((_, __, percent) => {
      setPreloadPercent(percent);
    });

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  // Play loader video upon clicking Enter Experience
  const startExperience = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();

    // Ensure preloading continues
    startAssetPreloading((_, __, percent) => {
      setPreloadPercent(percent);
    });

    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1.0;
      video.play().then(() => {
        setHasStarted(true);
      }).catch((err) => {
        if (err.name !== 'AbortError') {
          console.warn('Playback error:', err);
          // Fallback play
          if (video.isConnected) {
            video.play().catch((err2) => {
              if (err2.name !== 'AbortError') console.warn('Playback fallback error:', err2);
            });
          }
        }
        setHasStarted(true);
      });
    }
  };

  const handleEnded = () => {
    setIsVisible(false);
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className={styles.videoContainer}>
            <video
              ref={videoRef}
              src={loaderSrc}
              preload="auto"
              playsInline
              controls={false}
              onEnded={handleEnded}
              className={styles.video}
            />
          </div>

          {!hasStarted && (
            <motion.div
              className={styles.startOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={startExperience}
            >
              <button className={styles.startBtn} onClick={startExperience}>
                Enter Experience ✦
              </button>
            </motion.div>
          )}

          {/* Circular Preload Progress Indicator (Disappears when preload reaches 100%) */}
          <AnimatePresence>
            {preloadPercent < 100 && (
              <motion.div
                className={styles.circularProgressWrap}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <svg className={styles.circularSvg} viewBox="0 0 52 52">
                  <circle
                    cx="26"
                    cy="26"
                    r="22"
                    className={styles.circularTrack}
                  />
                  <circle
                    cx="26"
                    cy="26"
                    r="22"
                    className={styles.circularFill}
                    style={{
                      strokeDasharray: 138.23,
                      strokeDashoffset: 138.23 - (138.23 * preloadPercent) / 100,
                    }}
                  />
                </svg>
                <span className={styles.percentText}>{preloadPercent}%</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoLoader;

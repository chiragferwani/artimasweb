import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './VideoLoader.module.css';

interface VideoLoaderProps {
  onComplete?: () => void;
  loaderSrc?: string;
}

const VideoLoader: React.FC<VideoLoaderProps> = ({
  onComplete,
  loaderSrc = '/loader.mp4',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lock body scroll while loader is active to prevent any scrollbars
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  // Play video with audio upon clicking Enter Experience
  const startExperience = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1.0;
      video.play().then(() => {
        setHasStarted(true);
      }).catch((err) => {
        console.warn('Playback error:', err);
        // Fallback play
        video.play().catch(console.warn);
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoLoader;

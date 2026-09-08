import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import EventCard from '../EventCard/EventCard';
import { EVENTS } from '../../data/yugas';
import type { YugaKey } from '../../data/yugas';
import getCloudinaryUrl from '../../utils/cloudinary';
import { precacheMediaUrls } from '../../utils/preloadAssets';
import styles from './Chakra3D.module.css';

const glbUrl = getCloudinaryUrl('src/assets/chakra_medallion.glb');
const pillarImg = getCloudinaryUrl('src/assets/pillar.png');
const bgImg = getCloudinaryUrl('src/assets/bg_image.png');
const newArtimasImg = getCloudinaryUrl('src/assets/newartimas.webp');

interface YugaDefinition {
  id: string;
  key: YugaKey;
  name: string;
  image: string;
  video: string;
}

const YUGA_LIST: YugaDefinition[] = [
  {
    id: 'satyug',
    key: 'satya',
    name: 'Satyug',
    image: getCloudinaryUrl('src/assets/eventnames/satyug.png'),
    video: getCloudinaryUrl('src/assets/webvideos/satyug.mp4'),
  },
  {
    id: 'tretayug',
    key: 'treta',
    name: 'Tretayug',
    image: getCloudinaryUrl('src/assets/eventnames/tretayug.png'),
    video: getCloudinaryUrl('src/assets/webvideos/treta.mp4'),
  },
  {
    id: 'dwaparyug',
    key: 'dvapara',
    name: 'Dwapar Yug',
    image: getCloudinaryUrl('src/assets/eventnames/dwaparyug.png'),
    video: getCloudinaryUrl('src/assets/webvideos/dwapar.mp4'),
  },
  {
    id: 'kalyug',
    key: 'kali',
    name: 'Kalyug',
    image: getCloudinaryUrl('src/assets/eventnames/kalyug.png'),
    video: getCloudinaryUrl('src/assets/webvideos/kalyug.mp4'),
  },
];

const STEP_RAD = Math.PI / 2; // 90 degrees

interface Chakra3DProps {
  className?: string;
}

const Chakra3D: React.FC<Chakra3DProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [hasEnteredYugas, setHasEnteredYugas] = useState(false);
  const [step, setStep] = useState(0);
  const [mobileEventIndex, setMobileEventIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cachedVideoUrls, setCachedVideoUrls] = useState<Record<string, string>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const targetRotationZ = useRef(0);
  const pivotRef = useRef<THREE.Group | null>(null);
  const isDragging = useRef(false);
  const dragStartAngle = useRef(0);
  const initialRotationOnDrag = useRef(0);
  const hasEnteredRef = useRef(false);

  useEffect(() => {
    hasEnteredRef.current = hasEnteredYugas;
  }, [hasEnteredYugas]);

  // Current Yuga in 4-step sequence
  const yugaIndex = ((step % 4) + 4) % 4;
  const currentYuga = YUGA_LIST[yugaIndex];
  const activeEvents = EVENTS.filter((e) => e.yuga === currentYuga.key);

  // Safe normalized mobile event index
  const safeMobileEventIndex =
    activeEvents.length > 0 ? ((mobileEventIndex % activeEvents.length) + activeEvents.length) % activeEvents.length : 0;
  const currentMobileEvent = activeEvents[safeMobileEventIndex];

  // Pre-cache all 4 Yuga videos in CacheStorage & in-memory Blob URLs on load
  useEffect(() => {
    const videoUrls = YUGA_LIST.map((y) => y.video);
    precacheMediaUrls(videoUrls).then((urlsMap) => {
      setCachedVideoUrls(urlsMap);
    });
  }, []);

  // Synchronize playback across persistent video elements
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([yugaId, videoEl]) => {
      if (!videoEl) return;
      if (yugaId === currentYuga.id) {
        videoEl.currentTime = 0;
        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            videoEl.muted = true;
            videoEl.play().catch(() => {});
          });
        }
      } else {
        videoEl.pause();
      }
    });
  }, [currentYuga.id, hasEnteredYugas]);

  // Detect mobile view (< 768px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup - Fixed front-facing 2D view
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4.3);
    camera.lookAt(0, 0, 0);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffdf99, 3.5);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xff9900, 2.0);
    fillLight.position.set(-3, -2, 4);
    scene.add(fillLight);

    const pointLight = new THREE.PointLight(0xffd700, 2.2, 10);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // 5. Model Loader
    const loader = new GLTFLoader();
    const pivot = new THREE.Group();
    pivotRef.current = pivot;
    scene.add(pivot);

    loader.load(
      glbUrl,
      (gltf) => {
        const modelGroup = gltf.scene;

        // Center and scale model based on bounding box
        const box = new THREE.Box3().setFromObject(modelGroup);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.05 / (maxDim || 1);

        modelGroup.position.x = -center.x * scale;
        modelGroup.position.y = -center.y * scale;
        modelGroup.position.z = -center.z * scale;
        modelGroup.scale.setScalar(scale);

        // Enhance materials
        modelGroup.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (mesh.material) {
              const mat = mesh.material as THREE.MeshStandardMaterial;
              if (mat.roughness !== undefined) {
                mat.roughness = Math.min(mat.roughness, 0.4);
              }
              if (mat.metalness !== undefined) {
                mat.metalness = Math.max(mat.metalness, 0.75);
              }
            }
          }
        });

        pivot.add(modelGroup);
        setLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          setLoadProgress(Math.round((xhr.loaded / xhr.total) * 100));
        }
      },
      (error) => {
        console.error('Error loading 3D Chakra model:', error);
        setLoading(false);
      }
    );

    // Helper: calculate pointer angle from center of canvas
    const getPointerAngle = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      return Math.atan2(clientY - centerY, clientX - centerX);
    };

    // 6. Pointer Drag for rotating & snapping
    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      dragStartAngle.current = getPointerAngle(e.clientX, e.clientY);
      initialRotationOnDrag.current = targetRotationZ.current;
      container.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const currentAngle = getPointerAngle(e.clientX, e.clientY);
      let deltaAngle = currentAngle - dragStartAngle.current;

      while (deltaAngle > Math.PI) deltaAngle -= Math.PI * 2;
      while (deltaAngle < -Math.PI) deltaAngle += Math.PI * 2;

      targetRotationZ.current = initialRotationOnDrag.current + deltaAngle;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      try {
        container.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }

      if (hasEnteredRef.current) {
        // Snap to nearest 90 degree step on drag release after entering
        const nearestStep = Math.round(-targetRotationZ.current / STEP_RAD);
        targetRotationZ.current = -nearestStep * STEP_RAD;
        setStep(nearestStep);
        setMobileEventIndex(0);
      }
    };

    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerup', onPointerUp);
    container.addEventListener('pointercancel', onPointerUp);

    // 7. Resize handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 500;
      const newHeight = container.clientHeight || 500;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 8. Animation loop with slow clockwise auto-rotation in intro state
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto-rotate clockwise slowly in the initial intro state
      if (!hasEnteredRef.current && !isDragging.current) {
        targetRotationZ.current -= 0.003;
      }

      if (pivotRef.current) {
        pivotRef.current.rotation.z += (targetRotationZ.current - pivotRef.current.rotation.z) * 0.12;
      }
      renderer.render(scene, camera);
    };
    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('pointercancel', onPointerUp);
      resizeObserver.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          mesh.geometry?.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose());
          } else {
            mesh.material?.dispose();
          }
        }
      });
    };
  }, []);

  // Rotate Right handler (Next)
  const handleRotateRight = () => {
    if (isMobile) {
      if (safeMobileEventIndex < activeEvents.length - 1) {
        // Next event in same Yuga
        setMobileEventIndex(safeMobileEventIndex + 1);
      } else {
        // Last event in current Yuga -> Advance to next Yuga
        const nextStep = step + 1;
        setStep(nextStep);
        setMobileEventIndex(0);
        targetRotationZ.current = -nextStep * STEP_RAD;
      }
    } else {
      const nextStep = step + 1;
      setStep(nextStep);
      targetRotationZ.current = -nextStep * STEP_RAD;
    }
  };

  // Rotate Left handler (Previous)
  const handleRotateLeft = () => {
    if (isMobile) {
      if (safeMobileEventIndex > 0) {
        // Previous event in same Yuga
        setMobileEventIndex(safeMobileEventIndex - 1);
      } else {
        // First event in current Yuga -> Go to previous Yuga, last event
        const prevStep = step - 1;
        const prevYugaIndex = ((prevStep % 4) + 4) % 4;
        const prevYuga = YUGA_LIST[prevYugaIndex];
        const prevEvents = EVENTS.filter((e) => e.yuga === prevYuga.key);

        setStep(prevStep);
        setMobileEventIndex(Math.max(0, prevEvents.length - 1));
        targetRotationZ.current = -prevStep * STEP_RAD;
      }
    } else {
      const prevStep = step - 1;
      setStep(prevStep);
      targetRotationZ.current = -prevStep * STEP_RAD;
    }
  };

  // Enter the Yugas handler: smoothly snaps to Satyug (step 0)
  const handleEnterYugas = () => {
    setHasEnteredYugas(true);
    setStep(0);
    setMobileEventIndex(0);

    if (pivotRef.current) {
      // Normalize current rotation to [-PI, PI] range so it smoothly transitions to 0 without spinning wildly
      let currentRot = pivotRef.current.rotation.z % (Math.PI * 2);
      if (currentRot > Math.PI) currentRot -= Math.PI * 2;
      if (currentRot < -Math.PI) currentRot += Math.PI * 2;
      pivotRef.current.rotation.z = currentRot;
    }
    targetRotationZ.current = 0;
  };

  return (
    <div className={`${styles.chakraWrapper} ${className || ''}`}>
      {/* Background Container: Video plays continuously with smooth Pillar Overlay cross-dissolve */}
      <div className={styles.yugaBgVideoContainer}>
        {/* Dynamic Yuga Videos (persistent pre-rendered videos for seamless instant transitions) */}
        {YUGA_LIST.map((yuga) => {
          const isActive = currentYuga.id === yuga.id;
          const src = cachedVideoUrls[yuga.video] || yuga.video;
          return (
            <video
              key={yuga.id}
              ref={(el) => {
                videoRefs.current[yuga.id] = el;
              }}
              src={src}
              preload="auto"
              muted
              playsInline
              onEnded={(e) => {
                e.currentTarget.pause();
              }}
              className={`${styles.yugaBgVideo} ${
                isActive ? styles.yugaBgVideoActive : styles.yugaBgVideoInactive
              }`}
            />
          );
        })}
        <div className={styles.yugaBgOverlay} />

        {/* Initial Pillar Scene Overlay (Zooms in & fades seamlessly on enter) */}
        <AnimatePresence>
          {!hasEnteredYugas && (
            <motion.div
              key="pillar-overlay"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={styles.pillarOverlay}
            >
              {/* Background Image placed behind the pillar image */}
              <motion.img
                src={bgImg}
                alt=""
                className={styles.bgIntroImg}
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.25, opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div
                className={styles.pillarCosmicGlow}
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0, scale: 1.35 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.img
                src={pillarImg}
                alt="Ancient Temple Pillars"
                className={styles.pillarImg}
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.4, opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 1. Header Area: Artimas Image during Intro -> Yug Name Image after Entering */}
      <div className={styles.topHeaderContainer}>
        <AnimatePresence mode="wait">
          {!hasEnteredYugas ? (
            <motion.div
              key="artimas-intro-title"
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className={styles.artimasHeaderWrap}
            >
              <img
                src={newArtimasImg}
                alt="Artimas 2026"
                className={styles.newArtimasImg}
              />
            </motion.div>
          ) : (
            <motion.div
              key={currentYuga.id}
              initial={{ opacity: 0, y: -10, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.94 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={styles.yugaImageWrap}
            >
              <img
                src={currentYuga.image}
                alt={currentYuga.name}
                className={styles.yugaNameImg}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. 3D Chakra Canvas */}
      <div
        className={`${styles.canvasWrapper} ${
          hasEnteredYugas ? styles.canvasWrapperEntered : styles.canvasWrapperIntro
        }`}
      >
        <div ref={containerRef} className={styles.canvasContainer}>
          {loading && (
            <div className={styles.loaderWrap}>
              <div className={styles.spinner} />
              <span className={styles.loadingText}>
                Loading Chakra{loadProgress > 0 ? ` (${loadProgress}%)` : ''}...
              </span>
            </div>
          )}
        </div>
        <div className={styles.glowUnderlay} />
      </div>

      {/* 3. Bottom Area: "ENTER THE YUGAS" Button vs Event Cards & Arrow Controls */}
      <AnimatePresence>
        {!hasEnteredYugas ? (
          <motion.div
            key="enter-button-wrap"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={styles.enterYugasWrap}
          >
            <button
              type="button"
              className={styles.enterYugasBtn}
              onClick={handleEnterYugas}
            >
              ENTER THE YUGAS
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="active-yuga-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.45 }}
            className={styles.enteredContentWrap}
          >
            {/* Event Cards mapped to active Yuga */}
            <div className={styles.eventsSectionWrap}>
              {isMobile ? (
                /* Mobile View: 1 event at a time */
                <AnimatePresence mode="wait">
                  {currentMobileEvent && (
                    <motion.div
                      key={currentMobileEvent.id}
                      initial={{ opacity: 0, scale: 0.94, y: 16 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.94, y: -16 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className={styles.singleMobileCardWrap}
                    >
                      <EventCard event={currentMobileEvent} index={0} />
                    </motion.div>
                  )}
                </AnimatePresence>
              ) : (
                /* Desktop / Tablet View: Outward arc arrangement */
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentYuga.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.eventsGrid}
                  >
                    {activeEvents.map((event, index) => {
                      const total = activeEvents.length;
                      const offset = index - (total - 1) / 2;
                      const rotateY = offset * 16;
                      const translateZ = -Math.abs(offset) * 16;

                      return (
                        <div
                          key={event.id}
                          className={styles.cardItem}
                          style={{
                            transform: `perspective(1200px) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                          }}
                        >
                          <EventCard event={event} index={index} />
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* 4. Arrow Navigation Controls */}
            <div className={styles.controlPillWrap}>
              <div className={styles.arrowControls}>
                {/* Left Arrow Button */}
                <button
                  type="button"
                  className={styles.arrowBtn}
                  onClick={handleRotateLeft}
                  title={isMobile ? "Previous Event / Yuga" : "Previous Yuga (Counter-Clockwise)"}
                  aria-label="Previous"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  className={styles.arrowBtn}
                  onClick={handleRotateRight}
                  title={isMobile ? "Next Event / Yuga" : "Next Yuga (Clockwise)"}
                  aria-label="Next"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chakra3D;

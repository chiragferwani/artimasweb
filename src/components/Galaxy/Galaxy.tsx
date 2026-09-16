import React, { useEffect, useRef } from 'react';
import './Galaxy.css';

export interface GalaxyProps {
  stars?: number;
  speed?: number;
  spread?: number;
  focal?: number;
  twinkle?: number;
  trail?: number;
  size?: number;
  fadeInRange?: number;
  reverseFly?: boolean;
  followCursor?: boolean;
  stopInEditor?: boolean;
  background?: string;
  starColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface Star {
  x: number;
  y: number;
  z: number;
  tw: number;
}

export default function Galaxy({
  stars = 1000,
  speed = 2,
  spread = 5,
  focal = 2,
  twinkle = 0.35,
  trail = 0.75,
  size = 2,
  fadeInRange = 5,
  reverseFly = true,
  followCursor = true,
  stopInEditor = true,
  background = '#000000',
  starColor = '#ffffff',
  className = '',
  style,
}: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const DPR = window.devicePixelRatio || 1;

    const clamp = (v: number, min: number, max: number) =>
      Math.max(min, Math.min(max, v));

    const createStar = (): Star => ({
      x: (Math.random() - 0.5) * spread,
      y: (Math.random() - 0.5) * spread,
      z: Math.random(),
      tw: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent ? parent.getBoundingClientRect() : canvas.getBoundingClientRect();
      canvas.width = rect.width * DPR;
      canvas.height = rect.height * DPR;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);
    starsRef.current = Array.from({ length: stars }, createStar);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        mouse.current.x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
        mouse.current.y = clamp((e.clientY - rect.top) / rect.height, 0, 1);
      }
    };
    if (followCursor) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    let raf = 0;
    let isRunning = true;

    const onVisibilityChange = () => {
      isRunning = !document.hidden;
      if (isRunning) {
        raf = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    let lastFrameTime = 0;
    const FRAME_INTERVAL = 1000 / 30; // Cap at 30fps for performance

    const animate = (now: number) => {
      if (!isRunning) return;

      const elapsed = now - lastFrameTime;
      if (elapsed < FRAME_INTERVAL) {
        raf = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = now - (elapsed % FRAME_INTERVAL);

      const w = canvas.width / DPR;
      const h = canvas.height / DPR;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = starColor;

      const cx = followCursor ? mouse.current.x * w : w / 2;
      const cy = followCursor ? mouse.current.y * h : h / 2;
      const clampedFocal = clamp(focal, 0.01, 10);
      const speedStep = (reverseFly ? 1 : -1) * clamp(speed, 0, 10) * 0.002;
      const twinkleStep = clamp(twinkle, 0, 1) * 0.05;
      const clampedFade = clamp(fadeInRange, 0.1, 10);
      const baseSize = clamp(size, 0.1, 5);

      for (let i = 0; i < starsRef.current.length; i++) {
        const s = starsRef.current[i];
        const depth = s.z * clampedFocal + 0.001;
        const px = cx + (s.x / depth) * w;
        const py = cy + (s.y / depth) * h;

        // Skip offscreen stars
        if (px < -10 || px > w + 10 || py < -10 || py > h + 10) {
          s.z += speedStep;
          if (s.z <= 0 || s.z > 1) starsRef.current[i] = createStar();
          continue;
        }

        s.z += speedStep;
        if (s.z <= 0 || s.z > 1) {
          starsRef.current[i] = createStar();
          continue;
        }

        s.tw += twinkleStep;

        const alpha = Math.max(0, Math.min(1, 1 - s.z / clampedFade));
        const radius = Math.max(0.5, baseSize * (1 - s.z) * (1 + Math.sin(s.tw) * 0.35));
        const d = radius * 2;

        ctx.globalAlpha = alpha;
        ctx.fillRect(px - radius, py - radius, d, d);
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [
    stars,
    speed,
    spread,
    focal,
    twinkle,
    trail,
    size,
    fadeInRange,
    reverseFly,
    followCursor,
    stopInEditor,
    background,
    starColor,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`galaxy-container ${className}`}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        background,
        ...style,
      }}
    />
  );
}

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface ParticleFieldProps {
  colors?: string[];
  count?: number;
  className?: string;
}

const ParticleField: React.FC<ParticleFieldProps> = ({
  colors = ['#F5D76E', '#E8B84B', '#fff', '#E74C3C'],
  count = 60,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const colorsRef = useRef(colors);
  const countRef = useRef(count);

  useEffect(() => {
    colorsRef.current = colors;
    countRef.current = count;
  }, [colors, count]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4 - 0.2,
      opacity: Math.random() * 0.6 + 0.1,
      color: colorsRef.current[Math.floor(Math.random() * colorsRef.current.length)],
      life: 0,
      maxLife: Math.random() * 300 + 200,
    });

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    particlesRef.current = Array.from({ length: countRef.current }, createParticle);

    let isRunning = true;

    const onVisibilityChange = () => {
      isRunning = !document.hidden;
      if (isRunning) {
        animRef.current = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const animate = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cw = canvas.width;
      const ch = canvas.height;

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        p.life++;
        p.x += p.speedX;
        p.y += p.speedY;

        const lifeRatio = p.life / p.maxLife;
        const fade =
          lifeRatio < 0.1
            ? lifeRatio * 10
            : lifeRatio > 0.8
            ? (1 - lifeRatio) * 5
            : 1;

        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity * fade));
        ctx.fillStyle = p.color;
        const d = p.size * 2;
        ctx.fillRect(p.x - p.size, p.y - p.size, d, d);

        if (
          p.life >= p.maxLife ||
          p.y < -10 ||
          p.x < -10 ||
          p.x > cw + 10 ||
          p.y > ch + 10
        ) {
          particlesRef.current[i] = createParticle();
        }
      }

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      className={className}
    />
  );
};

export default ParticleField;

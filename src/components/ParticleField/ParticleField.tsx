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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p, i) => {
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
        ctx.save();
        ctx.globalAlpha = p.opacity * fade;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        if (
          p.life >= p.maxLife ||
          p.y < 0 ||
          p.x < 0 ||
          p.x > canvas.width
        ) {
          particlesRef.current[i] = createParticle();
        }
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
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

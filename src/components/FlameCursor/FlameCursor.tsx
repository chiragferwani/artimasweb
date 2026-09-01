import React, { useEffect, useRef } from 'react';

interface FlameCursorProps {
  intensity?: number;
  sizeScale?: number;
}

export const FlameCursor: React.FC<FlameCursorProps> = ({
  intensity = 0.6,
  sizeScale = 0.55,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let running = true;
    let isMouseActive = false;

    const mouse = { x: -500, y: -500 };
    const fires: any[] = [];
    const sparks: any[] = [];
    const sparks2: any[] = [];

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const resizeCanvas = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };

    resizeCanvas();

    function Flame(this: any, m: { x: number; y: number }) {
      const spread = 12 * sizeScale;
      this.cx = m.x;
      this.cy = m.y;
      this.x = rand(this.cx - spread, this.cx + spread);
      this.y = rand(this.cy - 3, this.cy + 3);
      this.lx = this.x;
      this.ly = this.y;
      this.vy = rand(1.1, 2.5) * (0.8 + sizeScale * 0.4);
      this.vx = rand(-0.9, 0.9);
      this.r = rand(12, 23) * sizeScale;
      this.life = rand(1.8, 4);
      this.alive = true;

      // Dynamic fire color blend:
      // ~45% vibrant fiery orange (h: 16-34, l: 52-72)
      // ~35% deep crimson-red body (h: 0-14, l: 32-48)
      // ~20% hot gold-amber core (h: 35-46, l: 72-88)
      const p = Math.random();
      let h: number, l: number;
      if (p < 0.45) {
        h = Math.floor(rand(16, 34)); // Fiery orange
        l = rand(52, 72);
      } else if (p < 0.8) {
        h = Math.floor(rand(0, 14));  // Crimson red
        l = rand(32, 48);
      } else {
        h = Math.floor(rand(35, 46)); // Golden amber core
        l = rand(72, 88);
      }

      this.c = {
        h,
        s: 100,
        l,
        a: 0,
        ta: rand(0.55, 0.9) * Math.min(1.1, intensity),
      };
    }

    Flame.prototype.update = function () {
      this.lx = this.x;
      this.ly = this.y;
      this.y -= this.vy;
      this.vy += 0.055;
      this.x += this.vx;
      if (this.x < this.cx) this.vx += 0.11;
      else this.vx -= 0.11;
      if (this.r > 0) this.r -= 0.23;
      if (this.r <= 0) this.r = 0;
      this.life -= 0.095;
      if (this.life <= 0) {
        this.c.a -= 0.05;
        if (this.c.a <= 0) this.alive = false;
      } else if (this.c.a < this.c.ta) {
        this.c.a += 0.085;
      }
    };

    Flame.prototype.draw = function (c: CanvasRenderingContext2D) {
      if (this.r <= 0) return;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const px = this.x * dpr;
      const py = this.y * dpr;
      const pr = this.r * dpr;

      const grd1 = c.createRadialGradient(px, py, pr * 3, px, py, 0);
      grd1.addColorStop(0.5, `hsla(${this.c.h}, ${this.c.s}%, ${this.c.l}%, ${this.c.a / 16})`);
      grd1.addColorStop(0, 'transparent');

      const grd2 = c.createRadialGradient(px, py, pr, px, py, 0);
      grd2.addColorStop(0.5, `hsla(${this.c.h}, ${this.c.s}%, ${this.c.l}%, ${this.c.a})`);
      grd2.addColorStop(0, 'transparent');

      const oldComp = c.globalCompositeOperation;
      c.beginPath();
      c.arc(px, py, pr * 3, 0, 2 * Math.PI);
      c.fillStyle = grd1;
      c.fill();

      c.globalCompositeOperation = 'overlay';
      c.beginPath();
      c.arc(px, py, pr, 0, 2 * Math.PI);
      c.fillStyle = grd2;
      c.fill();
      c.globalCompositeOperation = oldComp;
    };

    function Spark(this: any, m: { x: number; y: number }) {
      const spread = 18 * sizeScale;
      this.cx = m.x;
      this.cy = m.y;
      this.x = rand(this.cx - spread, this.cx + spread);
      this.y = rand(this.cy, this.cy + 3.5);
      this.lx = this.x;
      this.ly = this.y;
      this.vy = rand(1.1, 2.6);
      this.vx = rand(-2, 2);
      this.r = rand(0.5, 1.3) * sizeScale;
      this.life = rand(2.2, 5);
      this.alive = true;
      const p = Math.random();
      const h = p < 0.5 ? Math.floor(rand(16, 35)) : Math.floor(rand(0, 15));
      const l = p < 0.5 ? rand(55, 78) : rand(35, 55);
      this.c = {
        h,
        s: 100,
        l,
        a: rand(0.45, 0.85) * Math.min(1.1, intensity),
      };
    }

    Spark.prototype.update = function () {
      this.lx = this.x;
      this.ly = this.y;
      this.y -= this.vy;
      this.x += this.vx;
      if (this.x < this.cx) this.vx += 0.11;
      else this.vx -= 0.11;
      this.vy += 0.055;
      this.life -= 0.095;
      if (this.life <= 0) {
        this.c.a -= 0.05;
        if (this.c.a <= 0) this.alive = false;
      }
    };

    Spark.prototype.draw = function (c: CanvasRenderingContext2D) {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const px = this.x * dpr;
      const py = this.y * dpr;
      const plx = this.lx * dpr;
      const ply = this.ly * dpr;
      const pr = this.r * dpr;

      c.beginPath();
      c.moveTo(plx, ply);
      c.lineTo(px, py);
      c.strokeStyle = `hsla(${this.c.h}, ${this.c.s}%, ${this.c.l}%, ${this.c.a / 2})`;
      c.lineWidth = pr * 2;
      c.lineCap = 'round';
      c.stroke();
      c.closePath();

      c.beginPath();
      c.moveTo(plx, ply);
      c.lineTo(px, py);
      c.strokeStyle = `hsla(${this.c.h}, ${this.c.s}%, ${this.c.l}%, ${this.c.a})`;
      c.lineWidth = pr;
      c.stroke();
      c.closePath();
    };

    const drawHalo = () => {
      if (!isMouseActive) return;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const mx = mouse.x * dpr;
      const my = mouse.y * dpr;
      const r = 55 * sizeScale * dpr;

      ctx.globalCompositeOperation = 'lighter';
      const grd = ctx.createRadialGradient(mx, my, r, mx, my, 0);
      grd.addColorStop(0, 'transparent');
      grd.addColorStop(1, `rgba(235, 65, 10, ${0.26 * intensity})`);

      ctx.beginPath();
      ctx.arc(mx, my, r, 0, 2 * Math.PI);
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    };

    const step = () => {
      if (!running) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isMouseActive) {
        const count = Math.max(2, Math.round(intensity * 3.5));
        for (let i = 0; i < count; i++) {
          if (fires.length < 180) fires.push(new (Flame as any)(mouse));
          if (sparks.length < 80) sparks.push(new (Spark as any)(mouse));
          if (sparks2.length < 80) sparks2.push(new (Spark as any)(mouse));
        }
      }

      for (let i = fires.length - 1; i >= 0; i--) {
        if (fires[i].alive) fires[i].update();
        else fires.splice(i, 1);
      }
      for (let i = sparks.length - 1; i >= 0; i--) {
        if (sparks[i].alive) sparks[i].update();
        else sparks.splice(i, 1);
      }
      for (let i = sparks2.length - 1; i >= 0; i--) {
        if (sparks2[i].alive) sparks2[i].update();
        else sparks2.splice(i, 1);
      }

      drawHalo();

      ctx.globalCompositeOperation = 'overlay';
      for (let i = fires.length - 1; i >= 0; i--) fires[i].draw(ctx);

      ctx.globalCompositeOperation = 'soft-light';
      for (let i = sparks.length - 1; i >= 0; i--) {
        if (i % 2 === 0) sparks[i].draw(ctx);
      }

      ctx.globalCompositeOperation = 'color-dodge';
      for (let i = sparks2.length - 1; i >= 0; i--) sparks2[i].draw(ctx);

      ctx.globalCompositeOperation = 'source-over';

      animId = requestAnimationFrame(step);
    };

    const onMouseMove = (e: MouseEvent) => {
      isMouseActive = true;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        isMouseActive = true;
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const onMouseLeave = () => {
      isMouseActive = false;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', resizeCanvas);

    animId = requestAnimationFrame(step);

    return () => {
      running = false;
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, sizeScale]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default FlameCursor;

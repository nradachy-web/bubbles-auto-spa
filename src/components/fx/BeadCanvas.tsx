"use client";

import { useEffect, useRef } from "react";

/**
 * Hydrophobic Bead Cursor. The one canvas on the site, layered over the hero
 * photo (pointer-events: none). Moving the pointer leaves water droplets that
 * refract the paint, then roll down with gravity and fade. Hard cap of 10 live
 * beads. Reduced-motion or touch devices get a few static beads instead.
 */

interface Bead {
  x: number;
  y: number;
  r: number;
  vy: number;
  phase: number;
  life: number;
  ttl: number;
}

const MAX = 10;

function drawBead(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, alpha: number) {
  // body: cool refractive droplet
  const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.35, r * 0.1, x, y, r);
  g.addColorStop(0, `rgba(220,238,255,${0.66 * alpha})`);
  g.addColorStop(0.45, `rgba(95,168,230,${0.42 * alpha})`);
  g.addColorStop(1, `rgba(26,115,209,0)`);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = g;
  ctx.fill();
  // caustic ring
  ctx.beginPath();
  ctx.arc(x, y, r * 0.92, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(95,168,230,${0.5 * alpha})`;
  ctx.lineWidth = 1;
  ctx.stroke();
  // specular highlight
  ctx.beginPath();
  ctx.arc(x - r * 0.32, y - r * 0.38, r * 0.18, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255,255,255,${0.85 * alpha})`;
  ctx.fill();
}

export default function BeadCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const noHover = window.matchMedia("(hover: none)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Static beads for reduced-motion / touch: scatter a few, draw once.
    if (reduce || noHover) {
      const draw = () => {
        ctx.clearRect(0, 0, w, h);
        const pts = [
          [0.22, 0.7, 9],
          [0.5, 0.84, 6],
          [0.68, 0.58, 11],
          [0.8, 0.78, 7],
        ];
        pts.forEach(([fx, fy, r]) => drawBead(ctx, fx * w, fy * h, r, 0.9));
      };
      // wait a frame so size is settled
      const id = requestAnimationFrame(draw);
      return () => {
        cancelAnimationFrame(id);
        ro.disconnect();
      };
    }

    const beads: Bead[] = [];
    let last = 0;

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      const now = e.timeStamp;
      if (now - last < 55) return; // throttle spawns
      last = now;
      if (beads.length >= MAX) beads.shift();
      const r = 5 + Math.abs(Math.sin(x * 0.31 + y * 0.17)) * 6;
      beads.push({ x, y, r, vy: 0.05, phase: x * 0.05, life: 0, ttl: 1100 + r * 40 });
    };

    let raf = 0;
    let prev = performance.now();
    const loop = (t: number) => {
      const dt = Math.min(t - prev, 50);
      prev = t;
      ctx.clearRect(0, 0, w, h);
      for (let i = beads.length - 1; i >= 0; i--) {
        const b = beads[i];
        b.life += dt;
        b.vy += dt * 0.00018; // gravity
        b.y += b.vy * dt;
        b.x += Math.sin(t * 0.002 + b.phase) * 0.18;
        const p = b.life / b.ttl;
        const alpha = p < 0.15 ? p / 0.15 : 1 - (p - 0.15) / 0.85;
        if (p >= 1 || b.y > h + 20) {
          beads.splice(i, 1);
          continue;
        }
        drawBead(ctx, b.x, b.y, b.r, Math.max(0, alpha));
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}

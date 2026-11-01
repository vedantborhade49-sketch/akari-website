import React, { useEffect, useState, useRef } from 'react';
import { sound } from '../utils/audio';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default'); // 'default', 'pointer', 'view', 'drag'

  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const pos = useRef({ x: -100, y: -100 });
  const mouse = useRef({ x: -100, y: -100 });
  const trailPoints = useRef([]);
  const clickSlashes = useRef([]);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    // Only enable on desktop pointer devices and when reduced motion is not preferred
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    setEnabled(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const onMouseMove = (e) => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime.current);
      const dx = e.clientX - mouse.current.x;
      const dy = e.clientY - mouse.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) / dt;

      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      lastTime.current = now;

      // Add to Katana trail points
      trailPoints.current.unshift({
        x: e.clientX,
        y: e.clientY,
        time: now,
        speed: speed,
      });

      // Keep recent buffer limited (max 28 points)
      if (trailPoints.current.length > 28) {
        trailPoints.current.pop();
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = (e) => {
      // Spawn rapid Katana slash cut at mouse position
      const angle = -Math.PI / 4 + (Math.random() * 0.3 - 0.15); // ~45 deg diagonal cut
      clickSlashes.current.push({
        x: e.clientX,
        y: e.clientY,
        angle: angle,
        length: 75,
        startTime: performance.now(),
        duration: 260,
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorVariant(type);
        setCursorText(text);
      } else if (e.target.closest('a, button, input, textarea, select, [role="button"]')) {
        setCursorVariant('pointer');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseover', handleMouseOver);

    // High performance animation loop
    let animationId;
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const render = (time) => {
      // Smooth badge follower
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.22);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.22);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      // Draw Katana Slash Trail on Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Prune old trail points (> 260ms old)
      const maxAge = 260;
      trailPoints.current = trailPoints.current.filter((pt) => time - pt.time < maxAge);

      const pts = trailPoints.current;
      if (pts.length > 2) {
        // Calculate recent speed
        const recentSpeed = pts[0].speed || 0;
        const isFastSlash = recentSpeed > 1.2;

        // 1. Draw secondary ghost afterimage if fast slash
        if (isFastSlash) {
          ctx.beginPath();
          ctx.moveTo(pts[0].x - 3, pts[0].y - 3);
          for (let i = 1; i < pts.length; i++) {
            const ageRatio = (time - pts[i].time) / maxAge;
            const alpha = (1 - ageRatio) * 0.25;
            ctx.strokeStyle = `rgba(222, 77, 35, ${alpha})`;
            ctx.lineWidth = Math.max(0.5, (1 - ageRatio) * 4);
            ctx.lineTo(pts[i].x - 3, pts[i].y - 3);
          }
          ctx.stroke();
        }

        // 2. Draw Primary Katana Blade Trail (Tapered Ribbon)
        for (let i = 0; i < pts.length - 1; i++) {
          const pt = pts[i];
          const nextPt = pts[i + 1];
          const ageRatio = (time - pt.time) / maxAge;
          const alpha = Math.max(0, 1 - ageRatio);

          // Blade stroke width tapers from head to tail
          const baseWidth = isFastSlash ? 4.5 : 2.5;
          const strokeWidth = Math.max(0.4, (1 - ageRatio) * baseWidth * (1 + Math.min(pt.speed * 0.2, 1.2)));

          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y);
          ctx.lineTo(nextPt.x, nextPt.y);

          // Tapered Katana color: Pure white blade tip transitioning into Akari Vermilion
          if (i === 0) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
          } else if (i < 4) {
            ctx.strokeStyle = `rgba(244, 235, 221, ${alpha * 0.85})`;
          } else {
            ctx.strokeStyle = `rgba(200, 62, 23, ${alpha * 0.75})`;
          }

          ctx.lineWidth = strokeWidth;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
      }

      // 3. Render Click Slashes
      clickSlashes.current = clickSlashes.current.filter((slash) => time - slash.startTime < slash.duration);
      clickSlashes.current.forEach((slash) => {
        const elapsed = time - slash.startTime;
        const progress = elapsed / slash.duration; // 0 to 1
        const alpha = 1 - progress;

        const halfLen = slash.length * 0.5 * Math.min(1, progress * 2.5);
        const cos = Math.cos(slash.angle);
        const sin = Math.sin(slash.angle);

        const x1 = slash.x - cos * halfLen;
        const y1 = slash.y - sin * halfLen;
        const x2 = slash.x + cos * halfLen;
        const y2 = slash.y + sin * halfLen;

        // Katana blade cut flash
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = Math.max(1, (1 - progress) * 3);
        ctx.stroke();

        // Secondary Vermilion blade glow cut
        ctx.beginPath();
        ctx.moveTo(x1 - 1, y1 - 1);
        ctx.lineTo(x2 - 1, y2 - 1);
        ctx.strokeStyle = `rgba(200, 62, 23, ${alpha * 0.8})`;
        ctx.lineWidth = Math.max(0.5, (1 - progress) * 5);
        ctx.stroke();
      });

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!enabled) return null;

  const isView = cursorVariant === 'view';
  const isDrag = cursorVariant === 'drag';
  const isPointer = cursorVariant === 'pointer';

  return (
    <>
      {/* Full-screen Katana Trail Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997] w-full h-full"
      />

      {/* Primary Katana Tip Cursor (Sharp Diamond Blade Point) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
          isView || isDrag ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="w-3 h-3 rotate-45 bg-vermilion border border-cream shadow-[0_0_10px_#C83E17] flex items-center justify-center">
          <div className="w-1 h-1 bg-cream" />
        </div>
      </div>

      {/* Trailing Interactive State Badge / Brackets */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ease-out font-space uppercase select-none ${
          isView
            ? 'px-4 py-1.5 bg-vermilion text-cream text-[10px] font-bold tracking-widest border-2 border-cream shadow-[4px_4px_0px_#211B18] scale-100'
            : isDrag
            ? 'w-16 h-16 bg-ink text-cream text-[10px] font-bold tracking-widest rounded-none shadow-2xl border border-cream/40 scale-100'
            : isPointer
            ? 'w-10 h-10 border-2 border-vermilion/80 bg-vermilion/15 rotate-45 shadow-[0_0_15px_rgba(200,62,23,0.3)] scale-100'
            : 'opacity-0 scale-50'
        }`}
      >
        {isView && <span>{cursorText || 'VIEW'}</span>}
        {isDrag && <span>{cursorText || 'DRAG'}</span>}
      </div>
    </>
  );
}


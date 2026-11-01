import React, { useEffect, useState, useRef } from 'react';

/**
 * KatanaCursor.jsx
 * AKARI STUDIOS — SIGNATURE WHITE KATANA MOUSE TRAIL
 *
 * Cinematic Japanese katana blade slash trail that follows mouse movements across
 * all sections of the homepage.
 *
 * Visual Characteristics:
 * - Pure luminous WHITE trail with natural tapered silhouette
 * - Needle-sharp leading tip, thicker central belly, tapering tail
 * - Subtle neutral shadow for high contrast on light cream backgrounds
 * - Speed-reactive dynamics with secondary wind streak on fast swings
 * - Automatic smooth fading when stationary (no lingering lines)
 * - 100% non-blocking (pointer-events-none), respects reduced-motion & touch
 */
export default function KatanaCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default'); // 'default', 'pointer', 'view', 'drag'
  const [cursorText, setCursorText] = useState('');

  const canvasRef = useRef(null);
  const tipRef = useRef(null);
  const badgeRef = useRef(null);

  // Position & history tracking
  const mouse = useRef({ x: -100, y: -100 });
  const smoothedMouse = useRef({ x: -100, y: -100 });
  const badgePos = useRef({ x: -100, y: -100 });
  const points = useRef([]); // History of { x, y, time, speed, vx, vy }
  const clickSlashes = useRef([]);
  const lastTime = useRef(performance.now());
  const smoothedSpeed = useRef(0);

  useEffect(() => {
    // Only enable on desktop pointer devices and when reduced motion is not preferred
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    setEnabled(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    let dpr = window.devicePixelRatio || 1;
    const handleResize = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const onMouseMove = (e) => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime.current);
      const dx = e.clientX - mouse.current.x;
      const dy = e.clientY - mouse.current.y;
      const instantSpeed = Math.sqrt(dx * dx + dy * dy) / dt;

      // Exponential moving average for silky smooth speed transitions
      smoothedSpeed.current = smoothedSpeed.current * 0.7 + instantSpeed * 0.3;

      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      lastTime.current = now;

      // Add new point at the head of the trail
      points.current.unshift({
        x: e.clientX,
        y: e.clientY,
        time: now,
        speed: smoothedSpeed.current,
        vx: dx / dt,
        vy: dy / dt,
      });

      // Cap max trail buffer length based on movement velocity (12 to 34 points)
      const maxPoints = Math.min(34, Math.max(12, Math.floor(12 + smoothedSpeed.current * 10)));
      if (points.current.length > maxPoints) {
        points.current.length = maxPoints;
      }

      // Update tip pointer position directly
      if (tipRef.current) {
        tipRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = (e) => {
      // Rapid Katana slash cut at ~45 deg with expanding diamond mark
      const angle = -Math.PI / 4 + (Math.random() * 0.2 - 0.1);
      clickSlashes.current.push({
        x: e.clientX,
        y: e.clientY,
        angle: angle,
        length: 85,
        startTime: performance.now(),
        duration: 250,
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorVariant(target.getAttribute('data-cursor') || 'view');
        setCursorText(target.getAttribute('data-cursor-text') || '');
      } else if (e.target.closest('a, button, input, textarea, select, [role="button"]')) {
        setCursorVariant('pointer');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    let animationId;
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    // Animation render loop
    const render = (time) => {
      // 1. Smooth badge follower
      badgePos.current.x = lerp(badgePos.current.x, mouse.current.x, 0.18);
      badgePos.current.y = lerp(badgePos.current.y, mouse.current.y, 0.18);
      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate3d(${badgePos.current.x}px, ${badgePos.current.y}px, 0)`;
      }

      // 2. Clear canvas with respect to DPR
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // 3. Filter out aged points (lifespan 280ms - 420ms depending on velocity)
      const maxAge = Math.min(420, Math.max(260, 260 + smoothedSpeed.current * 80));
      points.current = points.current.filter((pt) => time - pt.time < maxAge);

      const pts = points.current;

      // 4. Render Katana Blade Slash Trail
      if (pts.length >= 3) {
        const topPoints = [];
        const bottomPoints = [];
        const isFastSlash = smoothedSpeed.current > 1.35;

        // Calculate dynamic maximum blade belly width based on speed
        const maxBladeWidth = Math.min(15, Math.max(3.8, 3.8 + smoothedSpeed.current * 3.6));

        for (let i = 0; i < pts.length; i++) {
          const pt = pts[i];
          const ageRatio = (time - pt.time) / maxAge; // 0 (tip/newest) to 1 (tail/oldest)
          const u = i / (pts.length - 1); // 0 at tip to 1 at tail

          // Calculate normal vector perpendicular to motion direction
          let dx, dy;
          if (i === 0) {
            dx = pt.x - pts[1].x;
            dy = pt.y - pts[1].y;
          } else if (i === pts.length - 1) {
            dx = pts[i - 1].x - pt.x;
            dy = pts[i - 1].y - pt.y;
          } else {
            dx = pts[i - 1].x - pts[i + 1].x;
            dy = pts[i - 1].y - pts[i + 1].y;
          }

          const len = Math.sqrt(dx * dx + dy * dy);
          let nx = 0;
          let ny = 0;
          if (len > 0.001) {
            nx = -dy / len;
            ny = dx / len;
          }

          // Katana Taper Profile:
          // - Sharp needle tip at u = 0 (~1px)
          // - Rapidly swells to maximum width around u = 0.16 (the cutting belly)
          // - Gracefully tapers down to 0 at the trailing tail (u = 1.0)
          let taperFactor;
          if (u < 0.16) {
            const rise = u / 0.16;
            taperFactor = 0.18 + 0.82 * Math.sin(rise * (Math.PI / 2));
          } else {
            const decay = (1 - u) / (1 - 0.16);
            taperFactor = Math.pow(Math.max(0, decay), 1.6);
          }

          const currentWidth = maxBladeWidth * taperFactor * (1 - ageRatio * 0.4);

          topPoints.push({
            x: pt.x + nx * currentWidth,
            y: pt.y + ny * currentWidth,
          });
          bottomPoints.push({
            x: pt.x - nx * currentWidth,
            y: pt.y - ny * currentWidth,
          });
        }

        // A. Secondary White Echo Streak (Wind wake on fast katana swings)
        if (isFastSlash && pts.length > 5) {
          ctx.save();
          ctx.beginPath();
          const offsetDist = Math.min(6, 2.5 + smoothedSpeed.current * 1.2);
          ctx.moveTo(pts[0].x + offsetDist, pts[0].y + offsetDist);

          for (let i = 1; i < pts.length - 2; i++) {
            const xc = (pts[i].x + pts[i + 1].x) / 2 + offsetDist;
            const yc = (pts[i].y + pts[i + 1].y) / 2 + offsetDist;
            ctx.quadraticCurveTo(pts[i].x + offsetDist, pts[i].y + offsetDist, xc, yc);
          }

          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = 1.2;
          ctx.lineCap = 'round';
          ctx.stroke();
          ctx.restore();
        }

        // B. Main Tapered White Katana Blade Silhouette
        ctx.save();

        // Subtle dark neutral shadow for razor-sharp visibility on light cream backgrounds
        // without altering the brilliant white appearance of the blade itself
        ctx.shadowColor = 'rgba(28, 22, 20, 0.28)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 0.5;
        ctx.shadowOffsetY = 0.5;

        ctx.beginPath();
        // Leading sharp needle tip
        ctx.moveTo(pts[0].x, pts[0].y);

        // Smooth curve along top edge
        for (let i = 0; i < topPoints.length - 1; i++) {
          const xc = (topPoints[i].x + topPoints[i + 1].x) / 2;
          const yc = (topPoints[i].y + topPoints[i + 1].y) / 2;
          ctx.quadraticCurveTo(topPoints[i].x, topPoints[i].y, xc, yc);
        }
        ctx.lineTo(topPoints[topPoints.length - 1].x, topPoints[topPoints.length - 1].y);

        // Rounded needle tail
        const tailPt = pts[pts.length - 1];
        ctx.lineTo(tailPt.x, tailPt.y);

        // Smooth curve returning along bottom edge
        for (let i = bottomPoints.length - 1; i > 0; i--) {
          const xc = (bottomPoints[i].x + bottomPoints[i - 1].x) / 2;
          const yc = (bottomPoints[i].y + bottomPoints[i - 1].y) / 2;
          ctx.quadraticCurveTo(bottomPoints[i].x, bottomPoints[i].y, xc, yc);
        }
        ctx.lineTo(pts[0].x, pts[0].y);
        ctx.closePath();

        // Pure White Linear Gradient along the blade length
        const gradient = ctx.createLinearGradient(
          pts[0].x,
          pts[0].y,
          pts[pts.length - 1].x,
          pts[pts.length - 1].y
        );

        // Opacity gradient: Solid luminous white at leading tip -> soft white -> fade to transparent
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
        gradient.addColorStop(0.18, 'rgba(255, 255, 255, 0.90)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.62)');
        gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.24)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

        ctx.fillStyle = gradient;
        ctx.fill();

        // C. Razor Blade Spine Gleam (Shinogi Line)
        // High-precision brilliant central core line running through the center of the cut
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length - 1; i++) {
          const xc = (pts[i].x + pts[i + 1].x) / 2;
          const yc = (pts[i].y + pts[i + 1].y) / 2;
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.lineWidth = Math.max(0.6, 1.4 * (1 - (time - pts[0].time) / maxAge));
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.restore();
      }

      // Render Click Slashes (Instant White Razor Blade Slash)
      clickSlashes.current = clickSlashes.current.filter((slash) => time - slash.startTime < slash.duration);
      clickSlashes.current.forEach((slash) => {
        const elapsed = time - slash.startTime;
        const progress = elapsed / slash.duration; // 0 to 1
        const alpha = 1 - progress;

        const halfLen = slash.length * 0.5 * Math.min(1, progress * 3.2);
        const cos = Math.cos(slash.angle);
        const sin = Math.sin(slash.angle);

        const x1 = slash.x - cos * halfLen;
        const y1 = slash.y - sin * halfLen;
        const x2 = slash.x + cos * halfLen;
        const y2 = slash.y + sin * halfLen;

        ctx.save();
        ctx.shadowColor = 'rgba(28, 22, 20, 0.35)';
        ctx.shadowBlur = 3;

        // White razor blade slash cut
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.98})`;
        ctx.lineWidth = Math.max(0.8, (1 - progress) * 3.5);
        ctx.lineCap = 'round';
        ctx.stroke();

        // Expanding diamond mark at slash center
        const diamondSize = progress * 16;
        ctx.beginPath();
        ctx.rect(slash.x - diamondSize / 2, slash.y - diamondSize / 2, diamondSize, diamondSize);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.45})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
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
      {/* Cinematic White Katana Trail Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998] w-full h-full"
      />

      {/* Leading Katana Needle Tip (Sharp White Diamond Point) */}
      <div
        ref={tipRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
          isView || isDrag ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="w-2.5 h-2.5 rotate-45 bg-white border border-ink/40 shadow-[0_0_8px_rgba(255,255,255,0.85),0_1px_3px_rgba(0,0,0,0.35)] flex items-center justify-center">
          <div className="w-0.5 h-0.5 bg-ink" />
        </div>
      </div>

      {/* Trailing Interactive State Badge / Brackets */}
      <div
        ref={badgeRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ease-out font-space uppercase select-none ${
          isView
            ? 'px-4 py-1.5 bg-vermilion text-cream text-[10px] font-bold tracking-widest border-2 border-cream shadow-[4px_4px_0px_#211B18] scale-100'
            : isDrag
            ? 'w-16 h-16 bg-ink text-cream text-[10px] font-bold tracking-widest rounded-none shadow-2xl border border-cream/40 scale-100'
            : isPointer
            ? 'w-8 h-8 border border-white/80 bg-white/10 rotate-45 shadow-[0_0_12px_rgba(255,255,255,0.4)] scale-100'
            : 'opacity-0 scale-50'
        }`}
      >
        {isView && <span>{cursorText || 'VIEW'}</span>}
        {isDrag && <span>{cursorText || 'DRAG'}</span>}
      </div>
    </>
  );
}

import React, { useEffect, useState, useRef } from 'react';

/**
 * KatanaCursor.jsx
 * AKARI STUDIOS — SIGNATURE WHITE KATANA MOUSE TRAIL
 *
 * Cinematic Japanese katana blade slash trail that follows mouse movements across
 * all sections of the homepage.
 *
 * Visual Characteristics:
 * - Pure luminous WHITE trail with natural tapered blade silhouette
 * - Needle-sharp leading tip, thicker central cutting belly, tapering tail
 * - Subtle neutral under-shadow for razor-sharp visibility on light cream backgrounds
 * - Speed-reactive dynamics with secondary wind streak on fast swings
 * - Automatic smooth fading when stationary (no lingering lines)
 * - 100% non-blocking (pointer-events-none)
 */
export default function KatanaCursor() {
  const [visible, setVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default'); // 'default', 'pointer', 'view', 'drag'
  const [cursorText, setCursorText] = useState('');

  const canvasRef = useRef(null);
  const tipRef = useRef(null);
  const badgeRef = useRef(null);

  // Position & history tracking
  const mouse = useRef({ x: -100, y: -100 });
  const lastMouse = useRef({ x: -100, y: -100 });
  const badgePos = useRef({ x: -100, y: -100 });
  const points = useRef([]); // History of { x, y, time, speed }
  const clickSlashes = useRef([]);
  const lastTime = useRef(performance.now());
  const smoothedSpeed = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Track touch devices to prevent clutter on mobile
    const onTouchStart = () => {
      setVisible(false);
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    const onMouseMove = (e) => {
      setVisible(true);

      const now = performance.now();
      const dt = Math.max(1, now - lastTime.current);
      const dx = e.clientX - mouse.current.x;
      const dy = e.clientY - mouse.current.y;
      const instantSpeed = Math.sqrt(dx * dx + dy * dy) / dt;

      // Exponential moving average for silky smooth speed transitions
      smoothedSpeed.current = smoothedSpeed.current * 0.65 + instantSpeed * 0.35;

      const prevX = mouse.current.x;
      const prevY = mouse.current.y;

      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      lastTime.current = now;

      // Sub-pixel interpolation during rapid movements to eliminate gaps between points
      if (prevX > -50 && prevY > -50) {
        const dist = Math.hypot(dx, dy);
        if (dist > 6) {
          const steps = Math.min(6, Math.floor(dist / 6));
          for (let s = 1; s <= steps; s++) {
            const t = s / (steps + 1);
            points.current.unshift({
              x: prevX + dx * t,
              y: prevY + dy * t,
              time: now - (1 - t) * dt * 0.5,
              speed: smoothedSpeed.current,
            });
          }
        }
      }

      // Add leading point at current mouse position
      points.current.unshift({
        x: e.clientX,
        y: e.clientY,
        time: now,
        speed: smoothedSpeed.current,
      });

      // Maintain buffer size (up to 38 points based on speed)
      const maxPoints = Math.min(38, Math.max(14, Math.floor(14 + smoothedSpeed.current * 12)));
      if (points.current.length > maxPoints) {
        points.current.length = maxPoints;
      }

      // Update leading diamond tip position
      if (tipRef.current) {
        tipRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = (e) => {
      // Rapid white katana slash flash cut on click at ~45 deg
      const angle = -Math.PI / 4 + (Math.random() * 0.2 - 0.1);
      clickSlashes.current.push({
        x: e.clientX,
        y: e.clientY,
        angle: angle,
        length: 85,
        startTime: performance.now(),
        duration: 260,
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
    const render = (rTime) => {
      const now = performance.now();

      // 1. Smooth badge follower
      badgePos.current.x = lerp(badgePos.current.x, mouse.current.x, 0.2);
      badgePos.current.y = lerp(badgePos.current.y, mouse.current.y, 0.2);
      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate3d(${badgePos.current.x}px, ${badgePos.current.y}px, 0)`;
      }

      // 2. Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 3. Filter out aged points (lifespan ~380ms)
      const maxAge = Math.min(420, Math.max(260, 260 + smoothedSpeed.current * 75));
      points.current = points.current.filter((pt) => now - pt.time < maxAge);

      const pts = points.current;

      // 4. Render Katana Blade Slash Trail
      if (pts.length >= 2) {
        const isFastSlash = smoothedSpeed.current > 1.25;
        const maxBladeWidth = Math.min(16, Math.max(4.2, 4.2 + smoothedSpeed.current * 3.8));

        // A. Secondary White Echo Streak (Wind Wake on fast slashes)
        if (isFastSlash && pts.length > 5) {
          ctx.save();
          const offsetDist = Math.min(6, 3 + smoothedSpeed.current * 1.2);
          ctx.beginPath();
          ctx.moveTo(pts[0].x + offsetDist, pts[0].y + offsetDist);

          for (let i = 1; i < pts.length - 1; i++) {
            const xc = (pts[i].x + pts[i + 1].x) / 2 + offsetDist;
            const yc = (pts[i].y + pts[i + 1].y) / 2 + offsetDist;
            ctx.quadraticCurveTo(pts[i].x + offsetDist, pts[i].y + offsetDist, xc, yc);
          }

          ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.lineWidth = 1.2;
          ctx.lineCap = 'round';
          ctx.stroke();
          ctx.restore();
        }

        // B. Render Tapered Multi-Pass White Katana Blade
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Loop through segments from head (newest) to tail (oldest)
        for (let i = 0; i < pts.length - 1; i++) {
          const p1 = pts[i];
          const p2 = pts[i + 1];

          const age1 = (now - p1.time) / maxAge;
          const u = i / (pts.length - 1); // 0 at head to 1 at tail

          // Taper silhouette: Needle tip -> swells to cutting belly -> tapers to tail
          let taper;
          if (u < 0.16) {
            taper = 0.25 + 0.75 * Math.sin((u / 0.16) * (Math.PI / 2));
          } else {
            const decay = (1 - u) / (1 - 0.16);
            taper = Math.pow(Math.max(0, decay), 1.5);
          }

          const currentWidth = Math.max(0.6, maxBladeWidth * taper * (1 - age1 * 0.45));
          const alpha = Math.max(0, (1 - age1) * (1 - u * 0.65));

          // Pass 1: Neutral dark under-shadow (gives crisp edge contrast on light cream backgrounds)
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(28, 22, 20, ${alpha * 0.24})`;
          ctx.lineWidth = currentWidth + 2.5;
          ctx.stroke();

          // Pass 2: Soft White Motion Glow / Aura
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.35})`;
          ctx.lineWidth = currentWidth + 3.8;
          ctx.stroke();

          // Pass 3: Solid Luminous White Blade Body
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
          ctx.lineWidth = currentWidth;
          ctx.stroke();

          // Pass 4: Brilliant Shinogi Spine Gleam (Razor Core)
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 1.0})`;
          ctx.lineWidth = Math.max(0.8, currentWidth * 0.35);
          ctx.stroke();
        }

        ctx.restore();
      }

      // 5. Render Click Slashes (Instant White Razor Blade Flash)
      clickSlashes.current = clickSlashes.current.filter((slash) => now - slash.startTime < slash.duration);
      clickSlashes.current.forEach((slash) => {
        const elapsed = now - slash.startTime;
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
        ctx.shadowBlur = 4;

        // White razor blade slash cut
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.98})`;
        ctx.lineWidth = Math.max(0.8, (1 - progress) * 3.8);
        ctx.lineCap = 'round';
        ctx.stroke();

        // Expanding diamond mark at slash center
        const diamondSize = progress * 16;
        ctx.beginPath();
        ctx.rect(slash.x - diamondSize / 2, slash.y - diamondSize / 2, diamondSize, diamondSize);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const isView = cursorVariant === 'view';
  const isDrag = cursorVariant === 'drag';
  const isPointer = cursorVariant === 'pointer';

  return (
    <>
      {/* Cinematic White Katana Trail Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none z-[9998] w-full h-full transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Leading Katana Needle Tip (Sharp White Diamond Blade Point) */}
      <div
        ref={tipRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
          visible && !isView && !isDrag ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`rotate-45 bg-white border border-ink/40 shadow-[0_0_8px_rgba(255,255,255,0.9),0_1px_3px_rgba(0,0,0,0.4)] flex items-center justify-center transition-transform duration-150 ${
            isPointer ? 'w-3.5 h-3.5 scale-110' : 'w-2.5 h-2.5'
          }`}
        >
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
            ? 'w-8 h-8 border border-white/80 bg-white/15 rotate-45 shadow-[0_0_12px_rgba(255,255,255,0.4)] scale-100'
            : 'opacity-0 scale-50'
        }`}
      >
        {isView && <span>{cursorText || 'VIEW'}</span>}
        {isDrag && <span>{cursorText || 'DRAG'}</span>}
      </div>
    </>
  );
}

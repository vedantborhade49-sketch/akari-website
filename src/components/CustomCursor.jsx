import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default'); // 'default', 'pointer', 'view', 'drag'
  
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const pos = useRef({ x: -100, y: -100 });
  const mouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch) return;
    
    setEnabled(true);

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
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
    document.addEventListener('mouseover', handleMouseOver);

    // Smooth lerp loop for the outer ring
    let animationId;
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const render = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.22);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.22);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
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
      {/* Center dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 ${
          isView || isDrag ? 'opacity-0' : 'w-2.5 h-2.5 bg-vermilion opacity-100 shadow-[0_0_8px_#C83E17]'
        }`}
      />

      {/* Trailing follower element */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ease-out font-space uppercase ${
          isView
            ? 'px-4 py-2 bg-vermilion text-cream text-[11px] font-bold tracking-widest border-2 border-cream shadow-[4px_4px_0px_#211B18] scale-100'
            : isDrag
            ? 'w-20 h-20 bg-ink text-cream text-[11px] font-bold tracking-widest rounded-none shadow-2xl border border-cream/30 scale-100'
            : isPointer
            ? 'w-12 h-12 rounded-full border-2 border-vermilion bg-vermilion/20 shadow-[0_0_20px_rgba(200,62,23,0.35)] scale-105'
            : 'w-8 h-8 rounded-full border border-ink/40 scale-100'
        }`}
      >
        {isView && <span>{cursorText || 'VIEW'}</span>}
        {isDrag && <span>{cursorText || 'DRAG'}</span>}
      </div>
    </>
  );
}

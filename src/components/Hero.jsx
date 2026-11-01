import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sound } from '../utils/audio';

gsap.registerPlugin(ScrollTrigger);

// Authentic Japanese Seigaiha wave arches SVG (Bottom-left motif)
function SeigaihaPattern({ className = '' }) {
  return (
    <svg
      viewBox="0 0 180 120"
      className={className}
      fill="none"
      stroke="#C83E17"
      strokeWidth="1.8"
      opacity="0.85"
    >
      {/* Row 1 */}
      {[20, 36, 52, 68, 84].map((r) => (
        <circle key={`c1-${r}`} cx="30" cy="120" r={r} />
      ))}
      {[20, 36, 52, 68, 84].map((r) => (
        <circle key={`c2-${r}`} cx="110" cy="120" r={r} />
      ))}
      {/* Row 2 (offset) */}
      {[20, 36, 52, 68, 84].map((r) => (
        <circle key={`c3-${r}`} cx="70" cy="65" r={r} />
      ))}
      {[20, 36, 52, 68, 84].map((r) => (
        <circle key={`c4-${r}`} cx="-10" cy="65" r={r} />
      ))}
      {[20, 36, 52, 68, 84].map((r) => (
        <circle key={`c5-${r}`} cx="150" cy="65" r={r} />
      ))}
      {/* Row 3 (offset) */}
      {[20, 36, 52, 68].map((r) => (
        <circle key={`c6-${r}`} cx="30" cy="10" r={r} />
      ))}
      {[20, 36, 52, 68].map((r) => (
        <circle key={`c7-${r}`} cx="110" cy="10" r={r} />
      ))}
    </svg>
  );
}

// Painterly vermilion brush stroke underline SVG
function BrushStroke({ className = '' }) {
  return (
    <svg
      viewBox="0 0 380 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 18C45 9 125 5 210 9C265 11.5 325 18 376 22C320 26 210 25 125 21C68 18.5 22 23 2 18Z"
        fill="#C83E17"
      />
      <path
        d="M30 19C95 11 200 7 345 15C365 17 375 20 378 22"
        stroke="#A5300F"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M10 21C50 16 110 14 180 16"
        stroke="#DE4D23"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Halftone Dot Matrix Pattern component
function DotMatrix({ cols = 8, rows = 6, className = '' }) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(<div key={`${r}-${c}`} className="w-1.5 h-1.5 rounded-full bg-gold/70" />);
    }
  }
  return (
    <div
      className={`grid gap-2.5 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {dots}
    </div>
  );
}

export default function Hero({ onOpenInquiry }) {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const visualRef = useRef(null);
  const middleCopyRef = useRef(null);
  const brushRef = useRef(null);
  const bottomGridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(['.hero-anim-item', visualRef.current, middleCopyRef.current, bottomGridRef.current], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      // Filmic Entrance Animation
      const tl = gsap.timeline({
        delay: 0.1,
        defaults: { ease: 'power4.out' },
      });

      // Headline entrance
      tl.fromTo(
        '.hero-line-reveal',
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.1, stagger: 0.12 },
        0.1
      );

      // Canted red BRANDS box pop
      tl.fromTo(
        '.hero-brands-box',
        { scale: 0.85, opacity: 0, rotate: -6 },
        { scale: 1, opacity: 1, rotate: -2, duration: 0.9, ease: 'back.out(1.8)' },
        0.3
      );

      // Brush stroke draw
      tl.fromTo(
        brushRef.current,
        { scaleX: 0, opacity: 0, transformOrigin: 'left center' },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power3.out' },
        0.7
      );

      // Middle supporting copy reveal
      tl.fromTo(
        middleCopyRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8 },
        0.5
      );

      // Visual artwork entrance
      tl.fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.96, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: 'power3.out' },
        0.3
      );

      // Bottom category strip
      tl.fromTo(
        bottomGridRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.8
      );

      // Scroll parallax interaction
      if (containerRef.current) {
        gsap.to(visualRef.current, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const serviceCategories = [
    { title: 'BRAND & CREATIVE', path: '/services#brand-identity' },
    { title: 'WEBSITE & TECHNOLOGY', path: '/services#website-development' },
    { title: 'PERFORMANCE MARKETING', path: '/services#performance-marketing' },
    { title: 'RESTAURANT & REAL ESTATE', path: '/services#restaurant-marketing' },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] lg:min-h-[96vh] flex flex-col justify-between pt-6 md:pt-10 pb-0 px-6 sm:px-10 lg:px-14 bg-cream text-ink bg-grain border-b-2 border-ink overflow-hidden select-none"
    >
      {/* Fine Halftone & Paper Texture */}
      <div className="absolute inset-0 bg-halftone opacity-35 pointer-events-none" />

      {/* LEFT VERTICAL ANNOTATION: ア カ リ ス タ ジ オ • */}
      <div className="hidden md:flex absolute left-4 lg:left-6 top-16 bottom-28 flex-col items-center justify-start pointer-events-none z-20">
        <div
          className="font-space text-xs tracking-[0.45em] text-gold font-bold uppercase select-none"
          style={{ writingMode: 'vertical-rl' }}
        >
          ア カ リ ス タ ジ オ •
        </div>
        <div className="w-[1px] flex-1 bg-gold/40 mt-4" />
      </div>

      {/* MAIN ASYMMETRIC GRID: Headline, Middle Copy, and Right Collage */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto pt-2 pb-6 pl-0 md:pl-8">
        
        {/* LEFT COLUMN: DOMINANT TYPOGRAPHIC COMPOSITION (Cols 1-7) */}
        <div ref={headlineRef} className="lg:col-span-7 xl:col-span-7 space-y-1">
          
          {/* LINE 1: "WE MAKE" */}
          <div className="overflow-hidden">
            <h1 className="hero-line-reveal font-anton text-[clamp(4.2rem,11.5vw,10.8rem)] leading-[0.84] text-ink tracking-tight uppercase">
              WE MAKE
            </h1>
          </div>

          {/* LINE 2: "BRANDS" (Canted / Slanted Vermilion Brutalist Box) */}
          <div className="pt-1 pb-2 overflow-visible">
            <div className="hero-brands-box inline-block -rotate-2 transform origin-left bg-vermilion border-2 sm:border-4 border-vermilion px-4 sm:px-7 py-0.5 sm:py-1.5 shadow-[8px_8px_0px_#211B18] hover:rotate-0 transition-transform duration-300">
              <span className="font-anton italic text-[clamp(4rem,11.2vw,10.5rem)] leading-[0.84] text-cream tracking-tight uppercase block select-none">
                BRANDS
              </span>
            </div>
          </div>

          {/* LINE 3: "IMPOSSIBLE" */}
          <div className="overflow-hidden">
            <h2 className="hero-line-reveal font-anton text-[clamp(4.2rem,11.5vw,10.8rem)] leading-[0.84] text-ink tracking-tight uppercase">
              IMPOSSIBLE
            </h2>
          </div>

          {/* LINE 4: "TO IGNORE." (With Expressive Red Brush Underline) */}
          <div className="relative pt-1 overflow-visible">
            <div className="overflow-hidden">
              <h2 className="hero-line-reveal font-anton text-[clamp(4.2rem,11.5vw,10.8rem)] leading-[0.84] text-ink tracking-tight uppercase">
                TO IGNORE.
              </h2>
            </div>

            {/* Brush Stroke curved right under IGNORE. */}
            <div ref={brushRef} className="absolute -bottom-4 sm:-bottom-6 left-28 sm:left-44 md:left-56 w-56 sm:w-80 md:w-96 pointer-events-none">
              <BrushStroke className="w-full h-auto drop-shadow-sm" />
            </div>
          </div>
        </div>

        {/* MIDDLE / RIGHT SECTION: Editorial Statement + Japanese Brutalist Visual Collage */}
        <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col justify-between h-full pt-4 lg:pt-0">
          
          {/* MIDDLE EDITORIAL STATEMENT (Positioned to the left/top of visual) */}
          <div
            ref={middleCopyRef}
            className="mb-6 lg:mb-8 space-y-3 pl-2 sm:pl-4 z-20"
          >
            {/* Muted Gold Subtitle */}
            <div className="font-anton text-lg sm:text-2xl text-gold uppercase tracking-wider">
              CREATIVE × DIGITAL × GROWTH
            </div>

            {/* Supporting Copy with Vermilion Left Bar */}
            <div className="border-l-2 sm:border-l-4 border-vermilion pl-3.5 py-0.5">
              <p className="font-sans text-xs sm:text-sm md:text-[15px] font-medium text-ink/85 leading-snug max-w-sm">
                Turning vision into digital reality through strategy, creativity, technology and performance.
              </p>
            </div>
          </div>

          {/* RIGHT VISUAL ARTWORK COMPOSITION: Pagoda, Red Brush Sun, Concrete Architecture, Stencil 01 */}
          <div
            ref={visualRef}
            className="relative w-full max-w-lg lg:max-w-none ml-auto group"
          >
            {/* Halftone Dot Matrix Pattern Accents */}
            <div className="absolute -top-6 -left-8 hidden sm:block pointer-events-none z-0">
              <DotMatrix cols={9} rows={5} />
            </div>
            <div className="absolute bottom-16 -left-6 hidden sm:block pointer-events-none z-0">
              <DotMatrix cols={6} rows={4} />
            </div>

            {/* Main Visual Graphic Frame */}
            <div className="relative border-2 sm:border-4 border-ink bg-cream-light overflow-hidden shadow-[12px_12px_0px_rgba(33,27,24,0.18)]">
              {/* Composite Graphic Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="/hero-art.jpg"
                  alt="Akari Studios Japanese Brutalist Architecture and Pagoda Collage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlaid Slanted Vermilion Number 01 Stencil */}
                <div className="absolute bottom-2 right-3 sm:bottom-4 sm:right-6 select-none pointer-events-none">
                  <span className="font-anton italic text-7xl sm:text-9xl text-cream/95 tracking-tighter drop-shadow-[4px_4px_0px_#C83E17] leading-none">
                    01
                  </span>
                </div>

                {/* Subtle Grain & Tone Overlay */}
                <div className="absolute inset-0 bg-ink/10 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Sub-label border bar */}
              <div className="px-4 py-2 bg-cream border-t-2 border-ink flex items-center justify-between font-space text-[10px] sm:text-xs tracking-wider uppercase">
                <span className="font-bold text-ink">ARCHITECTURAL PRESTIGE & CULINARY CINEMA</span>
                <span className="text-vermilion font-mono font-bold">[TOKYO // GINZA]</span>
              </div>
            </div>

            {/* Corner Crosshair Registration Marks */}
            <div className="absolute -top-3 -right-3 w-4 h-4 border-t-2 border-r-2 border-ink pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b-2 border-l-2 border-ink pointer-events-none" />
          </div>

        </div>

      </div>

      {/* BOTTOM SECTION: Seigaiha Waves + 4 Service Categories Grid */}
      <div className="relative z-10 w-full pt-8 pb-6 border-t-2 border-ink mt-6 flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
        
        {/* Bottom Left: Japanese Traditional Seigaiha Concentric Waves */}
        <div className="relative shrink-0 hidden sm:block w-32 h-16 overflow-hidden">
          <SeigaihaPattern className="w-full h-full -translate-y-4" />
        </div>

        {/* 4 Pillars Category Grid (BRAND & CREATIVE | WEBSITE & TECHNOLOGY | etc.) */}
        <div
          ref={bottomGridRef}
          className="w-full flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-x-0 md:divide-x-2 divide-ink/20 font-space text-xs tracking-wider uppercase font-bold"
        >
          {serviceCategories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.path}
              onClick={() => sound.click()}
              className="px-2 md:px-6 py-1 group flex flex-col justify-center hover:text-vermilion transition-colors"
            >
              <div className="text-[10px] text-ink/40 font-mono mb-0.5">
                0{idx + 1} //
              </div>
              <div className="text-xs sm:text-sm text-ink group-hover:text-vermilion font-bold leading-tight uppercase">
                {cat.title}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

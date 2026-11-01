import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sound } from '../utils/audio';
import { SeigaihaPattern, BrushStroke, DotMatrix, VerticalJapaneseGuide } from './BrutalistGraphics';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onOpenInquiry }) {
  const [palette, setPalette] = useState('vermilion'); // 'vermilion' (per Section 01 spec) or 'cream' (per reference)
  
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
        gsap.set(['.hero-line-reveal', visualRef.current, middleCopyRef.current, bottomGridRef.current], {
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

      // Canted BRANDS box pop
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
    { title: 'BRAND & CREATIVE', path: '#service-deep-dive' },
    { title: 'WEBSITE & TECHNOLOGY', path: '#service-deep-dive' },
    { title: 'PERFORMANCE MARKETING', path: '#service-deep-dive' },
    { title: 'RESTAURANT & REAL ESTATE', path: '#service-deep-dive' },
  ];

  const isVermilion = palette === 'vermilion';

  return (
    <section
      ref={containerRef}
      className={`relative w-full min-h-[90vh] lg:min-h-[96vh] flex flex-col justify-between pt-6 md:pt-10 pb-0 px-6 sm:px-10 lg:px-14 border-b-2 border-ink overflow-hidden select-none transition-colors duration-500 ${
        isVermilion
          ? 'bg-vermilion text-ink bg-grain'
          : 'bg-cream text-ink bg-grain'
      }`}
    >
      {/* Fine Halftone & Paper Texture */}
      <div className="absolute inset-0 bg-halftone opacity-35 pointer-events-none" />

      {/* LEFT VERTICAL ANNOTATION: ア カ リ ス タ ジ オ • */}
      <VerticalJapaneseGuide
        text="ア カ リ ス タ ジ オ •"
        color={isVermilion ? 'text-cream/90' : 'text-gold'}
        lineColor={isVermilion ? 'bg-cream/40' : 'bg-gold/40'}
      />

      {/* TOP SUBTLE PALETTE TOGGLE (Allows instant switching between Full Vermilion and Warm Cream) */}
      <div className="absolute top-3 right-6 lg:right-12 z-20 flex items-center gap-2 font-space text-[10px] uppercase font-bold">
        <span className={isVermilion ? 'text-cream/70' : 'text-ink/60'}>CANVAS:</span>
        <button
          onClick={() => {
            sound.click();
            setPalette('vermilion');
          }}
          className={`px-2 py-0.5 border transition-all ${
            isVermilion
              ? 'bg-ink text-cream border-ink shadow-sm'
              : 'border-ink/40 text-ink/70 hover:border-ink'
          }`}
        >
          VERMILION
        </button>
        <button
          onClick={() => {
            sound.click();
            setPalette('cream');
          }}
          className={`px-2 py-0.5 border transition-all ${
            !isVermilion
              ? 'bg-ink text-cream border-ink shadow-sm'
              : 'border-cream/50 text-cream hover:bg-cream hover:text-ink'
          }`}
        >
          CREAM
        </button>
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

          {/* LINE 2: "BRANDS" (Canted / Slanted Brutalist Box) */}
          <div className="pt-1 pb-2 overflow-visible">
            <div
              className={`hero-brands-box inline-block -rotate-2 transform origin-left px-4 sm:px-7 py-0.5 sm:py-1.5 transition-transform duration-300 hover:rotate-0 ${
                isVermilion
                  ? 'bg-ink text-cream border-2 sm:border-4 border-cream shadow-[8px_8px_0px_#F4EBDD]'
                  : 'bg-vermilion text-cream border-2 sm:border-4 border-vermilion shadow-[8px_8px_0px_#211B18]'
              }`}
            >
              <span
                className={`font-anton italic text-[clamp(4rem,11.2vw,10.5rem)] leading-[0.84] tracking-tight uppercase block select-none ${
                  isVermilion ? 'text-cream' : 'text-cream'
                }`}
              >
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

          {/* LINE 4: "TO IGNORE." (With Expressive Brush Underline) */}
          <div className="relative pt-1 overflow-visible">
            <div className="overflow-hidden">
              <h2 className="hero-line-reveal font-anton text-[clamp(4.2rem,11.5vw,10.8rem)] leading-[0.84] text-ink tracking-tight uppercase">
                TO IGNORE.
              </h2>
            </div>

            {/* Brush Stroke curved right under IGNORE. */}
            <div
              ref={brushRef}
              className="absolute -bottom-4 sm:-bottom-6 left-28 sm:left-44 md:left-56 w-56 sm:w-80 md:w-96 pointer-events-none"
            >
              <BrushStroke
                className="w-full h-auto drop-shadow-sm"
                color={isVermilion ? '#F4EBDD' : '#C83E17'}
              />
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
            {/* Subtitle */}
            <div
              className={`font-anton text-lg sm:text-2xl uppercase tracking-wider ${
                isVermilion ? 'text-cream' : 'text-gold'
              }`}
            >
              CREATIVE × DIGITAL × GROWTH
            </div>

            {/* Supporting Copy with Vertical Bar */}
            <div
              className={`border-l-2 sm:border-l-4 pl-3.5 py-0.5 ${
                isVermilion ? 'border-cream' : 'border-vermilion'
              }`}
            >
              <p
                className={`font-sans text-xs sm:text-sm md:text-[15px] font-medium leading-snug max-w-sm ${
                  isVermilion ? 'text-cream/95' : 'text-ink/85'
                }`}
              >
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
              <DotMatrix cols={9} rows={5} dotColor={isVermilion ? 'bg-cream/40' : 'bg-gold/60'} />
            </div>
            <div className="absolute bottom-16 -left-6 hidden sm:block pointer-events-none z-0">
              <DotMatrix cols={6} rows={4} dotColor={isVermilion ? 'bg-cream/40' : 'bg-gold/60'} />
            </div>

            {/* Main Visual Graphic Frame */}
            <div
              className={`relative border-2 sm:border-4 border-ink overflow-hidden ${
                isVermilion
                  ? 'bg-ink shadow-[12px_12px_0px_#211B18]'
                  : 'bg-cream-light shadow-[12px_12px_0px_rgba(33,27,24,0.18)]'
              }`}
            >
              {/* Composite Graphic Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="/hero-art.jpg"
                  alt="Akari Studios Japanese Brutalist Architecture and Pagoda Collage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlaid Slanted Number 01 Stencil */}
                <div className="absolute bottom-2 right-3 sm:bottom-4 sm:right-6 select-none pointer-events-none">
                  <span className="font-anton italic text-7xl sm:text-9xl text-cream/95 tracking-tighter drop-shadow-[4px_4px_0px_#C83E17] leading-none">
                    01
                  </span>
                </div>

                {/* Subtle Grain & Tone Overlay */}
                <div className="absolute inset-0 bg-ink/10 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Sub-label border bar */}
              <div
                className={`px-4 py-2 border-t-2 border-ink flex items-center justify-between font-space text-[10px] sm:text-xs tracking-wider uppercase ${
                  isVermilion ? 'bg-ink text-cream' : 'bg-cream text-ink'
                }`}
              >
                <span className="font-bold">ARCHITECTURAL PRESTIGE & CULINARY CINEMA</span>
                <span className="text-vermilion font-mono font-bold">[TOKYO // GINZA]</span>
              </div>
            </div>

            {/* Corner Crosshair Registration Marks */}
            <div
              className={`absolute -top-3 -right-3 w-4 h-4 border-t-2 border-r-2 ${
                isVermilion ? 'border-cream' : 'border-ink'
              } pointer-events-none`}
            />
            <div
              className={`absolute -bottom-3 -left-3 w-4 h-4 border-b-2 border-l-2 ${
                isVermilion ? 'border-cream' : 'border-ink'
              } pointer-events-none`}
            />
          </div>

        </div>

      </div>

      {/* BOTTOM SECTION: Seigaiha Waves + 4 Service Categories Grid */}
      <div
        className={`relative z-10 w-full pt-8 pb-6 border-t-2 mt-6 flex flex-col md:flex-row items-end md:items-center justify-between gap-6 ${
          isVermilion ? 'border-ink/40' : 'border-ink'
        }`}
      >
        
        {/* Bottom Left: Japanese Traditional Seigaiha Concentric Waves */}
        <div className="relative shrink-0 hidden sm:block w-32 h-16 overflow-hidden">
          <SeigaihaPattern
            className="w-full h-full -translate-y-4"
            stroke={isVermilion ? '#F4EBDD' : '#C83E17'}
          />
        </div>

        {/* 4 Pillars Category Grid (BRAND & CREATIVE | WEBSITE & TECHNOLOGY | etc.) */}
        <div
          ref={bottomGridRef}
          className={`w-full flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-x-0 md:divide-x-2 font-space text-xs tracking-wider uppercase font-bold ${
            isVermilion ? 'divide-ink/30' : 'divide-ink/20'
          }`}
        >
          {serviceCategories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.path}
              onClick={() => sound.click()}
              className={`px-2 md:px-6 py-1 group flex flex-col justify-center transition-colors ${
                isVermilion
                  ? 'text-cream hover:text-ink'
                  : 'text-ink hover:text-vermilion'
              }`}
            >
              <div
                className={`text-[10px] font-mono mb-0.5 ${
                  isVermilion ? 'text-cream/60' : 'text-ink/40'
                }`}
              >
                0{idx + 1} //
              </div>
              <div className="text-xs sm:text-sm font-bold leading-tight uppercase">
                {cat.title}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

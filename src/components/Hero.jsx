import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowDown, Sparkles, MapPin, Layers, Flame } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { sound } from '../utils/audio';
import { SeigaihaPattern, BrushStroke, DotMatrix, Crosshairs, VerticalJapaneseGuide } from './BrutalistGraphics';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onOpenInquiry }) {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const visualRef = useRef(null);
  const copyBlockRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const brushRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(['.hero-line-reveal', visualRef.current, copyBlockRef.current, ctaGroupRef.current], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      const tl = gsap.timeline({
        delay: 0.1,
        defaults: { ease: 'power4.out' },
      });

      // Headline entrance: clipped reveal
      tl.fromTo(
        '.hero-line-reveal',
        { y: '115%', opacity: 0 },
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

      // Supporting copy
      tl.fromTo(
        copyBlockRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.5
      );

      // Visual artwork entrance
      tl.fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.96, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: 'power3.out' },
        0.3
      );

      // CTAs
      tl.fromTo(
        ctaGroupRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.7
      );

      // Scroll Parallax
      if (containerRef.current) {
        gsap.to(visualRef.current, {
          y: -60,
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

  const handleHeroMouseMove = (e) => {
    if (!visualRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xOffset = (clientX / innerWidth - 0.5) * 12;
    const yOffset = (clientY / innerHeight - 0.5) * 12;
    gsap.to(visualRef.current, {
      x: xOffset,
      y: yOffset,
      rotateY: xOffset * 0.4,
      rotateX: -yOffset * 0.4,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleHeroMouseLeave = () => {
    if (!visualRef.current) return;
    gsap.to(visualRef.current, {
      x: 0,
      y: 0,
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative w-full min-h-[92vh] lg:min-h-[96vh] flex flex-col justify-between pt-6 md:pt-10 pb-8 px-6 sm:px-10 lg:px-14 bg-vermilion text-ink bg-grain border-b-2 border-ink overflow-hidden select-none selection:bg-ink selection:text-cream"
    >
      {/* Background Halftone & Texture */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

      {/* LEFT VERTICAL ANNOTATION: ア カ リ ス タ ジ オ • */}
      <VerticalJapaneseGuide
        text="ア カ リ ス タ ジ オ •"
        color="text-cream/90"
        lineColor="bg-cream/40"
      />

      {/* TOP STUDIO IDENTIFICATION BAR */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-space text-[11px] md:text-xs tracking-widest uppercase pb-4 mb-4 md:mb-6 border-b border-ink/30 pl-0 md:pl-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-cream px-2.5 py-1 border-2 border-ink shadow-[3px_3px_0px_#211B18] flex items-center">
              <img
                src="/logo1.png"
                alt="Akari Studios Official Logo"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </div>
            <span className="text-cream font-serif font-black text-base drop-shadow-sm">朱</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-cream font-medium">
            <MapPin className="w-3.5 h-3.5 text-ink" />
            <span>GINZA, TOKYO // 35.6762° N, 139.6503° E</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-ink font-bold">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink text-cream font-space text-[10px] tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 text-vermilion" />
            <span>CREATIVE × DIGITAL × GROWTH</span>
          </div>
        </div>
      </div>

      {/* MAIN ASYMMETRICAL COMPOSITION */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto pt-2 pb-6 pl-0 md:pl-8">
        
        {/* LEFT COLUMN: DOMINANT TYPOGRAPHIC COMPOSITION (Cols 1-7) */}
        <div ref={headlineRef} className="lg:col-span-7 xl:col-span-7 space-y-4">
          
          <div className="space-y-1">
            {/* LINE 1: "WE MAKE" */}
            <div className="overflow-hidden">
              <h1 className="hero-line-reveal font-anton text-[clamp(4.2rem,11.5vw,10.8rem)] leading-[0.84] text-ink tracking-tight uppercase">
                WE MAKE
              </h1>
            </div>

            {/* LINE 2: "BRANDS" (Canted Ink Black Box with Cream Lettering) */}
            <div className="pt-1 pb-2 overflow-visible">
              <div className="hero-brands-box inline-block -rotate-2 transform origin-left bg-ink border-2 sm:border-4 border-cream px-4 sm:px-8 py-0.5 sm:py-2 shadow-[8px_8px_0px_#F4EBDD] hover:rotate-0 transition-transform duration-300">
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

            {/* LINE 4: "TO IGNORE." (With Cream Brush Underline) */}
            <div className="relative pt-1 overflow-visible">
              <div className="overflow-hidden">
                <h2 className="hero-line-reveal font-anton text-[clamp(4.2rem,11.5vw,10.8rem)] leading-[0.84] text-ink tracking-tight uppercase">
                  TO IGNORE.
                </h2>
              </div>

              {/* Brush Stroke underline */}
              <div
                ref={brushRef}
                className="absolute -bottom-4 sm:-bottom-6 left-8 sm:left-44 md:left-56 w-44 sm:w-80 md:w-96 pointer-events-none"
              >
                <BrushStroke className="w-full h-auto drop-shadow-sm" color="#F4EBDD" />
              </div>
            </div>
          </div>

          {/* SUPPORTING DESCRIPTION BLOCK */}
          <div
            ref={copyBlockRef}
            className="pt-4 max-w-xl space-y-3"
          >
            <div className="border-l-2 sm:border-l-4 border-ink pl-4 py-0.5">
              <p className="font-sans text-sm md:text-base font-medium text-cream leading-relaxed">
                We bring creativity, technology and digital strategy together to help businesses build stronger brands and grow their presence.
              </p>
            </div>
          </div>

          {/* CALL TO ACTIONS */}
          <div ref={ctaGroupRef} className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton
              onClick={() => {
                sound.click();
                onOpenInquiry();
              }}
              variant="dark"
              size="lg"
              className="shadow-[4px_4px_0px_#F4EBDD] active:translate-x-1 active:translate-y-1 active:shadow-none"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              START A PROJECT
            </MagneticButton>

            <MagneticButton
              href="#what-we-do"
              variant="outline-cream"
              size="lg"
              className="shadow-[4px_4px_0px_#211B18] active:translate-x-1 active:translate-y-1 active:shadow-none"
              icon={<ArrowDown className="w-4 h-4" />}
            >
              DISCOVER WHAT WE DO
            </MagneticButton>
          </div>
        </div>

        {/* RIGHT COLUMN: ART-DIRECTED LAYERED PHOTOGRAPHIC COLLAGE (Cols 8-12) */}
        <div ref={visualRef} className="lg:col-span-5 xl:col-span-5 relative mt-6 lg:mt-0">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            
            {/* Halftone Dot Matrix Pattern Accents */}
            <div className="absolute -top-6 -left-8 hidden sm:block pointer-events-none z-0">
              <DotMatrix cols={9} rows={5} dotColor="bg-cream/40" />
            </div>
            <div className="absolute bottom-16 -left-6 hidden sm:block pointer-events-none z-0">
              <DotMatrix cols={6} rows={4} dotColor="bg-cream/40" />
            </div>

            {/* Main Visual Graphic Frame with continuous float */}
            <div className="relative border-2 sm:border-4 border-ink bg-ink overflow-hidden shadow-[12px_12px_0px_#211B18] animate-float-slow">
              {/* Composite Graphic Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden group">
                <img
                  src="/hero-art.jpg"
                  alt="Akari Studios Japanese Brutalist Architecture and Pagoda Collage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlaid Slanted Number 01 Stencil */}
                <div className="absolute bottom-2 right-3 sm:bottom-4 sm:right-6 select-none pointer-events-none">
                  <span className="font-anton italic text-7xl sm:text-9xl text-cream/95 tracking-tighter drop-shadow-[4px_4px_0px_#211B18] leading-none">
                    01
                  </span>
                </div>

                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 bg-ink/10 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Sub-label border bar with kinetic spin */}
              <div className="px-4 py-2 bg-ink text-cream border-t-2 border-ink flex items-center justify-between font-space text-[10px] sm:text-xs tracking-wider uppercase">
                <div className="flex items-center gap-2">
                  <span className="animate-spin-slow inline-block text-vermilion">✦</span>
                  <span className="font-bold">CREATIVE × TECHNOLOGY × GROWTH</span>
                </div>
                <span className="text-vermilion font-mono font-bold">[AKARI STUDIOS]</span>
              </div>
            </div>

            {/* Corner Crosshair Registration Marks */}
            <div className="absolute -top-3 -right-3 w-4 h-4 border-t-2 border-r-2 border-cream pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b-2 border-l-2 border-cream pointer-events-none" />
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION: Seigaiha Waves + Core Discipline Pillars */}
      <div className="relative z-10 w-full pt-6 pb-2 border-t-2 border-ink/40 mt-6 flex flex-col md:flex-row items-end md:items-center justify-between gap-6 pl-0 md:pl-8">
        {/* Bottom Left: Japanese Traditional Seigaiha Concentric Waves */}
        <div className="relative shrink-0 hidden sm:block w-32 h-16 overflow-hidden">
          <SeigaihaPattern className="w-full h-full -translate-y-4" stroke="#F4EBDD" />
        </div>

        {/* 4 Pillars Category Grid */}
        <div className="w-full flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-x-0 md:divide-x-2 divide-ink/30 font-space text-xs tracking-wider uppercase font-bold text-cream">
          {[
            { title: 'PERFORMANCE MARKETING', path: '#services-performance' },
            { title: 'TECHNOLOGY SOLUTIONS', path: '#services-technology' },
            { title: 'SOCIAL MEDIA MARKETING', path: '#services-social' },
            { title: 'SEO & LOCAL VISIBILITY', path: '#services-seo' },
          ].map((cat, idx) => (
            <a
              key={idx}
              href={cat.path}
              onClick={() => sound.click()}
              className="px-2 md:px-6 py-1 group flex flex-col justify-center hover:text-ink transition-colors"
            >
              <div className="text-[10px] text-cream/60 font-mono mb-0.5">
                0{idx + 1} //
              </div>
              <div className="text-xs sm:text-sm font-bold leading-tight uppercase group-hover:underline">
                {cat.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

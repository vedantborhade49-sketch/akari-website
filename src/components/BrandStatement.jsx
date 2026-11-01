import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { InkanStamp, Crosshairs, DotMatrix } from './BrutalistGraphics';
import { Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BrandStatement() {
  const sectionRef = useRef(null);
  const graphicCircleRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Rotate and scale the background Enso graphic on scroll
      gsap.to(graphicCircleRef.current, {
        rotate: 180,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Subtle parallax on the headline
      gsap.fromTo(
        headlineRef.current,
        { y: 30 },
        {
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const marqueeItems = [
    "CREATIVE THINKING",
    "SMARTER TECHNOLOGY",
    "DIGITAL GROWTH",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-ink text-cream border-b-2 border-ink overflow-hidden selection:bg-vermilion selection:text-cream"
    >
      {/* Background Halftone & Texture */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      {/* Animated Scroll-Reactive Graphic Element (Enso / Geometric Circle) */}
      <div
        ref={graphicCircleRef}
        className="absolute -right-24 -top-24 w-96 h-96 md:w-[540px] md:h-[540px] rounded-full border-4 border-vermilion/30 border-dashed pointer-events-none select-none opacity-30 flex items-center justify-center"
      >
        <div className="w-4/5 h-4/5 rounded-full border-2 border-gold/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        
        {/* Top Editorial Index Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-cream/20 mb-10 font-space text-xs tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-vermilion inline-block" />
            <span className="text-vermilion font-bold">02 // BRAND STATEMENT</span>
            <span className="text-cream/40 hidden sm:inline">[OUR PHILOSOPHY]</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg text-vermilion font-bold">信念</span>
            <span className="text-cream/50 text-[10px]">AKARI STUDIOS</span>
          </div>
        </div>

        {/* MAIN TYPOGRAPHIC EXPERIENCE: "GOOD IDEAS DESERVE BOLD EXECUTION." */}
        <div ref={headlineRef} className="my-8 select-none">
          <div className="space-y-2">
            <div className="font-anton text-[clamp(3.8rem,11.5vw,10.5rem)] leading-[0.84] text-cream uppercase tracking-tight">
              GOOD IDEAS
            </div>
            <div className="font-anton text-[clamp(3.8rem,11.5vw,10.5rem)] leading-[0.84] text-cream uppercase tracking-tight pl-0 sm:pl-12 lg:pl-20">
              DESERVE
            </div>
            <div className="font-anton text-[clamp(3.8rem,11.5vw,10.5rem)] leading-[0.84] text-vermilion uppercase tracking-tight flex items-baseline gap-4 sm:gap-8 flex-wrap">
              <span>BOLD EXECUTION.</span>
              <div className="inline-block translate-y-[-0.2em] sm:translate-y-[-0.3em]">
                <InkanStamp size="md" />
              </div>
            </div>
          </div>
        </div>

        {/* SUPPORTING COPY IN AN ASYMMETRICAL EDITORIAL BLOCK (Avoid ordinary paragraph layouts) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12 border-t-2 border-cream/20 mt-12">
          
          <div className="lg:col-span-4 space-y-2">
            <div className="font-space text-xs font-bold text-vermilion uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE GUIDING PRINCIPLE</span>
            </div>
            <div className="font-space text-xs text-cream/50 uppercase tracking-wider">
              CREATIVE DIRECTION × MODERN CODE × MEASURABLE SCALE
            </div>
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 border-2 border-cream/20 bg-ink-deep relative">
            <Crosshairs className="absolute inset-0" color="border-cream/30" />
            <p className="font-sans text-base sm:text-lg md:text-xl text-cream/90 font-medium leading-relaxed">
              We believe every business deserves a digital presence that reflects its potential. We combine strategic thinking, creativity and technology to make that happen.
            </p>
          </div>

        </div>

      </div>

      {/* CONTINUOUSLY MOVING MARQUEE TICKER */}
      <div className="relative w-full overflow-hidden py-4 mt-16 md:mt-24 border-y-2 border-cream/20 bg-ink-deep text-cream">
        <div className="flex w-fit animate-marquee" style={{ animationDuration: '24s' }}>
          {[0, 1, 2].map((copyIdx) => (
            <div key={copyIdx} className="flex shrink-0 items-center">
              {marqueeItems.map((text, idx) => (
                <div key={idx} className="flex items-center gap-6 whitespace-nowrap px-6 font-anton text-2xl md:text-3xl tracking-wide uppercase">
                  <span>{text}</span>
                  <span className="text-vermilion text-xl font-serif">朱</span>
                  <span className="text-vermilion text-xs font-space tracking-widest">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

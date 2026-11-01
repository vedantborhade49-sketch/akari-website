import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Crosshairs, DotMatrix, InkanStamp } from './BrutalistGraphics';
import { ArrowRight, ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OurApproach() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.approach-card',
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      kanji: '調査',
      desc: 'Understand the business, objectives, audience and requirements.',
      detail: 'Preliminary intake, brand audit, competitor mapping & goal alignment.',
    },
    {
      num: '02',
      title: 'STRATEGIZE',
      kanji: '戦略',
      desc: 'Identify the right direction, services and execution plan.',
      detail: 'Tailored roadmapping, channel selection & technical architecture design.',
    },
    {
      num: '03',
      title: 'CREATE',
      kanji: '制作',
      desc: 'Develop the creative assets, technology or campaign elements required.',
      detail: 'High-fidelity brutalist art direction, clean React code & ad creative production.',
    },
    {
      num: '04',
      title: 'EXECUTE',
      kanji: '実行',
      desc: 'Implement, launch and manage the agreed work.',
      detail: 'Staged sprint deployment, live QA, campaign initialization & monitoring.',
    },
    {
      num: '05',
      title: 'OPTIMIZE',
      kanji: '改善',
      desc: 'Review performance, identify improvements and refine execution where applicable.',
      detail: 'Ongoing conversion analysis, search ranking grooming & iterative enhancements.',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-36 px-6 lg:px-14 bg-ink text-cream border-b-2 border-ink overflow-hidden selection:bg-vermilion selection:text-cream"
    >
      {/* Background Halftone */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-cream/20 mb-16">
          <div>
            <div className="flex items-center gap-2 font-space text-xs font-bold text-vermilion uppercase tracking-widest mb-3">
              <span className="w-2.5 h-2.5 bg-vermilion inline-block" />
              <span>06 // OUR APPROACH</span>
            </div>

            <h2 className="headline-hero text-cream uppercase leading-[0.88] tracking-tight">
              FROM IDEA <br />
              <span className="text-vermilion">TO EXECUTION.</span>
            </h2>
          </div>

          <div className="space-y-3 max-w-md">
            <p className="font-sans text-base sm:text-lg text-cream/80 leading-relaxed">
              A disciplined, transparent five-step execution rhythm designed for clarity, rapid delivery, and measurable progress at every phase.
            </p>
            <div className="font-mono text-xs text-cream/40 uppercase">
              METHODOLOGY // STEP 01 TO 05
            </div>
          </div>
        </div>

        {/* 5-Step Experimental Brutalist Flow (Horizontal Cards on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((st, idx) => (
            <div
              key={st.num}
              className="approach-card p-6 sm:p-8 border-2 border-cream/20 bg-ink-deep relative group hover:border-vermilion hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <Crosshairs className="absolute inset-0" color="border-cream/20" />

              <div>
                <div className="flex items-baseline justify-between pb-3 border-b border-cream/15 mb-6">
                  <span className="font-anton text-4xl sm:text-5xl text-vermilion leading-none group-hover:scale-105 transition-transform">
                    {st.num}
                  </span>
                  <span className="font-serif text-sm font-bold text-cream/50">
                    {st.kanji}
                  </span>
                </div>

                <h3 className="font-anton text-xl sm:text-2xl text-cream uppercase mb-3 leading-tight group-hover:text-vermilion transition-colors">
                  {st.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-cream/80 leading-relaxed mb-4">
                  {st.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-cream/10 text-[10px] font-space text-cream/50 uppercase leading-snug">
                {st.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Connecting Tape */}
        <div className="mt-8 py-3 px-6 border border-cream/20 bg-ink-deep flex flex-wrap items-center justify-between gap-4 font-space text-xs text-cream/60 uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span className="text-vermilion font-bold">FLOW:</span>
            <span>DISCOVER → STRATEGIZE → CREATE → EXECUTE → OPTIMIZE</span>
          </div>
          <div className="font-mono text-[10px] text-cream/40">
            [AGILITY + PRECISION // 100% INTERNAL]
          </div>
        </div>

      </div>
    </section>
  );
}

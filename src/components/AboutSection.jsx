import React from 'react';
import SectionHeader from './SectionHeader';
import { InkanStamp, Crosshairs, DotMatrix, TechnicalBadge } from './BrutalistGraphics';
import { ArrowUpRight, Compass, Shield, Flame } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function AboutSection({ onOpenInquiry }) {
  const qualityStandards = [
    {
      num: '01',
      title: 'DISTINCTIVE COMPOSITION',
      desc: 'If a layout looks like an ordinary agency template or cookie-cutter SaaS page, we tear it down. We design asymmetric, high-tension layouts that arrest human attention.',
    },
    {
      num: '02',
      title: 'TYPOGRAPHY AS ARTWORK',
      desc: 'Typography is not mere text; it is the physical architecture of the page. Heavy, condensed Anton paired with razor-sharp geometric Grotesk creates unmistakable hierarchy.',
    },
    {
      num: '03',
      title: 'COMMERCIAL LETHALITY',
      desc: 'Artistic purity without commercial velocity is self-indulgence. Every color choice, kinetic reveal, and landing page wireframe is calibrated to drive conversions and bookings.',
    },
    {
      num: '04',
      title: 'ZERO GENERIC PLACEHOLDERS',
      desc: 'We refuse artificial stock clichés. We photograph real dining counters, capture actual architectural concrete, and write bespoke code that lives in production.',
    },
  ];

  return (
    <section className="relative py-24 md:py-36 px-6 lg:px-14 bg-cream text-ink bg-grain border-b-2 border-ink overflow-hidden selection:bg-vermilion selection:text-cream">
      {/* Background Halftone */}
      <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          index="07"
          tag="STUDIO FOUNDATION"
          kanji="本質"
          title="BORN IN GINZA. ARCHITECTED FOR GLOBAL INFLUENCE."
          subtitle="Akari Studios was forged on a single conviction: attention in the modern digital age belongs exclusively to the bold and distinctive."
        />

        {/* 12-Column Split: Philosophy vs Business Card Artifact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6 pb-16 border-b-2 border-ink/20">
          
          {/* Left Column: Manifesto & Narrative (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <TechnicalBadge text="CREATIVE × DIGITAL × GROWTH" variant="vermilion" />
              <span className="font-space text-xs font-bold text-ink/60">[EST. 2024]</span>
            </div>

            <h3 className="headline-section uppercase leading-[0.92]">
              THE REJECTION OF BLAND DIGITAL COMMODITIZATION.
            </h3>

            <div className="space-y-4 font-sans text-base md:text-lg text-ink/80 leading-relaxed">
              <p>
                In an era where every agency uses the same minimalist templates, soft pastel palettes, and interchangeable marketing claims, blending in is financial suicide.
              </p>
              <p>
                Akari Studios synthesizes the sensory weight of Japanese editorial craftsmanship with the unapologetic raw power of architectural brutalism. We engineer digital assets that command immediate authority and compound brand equity over decades.
              </p>
            </div>

            <div className="pt-2">
              <MagneticButton
                href="/about"
                variant="outline"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                DISCOVER OUR FULL MANIFESTO
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Physical Brand Artifact Tribute (Cols 8-12) */}
          <div className="lg:col-span-5">
            <div className="p-8 border-4 border-ink bg-cream-light shadow-2xl relative">
              <Crosshairs className="absolute inset-0" color="border-ink" />

              <div className="flex justify-between items-start pb-6 border-b-2 border-ink mb-6">
                <div>
                  <div className="font-anton text-3xl uppercase tracking-wider text-ink leading-none">
                    AKARI STUDIOS
                  </div>
                  <div className="font-space text-xs text-vermilion font-bold tracking-widest uppercase mt-1">
                    CREATIVE × DIGITAL × GROWTH
                  </div>
                </div>

                <InkanStamp size="md" />
              </div>

              <div className="space-y-3 font-space text-xs uppercase tracking-wider text-ink/80">
                <div className="flex justify-between">
                  <span className="text-ink/50">PRIMARY REFERENCE:</span>
                  <span className="font-bold">PRINTED VERMILION CARD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/50">LOCATION:</span>
                  <span className="font-bold">GINZA, TOKYO // GLOBAL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/50">CANVAS TONE:</span>
                  <span className="font-mono text-vermilion font-bold">WARM CREAM #F4EBDD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/50">CORE ACCENT:</span>
                  <span className="font-mono text-vermilion font-bold">VERMILION #C83E17</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-ink/20 font-mono text-[10px] text-ink/50 flex justify-between items-center">
                <span>AUTHENTICITY GUARANTEED</span>
                <span>[35.6762° N, 139.6503° E]</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Quality Standards Grid */}
        <div className="pt-16">
          <div className="flex items-center justify-between pb-6 border-b border-ink/20 mb-8">
            <div className="font-space text-xs font-bold text-vermilion uppercase tracking-widest">
              // NON-NEGOTIABLE STUDIO BENCHMARKS
            </div>
            <div className="font-mono text-xs text-ink/50">[STAGE VERIFIED]</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((std) => (
              <div
                key={std.num}
                className="p-6 border-2 border-ink bg-cream-light flex flex-col justify-between hover:border-vermilion transition-colors"
              >
                <div>
                  <div className="font-anton text-3xl text-vermilion mb-3">{std.num}</div>
                  <h4 className="font-anton text-xl uppercase mb-2 text-ink">{std.title}</h4>
                  <p className="font-sans text-xs md:text-sm text-ink/75 leading-relaxed">{std.desc}</p>
                </div>
                <div className="pt-6 font-space text-[10px] text-vermilion font-bold tracking-widest uppercase">
                  ACTIVE CRITERIA
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import SectionHeader from './SectionHeader';
import { DotMatrix, Crosshairs, TechnicalBadge } from './BrutalistGraphics';
import { ArrowUpRight, Flame, Layers, ShieldCheck, Zap } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function ServicesIntro({ onOpenInquiry }) {
  return (
    <section className="relative py-24 md:py-36 px-6 lg:px-12 bg-cream text-ink bg-grain border-b-2 border-ink overflow-hidden selection:bg-vermilion selection:text-cream">
      {/* Background Halftone */}
      <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          index="03"
          tag="CAPABILITIES FOUNDATION"
          kanji="技法"
          title="A FULL-SPECTRUM DIGITAL WEAPON"
          subtitle="We eliminate agency fragmentation. Creative direction, high-velocity software engineering, and algorithmic media buying operating under one unified command structure."
        />

        {/* 12-Column Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
          
          {/* Main Statement Card (Cols 1-8) */}
          <div className="lg:col-span-8 p-8 md:p-12 border-2 border-ink bg-cream-light relative shadow-lg flex flex-col justify-between">
            <Crosshairs className="absolute inset-0" color="border-ink" />

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <TechnicalBadge text="DISCIPLINE: HYBRID" variant="vermilion" />
                <span className="font-space text-xs font-bold text-ink/60 uppercase">
                  ZERO SUBCONTRACTORS // 100% IN-HOUSE
                </span>
              </div>

              <h3 className="font-anton text-3xl sm:text-4xl md:text-5xl uppercase text-ink leading-[0.92] mb-6">
                ENGINEERED FOR BUSINESSES READY TO <span className="text-vermilion">ESCALATE</span> CATEGORY LEADERSHIP.
              </h3>

              <p className="font-sans text-base md:text-lg text-ink/80 leading-relaxed max-w-2xl mb-8">
                Every service at Akari Studios is built with mathematical commercial rigor. We don't build websites to sit idle; we build conversion architectures. We don't produce pretty videos that generate empty likes; we produce short-form cinema calibrated for booking velocity.
              </p>
            </div>

            <div className="pt-6 border-t border-ink/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 font-space text-xs uppercase font-bold text-ink/70">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-vermilion" />
                  <span>CRAFT & CINEMA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-vermilion" />
                  <span>48H SPRINTS</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-vermilion" />
                  <span>AUDITED ROAS</span>
                </div>
              </div>

              <MagneticButton
                href="#service-deep-dive"
                variant="dark"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                EXAMINE THE 4 PILLARS ↓
              </MagneticButton>
            </div>
          </div>

          {/* Side Graphic & Technical Panel (Cols 9-12) */}
          <div className="lg:col-span-4 p-8 border-2 border-ink bg-ink text-cream relative shadow-lg flex flex-col justify-between">
            <div>
              <div className="font-space text-xs text-vermilion font-bold tracking-widest uppercase mb-4 pb-2 border-b border-cream/20 flex justify-between items-center">
                <span>SYSTEM PARAMETERS</span>
                <span className="font-mono">[03]</span>
              </div>

              <div className="space-y-4 font-space text-xs uppercase tracking-wider text-cream/80">
                <div className="p-3 border border-cream/15 bg-ink-deep">
                  <div className="text-[10px] text-cream/50 mb-1">EXECUTION SPEED:</div>
                  <div className="font-anton text-2xl text-cream">48-HOUR SPRINT DEPLOY</div>
                </div>

                <div className="p-3 border border-cream/15 bg-ink-deep">
                  <div className="text-[10px] text-cream/50 mb-1">AVERAGE CLIENT LIFECYCLE:</div>
                  <div className="font-anton text-2xl text-gold">18+ MONTHS RETENTION</div>
                </div>

                <div className="p-3 border border-cream/15 bg-ink-deep">
                  <div className="text-[10px] text-cream/50 mb-1">TARGET MARKET:</div>
                  <div className="font-anton text-2xl text-vermilion">TOKYO // LONDON // NY</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-cream/20">
              <DotMatrix cols={7} rows={3} dotColor="bg-cream/40" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

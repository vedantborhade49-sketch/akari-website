import React from 'react';
import SectionHeader from './SectionHeader';
import { InkanStamp, Crosshairs, DotMatrix } from './BrutalistGraphics';
import { THE_METHOD } from '../data/agencyData';
import { Clock, Zap, ShieldCheck } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section className="relative py-24 md:py-36 px-6 lg:px-14 bg-ink text-cream border-b-2 border-ink overflow-hidden selection:bg-vermilion selection:text-cream">
      {/* Background Halftone & Texture */}
      <div className="absolute inset-0 bg-halftone opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          index="06"
          tag="THE AKARI METHODOLOGY"
          kanji="手法"
          title="THE 4-STAGE SPRINT EXECUTION SYSTEM"
          subtitle="How our multidisciplinary strike team eliminates committee gridlock and transforms complex visions into dominant market reality."
          dark={true}
        />

        {/* Process Timeline Grid with Animated Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {THE_METHOD.map((step, idx) => (
            <div
              key={step.step}
              className="p-8 border-2 border-cream/20 bg-ink-deep relative group hover:border-vermilion hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <Crosshairs className="absolute inset-0" color="border-cream/20" />

              <div>
                {/* Number & Phase Tag */}
                <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-cream/15">
                  <span className="font-anton text-5xl text-vermilion leading-none group-hover:scale-105 transition-transform">
                    {step.step}
                  </span>
                  <span className="font-space text-xs tracking-wider text-cream/60 uppercase font-bold">
                    {step.phase}
                  </span>
                </div>

                <h3 className="font-anton text-2xl uppercase mb-4 text-cream leading-[0.95] group-hover:text-vermilion transition-colors">
                  {step.title}
                </h3>

                <p className="font-sans text-sm text-cream/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-8 border-t border-cream/10 flex items-center justify-between font-mono text-[11px] text-cream/40 uppercase">
                <span>STAGE READY</span>
                <span className="text-vermilion font-bold">DEPLOY // 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Velocity Assurance Card */}
        <div className="mt-12 p-6 md:p-8 border border-cream/20 bg-ink-deep flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border-2 border-vermilion flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-vermilion" />
            </div>
            <div>
              <div className="font-space text-xs font-bold text-vermilion uppercase tracking-widest mb-0.5">
                SPEED PROTOCOL
              </div>
              <div className="font-sans text-sm text-cream/80">
                Average campaign deployment: <strong>48 to 72 hours</strong> from signed engagement brief.
              </div>
            </div>
          </div>

          <InkanStamp size="md" />
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import SectionHeader from './SectionHeader';
import { InkanStamp, DotMatrix, Crosshairs } from './BrutalistGraphics';

export default function BrandStatement() {
  const manifestoPillars = [
    {
      num: '01',
      tag: 'ART DIRECTION AS LEVERAGE',
      title: 'VISUAL DOMINANCE COMMANDS PREMIUM PRICING',
      desc: 'If your digital presence looks like every other competitor in your city, you will be forced to compete on price. We craft visual identities so unapologetically powerful that your authority is unquestioned.',
    },
    {
      num: '02',
      tag: 'PERFORMANCE WITHOUT SOULESSNESS',
      title: 'HIGH ART × LETHAL COMMERCIAL MATH',
      desc: 'We do not produce artistic self-indulgence that yields zero sales. Nor do we produce hideous, spammy ad funnels. We unite extreme editorial craft with rigorous conversion rate optimization and audited ROAS.',
    },
    {
      num: '03',
      tag: 'VELOCITY & DIRECT ACCESS',
      title: 'ZERO ACCOUNT MANAGERS. ALL BUILDERS.',
      desc: 'No bureaucratic layers or 6-week discovery meetings. You collaborate directly with senior directors, senior software engineers, and performance media buyers who execute in 48-hour sprints.',
    },
  ];

  return (
    <section className="relative py-24 md:py-36 px-6 lg:px-12 bg-ink text-cream border-b-2 border-ink overflow-hidden selection:bg-vermilion selection:text-cream">
      {/* Background Halftone & Texture */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />
      <div className="absolute right-8 top-12 hidden lg:block pointer-events-none opacity-20">
        <DotMatrix cols={10} rows={6} dotColor="bg-cream" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial Section Header */}
        <SectionHeader
          index="02"
          tag="BRAND STATEMENT & MANIFESTO"
          kanji="信念"
          title="WE REJECT STERILE SAAS TEMPLATES & COMMODITIZED MARKETING."
          subtitle="The modern web is flooded with generic pastel gradients, robotic copywriting, and cookie-cutter layouts. Akari Studios exists to dismantle that mediocrity with expressive brutalism."
          dark={true}
        />

        {/* Dynamic Kinetic Typography Callout Block */}
        <div className="my-12 p-8 md:p-12 border-2 border-cream/20 bg-ink-deep relative overflow-hidden">
          <Crosshairs className="absolute inset-0" color="border-cream/30" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-cream/15">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-vermilion inline-block animate-ping" />
              <span className="font-space text-xs font-bold tracking-widest text-vermilion uppercase">
                THE AKARI DOCTRINE // 不動の信念
              </span>
            </div>
            <InkanStamp size="sm" />
          </div>

          <div className="pt-6 font-anton text-2xl sm:text-3xl md:text-5xl uppercase tracking-tight text-cream leading-[1.05]">
            "ATTENTION IS NO LONGER GIVEN. <br />
            IT MUST BE <span className="text-vermilion underline decoration-vermilion/50 underline-offset-8">SEIZED</span> THROUGH UNCOMPROMISING ART DIRECTION AND <span className="text-gold">LETHAL EXECUTION</span>."
          </div>
        </div>

        {/* 3-Column Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {manifestoPillars.map((p) => (
            <div
              key={p.num}
              className="p-8 border border-cream/20 bg-ink-deep relative group hover:border-vermilion hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-cream/10">
                <span className="font-mono text-vermilion text-sm font-bold">
                  {p.num} //
                </span>
                <span className="font-space text-[10px] text-cream/50 uppercase tracking-widest">
                  {p.tag}
                </span>
              </div>

              <h3 className="font-anton text-2xl sm:text-3xl text-cream uppercase mb-4 group-hover:text-vermilion transition-colors leading-[0.95]">
                {p.title}
              </h3>

              <p className="font-sans text-sm text-cream/75 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

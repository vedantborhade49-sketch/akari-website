import React from 'react';
import SectionHeader from './SectionHeader';
import MagneticButton from './MagneticButton';
import GrowthSimulator from './GrowthSimulator';
import { DotMatrix, Crosshairs, TechnicalBadge } from './BrutalistGraphics';
import { ArrowUpRight, Utensils, Building2, Flame } from 'lucide-react';
import { INDUSTRIES } from '../data/agencyData';

export default function IndustriesSection({ onOpenInquiry }) {
  return (
    <section className="relative py-24 md:py-36 px-6 lg:px-14 bg-cream text-ink bg-grain border-b-2 border-ink overflow-hidden selection:bg-vermilion selection:text-cream">
      {/* Background Halftone */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          index="05"
          tag="SPECIALIZED SECTORS"
          kanji="産業"
          title="THREE HIGH-STAKES SPECIALIZATIONS"
          subtitle="We reject the commodity generalist agency model. We build unfair, proprietary digital advantages for hospitality dining rooms, luxury real estate developers, and high-growth brands."
        />

        {/* Large Contrasting Photographic Blocks Grid */}
        <div className="space-y-16 pt-6">
          {INDUSTRIES.map((ind, idx) => {
            const isVermilionBlock = idx % 2 === 1;

            return (
              <div
                key={ind.id}
                className={`border-4 border-ink p-8 md:p-12 shadow-2xl relative transition-all duration-300 ${
                  isVermilionBlock ? 'bg-vermilion text-cream' : 'bg-cream-light text-ink'
                }`}
              >
                <Crosshairs className="absolute inset-0" color={isVermilionBlock ? 'border-cream' : 'border-ink'} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Column: Visual Photography Collage (Cols 1-6) */}
                  <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative border-2 border-ink overflow-hidden group shadow-lg">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Metric Badge Overlay */}
                      <div className="absolute top-4 left-4 bg-ink text-cream font-space text-xs font-bold tracking-widest px-3 py-1 uppercase">
                        FIGURE 0{idx + 1} // {ind.kanji}
                      </div>

                      <div className="absolute bottom-4 right-4 bg-vermilion text-cream font-anton text-xl tracking-wider px-3.5 py-1.5 uppercase shadow-md">
                        {ind.stats}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Context, Focus Points & Action (Cols 7-12) */}
                  <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <TechnicalBadge
                        text={ind.subtitle}
                        variant={isVermilionBlock ? 'ink' : 'vermilion'}
                      />
                      <span className="font-serif text-2xl font-black">{ind.kanji}</span>
                    </div>

                    <h3 className="headline-section uppercase leading-[0.92]">
                      {ind.title}
                    </h3>

                    <p className="font-sans text-base md:text-lg opacity-85 leading-relaxed">
                      {ind.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-current/20">
                      {ind.focusPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-space font-semibold">
                          <span className="w-2 h-2 bg-current inline-block shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <MagneticButton
                        onClick={() => onOpenInquiry(ind.title)}
                        variant={isVermilionBlock ? 'dark' : 'primary'}
                        size="md"
                        icon={<ArrowUpRight className="w-4 h-4" />}
                      >
                        COMMENCE {ind.title.split(' ')[0]} BRIEF
                      </MagneticButton>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded Interactive Growth Simulator */}
        <div className="mt-20 pt-16 border-t-2 border-ink">
          <div className="mb-8">
            <div className="font-space text-xs font-bold text-vermilion uppercase tracking-widest mb-1">
              // FINANCIAL IMPACT MODELING
            </div>
            <h4 className="font-anton text-3xl sm:text-4xl text-ink uppercase">
              SIMULATE PROJECTED COMMERCIAL RETURNS
            </h4>
          </div>

          <GrowthSimulator onInquire={(disc) => onOpenInquiry(disc)} />
        </div>

      </div>
    </section>
  );
}

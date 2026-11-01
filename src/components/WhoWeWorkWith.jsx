import React from 'react';
import SectionHeader from './SectionHeader';
import { Crosshairs, DotMatrix, TechnicalBadge } from './BrutalistGraphics';
import { ArrowUpRight, Utensils, Building2, Flame, Layers } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function WhoWeWorkWith({ onOpenInquiry }) {
  const sectors = [
    {
      num: '01',
      title: 'RESTAURANTS & HOSPITALITY',
      kanji: '飲食',
      desc: 'Helping restaurants strengthen their digital presence, promote their offerings and attract attention through creative marketing and technology.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
      focusPoints: [
        'Creative Food & Hospitality Storytelling',
        'Direct Table Reservation Strategies',
        'Menu & Digital Brand Presentation',
        'Local Search & Discovery Presence',
      ],
      palette: 'bg-cream text-ink border-ink',
    },
    {
      num: '02',
      title: 'REAL ESTATE & PROPERTY',
      kanji: '不動産',
      desc: 'Helping real estate businesses present projects, build digital visibility and reach potential buyers through digital marketing and technology.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
      focusPoints: [
        'Architectural Presentation Portals',
        'Targeted Property Marketing Campaigns',
        'Project Presentation Collateral',
        'Buyer Lead Capture Infrastructure',
      ],
      palette: 'bg-ink text-cream border-cream/20',
    },
    {
      num: '03',
      title: 'BUSINESSES & EMERGING BRANDS',
      kanji: '企業',
      desc: 'Supporting businesses with websites, digital marketing, social media and search visibility to build stronger market presence.',
      image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=1000&auto=format&fit=crop',
      focusPoints: [
        'Distinctive Brand Identity & Positioning',
        'High-Performance Web Platforms',
        'Social Media & Creative Direction',
        'Paid Search & Lead Acquisition',
      ],
      palette: 'bg-cream text-ink border-ink',
    },
  ];

  return (
    <section className="relative py-24 md:py-36 px-6 lg:px-14 bg-cream text-ink bg-grain border-b-2 border-ink overflow-hidden selection:bg-vermilion selection:text-cream">
      {/* Background Halftone */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b-2 border-ink flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-space text-xs font-bold text-vermilion uppercase tracking-widest mb-3">
              <span className="w-2.5 h-2.5 bg-vermilion inline-block" />
              <span>05 // TARGET COLLABORATION</span>
            </div>

            <h2 className="headline-section uppercase leading-[0.88] tracking-tight">
              BUILT AROUND <br />
              <span className="text-vermilion">REAL BUSINESSES.</span>
            </h2>
          </div>

          <p className="font-sans text-base sm:text-lg text-ink/80 max-w-md leading-relaxed">
            Every category has unique customer dynamics, operational rhythms, and commercial objectives. We tailor our strategy to the specific realities of your sector.
          </p>
        </div>

        {/* 3 Sectors Stacked in Asymmetric Editorial Cards */}
        <div className="space-y-16">
          {sectors.map((sec, idx) => {
            const isDark = sec.palette.includes('bg-ink');

            return (
              <div
                key={sec.num}
                className={`p-8 md:p-12 border-4 shadow-2xl relative transition-all duration-300 ${sec.palette}`}
              >
                <Crosshairs className="absolute inset-0" color={isDark ? 'border-cream/30' : 'border-ink'} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Image Column (Alternates) */}
                  <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      data-cursor="view"
                      data-cursor-text={sec.title.split(' ')[0]}
                      className="relative border-2 border-current overflow-hidden group shadow-lg cursor-pointer"
                    >
                      <img
                        src={sec.image}
                        alt={sec.title}
                        className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-ink text-cream font-space text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                        SECTOR 0{sec.num} // {sec.kanji}
                      </div>
                    </div>
                  </div>

                  {/* Content Column (Alternates) */}
                  <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center justify-between pb-3 border-b border-current/20">
                      <span className="font-anton text-2xl sm:text-3xl font-bold opacity-80">
                        {sec.num} //
                      </span>
                      <span className="font-serif text-2xl font-black text-vermilion">
                        {sec.kanji}
                      </span>
                    </div>

                    <h3 className="headline-section uppercase leading-[0.92]">
                      {sec.title}
                    </h3>

                    <p className="font-sans text-base md:text-lg opacity-85 leading-relaxed">
                      {sec.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-current/20">
                      {sec.focusPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2.5 font-space text-xs sm:text-sm font-semibold">
                          <span className="w-2 h-2 bg-vermilion inline-block shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <MagneticButton
                        onClick={() => onOpenInquiry(sec.title)}
                        variant={isDark ? 'primary' : 'dark'}
                        size="md"
                        icon={<ArrowUpRight className="w-4 h-4" />}
                      >
                        DISCUSS {sec.title.split(' ')[0]}
                      </MagneticButton>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

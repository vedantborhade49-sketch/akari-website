import React from 'react';
import SectionHeader from './SectionHeader';
import { InkanStamp, Crosshairs, DotMatrix, SeigaihaPattern, TechnicalBadge } from './BrutalistGraphics';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';

export default function AboutAkari() {
  return (
    <section className="relative py-24 md:py-36 px-6 lg:px-14 bg-cream text-ink bg-grain border-b-2 border-ink overflow-hidden selection:bg-vermilion selection:text-cream">
      {/* Blurred Atmospheric Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover filter blur-[34px] scale-110 opacity-10 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-cream/60 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Background Halftone & Seigaiha Waves */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-48 h-32 opacity-30 pointer-events-none hidden sm:block">
        <SeigaihaPattern className="w-full h-full" stroke="#C83E17" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b-2 border-ink">
          <div className="flex items-center gap-2 font-space text-xs font-bold text-vermilion uppercase tracking-widest mb-3">
            <span className="w-2.5 h-2.5 bg-vermilion inline-block" />
            <span>07 // ABOUT AKARI</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="headline-hero uppercase leading-[0.88] tracking-tight text-ink">
              WE THINK <br />
              <span className="text-vermilion">DIFFERENTLY.</span> <br />
              WE BUILD <br />
              WITH PURPOSE.
            </h2>

            {/* Official Logo Integration Card */}
            <div
              data-cursor="view"
              data-cursor-text="IDENTITY"
              className="p-8 border-4 border-ink bg-cream-light shadow-2xl relative max-w-md w-full shrink-0 group hover:shadow-[12px_12px_0px_#C83E17] transition-all duration-300"
            >
              <Crosshairs className="absolute inset-0" color="border-ink" />
              
              <div className="text-center space-y-4">
                <img
                  src="/logo1.png"
                  alt="AKARI STUDIOS"
                  className="h-16 sm:h-20 w-auto mx-auto object-contain"
                />

                <div className="pt-4 border-t-2 border-ink/20 font-space text-xs font-bold uppercase tracking-widest text-ink/70">
                  CREATIVE × DIGITAL × GROWTH
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-ink/50 pt-2 border-t border-ink/10">
                  <span>TOKYO // GLOBAL OPERATIONS</span>
                  <span>EST. 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Philosophy Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
          <div className="lg:col-span-8 p-8 md:p-12 border-2 border-ink bg-cream-light relative shadow-lg">
            <Crosshairs className="absolute inset-0" color="border-ink" />

            <div className="space-y-4 font-sans text-base sm:text-lg md:text-xl text-ink/85 leading-relaxed">
              <p className="font-semibold text-ink">
                Akari Studios brings creative thinking, technology and digital execution together. We work with businesses to build stronger digital foundations and meaningful brand experiences.
              </p>
              <p className="text-base text-ink/75 leading-relaxed">
                We believe that in an overcrowded commercial landscape, conventional templates and generic marketing achieve nothing. We combine the expressive precision of Japanese editorial art direction with robust modern software engineering to give businesses an unmistakable voice.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-ink/20 flex flex-wrap items-center justify-between gap-4 font-space text-xs uppercase font-bold text-ink/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-vermilion" />
                <span>EXPRESSIVE BRUTALISM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-vermilion" />
                <span>CLEAN CODE ARCHITECTURE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-vermilion" />
                <span>AUTHENTIC COMMERCIAL VALUE</span>
              </div>
            </div>
          </div>

          {/* Side Graphic Stamp Card */}
          <div className="lg:col-span-4 p-8 border-2 border-ink bg-ink text-cream relative shadow-lg flex flex-col justify-between h-full">
            <div>
              <div className="font-space text-xs text-vermilion font-bold tracking-widest uppercase mb-4 pb-2 border-b border-cream/20 flex justify-between items-center">
                <span>IDENTITY FOUNDATION</span>
                <InkanStamp size="sm" />
              </div>

              <div className="space-y-3 font-space text-xs uppercase text-cream/80">
                <div className="flex justify-between pb-2 border-b border-cream/10">
                  <span className="text-cream/50">LOCATION:</span>
                  <span className="font-bold">GINZA, TOKYO</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-cream/10">
                  <span className="text-cream/50">FOUNDATION:</span>
                  <span className="font-bold">HYBRID CREATIVE STUDIO</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-cream/10">
                  <span className="text-cream/50">PRIMARY TONE:</span>
                  <span className="font-mono text-vermilion font-bold">AKARI VERMILION</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream/50">CANVAS:</span>
                  <span className="font-mono text-cream font-bold">WARM CREAM</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <DotMatrix cols={7} rows={3} dotColor="bg-cream/40" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

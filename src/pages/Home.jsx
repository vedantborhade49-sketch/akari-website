import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, TrendingUp, CheckCircle2, ChevronRight, Utensils, Building2, Flame } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import MagneticButton from '../components/MagneticButton';
import Marquee from '../components/Marquee';
import GrowthSimulator from '../components/GrowthSimulator';
import { AGENCY_INFO, CASE_STUDIES, SERVICES, INDUSTRIES, THE_METHOD, TESTIMONIALS } from '../data/agencyData';
import { sound } from '../utils/audio';

import Hero from '../components/Hero';

export default function Home({ onOpenInquiry, onSelectCaseStudy }) {
  const [activeServiceHover, setActiveServiceHover] = useState(0);

  return (
    <div className="w-full overflow-hidden bg-cream text-ink bg-grain">
      {/* 01. ELEVATED EXPERIMENTAL BRUTALIST HERO SECTION */}
      <Hero onOpenInquiry={onOpenInquiry} />

      {/* 03. THE ANTI-GENERIC MANIFESTO */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-ink text-cream border-b-2 border-ink relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="01"
            tag="STUDIO MANIFESTO"
            kanji="信念"
            title="WE REJECT STERILE SAAS TEMPLATES & COMMODITIZED MARKETING."
            subtitle="The modern web is flooded with generic pastel gradients, robotic copywriting, and cookie-cutter layouts. Akari Studios exists to dismantle that mediocrity."
            dark={true}
          />

          {/* 3-Column Manifesto Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="p-8 border border-cream/20 bg-ink-deep relative group hover:border-vermilion transition-colors">
              <div className="font-mono text-vermilion text-sm font-bold mb-4">
                01 // ART DIRECTION AS LEVERAGE
              </div>
              <h3 className="font-anton text-2xl sm:text-3xl text-cream uppercase mb-4">
                VISUAL DOMINANCE COMMANDS PREMIUM PRICING
              </h3>
              <p className="font-sans text-sm text-cream/75 leading-relaxed">
                If your digital presence looks like every other competitor in your city, you will be forced to compete on price. We craft visual identities so unapologetically powerful that your authority is unquestioned.
              </p>
            </div>

            <div className="p-8 border border-cream/20 bg-ink-deep relative group hover:border-vermilion transition-colors">
              <div className="font-mono text-vermilion text-sm font-bold mb-4">
                02 // PERFORMANCE WITHOUT SOULESSNESS
              </div>
              <h3 className="font-anton text-2xl sm:text-3xl text-cream uppercase mb-4">
                HIGH ART × LETHAL COMMERCIAL MATH
              </h3>
              <p className="font-sans text-sm text-cream/75 leading-relaxed">
                We do not produce artistic self-indulgence that yields zero sales. Nor do we produce hideous, spammy ad funnels. We unite extreme editorial craft with rigorous conversion rate optimization and audited ROAS.
              </p>
            </div>

            <div className="p-8 border border-cream/20 bg-ink-deep relative group hover:border-vermilion transition-colors">
              <div className="font-mono text-vermilion text-sm font-bold mb-4">
                03 // VELOCITY & DIRECT ACCESS
              </div>
              <h3 className="font-anton text-2xl sm:text-3xl text-cream uppercase mb-4">
                ZERO ACCOUNT MANAGERS. ALL BUILDERS.
              </h3>
              <p className="font-sans text-sm text-cream/75 leading-relaxed">
                No bureaucratic layers or 6-week discovery meetings. You collaborate directly with senior directors, senior software engineers, and performance media buyers who execute in 48-hour sprints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. SELECTED WORKS (EDITORIAL ASYMMETRIC GRID) */}
      <section id="featured-work" className="py-20 md:py-32 px-6 lg:px-12 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="02"
            tag="SELECTED PORTFOLIO"
            kanji="実績"
            title="FEATURED CASE STUDIES & CAMPAIGNS"
            subtitle="Proof of commercial dominance across high-concept dining rooms, luxury architectural real estate, and disruptive enterprise solutions."
          />

          <div className="space-y-16 md:space-y-24">
            {CASE_STUDIES.slice(0, 4).map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={project.id}
                  onClick={() => {
                    sound.click();
                    onSelectCaseStudy(project);
                  }}
                  data-cursor="view"
                  data-cursor-text="VIEW STUDY"
                  className={`cursor-pointer group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-10 border-2 border-ink bg-cream-light hover:border-vermilion transition-all duration-300 shadow-md hover:shadow-2xl`}
                >
                  {/* Visual Preview */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} overflow-hidden border border-ink relative`}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-80 sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-ink text-cream font-space text-[10px] tracking-widest px-3 py-1 uppercase">
                      FIG. 0{idx + 1} // {project.category}
                    </div>
                  </div>

                  {/* Context & Metrics */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="brutalist-tag bg-vermilion text-cream">
                        {project.category}
                      </span>
                      <span className="brutalist-tag border border-ink/40 text-ink">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="headline-project text-ink group-hover:text-vermilion transition-colors leading-[0.94]">
                      {project.title}
                    </h3>

                    <p className="font-sans text-sm md:text-base text-ink/75 leading-relaxed">
                      {project.excerpt}
                    </p>

                    {/* Metric Highlight Box */}
                    <div className="p-4 border-2 border-ink bg-cream">
                      <div className="font-space text-[11px] text-vermilion font-bold tracking-widest uppercase mb-1">
                        KEY OUTCOME ACHIEVED
                      </div>
                      <div className="font-anton text-2xl text-ink uppercase">
                        {project.metrics.headline}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-2 font-space text-xs tracking-widest font-bold uppercase text-ink group-hover:text-vermilion">
                      <span>EXPLORE DEEP-DIVE CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Works Action */}
          <div className="pt-16 text-center">
            <MagneticButton
              href="/work"
              variant="dark"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              BROWSE ALL 06 CASE STUDIES
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 05. SPECIALIZED INDUSTRY FOCUS */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-cream-dark/40 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="03"
            tag="SPECIALIZATION"
            kanji="専門"
            title="ENGINEERED FOR THREE HIGH-STAKES INDUSTRIES"
            subtitle="We don't do generic marketing for everyone. We build specialized, unfair market advantages for restaurants, luxury real estate, and high-velocity consumer brands."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.id}
                className="border-2 border-ink bg-cream p-6 md:p-8 flex flex-col justify-between hover:border-vermilion transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-ink/20 mb-6">
                    <span className="font-space text-xs text-vermilion font-bold tracking-widest">
                      0{i + 1} // {ind.subtitle}
                    </span>
                    <span className="font-serif text-2xl font-black text-vermilion">
                      {ind.kanji}
                    </span>
                  </div>

                  <div className="relative border border-ink overflow-hidden mb-6">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 right-2 bg-ink text-cream px-2 py-0.5 font-space text-[10px] font-bold">
                      {ind.stats}
                    </div>
                  </div>

                  <h3 className="font-anton text-2xl sm:text-3xl text-ink uppercase mb-3">
                    {ind.title}
                  </h3>

                  <p className="font-sans text-sm text-ink/75 leading-relaxed mb-6">
                    {ind.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-ink/15">
                    {ind.focusPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-space text-ink/80">
                        <span className="w-1.5 h-1.5 bg-vermilion shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <MagneticButton
                    onClick={() => onOpenInquiry(ind.title)}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    INQUIRE FOR {ind.title.split(' ')[0]}
                  </MagneticButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. INTERACTIVE GROWTH SIMULATOR */}
      <section className="py-20 md:py-32 px-6 lg:px-12 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="04"
            tag="COMMERCIAL PROJECTIONS"
            kanji="試算"
            title="CALCULATE YOUR ESTIMATED REVENUE UPSIDE"
            subtitle="Model the impact of Akari's direct reservation engines and luxury pre-sale acquisition infrastructure on your bottom line."
          />

          <GrowthSimulator onInquire={(disc) => onOpenInquiry(disc)} />
        </div>
      </section>

      {/* 07. THE 10 CORE CAPABILITIES / ACCORDION MATRIX */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-ink text-cream border-b-2 border-ink">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="05"
            tag="CORE CAPABILITIES"
            kanji="機能"
            title="THE 10 PILLARS OF OUR DIGITAL MACHINE"
            subtitle="Every discipline engineered in-house. No white-labeled subcontractors. Uncompromising execution across attention, engineering, and performance."
            dark={true}
          />

          <div className="divide-y divide-cream/15 border-y border-cream/15">
            {SERVICES.map((srv, idx) => (
              <div
                key={srv.id}
                onMouseEnter={() => {
                  sound.hover();
                  setActiveServiceHover(idx);
                }}
                className="py-6 md:py-8 group cursor-pointer transition-colors hover:bg-cream/5 px-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Number & Category */}
                  <div className="lg:col-span-2 flex items-center gap-3 font-space text-xs tracking-widest text-cream/50 uppercase">
                    <span className="text-vermilion font-mono font-bold">{srv.num}</span>
                    <span>// {srv.category}</span>
                  </div>

                  {/* Service Title */}
                  <div className="lg:col-span-5">
                    <h3 className="headline-service text-cream group-hover:text-vermilion transition-colors">
                      {srv.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="font-sans text-xs md:text-sm text-cream/70 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  {/* Arrow CTA */}
                  <div className="lg:col-span-1 flex justify-end">
                    <div className="w-10 h-10 border border-cream/30 group-hover:border-vermilion group-hover:bg-vermilion group-hover:text-cream flex items-center justify-center transition-all">
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-12 text-center">
            <MagneticButton
              href="/services"
              variant="outline-cream"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              EXPLORE FULL SERVICE CATALOG
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 08. VERIFIED COMMERCIAL IMPACT NUMBERS (VERMILION BLOCK) */}
      <section className="py-20 md:py-28 px-6 lg:px-12 bg-vermilion text-cream border-b-2 border-ink relative overflow-hidden select-none">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 font-space text-xs tracking-widest text-cream/80 uppercase mb-8 font-bold">
            <TrendingUp className="w-4 h-4" />
            <span>AUDITED RESULTS ACROSS RECENT CYCLES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border-2 border-cream/30 bg-vermilion-dark/30">
              <div className="font-anton text-6xl md:text-7xl text-cream tracking-tight mb-2">
                $64M+
              </div>
              <div className="font-space text-xs font-bold uppercase tracking-wider mb-2 text-cream">
                Real Estate Value Sold
              </div>
              <p className="font-sans text-xs text-cream/80">
                Directly attributed to high-intent buyer acquisition campaigns and bespoke launch portals.
              </p>
            </div>

            <div className="p-6 border-2 border-cream/30 bg-vermilion-dark/30">
              <div className="font-anton text-6xl md:text-7xl text-cream tracking-tight mb-2">
                +340%
              </div>
              <div className="font-space text-xs font-bold uppercase tracking-wider mb-2 text-cream">
                Hospitality Booking Lift
              </div>
              <p className="font-sans text-xs text-cream/80">
                Recorded across flagship omakase, cocktail sanctuaries, and Michelin-tier dining partners.
              </p>
            </div>

            <div className="p-6 border-2 border-cream/30 bg-vermilion-dark/30">
              <div className="font-anton text-6xl md:text-7xl text-cream tracking-tight mb-2">
                140M+
              </div>
              <div className="font-space text-xs font-bold uppercase tracking-wider mb-2 text-cream">
                Organic Video Views
              </div>
              <p className="font-sans text-xs text-cream/80">
                Cinematic gastronomy and architectural content programmed for viral platform distribution.
              </p>
            </div>

            <div className="p-6 border-2 border-cream/30 bg-vermilion-dark/30">
              <div className="font-anton text-6xl md:text-7xl text-cream tracking-tight mb-2">
                48h
              </div>
              <div className="font-space text-xs font-bold uppercase tracking-wider mb-2 text-cream">
                Sprint Deployment Velocity
              </div>
              <p className="font-sans text-xs text-cream/80">
                From tactical brief to high-performance live campaign deployment with 0 red tape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 09. THE AKARI METHOD */}
      <section className="py-20 md:py-32 px-6 lg:px-12 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="06"
            tag="METHODOLOGY"
            kanji="手法"
            title="THE 4-STAGE SPRINT METHODOLOGY"
            subtitle="How we take complex, ambitious brands from raw concept to absolute category dominance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {THE_METHOD.map((step) => (
              <div
                key={step.step}
                className="p-8 border-2 border-ink bg-cream-light flex flex-col justify-between hover:border-vermilion transition-colors relative group"
              >
                <div>
                  <div className="flex justify-between items-baseline mb-6 pb-4 border-b border-ink/20">
                    <span className="font-anton text-4xl text-vermilion">{step.step}</span>
                    <span className="font-space text-xs tracking-wider text-ink/60 uppercase font-bold">
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="font-anton text-2xl uppercase mb-4 text-ink">
                    {step.title}
                  </h3>

                  <p className="font-sans text-sm text-ink/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 font-mono text-[10px] text-ink/40 uppercase">
                  [STAGE READY // 0{step.step}]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CLIENT VOICES & TESTIMONIALS */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-ink text-cream border-b-2 border-ink">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="07"
            tag="CLIENT EVIDENCE"
            kanji="証言"
            title="VOICES FROM THE INNER CIRCLE"
            subtitle="Honest assessments from Michelin-level culinary partners and luxury property directors."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 border border-cream/20 bg-ink-deep flex flex-col justify-between hover:border-vermilion transition-colors relative"
              >
                <div>
                  <div className="inline-block px-2.5 py-1 bg-vermilion/20 text-vermilion font-space text-[10px] font-bold tracking-widest uppercase mb-6 border border-vermilion/40">
                    {t.resultTag}
                  </div>

                  <blockquote className="font-sans text-sm md:text-base text-cream/90 italic leading-relaxed mb-8">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-cream/15">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 object-cover border border-vermilion"
                  />
                  <div>
                    <div className="font-space text-xs font-bold text-cream uppercase">
                      {t.author}
                    </div>
                    <div className="font-sans text-xs text-cream/60">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. BOLD FINAL CALL TO ACTION */}
      <section className="py-24 md:py-36 px-6 lg:px-12 bg-cream text-ink text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-vermilion text-vermilion font-space text-xs font-bold tracking-widest uppercase">
            <span>ACCEPTING CLIENTS FOR Q2 / Q3</span>
          </div>

          <h2 className="headline-hero text-ink uppercase">
            STOP BLENDING IN. <br />
            START <span className="text-vermilion">DOMINATING.</span>
          </h2>

          <p className="font-sans text-base md:text-lg text-ink/75 max-w-xl mx-auto leading-relaxed">
            Every day spent on cookie-cutter marketing is market share given away to competitors. Partner with Akari Studios to build your definitive digital advantage.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <MagneticButton
              onClick={() => onOpenInquiry()}
              variant="primary"
              size="xl"
              icon={<ArrowUpRight className="w-5 h-5" />}
            >
              INITIATE STRATEGIC BRIEF
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronDown, Sparkles, Zap, Layers, HelpCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import MagneticButton from '../components/MagneticButton';
import { SERVICES, FAQ_ITEMS } from '../data/agencyData';
import { sound } from '../utils/audio';

export default function Services({ onOpenInquiry }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    sound.click();
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full bg-cream text-ink bg-grain py-12 md:py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <SectionHeader
          index="01"
          tag="CAPABILITY DIRECTORY"
          kanji="技術"
          title="THE 10 PILLARS OF OUR COMMERCIAL ENGINE"
          subtitle="Every capability executed with uncompromising editorial craft and ruthless performance discipline. No subcontractors. Pure internal mastery."
        />

        {/* Services Deep Dive Stack */}
        <div className="space-y-12 md:space-y-16">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              id={srv.id}
              className="p-8 md:p-12 border-2 border-ink bg-cream-light hover:border-vermilion transition-all duration-300 relative group"
            >
              {/* Header Grid */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-ink/20 mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-anton text-4xl text-vermilion leading-none">
                    {srv.num}
                  </span>
                  <span className="font-space text-xs font-bold tracking-widest text-ink/60 uppercase">
                    // {srv.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl text-vermilion font-bold">朱</span>
                  <span className="font-space text-xs font-mono text-ink/50">[STAGE DEPLOYED]</span>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Title & Overview */}
                <div className="lg:col-span-6 space-y-4">
                  <h2 className="headline-service text-ink uppercase leading-none">
                    {srv.title}
                  </h2>
                  <p className="font-sans text-base text-ink/80 leading-relaxed">
                    {srv.desc}
                  </p>
                  <div className="p-4 bg-cream border border-ink/20">
                    <span className="font-space text-[11px] font-bold uppercase tracking-wider text-vermilion block mb-1">
                      IDEAL FOR:
                    </span>
                    <span className="font-sans text-xs text-ink/80">
                      {srv.idealFor}
                    </span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="font-space text-xs tracking-widest font-bold uppercase text-ink/60 pb-2 border-b border-ink/15">
                    KEY PRODUCTION DELIVERABLES
                  </div>
                  <div className="space-y-3">
                    {srv.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 p-3 bg-cream border border-ink/10">
                        <CheckCircle2 className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
                        <span className="font-sans text-xs md:text-sm font-medium text-ink/90">
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <MagneticButton
                      onClick={() => onOpenInquiry(srv.title)}
                      variant="primary"
                      size="sm"
                      icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    >
                      BRIEF THIS DISCIPLINE
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing / Sprint Structure Banner */}
        <div className="my-20 p-8 md:p-12 border-2 border-ink bg-ink text-cream">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-vermilion text-cream font-space text-[11px] font-bold tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>ENGAGEMENT ARCHITECTURE</span>
            </div>

            <h3 className="headline-section text-cream uppercase">
              TWO WAYS TO COLLABORATE WITH AKARI
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-6">
              <div className="p-8 border border-cream/20 bg-ink-deep flex flex-col justify-between">
                <div>
                  <div className="font-space text-xs text-vermilion font-bold tracking-widest uppercase mb-2">
                    01 // PROJECT SPRINTS
                  </div>
                  <div className="font-anton text-2xl uppercase text-cream mb-4">
                    HIGH-VELOCITY DEPLOYMENT
                  </div>
                  <p className="font-sans text-sm text-cream/75 leading-relaxed mb-6">
                    Fixed-scope, fixed-price 3-to-6 week sprints for custom brand identity launches, bespoke reservation platforms, or architectural development sales suites.
                  </p>
                  <div className="font-space text-xs text-cream/60 pb-2 border-b border-cream/15 mb-4">
                    TYPICAL ENGAGEMENT: $15,000 – $45,000
                  </div>
                </div>
                <MagneticButton
                  onClick={() => onOpenInquiry('Project Sprint')}
                  variant="outline-cream"
                  size="sm"
                  className="w-full"
                >
                  START SPRINT BRIEF
                </MagneticButton>
              </div>

              <div className="p-8 border-2 border-vermilion bg-vermilion/10 flex flex-col justify-between">
                <div>
                  <div className="font-space text-xs text-vermilion font-bold tracking-widest uppercase mb-2">
                    02 // GROWTH PARTNERSHIPS
                  </div>
                  <div className="font-anton text-2xl uppercase text-cream mb-4">
                    DEDICATED STRIKE TEAM
                  </div>
                  <p className="font-sans text-sm text-cream/75 leading-relaxed mb-6">
                    Comprehensive full-funnel retainer managing social cinema, paid acquisition (Meta/Google), local SEO, and weekly landing page conversion optimization.
                  </p>
                  <div className="font-space text-xs text-cream/60 pb-2 border-b border-cream/15 mb-4">
                    TYPICAL ENGAGEMENT: $6,000 – $18,000 / MONTH
                  </div>
                </div>
                <MagneticButton
                  onClick={() => onOpenInquiry('Growth Partnership')}
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  EXPLORE PARTNERSHIP
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="pt-12">
          <SectionHeader
            index="02"
            tag="CLARIFICATIONS"
            kanji="問答"
            title="FREQUENTLY EXAMINED QUESTIONS"
            subtitle="Straightforward answers about our operations, deliverables, and commercial standards."
          />

          <div className="divide-y-2 divide-ink border-y-2 border-ink">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="font-anton text-2xl md:text-3xl uppercase text-ink group-hover:text-vermilion transition-colors pr-4">
                      {item.q}
                    </span>
                    <div
                      className={`w-9 h-9 border border-ink flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-vermilion text-cream border-vermilion' : 'group-hover:border-vermilion'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pr-12">
                      <p className="font-sans text-sm md:text-base text-ink/80 leading-relaxed max-w-3xl">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { ArrowUpRight, Compass, Shield, Eye, Flame, MapPin, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import MagneticButton from '../components/MagneticButton';
import { AGENCY_INFO } from '../data/agencyData';

export default function About({ onOpenInquiry }) {
  const principles = [
    {
      num: "01",
      title: "DISTINCTIVE COMPOSITION",
      desc: "If a section looks like an ordinary agency template or cookie-cutter SaaS page, we tear it down. We design asymmetric, high-tension layouts that arrest attention."
    },
    {
      num: "02",
      title: "TYPOGRAPHY AS ARTWORK",
      desc: "Typography is not mere text; it is the physical architecture of the page. Heavy, condensed Anton paired with razor-sharp geometric Grotesk creates undeniable hierarchy."
    },
    {
      num: "03",
      title: "COMMERCIAL LETHALITY",
      desc: "Artistic purity without commercial velocity is self-indulgence. Every color choice, kinetic reveal, and landing page wireframe is calibrated to drive conversions and bookings."
    },
    {
      num: "04",
      title: "ZERO GENERIC PLACEHOLDERS",
      desc: "We refuse artificial stock clichés. We photograph real dining counters, capture actual architectural concrete, and write bespoke code that lives in production."
    }
  ];

  const team = [
    {
      name: "Tatsuo Mori",
      role: "Creative Director & Partner",
      kanji: "森 達雄",
      bio: "Former editorial art director in Tokyo and Milan. Leading visual typography, film production, and brand architecture.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Aria Thorne",
      role: "Head of Digital Engineering",
      kanji: "ソーン・アリア",
      bio: "Fullstack software architect with 10+ years specializing in high-performance React systems, custom reservation engines, and headless commerce.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Kenzo Sato",
      role: "Director of Performance & Media",
      kanji: "佐藤 健三",
      bio: "Ex-enterprise algorithmic trader turned acquisition specialist. Managing $12M+ annual Meta and Google paid search ad budgets.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-cream text-ink bg-grain py-12 md:py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <SectionHeader
          index="01"
          tag="STUDIO IDENTITY"
          kanji="概要"
          title="WE ARE AKARI STUDIOS // 朱研究所"
          subtitle="An independent creative, technology and digital growth agency rooted in Tokyo with operations worldwide."
        />

        {/* Studio Origin & Brand Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b-2 border-ink">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-vermilion text-cream font-space text-xs font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>THE AKARI PHILOSOPHY</span>
            </div>

            <h2 className="headline-section text-ink uppercase">
              EXPRESSIVE BRUTALISM × EDITORIAL ART DIRECTION × MOTION
            </h2>

            <div className="space-y-4 font-sans text-base md:text-lg text-ink/80 leading-relaxed">
              <p>
                Akari Studios was founded on a simple observation: modern digital marketing has grown coward-hearted. Agencies churn out identical minimalist templates, pastel SaaS rounded buttons, and lifeless corporate copywriting.
              </p>
              <p>
                We believe that in a saturated digital landscape, attention belongs to the distinctive. Inspired by the raw precision of Japanese editorial design and the unyielding weight of architectural brutalism, we build digital identities that demand respect.
              </p>
              <p>
                Whether crafting the digital presence for a Michelin-starred Ginza dining sanctuary or running multi-million dollar international buyer campaigns for luxury penthouses, we fuse sensory prestige with mathematical performance.
              </p>
            </div>
          </div>

          {/* Business Card & Seal Origin Tribute */}
          <div className="lg:col-span-5">
            <div className="p-8 border-4 border-ink bg-cream-light shadow-2xl relative">
              <div className="flex justify-between items-start pb-6 border-b-2 border-ink mb-6">
                <div>
                  <div className="font-anton text-3xl uppercase tracking-wider text-ink">
                    AKARI STUDIOS
                  </div>
                  <div className="font-space text-xs text-vermilion font-bold tracking-widest uppercase">
                    CREATIVE × DIGITAL × GROWTH
                  </div>
                </div>

                {/* Vermilion Seal */}
                <div className="w-14 h-14 border-4 border-vermilion flex items-center justify-center bg-vermilion/5">
                  <span className="font-serif text-3xl font-black text-vermilion">朱</span>
                </div>
              </div>

              <div className="space-y-4 font-space text-xs uppercase tracking-wider text-ink/80">
                <div className="flex justify-between">
                  <span className="text-ink/50">PRIMARY REFERENCE:</span>
                  <span className="font-bold">PRINTED VERMILION CARD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/50">LOCATION:</span>
                  <span className="font-bold">GINZA, TOKYO // GLOBAL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/50">FOUNDED:</span>
                  <span className="font-bold">2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/50">DISCIPLINE:</span>
                  <span className="font-bold">HYBRID AGENCY</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-ink/20 font-mono text-[10px] text-ink/50">
                COLOR TOKENS: WARM CREAM #F4EBDD // AKARI VERMILION #C83E17 // INK BLACK #211B18
              </div>
            </div>
          </div>
        </div>

        {/* Studio Principles */}
        <div className="py-20 border-b-2 border-ink">
          <SectionHeader
            index="02"
            tag="INTERNAL STANDARDS"
            kanji="基準"
            title="THE AKARI QUALITY BENCHMARK"
            subtitle="Before any design, line of code, or marketing campaign leaves our studio, it must pass these non-negotiable filters."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div
                key={p.num}
                className="p-8 border-2 border-ink bg-cream-light flex flex-col justify-between hover:border-vermilion transition-colors"
              >
                <div>
                  <div className="font-anton text-4xl text-vermilion mb-4">{p.num}</div>
                  <h3 className="font-anton text-xl uppercase mb-3 text-ink">{p.title}</h3>
                  <p className="font-sans text-xs md:text-sm text-ink/75 leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-6 font-space text-[10px] text-vermilion font-bold tracking-widest uppercase">
                  VERIFIED STANDARD
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Squad */}
        <div className="py-20 border-b-2 border-ink">
          <SectionHeader
            index="03"
            tag="PERSONNEL"
            kanji="指揮"
            title="DIRECTED BY BUILDERS, NOT BUREAUCRATS"
            subtitle="Meet the partners leading strategy, design, and growth for every Akari engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="border-2 border-ink bg-cream-light p-6 flex flex-col justify-between hover:border-vermilion transition-all duration-300 group"
              >
                <div>
                  <div className="overflow-hidden border border-ink mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-anton text-2xl uppercase text-ink group-hover:text-vermilion transition-colors">
                      {member.name}
                    </h3>
                    <span className="font-serif text-sm text-vermilion font-bold">{member.kanji}</span>
                  </div>

                  <div className="font-space text-xs font-bold text-vermilion uppercase tracking-wider mb-4">
                    {member.role}
                  </div>

                  <p className="font-sans text-xs md:text-sm text-ink/75 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Operations CTA */}
        <div className="pt-20 text-center space-y-6 max-w-2xl mx-auto">
          <div className="font-space text-xs text-vermilion font-bold uppercase tracking-widest">
            // READY FOR DIRECT STRATEGIC ENGAGEMENT?
          </div>
          <h2 className="headline-section text-ink uppercase">
            LET'S DISCUSS YOUR VISION
          </h2>
          <p className="font-sans text-base text-ink/75 leading-relaxed">
            We work with a strictly capped cohort of active clients per quarter to preserve unmatched creative and commercial focus.
          </p>
          <div className="pt-4">
            <MagneticButton
              onClick={() => onOpenInquiry()}
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              SCHEDULE EXECUTIVE BRIEFING
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Crosshairs, DotMatrix, InkanStamp, SeigaihaPattern } from './BrutalistGraphics';
import { ArrowRight, Layers, Workflow, Network, Check, Activity, Radio, Cpu, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export default function ConnectedEcosystem() {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    {
      id: 'perf',
      num: '01',
      title: 'PERFORMANCE MARKETING',
      role: 'PAID ACQUISITION ENGINE',
      kanji: '集客',
      desc: 'Drives high-intent customer traffic and targeted commercial demand directly into your digital platforms.',
      synergy: 'High-intent paid traffic is routed straight to Technology (02) for sub-second conversion, powered by Social (03) creative assets, and supported by Local SEO (04).',
      badge: 'bg-vermilion text-cream',
      border: 'border-vermilion',
      accent: 'text-vermilion',
      bgActive: 'bg-vermilion text-cream shadow-[8px_8px_0px_#211B18]',
    },
    {
      id: 'tech',
      num: '02',
      title: 'TECHNOLOGY SOLUTIONS',
      role: 'CONVERSION INFRASTRUCTURE',
      kanji: '基盤',
      desc: 'Converts visitors into qualified leads and clients through high-speed websites, landing pages and digital systems.',
      synergy: 'Sub-second web architecture captures ad traffic from Performance (01), showcases video from Social (03), and provides clean semantic schema for SEO (04).',
      badge: 'bg-ink text-cream',
      border: 'border-ink',
      accent: 'text-ink',
      bgActive: 'bg-ink text-cream shadow-[8px_8px_0px_#C83E17]',
    },
    {
      id: 'social',
      num: '03',
      title: 'SOCIAL MEDIA MARKETING',
      role: 'BRAND REPUTATION & RETENTION',
      kanji: '発信',
      desc: 'Builds lasting cultural equity, authority and organic audience engagement over time through creative content.',
      synergy: 'Cinematic storytelling builds trust, lowers customer acquisition costs for Performance Ads (01), and drives branded searches for SEO (04).',
      badge: 'bg-vermilion text-cream',
      border: 'border-vermilion',
      accent: 'text-vermilion',
      bgActive: 'bg-vermilion text-cream shadow-[8px_8px_0px_#211B18]',
    },
    {
      id: 'seo',
      num: '04',
      title: 'SEO & LOCAL VISIBILITY',
      role: 'ORGANIC SEARCH FOUNDATION',
      kanji: '認知',
      desc: 'Ensures permanent organic discovery when customers search for your category locally in maps and globally.',
      synergy: 'Permanent top search rankings capture inbound demand 24/7, reducing long-term ad spend reliance (01) while continuously routing to your platform (02).',
      badge: 'bg-gold text-ink font-bold',
      border: 'border-gold',
      accent: 'text-gold',
      bgActive: 'bg-ink-deep text-cream border-gold shadow-[8px_8px_0px_#B59A69]',
    },
  ];

  const currentNode = nodes[activeNode] || nodes[0];

  return (
    <section className="relative py-20 md:py-28 px-6 lg:px-14 bg-cream text-ink border-b-2 border-ink overflow-hidden selection:bg-vermilion selection:text-cream">
      {/* Background Halftone & Seigaiha Waves */}
      <div className="absolute inset-0 bg-halftone opacity-15 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-72 h-44 opacity-20 pointer-events-none hidden lg:block">
        <SeigaihaPattern className="w-full h-full" stroke="#C83E17" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* WIDESCREEN ASYMMETRICAL HEADER COMPOSITION (Eliminates narrow centered column and blank space) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 pb-10 border-b-2 border-ink/20">
          
          {/* Left Column: Bold Typography & Philosophy Context (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink text-cream font-space text-[11px] font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-vermilion animate-pulse" />
                <span>04 // CONNECTED ECOSYSTEM</span>
              </div>
              <span className="font-serif text-lg font-black text-vermilion">連係</span>
              <span className="font-mono text-xs text-ink/50 hidden sm:inline">[SYSTEM SYNERGY]</span>
            </div>

            {/* Wide, balanced Anton headline */}
            <h2 className="font-anton text-[clamp(2.6rem,5.6vw,5.5rem)] leading-[0.92] text-ink uppercase tracking-tight">
              MORE THAN INDIVIDUAL SERVICES. <br />
              <span className="text-vermilion block">A CONNECTED DIGITAL APPROACH.</span>
            </h2>

            {/* Editorial explanation */}
            <div className="p-4 sm:p-5 border-l-4 border-vermilion bg-cream-light border border-ink/15 shadow-sm max-w-2xl">
              <p className="font-sans text-sm sm:text-base text-ink/85 font-medium leading-relaxed">
                We reject isolated silos. Depending on your business model, customer journey, and operational goals, our four core capabilities integrate into a synchronized digital engine that compounds in value over time.
              </p>
            </div>
          </div>

          {/* Right Column: Live Ecosystem Telemetry Console (Cols 8-12) */}
          <div className="lg:col-span-5 p-6 border-2 border-ink bg-ink text-cream relative shadow-xl overflow-hidden">
            <Crosshairs className="absolute inset-0" color="border-cream/30" />

            <div className="flex items-center justify-between pb-3 border-b border-cream/20 font-space text-[10px] tracking-widest uppercase mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-vermilion animate-pulse" />
                <span className="text-vermilion font-bold">LIVE INTERCONNECT MATRIX</span>
              </div>
              <span className="font-mono text-cream/50">[4/4 SYNCHRONIZED]</span>
            </div>

            {/* Interactive Node Selector Buttons */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {nodes.map((n, idx) => (
                <button
                  key={n.num}
                  type="button"
                  onClick={() => {
                    sound.click();
                    setActiveNode(idx);
                  }}
                  className={`p-2 text-center border font-space text-[10px] uppercase font-bold transition-all ${
                    activeNode === idx
                      ? 'bg-vermilion text-cream border-vermilion shadow-sm'
                      : 'bg-ink-deep text-cream/70 border-cream/20 hover:border-cream/50'
                  }`}
                >
                  <div className="text-[9px] opacity-60">NODE</div>
                  <div className="text-xs font-mono">{n.num}</div>
                </button>
              ))}
            </div>

            {/* Active Node Live Telemetry */}
            <div className="p-3 border border-cream/15 bg-ink-deep space-y-1.5 font-space text-[11px]">
              <div className="flex justify-between items-center text-cream/60 text-[10px] uppercase">
                <span>ACTIVE FOCUS:</span>
                <span className="text-vermilion font-mono font-bold">{currentNode.role}</span>
              </div>
              <div className="font-anton text-base text-cream uppercase tracking-wide">
                {currentNode.title}
              </div>
              <div className="h-1.5 bg-cream/10 overflow-hidden mt-1">
                <div className="h-full bg-vermilion w-full animate-pulse" />
              </div>
            </div>

            {/* Footnote */}
            <div className="mt-3 flex items-center justify-between text-[9px] font-mono text-cream/40 uppercase">
              <span>HOVER CARDS BELOW TO TEST INTEGRATION</span>
              <span>60 FPS</span>
            </div>
          </div>

        </div>

        {/* CONTINUOUS ANIMATED SVG BUS CONNECTOR (Shows pulse flowing across cards) */}
        <div className="relative mb-6 hidden md:block">
          <svg className="w-full h-8" viewBox="0 0 1000 32" fill="none">
            {/* Background bus wire */}
            <path d="M 50 16 L 950 16" stroke="#211B18" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
            
            {/* Active flowing pulse line */}
            <path
              d="M 50 16 L 950 16"
              stroke="#C83E17"
              strokeWidth="2.5"
              className="animate-dash-flow"
            />

            {/* 4 Node Indicator Dots */}
            {[125, 375, 625, 875].map((cx, idx) => (
              <g key={idx}>
                <circle
                  cx={cx}
                  cy="16"
                  r={activeNode === idx ? "7" : "5"}
                  fill={activeNode === idx ? "#C83E17" : "#211B18"}
                  stroke="#F4EBDD"
                  strokeWidth="2"
                />
                {activeNode === idx && (
                  <circle
                    cx={cx}
                    cy="16"
                    r="11"
                    stroke="#C83E17"
                    strokeWidth="1.5"
                    fill="none"
                    className="animate-ping"
                  />
                )}
              </g>
            ))}
          </svg>
        </div>

        {/* THE FOUR INTERCONNECTED CAPABILITY NODES (Full Width Dense Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {nodes.map((node, idx) => {
            const isActive = activeNode === idx;

            return (
              <div
                key={node.num}
                onMouseEnter={() => {
                  sound.hover();
                  setActiveNode(idx);
                }}
                onClick={() => {
                  sound.click();
                  setActiveNode(idx);
                }}
                className={`p-6 sm:p-7 border-2 transition-all duration-300 relative group cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? node.bgActive
                    : 'border-ink bg-cream-light text-ink hover:border-vermilion hover:-translate-y-1.5 shadow-md'
                }`}
              >
                <Crosshairs className="absolute inset-0" color={isActive ? 'border-cream/30' : 'border-ink/20'} />

                <div>
                  {/* Top Numeral & Kanji Header */}
                  <div className="flex items-baseline justify-between mb-4 pb-2 border-b border-current/20">
                    <span className="font-anton text-3xl sm:text-4xl font-bold tracking-tight">
                      {node.num} //
                    </span>
                    <span className="font-serif text-lg font-black opacity-80">
                      {node.kanji}
                    </span>
                  </div>

                  {/* Role Badge */}
                  <div className="font-space text-[10px] uppercase tracking-widest font-bold mb-2 opacity-75">
                    {node.role}
                  </div>

                  {/* Title */}
                  <h3 className="font-anton text-xl sm:text-2xl uppercase mb-3 leading-tight">
                    {node.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm leading-relaxed opacity-85">
                    {node.desc}
                  </p>
                </div>

                {/* Bottom Status Ticker */}
                <div className="pt-4 mt-6 border-t border-current/15 flex items-center justify-between text-[10px] font-space font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-cream animate-ping' : 'bg-vermilion'}`} />
                    <span>{isActive ? 'ACTIVE FOCUS' : 'INTERCONNECTED'}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* DYNAMIC SYNERGY DIALOGUE PANEL (Explains how the active discipline accelerates the others) */}
        <div className="mt-8 p-6 sm:p-8 border-2 border-ink bg-cream-light relative shadow-md">
          <Crosshairs className="absolute inset-0" color="border-ink/30" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-ink/20 font-space text-xs uppercase font-bold text-vermilion tracking-widest">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-vermilion" />
              <span>SYNERGY SIMULATION // NODE {currentNode.num} IN ACTION</span>
            </div>
            <div className="font-mono text-ink/60 text-[10px]">
              [TAILORED DEPLOYMENT // MODULAR IMPLEMENTATION]
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base text-ink/90 font-medium leading-relaxed pt-3">
            {currentNode.synergy}
          </p>

          <div className="mt-4 pt-3 border-t border-ink/10 flex flex-wrap items-center justify-between gap-3 text-[11px] font-space text-ink/60 uppercase">
            <span>MODULAR ARCHITECTURE: CLIENTS CAN COMMENCE WITH ANY SINGLE SERVICE</span>
            <span className="font-mono text-vermilion font-bold">[AKARI ECOSYSTEM LINK]</span>
          </div>
        </div>

      </div>
    </section>
  );
}


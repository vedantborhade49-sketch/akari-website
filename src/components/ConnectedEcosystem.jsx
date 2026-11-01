import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { Crosshairs, DotMatrix, InkanStamp } from './BrutalistGraphics';
import { ArrowRight, Layers, Workflow, Network, Check } from 'lucide-react';
import { sound } from '../utils/audio';

export default function ConnectedEcosystem() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      num: '01',
      title: 'PERFORMANCE MARKETING',
      role: 'PAID AUDIENCE ACQUISITION',
      desc: 'Drives high-intent traffic and targeted demand into your digital ecosystem.',
      accent: 'border-vermilion text-vermilion',
      bgActive: 'bg-vermilion text-cream',
    },
    {
      num: '02',
      title: 'TECHNOLOGY SOLUTIONS',
      role: 'CONVERSION INFRASTRUCTURE',
      desc: 'Converts visitors into clients through high-speed websites, landing pages and systems.',
      accent: 'border-ink text-ink',
      bgActive: 'bg-ink text-cream',
    },
    {
      num: '03',
      title: 'SOCIAL MEDIA MARKETING',
      role: 'BRAND REPUTATION & RETENTION',
      desc: 'Builds lasting cultural equity, authority and organic engagement over time.',
      accent: 'border-vermilion text-vermilion',
      bgActive: 'bg-vermilion text-cream',
    },
    {
      num: '04',
      title: 'SEO & LOCAL VISIBILITY',
      role: 'ORGANIC SEARCH FOUNDATION',
      desc: 'Ensures permanent discovery when customers search for your category locally and globally.',
      accent: 'border-gold text-gold',
      bgActive: 'bg-gold text-ink',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-14 bg-cream-light text-ink border-b-2 border-ink overflow-hidden selection:bg-vermilion selection:text-cream">
      {/* Background Halftone */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink text-cream font-space text-[11px] font-bold tracking-widest uppercase">
            <Network className="w-3.5 h-3.5 text-vermilion" />
            <span>04 // CONNECTED ECOSYSTEM</span>
          </div>

          <h2 className="headline-section text-ink uppercase leading-[0.92]">
            MORE THAN INDIVIDUAL SERVICES. <br />
            <span className="text-vermilion">A CONNECTED DIGITAL APPROACH.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-ink/80 leading-relaxed max-w-2xl mx-auto">
            These capabilities can work together or individually depending on your specific business requirements, growth phase, and operational goals.
          </p>
        </div>

        {/* Interconnected System Graphic Diagram */}
        <div className="p-8 md:p-14 border-4 border-ink bg-cream shadow-2xl relative">
          <Crosshairs className="absolute inset-0" color="border-ink" />

          {/* Connected Grid with Center Hub */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {nodes.map((node, idx) => {
              const isHovered = activeNode === idx;

              return (
                <div
                  key={node.num}
                  onMouseEnter={() => {
                    sound.hover();
                    setActiveNode(idx);
                  }}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`p-6 border-2 transition-all duration-300 relative group cursor-pointer ${
                    isHovered ? node.bgActive : 'border-ink bg-cream-light text-ink'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-4 pb-2 border-b border-current/20">
                    <span className="font-anton text-3xl font-bold">{node.num} //</span>
                    <span className="font-space text-[10px] uppercase tracking-widest font-bold opacity-75">
                      {node.role}
                    </span>
                  </div>

                  <h3 className="font-anton text-xl sm:text-2xl uppercase mb-3 leading-tight">
                    {node.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm leading-relaxed opacity-85">
                    {node.desc}
                  </p>

                  <div className="pt-4 mt-4 border-t border-current/15 flex items-center justify-between text-[10px] font-space font-bold uppercase tracking-wider">
                    <span>STATUS: OPERATIONAL</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central System Clarification Footnote */}
          <div className="mt-8 pt-6 border-t-2 border-ink/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-space text-xs text-ink/75 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-vermilion" />
              <span>CUSTOM COMBINATIONS TAILORED TO YOUR GROWTH OBJECTIVES</span>
            </div>
            <div className="font-mono text-ink/50">
              [SYSTEM INTERCONNECT // AKARI]
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

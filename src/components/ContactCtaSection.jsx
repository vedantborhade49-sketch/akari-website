import React from 'react';
import MagneticButton from './MagneticButton';
import { Crosshairs, InkanStamp } from './BrutalistGraphics';
import { ArrowUpRight, ShieldCheck, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { sound } from '../utils/audio';

export default function ContactCtaSection({ onOpenInquiry }) {
  return (
    <section className="relative py-24 md:py-40 px-6 lg:px-14 bg-vermilion text-cream border-b-4 border-ink overflow-hidden selection:bg-ink selection:text-cream">
      {/* Background Japanese Watermark */}
      <div className="absolute right-4 -bottom-10 font-serif text-[200px] sm:text-[320px] md:text-[420px] text-ink/10 select-none pointer-events-none leading-none">
        朱
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Operational Pill */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-ink text-cream font-space text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-cream animate-ping" />
            <span>ACCEPTING SELECT CLIENTS FOR Q2 / Q3</span>
          </div>
          <span className="font-space text-xs font-mono text-cream/70 hidden sm:inline">
            // STRICT COHORT CAP ENFORCED
          </span>
        </div>

        {/* Massive Headline (Black & Cream Typography) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="headline-hero text-ink uppercase leading-[0.85] tracking-tighter">
              STOP BLENDING IN. <br />
              <span className="text-cream">START DOMINATING.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-6 space-y-6">
            <p className="font-sans text-base md:text-lg text-cream/90 leading-relaxed font-medium">
              Every day spent with an ordinary digital presence is market share ceded to bolder competitors. Partner with Akari Studios to build your permanent unfair advantage.
            </p>

            <div>
              <MagneticButton
                onClick={() => {
                  sound.click();
                  onOpenInquiry();
                }}
                variant="dark"
                size="xl"
                className="shadow-[6px_6px_0px_#F4EBDD]"
                icon={<ArrowUpRight className="w-5 h-5" />}
              >
                INITIATE STRATEGIC BRIEF ↗
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Studio Direct Dispatch Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t-2 border-cream/30">
          <div className="p-6 border-2 border-cream/30 bg-ink/20">
            <div className="flex items-center gap-2 text-cream font-space text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-cream" />
              <span>TOKYO STUDIO (HQ)</span>
            </div>
            <div className="font-sans text-xs text-cream/80">
              6-10-1 Ginza, Chuo-ku, Tokyo 104-0061, Japan
            </div>
            <div className="font-mono text-[10px] text-cream/60 mt-1">
              35.6762° N, 139.6503° E
            </div>
          </div>

          <div className="p-6 border-2 border-cream/30 bg-ink/20">
            <div className="flex items-center gap-2 text-cream font-space text-xs font-bold uppercase tracking-wider mb-2">
              <Mail className="w-4 h-4 text-cream" />
              <span>DIRECT EXECUTIVE DESK</span>
            </div>
            <div className="font-sans text-xs text-cream/90 font-bold">
              {AGENCY_INFO.email}
            </div>
            <div className="text-[10px] text-cream/60 mt-1 font-space">
              GUARANTEED RESPONSE &lt; 12 HOURS
            </div>
          </div>

          <div className="p-6 border-2 border-cream/30 bg-ink/20">
            <div className="flex items-center gap-2 text-cream font-space text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-cream" />
              <span>CONFIDENTIALITY ASSURANCE</span>
            </div>
            <div className="font-sans text-xs text-cream/80">
              Bilateral NDA signed prior to preliminary strategy sessions.
            </div>
            <div className="font-mono text-[10px] text-cream/60 mt-1">
              STANDARD COMMERCIAL PRIVILEGE
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

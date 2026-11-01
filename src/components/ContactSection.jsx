import React from 'react';
import MagneticButton from './MagneticButton';
import { Crosshairs, InkanStamp } from './BrutalistGraphics';
import { ArrowUpRight, Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { sound } from '../utils/audio';

export default function ContactSection({ onOpenInquiry }) {
  return (
    <section
      id="contact-section"
      className="relative py-24 md:py-36 px-6 lg:px-14 bg-vermilion text-cream border-b-4 border-ink overflow-hidden selection:bg-ink selection:text-cream"
    >
      {/* Background Japanese Watermark */}
      <div className="absolute right-4 -bottom-10 font-serif text-[200px] sm:text-[320px] md:text-[420px] text-ink/10 select-none pointer-events-none leading-none">
        朱
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-ink text-cream font-space text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-cream animate-ping" />
            <span>08 // CONVERSION & STRATEGIC ENGAGEMENT</span>
          </div>
          <span className="font-space text-xs font-mono text-cream/75 hidden sm:inline">
            // DIRECT TOKYO INTAKE
          </span>
        </div>

        {/* Massive Headline (Black & Cream Typography) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="headline-hero text-ink uppercase leading-[0.84] tracking-tighter">
              LET'S MAKE <br />
              <span className="text-cream">SOMETHING</span> <br />
              MATTER.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-6 space-y-6">
            <p className="font-sans text-base md:text-lg text-cream/95 leading-relaxed font-medium">
              Have a business, an idea or a project in mind? Let's talk about what we can build together.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                onClick={() => {
                  sound.click();
                  onOpenInquiry();
                }}
                variant="dark"
                size="lg"
                className="shadow-[6px_6px_0px_#F4EBDD]"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                START A PROJECT ↗
              </MagneticButton>

              <a
                href={`mailto:${AGENCY_INFO.email}`}
                onClick={() => sound.click()}
                className="px-6 py-3.5 border-2 border-cream text-cream font-space text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-cream hover:text-ink transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>GET IN TOUCH</span>
              </a>
            </div>
          </div>
        </div>

        {/* Verified Studio Contact Coordinates Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t-2 border-cream/30">
          
          <div className="p-6 border-2 border-cream/30 bg-ink/20 relative">
            <Crosshairs className="absolute inset-0" color="border-cream/30" />
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

          <div className="p-6 border-2 border-cream/30 bg-ink/20 relative">
            <Crosshairs className="absolute inset-0" color="border-cream/30" />
            <div className="flex items-center gap-2 text-cream font-space text-xs font-bold uppercase tracking-wider mb-2">
              <Mail className="w-4 h-4 text-cream" />
              <span>DIRECT EXECUTIVE DESK</span>
            </div>
            <div className="font-sans text-xs text-cream font-bold">
              <a href={`mailto:${AGENCY_INFO.email}`} className="hover:underline">
                {AGENCY_INFO.email}
              </a>
            </div>
            <div className="text-[10px] text-cream/60 mt-1 font-space">
              GUARANTEED RESPONSE &lt; 12 HOURS
            </div>
          </div>

          <div className="p-6 border-2 border-cream/30 bg-ink/20 relative">
            <Crosshairs className="absolute inset-0" color="border-cream/30" />
            <div className="flex items-center gap-2 text-cream font-space text-xs font-bold uppercase tracking-wider mb-2">
              <Phone className="w-4 h-4 text-cream" />
              <span>TOKYO SWITCHBOARD</span>
            </div>
            <div className="font-mono text-xs text-cream/90 font-bold">
              {AGENCY_INFO.phone}
            </div>
            <div className="font-space text-[10px] text-cream/60 mt-1">
              09:00 – 20:00 JST (MON–FRI)
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

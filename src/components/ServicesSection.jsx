import React from 'react';
import SectionHeader from './SectionHeader';
import MagneticButton from './MagneticButton';
import { Crosshairs, DotMatrix, TechnicalBadge } from './BrutalistGraphics';
import { ArrowUpRight, Check, Sparkles, Layers, Search, Code, TrendingUp, Video } from 'lucide-react';

export default function ServicesSection({ onOpenInquiry }) {
  const services = [
    {
      id: 'services-performance',
      num: '01',
      division: 'SERVICE 01',
      title: 'PERFORMANCE MARKETING',
      headline: 'MAKE EVERY CAMPAIGN COUNT.',
      desc: 'We help businesses reach the right audiences through paid advertising strategies focused on visibility, enquiries and measurable campaign performance.',
      subServices: [
        'Meta Ads',
        'Google Ads',
        'Paid Advertising',
        'Lead Generation',
        'Campaign Optimization',
        'Performance Reporting',
      ],
      palette: {
        container: 'bg-vermilion text-cream border-ink',
        badge: 'bg-ink text-cream',
        tagBg: 'bg-cream/15 text-cream border-cream/30',
        headline: 'text-ink',
        numeral: 'text-ink/15',
        graphic: 'border-cream/30 bg-ink/20',
      },
      visual: (
        <div className="p-6 sm:p-8 border-2 border-ink bg-ink text-cream relative overflow-hidden shadow-2xl">
          <Crosshairs className="absolute inset-0" color="border-cream/30" />
          
          <div className="flex items-center justify-between pb-4 border-b border-cream/20 mb-6 font-space text-[11px] uppercase tracking-widest">
            <span className="text-vermilion font-bold">CAMPAIGN SYSTEM // 01</span>
            <span className="text-cream/50">[ATTRIBUTION: ACTIVE]</span>
          </div>

          {/* Abstract Campaign Visual Composition */}
          <div className="space-y-4">
            <div className="p-4 border border-cream/15 bg-ink-deep">
              <div className="flex justify-between text-xs font-space text-cream/70 uppercase mb-2">
                <span>ACQUISITION FUNNEL</span>
                <span className="text-vermilion font-bold font-mono">LIVE OPTIMIZATION</span>
              </div>
              <div className="h-2 bg-cream/10 overflow-hidden">
                <div className="h-full bg-vermilion w-4/5" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 font-space text-xs">
              <div className="p-3 border border-cream/15 bg-ink-deep">
                <div className="text-[10px] text-cream/50 uppercase">TARGETING:</div>
                <div className="font-bold text-cream mt-0.5">HIGH-INTENT AUDIENCE</div>
              </div>
              <div className="p-3 border border-cream/15 bg-ink-deep">
                <div className="text-[10px] text-cream/50 uppercase">CHANNEL:</div>
                <div className="font-bold text-vermilion mt-0.5">META × GOOGLE SEARCH</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'services-technology',
      num: '02',
      division: 'SERVICE 02',
      title: 'TECHNOLOGY SOLUTIONS',
      headline: 'BUILD BEYOND THE ORDINARY.',
      desc: 'We create digital experiences and technology solutions that establish your online presence and support the way your business operates.',
      subServices: [
        'Website Development',
        'Landing Pages',
        'ERP Solutions',
        'Custom Software',
        'Business Systems',
        'Digital Automation',
      ],
      palette: {
        container: 'bg-ink text-cream border-cream/20',
        badge: 'bg-vermilion text-cream',
        tagBg: 'bg-ink-deep text-cream/90 border-cream/20',
        headline: 'text-cream',
        numeral: 'text-cream/10',
        graphic: 'border-cream/20 bg-ink-deep',
      },
      visual: (
        <div className="border-2 border-cream/30 bg-cream text-ink relative overflow-hidden shadow-2xl">
          {/* Browser Window Header Mockup */}
          <div className="bg-cream-dark px-4 py-2 border-b-2 border-ink flex items-center justify-between font-space text-[10px] uppercase font-bold text-ink/70">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-vermilion inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-gold inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-ink/40 inline-block" />
            </div>
            <span>AKARI_SYSTEM_VIEWER.EXE</span>
            <span className="text-vermilion font-mono">60 FPS</span>
          </div>

          <div className="p-6 sm:p-8 bg-cream-light space-y-4">
            <div className="p-4 border-2 border-ink bg-cream">
              <div className="font-space text-xs font-bold text-vermilion uppercase mb-1">
                // ARCHITECTURE STACK
              </div>
              <div className="font-anton text-2xl uppercase text-ink">
                REACT 19 • HIGH-SPEED WEB PLATFORMS
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 font-space text-xs">
              <div className="p-3 border border-ink/20 bg-cream">
                <div className="text-[10px] text-ink/50 uppercase">PERFORMANCE:</div>
                <div className="font-bold text-ink mt-0.5">INSTANT PAGELOAD</div>
              </div>
              <div className="p-3 border border-ink/20 bg-cream">
                <div className="text-[10px] text-ink/50 uppercase">SYSTEMS:</div>
                <div className="font-bold text-ink mt-0.5">CUSTOM INTEGRATIONS</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'services-social',
      num: '03',
      division: 'SERVICE 03',
      title: 'SOCIAL MEDIA MARKETING',
      headline: 'BE SEEN. BE REMEMBERED.',
      desc: 'We help businesses build a consistent social media presence through creative content, strategic planning and ongoing account management.',
      subServices: [
        'Social Media Management',
        'Content Strategy',
        'Content Calendars',
        'Reels and Video Production',
        'Creative Design',
        'Account Management',
      ],
      palette: {
        container: 'bg-cream text-ink border-ink',
        badge: 'bg-vermilion text-cream',
        tagBg: 'bg-cream-light text-ink border-ink/20',
        headline: 'text-vermilion',
        numeral: 'text-ink/10',
        graphic: 'border-ink bg-cream-light',
      },
      visual: (
        <div className="p-6 sm:p-8 border-2 border-ink bg-cream-light text-ink relative overflow-hidden shadow-2xl">
          <Crosshairs className="absolute inset-0" color="border-ink" />

          <div className="flex items-center justify-between pb-4 border-b border-ink/20 mb-6 font-space text-[11px] uppercase tracking-widest font-bold">
            <span className="text-vermilion">CONTENT PROGRAMMING // 03</span>
            <span className="text-ink/50">[9:16 CINEMA]</span>
          </div>

          <div className="space-y-4">
            <div className="border border-ink overflow-hidden relative aspect-[16/9] group">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop"
                alt="Social Cinema and Creative Direction"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-vermilion/15 mix-blend-multiply" />
              <div className="absolute top-2 left-2 bg-ink text-cream font-space text-[9px] px-2 py-0.5 uppercase font-bold">
                FILM FRAME // REEL 03
              </div>
            </div>

            <div className="p-3 border border-ink/20 bg-cream flex justify-between items-center font-space text-xs uppercase font-bold">
              <span>EDITORIAL ART DIRECTION</span>
              <span className="text-vermilion font-mono">CONSISTENT CADENCE</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'services-seo',
      num: '04',
      division: 'SERVICE 04',
      title: 'SEO & LOCAL VISIBILITY',
      headline: 'GET FOUND WHERE IT MATTERS.',
      desc: 'We improve how businesses appear across search engines and local discovery platforms through SEO and business profile management.',
      subServices: [
        'Search Engine Optimization',
        'Google Business Profile Management',
        'Local SEO',
        'Business Listing Optimization',
        'Search Visibility',
        'Website SEO Optimization',
      ],
      palette: {
        container: 'bg-ink-deep text-cream border-gold/40',
        badge: 'bg-gold text-ink font-bold',
        tagBg: 'bg-ink text-cream/90 border-gold/30',
        headline: 'text-gold',
        numeral: 'text-gold/10',
        graphic: 'border-gold/30 bg-ink',
      },
      visual: (
        <div className="p-6 sm:p-8 border-2 border-gold/40 bg-ink text-cream relative overflow-hidden shadow-2xl">
          <Crosshairs className="absolute inset-0" color="border-gold/30" />

          <div className="flex items-center justify-between pb-4 border-b border-gold/20 mb-6 font-space text-[11px] uppercase tracking-widest font-bold">
            <span className="text-gold">SEARCH DISCOVERY // 04</span>
            <span className="text-cream/50">[MAP PACK DOMINANCE]</span>
          </div>

          <div className="space-y-4">
            <div className="p-4 border border-gold/20 bg-ink-deep">
              <div className="flex items-center gap-2 font-space text-xs text-gold uppercase mb-2">
                <Search className="w-3.5 h-3.5" />
                <span>SEARCH INTENT QUERY</span>
              </div>
              <div className="font-anton text-xl uppercase text-cream">
                "HIGH-INTENT COMMERCIAL DISCOVERY"
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 font-space text-xs">
              <div className="p-3 border border-gold/20 bg-ink-deep">
                <div className="text-[10px] text-cream/50 uppercase">VISIBILITY:</div>
                <div className="font-bold text-gold mt-0.5">LOCAL TOP RANKINGS</div>
              </div>
              <div className="p-3 border border-gold/20 bg-ink-deep">
                <div className="text-[10px] text-cream/50 uppercase">STRUCTURE:</div>
                <div className="font-bold text-cream mt-0.5">TECHNICAL SCHEMA</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="what-we-do"
      className="relative py-24 md:py-36 px-6 lg:px-14 bg-cream text-ink bg-grain border-b-2 border-ink overflow-hidden selection:bg-vermilion selection:text-cream"
    >
      {/* Background Halftone */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-16 md:mb-24 pb-8 border-b-2 border-ink">
          <div className="flex items-center gap-3 font-space text-xs font-bold text-vermilion uppercase tracking-widest mb-3">
            <span className="w-2.5 h-2.5 bg-vermilion inline-block" />
            <span>03 // CORE CAPABILITIES</span>
          </div>

          <h2 className="headline-hero text-ink uppercase leading-[0.88] tracking-tighter mb-4">
            WHAT WE DO.
          </h2>

          <p className="font-sans text-lg sm:text-xl md:text-2xl text-ink/80 font-medium max-w-2xl leading-relaxed">
            Four core capabilities. One connected approach to business growth.
          </p>
        </div>

        {/* FOUR DISTINCTIVE SERVICE PRESENTATIONS */}
        <div className="space-y-16 md:space-y-24">
          {services.map((srv, idx) => (
            <div
              key={srv.id}
              id={srv.id}
              className={`p-8 md:p-14 border-4 shadow-2xl relative transition-all duration-300 ${srv.palette.container}`}
            >
              <Crosshairs className="absolute inset-0" color={srv.palette.container.includes('border-ink') ? 'border-ink' : 'border-cream/40'} />

              {/* Watermark Numeral */}
              <div
                className={`absolute right-4 -bottom-6 font-anton text-[140px] sm:text-[220px] md:text-[280px] select-none pointer-events-none leading-none ${srv.palette.numeral}`}
              >
                {srv.num}
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                
                {/* Left Column: Division, Headlines, Description, Subservices (Cols 1-7) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 font-space text-[10px] font-bold uppercase tracking-widest ${srv.palette.badge}`}>
                      {srv.division}
                    </span>
                    <span className="font-space text-xs font-bold uppercase tracking-wider opacity-75">
                      // {srv.title}
                    </span>
                  </div>

                  <h3 className={`headline-section uppercase leading-[0.92] ${srv.palette.headline}`}>
                    {srv.headline}
                  </h3>

                  <p className="font-sans text-base md:text-lg opacity-85 leading-relaxed max-w-xl">
                    {srv.desc}
                  </p>

                  {/* Subservices Pill Grid */}
                  <div className="pt-2">
                    <div className="font-space text-[11px] font-bold uppercase tracking-widest opacity-60 mb-3">
                      CAPABILITIES INCLUDED:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {srv.subServices.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className={`px-3.5 py-1.5 font-space text-xs font-semibold uppercase tracking-wider border ${srv.palette.tagBg}`}
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <MagneticButton
                      onClick={() => onOpenInquiry(srv.title)}
                      variant={srv.num === '01' ? 'dark' : 'primary'}
                      size="md"
                      icon={<ArrowUpRight className="w-4 h-4" />}
                    >
                      INQUIRE FOR {srv.title.split(' ')[0]}
                    </MagneticButton>
                  </div>
                </div>

                {/* Right Column: Tailored Visual Composition (Cols 8-12) */}
                <div className="lg:col-span-5 relative">
                  {srv.visual}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

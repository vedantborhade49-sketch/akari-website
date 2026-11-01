import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import MagneticButton from './MagneticButton';
import { Crosshairs, DotMatrix, TechnicalBadge } from './BrutalistGraphics';
import { ArrowUpRight, Check, Sparkles, Layers, Search, Code, TrendingUp, Video, Terminal, Radio, MapPin, Eye } from 'lucide-react';
import { sound } from '../utils/audio';

// Interactive Visual 01: Performance Marketing System
function PerformanceVisual() {
  const [activeChannel, setActiveChannel] = useState('meta');

  const channels = {
    meta: {
      name: 'META ADS ENGINE',
      audience: 'HIGH-INTENT RETARGETING',
      metric: 'LEAD GENERATION OPTIMIZED',
      pct: '88%',
    },
    google: {
      name: 'GOOGLE SEARCH & INTENT',
      audience: 'ACTIVE SEARCH DEMAND',
      metric: 'COMMERCIAL INTENT CAPTURE',
      pct: '94%',
    },
    hybrid: {
      name: 'OMNICHANNEL SCALE',
      audience: 'FULL FUNNEL SYNC',
      metric: 'INTEGRATED CONVERSION',
      pct: '96%',
    },
  };

  const current = channels[activeChannel];

  return (
    <div
      data-cursor="view"
      data-cursor-text="ENGINE"
      className="p-6 sm:p-8 border-2 border-ink bg-ink text-cream relative overflow-hidden shadow-2xl transition-all duration-300"
    >
      <Crosshairs className="absolute inset-0" color="border-cream/30" />

      {/* Top status bar */}
      <div className="flex items-center justify-between pb-4 border-b border-cream/20 mb-6 font-space text-[10px] sm:text-[11px] uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-vermilion animate-pulse" />
          <span className="text-vermilion font-bold">SYSTEM // 01 [LIVE ATTRIBUTION]</span>
        </div>
        <span className="text-cream/50">[ACTIVE PROTOCOL]</span>
      </div>

      {/* Interactive Channel Selector Tabs */}
      <div className="flex gap-2 mb-5">
        {[
          { id: 'meta', label: 'META ADS' },
          { id: 'google', label: 'GOOGLE SEARCH' },
          { id: 'hybrid', label: 'HYBRID' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              sound.click();
              setActiveChannel(tab.id);
            }}
            className={`px-3 py-1.5 font-space text-[10px] uppercase font-bold tracking-wider border transition-colors ${
              activeChannel === tab.id
                ? 'bg-vermilion text-cream border-vermilion'
                : 'bg-ink-deep text-cream/70 border-cream/20 hover:border-cream/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Abstract Campaign Visual Composition */}
      <div className="space-y-4">
        <div className="p-4 border border-cream/15 bg-ink-deep">
          <div className="flex justify-between text-xs font-space text-cream/80 uppercase mb-2">
            <span>{current.name}</span>
            <span className="text-vermilion font-bold font-mono">{current.pct} TARGET SYNC</span>
          </div>
          <div className="h-2 bg-cream/10 overflow-hidden">
            <div
              className="h-full bg-vermilion transition-all duration-500 ease-out"
              style={{ width: current.pct }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 font-space text-xs">
          <div className="p-3 border border-cream/15 bg-ink-deep">
            <div className="text-[10px] text-cream/50 uppercase">AUDIENCE:</div>
            <div className="font-bold text-cream mt-0.5 text-[11px] truncate">{current.audience}</div>
          </div>
          <div className="p-3 border border-cream/15 bg-ink-deep">
            <div className="text-[10px] text-cream/50 uppercase">DELIVERY:</div>
            <div className="font-bold text-vermilion mt-0.5 text-[11px] truncate">{current.metric}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Visual 02: Technology Solutions Browser & Terminal
function TechnologyVisual() {
  const [activeTab, setActiveTab] = useState('stack');

  const tabs = {
    stack: [
      '> FRAMEWORK: REACT 19 + VITE 8',
      '> STYLING: VANILLA CSS + TOKENS',
      '> MOTION: GSAP 3 + LENIS SMOOTH',
      '> BUNDLE: ZERO CLS • TREE-SHAKEN',
    ],
    runtime: [
      '> FIRST CONTENTFUL PAINT: < 0.4s',
      '> INTERACTIVE LATENCY: 12ms',
      '> ACCESSIBILITY: WCAG AA COMPLIANT',
      '> REDUCED MOTION: AUTO-DETECTED',
    ],
    systems: [
      '> COMMERCE & ERP: TAILORED API',
      '> LOCAL RESERVATION ENGINES: LIVE',
      '> CRM AUTOMATION PIPELINE: ACTIVE',
      '> HIGH-AVAILABILITY CLOUD HOSTING',
    ],
  };

  return (
    <div
      data-cursor="view"
      data-cursor-text="CODE"
      className="border-2 border-cream/30 bg-cream text-ink relative overflow-hidden shadow-2xl"
    >
      {/* Browser Window Header Mockup */}
      <div className="bg-cream-dark px-4 py-2 border-b-2 border-ink flex items-center justify-between font-space text-[10px] uppercase font-bold text-ink/70">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-vermilion inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-gold inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink/40 inline-block" />
        </div>
        <span className="font-mono">AKARI_SYSTEM_VIEWER.EXE</span>
        <span className="text-vermilion font-mono">60 FPS</span>
      </div>

      {/* Interactive Tabs */}
      <div className="flex border-b border-ink/20 bg-cream">
        {[
          { id: 'stack', label: 'TECH STACK' },
          { id: 'runtime', label: 'RUNTIME' },
          { id: 'systems', label: 'INTEGRATIONS' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              sound.click();
              setActiveTab(tab.id);
            }}
            className={`px-4 py-2 font-space text-[10px] uppercase font-bold tracking-wider transition-colors border-r border-ink/20 ${
              activeTab === tab.id
                ? 'bg-ink text-cream'
                : 'text-ink/70 hover:bg-cream-light'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Terminal Display */}
      <div className="p-6 bg-ink text-cream space-y-3 font-mono text-xs">
        <div className="text-vermilion font-bold text-[10px] tracking-wider mb-2 font-space">
          // TERMINAL DIAGNOSTIC: {activeTab.toUpperCase()}
        </div>
        <div className="space-y-1.5 min-h-[96px]">
          {tabs[activeTab].map((line, idx) => (
            <div key={idx} className="flex items-center gap-2 text-cream/90">
              <span className="text-vermilion select-none">$</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
        <div className="pt-3 border-t border-cream/15 flex justify-between text-[10px] font-space text-cream/50 uppercase">
          <span>CLEAN ARCHITECTURE</span>
          <span className="text-vermilion font-bold">STATUS: OK</span>
        </div>
      </div>
    </div>
  );
}

// Interactive Visual 03: Social Media Marketing Film Frame
function SocialVisual() {
  const [activeCadence, setActiveCadence] = useState('cinema');

  return (
    <div
      data-cursor="view"
      data-cursor-text="CINEMA"
      className="p-6 sm:p-8 border-2 border-ink bg-cream-light text-ink relative overflow-hidden shadow-2xl"
    >
      <Crosshairs className="absolute inset-0" color="border-ink" />

      <div className="flex items-center justify-between pb-4 border-b border-ink/20 mb-5 font-space text-[11px] uppercase tracking-widest font-bold">
        <span className="text-vermilion">CONTENT PROGRAMMING // 03</span>
        <span className="text-ink/60 font-mono">[9:16 CINEMA]</span>
      </div>

      <div className="space-y-4">
        {/* Layered Film Frame with Staggered Preview */}
        <div className="relative border-2 border-ink overflow-hidden aspect-[16/10] group bg-ink">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop"
            alt="Social Cinema and Creative Direction"
            className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-vermilion/20 mix-blend-multiply pointer-events-none" />

          {/* Film Cam Meta Overlay */}
          <div className="absolute top-2 left-2 bg-ink text-cream font-mono text-[9px] px-2 py-0.5 uppercase font-bold tracking-wider">
            REC ● FRAME 024 // 60 FPS
          </div>
          <div className="absolute bottom-2 right-2 bg-ink/90 text-cream font-mono text-[9px] px-2 py-0.5 uppercase">
            ISO 400 • 24MM • PRORES
          </div>
        </div>

        {/* Content Cadence Status */}
        <div className="p-3 border border-ink/20 bg-cream flex flex-wrap items-center justify-between gap-2 font-space text-xs uppercase font-bold">
          <span>EDITORIAL ART DIRECTION</span>
          <span className="text-vermilion font-mono">CONSISTENT CADENCE</span>
        </div>
      </div>
    </div>
  );
}

// Interactive Visual 04: SEO & Local Visibility Search Engine Simulator
function SeoVisual() {
  const [activeQuery, setActiveQuery] = useState(0);

  const queries = [
    { query: 'Fine dining Omakase Ginza Tokyo', rank: '#1 LOCAL PACK', schema: 'RestaurantSchema [JSON-LD]' },
    { query: 'Luxury real estate residential property', rank: '#1 ORGANIC SEARCH', schema: 'RealEstateAgent [JSON-LD]' },
    { query: 'High performance technology development', rank: '#1 CATEGORY MAPS', schema: 'ProfessionalService [JSON-LD]' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuery((prev) => (prev + 1) % queries.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [queries.length]);

  const current = queries[activeQuery];

  return (
    <div
      data-cursor="view"
      data-cursor-text="SEARCH"
      className="p-6 sm:p-8 border-2 border-gold/40 bg-ink text-cream relative overflow-hidden shadow-2xl"
    >
      <Crosshairs className="absolute inset-0" color="border-gold/30" />

      <div className="flex items-center justify-between pb-4 border-b border-gold/20 mb-5 font-space text-[11px] uppercase tracking-widest font-bold">
        <span className="text-gold">SEARCH DISCOVERY // 04</span>
        <span className="text-cream/50">[MAP PACK DOMINANCE]</span>
      </div>

      <div className="space-y-4">
        {/* Mock Search Bar with Animated Query */}
        <div className="p-4 border border-gold/30 bg-ink-deep">
          <div className="flex items-center justify-between text-xs font-space text-gold uppercase mb-2">
            <span className="flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-gold" />
              <span>SEARCH INTENT ENGINE</span>
            </span>
            <span className="font-mono text-[10px] text-cream/40">[DISCOVERY PROTOCOL]</span>
          </div>

          {/* Search Input Box */}
          <div className="p-3 border border-cream/20 bg-ink flex items-center justify-between">
            <div className="font-mono text-xs sm:text-sm text-cream font-bold truncate pr-2">
              "{current.query}"
            </div>
            <span className="w-2 h-4 bg-vermilion inline-block animate-pulse shrink-0" />
          </div>
        </div>

        {/* Visibility Metrics */}
        <div className="grid grid-cols-2 gap-3 font-space text-xs">
          <div className="p-3 border border-gold/20 bg-ink-deep">
            <div className="text-[10px] text-cream/50 uppercase">TARGET RANK:</div>
            <div className="font-bold text-gold mt-0.5 text-[11px]">{current.rank}</div>
          </div>
          <div className="p-3 border border-gold/20 bg-ink-deep">
            <div className="text-[10px] text-cream/50 uppercase">STRUCTURE:</div>
            <div className="font-bold text-cream mt-0.5 text-[10px] truncate">{current.schema}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection({ onOpenInquiry }) {
  const services = [
    {
      id: 'services-performance',
      num: '01',
      division: 'SERVICE 01',
      title: 'PERFORMANCE MARKETING',
      headline: 'MAKE EVERY CAMPAIGN COUNT.',
      desc: 'We help businesses reach the right audiences through paid advertising strategies focused on visibility, enquiries and measurable campaign performance.',
      bgImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400&auto=format&fit=crop',
      bgBlend: 'mix-blend-luminosity opacity-15',
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
      visual: <PerformanceVisual />,
    },
    {
      id: 'services-technology',
      num: '02',
      division: 'SERVICE 02',
      title: 'TECHNOLOGY SOLUTIONS',
      headline: 'BUILD BEYOND THE ORDINARY.',
      desc: 'We create digital experiences and technology solutions that establish your online presence and support the way your business operates.',
      bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop',
      bgBlend: 'mix-blend-screen opacity-20',
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
      visual: <TechnologyVisual />,
    },
    {
      id: 'services-social',
      num: '03',
      division: 'SERVICE 03',
      title: 'SOCIAL MEDIA MARKETING',
      headline: 'BE SEEN. BE REMEMBERED.',
      desc: 'We help businesses build a consistent social media presence through creative content, strategic planning and ongoing account management.',
      bgImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1400&auto=format&fit=crop',
      bgBlend: 'mix-blend-multiply opacity-15',
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
      visual: <SocialVisual />,
    },
    {
      id: 'services-seo',
      num: '04',
      division: 'SERVICE 04',
      title: 'SEO & LOCAL VISIBILITY',
      headline: 'GET FOUND WHERE IT MATTERS.',
      desc: 'We improve how businesses appear across search engines and local discovery platforms through SEO and business profile management.',
      bgImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1400&auto=format&fit=crop',
      bgBlend: 'mix-blend-overlay opacity-20',
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
      visual: <SeoVisual />,
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
              className={`p-8 md:p-14 border-4 shadow-2xl relative transition-all duration-500 overflow-hidden group ${srv.palette.container}`}
            >
              {/* Blurred Atmospheric Photographic Background Layer */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  src={srv.bgImage}
                  alt=""
                  loading="lazy"
                  className={`w-full h-full object-cover filter blur-[26px] md:blur-[34px] scale-105 group-hover:scale-115 transition-transform duration-1000 ease-out ${srv.bgBlend}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-current/10 via-transparent to-current/20 pointer-events-none" />
              </div>

              {/* Katana Blade Corner Slash Accent */}
              <div className="absolute -top-14 -right-14 w-36 h-36 border-b-2 border-l-2 border-current/30 transform -rotate-45 pointer-events-none opacity-40 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700" />

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

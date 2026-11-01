import React from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Cpu, Video, Compass, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { DotMatrix, Crosshairs } from './BrutalistGraphics';

export default function ServiceDeepDive({ onOpenInquiry }) {
  const pillars = [
    {
      num: '01',
      id: 'performance-marketing',
      title: 'PERFORMANCE MARKETING & CONVERSION',
      subtitle: 'METRIC DRIVEN ACQUISITION // 獲得',
      bg: 'bg-vermilion text-ink',
      borderColor: 'border-ink',
      tagBg: 'bg-ink text-cream',
      icon: <TrendingUp className="w-5 h-5 text-cream" />,
      stat: '4.8x',
      statLabel: 'Average Audited ROAS Across Client Portfolios',
      desc: 'Cold audience acquisition, high-intent Google search bidding, and multivariate landing page split-testing engineered to convert paid traffic into immediate pipeline revenue.',
      deliverables: [
        'Multi-stage full-funnel Meta & Google campaign architecture',
        'High-velocity creative testing (50+ variants deployed monthly)',
        'Server-side Conversions API & GA4 advanced attribution',
        'Daily bid management & negative search query grooming',
      ],
      ctaText: 'BRIEF PERFORMANCE CAMPAIGN',
      accentColor: 'text-cream',
    },
    {
      num: '02',
      id: 'technology-solutions',
      title: 'TECHNOLOGY & SOFTWARE SOLUTIONS',
      subtitle: 'CUSTOM DIGITAL INFRASTRUCTURE // 技術',
      bg: 'bg-ink text-cream',
      borderColor: 'border-cream/20',
      tagBg: 'bg-vermilion text-cream',
      icon: <Cpu className="w-5 h-5 text-cream" />,
      stat: '99+',
      statLabel: 'Google Lighthouse Performance & 60fps Micro-Motion',
      desc: 'We engineer bespoke web applications, custom reservation platforms, and multi-tenant software that obliterate slow, bloated WordPress monoliths and generic SaaS templates.',
      deliverables: [
        'Custom React & Vite engineering (0 third-party template bloat)',
        'Direct table reservation engines saving up to 18% commission fees',
        'Headless e-commerce flagships with instant checkout pipelines',
        'Fluid 60fps micro-interactions & bespoke design systems',
      ],
      ctaText: 'COMMENCE WEB ENGINEERING',
      accentColor: 'text-vermilion',
    },
    {
      num: '03',
      id: 'social-media',
      title: 'SOCIAL MEDIA & CONTENT CINEMA',
      subtitle: 'CULTURAL GRAVITY & VIRALITY // 映像',
      bg: 'bg-cream text-ink',
      borderColor: 'border-ink',
      tagBg: 'bg-vermilion text-cream',
      icon: <Video className="w-5 h-5 text-cream" />,
      stat: '140M+',
      statLabel: 'Organic Short-Form Impressions Delivered in 2024/2025',
      desc: 'Editorial food styling cinema, architectural drone film production, and viral short-form video programming that builds undeniable prestige and organic cultural ubiquity.',
      deliverables: [
        'Full-scale cinema camera crews on-location across Japan & global hubs',
        'Macro culinary, cocktail & architectural interior capture',
        'Viral 9:16 short-form programming across Instagram Reels & TikTok',
        'VIP influencer curation and exclusive preview evening activations',
      ],
      ctaText: 'DEPLOY CONTENT STRIKE TEAM',
      accentColor: 'text-vermilion',
    },
    {
      num: '04',
      id: 'seo-visibility',
      title: 'SEO & LOCAL MAPS DOMINATION',
      subtitle: 'PERMANENT SEARCH ASSETS // 検索',
      bg: 'bg-ink-deep text-cream border-t-2 border-gold/40',
      borderColor: 'border-gold/30',
      tagBg: 'bg-gold text-ink font-bold',
      icon: <Compass className="w-5 h-5 text-ink" />,
      stat: '#1',
      statLabel: 'Google Map Pack & Commercial Intent Search Rankings',
      desc: 'Claiming the #1 search result for high-intent culinary destinations, luxury architectural services, and private real estate keywords. Turning search into a permanent customer asset.',
      deliverables: [
        'Local Google Business Profile & Google Maps pack domination',
        'Commercial intent search ranking architecture',
        'Complete technical website crawl & structured schema injection',
        'High-authority culinary and luxury real estate digital PR backlinks',
      ],
      ctaText: 'SECURE SEARCH DOMINANCE',
      accentColor: 'text-gold',
    },
  ];

  return (
    <section id="service-deep-dive" className="w-full border-b-2 border-ink selection:bg-vermilion selection:text-cream">
      {pillars.map((pillar) => (
        <div
          key={pillar.id}
          className={`relative py-20 md:py-32 px-6 lg:px-14 border-b-2 last:border-b-0 ${pillar.borderColor} ${pillar.bg} overflow-hidden`}
        >
          {/* Background Halftone & Texture */}
          <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

          {/* Huge Watermark Numeral */}
          <div className="absolute right-4 -bottom-8 font-anton text-[180px] sm:text-[280px] md:text-[360px] opacity-[0.06] select-none pointer-events-none leading-none">
            {pillar.num}
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Index & Tag Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-current opacity-70 mb-8 font-space text-xs tracking-widest uppercase font-bold">
              <div className="flex items-center gap-3">
                <span className="text-xl font-anton">{pillar.num} //</span>
                <span>{pillar.subtitle}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-black">朱</span>
                <span>AKARI STUDIOS</span>
              </div>
            </div>

            {/* Main Content Grid: Title, Desc, and Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Heading, Metric Callout, & Overview (Cols 1-7) */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="headline-section leading-[0.92] uppercase">
                  {pillar.title}
                </h3>

                <p className="font-sans text-base md:text-lg opacity-85 leading-relaxed max-w-xl">
                  {pillar.desc}
                </p>

                {/* Metric Callout Box */}
                <div className={`p-6 border-2 ${pillar.borderColor} bg-current/5 relative mt-6`}>
                  <Crosshairs className="absolute inset-0" color={pillar.borderColor} />
                  
                  <div className="flex items-baseline gap-4">
                    <span className="font-anton text-5xl sm:text-6xl tracking-tight leading-none">
                      {pillar.stat}
                    </span>
                    <span className="font-space text-xs uppercase font-bold opacity-75 tracking-wider max-w-xs">
                      {pillar.statLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Deployed Deliverables List & Direct Action (Cols 8-12) */}
              <div className="lg:col-span-5 space-y-6 lg:pl-6">
                <div className="font-space text-xs font-bold uppercase tracking-widest opacity-70 pb-2 border-b border-current">
                  DEPLOYED PRODUCTION INFRASTRUCTURE
                </div>

                <div className="space-y-3">
                  {pillar.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className={`flex items-start gap-3 p-3.5 border ${pillar.borderColor} bg-current/5`}
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      <span className="font-sans text-xs md:text-sm font-medium leading-snug">
                        {del}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <MagneticButton
                    onClick={() => onOpenInquiry(pillar.title)}
                    variant={pillar.num === '01' ? 'dark' : 'primary'}
                    size="md"
                    className="w-full"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    {pillar.ctaText}
                  </MagneticButton>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Send, Check, ShieldCheck } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { AGENCY_INFO } from '../data/agencyData';
import { sound } from '../utils/audio';

export default function Footer({ onOpenInquiry }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [clocks, setClocks] = useState({ tokyo: '', london: '', ny: '' });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const format = (tz) =>
        new Intl.DateTimeFormat('en-US', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);

      setClocks({
        tokyo: format('Asia/Tokyo'),
        london: format('Europe/London'),
        ny: format('America/New_York'),
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    sound.stamp();
    setSubscribed(true);
  };

  const scrollToTop = () => {
    sound.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-cream pt-16 md:pt-24 border-t-4 border-vermilion relative overflow-hidden select-none">
      {/* Background Japanese Watermark */}
      <div className="absolute left-6 top-10 font-serif text-[200px] md:text-[340px] text-cream/[0.02] select-none pointer-events-none leading-none">
        朱
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Massive Call To Action Headline */}
        <div className="pb-16 md:pb-24 border-b border-cream/15">
          <div className="flex items-center gap-3 font-space text-xs tracking-widest text-vermilion uppercase mb-4 font-bold">
            <span className="w-2.5 h-2.5 bg-vermilion inline-block" />
            <span>COMMENCE COMMERCIAL DOMINANCE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="headline-hero text-cream uppercase">
                LET'S BUILD SOMETHING <span className="text-vermilion">IMMORTAL.</span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pl-6 space-y-6">
              <p className="font-sans text-sm md:text-base text-cream/75 leading-relaxed">
                Whether launching an ultra-exclusive dining institution or pre-selling multi-million dollar real estate developments, we turn raw vision into undisputed market authority.
              </p>
              <div>
                <MagneticButton
                  onClick={onOpenInquiry}
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRight className="w-5 h-5" />}
                >
                  START A BRIEF // 相談する
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        {/* Global Clocks Bar */}
        <div className="py-8 border-b border-cream/15 grid grid-cols-1 sm:grid-cols-3 gap-6 font-space text-xs uppercase tracking-widest">
          <div className="flex items-center justify-between sm:justify-start gap-4 p-3 border border-cream/10 bg-ink-deep">
            <span className="text-cream/60">TOKYO (HQ):</span>
            <span className="font-mono text-vermilion font-bold">{clocks.tokyo || '19:42:00'} JST</span>
          </div>
          <div className="flex items-center justify-between sm:justify-start gap-4 p-3 border border-cream/10 bg-ink-deep">
            <span className="text-cream/60">LONDON:</span>
            <span className="font-mono text-cream font-bold">{clocks.london || '10:42:00'} GMT</span>
          </div>
          <div className="flex items-center justify-between sm:justify-start gap-4 p-3 border border-cream/10 bg-ink-deep">
            <span className="text-cream/60">NEW YORK:</span>
            <span className="font-mono text-cream font-bold">{clocks.ny || '05:42:00'} EST</span>
          </div>
        </div>

        {/* Links & Editorial Newsletter Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-vermilion flex items-center justify-center">
                <span className="font-serif text-lg font-black text-vermilion">朱</span>
              </div>
              <span className="font-anton text-2xl tracking-wider uppercase text-cream">
                AKARI STUDIOS
              </span>
            </div>
            <p className="font-sans text-xs md:text-sm text-cream/70 max-w-sm leading-relaxed">
              Independent creative, technology and digital growth agency. Expressive Brutalism × Editorial Art Direction × Motion.
            </p>
            <div className="pt-2 font-mono text-xs text-cream/50">
              COORDINATES: {AGENCY_INFO.coordinates}
            </div>
          </div>

          {/* Directory Links */}
          <div className="lg:col-span-2 space-y-3 font-space text-xs tracking-wider uppercase">
            <div className="text-vermilion font-bold mb-4">// NAVIGATION</div>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-cream/70 hover:text-cream transition-colors">
                  01 // HOME
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-cream/70 hover:text-cream transition-colors">
                  02 // SELECTED WORK
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-cream/70 hover:text-cream transition-colors">
                  03 // CAPABILITIES
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/70 hover:text-cream transition-colors">
                  04 // STUDIO CULTURE
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/70 hover:text-cream transition-colors">
                  05 // CONTACT TOKYO
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="lg:col-span-2 space-y-3 font-space text-xs tracking-wider uppercase">
            <div className="text-vermilion font-bold mb-4">// CHANNELS</div>
            <ul className="space-y-2.5">
              {AGENCY_INFO.socials.map((soc) => (
                <li key={soc.name}>
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-cream/70 hover:text-vermilion transition-colors"
                  >
                    <span>{soc.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial Briefing Dispatch */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-vermilion font-space text-xs tracking-widest font-bold uppercase">
              // THE AKARI DISPATCH
            </div>
            <p className="font-sans text-xs text-cream/70 leading-relaxed">
              Bi-weekly analysis on high-conversion hospitality funnels, luxury real estate acquisition, and brutalist design strategy.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex border border-cream/20 bg-ink-deep focus-within:border-vermilion">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER EXECUTIVE EMAIL..."
                    className="w-full bg-transparent px-3 py-2.5 text-xs font-space text-cream placeholder-cream/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 bg-vermilion text-cream hover:bg-cream hover:text-ink transition-colors font-space text-xs font-bold uppercase"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] font-space text-cream/40">
                  NO SPAM. STRICTLY CURATED INDUSTRY INTELLIGENCE.
                </div>
              </form>
            ) : (
              <div className="p-3 border border-vermilion bg-vermilion/10 text-xs font-space text-cream flex items-center gap-2">
                <Check className="w-4 h-4 text-vermilion shrink-0" />
                <span>SUBSCRIBED. WELCOME TO THE INNER CIRCLE.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Micro Bar */}
        <div className="py-8 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-space text-[11px] text-cream/50 uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} AKARI STUDIOS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>EXPRESSIVE BRUTALISM × EDITORIAL DESIGN</span>
            <button
              onClick={scrollToTop}
              className="text-vermilion hover:underline font-bold"
            >
              [BACK TO TOP ↑]
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

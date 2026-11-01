import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck, Check, Send, Clock, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import MagneticButton from '../components/MagneticButton';
import { AGENCY_INFO } from '../data/agencyData';
import { sound } from '../utils/audio';

export default function Contact() {
  const [industry, setIndustry] = useState('Hospitality & Dining');
  const [budget, setBudget] = useState('$25,000 – $50,000');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.stamp();
    const code = `AKR-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefCode(code);
    setIsSubmitted(true);
  };

  const industries = [
    'Hospitality & Dining',
    'Real Estate & Property',
    'Technology & Software',
    'Emerging Consumer Brand',
  ];

  const budgets = [
    '$12,000 – $25,000 (Sprint)',
    '$25,000 – $50,000 (Growth Engine)',
    '$50,000 – $100,000 (Scale)',
    '$100,000+ (Enterprise Overhaul)',
  ];

  return (
    <div className="w-full bg-cream text-ink bg-grain py-12 md:py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <SectionHeader
          index="01"
          tag="COMMUNICATION PROTOCOL"
          kanji="連絡"
          title="START A STRATEGIC BRIEF"
          subtitle="Direct dialogue with our executive directors in Tokyo. Response guaranteed within 12 hours."
        />

        {/* Main Grid: Form + Studio Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Intake Form */}
          <div className="lg:col-span-7 border-2 border-ink bg-cream-light p-6 md:p-10 shadow-xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex items-center justify-between pb-4 border-b border-ink/20">
                  <div className="font-space text-xs font-bold text-vermilion uppercase tracking-widest">
                    // CLIENT INITIATION INTAKE
                  </div>
                  <div className="font-mono text-xs text-ink/50">STAGE: BRIEFING</div>
                </div>

                {/* 1. Industry */}
                <div>
                  <label className="block font-space text-xs font-bold uppercase tracking-widest text-ink mb-3">
                    01. PRIMARY SECTOR *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industries.map((ind) => (
                      <button
                        type="button"
                        key={ind}
                        onClick={() => {
                          sound.click();
                          setIndustry(ind);
                        }}
                        className={`p-3.5 text-xs font-space font-bold uppercase tracking-wider text-left border-2 transition-all ${
                          industry === ind
                            ? 'border-vermilion bg-vermilion text-cream'
                            : 'border-ink/20 hover:border-ink bg-cream text-ink/80'
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Budget */}
                <div>
                  <label className="block font-space text-xs font-bold uppercase tracking-widest text-ink mb-3">
                    02. ESTIMATED INVESTMENT ALLOCATION *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => {
                          sound.click();
                          setBudget(b);
                        }}
                        className={`p-3 text-xs font-space tracking-wide text-left border transition-all ${
                          budget === b
                            ? 'border-ink bg-ink text-cream font-bold'
                            : 'border-ink/20 hover:border-ink bg-cream text-ink/80'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Inputs */}
                <div className="space-y-4 pt-4 border-t border-ink/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-space text-[11px] font-bold uppercase tracking-wider text-ink mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kenji Tanaka"
                        className="w-full bg-cream border border-ink/30 px-3.5 py-2.5 text-sm font-sans text-ink focus:outline-none focus:border-vermilion"
                      />
                    </div>
                    <div>
                      <label className="block font-space text-[11px] font-bold uppercase tracking-wider text-ink mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. kenji@group.com"
                        className="w-full bg-cream border border-ink/30 px-3.5 py-2.5 text-sm font-sans text-ink focus:outline-none focus:border-vermilion"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-space text-[11px] font-bold uppercase tracking-wider text-ink mb-1">
                        Brand / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Kuro Dining Group"
                        className="w-full bg-cream border border-ink/30 px-3.5 py-2.5 text-sm font-sans text-ink focus:outline-none focus:border-vermilion"
                      />
                    </div>
                    <div>
                      <label className="block font-space text-[11px] font-bold uppercase tracking-wider text-ink mb-1">
                        Direct Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+81 / +1 / +44"
                        className="w-full bg-cream border border-ink/30 px-3.5 py-2.5 text-sm font-sans text-ink focus:outline-none focus:border-vermilion"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-space text-[11px] font-bold uppercase tracking-wider text-ink mb-1">
                      Project Goals & Specific Bottlenecks
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your objectives (e.g. fill weekday counter seats, launch luxury residential towers, eliminate third-party commission fees)..."
                      className="w-full bg-cream border border-ink/30 px-3.5 py-2.5 text-sm font-sans text-ink focus:outline-none focus:border-vermilion resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    icon={<Send className="w-4 h-4" />}
                  >
                    DISPATCH STRATEGIC BRIEF TO DIRECTORS
                  </MagneticButton>

                  <div className="flex items-center justify-center gap-2 mt-3 font-space text-[11px] text-ink/60 uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-vermilion" />
                    <span>MUTUAL BILATERAL NDA ENFORCED BY DEFAULT</span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="py-16 text-center space-y-6">
                <div className="w-20 h-20 border-4 border-vermilion mx-auto flex items-center justify-center bg-vermilion/10 text-vermilion">
                  <span className="font-serif text-4xl font-black">朱</span>
                </div>
                <h3 className="font-anton text-4xl uppercase text-ink">
                  STRATEGIC BRIEF CONFIRMED
                </h3>
                <p className="font-sans text-base text-ink/80 max-w-md mx-auto">
                  Thank you, <strong className="text-ink">{formData.name}</strong>. Your executive inquiry for{' '}
                  <strong className="text-ink">{formData.company}</strong> has been logged under dispatch reference:
                </p>
                <div className="p-4 bg-ink text-cream font-mono text-xl text-vermilion font-bold tracking-widest inline-block border border-ink">
                  #{refCode}
                </div>
                <p className="text-xs font-space text-ink/60">
                  Our Tokyo leadership team will reach out within 12 hours.
                </p>
                <div>
                  <MagneticButton
                    onClick={() => {
                      sound.click();
                      setIsSubmitted(false);
                    }}
                    variant="outline"
                    size="sm"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </MagneticButton>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Studio Coordinates & Direct Access */}
          <div className="lg:col-span-5 space-y-8">
            {/* Headquarters Card */}
            <div className="p-8 border-2 border-ink bg-ink text-cream space-y-6">
              <div className="flex justify-between items-start pb-4 border-b border-cream/15">
                <div>
                  <span className="font-space text-xs text-vermilion font-bold tracking-widest uppercase block mb-1">
                    PRIMARY DESIGN STUDIO
                  </span>
                  <h3 className="font-anton text-3xl uppercase text-cream">
                    GINZA, TOKYO
                  </h3>
                </div>
                <div className="w-10 h-10 border-2 border-vermilion flex items-center justify-center">
                  <span className="font-serif text-xl font-black text-vermilion">朱</span>
                </div>
              </div>

              <div className="space-y-4 font-sans text-sm text-cream/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-vermilion shrink-0 mt-1" />
                  <div>
                    <div className="font-space text-xs font-bold uppercase text-cream">Studio Address:</div>
                    <div>6-10-1 Ginza, Chuo-ku, Tokyo 104-0061, Japan</div>
                    <div className="font-mono text-xs text-cream/50 mt-1">35.6762° N, 139.6503° E</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-vermilion shrink-0" />
                  <div>
                    <span className="font-space text-xs font-bold uppercase text-cream block">Direct Inquiries:</span>
                    <a href={`mailto:${AGENCY_INFO.email}`} className="text-vermilion hover:underline">
                      {AGENCY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-vermilion shrink-0" />
                  <div>
                    <span className="font-space text-xs font-bold uppercase text-cream block">Tokyo Switchboard:</span>
                    <span className="font-mono">{AGENCY_INFO.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-cream/15 flex items-center gap-2 text-xs font-space text-cream/60 uppercase">
                <Clock className="w-3.5 h-3.5 text-vermilion" />
                <span>STUDIO HOURS: 09:00 – 20:00 JST (MON–FRI)</span>
              </div>
            </div>

            {/* Satellite Coordination Points */}
            <div className="p-6 border-2 border-ink bg-cream-light space-y-4">
              <div className="font-space text-xs font-bold text-vermilion uppercase tracking-widest pb-2 border-b border-ink/15">
                GLOBAL MEDIA BUYING NODES
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs font-space uppercase">
                <div className="p-3 border border-ink/15 bg-cream">
                  <div className="font-bold text-ink">LONDON, UK</div>
                  <div className="text-ink/60 text-[10px]">MAYFAIR LIASON</div>
                </div>
                <div className="p-3 border border-ink/15 bg-cream">
                  <div className="font-bold text-ink">NEW YORK, USA</div>
                  <div className="text-ink/60 text-[10px]">SOHO OPERATIONS</div>
                </div>
                <div className="p-3 border border-ink/15 bg-cream">
                  <div className="font-bold text-ink">DUBAI, UAE</div>
                  <div className="text-ink/60 text-[10px]">DIFC CLIENT DESK</div>
                </div>
                <div className="p-3 border border-ink/15 bg-cream">
                  <div className="font-bold text-ink">SYDNEY, AU</div>
                  <div className="text-ink/60 text-[10px]">PACIFIC RELAY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

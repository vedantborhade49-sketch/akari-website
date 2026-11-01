import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Sparkles, Send } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { sound } from '../utils/audio';

export default function InquiryModal({ isOpen, onClose, initialDiscipline = '' }) {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState('');
  const [services, setServices] = useState([]);
  const [budget, setBudget] = useState('$25,000 – $50,000');
  const [timeline, setTimeline] = useState('Immediate / Next 30 Days');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  useEffect(() => {
    if (initialDiscipline) {
      setIndustry(initialDiscipline);
    }
  }, [initialDiscipline]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      // Reset after closing if submitted
      if (isSubmitted) {
        setTimeout(() => {
          setIsSubmitted(false);
          setStep(1);
        }, 500);
      }
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, isSubmitted]);

  const toggleService = (srv) => {
    sound.click();
    setServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.stamp();
    const refCode = `AKR-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryRef(refCode);
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  const industryOptions = [
    { id: 'Hospitality & Dining', label: 'Restaurants & Hospitality', kanji: '飲食', note: 'Omakase, bars, fine dining groups' },
    { id: 'Real Estate & Property', label: 'Real Estate & Property', kanji: '不動産', note: 'Luxury towers, cliffside villas, developers' },
    { id: 'Software & Technology', label: 'Tech & Digital Products', kanji: '技術', note: 'SaaS, enterprise platforms, apps' },
    { id: 'Emerging Brand', label: 'DTC & Consumer Brands', kanji: '企業', note: 'Spirits, luxury retail, lifestyle' },
  ];

  const serviceOptions = [
    'Social Media Management',
    'Cinematography & Content Creation',
    'Brand Identity & Art Direction',
    'Custom Website & Software Development',
    'Meta & Google Ads Acquisition',
    'SEO & Local Maps Domination',
    'Commission-Free Reservation Funnels',
    'Full-Funnel Growth Partnership',
  ];

  const budgetOptions = [
    '$12,000 – $25,000 (Sprint)',
    '$25,000 – $50,000 (Growth)',
    '$50,000 – $100,000 (Scale)',
    '$100,000+ (Enterprise)',
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9995] flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/80 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl h-full bg-cream text-ink z-10 overflow-y-auto flex flex-col border-l-2 border-ink shadow-2xl selection:bg-vermilion selection:text-cream"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-cream/95 backdrop-blur-md border-b border-ink/20 px-6 md:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-vermilion inline-block" />
              <div>
                <span className="font-space text-xs tracking-widest font-bold uppercase text-ink/80">
                  PROJECT INITIATION INTAKE
                </span>
                <div className="text-[10px] font-space text-ink/50 tracking-wider">
                  RESPONSE TIME // UNDER 12 HOURS GUARANTEED
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                sound.click();
                onClose();
              }}
              className="w-10 h-10 border border-ink/30 hover:border-vermilion hover:bg-vermilion hover:text-cream flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form or Success State */}
          <div className="p-6 md:p-10 flex-1 flex flex-col justify-between">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step indicator */}
                <div className="flex items-center justify-between pb-4 border-b border-ink/15 text-xs font-space tracking-widest uppercase">
                  <span className="text-vermilion font-bold font-mono">
                    PHASE 01 // SCOPING & BRIEF
                  </span>
                  <span className="text-ink/50">TOKYO STUDIO DIRECT</span>
                </div>

                {/* 1. Industry Focus */}
                <div>
                  <label className="block font-space text-xs font-bold uppercase tracking-widest text-ink mb-3">
                    01. PRIMARY INDUSTRY SECTOR *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industryOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => {
                          sound.click();
                          setIndustry(opt.id);
                        }}
                        className={`p-4 text-left border-2 transition-all duration-200 relative ${
                          industry === opt.id
                            ? 'border-vermilion bg-vermilion/10 text-ink shadow-sm'
                            : 'border-ink/20 hover:border-ink bg-cream-light text-ink/80'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-space text-xs font-bold tracking-wider uppercase">
                            {opt.label}
                          </span>
                          <span className="font-serif text-sm text-vermilion font-bold">
                            {opt.kanji}
                          </span>
                        </div>
                        <div className="text-[11px] font-sans text-ink/60">
                          {opt.note}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Services Needed */}
                <div>
                  <label className="block font-space text-xs font-bold uppercase tracking-widest text-ink mb-3">
                    02. SCOPE & CAPABILITIES (SELECT ALL APPLICABLE)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((srv) => {
                      const selected = services.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`px-3.5 py-2.5 text-xs font-space text-left border flex items-center justify-between transition-colors ${
                            selected
                              ? 'border-vermilion bg-vermilion text-cream font-medium'
                              : 'border-ink/20 hover:border-ink bg-cream-light text-ink/80'
                          }`}
                        >
                          <span className="truncate pr-2">{srv}</span>
                          {selected ? (
                            <Check className="w-3.5 h-3.5 shrink-0 text-cream" />
                          ) : (
                            <span className="text-[10px] opacity-40">+</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Budget Range */}
                <div>
                  <label className="block font-space text-xs font-bold uppercase tracking-widest text-ink mb-3">
                    03. ALLOCATED INVESTMENT TIER
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {budgetOptions.map((b) => (
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
                            : 'border-ink/20 hover:border-ink bg-cream-light text-ink/80'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Contact Details */}
                <div className="space-y-4 pt-4 border-t border-ink/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-space text-[11px] font-bold uppercase tracking-wider text-ink mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kenji Tanaka"
                        className="w-full bg-cream-light border border-ink/30 px-3.5 py-2.5 text-sm font-sans text-ink focus:outline-none focus:border-vermilion"
                      />
                    </div>
                    <div>
                      <label className="block font-space text-[11px] font-bold uppercase tracking-wider text-ink mb-1.5">
                        Direct Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. kenji@domain.com"
                        className="w-full bg-cream-light border border-ink/30 px-3.5 py-2.5 text-sm font-sans text-ink focus:outline-none focus:border-vermilion"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-space text-[11px] font-bold uppercase tracking-wider text-ink mb-1.5">
                        Brand / Venue / Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Kuro Dining Group"
                        className="w-full bg-cream-light border border-ink/30 px-3.5 py-2.5 text-sm font-sans text-ink focus:outline-none focus:border-vermilion"
                      />
                    </div>
                    <div>
                      <label className="block font-space text-[11px] font-bold uppercase tracking-wider text-ink mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+81 / +1 / +44"
                        className="w-full bg-cream-light border border-ink/30 px-3.5 py-2.5 text-sm font-sans text-ink focus:outline-none focus:border-vermilion"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-space text-[11px] font-bold uppercase tracking-wider text-ink mb-1.5">
                      Strategic Objective & Overview
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your goals: e.g. launch new omakase venue, pre-sell 24 luxury residential units, or rebuild our digital acquisition engine..."
                      className="w-full bg-cream-light border border-ink/30 px-3.5 py-2.5 text-sm font-sans text-ink focus:outline-none focus:border-vermilion resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    icon={<Send className="w-4 h-4" />}
                  >
                    DISPATCH STRATEGIC BRIEF TO AKARI
                  </MagneticButton>

                  <div className="flex items-center justify-center gap-2 mt-3 font-space text-[11px] text-ink/60 uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-vermilion" />
                    <span>STRICT NDA & COMMERCIAL CONFIDENTIALITY INCLUDED</span>
                  </div>
                </div>
              </form>
            ) : (
              /* Success State */
              <div className="my-auto py-12 text-center space-y-6">
                <div className="w-20 h-20 border-4 border-vermilion mx-auto flex items-center justify-center bg-vermilion/10 text-vermilion">
                  <span className="font-serif text-4xl font-black">朱</span>
                </div>

                <div className="space-y-2">
                  <div className="font-space text-xs tracking-widest text-vermilion font-bold uppercase">
                    // BRIEF DISPATCH CONFIRMED
                  </div>
                  <h3 className="font-anton text-4xl md:text-5xl uppercase text-ink">
                    COMMUNICATION PROTOCOL ACTIVATED
                  </h3>
                  <p className="font-sans text-sm md:text-base text-ink/80 max-w-md mx-auto">
                    Thank you, <strong className="text-ink">{formData.name}</strong>. Your strategic briefing for{' '}
                    <strong className="text-ink">{formData.company}</strong> has been routed to our creative directors in Tokyo.
                  </p>
                </div>

                <div className="p-4 bg-ink text-cream inline-block border border-ink max-w-sm w-full mx-auto">
                  <div className="font-space text-[10px] text-cream/50 tracking-widest uppercase mb-1">
                    INTERNAL DISPATCH CODE
                  </div>
                  <div className="font-mono text-lg text-vermilion font-bold tracking-widest">
                    #{inquiryRef}
                  </div>
                  <div className="text-[11px] font-sans text-cream/70 mt-1">
                    Direct executive callback guaranteed within 12 business hours.
                  </div>
                </div>

                <div>
                  <MagneticButton
                    onClick={() => {
                      sound.click();
                      onClose();
                    }}
                    variant="outline"
                    size="md"
                  >
                    RETURN TO STUDIO ARCHIVE
                  </MagneticButton>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

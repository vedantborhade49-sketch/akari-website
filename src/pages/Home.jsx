import React from 'react';
import Hero from '../components/Hero';
import BrandStatement from '../components/BrandStatement';
import ServicesIntro from '../components/ServicesIntro';
import ServiceDeepDive from '../components/ServiceDeepDive';
import IndustriesSection from '../components/IndustriesSection';
import ProcessSection from '../components/ProcessSection';
import AboutSection from '../components/AboutSection';
import ContactCtaSection from '../components/ContactCtaSection';
import { SectionTransitionDivider } from '../components/BrutalistGraphics';

export default function Home({ onOpenInquiry, onSelectCaseStudy }) {
  return (
    <div className="w-full overflow-hidden selection:bg-vermilion selection:text-cream">
      {/* SECTION 01 — HERO (Full Vermilion / Cream toggle, Black typography, Japanese Pagoda & Brutalist Concrete Collage) */}
      <Hero onOpenInquiry={onOpenInquiry} />

      <SectionTransitionDivider
        code="SEC. 02 // MANIFESTO & BRAND DOCTRINE"
        kanji="信念"
      />

      {/* SECTION 02 — BRAND STATEMENT (Ink-black background, cream typography, vermilion accents) */}
      <BrandStatement />

      <SectionTransitionDivider
        code="SEC. 03 // DIGITAL ARSENAL INTRODUCTION"
        kanji="技法"
      />

      {/* SECTION 03 — SERVICES INTRODUCTION (Warm cream background, black typography, vermilion numbering) */}
      <ServicesIntro onOpenInquiry={onOpenInquiry} />

      <SectionTransitionDivider
        code="SEC. 04 // 4 CORE CAPABILITIES DEEP DIVE"
        kanji="機能"
      />

      {/* SECTION 04 — SERVICE DEEP DIVE (Alternating visual treatments: Vermilion/Black, Ink/Cream, Cream/Vermilion, Gold/Charcoal) */}
      <ServiceDeepDive onOpenInquiry={onOpenInquiry} />

      <SectionTransitionDivider
        code="SEC. 05 // HIGH-STAKES INDUSTRY SPECIALIZATION"
        kanji="産業"
      />

      {/* SECTION 05 — INDUSTRIES (Contrasting cream and vermilion blocks with photographic compositions and growth simulator) */}
      <IndustriesSection onOpenInquiry={onOpenInquiry} />

      <SectionTransitionDivider
        code="SEC. 06 // SPRINT METHODOLOGY & PROCESS"
        kanji="手法"
      />

      {/* SECTION 06 — PROCESS (Ink-black background with cream typography and animated numbered stages) */}
      <ProcessSection />

      <SectionTransitionDivider
        code="SEC. 07 // STUDIO HERITAGE & QUALITY BENCHMARKS"
        kanji="本質"
      />

      {/* SECTION 07 — ABOUT AKARI (Warm cream background with expressive editorial typography & business card heritage) */}
      <AboutSection onOpenInquiry={onOpenInquiry} />

      {/* SECTION 08 — CONTACT (Full vermilion background with oversized cream and black typography) */}
      <ContactCtaSection onOpenInquiry={onOpenInquiry} />
    </div>
  );
}

import React from 'react';
import Hero from '../components/Hero';
import BrandStatement from '../components/BrandStatement';
import ServicesSection from '../components/ServicesSection';
import ConnectedEcosystem from '../components/ConnectedEcosystem';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import OurApproach from '../components/OurApproach';
import AboutAkari from '../components/AboutAkari';
import ContactSection from '../components/ContactSection';
import { SectionTransitionDivider } from '../components/BrutalistGraphics';

export default function Home({ onOpenInquiry }) {
  return (
    <div className="w-full overflow-hidden selection:bg-vermilion selection:text-cream">
      {/* SECTION 01 — HERO (Akari vermilion background, Anton headline, supporting copy, primary CTA, secondary CTA, layered collage) */}
      <Hero onOpenInquiry={onOpenInquiry} />

      <SectionTransitionDivider
        type="hero-to-statement"
        code="SEC. 02 // BRAND STATEMENT & PHILOSOPHY"
        kanji="哲学"
      />

      {/* SECTION 02 — BRAND STATEMENT (Ink black background, Good Ideas Deserve Bold Execution, moving marquee) */}
      <BrandStatement />

      <SectionTransitionDivider
        type="statement-to-services"
        code="SEC. 03 // FOUR CORE DIVISIONS"
        subtitle="CAPABILITIES EXPANDED"
        kanji="業務"
      />

      {/* SECTION 03 — OUR SERVICES (Warm cream background, What We Do, four core divisions with original visual compositions) */}
      <ServicesSection onOpenInquiry={onOpenInquiry} />

      <SectionTransitionDivider
        type="services-to-ecosystem"
        code="SEC. 04 // CONNECTED DIGITAL APPROACH"
        kanji="連係"
      />

      {/* SECTION 04 — SERVICE CONNECTION (One connected ecosystem, four interconnected divisions) */}
      <ConnectedEcosystem />

      <SectionTransitionDivider
        type="statement-to-services"
        code="SEC. 05 // WHO WE WORK WITH"
        subtitle="AUTHENTIC SECTOR FOCUS"
        kanji="対象"
      />

      {/* SECTION 05 — WHO WE WORK WITH (Built around real businesses: Restaurants, Real Estate, Emerging Brands) */}
      <WhoWeWorkWith onOpenInquiry={onOpenInquiry} />

      <SectionTransitionDivider
        type="sectors-to-process"
        code="SEC. 06 // PROCESS & SPRINT RHYTHM"
        kanji="工程"
      />

      {/* SECTION 06 — OUR APPROACH (Ink black background, From Idea To Execution, 5-step process) */}
      <OurApproach />

      <SectionTransitionDivider
        type="process-to-about"
        code="SEC. 07 // STUDIO IDENTITY & PURPOSE"
        kanji="本質"
      />

      {/* SECTION 07 — ABOUT AKARI (Warm cream background, We Think Differently We Build With Purpose, official logo1.png) */}
      <AboutAkari />

      {/* SECTION 08 — CONTACT (Akari vermilion background, Let's Make Something Matter, verified contact details) */}
      <ContactSection onOpenInquiry={onOpenInquiry} />
    </div>
  );
}

import React from 'react';

export default function Marquee({
  items = [
    "RESTAURANT MARKETING",
    "LUXURY REAL ESTATE",
    "EXPRESSIVE BRUTALISM",
    "CUSTOM WEB DEVELOPMENT",
    "META & GOOGLE ADS",
    "EDITORIAL CINEMA",
    "BRAND IDENTITY",
    "COMMISSION-FREE DIRECT RESERVATIONS"
  ],
  reverse = false,
  speed = "28s",
  bg = "bg-ink",
  textColor = "text-cream",
  accentColor = "text-vermilion",
  borderTop = true,
  borderBottom = true,
}) {
  const content = items.map((text, idx) => (
    <div key={idx} className="flex items-center gap-6 whitespace-nowrap px-4">
      <span className="font-anton text-2xl md:text-4xl tracking-wide uppercase">
        {text}
      </span>
      <span className={`${accentColor} text-xl md:text-2xl font-serif select-none`}>
        朱
      </span>
      <span className={`${accentColor} text-xs font-space tracking-widest`}>
        ✦
      </span>
    </div>
  ));

  return (
    <div
      className={`relative w-full overflow-hidden py-4 md:py-6 ${bg} ${textColor} ${
        borderTop ? 'border-t border-ink/20 dark:border-cream/20' : ''
      } ${borderBottom ? 'border-b border-ink/20 dark:border-cream/20' : ''}`}
    >
      <div
        className={`flex w-fit ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: speed }}
      >
        {/* Render twice for continuous loop */}
        <div className="flex shrink-0 items-center">{content}</div>
        <div className="flex shrink-0 items-center">{content}</div>
      </div>
    </div>
  );
}

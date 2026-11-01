import React from 'react';

export default function SectionHeader({
  index = "01",
  tag = "SECTION",
  kanji = "朱",
  title = "FEATURED SECTION",
  subtitle = "",
  dark = false,
  className = "",
}) {
  return (
    <div className={`w-full mb-12 md:mb-20 ${className}`}>
      {/* Top Editorial Index & Tag Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-current opacity-70 mb-6 font-space text-xs md:text-sm tracking-widest uppercase">
        <div className="flex items-center gap-3">
          <span className="text-vermilion font-bold font-mono">[{index}]</span>
          <span>// {tag}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-serif text-lg text-vermilion font-bold">{kanji}</span>
          <span className="hidden sm:inline opacity-50">AKARI STUDIOS</span>
        </div>
      </div>

      {/* Main Grid: Headline + Context */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-8">
          <h2 className="headline-section text-current">
            {title}
          </h2>
        </div>

        {subtitle && (
          <div className="lg:col-span-4 lg:pl-6 pb-2">
            <p className={`font-sans text-sm md:text-base leading-relaxed ${dark ? 'text-cream/80' : 'text-ink/80'}`}>
              {subtitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

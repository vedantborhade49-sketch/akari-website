import React from 'react';

// Authentic Japanese Seigaiha wave arches SVG (青海波)
export function SeigaihaPattern({ className = '', stroke = '#C83E17', strokeWidth = 1.6 }) {
  return (
    <svg
      viewBox="0 0 180 120"
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
    >
      {[20, 36, 52, 68, 84].map((r) => (
        <circle key={`c1-${r}`} cx="30" cy="120" r={r} />
      ))}
      {[20, 36, 52, 68, 84].map((r) => (
        <circle key={`c2-${r}`} cx="110" cy="120" r={r} />
      ))}
      {[20, 36, 52, 68, 84].map((r) => (
        <circle key={`c3-${r}`} cx="70" cy="65" r={r} />
      ))}
      {[20, 36, 52, 68, 84].map((r) => (
        <circle key={`c4-${r}`} cx="-10" cy="65" r={r} />
      ))}
      {[20, 36, 52, 68, 84].map((r) => (
        <circle key={`c5-${r}`} cx="150" cy="65" r={r} />
      ))}
      {[20, 36, 52, 68].map((r) => (
        <circle key={`c6-${r}`} cx="30" cy="10" r={r} />
      ))}
      {[20, 36, 52, 68].map((r) => (
        <circle key={`c7-${r}`} cx="110" cy="10" r={r} />
      ))}
    </svg>
  );
}

// Expressive Vermilion Painterly Brush Stroke Underline
export function BrushStroke({ className = '', color = '#C83E17' }) {
  return (
    <svg
      viewBox="0 0 380 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 18C45 9 125 5 210 9C265 11.5 325 18 376 22C320 26 210 25 125 21C68 18.5 22 23 2 18Z"
        fill={color}
      />
      <path
        d="M30 19C95 11 200 7 345 15C365 17 375 20 378 22"
        stroke="#A5300F"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M10 21C50 16 110 14 180 16"
        stroke="#DE4D23"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Halftone Dot Matrix Pattern component
export function DotMatrix({ cols = 8, rows = 5, className = '', dotColor = 'bg-gold/60' }) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(<div key={`${r}-${c}`} className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />);
    }
  }
  return (
    <div
      className={`grid gap-2.5 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {dots}
    </div>
  );
}

// Technical Crosshair Registration Marks
export function Crosshairs({ className = '', color = 'border-ink' }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${color}`} />
      <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${color}`} />
      <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${color}`} />
      <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${color}`} />
    </div>
  );
}

// Technical Editorial Micro-Badge
export function TechnicalBadge({
  text = 'AKARI // 01',
  variant = 'ink', // 'ink', 'vermilion', 'cream', 'gold'
  className = '',
}) {
  const variantStyles = {
    ink: 'bg-ink text-cream border-ink',
    vermilion: 'bg-vermilion text-cream border-vermilion',
    cream: 'bg-cream text-ink border-ink/40',
    gold: 'bg-gold/20 text-gold border-gold/40',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 font-space text-[10px] font-bold tracking-widest uppercase border ${variantStyles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 bg-vermilion inline-block shrink-0" />
      <span>{text}</span>
    </span>
  );
}

// Vertical Japanese Annotation Guide
export function VerticalJapaneseGuide({
  text = 'ア カ リ ス タ ジ オ •',
  className = 'hidden md:flex absolute left-4 lg:left-6 top-20 bottom-24 flex-col items-center justify-start pointer-events-none z-20',
  color = 'text-gold',
  lineColor = 'bg-gold/30',
}) {
  return (
    <div className={className}>
      <div
        className={`font-space text-xs tracking-[0.45em] ${color} font-bold uppercase select-none`}
        style={{ writingMode: 'vertical-rl' }}
      >
        {text}
      </div>
      <div className={`w-[1px] flex-1 ${lineColor} mt-4`} />
    </div>
  );
}

// Authentic Akari Vermilion Inkan Stamp Seal
export function InkanStamp({ size = 'md', className = '' }) {
  const sizeMap = {
    sm: 'w-8 h-8 text-lg border-2',
    md: 'w-12 h-12 text-2xl border-2 sm:border-4',
    lg: 'w-16 h-16 text-3xl sm:text-4xl border-4',
    xl: 'w-24 h-24 text-5xl sm:text-6xl border-4 sm:border-8',
  };

  return (
    <div
      className={`inline-flex items-center justify-center border-vermilion bg-vermilion/10 text-vermilion shadow-sm select-none relative ${sizeMap[size]} ${className}`}
    >
      <span className="font-serif font-black leading-none">朱</span>
      {/* Corner crosshairs */}
      <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-vermilion" />
      <span className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-vermilion" />
    </div>
  );
}

// Section Transition Graphic Systems between alternating color backgrounds
export function SectionTransitionDivider({
  type = 'default',
  code = 'SEC.TRANSITION // 01',
  kanji = '転',
  subtitle = 'SYSTEM PIPELINE ACTIVE',
}) {
  if (type === 'hero-to-statement') {
    return (
      <div className="relative w-full overflow-hidden bg-vermilion select-none z-20">
        {/* Slanted ink wedge transition */}
        <div className="w-full h-8 sm:h-12 bg-ink transform -skew-y-1 origin-top-left border-t-2 border-cream/30 flex items-center justify-between px-6 lg:px-14">
          <div className="flex items-center gap-3 font-space text-[10px] sm:text-xs tracking-widest text-cream uppercase">
            <span className="w-2 h-2 bg-vermilion inline-block animate-ping" />
            <span className="font-bold text-vermilion font-mono">PHASE 01 ➔ 02</span>
            <span className="text-cream/60 hidden sm:inline">// {code}</span>
          </div>
          <div className="flex items-center gap-4 text-cream font-space text-[10px] tracking-widest uppercase">
            <span className="font-serif text-sm font-bold text-vermilion">{kanji}</span>
            <span className="hidden md:inline text-cream/40">[KINETIC TRANSITION]</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'statement-to-services') {
    return (
      <div className="relative w-full overflow-hidden bg-ink select-none z-20">
        <div className="w-full py-3 bg-cream text-ink border-y-2 border-ink flex items-center justify-between px-6 lg:px-14 font-space text-[10px] sm:text-xs tracking-widest uppercase shadow-md">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-vermilion inline-block" />
            <span className="font-bold text-ink">{code}</span>
            <span className="text-ink/50 hidden sm:inline">[{subtitle}]</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-serif text-sm text-vermilion font-black">{kanji}</span>
            <span className="font-mono text-ink/60">35.6762° N</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'services-to-ecosystem') {
    return (
      <div className="relative w-full py-2 bg-cream text-ink select-none border-b-2 border-ink z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 flex items-center justify-between font-space text-[10px] tracking-widest uppercase text-ink/70">
          <div className="flex items-center gap-4">
            <span className="text-vermilion font-bold">CONNECTIVITY BUS //</span>
            <span className="hidden sm:inline">01 PERFORMANCE ➔ 02 TECH ➔ 03 SOCIAL ➔ 04 SEO</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-vermilion font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-vermilion animate-pulse" />
            <span>FULL ECOSYSTEM LINKED</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sectors-to-process') {
    return (
      <div className="relative w-full overflow-hidden bg-cream select-none z-20">
        <div className="w-full py-3 bg-ink text-cream border-t-4 border-vermilion flex items-center justify-between px-6 lg:px-14 font-space text-[10px] sm:text-xs tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-vermilion animate-ping" />
            <span className="font-bold text-cream">{code}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-serif text-xs text-vermilion font-bold">{kanji}</span>
            <span className="text-cream/50 font-mono hidden sm:inline">[EXECUTION SPRINT]</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'process-to-about') {
    return (
      <div className="relative w-full overflow-hidden bg-ink select-none z-20">
        <div className="w-full py-3 bg-cream text-ink border-y-2 border-ink flex items-center justify-between px-6 lg:px-14 font-space text-[10px] sm:text-xs tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-vermilion inline-block" />
            <span className="font-bold">{code}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-serif text-xs text-vermilion font-bold">{kanji}</span>
            <span className="text-ink/60 font-mono">[STUDIO CULTURE & VALUES]</span>
          </div>
        </div>
      </div>
    );
  }

  // Default fallback
  return (
    <div className="w-full py-2.5 px-6 lg:px-12 flex items-center justify-between font-space text-[10px] tracking-widest uppercase border-y border-ink/20 bg-ink text-cream/70 select-none z-20">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 bg-vermilion inline-block animate-pulse" />
        <span className="font-bold text-cream">{code}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-serif text-xs text-vermilion font-bold">{kanji}</span>
        <span className="hidden sm:inline text-cream/40">[35.6762° N, 139.6503° E]</span>
      </div>
    </div>
  );
}

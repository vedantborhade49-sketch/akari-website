import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar({ onOpenInquiry }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.isMuted());

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleSound = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) sound.click();
  };

  const navLinks = [
    { name: 'WORK', path: '/work' },
    { name: 'SERVICES', path: '/services' },
    { name: 'ABOUT', path: '/about' },
  ];

  return (
    <>
      <header className="sticky top-0 z-[990] w-full bg-cream/95 backdrop-blur-md border-b border-ink/20 transition-all select-none">
        <div className="flex items-center justify-between px-6 lg:px-12 py-3.5">
          {/* Left Brand Wordmark: AKARI brush + STUDIOS° */}
          <Link
            to="/"
            onClick={() => sound.click()}
            className="flex items-center gap-2 group shrink-0"
          >
            {/* Expressive Vermilion Brush Script AKARI */}
            <span className="font-serif italic text-2xl sm:text-3xl font-black text-vermilion tracking-tight group-hover:scale-105 transition-transform duration-300">
              AKARI
            </span>
            <span className="font-space text-xs sm:text-sm font-bold tracking-[0.25em] text-ink uppercase ml-0.5">
              S T U D I O S °
            </span>
          </Link>

          {/* Thin Editorial Hairline Guide extending across */}
          <div className="flex-1 h-[1px] bg-ink/20 mx-6 hidden xl:block pointer-events-none" />

          {/* Desktop Navigation Pill Buttons */}
          <nav className="hidden lg:flex items-center gap-3">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onMouseEnter={() => sound.hover()}
                  onClick={() => sound.click()}
                  className={`rounded-full border px-5 py-1.5 font-space text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'border-ink bg-ink text-cream'
                      : 'border-ink/80 text-ink hover:bg-ink hover:text-cream'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Solid Vermilion CTA Pill Button */}
            <button
              onClick={() => {
                sound.click();
                onOpenInquiry();
              }}
              className="ml-1 rounded-full bg-vermilion text-cream px-6 py-2 font-space text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-ink hover:text-cream transition-all duration-300 flex items-center gap-1.5 group"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Subtle Audio Switch */}
            <button
              onClick={toggleSound}
              className="ml-2 w-8 h-8 rounded-full border border-ink/30 flex items-center justify-center text-ink/70 hover:border-vermilion hover:text-vermilion transition-colors"
              title="Toggle Audio Feedback"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 opacity-50" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-vermilion" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => {
                sound.click();
                onOpenInquiry();
              }}
              className="rounded-full bg-vermilion text-cream px-4 py-1.5 font-space text-xs font-bold uppercase tracking-wider"
            >
              PROJECT ↗
            </button>

            <button
              onClick={() => {
                sound.click();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="w-9 h-9 border border-ink rounded-full flex items-center justify-center text-ink hover:bg-vermilion hover:border-vermilion hover:text-cream transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[61px] z-[980] bg-ink text-cream flex flex-col justify-between p-6 sm:p-10 overflow-y-auto lg:hidden">
          <div className="space-y-6 pt-4">
            <div className="font-space text-xs text-cream/40 tracking-widest uppercase pb-2 border-b border-cream/20">
              NAVIGATION // 案内
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    sound.click();
                    setIsMenuOpen(false);
                  }}
                  className="group flex items-baseline justify-between py-3 border-b border-cream/15 hover:border-vermilion transition-colors"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-vermilion">0{idx + 1}</span>
                    <span className="font-anton text-4xl uppercase tracking-wide group-hover:text-vermilion transition-colors">
                      {link.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-cream/40 group-hover:text-vermilion transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <button
              onClick={() => {
                sound.click();
                setIsMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full rounded-full bg-vermilion text-cream py-3.5 font-space text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-cream hover:text-ink transition-colors"
            >
              <span>START A PROJECT ↗</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

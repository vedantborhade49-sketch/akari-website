import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Clock, MapPin, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { sound } from '../utils/audio';
import { AGENCY_INFO } from '../data/agencyData';

export default function Navbar({ onOpenInquiry }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.isMuted());
  const [tokyoTime, setTokyoTime] = useState('');
  const [hoveredNavImage, setHoveredNavImage] = useState(null);

  // Live Tokyo clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Tokyo',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setTokyoTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleSound = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) sound.click();
  };

  const navLinks = [
    {
      name: 'WORK',
      path: '/work',
      desc: 'Selected Hospitality & Property Campaigns',
      preview: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'SERVICES',
      path: '/services',
      desc: 'The 10 Core Agency Disciplines',
      preview: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'ABOUT',
      path: '/about',
      desc: 'Expressive Brutalism & Studio Standards',
      preview: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'CONTACT',
      path: '/contact',
      desc: 'Tokyo Studio & Global Inquiries',
      preview: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-[990] w-full bg-cream/95 backdrop-blur-md border-b border-ink/15 transition-all">
        {/* Top Operational Status Bar */}
        <div className="hidden md:flex items-center justify-between px-6 lg:px-12 py-1.5 bg-ink text-cream text-[11px] font-space tracking-widest uppercase border-b border-cream/10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-vermilion animate-pulse" />
              <span className="text-cream/90">{AGENCY_INFO.status}</span>
            </div>
            <div className="flex items-center gap-2 text-cream/60">
              <MapPin className="w-3 h-3 text-vermilion" />
              <span>{AGENCY_INFO.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-mono text-cream/90">
              <Clock className="w-3 h-3 text-vermilion" />
              <span>TOKYO JST: {tokyoTime || '19:42:00'}</span>
            </div>

            {/* Audio Feedback Switch */}
            <button
              onClick={toggleSound}
              className="flex items-center gap-1.5 text-cream/70 hover:text-vermilion transition-colors focus:outline-none"
              title="Toggle Audio Feedback"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-cream/40" />
                  <span className="text-[10px]">SOUND: OFF</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-vermilion animate-pulse" />
                  <span className="text-[10px] text-vermilion font-bold">SOUND: ON</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between px-6 lg:px-12 py-4">
          {/* Brand Wordmark & Stamp */}
          <Link
            to="/"
            onClick={() => sound.click()}
            className="flex items-center gap-3.5 group select-none"
          >
            {/* Vermilion Inkan Stamp */}
            <div className="w-9 h-9 md:w-10 md:h-10 border-2 border-vermilion bg-vermilion/5 flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif text-xl md:text-2xl font-black text-vermilion leading-none">
                朱
              </span>
              <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-vermilion" />
              <span className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-vermilion" />
            </div>

            {/* Typography Mark */}
            <div>
              <div className="font-anton text-2xl md:text-3xl tracking-tight uppercase text-ink group-hover:text-vermilion transition-colors leading-none">
                AKARI STUDIOS
              </div>
              <div className="font-space text-[9px] md:text-[10px] font-bold tracking-widest text-ink/60 uppercase">
                CREATIVE × DIGITAL × GROWTH
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-space text-xs tracking-widest font-bold uppercase">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onMouseEnter={() => sound.hover()}
                  onClick={() => sound.click()}
                  className={`relative py-1 transition-colors ${
                    isActive ? 'text-vermilion' : 'text-ink hover:text-vermilion'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vermilion" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <MagneticButton
              onClick={() => {
                sound.click();
                onOpenInquiry();
              }}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              START A PROJECT
            </MagneticButton>

            {/* Mobile / Fullscreen Menu Toggle */}
            <button
              onClick={() => {
                sound.click();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="w-10 h-10 border-2 border-ink flex items-center justify-center hover:bg-vermilion hover:border-vermilion hover:text-cream transition-colors lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Brutalist Menu Overlay (Mobile & Tablet) */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[73px] md:top-[103px] z-[980] bg-ink text-cream flex flex-col justify-between p-6 md:p-12 overflow-y-auto lg:hidden">
          <div className="space-y-4">
            <div className="font-space text-xs text-cream/40 tracking-widest uppercase pb-2 border-b border-cream/20">
              NAVIGATION DIRECTORY // 案内
            </div>
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    sound.click();
                    setIsMenuOpen(false);
                  }}
                  className="group flex items-baseline justify-between py-2 border-b border-cream/15 hover:border-vermilion transition-colors"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-vermilion">0{idx + 1}</span>
                    <span className="font-anton text-4xl sm:text-5xl uppercase tracking-wide group-hover:text-vermilion transition-colors">
                      {link.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-cream/40 group-hover:text-vermilion group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-8 space-y-6">
            <MagneticButton
              onClick={() => {
                sound.click();
                setIsMenuOpen(false);
                onOpenInquiry();
              }}
              variant="primary"
              size="lg"
              className="w-full"
              icon={<Sparkles className="w-4 h-4" />}
            >
              START A PROJECT BRIEF
            </MagneticButton>

            <div className="flex justify-between items-center text-xs font-space text-cream/60 uppercase">
              <span>TOKYO // {tokyoTime}</span>
              <button
                onClick={toggleSound}
                className="text-vermilion font-bold"
              >
                SOUND: {isMuted ? 'OFF' : 'ON'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

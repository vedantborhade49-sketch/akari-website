import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../utils/audio';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stampRevealed, setStampRevealed] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    // Quick, purposeful counter progression (~950ms)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 18) + 8;
        return Math.min(100, prev + increment);
      });
    }, 55);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress === 100) {
      setStampRevealed(true);
      sound.stamp();
      const timer = setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete();
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-vermilion flex flex-col justify-between p-6 sm:p-10 md:p-14 text-cream overflow-hidden selection:bg-ink selection:text-cream"
        >
          {/* Halftone texture overlay */}
          <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

          {/* Top metadata bar */}
          <div className="relative z-10 flex justify-between items-center font-space text-[11px] md:text-xs tracking-widest text-cream uppercase pb-4 border-b border-cream/30">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-ink inline-block" />
              <span className="font-bold text-ink">AKARI STUDIOS</span>
              <span className="text-cream font-serif font-black text-sm">朱</span>
            </div>
            <div className="font-mono text-cream/80">
              GINZA, TOKYO // 35.6762° N
            </div>
          </div>

          {/* Center Stage: Official Logo & Oversized Anton Brand Lettering */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center space-y-6">
            
            {/* Official Logo in Brutalist Cream Box */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={stampRevealed ? { scale: [1.08, 1], opacity: 1 } : { opacity: 0.95 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-cream p-4 sm:p-6 border-4 border-ink shadow-[8px_8px_0px_#211B18] relative"
            >
              <img
                src="/logo1.png"
                alt="Akari Studios Official Mark"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain mx-auto"
              />
              <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-ink" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-ink" />
              <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-ink" />
              <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-ink" />
            </motion.div>

            {/* Oversized Brand Typography */}
            <div className="space-y-1">
              <h1 className="font-anton text-5xl sm:text-7xl md:text-8xl text-ink tracking-tight uppercase leading-none drop-shadow-sm">
                AKARI STUDIOS
              </h1>
              <div className="font-space text-xs sm:text-sm tracking-widest text-cream font-bold uppercase">
                CREATIVE × DIGITAL × GROWTH
              </div>
            </div>

            {/* Percentage Display */}
            <div className="font-anton text-6xl sm:text-8xl text-cream tracking-tight flex items-baseline justify-center">
              <span>{progress.toString().padStart(3, '0')}</span>
              <span className="text-ink text-3xl sm:text-5xl ml-1">%</span>
            </div>
          </div>

          {/* Bottom Bar: Thin Editorial Progress Indicator */}
          <div className="relative z-10 w-full space-y-2">
            <div className="flex justify-between items-center text-[10px] sm:text-xs font-space tracking-widest text-cream font-bold uppercase">
              <span>INITIALIZING DIGITAL ARCHITECTURE</span>
              <span className="font-mono text-ink">[60 FPS ENGINE]</span>
            </div>
            
            {/* Thin editorial bar */}
            <div className="w-full h-1.5 bg-ink/30 border border-ink/40 overflow-hidden">
              <motion.div
                className="h-full bg-cream"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


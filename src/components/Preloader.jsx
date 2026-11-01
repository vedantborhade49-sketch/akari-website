import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../utils/audio';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stampRevealed, setStampRevealed] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Quick, punchy counter progression
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating counter
        const increment = Math.floor(Math.random() * 14) + 6;
        return Math.min(100, prev + increment);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setStampRevealed(true);
      sound.stamp();
      const timer = setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete();
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-ink flex flex-col justify-between p-6 md:p-12 text-cream overflow-hidden"
        >
          {/* Top metadata */}
          <div className="flex justify-between items-start font-space text-xs tracking-widest text-cream/60 uppercase">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-vermilion inline-block animate-ping"></span>
              <span>AKARI STUDIOS [SYS.INITIALIZE]</span>
            </div>
            <div>TOKYO // 35.6762° N, 139.6503° E</div>
          </div>

          {/* Center Stage: Kanji Stamp & Progress */}
          <div className="flex flex-col items-center justify-center my-auto">
            {/* The Vermilion Seal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={stampRevealed ? { scale: [1.2, 1], opacity: 1 } : { opacity: 0.15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={`w-28 h-28 md:w-36 md:h-36 border-4 flex flex-col items-center justify-center mb-8 relative transition-colors duration-300 ${
                stampRevealed ? 'border-vermilion bg-vermilion/10 shadow-[0_0_50px_rgba(200,62,23,0.35)]' : 'border-cream/20'
              }`}
            >
              <span className="font-serif text-5xl md:text-7xl font-black text-vermilion select-none">
                朱
              </span>
              <span className="font-space text-[9px] tracking-widest text-vermilion font-bold absolute bottom-2">
                AKARI
              </span>
              {/* Corner decorative markers */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-vermilion" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-vermilion" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-vermilion" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-vermilion" />
            </motion.div>

            {/* Giant Anton Percentage Counter */}
            <div className="font-anton text-7xl md:text-9xl text-cream tracking-tight flex items-baseline">
              <span>{progress.toString().padStart(3, '0')}</span>
              <span className="text-vermilion text-4xl md:text-6xl ml-2">%</span>
            </div>

            <div className="font-space text-xs md:text-sm tracking-widest text-cream/70 uppercase mt-4">
              TURNING VISION INTO DIGITAL REALITY
            </div>
          </div>

          {/* Bottom Bar: Loading Progress Line */}
          <div className="w-full">
            <div className="flex justify-between items-center text-[10px] md:text-xs font-space tracking-widest text-cream/40 mb-2 uppercase">
              <span>EXPRESSIVE BRUTALISM × EDITORIAL MOTION</span>
              <span>[EST. 2024]</span>
            </div>
            <div className="w-full h-1 bg-cream/15 overflow-hidden">
              <motion.div
                className="h-full bg-vermilion"
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

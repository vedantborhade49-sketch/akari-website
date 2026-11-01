import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, TrendingUp, Calendar, Layers, ShieldCheck } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { sound } from '../utils/audio';

export default function CaseStudyDrawer({ project, isOpen, onClose, onInquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9990] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl h-full bg-cream text-ink z-10 overflow-y-auto flex flex-col border-l-2 border-ink shadow-2xl selection:bg-vermilion selection:text-cream"
          >
            {/* Header bar */}
            <div className="sticky top-0 z-20 bg-cream/95 backdrop-blur-md border-b border-ink/20 px-6 md:px-10 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-vermilion inline-block" />
                <span className="font-space text-xs tracking-widest font-bold uppercase text-ink/70">
                  CASE STUDY ARCHIVE // {project.category}
                </span>
              </div>
              <button
                onClick={() => {
                  sound.click();
                  onClose();
                }}
                className="w-10 h-10 border border-ink/30 hover:border-vermilion hover:bg-vermilion hover:text-cream flex items-center justify-center transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-12 space-y-12">
              {/* Title & Client Metadata */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="brutalist-tag bg-vermilion text-cream">
                    {project.category}
                  </span>
                  <span className="brutalist-tag border border-ink/30 text-ink">
                    <Calendar className="w-3 h-3 text-vermilion" /> {project.year}
                  </span>
                  <span className="brutalist-tag border border-ink/30 text-ink">
                    <ShieldCheck className="w-3 h-3 text-vermilion" /> CLIENT: {project.client}
                  </span>
                </div>

                <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.92] text-ink mb-6">
                  {project.title}
                </h1>

                <p className="font-sans text-lg md:text-xl text-ink/80 leading-relaxed max-w-2xl">
                  {project.excerpt}
                </p>
              </div>

              {/* Primary Image */}
              <div className="relative border-2 border-ink overflow-hidden group">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-[380px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-ink text-cream px-3 py-1 font-space text-[10px] tracking-widest uppercase">
                  FIGURE 01.0 // PRIMARY VISUAL ASSET
                </div>
              </div>

              {/* Verified Commercial Impact Box */}
              <div className="bg-ink text-cream p-8 md:p-10 border-2 border-ink relative overflow-hidden">
                <div className="flex items-center gap-3 text-vermilion font-space text-xs tracking-widest uppercase mb-4 font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>VERIFIED COMMERCIAL PERFORMANCE</span>
                </div>

                <div className="font-anton text-2xl md:text-4xl text-vermilion uppercase mb-8">
                  {project.metrics.headline}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-cream/20">
                  <div>
                    <div className="font-anton text-4xl md:text-5xl text-cream mb-1">
                      {project.metrics.stat1}
                    </div>
                    <div className="font-space text-xs text-cream/60 uppercase tracking-wider">
                      {project.metrics.label1}
                    </div>
                  </div>
                  <div>
                    <div className="font-anton text-4xl md:text-5xl text-gold mb-1">
                      {project.metrics.stat2}
                    </div>
                    <div className="font-space text-xs text-cream/60 uppercase tracking-wider">
                      {project.metrics.label2}
                    </div>
                  </div>
                  <div>
                    <div className="font-anton text-4xl md:text-5xl text-vermilion mb-1">
                      {project.metrics.stat3}
                    </div>
                    <div className="font-space text-xs text-cream/60 uppercase tracking-wider">
                      {project.metrics.label3}
                    </div>
                  </div>
                </div>
              </div>

              {/* The Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="p-6 md:p-8 border border-ink/20 bg-cream-light">
                  <div className="font-space text-xs font-bold text-vermilion tracking-widest uppercase mb-3">
                    // 01 THE BOTTLENECK
                  </div>
                  <h3 className="font-anton text-2xl uppercase mb-3 text-ink">
                    THE STRATEGIC CHALLENGE
                  </h3>
                  <p className="font-sans text-sm md:text-base text-ink/80 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 md:p-8 border border-ink/20 bg-cream-light">
                  <div className="font-space text-xs font-bold text-vermilion tracking-widest uppercase mb-3">
                    // 02 THE INTERVENTION
                  </div>
                  <h3 className="font-anton text-2xl uppercase mb-3 text-ink">
                    THE AKARI SOLUTION
                  </h3>
                  <p className="font-sans text-sm md:text-base text-ink/80 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <div className="flex items-center gap-2 pb-3 border-b border-ink/20 mb-6 font-space text-xs tracking-widest font-bold uppercase text-ink/70">
                  <Layers className="w-4 h-4 text-vermilion" />
                  <span>DEPLOYED DELIVERABLES & INFRASTRUCTURE</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 border border-ink/15 bg-cream/50"
                    >
                      <CheckCircle2 className="w-5 h-5 text-vermilion shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-ink/90 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <div className="font-space text-xs tracking-widest font-bold uppercase text-ink/70 mb-4">
                    // PRODUCTION ARTIFACTS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.slice(1).map((img, i) => (
                      <div key={i} className="border border-ink/20 overflow-hidden">
                        <img
                          src={img}
                          alt={`${project.title} detail ${i}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Banner */}
              <div className="p-8 border-2 border-vermilion bg-vermilion/5 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-anton text-2xl md:text-3xl uppercase text-ink mb-1">
                    READY FOR SIMILAR METRICS?
                  </h4>
                  <p className="font-sans text-sm text-ink/70">
                    Deploy our specialized strike team for your brand.
                  </p>
                </div>
                <MagneticButton
                  onClick={() => {
                    onClose();
                    if (onInquire) onInquire(project.category);
                  }}
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  START A BRIEF
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

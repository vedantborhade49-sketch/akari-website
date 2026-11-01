import React, { useState } from 'react';
import { ArrowUpRight, Filter, LayoutGrid, List, Sparkles, TrendingUp, Lock } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import MagneticButton from '../components/MagneticButton';
import { CASE_STUDIES } from '../data/agencyData';
import { sound } from '../utils/audio';

export default function Work({ onSelectCaseStudy, onOpenInquiry }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const categories = [
    'ALL',
    'Hospitality & Dining',
    'Real Estate & Property',
    'Brand Identity & Creative Direction',
    'Software & Digital Solutions',
  ];

  const filteredStudies =
    activeFilter === 'ALL'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeFilter);

  return (
    <div className="w-full bg-cream text-ink bg-grain py-12 md:py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <SectionHeader
          index="01"
          tag="PROJECT ARCHIVE"
          kanji="作品"
          title="SELECTED WORKS & CAMPAIGNS"
          subtitle="Explore case studies across high-concept hospitality, luxury residential real estate, and scalable digital systems."
        />

        {/* Filter Controls & View Toggle Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b-2 border-ink mb-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.click();
                  setActiveFilter(cat);
                }}
                className={`px-4 py-2 font-space text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeFilter === cat
                    ? 'border-vermilion bg-vermilion text-cream'
                    : 'border-ink/20 hover:border-ink bg-cream-light text-ink/80'
                }`}
              >
                {cat === 'ALL' ? 'ALL DISCIPLINES [06]' : cat}
              </button>
            ))}
          </div>

          {/* Grid vs List toggle */}
          <div className="flex items-center gap-2 border border-ink/30 p-1 bg-cream-light shrink-0">
            <button
              onClick={() => {
                sound.click();
                setViewMode('grid');
              }}
              className={`p-1.5 transition-colors ${
                viewMode === 'grid' ? 'bg-ink text-cream' : 'text-ink/60 hover:text-ink'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                sound.click();
                setViewMode('list');
              }}
              className={`p-1.5 transition-colors ${
                viewMode === 'list' ? 'bg-ink text-cream' : 'text-ink/60 hover:text-ink'
              }`}
              title="Editorial List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Projects View */}
        {viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {filteredStudies.map((study, idx) => (
              <div
                key={study.id}
                onClick={() => {
                  sound.click();
                  onSelectCaseStudy(study);
                }}
                data-cursor="view"
                data-cursor-text="VIEW"
                className="group border-2 border-ink bg-cream-light p-6 cursor-pointer flex flex-col justify-between hover:border-vermilion hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="overflow-hidden border border-ink relative mb-6">
                    <img
                      src={study.thumbnail}
                      alt={study.title}
                      className="w-full h-72 sm:h-84 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-ink text-cream font-space text-[10px] tracking-widest px-2.5 py-1 uppercase">
                      NO. 0{idx + 1} // {study.category}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="brutalist-tag bg-vermilion text-cream">
                      {study.category}
                    </span>
                    <span className="brutalist-tag border border-ink/30 text-ink">
                      {study.year}
                    </span>
                  </div>

                  <h3 className="font-anton text-3xl sm:text-4xl text-ink group-hover:text-vermilion transition-colors uppercase leading-none mb-4">
                    {study.title}
                  </h3>

                  <p className="font-sans text-sm text-ink/75 leading-relaxed mb-6">
                    {study.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-ink/15 flex items-center justify-between">
                  <div className="font-anton text-lg text-vermilion uppercase">
                    {study.metrics.headline}
                  </div>
                  <div className="w-9 h-9 border border-ink/40 group-hover:border-vermilion group-hover:bg-vermilion group-hover:text-cream flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Editorial List View */
          <div className="divide-y-2 divide-ink border-y-2 border-ink">
            {filteredStudies.map((study, idx) => (
              <div
                key={study.id}
                onClick={() => {
                  sound.click();
                  onSelectCaseStudy(study);
                }}
                data-cursor="view"
                data-cursor-text="VIEW"
                className="py-8 group cursor-pointer hover:bg-vermilion/5 transition-colors px-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-1 font-mono text-sm font-bold text-vermilion">
                    0{idx + 1}
                  </div>

                  <div className="lg:col-span-5">
                    <div className="text-[10px] font-space text-ink/50 uppercase tracking-widest mb-1">
                      CLIENT: {study.client} // {study.year}
                    </div>
                    <h3 className="font-anton text-3xl md:text-4xl uppercase text-ink group-hover:text-vermilion transition-colors">
                      {study.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-3">
                    <span className="brutalist-tag bg-ink text-cream mb-1">
                      {study.category}
                    </span>
                    <div className="font-space text-xs text-vermilion font-bold tracking-wider uppercase mt-1">
                      {study.metrics.headline}
                    </div>
                  </div>

                  <div className="lg:col-span-3 flex justify-end items-center gap-4">
                    <span className="font-space text-xs font-bold uppercase tracking-wider text-ink/60 group-hover:text-vermilion hidden sm:inline">
                      VIEW CASE STUDY
                    </span>
                    <div className="w-10 h-10 border border-ink group-hover:border-vermilion group-hover:bg-vermilion group-hover:text-cream flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Private Investor Vault Banner */}
        <div className="mt-20 p-8 md:p-12 border-2 border-ink bg-ink text-cream flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-vermilion font-space text-xs tracking-widest uppercase font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>PRIVATE ARCHIVE // RESTRICTED ACCESS</span>
            </div>
            <h3 className="font-anton text-3xl sm:text-4xl uppercase text-cream">
              NEED PRIVATE DEVELOPMENT CASE STUDIES?
            </h3>
            <p className="font-sans text-sm text-cream/70 leading-relaxed">
              Certain luxury hospitality brand acquisitions and private real estate pre-sales are protected by bilateral confidentiality agreements. Contact our Tokyo office for accredited NDA access.
            </p>
          </div>

          <MagneticButton
            onClick={() => onOpenInquiry('Restricted Archive')}
            variant="primary"
            size="lg"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            REQUEST NDA ACCESS
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}

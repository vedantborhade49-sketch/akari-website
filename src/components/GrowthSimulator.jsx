import React, { useState } from 'react';
import { Utensils, Building2, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { sound } from '../utils/audio';

export default function GrowthSimulator({ onInquire }) {
  const [mode, setMode] = useState('hospitality'); // 'hospitality' or 'realestate'

  // Hospitality State
  const [seats, setSeats] = useState(65);
  const [avgCheck, setAvgCheck] = useState(120);
  const [currentOccupancy, setCurrentOccupancy] = useState(55);

  // Real Estate State
  const [projectValue, setProjectValue] = useState(24); // in millions
  const [units, setUnits] = useState(32);
  const [monthsTarget, setMonthsTarget] = useState(6);

  // Calculations for Hospitality
  const targetOccupancy = Math.min(95, currentOccupancy + 28);
  const extraGuestsPerMonth = Math.round(seats * ((targetOccupancy - currentOccupancy) / 100) * 26 * 1.5);
  const projectedMonthlyRevenueLift = extraGuestsPerMonth * avgCheck;
  const thirdPartyCommissionsSaved = Math.round(projectedMonthlyRevenueLift * 0.16);

  // Calculations for Real Estate
  const fasterSelloutDays = 45; // average sprint savings
  const carryingCostSavedPerDay = (projectValue * 1000000 * 0.08) / 365;
  const carryingCostSavings = Math.round(carryingCostSavedPerDay * fasterSelloutDays);
  const projectedLeadPipeline = Math.round(units * 14.5);

  return (
    <div className="w-full bg-ink text-cream border-2 border-ink p-6 md:p-12 relative overflow-hidden">
      {/* Background Japanese Watermark */}
      <div className="absolute right-4 bottom-2 font-serif text-[180px] md:text-[260px] text-cream/[0.03] select-none pointer-events-none leading-none">
        増
      </div>

      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-cream/15 mb-8">
        <div>
          <div className="flex items-center gap-2 font-space text-xs text-vermilion tracking-widest uppercase mb-2 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE COMMERCIAL ENGINE</span>
          </div>
          <h3 className="headline-service text-cream">
            PROJECTED GROWTH SIMULATOR
          </h3>
        </div>

        {/* Toggle Mode */}
        <div className="flex border-2 border-cream/30 p-1 bg-ink-soft">
          <button
            onClick={() => {
              sound.click();
              setMode('hospitality');
            }}
            className={`flex items-center gap-2 px-4 py-2 font-space text-xs font-bold uppercase tracking-wider transition-colors ${
              mode === 'hospitality'
                ? 'bg-vermilion text-cream'
                : 'text-cream/70 hover:text-cream'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>HOSPITALITY & DINING</span>
          </button>
          <button
            onClick={() => {
              sound.click();
              setMode('realestate');
            }}
            className={`flex items-center gap-2 px-4 py-2 font-space text-xs font-bold uppercase tracking-wider transition-colors ${
              mode === 'realestate'
                ? 'bg-vermilion text-cream'
                : 'text-cream/70 hover:text-cream'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>LUXURY PROPERTY</span>
          </button>
        </div>
      </div>

      {mode === 'hospitality' ? (
        /* Hospitality Simulator */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="font-space text-xs tracking-widest text-cream/60 uppercase">
              // ADJUST METRICS TO MATCH YOUR VENUE'S CURRENT PROFILE
            </div>

            {/* Slider 1 */}
            <div className="p-4 border border-cream/15 bg-ink-deep">
              <div className="flex justify-between items-center mb-2 font-space text-xs uppercase">
                <span className="text-cream/80">Total Seating Capacity</span>
                <span className="font-mono text-vermilion font-bold text-base">{seats} SEATS</span>
              </div>
              <input
                type="range"
                min="20"
                max="200"
                step="5"
                value={seats}
                onChange={(e) => setSeats(Number(e.target.value))}
                className="w-full accent-vermilion cursor-pointer"
              />
            </div>

            {/* Slider 2 */}
            <div className="p-4 border border-cream/15 bg-ink-deep">
              <div className="flex justify-between items-center mb-2 font-space text-xs uppercase">
                <span className="text-cream/80">Average Guest Check / Spend</span>
                <span className="font-mono text-vermilion font-bold text-base">${avgCheck} USD</span>
              </div>
              <input
                type="range"
                min="40"
                max="350"
                step="10"
                value={avgCheck}
                onChange={(e) => setAvgCheck(Number(e.target.value))}
                className="w-full accent-vermilion cursor-pointer"
              />
            </div>

            {/* Slider 3 */}
            <div className="p-4 border border-cream/15 bg-ink-deep">
              <div className="flex justify-between items-center mb-2 font-space text-xs uppercase">
                <span className="text-cream/80">Current Weekday Table Occupancy</span>
                <span className="font-mono text-vermilion font-bold text-base">{currentOccupancy}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="85"
                step="5"
                value={currentOccupancy}
                onChange={(e) => setCurrentOccupancy(Number(e.target.value))}
                className="w-full accent-vermilion cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-space text-cream/40 mt-1 uppercase">
                <span>Underutilized Floor</span>
                <span className="text-vermilion">Akari Target: {targetOccupancy}%</span>
              </div>
            </div>
          </div>

          {/* Results Output */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 border-2 border-vermilion bg-vermilion/10">
            <div>
              <div className="font-space text-xs text-vermilion font-bold tracking-widest uppercase mb-1">
                ESTIMATED MONTHLY COMMERCIAL UPSIDE
              </div>
              <div className="font-anton text-4xl sm:text-5xl md:text-6xl text-cream tracking-tight mb-4">
                +${projectedMonthlyRevenueLift.toLocaleString()}
                <span className="text-sm font-space text-cream/60 ml-2 tracking-normal uppercase">/MO</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-cream/20 text-xs font-space">
                <div className="flex justify-between items-center">
                  <span className="text-cream/70 uppercase">Incremental Monthly Covers:</span>
                  <span className="font-mono text-cream font-bold">+{extraGuestsPerMonth} GUESTS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cream/70 uppercase">3rd-Party Fees Saved (16% avg):</span>
                  <span className="font-mono text-gold font-bold">+${thirdPartyCommissionsSaved.toLocaleString()} /MO</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cream/70 uppercase">Annualized Topline Lift:</span>
                  <span className="font-mono text-vermilion font-bold">+${(projectedMonthlyRevenueLift * 12).toLocaleString()} /YR</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-cream/20">
              <MagneticButton
                onClick={() => onInquire && onInquire('Hospitality & Dining')}
                variant="primary"
                size="md"
                className="w-full"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                DEPLOY HOSPITALITY FUNNEL
              </MagneticButton>
            </div>
          </div>
        </div>
      ) : (
        /* Real Estate Simulator */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="font-space text-xs tracking-widest text-cream/60 uppercase">
              // ENTER DEVELOPMENT PARAMETERS TO PROJECT CONTRACT VELOCITY
            </div>

            {/* Slider 1 */}
            <div className="p-4 border border-cream/15 bg-ink-deep">
              <div className="flex justify-between items-center mb-2 font-space text-xs uppercase">
                <span className="text-cream/80">Gross Development Value (GDV)</span>
                <span className="font-mono text-vermilion font-bold text-base">${projectValue}M USD</span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="1"
                value={projectValue}
                onChange={(e) => setProjectValue(Number(e.target.value))}
                className="w-full accent-vermilion cursor-pointer"
              />
            </div>

            {/* Slider 2 */}
            <div className="p-4 border border-cream/15 bg-ink-deep">
              <div className="flex justify-between items-center mb-2 font-space text-xs uppercase">
                <span className="text-cream/80">Residential Units in Launch Phase</span>
                <span className="font-mono text-vermilion font-bold text-base">{units} UNITS</span>
              </div>
              <input
                type="range"
                min="6"
                max="120"
                step="2"
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="w-full accent-vermilion cursor-pointer"
              />
            </div>

            {/* Slider 3 */}
            <div className="p-4 border border-cream/15 bg-ink-deep">
              <div className="flex justify-between items-center mb-2 font-space text-xs uppercase">
                <span className="text-cream/80">Target Pre-Sale Sellout Window</span>
                <span className="font-mono text-vermilion font-bold text-base">{monthsTarget} MONTHS</span>
              </div>
              <input
                type="range"
                min="2"
                max="18"
                step="1"
                value={monthsTarget}
                onChange={(e) => setMonthsTarget(Number(e.target.value))}
                className="w-full accent-vermilion cursor-pointer"
              />
            </div>
          </div>

          {/* Results Output */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 border-2 border-gold bg-gold/10">
            <div>
              <div className="font-space text-xs text-gold font-bold tracking-widest uppercase mb-1">
                PROJECTED INTEREST & CARRYING SAVINGS
              </div>
              <div className="font-anton text-4xl sm:text-5xl md:text-6xl text-cream tracking-tight mb-4">
                +${carryingCostSavings.toLocaleString()}
                <span className="text-sm font-space text-cream/60 ml-2 tracking-normal uppercase">SAVED</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-cream/20 text-xs font-space">
                <div className="flex justify-between items-center">
                  <span className="text-cream/70 uppercase">Targeted HNW Investor Leads:</span>
                  <span className="font-mono text-cream font-bold">{projectedLeadPipeline} QUALIFIED LEADS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cream/70 uppercase">Average Days to Contract Reduction:</span>
                  <span className="font-mono text-vermilion font-bold">-{fasterSelloutDays} DAYS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cream/70 uppercase">Pre-Sale Velocity Multiple:</span>
                  <span className="font-mono text-gold font-bold">3.2x FASTER ABSORPTION</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-cream/20">
              <MagneticButton
                onClick={() => onInquire && onInquire('Real Estate & Property')}
                variant="gold"
                size="md"
                className="w-full"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                DEPLOY ARCHITECTURAL LAUNCH
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

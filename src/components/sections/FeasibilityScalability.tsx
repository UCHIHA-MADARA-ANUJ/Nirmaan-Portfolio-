"use client";
import React from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import SectionLabel from "@/components/ui/SectionLabel";
import { MARKET_SCALABILITY_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CheckCircle2, TrendingUp, Zap } from "lucide-react";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active) {
    if (payload) {
      if (payload.length > 0) {
        return (
          <div className="glass-panel p-5 rounded-3xl border border-signal text-xs font-display space-y-2 shadow-2xl bg-surface-2 text-white min-w-[180px]">
            <div className="font-extrabold text-signal font-mono pb-2 border-b border-white/10 uppercase tracking-wider">{label} PROJECTION</div>
            <div className="flex justify-between items-center gap-4 text-sm font-semibold pt-1">
              <span className="text-white/70 font-normal">Market Value:</span>
              <span className="font-mono text-electric font-bold">${payload[0].value} Billion USD</span>
            </div>
          </div>
        );
      }
    }
  }
  return null;
};

export default function FeasibilityScalability() {
  return (
    <section className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-16 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10">
      
      {/* Spotlights */}
      <div className="absolute top-1/3 left-1/4 w-[900px] h-[550px] bg-gradient-to-tr from-signal/15 via-electric/10 to-transparent blur-[180px] pointer-events-none -z-10 rounded-full" />

      {/* Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#121A16_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <SectionLabel status="SCALABILITY_ENGINE">13 // Economic & Expansion Viability</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Cheap to run. Built to <span className="text-signal underline">spread</span>.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
            An ultra-lean, asset-light software engine. By syndicating existing authorized CPCB processing fleets, NIRMAN scales without immense physical capital expenditure.
          </p>
        </div>

        {/* Deck (12 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left */}
          <div className="lg:col-span-6 glass-panel p-10 sm:p-14 rounded-[48px] border-2 border-white/10 flex flex-col justify-between space-y-10 relative overflow-hidden group hover:border-signal/80 transition-colors duration-500 shadow-2xl bg-surface-2/90">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-signal to-electric opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="space-y-6 z-10">
              <span className="font-mono text-xs text-signal tracking-widest uppercase font-bold block">
                ● FEASIBILITY SPECIFICATION
              </span>
              <h3 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
                Zero Heavy physical Infrastructure.
              </h3>
              <p className="font-body text-lg sm:text-2xl text-white/70 font-light leading-relaxed">
                We do not construct multi-crore metallurgical smelting facilities or purchase independent physical trucking fleets. We build the ultimate software layer.
              </p>
            </div>

            {/* List */}
            <div className="space-y-4 pt-8 border-t border-white/10 z-10">
              {[
                { title: "Fully Operational Prototype", desc: "Interactive citizen workflows validated across major tech metropolises." },
                { title: "Free Edge CDN", desc: "Vercel serverless edge deployment paradigms with zero upfront idle burn." },
                { title: "Policy Synchronized", desc: "100% aligned with Ministry of Environment EPR formal mandates." },
                { title: "Partners Provide Capacity", desc: "CPCB processors independently maintain physical logistics and acid scrubbers." },
              ].map((cov, idx) => (
                <motion.div
                  key={cov.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="p-5 sm:p-6 rounded-3xl bg-surface border border-white/10 flex items-start gap-5 hover:border-signal/60 transition-colors shadow-lg"
                >
                  <div className="w-8 h-8 rounded-xl bg-signal/20 text-signal font-black flex items-center justify-center font-mono text-sm shrink-0 mt-0.5 border border-signal/40 shadow-inner">
                    ✔
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">{cov.title}</h4>
                    <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">{cov.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10">
            
            {/* Top Loop */}
            <div className="glass-panel p-10 sm:p-14 rounded-[48px] border-2 border-white/10 space-y-8 relative overflow-hidden shadow-2xl bg-surface-2/90">
              <div className="absolute top-0 right-0 w-48 h-48 bg-electric/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-4 z-10">
                <span className="font-mono text-xs text-electric tracking-widest uppercase font-bold block">
                  ● EXPONENTIAL VIRAL FLYWHEEL
                </span>
                <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                  The Perpetual Network Effect Loop
                </h3>
                <p className="font-body text-base sm:text-lg text-white/70 font-light leading-relaxed">
                  More authorized partners → Faster doorstep courier coverage → Massive citizen adoption → More raw scrap inflow → More elite partners.
                </p>
              </div>

              <div className="p-8 rounded-[32px] bg-void border border-white/10 flex flex-col sm:flex-row items-center justify-around gap-6 text-center font-display font-black text-base sm:text-lg text-white shadow-inner">
                <div className="flex items-center gap-3">
                  <span className="w-3.5 h-3.5 rounded-full bg-signal animate-pulse shadow-[0_0_12px_#B6FF3C]" />
                  <span>RWAs & Homes</span>
                </div>
                <span className="text-signal text-xl font-bold">→</span>
                <div className="flex items-center gap-3">
                  <span className="w-3.5 h-3.5 rounded-full bg-electric animate-pulse shadow-[0_0_12px_#00FF8A]" />
                  <span>Tech Parks</span>
                </div>
                <span className="text-signal text-xl font-bold">→</span>
                <div className="flex items-center gap-3">
                  <span className="w-3.5 h-3.5 rounded-full bg-ai-cyan animate-pulse shadow-[0_0_12px_#5AB2FF]" />
                  <span>Govt Drives</span>
                </div>
              </div>
            </div>

            {/* Bottom Market Surge Area Chart Deck */}
            <div className="glass-panel p-10 sm:p-14 rounded-[48px] border-2 border-white/10 space-y-8 shadow-2xl flex-1 flex flex-col justify-between bg-surface-2/90">
              <div className="space-y-2">
                <h4 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                  Indian Circular E-Waste Market ($ Billion USD)
                </h4>
                <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">Projected exponential sector value expansion driving rapid urban electrification.</p>
              </div>

              <div className="w-full h-64 pt-4 relative">
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={MARKET_SCALABILITY_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.06)" vertical={false} />
                    <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" fontFamily="var(--font-mono)" fontSize={13} tickLine={false} />
                    <YAxis stroke="rgba(255,255,255,0.5)" fontFamily="var(--font-mono)" fontSize={13} tickLine={false} axisLine={false} unit="B" />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="market"
                      stroke="#00FF8A"
                      strokeWidth={5}
                      fill="url(#limeGrad)"
                      fillOpacity={0.25}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

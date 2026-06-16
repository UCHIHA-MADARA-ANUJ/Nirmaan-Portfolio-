"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import SectionLabel from "@/components/ui/SectionLabel";
import DataCounter from "@/components/ui/DataCounter";
import CountUp from "@/components/ui/CountUp";
import { IMPACT_CHART_GENERATED_VS_RECYCLED, IMPACT_CHART_FORMAL_RATE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Activity, TrendingUp } from "lucide-react";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active) {
    if (payload) {
      if (payload.length > 0) {
        return (
          <div className="glass-panel p-5 rounded-3xl border border-signal text-xs font-display space-y-2 shadow-2xl bg-surface-2 text-white min-w-[180px]">
            <div className="font-extrabold text-signal font-mono pb-2 border-b border-white/10 uppercase tracking-wider">{label} METRICS</div>
            {payload.map((entry: any, i: number) => (
              <div key={i} className="flex justify-between items-center gap-4 text-sm font-semibold">
                <span className="text-white/70 font-normal">{entry.name}:</span>
                <span className="font-mono" style={{ color: entry.color }}>
                  {entry.value} {entry.unit || "%"}
                </span>
              </div>
            ))}
          </div>
        );
      }
    }
  }
  return null;
};

export default function ImpactIntelligence() {
  const [activeChart, setActiveChart] = useState<"bar" | "line">("bar");

  return (
    <section id="impact" className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-16 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10">
      
      {/* Avant-Garde Halos */}
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-signal/15 via-electric/10 to-transparent blur-[180px] pointer-events-none -z-10 rounded-full" />

      {/* Avant-Garde Laser Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#121A16_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Executive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <SectionLabel status="TELEMETRY_ANALYTICS">11 // Environmental Analytics</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Measured impact — not just <span className="text-signal underline">claimed</span>.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
            Algorithmic ESG auditing. Transforming informal toxic scrap burning into verified ecological offsets logged on tamper-proof cryptographic ledgers.
          </p>
        </div>

        {/* 4 Gigantic Masterpiece Number Callouts (12 Cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-10 rounded-[40px] border border-white/10 space-y-4 relative overflow-hidden group hover:border-signal transition-colors shadow-2xl bg-surface-2/90"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-signal to-electric opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="font-mono text-xs text-white/50 block font-bold tracking-widest uppercase">SAMPLE DIVERTED</span>
            <div className="font-display text-6xl sm:text-7xl font-black text-signal tracking-tight">
              <CountUp end={47.2} decimals={1} suffix=" kg" />
            </div>
            <p className="font-body text-xs sm:text-sm text-white/70 font-light leading-relaxed">Verified via direct IoT digital weight scale sync.</p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-10 rounded-[40px] border border-white/10 space-y-4 relative overflow-hidden group hover:border-electric transition-colors shadow-2xl bg-surface-2/90"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-electric to-ai-cyan opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="font-mono text-xs text-white/50 block font-bold tracking-widest uppercase">CO₂ PREVENTED</span>
            <div className="font-display text-6xl sm:text-7xl font-black text-electric tracking-tight">
              <CountUp end={38} suffix=" kg" />
            </div>
            <p className="font-body text-xs sm:text-sm text-white/70 font-light leading-relaxed">Direct absolute atmospheric carbon offset savings.</p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-10 rounded-[40px] border border-white/10 space-y-4 relative overflow-hidden group hover:border-ai-cyan transition-colors shadow-2xl bg-surface-2/90"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-ai-cyan to-signal opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="font-mono text-xs text-white/50 block font-bold tracking-widest uppercase">VERIFIED HUBS</span>
            <div className="font-display text-6xl sm:text-7xl font-black text-white tracking-tight">
              <DataCounter value="76" />
            </div>
            <p className="font-body text-xs sm:text-sm text-white/70 font-light leading-relaxed">CPCB authorized formal industrial processors.</p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-10 rounded-[40px] border border-white/10 space-y-4 relative overflow-hidden group hover:border-warning transition-colors shadow-2xl bg-surface-2/90"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-warning to-signal opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="font-mono text-xs text-white/50 block font-bold tracking-widest uppercase">METAL VALUE</span>
            <div className="font-display text-6xl sm:text-7xl font-black text-warning tracking-tight">
              <DataCounter value="₹21,000" />
              <span className="text-3xl ml-1">cr+</span>
            </div>
            <p className="font-body text-xs sm:text-sm text-white/70 font-light leading-relaxed">Untapped Indic urban mine raw metal reserves.</p>
          </motion.div>

        </div>

        {/* Master Interactive Analytical Command Chart Deck */}
        <div className="glass-panel p-10 sm:p-16 rounded-[48px] border-2 border-white/15 shadow-[0_40px_120px_rgba(0,0,0,0.95)] space-y-14 bg-surface-2/90">
          
          {/* Chart Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
                {activeChart === "bar" ? "Inflow vs Formal Extraction (Lakh Tonnes)" : "National Formal Extraction Surge Rate (%)"}
              </h3>
              <p className="font-body text-sm sm:text-base text-white/60 font-light max-w-2xl leading-relaxed">
                {activeChart === "bar" ? "Head-to-head tracking illustrating the escalating gap NIRMAN is engineered to formally capture." : "Quarterly surge in formal extraction volume tracking our municipal pilot software integration."}
              </p>
            </div>

            {/* Premium Toggle Switchers */}
            <div className="grid grid-cols-2 gap-2 p-2 rounded-full bg-surface border border-white/10 font-display text-sm font-bold shrink-0 shadow-inner">
              <button
                onClick={() => setActiveChart("bar")}
                className={cn(
                  "px-7 py-3 rounded-full transition-all cursor-pointer flex items-center gap-2",
                  activeChart === "bar" ? "bg-signal text-void shadow-lg scale-105" : "text-white/60 hover:text-white"
                )}
              >
                <Activity className="w-4 h-4" />
                <span>Volume Inflow</span>
              </button>
              <button
                onClick={() => setActiveChart("line")}
                className={cn(
                  "px-7 py-3 rounded-full transition-all cursor-pointer flex items-center gap-2",
                  activeChart === "line" ? "bg-signal text-void shadow-lg scale-105" : "text-white/60 hover:text-white"
                )}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Adoption Surge</span>
              </button>
            </div>
          </div>

          {/* Master Recharts Execution */}
          <div className="w-full h-[500px] sm:h-[600px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              {activeChart === "bar" ? (
                <BarChart data={IMPACT_CHART_GENERATED_VS_RECYCLED} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.06)" vertical={false} />
                  <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" fontFamily="var(--font-mono)" fontSize={13} tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontFamily="var(--font-mono)" fontSize={13} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="generated" name="Generated Waste" fill="#1C2621" radius={[16, 16, 0, 0]} />
                  <Bar dataKey="recycled" name="Formally Recycled" fill="#B6FF3C" radius={[16, 16, 0, 0]} />
                </BarChart>
              ) : (
                <LineChart data={IMPACT_CHART_FORMAL_RATE} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.06)" vertical={false} />
                  <XAxis dataKey="quarter" stroke="rgba(255,255,255,0.5)" fontFamily="var(--font-mono)" fontSize={13} tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontFamily="var(--font-mono)" fontSize={13} tickLine={false} axisLine={false} unit="%" />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    name="Formal Rate"
                    stroke="#00FF8A"
                    strokeWidth={6}
                    dot={{ r: 10, fill: "#B6FF3C", stroke: "#050706", strokeWidth: 4 }}
                    activeDot={{ r: 14, fill: "#00FF8A", stroke: "#fff", strokeWidth: 5 }}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/50 font-bold">
            <span>● SOURCE // CENTRAL POLLUTION CONTROL BOARD MCR</span>
            <span className="text-signal">PREDICTIVE ESG METRICS ACTIVE</span>
          </div>

        </div>

      </div>
    </section>
  );
}

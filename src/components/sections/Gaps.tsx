"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { COMPARISON_MATRIX } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, AlertCircle, ChevronDown, Zap } from "lucide-react";

export default function Gaps() {
  const [activeRow, setActiveRow] = useState<number | null>(0); // default first active

  const renderStatus = (text: string) => {
    const isYes = text.startsWith("✓");
    const isNo = text.startsWith("✗");
    const isPartial = text.startsWith("~");

    return (
      <div className="flex items-center gap-2 font-display text-sm sm:text-base">
        {isYes && <CheckCircle2 className="w-5 h-5 text-electric shrink-0" />}
        {isNo && <XCircle className="w-5 h-5 text-red-400 shrink-0" />}
        {isPartial && <AlertCircle className="w-5 h-5 text-warning shrink-0" />}
        <span className={cn(isYes && "text-white font-medium", isNo && "text-white/50", isPartial && "text-warning")}>
          {text.substring(2)}
        </span>
      </div>
    );
  };

  return (
    <section id="solution" className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-16 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10">
      {/* Avant-Garde Ambient Halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-signal/10 via-ai-cyan/5 to-transparent blur-[180px] pointer-events-none -z-10 rounded-full" />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Executive Top Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <SectionLabel status="COMPETITIVE_ANALYSIS">03 // Structural Gaps Analysis</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Solutions exist — none is <span className="text-signal underline">universal</span>.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
            A relentless structural breakdown against legacy e-waste paradigms proving exactly why India remains uncollected.
          </p>
        </div>

        {/* Avant-Garde Interactive Matrix Deck */}
        <div className="space-y-6">
          {COMPARISON_MATRIX.map((row, i) => {
            const isActive = activeRow === i;

            return (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                onClick={() => setActiveRow(isActive ? null : i)}
                className={cn(
                  "glass-panel rounded-[32px] border transition-all duration-300 overflow-hidden cursor-pointer group",
                  isActive ? "bg-surface-2/90 border-signal/80 shadow-[0_20px_60px_rgba(182,255,60,0.15)] ring-2 ring-signal/30" : "bg-surface/80 border-white/10 hover:border-white/30"
                )}
              >
                {/* Accordion Master Bar */}
                <div className="p-8 sm:p-10 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs font-bold text-signal/40 group-hover:text-signal">0{i + 1}</span>
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-signal transition-colors">
                      {row.feature}
                    </h3>
                  </div>

                  <div className="flex items-center gap-8">
                    {/* Live NIRMAN Power Preview Pip */}
                    <div className="hidden lg:flex items-center gap-3 px-5 py-2 rounded-full bg-signal/15 border border-signal/40 text-signal font-mono text-xs">
                      <Zap className="w-4 h-4 text-signal fill-signal" />
                      <span className="font-bold">{row.nirman.substring(2)}</span>
                    </div>

                    <div className={cn("w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white transition-transform duration-500", isActive && "rotate-180 bg-signal text-void")}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Avant-Garde Detailed Head-to-Head Comparative Breakdown */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="px-8 sm:px-10 pb-10 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-void/50"
                    >
                      {/* Informal */}
                      <div className="p-6 rounded-2xl bg-surface border border-white/5 space-y-2">
                        <span className="font-mono text-[10px] tracking-widest text-white/40 block uppercase font-bold">Informal Scrap</span>
                        {renderStatus(row.informal)}
                        <p className="font-body text-xs text-white/50 pt-2 leading-relaxed">High toxic hazard. Zero data shredding guarantees.</p>
                      </div>

                      {/* B2B Tie ups */}
                      <div className="p-6 rounded-2xl bg-surface border border-white/5 space-y-2">
                        <span className="font-mono text-[10px] tracking-widest text-white/40 block uppercase font-bold">B2B Tie-Ups</span>
                        {renderStatus(row.b2b)}
                        <p className="font-body text-xs text-white/50 pt-2 leading-relaxed">Restricted entirely to immense corporate parks. Closed to citizens.</p>
                      </div>

                      {/* Drop Off Bins */}
                      <div className="p-6 rounded-2xl bg-surface border border-white/5 space-y-2">
                        <span className="font-mono text-[10px] tracking-widest text-white/40 block uppercase font-bold">Municipal Drop-Offs</span>
                        {renderStatus(row.dropOff)}
                        <p className="font-body text-xs text-white/50 pt-2 leading-relaxed">Severe citizen friction. Almost zero active doorstep convenience.</p>
                      </div>

                      {/* NIRMAN Master Pillar */}
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-signal/20 to-electric/10 border-2 border-signal space-y-2 shadow-[0_0_30px_rgba(182,255,60,0.2)]">
                        <span className="font-mono text-[10px] tracking-widest text-signal block uppercase font-extrabold">⚡ NIRMAN UNIVERSAL CORE</span>
                        <div className="font-display font-bold text-lg text-white">
                          {row.nirman}
                        </div>
                        <p className="font-body text-xs text-white/80 pt-2 leading-relaxed">Instant doorstep courier OTP handover paired with verifiable CPCB ledgers.</p>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Master Architectural Footer Lock */}
        <div className="glass-panel p-8 sm:p-12 rounded-[40px] border-2 border-signal/60 bg-gradient-to-r from-signal/15 via-surface-2 to-void flex flex-col sm:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(182,255,60,0.2)]">
          <div className="space-y-2 text-center sm:text-left">
            <span className="font-mono text-xs text-signal tracking-widest uppercase font-bold">● ARCHITECTURAL VERDICT</span>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">NIRMAN bridges the universal convenience gap.</h3>
          </div>
          <button className="px-8 py-4 bg-signal text-void font-display font-extrabold text-lg rounded-full hover:bg-electric transition-all shadow-xl shrink-0 cursor-pointer">
            Explore 5-Tap Pipeline →
          </button>
        </div>

      </div>
    </section>
  );
}

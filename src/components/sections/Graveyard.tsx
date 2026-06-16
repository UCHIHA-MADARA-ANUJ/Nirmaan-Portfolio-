"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import DataCounter from "@/components/ui/DataCounter";
import GlitchText from "@/components/ui/GlitchText";
import { PROBLEM_STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Graveyard() {
  return (
    <section
      id="problem"
      className="relative min-h-screen w-full bg-void text-white py-32 px-6 sm:px-16 overflow-hidden select-none border-t border-white/10"
    >
      {/* Absolute Ambient High-End Radial Halos */}
      <div className="absolute top-1/3 left-1/4 w-[800px] h-[500px] bg-gradient-to-tr from-signal/10 via-electric/5 to-transparent blur-[180px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[500px] bg-gradient-to-br from-red-500/10 via-warning/5 to-transparent blur-[180px] pointer-events-none -z-10 rounded-full" />

      {/* Avant-Garde High-Fashion Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#121A16_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Executive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-3xl">
            <SectionLabel status="CRITICAL_SLUDGE">02 // The Graveyard</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              India is <span className="text-signal underline">drowning</span> in e-waste.
            </h2>
          </div>
          <div className="font-mono text-xs text-warning bg-warning/10 border border-warning/30 px-5 py-2.5 rounded-full animate-pulse self-start md:self-auto font-extrabold tracking-wider">
            ⚠️ 14.14 LAKH TONNES UNACCOUNTED
          </div>
        </div>

        {/* Swiss Avant-Garde Asymmetric Monolith Grid (12 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Showcase Monolith 1: Massive Generation Stat (8 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 glass-panel p-10 sm:p-16 rounded-[48px] border border-white/10 relative overflow-hidden flex flex-col justify-between group hover:border-signal/80 transition-all duration-500 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-signal/15 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="space-y-4 z-10">
              <span className="font-mono text-xs tracking-widest text-signal uppercase font-bold block">
                ● {PROBLEM_STATS[0].label}
              </span>
              <div className="font-display text-8xl sm:text-[150px] font-black text-signal tracking-tight leading-none drop-shadow-[0_0_50px_rgba(182,255,60,0.3)]">
                <DataCounter value={PROBLEM_STATS[0].number} duration={1.5} />
              </div>
              <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
                {PROBLEM_STATS[0].unit}
              </h3>
            </div>

            <p className="font-body text-base sm:text-xl text-white/70 max-w-xl pt-8 border-t border-white/10 mt-12 z-10 font-light leading-relaxed">
              {PROBLEM_STATS[0].desc}
            </p>

            <div className="absolute bottom-6 right-8 font-mono text-[10px] text-white/30">
              MCR_METRIC_01 • SECURED
            </div>
          </motion.div>

          {/* Monolith 2: Global Rank (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 glass-panel p-10 sm:p-16 rounded-[48px] border border-white/10 relative overflow-hidden flex flex-col justify-between group hover:border-ai-cyan/80 transition-all duration-500 shadow-2xl bg-surface-2/90"
          >
            <div className="absolute top-0 left-0 w-48 h-48 bg-ai-cyan/15 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="space-y-4 z-10">
              <span className="font-mono text-xs tracking-widest text-ai-cyan uppercase font-bold block">
                ● {PROBLEM_STATS[1].label}
              </span>
              <div className="font-display text-8xl sm:text-[110px] font-black text-ai-cyan tracking-tight leading-none drop-shadow-[0_0_40px_rgba(90,178,255,0.3)]">
                <DataCounter value={PROBLEM_STATS[1].number} duration={1.8} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                {PROBLEM_STATS[1].unit}
              </h3>
            </div>

            <p className="font-body text-sm sm:text-base text-white/70 pt-8 border-t border-white/10 mt-12 z-10 font-light leading-relaxed">
              {PROBLEM_STATS[1].desc}
            </p>
          </motion.div>

          {/* Monolith 3: Toxic Burn Diagnostic Warning (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 glass-panel p-10 sm:p-16 rounded-[48px] border border-red-500/30 relative overflow-hidden flex flex-col justify-between group hover:border-red-500 transition-all duration-500 shadow-2xl bg-red-950/10"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/15 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="space-y-4 z-10">
              <span className="font-mono text-xs tracking-widest text-red-400 uppercase font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>⚠️ {PROBLEM_STATS[2].label}</span>
              </span>
              <div className="font-display text-8xl sm:text-[120px] font-black text-red-500 tracking-tight leading-none drop-shadow-[0_0_50px_rgba(239,68,68,0.5)]">
                <GlitchText text={PROBLEM_STATS[2].number} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                {PROBLEM_STATS[2].unit}
              </h3>
            </div>

            <p className="font-body text-sm sm:text-base text-white/70 pt-8 border-t border-red-500/20 mt-12 z-10 font-light leading-relaxed">
              {PROBLEM_STATS[2].desc}
            </p>
          </motion.div>

          {/* Monolith 4: The Core Bottleneck Diagnostic Monolith (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 glass-panel p-10 sm:p-16 rounded-[48px] border-2 border-warning/40 relative overflow-hidden flex flex-col justify-between group hover:border-warning transition-all duration-500 shadow-2xl bg-surface-2"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-warning/10 rounded-full blur-[140px] pointer-events-none" />
            
            <div className="space-y-6 z-10">
              <span className="font-mono text-xs tracking-widest text-warning uppercase font-bold block">
                ● ROOT BOTTLENECK PARSER • FAILURE ID: 99
              </span>
              <h3 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                &ldquo;The real problem is access, <span className="text-signal underline">trust</span>, and traceability.&rdquo;
              </h3>
              <p className="font-body text-base sm:text-xl text-white/70 font-light leading-relaxed">
                {PROBLEM_STATS[3].desc}
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 mt-12 z-10 flex flex-wrap items-center justify-start gap-4">
              {["✗ NO CONVENIENT DROP", "✗ INFORMAL MONOPOLY", "✗ ZERO CO2 LEDGER"].map((tag) => (
                <span key={tag} className="px-5 py-2.5 rounded-full bg-void border border-red-500/30 font-mono text-xs text-red-400 font-bold shadow-md">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Global Bottom Animated Trace Notice */}
        <div className="pt-12 font-mono text-xs text-white/50 flex items-center justify-between border-t border-white/10">
          <span>● NATIONAL DIAGNOSTIC LEDGER • PROTOTYPE STAGE</span>
          <span className="text-signal">CRITICAL INFRASTRUCTURE REQ.</span>
        </div>

      </div>
    </section>
  );
}

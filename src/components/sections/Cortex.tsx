"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import NeuralNet from "@/components/canvas/NeuralNet";
import SectionLabel from "@/components/ui/SectionLabel";
import { AI_MODULES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Cpu, Activity, CheckCircle2 } from "lucide-react";

export default function Cortex() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getTerminalLabel = (index: number) => {
    return index === 0 ? "INDIC NLP KERNEL" : index === 1 ? "REALTIME TELEMETRY" : index === 2 ? "COMPUTER VISION" : "PREDICTIVE ML ROUTE";
  };

  return (
    <section id="ai" className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-16 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10">
      {/* 3D Hardware Accelerated Neural Net Layer */}
      <NeuralNet />

      {/* Deep Ground Spotlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-t from-signal/15 via-electric/5 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Executive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <SectionLabel status="CORTEX_ACTIVE">09 // Artificial Intelligence Brain</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              AI is the <span className="text-signal underline">brain</span>, not a buzzword.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
            Empowering illiterate scrap workers and metropolitan households alike. Multimodal categorization, real-time ESG extraction, and predictive geospatial routing.
          </p>
        </div>

        {/* Swiss Avant-Garde Bento Dashboard Deck (12 Cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {AI_MODULES.map((mod, i) => {
            const isLive = mod.status === "LIVE" || mod.status === "ACTIVE";
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "group relative rounded-[40px] glass-panel p-10 sm:p-14 overflow-hidden flex flex-col justify-between border border-white/10 transition-all duration-500 bg-surface-2/90 shadow-2xl",
                  isHovered && "border-signal/80 shadow-[0_20px_80px_rgba(182,255,60,0.2)] scale-[1.01]"
                )}
              >
                {/* Background Sweep */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-signal/15 via-transparent to-transparent pointer-events-none blur-3xl" />

                {/* Corner Traces */}
                <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-signal to-transparent animate-pulse" />
                <div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-signal to-transparent animate-pulse" />

                {/* Top Status & Terminal Microcopy */}
                <div className="flex items-center justify-between mb-10 z-20">
                  <span className="font-mono text-xs text-ai-cyan font-bold tracking-widest uppercase flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-ai-cyan" />
                    <span>{" > "}{getTerminalLabel(i)}</span>
                  </span>

                  <div
                    className={cn(
                      "px-4 py-1.5 rounded-full font-mono text-xs font-bold tracking-wider flex items-center gap-2 shadow-md",
                      isLive ? "bg-signal text-void shadow-[0_0_20px_rgba(182,255,60,0.5)]" : "bg-white/10 text-white/50 border border-white/10"
                    )}
                  >
                    {isLive && <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-void animate-ping" />}
                    <span>{mod.status}</span>
                  </div>
                </div>

                {/* Core Title & Copy */}
                <div className="space-y-6 z-20">
                  <div className="flex items-center gap-6">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-3xl bg-surface border border-white/15 flex items-center justify-center text-4xl sm:text-5xl shadow-inner group-hover:scale-110 transition-transform shrink-0">
                      {mod.icon}
                    </div>
                    <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-signal transition-colors">
                      {mod.title}
                    </h3>
                  </div>

                  <p className="font-body text-base sm:text-lg text-white/70 leading-relaxed font-light">
                    {mod.desc}
                  </p>
                </div>

                {/* Integrated Interactive UI Breakdown */}
                <div className="mt-12 pt-8 border-t border-white/10 relative z-20">
                  {i === 0 ? (
                    <div className="rounded-3xl bg-void p-5 border border-white/10 flex items-center justify-between font-mono text-xs shadow-inner">
                      <span className="text-white/60">&ldquo;Dead Lenovo Thinkpad X1?&rdquo;</span>
                      <span className="text-signal font-extrabold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" /> ₹3,800 COMPENSATED
                      </span>
                    </div>
                  ) : i === 1 ? (
                    <div className="rounded-3xl bg-void p-5 border border-white/10 space-y-2.5 shadow-inner">
                      <div className="flex justify-between font-mono text-xs">
                        <span className="text-white/60">AUTONOMOUS ESG PARSER</span>
                        <span className="text-00FF8A font-extrabold">100% ACCURACY</span>
                      </div>
                      <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden p-0.5">
                        <div className="h-full bg-gradient-to-r from-signal via-electric to-ai-cyan w-11/12 animate-pulse rounded-full" />
                      </div>
                    </div>
                  ) : i === 2 ? (
                    <div className="rounded-3xl bg-void p-5 border border-white/10 flex items-center justify-between font-mono text-xs shadow-inner">
                      <span className="text-white/60">📷 PYTORCH CV PIPELINE</span>
                      <span className="text-ai-cyan font-extrabold">[BOUNDING BOX ACTIVE]</span>
                    </div>
                  ) : (
                    <div className="rounded-3xl bg-void p-5 border border-white/10 flex items-center justify-between font-mono text-xs shadow-inner">
                      <span className="text-white/60">🗺️ GEOSPATIAL CLUSTERING</span>
                      <span className="text-warning font-extrabold">● ML ROUTE OPTIMIZED</span>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Notice */}
        <div className="text-center font-mono text-xs text-white/50 tracking-widest flex items-center justify-between border-t border-white/10 pt-12">
          <span>● DEPLOYING STATE-OF-THE-ART QUANTIZED MODELS AT THE VERCEL EDGE</span>
          <span className="text-signal font-bold">SUB-SECOND LATENCY</span>
        </div>

      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Database, Cpu, Globe, Terminal, ChevronRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { TECHNOLOGY_LAYERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function TechnologyArchitecture() {
  const [activeLayer, setActiveLayer] = useState(0);

  const getLayerIcon = (index: number) => {
    return index === 0 ? <Layers className="w-6 h-6 text-signal" /> : index === 1 ? <Globe className="w-6 h-6 text-electric" /> : index === 2 ? <Database className="w-6 h-6 text-ai-cyan" /> : index === 3 ? <Cpu className="w-6 h-6 text-warning" /> : <Terminal className="w-6 h-6 text-signal" />;
  };

  return (
    <section id="tech" className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-16 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10 perspective-1000">
      
      {/* Spotlights */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-gradient-to-br from-signal/15 via-ai-cyan/10 to-transparent rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#121A16_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      {/* Upward Streaming Data Laser Packets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-between -z-10 px-12">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="w-px h-full bg-white/5 relative">
            <motion.div
              className="w-full bg-gradient-to-b from-signal via-electric to-transparent absolute top-0 left-0 shadow-[0_0_15px_#B6FF3C]"
              style={{ height: 100 + Math.random() * 100 }}
              animate={{ y: ["-100%", "1000%"] }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <SectionLabel status="SYSTEM_STACK">12 // Architectural Specification Deck</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Lean, modern, already <span className="text-signal underline">buildable</span>.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
            Not a speculative conceptual architecture. Engineered on ultra-stable WebGL, Next.js 14 server paradigms, and highly decoupled edge layers.
          </p>
        </div>

        {/* 3D Holographic Deck (12 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 3D Layer Stack (6 Cols) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[600px] my-auto">
            
            <div className="relative w-full max-w-lg space-y-6 preserve-3d" style={{ transform: "rotateX(22deg) rotateY(-18deg)" }}>
              {TECHNOLOGY_LAYERS.map((item, i) => {
                const isSelected = activeLayer === i;

                return (
                  <motion.div
                    key={item.layer}
                    onClick={() => setActiveLayer(i)}
                    initial={{ opacity: 0, z: -200, y: 50 }}
                    whileInView={{ opacity: 1, z: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
                    whileHover={{ translateZ: 40, scale: 1.02 }}
                    className={cn(
                      "group relative p-8 rounded-3xl glass-panel border transition-all duration-500 cursor-pointer flex items-center justify-between shadow-[0_20px_60px_rgba(0,0,0,0.85)]",
                      isSelected ? "bg-signal text-void border-signal shadow-[0_0_60px_rgba(182,255,60,0.4)] ring-2 ring-signal" : "bg-surface-2/90 border-white/10 hover:border-white/30 text-white"
                    )}
                    style={{
                      transform: `translateY(${i * -10}px) translateZ(${i * 30}px)`,
                    }}
                  >
                    <div className="absolute top-0 right-1/3 w-24 h-px bg-gradient-to-r from-transparent via-signal to-transparent animate-pulse" />

                    <div className="flex items-center gap-6">
                      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shrink-0", isSelected ? "bg-void text-signal shadow-[0_0_20px_#B6FF3C]" : "bg-surface text-white")}>
                        {getLayerIcon(i)}
                      </div>
                      <div className="space-y-1">
                        <span className={cn("font-mono text-[10px] tracking-widest uppercase font-bold block", isSelected ? "text-void/60" : "text-electric")}>
                          LAYER_{item.layer} • ACTIVE
                        </span>
                        <h3 className={cn("font-display font-extrabold text-2xl transition-colors tracking-tight", isSelected ? "text-void" : "text-white group-hover:text-signal")}>
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    <ChevronRight className={cn("w-6 h-6 transition-transform duration-300 font-bold", isSelected ? "text-void rotate-90" : "text-white/30 group-hover:text-white")} />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Master Focus Panel (6 Cols) */}
          <div className="lg:col-span-6 h-full min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full glass-panel p-10 sm:p-16 rounded-[48px] border-2 border-signal/80 bg-gradient-to-br from-surface-2 via-surface-1 to-void space-y-10 shadow-[0_40px_100px_rgba(0,0,0,0.95)] relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-signal/15 rounded-full blur-[140px] pointer-events-none" />

                <div className="space-y-6 z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6 font-mono text-xs font-bold">
                    <span className="text-signal uppercase">● LAYER_{TECHNOLOGY_LAYERS[activeLayer].layer} SPECIFICATION</span>
                    <span className="text-00FF8A bg-white/5 px-4 py-1 rounded-full border border-white/10">O(1) COVENANT</span>
                  </div>

                  <h3 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
                    {TECHNOLOGY_LAYERS[activeLayer].name}
                  </h3>

                  <p className="font-body text-lg sm:text-2xl text-white/80 font-light leading-relaxed">
                    {TECHNOLOGY_LAYERS[activeLayer].desc}
                  </p>
                </div>

                <div className="space-y-4 pt-8 border-t border-white/10 z-10">
                  <span className="font-mono text-xs text-white/40 uppercase tracking-widest block font-bold">
                    ● ASSIGNED TECHNICAL STACK
                  </span>
                  <div className="p-6 rounded-3xl bg-void font-mono text-sm sm:text-base text-signal font-bold border border-white/10 leading-relaxed shadow-inner">
                    {TECHNOLOGY_LAYERS[activeLayer].stack}
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between font-mono text-xs text-white/40 font-bold z-10">
                  <span>ZERO EXTERNAL BLOAT</span>
                  <span className="text-electric">100% EDGE READY</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Sparkles, Zap, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const FOUNDER_MONOLITHS = [
  {
    id: "anuj",
    name: "Anuj Phulera",
    role: "Lead Founder & Chief Architect // Execution Core",
    href: "/team/anuj",
    desc: "Overarching systems engineering, high-performance WebGL Shaders, Indic Map Geofencing, and Vercel edge computing deployment models.",
    tags: ["Systems Engineer", "Chief Architect", "Indic Geofencing", "O(1) Execution"],
    theme: "power",
    color: "#B6FF3C",
    accentGlow: "hover:shadow-[0_20px_80px_rgba(182,255,60,0.3)] hover:border-signal/80",
    icon: <Zap className="w-6 h-6 text-signal fill-signal" />,
    badge: "LEAD FOUNDER",
  },
  {
    id: "aarav",
    name: "Aarav Choudhary",
    role: "Product Visionary & GTM Strategist // Strategic Mind",
    href: "/team/aarav",
    desc: "Rigorous ecological research, psychological storytelling, Extended Producer Responsibility policy synchronization, and pan-India expansion GTM.",
    tags: ["Product Visionary", "GTM Strategist", "EPR Policy Sync", "Swiss Design"],
    theme: "intellect",
    color: "#5AB2FF",
    accentGlow: "hover:shadow-[0_20px_80px_rgba(90,178,255,0.3)] hover:border-ai-cyan/80",
    icon: <Sparkles className="w-6 h-6 text-ai-cyan" />,
    badge: "CO-FOUNDER",
  },
];

export default function Architects() {
  const [activeFounder, setActiveFounder] = useState<number | null>(null);

  return (
    <section id="team" className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-16 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10">
      
      {/* Avant-Garde Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-signal/15 via-ai-cyan/10 to-transparent blur-[180px] pointer-events-none -z-10 rounded-full" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#121A16_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <SectionLabel status="FOUNDERS_INDEX">15 // Platform Creators</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Two builders. One <span className="text-signal underline">mission</span>.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
            Fusing relentless full-stack execution with deep psychological storytelling and product strategy. Operating in absolute God-Mode with zero excuses.
          </p>
        </div>

        {/* 2 Executive Typographic Monolith Decks (12 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch pt-6">
          {FOUNDER_MONOLITHS.map((founder, i) => {
            const isHovered = activeFounder === i;

            return (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveFounder(i)}
                onMouseLeave={() => setActiveFounder(null)}
                className="group relative h-full flex flex-col"
              >
                <div
                  className={cn(
                    "relative z-10 flex-1 flex flex-col justify-between p-10 sm:p-14 rounded-[48px] glass-panel border border-white/10 transition-all duration-500 overflow-hidden bg-surface-2/90 shadow-2xl",
                    founder.accentGlow,
                    isHovered && "scale-[1.01]"
                  )}
                >
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/[0.04] via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

                  {/* Top Role Indicator */}
                  <div className="flex items-center justify-between z-20 gap-4">
                    <div className="space-y-1">
                      <span
                        className={cn(
                          "px-4 py-1.5 rounded-full font-mono text-xs font-black tracking-wider uppercase block w-fit shadow-md",
                          i === 0 ? "bg-signal text-void shadow-[0_0_20px_#B6FF3C]" : "bg-ai-cyan text-void shadow-[0_0_20px_#5AB2FF]"
                        )}
                      >
                        ● {founder.badge} • ACTIVE
                      </span>
                      <span className="font-mono text-xs text-white/70 font-semibold block pt-2">
                        {founder.role}
                      </span>
                    </div>

                    <div className="w-16 h-16 rounded-3xl bg-void flex items-center justify-center border border-white/10 text-white group-hover:scale-110 transition-transform shadow-inner shrink-0">
                      {founder.icon}
                    </div>
                  </div>

                  {/* Profound Bio */}
                  <div className="py-16 space-y-6 z-20">
                    <h3 className="font-display font-black text-6xl sm:text-7xl text-white group-hover:text-signal transition-colors tracking-tight leading-none">
                      {founder.name}
                    </h3>
                    
                    <p className="font-body text-xl sm:text-2xl text-white/80 font-light leading-relaxed max-w-xl">
                      {founder.desc}
                    </p>
                  </div>

                  {/* Route Button */}
                  <div className="space-y-8 z-20 border-t border-white/10 pt-8">
                    <div className="flex flex-wrap items-center justify-start gap-3">
                      {founder.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-5 py-2.5 rounded-full font-mono text-xs tracking-wider bg-void text-white/80 border border-white/10 font-bold shadow-inner"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/5">
                      <Link href={founder.href} className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-signal text-void font-display font-black text-sm rounded-full transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer group/btn">
                          <span>Inspect Dedicated Compendium</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                        </button>
                      </Link>

                      <div className="flex items-center gap-4 text-white self-center sm:self-auto">
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-signal hover:text-void transition-colors" aria-label="GitHub">
                          <Github className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-signal hover:text-void transition-colors" aria-label="LinkedIn">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-signal hover:text-void transition-colors" aria-label="Twitter">
                          <Twitter className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

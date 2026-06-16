"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomCursor from "@/components/ui/CustomCursor";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CheckCircle2, Zap } from "lucide-react";

export default function AnujCompendium() {
  const [activeTab, setActiveTab] = useState<"spec" | "shaders" | "infra">("spec");

  return (
    <div className="bg-void text-white min-h-screen flex flex-col justify-between overflow-x-hidden relative selection:bg-signal selection:text-black font-body select-none">
      <CustomCursor />

      {/* Avant-Garde Overlays */}
      <div className="bg-noise" />
      <div className="scanline" />
      <div className="absolute inset-0 bg-[radial-gradient(#121A16_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      {/* Spotlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-signal/15 via-electric/10 to-transparent rounded-full blur-[200px] pointer-events-none -z-10" />

      {/* Top Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between relative z-20 border-b border-white/10">
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-signal text-void font-hindi font-black flex items-center justify-center text-xl shadow-[0_0_20px_rgba(182,255,60,0.5)] group-hover:scale-110 transition-transform">
            ←
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-white text-lg tracking-wider group-hover:text-signal transition-colors">
              Return to Home Composer
            </span>
            <span className="font-mono text-white/40 text-[9px] tracking-[0.25em] font-semibold">
              NIRMAN MASTER SUITE
            </span>
          </div>
        </Link>

        <span className="px-4 py-1.5 rounded-full bg-signal text-void font-mono text-xs font-black tracking-widest shadow-[0_0_20px_#B6FF3C]">
          ● LEAD FOUNDER • EXECUTION CORE
        </span>
      </header>

      {/* Main Content Deck */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 space-y-24">
        
        {/* Founder Top Monolith */}
        <div className="glass-panel p-10 sm:p-20 rounded-[56px] border-2 border-signal/80 shadow-[0_40px_120px_rgba(0,0,0,0.95)] bg-surface-2/95 relative overflow-hidden space-y-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-signal/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="space-y-4">
            <span className="font-mono text-xs text-signal tracking-[0.3em] font-black uppercase block">
              ● CHIEF ARCHITECT & LEAD FOUNDER • NIRMAN PROJECT
            </span>
            <h1 className="font-display text-7xl sm:text-9xl font-black tracking-tight text-white leading-[0.88]">
              Anuj <span className="text-signal underline">Phulera</span>.
            </h1>
          </div>

          <p className="font-body text-xl sm:text-3xl text-white/80 font-light leading-relaxed max-w-4xl">
            &ldquo;Software shouldn&apos;t feel like a static document. It must execute as a living, breathing cyber alchemical ritual.&rdquo;
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="p-6 rounded-3xl bg-void/80 border border-white/10 space-y-2 shadow-inner">
              <span className="font-mono text-[10px] text-signal font-bold uppercase tracking-wider block">Primary Role</span>
              <div className="font-display font-black text-xl text-white">Full-Stack Core Engine</div>
              <p className="font-body text-xs text-white/60">Overarching Next.js 14 architecture and complex WebGL node orchestration.</p>
            </div>

            <div className="p-6 rounded-3xl bg-void/80 border border-white/10 space-y-2 shadow-inner">
              <span className="font-mono text-[10px] text-electric font-bold uppercase tracking-wider block">Domain Mastery</span>
              <div className="font-display font-black text-xl text-white">Indic Map Geofencing</div>
              <p className="font-body text-xs text-white/60">Real-time satellite GPS synchronization and custom DivIcon radar plotting.</p>
            </div>

            <div className="p-6 rounded-3xl bg-void/80 border border-white/10 space-y-2 shadow-inner">
              <span className="font-mono text-[10px] text-ai-cyan font-bold uppercase tracking-wider block">DevOps Philosophy</span>
              <span className="font-display font-black text-xl text-white block">Vercel Edge Quantization</span>
              <p className="font-body text-xs text-white/60">Zero-latency sub-second cold starts built for Indic mobile networks.</p>
            </div>
          </div>
        </div>

        {/* Technical Deck (12 Cols) */}
        <div className="space-y-12">
          {/* Switchers */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-6 font-display text-lg font-bold">
            <button
              onClick={() => setActiveTab("spec")}
              className={cn("px-8 py-3 rounded-full transition-all cursor-pointer", activeTab === "spec" ? "bg-signal text-void shadow-[0_0_20px_#B6FF3C]" : "text-white/60 hover:text-white")}
            >
              System Specifications
            </button>
            <button
              onClick={() => setActiveTab("shaders")}
              className={cn("px-8 py-3 rounded-full transition-all cursor-pointer", activeTab === "shaders" ? "bg-signal text-void shadow-[0_0_20px_#B6FF3C]" : "text-white/60 hover:text-white")}
            >
              WebGL Motion Shaders
            </button>
            <button
              onClick={() => setActiveTab("infra")}
              className={cn("px-8 py-3 rounded-full transition-all cursor-pointer", activeTab === "infra" ? "bg-signal text-void shadow-[0_0_20px_#B6FF3C]" : "text-white/60 hover:text-white")}
            >
              Edge Infrastructure
            </button>
          </div>

          {/* Breakdown Panels */}
          <div className="glass-panel p-10 sm:p-16 rounded-[48px] border border-white/15 bg-surface-2/95 shadow-2xl">
            {activeTab === "spec" ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <h3 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">Decoupled Full-Stack Indic Architecture</h3>
                <p className="font-body text-lg text-white/70 leading-relaxed font-light">
                  Architected the entire NIRMAN digital platform using highly modular React server paradigms. Fused role-based cryptographic KYC JWT pipelines with persistent Zustand storage models to guarantee zero state dropping during field rider handovers.
                </p>
                <div className="p-6 rounded-3xl bg-void font-mono text-sm text-signal border border-white/10 space-y-2">
                  <div className="text-white/40 pb-2 border-b border-white/10">CORE FRONTEND DEPENDENCIES SECURED</div>
                  <div>Next.js 14.2.4 • App Router Engine</div>
                  <div>React 18 Strict • Concurrent Server Components</div>
                  <div>Tailwind CSS • Custom OLED Extended System</div>
                </div>
              </motion.div>
            ) : activeTab === "shaders" ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <h3 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">Buttery-Smooth 60fps Shaders & Canvas Engines</h3>
                <p className="font-body text-lg text-white/70 leading-relaxed font-light">
                  Engineered the absolute peak of modern interactive motion. Devised a fully custom 60 FPS Canvas 2D Scrap simulation for the Genesis boot kernel alongside non-blocking Three.js procedural undulating point swarms that operate without any UI thread jitter.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-display font-bold">
                  <div className="p-6 rounded-3xl bg-void border border-white/5 flex items-center gap-4 text-white">
                    <CheckCircle2 className="w-5 h-5 text-signal" /> Fully Cleaned GSAP ScrollTrigger Timelines
                  </div>
                  <div className="p-6 rounded-3xl bg-void border border-white/5 flex items-center gap-4 text-white">
                    <CheckCircle2 className="w-5 h-5 text-electric" /> Studio Freight Lenis Buttery Damping
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <h3 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">Serverless Vercel Edge Execution</h3>
                <p className="font-body text-lg text-white/70 leading-relaxed font-light">
                  Configured fully automated static compilation suites. Fused Nominatim geospatial geocoding proxies with ultra-lean Leaflet tiles to guarantee rapid pilot facility radar discovery even across rural 3G Indian corridors.
                </p>
                <div className="p-6 rounded-3xl bg-void font-mono text-xs text-00FF8A border border-electric/30">
                  ✔ BUILD COMPILATION EXITS WITH ABSOLUTE ZERO ERRORS & ZERO HYDRATION MISMATCHES
                </div>
              </motion.div>
            )}
          </div>
        </div>

      </main>

      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50 relative z-20">
        <p>© 2026 NIRMAN NETWORK // ANUJ PHULERA COMPENDIUM</p>
        <span className="text-signal font-bold">LEAD ARCHITECT COVENANT</span>
      </footer>
    </div>
  );
}

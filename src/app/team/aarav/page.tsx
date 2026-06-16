"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomCursor from "@/components/ui/CustomCursor";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowLeft, Sparkles, Layers, Globe, RefreshCw, CheckCircle2 } from "lucide-react";

export default function AaravCompendium() {
  const [activeTab, setActiveTab] = useState<"vision" | "gtm" | "policy">("vision");

  return (
    <div className="bg-void text-white min-h-screen flex flex-col justify-between overflow-x-hidden relative selection:bg-signal selection:text-black font-body select-none">
      <CustomCursor />

      {/* Avant-Garde Overlays */}
      <div className="bg-noise" />
      <div className="scanline" />
      <div className="absolute inset-0 bg-[radial-gradient(#121A16_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      {/* Spotlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-ai-cyan/15 via-electric/10 to-transparent rounded-full blur-[200px] pointer-events-none -z-10" />

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

        <span className="px-5 py-2 rounded-full bg-ai-cyan text-void font-mono text-xs font-black tracking-widest shadow-[0_0_20px_#5AB2FF]">
          ● CO-FOUNDER • STRATEGIC MIND
        </span>
      </header>

      {/* Main Content Deck */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 space-y-24">
        
        {/* Founder Top Monolith */}
        <div className="glass-panel p-10 sm:p-20 rounded-[56px] border-2 border-ai-cyan/80 shadow-[0_40px_120px_rgba(0,0,0,0.95)] bg-surface-2/95 relative overflow-hidden space-y-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ai-cyan/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="space-y-4">
            <span className="font-mono text-xs text-ai-cyan tracking-[0.3em] font-black uppercase block">
              ● PRODUCT VISIONARY & GTM STRATEGIST • NIRMAN PROJECT
            </span>
            <h1 className="font-display text-7xl sm:text-9xl font-black tracking-tight text-white leading-[0.88]">
              Aarav <span className="text-ai-cyan underline">Choudhary</span>.
            </h1>
          </div>

          <p className="font-body text-xl sm:text-3xl text-white/80 font-light leading-relaxed max-w-4xl">
            &ldquo;To collect 14.14 Lakh Tonnes of raw chaos, you don&apos;t just build an app. You build an unstoppable behavioral flywheel.&rdquo;
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="p-6 rounded-3xl bg-void/80 border border-white/10 space-y-2 shadow-inner">
              <span className="font-mono text-[10px] text-ai-cyan font-bold uppercase tracking-wider block">Core Pillar</span>
              <div className="font-display font-black text-xl text-white">Avant-Garde Swiss UX</div>
              <p className="font-body text-xs text-white/60">Impeccable product storytelling and zero-friction interactive walkthroughs.</p>
            </div>

            <div className="p-6 rounded-3xl bg-void/80 border border-white/10 space-y-2 shadow-inner">
              <span className="font-mono text-[10px] text-electric font-bold uppercase tracking-wider block">Expansion GTM</span>
              <div className="font-display font-black text-xl text-white">Pan-Urban Flywheel</div>
              <p className="font-body text-xs text-white/60">Viral network loops connecting citizens, RWAs, and highly certified processing parks.</p>
            </div>

            <div className="p-6 rounded-3xl bg-void/80 border border-white/10 space-y-2 shadow-inner">
              <span className="font-mono text-[10px] text-signal font-bold uppercase tracking-wider block">Policy Covenants</span>
              <div className="font-display font-black text-xl text-white">National EPR Alliances</div>
              <p className="font-body text-xs text-white/60">100% CPCB regulatory compliance and corporate Extended Producer Alliances.</p>
            </div>
          </div>
        </div>

        {/* Breakdown Panels (12 Cols) */}
        <div className="space-y-12">
          {/* Switchers */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-6 font-display text-lg font-bold">
            <button
              onClick={() => setActiveTab("vision")}
              className={cn("px-8 py-3 rounded-full transition-all cursor-pointer", activeTab === "vision" ? "bg-ai-cyan text-void shadow-[0_0_20px_#5AB2FF]" : "text-white/60 hover:text-white")}
            >
              Product Storytelling
            </button>
            <button
              onClick={() => setActiveTab("gtm")}
              className={cn("px-8 py-3 rounded-full transition-all cursor-pointer", activeTab === "gtm" ? "bg-ai-cyan text-void shadow-[0_0_20px_#5AB2FF]" : "text-white/60 hover:text-white")}
            >
              Viral Network GTM
            </button>
            <button
              onClick={() => setActiveTab("policy")}
              className={cn("px-8 py-3 rounded-full transition-all cursor-pointer", activeTab === "policy" ? "bg-ai-cyan text-void shadow-[0_0_20px_#5AB2FF]" : "text-white/60 hover:text-white")}
            >
              EPR Policy Mandates
            </button>
          </div>

          {/* Core Deck */}
          <div className="glass-panel p-10 sm:p-16 rounded-[48px] border border-white/15 bg-surface-2/95 shadow-2xl">
            {activeTab === "vision" ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <h3 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">Eradicating Citizen Friction</h3>
                <p className="font-body text-lg text-white/70 leading-relaxed font-light">
                  Devised the overarching &ldquo;5 Taps from Clutter to Clean&rdquo; product philosophy. Recognized early that the primary failure of previous Indian e-waste campaigns was not lack of citizen intent, but severe logistical inconvenience. Designed an intuitive Swiggy-like interface where booking an authenticated drop takes under 15 seconds.
                </p>
                <div className="p-6 rounded-3xl bg-void font-mono text-xs text-ai-cyan border border-white/10">
                  ● CRAFTED THE DEFINITIVE GOD-MODE ARCHITECTURAL PROMPT SPECIFICATION
                </div>
              </motion.div>
            ) : activeTab === "gtm" ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <h3 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">The Viral Exponential Flywheel Loop</h3>
                <p className="font-body text-lg text-white/70 leading-relaxed font-light">
                  Constructed an asset-light software aggregation model. By syndicating existing highly certified CPCB processing parks rather than building capital-heavy physical smelting plants, NIRMAN scales its doorstep pickup network across NCR, Bengaluru, and Mumbai pilot cohorts with immense capital efficiency.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-display font-bold">
                  <div className="p-6 rounded-3xl bg-void border border-white/5 flex items-center gap-4 text-white">
                    <CheckCircle2 className="w-5 h-5 text-signal" /> Universal Citizen Doorstep Access
                  </div>
                  <div className="p-6 rounded-3xl bg-void border border-white/5 flex items-center gap-4 text-white">
                    <CheckCircle2 className="w-5 h-5 text-electric" /> Automated Bank UPI Direct Compensation
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <h3 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">100% CPCB Covenants Guarantee</h3>
                <p className="font-body text-lg text-white/70 leading-relaxed font-light">
                  Secured strict KYC multi-tiered compliance gates. We guarantee that zero kilograms of collected consumer electronics ever leak into informal child-labor scrap yards or open acid baths. Every digital CO₂ offset logged is completely audit-ready for corporate Extended Producer Responsibility quotas.
                </p>
                <div className="p-6 rounded-3xl bg-void font-mono text-xs text-00FF8A border border-electric/30 font-bold">
                  ✔ ISO 14001 & R2v3 INTERNATIONAL STANDARD COVENANTS ENABLED
                </div>
              </motion.div>
            )}
          </div>
        </div>

      </main>

      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50 relative z-20">
        <p>© 2026 NIRMAN NETWORK // AARAV CHOUDHARY COMPENDIUM</p>
        <span className="text-ai-cyan font-bold">STRATEGIC CO-FOUNDER COVENANT</span>
      </footer>
    </div>
  );
}

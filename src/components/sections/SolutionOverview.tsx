"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { FIVE_STEPS_OVERVIEW } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers } from "lucide-react";

export default function SolutionOverview() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-16 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10">
      {/* Background Laser Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121A16_1px,transparent_1px),linear-gradient(to_bottom,#121A16_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-signal/15 via-electric/10 to-transparent blur-[180px] pointer-events-none -z-10 rounded-full" />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Executive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-3xl">
            <SectionLabel status="FLOW_ENGINE">04 // The Execution Mechanics Deck</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Five taps from <span className="text-signal underline">clutter</span> to clean.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
            Like Swiggy or Porter — but for dead electronics. Engineered for absolute zero citizen friction and 100% formal CPCB extraction.
          </p>
        </div>

        {/* Swiss UI Showcase (12 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Step Rail (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-signal tracking-widest uppercase font-bold block mb-6">
              ● SELECT ACTIVE STEP PIPELINE
            </span>

            {FIVE_STEPS_OVERVIEW.map((step, i) => {
              const isActive = activeStep === i;

              return (
                <motion.div
                  key={step.title}
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    "p-6 sm:p-8 rounded-3xl glass-panel border cursor-pointer transition-all duration-300 flex items-center justify-between gap-6 group",
                    isActive ? "bg-signal text-void border-signal shadow-[0_0_35px_rgba(182,255,60,0.4)] scale-105" : "bg-surface/80 border-white/10 hover:border-white/30 text-white"
                  )}
                >
                  <div className="flex items-center gap-6">
                    <span className={cn("font-mono text-xl sm:text-2xl font-black", isActive ? "text-void/60" : "text-signal")}>
                      {step.number}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  <div className={cn("text-3xl transition-transform duration-300", isActive ? "scale-125 rotate-12" : "opacity-50 group-hover:opacity-100")}>
                    {step.icon}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Master Focus Monolith Display Deck (7 Cols) */}
          <div className="lg:col-span-7 h-full min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateX: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full glass-panel p-10 sm:p-16 rounded-[48px] border-2 border-signal/80 bg-gradient-to-br from-surface-2 via-surface to-void flex flex-col justify-between shadow-[0_30px_100px_rgba(0,0,0,0.95)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-signal/15 rounded-full blur-[140px] pointer-events-none" />

                <div className="space-y-6 z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-signal tracking-widest font-extrabold uppercase">
                      ● STAGE 0{activeStep + 1} • ACTIVE EXECUTION
                    </span>
                    <span className="font-mono text-xs text-00FF8A bg-white/5 px-4 py-1 rounded-full border border-white/10">
                      O(1) PROCESSING
                    </span>
                  </div>

                  <h3 className="font-display text-5xl sm:text-7xl font-black text-white tracking-tight leading-[0.92]">
                    {FIVE_STEPS_OVERVIEW[activeStep].title} • <span className="text-signal">{FIVE_STEPS_OVERVIEW[activeStep].desc.split(".")[0]}</span>
                  </h3>

                  <p className="font-body text-lg sm:text-2xl text-white/70 font-light pt-6 leading-relaxed">
                    {FIVE_STEPS_OVERVIEW[activeStep].desc}
                  </p>
                </div>

                <div className="pt-12 border-t border-white/10 mt-12 z-10 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-signal" />
                    <span>CRYPTOGRAPHIC ESG PROOF LOGGED</span>
                  </div>
                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % FIVE_STEPS_OVERVIEW.length)}
                    className="px-6 py-3 bg-white text-void font-display font-black text-sm rounded-full hover:bg-signal transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* 3 Benefit Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="glass-panel p-8 sm:p-10 rounded-[32px] border border-white/10 space-y-4 hover:border-signal transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-signal/20 text-signal font-black flex items-center justify-center text-2xl border border-signal/40">
              🏡
            </div>
            <h4 className="font-display text-2xl font-bold text-white">Households</h4>
            <p className="font-body text-sm text-white/70 leading-relaxed font-light">Free doorstep pickup with live IoT scale authentication and Bank UPI compensation.</p>
          </div>

          <div className="glass-panel p-8 sm:p-10 rounded-[32px] border border-white/10 space-y-4 hover:border-electric transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-electric/20 text-electric font-black flex items-center justify-center text-2xl border border-electric/40">
              🏭
            </div>
            <h4 className="font-display text-2xl font-bold text-white">CPCB Recyclers</h4>
            <p className="font-body text-sm text-white/70 leading-relaxed font-light">Aggregated, continuous raw material streams replacing fragmented individual logistics.</p>
          </div>

          <div className="glass-panel p-8 sm:p-10 rounded-[32px] border border-white/10 space-y-4 hover:border-ai-cyan transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-ai-cyan/20 text-ai-cyan font-black flex items-center justify-center text-2xl border border-ai-cyan/40">
              🇮🇳
            </div>
            <h4 className="font-display text-2xl font-bold text-white">National Policy</h4>
            <p className="font-body text-sm text-white/70 leading-relaxed font-light">100% formal extraction completely eliminating unregulated toxic child labor scrap yards.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

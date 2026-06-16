"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { PRODUCT_JOURNEY_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Zap, RefreshCw, CheckCircle2, ArrowRight, Activity } from "lucide-react";

export default function Forge() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);

  // Cinematic Autonomous Autoplay Engine (advances every 3.5 seconds)
  useEffect(() => {
    if (!autoAdvance) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PRODUCT_JOURNEY_STEPS.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [autoAdvance]);

  return (
    <section
      id="product"
      className="relative min-h-screen w-full bg-void text-white py-32 px-6 sm:px-16 flex flex-col items-center justify-center select-none border-t border-white/10 overflow-hidden perspective-1000"
    >
      {/* Avant-Garde Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[650px] bg-gradient-to-tr from-signal/20 via-electric/10 to-transparent blur-[200px] rounded-full pointer-events-none -z-10" />

      {/* Avant-Garde Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#121A16_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-20">
        
        {/* Executive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <SectionLabel status="PROTOTYPE_LIVE">05 // Interactive Digital Walkthrough Deck</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              The Digital Forge <span className="text-signal underline">Prototype</span>.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 self-start md:self-auto font-mono text-xs">
            <button
              onClick={() => setAutoAdvance(!autoAdvance)}
              className={cn("px-5 py-2.5 rounded-full font-bold border transition-all flex items-center gap-2 cursor-pointer shadow-lg", autoAdvance ? "bg-signal text-void border-signal shadow-[0_0_20px_#B6FF3C]" : "bg-surface text-white border-white/20")}
            >
              <RefreshCw className={cn("w-3.5 h-3.5", autoAdvance && "animate-spin")} />
              <span>{autoAdvance ? "AUTOPLAY ACTIVE" : "AUTOPLAY PAUSED"}</span>
            </button>
            <span className="text-white/50 hidden lg:inline">● CLICK ANY STAGE TO INSPECT</span>
          </div>
        </div>

        {/* Dense Showcase Grid (12 Cols) - Zero Empty Blank Scrolling Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Levitating Luminous Device Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative my-auto">
            {/* Ambient Monolith Halos */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border-2 border-white/10 border-t-signal border-b-electric animate-spin-slow pointer-events-none" />

            <div className="relative group hover:scale-[1.02] transition-transform duration-500">
              <PhoneMockup className="shadow-[0_40px_100px_rgba(0,0,0,0.95)]">
                {PRODUCT_JOURNEY_STEPS.map((step, i) => {
                  const isActive = i === activeStep;

                  return (
                    <div
                      key={step.step}
                      className={cn(
                        "absolute inset-0 transition-all duration-700 ease-in-out p-3 flex flex-col items-center justify-center bg-gradient-to-b from-[#141E18] to-void rounded-[32px] border border-white/10 shadow-2xl overflow-hidden",
                        isActive ? "opacity-100 scale-100 z-20 pointer-events-auto" : "opacity-0 scale-95 z-10 pointer-events-none"
                      )}
                    >
                      {/* Deep luminous spotlight layer behind screenshot */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(182,255,60,0.18)_0,transparent_100%)] pointer-events-none" />

                      <div className="relative w-full h-full max-h-[520px] flex items-center justify-center">
                        <Image
                          src={step.img}
                          alt={step.title}
                          fill
                          className="object-contain p-1 filter drop-shadow-2xl"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  );
                })}
              </PhoneMockup>

              {/* Luminous Step Badge Pips */}
              <div className="absolute -right-6 sm:-right-10 top-1/3 glass-panel p-4 rounded-3xl border-2 border-signal/80 flex flex-col items-start gap-1 shadow-2xl animate-bounce bg-surface-2/95">
                <span className="font-mono text-[10px] text-signal font-extrabold tracking-widest uppercase">● STAGE #0{activeStep + 1}</span>
                <span className="font-display font-black text-sm text-white tracking-tight">{PRODUCT_JOURNEY_STEPS[activeStep].title.split(" ")[0]} Flow</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Master Selector Rail Deck (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs tracking-widest text-signal uppercase font-extrabold block">
              ● FIVE-TAP Operational Core Suite
            </span>

            <div className="space-y-4">
              {PRODUCT_JOURNEY_STEPS.map((step, idx) => {
                const isActive = idx === activeStep;

                return (
                  <motion.div
                    key={step.step}
                    onClick={() => {
                      setActiveStep(idx);
                      setAutoAdvance(false); // pause autoplay on user manual selection
                    }}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    className={cn(
                      "p-6 sm:p-8 rounded-3xl glass-panel border cursor-pointer transition-all duration-300 flex flex-col justify-between gap-4 group",
                      isActive
                        ? "bg-surface-2/95 text-white border-signal shadow-[0_20px_60px_rgba(182,255,60,0.2)] ring-2 ring-signal/40 scale-[1.02]"
                        : "bg-surface/60 border-white/10 hover:border-white/30 text-white/60 hover:text-white"
                    )}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <div className={cn("w-12 sm:w-14 h-12 sm:h-14 rounded-2xl flex items-center justify-center font-display font-black text-xl transition-all shadow-lg shrink-0", isActive ? "bg-signal text-void shadow-[0_0_20px_#B6FF3C]" : "bg-surface-2 text-white/40 group-hover:text-white")}>
                          {step.step}
                        </div>
                        <h3 className={cn("font-display text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors", isActive ? "text-signal" : "text-white group-hover:text-signal")}>
                          {step.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={cn("font-mono text-xs font-bold tracking-widest uppercase hidden sm:inline", isActive ? "text-00FF8A" : "text-white/30")}>
                          {step.status}
                        </span>
                        <div className={cn("w-3 h-3 rounded-full shrink-0", isActive ? "bg-signal animate-pulse shadow-[0_0_12px_#B6FF3C]" : "bg-white/10")} />
                      </div>
                    </div>

                    {/* Highly descriptive expanded copy */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="pt-4 border-t border-white/10 font-body text-sm sm:text-base text-white/80 font-light leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          <p>{step.desc}</p>
                          <span className="font-mono text-[10px] text-00FF8A font-bold bg-white/5 px-3 py-1 rounded-full border border-white/10 shrink-0 self-start sm:self-auto">
                            ✔ QUANTIZED LOGISTICS
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Master Architectural Guarantee Notice */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 flex items-center justify-between gap-6 font-mono text-xs text-white/50">
          <span>● OPERATIONAL PROTOTYPE BUILT ON VERCEL EDGE COMPILATION SUITES</span>
          <button
            onClick={() => setActiveStep((prev) => (prev + 1) % PRODUCT_JOURNEY_STEPS.length)}
            className="px-6 py-2.5 rounded-full bg-signal text-void font-extrabold hover:bg-electric transition-colors cursor-pointer shrink-0"
          >
            Advance Prototype Stage →
          </button>
        </div>

      </div>
    </section>
  );
}

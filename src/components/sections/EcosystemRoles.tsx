"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { ECOSYSTEM_ROLES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Zap, CheckCircle2, ChevronRight, RefreshCw } from "lucide-react";

export default function EcosystemRoles() {
  const [activeRole, setActiveRole] = useState(0);

  return (
    <section className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-16 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10">
      
      {/* Halos */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-signal/15 via-electric/10 to-transparent blur-[180px] pointer-events-none -z-10 rounded-full" />

      {/* Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#121A16_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <SectionLabel status="CIRCULAR_FLYWHEEL">08 // Platform Participants</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Four roles. One <span className="text-signal underline">app</span>.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
            A universally unified digital ecosystem where every individual participant&apos;s direct operational flow fuels the success of the overarching circular economy.
          </p>
        </div>

        {/* Monolith Deck (12 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Switchers (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-signal tracking-widest uppercase font-bold block mb-6">
              ● ENGAGE PARTICIPANT COVENANT
            </span>

            {ECOSYSTEM_ROLES.map((role, i) => {
              const isActive = activeRole === i;

              return (
                <motion.div
                  key={role.title}
                  onClick={() => setActiveRole(i)}
                  className={cn(
                    "p-6 sm:p-8 rounded-3xl glass-panel border cursor-pointer transition-all duration-300 flex items-center justify-between gap-6 group",
                    isActive ? "bg-surface-2/90 text-white border-signal/80 shadow-[0_0_40px_rgba(182,255,60,0.2)] scale-105" : "bg-surface/80 border-white/10 hover:border-white/30 text-white/70"
                  )}
                >
                  <div className="flex items-center gap-6">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-300 shadow-lg shrink-0", isActive ? "bg-signal text-void rotate-12 scale-110" : "bg-surface text-white")}>
                      {role.icon}
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] tracking-widest text-electric block uppercase font-bold">
                        STAGE_0{i + 1} • {isActive ? "ACTIVE" : "STANDBY"}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-signal transition-colors">
                        {role.title}
                      </h3>
                    </div>
                  </div>

                  <ChevronRight className={cn("w-6 h-6 transition-transform duration-300", isActive ? "text-signal translate-x-1" : "text-white/30 group-hover:text-white")} />
                </motion.div>
              );
            })}
          </div>

          {/* Right: Master Focus Panel (7 Cols) */}
          <div className="lg:col-span-7 h-full min-h-[550px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full glass-panel p-10 sm:p-16 rounded-[48px] border-2 border-signal/60 bg-gradient-to-br from-surface-2 via-surface-1 to-void flex flex-col justify-between shadow-[0_40px_100px_rgba(0,0,0,0.95)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-signal/15 rounded-full blur-[140px] pointer-events-none" />

                <div className="space-y-8 z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6 font-mono text-xs font-bold">
                    <span className="text-signal uppercase">● {ECOSYSTEM_ROLES[activeRole].title} • SPECIFICATION</span>
                    <span className="text-00FF8A bg-white/5 px-4 py-1 rounded-full border border-white/10">✔ VERIFIED COVENANT</span>
                  </div>

                  <div className="space-y-4">
                    <div className="w-20 h-20 rounded-3xl bg-signal flex items-center justify-center text-void text-4xl font-black shadow-[0_0_30px_#B6FF3C]">
                      {ECOSYSTEM_ROLES[activeRole].icon}
                    </div>

                    <h3 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight pt-2 leading-[1.05]">
                      {ECOSYSTEM_ROLES[activeRole].title}
                    </h3>
                  </div>

                  <p className="font-body text-lg sm:text-2xl text-white/80 font-light leading-relaxed">
                    {ECOSYSTEM_ROLES[activeRole].desc}
                  </p>

                  <div className="space-y-4 pt-6">
                    <span className="font-mono text-xs text-white/40 uppercase tracking-widest block font-bold">
                      ● ASSIGNED CAPABILITIES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {ECOSYSTEM_ROLES[activeRole].bullets.map((b) => (
                        <div key={b} className="p-4 rounded-2xl bg-void/60 border border-white/10 flex items-center gap-3 font-display font-bold text-sm text-white">
                          <CheckCircle2 className="w-4 h-4 text-signal shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-12 border-t border-white/10 mt-12 z-10 flex items-center justify-between font-mono text-xs text-white/40 font-bold">
                  <span className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-electric animate-spin-slow" /> AUTONOMOUS DATA MESH SYNC
                  </span>
                  <span className="text-white font-bold">O(1) LATENCY</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

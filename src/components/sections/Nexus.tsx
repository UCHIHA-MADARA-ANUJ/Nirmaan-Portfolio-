"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, CheckCircle2, ArrowRight, ArrowUpRight, Zap } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

function HighlyOptimizedExplosion({ onComplete }: { onComplete: () => void }) {
  const particles = Array.from({ length: 80 });

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2.5, delay: 1 }}
      onAnimationComplete={onComplete}
      className="absolute inset-0 pointer-events-none z-[99999] overflow-hidden flex items-center justify-center"
    >
      {particles.map((_, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const speed = 300 + Math.random() * 600;
        const size = 8 + Math.random() * 16;
        const color = i % 2 === 0 ? "#B6FF3C" : "#00FF8A";

        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
            animate={{
              x: Math.cos(angle) * speed,
              y: Math.sin(angle) * speed,
              scale: [0, 1.8, 0],
              opacity: [1, 1, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 1.5 + Math.random() * 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              boxShadow: `0 0 30px ${color}`,
            }}
          />
        );
      })}
    </motion.div>
  );
}

export default function Nexus() {
  const [isLaunched, setIsLaunched] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLaunchClick = () => {
    setIsLaunched(true);
    setTimeout(() => {
      setShowSuccessModal(true);
    }, 1200);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="final-cta" className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-16 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10 perspective-1000">
      
      {/* Absolute Background Parallax Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden flex items-center justify-center -z-20">
        <div className="relative w-full h-full max-w-7xl max-h-[850px] blur-[2px]">
          <Image
            src="/images/generated/seedling-circuit.png"
            alt="Seedling growing through circuit board"
            fill
            className="object-cover rounded-[70px]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/40" />
      </div>

      {/* Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-signal/15 via-electric/10 to-transparent rounded-full blur-[200px] pointer-events-none -z-10" />

      {/* Deep Text in negative space */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-hindi text-[250px] sm:text-[420px] font-black text-white/[0.02] pointer-events-none -z-10 select-none">
        निर्माण
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Title Deck */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <SectionLabel status="READY">16 // The Ultimate Synthesis Deck</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Let&apos;s turn India&apos;s <span className="text-signal underline">e-waste</span> into impact.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
            One pickup. One verified CPCB recycler. One cleaner future.
          </p>
        </div>

        {/* Space-Warp Launch Monolith */}
        <motion.div
          ref={containerRef}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-10 sm:p-20 rounded-[64px] glass-panel border-2 border-signal/80 shadow-[0_40px_120px_rgba(0,0,0,0.95)] max-w-6xl mx-auto space-y-12 backdrop-blur-3xl bg-surface-2/90 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-signal/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="space-y-6 text-center z-10 relative">
            <span className="font-mono text-xs text-signal tracking-widest uppercase font-black block animate-pulse">
              ● ENGAGE DIGITAL ALCHEMY KERNEL
            </span>

            <h3 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Initiate Nationwide Dispatch
            </h3>

            <p className="font-body text-xl sm:text-3xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              We provide the exact software engine to monetize dead electronics effortlessly.
            </p>
          </div>

          {/* Deck Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8 relative z-10">
            <MagneticButton
              onClick={handleLaunchClick}
              strength={0.4}
              className="w-full sm:w-auto px-16 py-8 bg-signal text-void font-display font-black text-2xl sm:text-3xl rounded-full hover:bg-electric shadow-[0_0_80px_rgba(182,255,60,0.6)] hover:scale-110 transition-all cursor-pointer flex items-center justify-center gap-4 group"
            >
              <span>Launch NIRMAN 🚀</span>
              <ArrowUpRight className="w-8 h-8 stroke-[3] group-hover:rotate-45 transition-transform duration-300" />
            </MagneticButton>

            <button
              onClick={() => scrollTo("#product")}
              className="w-full sm:w-auto px-14 py-8 glass-panel text-white font-display font-black text-2xl rounded-full hover:bg-white hover:text-void transition-all cursor-pointer border-2 border-white/20 flex items-center justify-center gap-4 shadow-2xl"
            >
              <Zap className="w-7 h-7 text-signal" />
              <span>Inspect UX Flow</span>
            </button>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-wrap items-center justify-center gap-10 font-mono text-xs text-white/60 font-bold z-10 relative">
            <span className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5 text-signal" /> INSTANT DOORSTEP COURIER
            </span>
            <span className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5 text-electric" /> 100% CPCB VERIFIED
            </span>
            <span className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5 text-ai-cyan" /> REAL-TIME CO₂ LEDGER
            </span>
          </div>
        </motion.div>

      </div>

      {/* Celebration */}
      {isLaunched && <HighlyOptimizedExplosion onComplete={() => setIsLaunched(false)} />}

      {/* Flawless Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-void/90 backdrop-blur-3xl p-6 select-none cursor-default"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-10 sm:p-20 rounded-[50px] max-w-3xl w-full text-center space-y-10 border-2 border-signal shadow-[0_0_120px_rgba(182,255,60,0.5)] bg-surface-2/95 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-signal/20 rounded-full blur-[140px] pointer-events-none" />

              <div className="w-28 h-28 rounded-full bg-signal/20 border-2 border-signal flex items-center justify-center text-signal mx-auto text-6xl shadow-[0_0_50px_#B6FF3C]">
                🎉
              </div>

              <div className="space-y-4">
                <span className="font-mono text-xs text-signal tracking-widest uppercase font-extrabold block">
                  ● PROTOCOL_ENGAGEMENT_SUCCESS
                </span>
                <h3 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
                  Welcome to the Digital Alchemy Era
                </h3>
                <p className="font-body text-base sm:text-xl text-white/70 font-light leading-relaxed">
                  Your household telemetry has been provisioned on our CPCB blockchain network. A verified rider will be dispatched to your coordinates automatically.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-void font-mono text-xs sm:text-sm text-electric border border-white/10 space-y-3 text-left shadow-inner">
                <div className="text-white/40 pb-3 border-b border-white/10 font-bold uppercase">TRANSACTION LEDGER COVENANT</div>
                <div className="flex justify-between"><span>DISPATCH_ID:</span> <span className="text-white font-extrabold">#NRM-2026-9842</span></div>
                <div className="flex justify-between"><span>PROCESSING_PARK:</span> <span className="text-white font-extrabold">NCR Central CPCB Processing Facility</span></div>
                <div className="flex justify-between"><span>CO2_OFFSET_RESERVE:</span> <span className="text-signal font-extrabold">+18.4 kg Saved</span></div>
              </div>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-6 bg-signal text-void font-display font-black text-2xl rounded-full hover:bg-electric transition-all shadow-[0_0_50px_rgba(182,255,60,0.6)] cursor-pointer"
              >
                Continue Executive Walkthrough 🚀
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { useLoaderStore } from "@/store/loaderStore";
import { cn } from "@/lib/utils";
import { ShieldCheck, Cpu, Database, RefreshCw, Zap, ArrowRight } from "lucide-react";

export default function GenesisLoader() {
  const { hasSeenLoader, isLoading, completeLoader } = useLoaderStore();
  
  const [progress, setProgress] = useState(0);
  const [activeStage, setActiveStage] = useState("Authenticating MCA Corporate Identity...");
  const [startSequence, setStartSequence] = useState(false);
  const [fadeExit, setFadeExit] = useState(false);
  const [indicHash, setIndicHash] = useState("0xNIRMAN_INIT");

  useEffect(() => {
    if (!isLoading) return;

    if (hasSeenLoader) {
      completeLoader();
      return;
    }

    if (!startSequence) return;

    // Live cryptographic hashing microcopy
    const hashes = [
      "0xDEAD_BEEF_CPCB",
      "0x1414_LAKH_TONNES",
      "0xZERO_SLAG_EXTRACTION",
      "0xINDIC_METALLURGY_v2",
      "0xVERDE_RESONATE_CORE",
    ];
    const hashTimer = setInterval(() => {
      setIndicHash(hashes[Math.floor(Math.random() * hashes.length)]);
    }, 400);

    let startTime = performance.now();
    const duration = 5000; // 5 seconds ultra-premium lightning fast ritual

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const prog = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(prog);

      if (prog < 25) {
        setActiveStage("Authenticating MCA Corporate Covenants // KYC Gate");
      } else if (prog >= 25 && prog < 60) {
        setActiveStage("Synchronizing Indic IoT Telemetry Scales // NCR Hub");
      } else if (prog >= 60 && prog < 85) {
        setActiveStage("Engaging PyTorch Object Pipelines // Zero Slag");
      } else {
        setActiveStage("Algorithmic Sanctuary Active // Sanctuary Deployed");
      }

      if (prog >= 100) {
        clearInterval(interval);
        clearInterval(hashTimer);
        setFadeExit(true);
        setTimeout(() => {
          completeLoader();
        }, 800);
      }
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(hashTimer);
    };
  }, [isLoading, hasSeenLoader, startSequence, completeLoader]);

  const handleBypass = () => {
    setFadeExit(true);
    setTimeout(() => {
      completeLoader();
    }, 600);
  };

  if (!isLoading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[999999] bg-void flex flex-col justify-between p-6 md:p-12 overflow-hidden selection:bg-signal selection:text-black font-mono select-none transition-opacity duration-700 ease-out",
        fadeExit && "opacity-0 pointer-events-none"
      )}
    >
      {/* Absolute Master Cyber Overlays */}
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="scanline absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-signal/5 via-transparent to-electric/5 opacity-30 pointer-events-none" />

      {/* Resonate Acoustic Sanctuary Click Initialization */}
      {!startSequence ? (
        <div className="absolute inset-0 flex items-center justify-center cursor-pointer z-50 px-6" onClick={() => setStartSequence(true)}>
          <div className="text-center animate-pulse space-y-6 max-w-2xl glass-panel p-10 sm:p-16 rounded-[40px] border-2 border-signal/60 shadow-[0_0_80px_rgba(182,255,60,0.25)] bg-surface-2/95">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-signal font-bold uppercase bg-signal/10 px-4 py-1.5 rounded-full border border-signal/30">
              <Zap className="w-3.5 h-3.5 fill-signal" />
              <span>Algorithmic Empathy Link Required</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase leading-none pt-2">
              Engage NIRMAN OS Sequence
            </h2>

            <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              Eradicating digital isolation and high-tech vertical clutter through high-performance CPCB logistics. Chlorophyll meets silicon.
            </p>

            <button className="w-full py-5 bg-signal text-void font-display font-black text-lg rounded-full hover:bg-electric transition-all shadow-[0_0_30px_#B6FF3C] cursor-pointer mt-4 flex items-center justify-center gap-3">
              <span>Initialize Engine</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </div>
      ) : (
        /* Verde Technical System Core Boot Deck */
        <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl px-6 md:px-10 my-auto mx-auto space-y-12 animate-fade-in">
          
          {/* Top Micro Information */}
          <div className="w-full flex justify-between items-center text-[10px] sm:text-xs text-white/40 tracking-[0.3em] uppercase border-b border-white/10 pb-4">
            <span className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-signal" />
              <span>SYS_KERNEL // v4.0.0</span>
            </span>
            <span className="text-signal font-bold">● HASH // {indicHash}</span>
          </div>

          {/* Centered Rotating Monolith Rings & Wordmark */}
          <div className="relative flex flex-col items-center justify-center py-10 w-full">
            {/* Spinning Custom Hardware Arcs */}
            <div className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full border-2 border-white/10 border-t-signal border-b-electric animate-spin-slow pointer-events-none" />
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-white/5 border-l-ai-cyan [animation-direction:reverse] animate-spin-slow pointer-events-none" />
            
            <div className="text-center space-y-3 z-10">
              <h1 className="text-7xl sm:text-9xl font-display font-black text-signal tracking-wide text-neon-xl leading-none">
                निर्माण
              </h1>
              <div className="font-mono text-xl sm:text-2xl tracking-[0.8em] font-extrabold text-white">
                N I R M A N
              </div>
            </div>
          </div>

          {/* Progress Rail Deck */}
          <div className="w-full flex flex-col items-center gap-4 w-full max-w-2xl pt-4">
            <div className="flex justify-between w-full font-mono text-[10px] sm:text-xs text-white/70 uppercase tracking-[0.2em] font-semibold">
              <span className="flex items-center gap-2.5 truncate pr-4">
                <RefreshCw className="w-3.5 h-3.5 text-signal animate-spin" />
                <span>{activeStage}</span>
              </span>
              <span className="font-black text-signal text-sm sm:text-base shrink-0">{progress}%</span>
            </div>

            {/* Gorgeous Laser Line */}
            <div className="w-full h-2 bg-white/10 overflow-hidden rounded-full border border-white/10 relative shadow-2xl p-0.5">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-signal/60 via-signal to-electric rounded-full transition-all duration-75 shadow-[0_0_20px_#B6FF3C]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Quick Override CTA */}
          <div className="pt-6">
            <button
              onClick={handleBypass}
              className="px-8 py-3 rounded-full bg-surface-2 hover:bg-signal text-signal hover:text-void font-mono font-bold text-xs tracking-[0.2em] border border-signal/40 hover:border-signal transition-all shadow-[0_0_30px_rgba(182,255,60,0.2)] cursor-pointer active:scale-95"
            >
              [⚡ BYPASS ALGORITHMIC BOOT]
            </button>
          </div>

        </div>
      )}

      {/* Bottom Corner Microcopy */}
      <div className="absolute bottom-6 left-6 md:left-12 font-mono text-[9px] sm:text-[10px] text-white/40 tracking-widest uppercase flex items-center gap-4">
        <span>MEM: 16GB VERCEL EDGE</span>
        <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline" />
        <span className="hidden sm:inline">CPCB: VERIFIED</span>
      </div>
      <div className="absolute bottom-6 right-6 md:right-12 font-mono text-[9px] sm:text-[10px] text-white/40 tracking-widest">
        16/06/2026 // INDIA SANCTUARY
      </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CustomCursor from "@/components/ui/CustomCursor";
import MagneticButton from "@/components/ui/MagneticButton";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ShieldAlert, Terminal, ArrowLeft, RefreshCw, Zap, Search, Activity, Cpu } from "lucide-react";

export default function NotFound() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [glitchText, setGlitchText] = useState("404");

  // Alphanumeric glitch effect on 404 text
  useEffect(() => {
    const chars = "404#%$!@&*E-WASTE";
    const timer = setInterval(() => {
      if (Math.random() > 0.75) {
        setGlitchText((prev) =>
          prev === "404"
            ? chars.substring(Math.floor(Math.random() * 5), Math.floor(Math.random() * 5) + 3)
            : "404"
        );
      } else {
        setGlitchText("404");
      }
    }, 250);

    return () => clearInterval(timer);
  }, []);

  const runDiagnosticScan = () => {
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      const fictitiousScrap = [
        "Recovered 1x Abandoned Server Motherboard • Salavaged Value: ₹6,400 INR",
        "Discovered 4.2 kg Frayed Copper Wires in Informal Sector • 38 kg CO2 Offset",
        "Restored Lost Fictitious Node ID #9821 • Verified CPCB Telemetry Active",
        "Extracted Gold / Cobalt Trace from Lost GPS Sector • ₹12,500 INR Recoverable",
      ];
      const res = fictitiousScrap[Math.floor(Math.random() * fictitiousScrap.length)];
      setScanResult(res);
      setIsScanning(false);
    }, 2400);
  };

  return (
    <div className="bg-void text-white min-h-screen flex flex-col justify-between overflow-x-hidden relative selection:bg-signal selection:text-black font-body select-none">
      <CustomCursor />
      
      {/* Avant-Garde Reference Cyber Overlays */}
      <div className="bg-noise" />
      <div className="scanline" />
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      {/* Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-red-500/15 via-warning/10 to-transparent rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Top Minimal Navigation Bar */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between relative z-20">
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-signal text-void font-hindi font-black flex items-center justify-center text-xl shadow-[0_0_20px_rgba(182,255,60,0.5)] group-hover:scale-110 transition-transform">
            नि
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-white text-lg tracking-wider group-hover:text-signal transition-colors">
              {SITE_CONFIG.brand}
            </span>
            <span className="font-mono text-white/40 text-[9px] tracking-[0.25em] font-semibold">
              ALGORITHMIC SANCTUARY
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 sm:px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 flex items-center gap-2 font-bold">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>SECTOR_NOT_FOUND</span>
          </span>
        </div>
      </header>

      {/* Main Cinematic Masterpiece Focus Deck */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-6 my-auto py-12 text-center">
        
        {/* Holographic Radar Ring Monolith */}
        <div className="relative flex flex-col items-center justify-center w-full py-6">
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border-2 border-white/10 border-t-red-500 border-b-warning animate-spin-slow pointer-events-none" />
          <div className="absolute w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full border border-white/5 border-l-signal animate-spin-slow [animation-direction:reverse] pointer-events-none" />
          
          <span className="font-mono text-xs tracking-[0.4em] font-black text-warning uppercase block mb-4">
            ● SYSTEM 404 // DEAD NODE MESH
          </span>

          <motion.h1
            className="font-display text-8xl sm:text-[180px] lg:text-[220px] font-black tracking-tight text-white leading-none drop-shadow-[0_0_80px_rgba(239,68,68,0.4)] relative"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {glitchText}
          </motion.h1>

          <div className="font-mono text-lg sm:text-2xl tracking-[0.6em] font-bold text-white/60 uppercase mt-4">
            ALGORITHMIC SIGNAL LOST
          </div>
        </div>

        {/* Storytelling Copy */}
        <p className="font-body text-base sm:text-2xl text-white/80 font-light max-w-2xl leading-relaxed pt-6">
          The exact geofenced coordinates you are attempting to trace have been completely shredded or redirected to an informal e-waste graveyard.
        </p>

        {/* Extraordinary Interactive Easter Egg: Scrap Diagnostic Recovery Loop */}
        <div className="w-full max-w-xl pt-10">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 space-y-5 bg-surface-2/90 shadow-2xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-signal/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
              <span className="text-signal font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-signal" />
                <span>E-WASTE_DIAGNOSTIC_TOOL</span>
              </span>
              <span className="text-white/40">v2.0.0</span>
            </div>

            <p className="font-body text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Before returning to the main command composer, initiate an algorithmic radar scan to probe this lost sector for untransmuted scrap value.
            </p>

            {/* Action CTA or Scan Result */}
            {!scanResult ? (
              <button
                onClick={runDiagnosticScan}
                disabled={isScanning}
                className={cn(
                  "w-full py-4 rounded-2xl font-display font-black text-sm flex items-center justify-center gap-3 transition-all cursor-pointer shadow-lg",
                  isScanning ? "bg-electric text-void animate-pulse" : "bg-signal text-void hover:bg-white active:scale-95"
                )}
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>PROBING INFORMAL SCRAP DUMPS...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 fill-void" />
                    <span>Run Scrap Diagnostic Scan ⚡</span>
                  </>
                )}
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 rounded-2xl bg-void border border-signal font-mono text-xs sm:text-sm text-signal space-y-3 shadow-inner"
              >
                <div className="font-bold flex items-center gap-2 text-white">
                  <Activity className="w-4 h-4 text-00FF8A" />
                  <span>● ALGORITHMIC EXTRACTION SUCCESSFUL:</span>
                </div>
                <div className="text-00FF8A leading-relaxed">{scanResult}</div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <Link href="/" className="underline text-white hover:text-signal transition-colors font-bold">
                    ← Reclaim Value on Home Composer
                  </Link>
                  <span className="text-white/40 text-[10px]">+500 XP</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Avant-Garde Primary Return Buttons Deck */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md">
          <Link href="/" className="w-full">
            <MagneticButton
              strength={0.3}
              className="w-full py-5 bg-white hover:bg-signal text-void font-display font-black text-base rounded-full transition-all shadow-xl flex items-center justify-center gap-3 group cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Return to Algorithmic Sanctuary</span>
            </MagneticButton>
          </Link>
        </div>

      </main>

      {/* Standalone Avant-Garde Cyber Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50 relative z-20">
        <p>© 2026 NIRMAN NETWORK. BUILT FOR GODMODE EXCELLENCE.</p>
        <div className="flex items-center gap-6 font-bold text-white/70">
          <span className="text-signal">CPCB SECURED</span>
          <span>•</span>
          <span className="text-electric">ZERO LANDFILL</span>
          <span>•</span>
          <span className="text-ai-cyan">VERCEL EDGE</span>
        </div>
      </footer>
    </div>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, RotateCcw, ShieldCheck, Award } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLoaderStore } from "@/store/loaderStore";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const replayGenesis = () => {
    useLoaderStore.getState().completeLoader(); // reset state
    useLoaderStore.setState({ hasSeenLoader: false, isLoading: true });
    window.scrollTo({ top: 0 });
    window.location.reload();
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-void text-white pt-24 pb-12 border-t border-white/10 overflow-hidden select-none"
    >
      {/* Background radial spotlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-t from-signal/10 via-electric/5 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand & Alchemical Mission */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" onClick={scrollToTop} className="inline-block group">
              <span className="font-hindi text-signal text-5xl font-extrabold block leading-tight group-hover:scale-105 transition-transform">
                {SITE_CONFIG.hindiBrand}
              </span>
              <span className="font-mono text-white/60 text-xs tracking-[0.5em] font-bold block mt-2 group-hover:text-signal transition-colors">
                {SITE_CONFIG.brand} LOGISTICS NETWORK
              </span>
            </a>
            <p className="text-white/70 text-lg max-w-sm font-body leading-relaxed">
              {SITE_CONFIG.footerText}
            </p>
            
            {/* Replay Genesis Godmode Ritual Button */}
            <div className="pt-4">
              <button
                onClick={replayGenesis}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-signal/10 hover:bg-signal text-signal hover:text-void font-mono text-xs font-bold border border-signal/40 transition-all cursor-pointer group shadow-[0_0_25px_rgba(182,255,60,0.2)]"
              >
                <RotateCcw className="w-3.5 h-3.5 text-signal group-hover:text-void group-hover:rotate-180 transition-transform duration-700" />
                <span>[⚡ REPLAY GENESIS RITUAL]</span>
              </button>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="space-y-5">
            <h4 className="font-mono text-xs tracking-widest text-electric uppercase font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Ecosystem
            </h4>
            <ul className="space-y-3.5 font-display text-base font-medium">
              <li>
                <button onClick={() => scrollTo("#mission")} className="text-white/80 hover:text-signal transition-colors cursor-pointer">
                  Mission Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#problem")} className="text-white/80 hover:text-signal transition-colors cursor-pointer">
                  The Graveyard
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#solution")} className="text-white/80 hover:text-signal transition-colors cursor-pointer">
                  5-Tap Solution
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#product")} className="text-white/80 hover:text-signal transition-colors cursor-pointer">
                  Product Prototype
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="space-y-5">
            <h4 className="font-mono text-xs tracking-widest text-ai-cyan uppercase font-bold flex items-center gap-2">
              <Award className="w-4 h-4" /> Infrastructure
            </h4>
            <ul className="space-y-3.5 font-display text-base font-medium">
              <li>
                <button onClick={() => scrollTo("#network")} className="text-white/80 hover:text-signal transition-colors cursor-pointer">
                  Radar Partner Map
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#ai")} className="text-white/80 hover:text-signal transition-colors cursor-pointer">
                  AI Cortex
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#impact")} className="text-white/80 hover:text-signal transition-colors cursor-pointer">
                  Impact Ledger
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#tech")} className="text-white/80 hover:text-signal transition-colors cursor-pointer">
                  System Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links 3 */}
          <div className="space-y-5">
            <h4 className="font-mono text-xs tracking-widest text-warning uppercase font-bold">Initiative</h4>
            <ul className="space-y-3.5 font-display text-base font-medium">
              <li>
                <button onClick={() => scrollTo("#roadmap")} className="text-white/80 hover:text-signal transition-colors cursor-pointer">
                  24-Month Roadmap
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#team")} className="text-white/80 hover:text-signal transition-colors cursor-pointer">
                  The Architects
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#final-cta")} className="text-signal font-extrabold hover:underline transition-all cursor-pointer flex items-center gap-1.5">
                  <span>Initiate Pickup</span>
                  <span className="text-lg">🚀</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

        {/* Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-white/50">
          <p>© 2026 NIRMAN. Built for Awwwards / Godmode Excellence.</p>
          <div className="flex items-center gap-6 font-bold text-white/70">
            <span className="text-signal">✔ CPCB AUTHENTICATED</span>
            <span>•</span>
            <span className="text-electric">✔ ZERO LANDFILL</span>
            <span>•</span>
            <span className="text-ai-cyan">✔ IOT TELEMETRY</span>
          </div>
        </div>
      </div>

      {/* Floating Back to top CTA */}
      <div className="fixed bottom-10 right-10 z-[9999]">
        <MagneticButton
          onClick={scrollToTop}
          className="w-16 h-16 bg-signal text-void rounded-full flex items-center justify-center hover:bg-electric shadow-[0_0_40px_rgba(182,255,60,0.6)] transition-all cursor-pointer hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="w-7 h-7 stroke-[3]" />
        </MagneticButton>
      </div>
    </motion.footer>
  );
}

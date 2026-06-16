"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { TRUST_VERIFICATION_FLOW } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CheckCircle2, Lock, ArrowRight } from "lucide-react";

export default function TrustVerification() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState(4); // default fully accessible

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const line = document.querySelector(".trust-progress-line") as SVGPathElement;

      if (line) {
        gsap.fromTo(
          line,
          { strokeDashoffset: 1200 },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 80%",
              scrub: true,
              onUpdate: (self) => {
                const prog = self.progress;
                const idx = Math.min(Math.floor(prog * 5), 4);
                setActiveNode(idx);
              },
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getStepIcon = (index: number) => {
    return index === 0 ? "🏢" : index === 1 ? "📍" : index === 2 ? "📄" : index === 3 ? "🛡️" : "✅";
  };

  return (
    <section className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-16 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10">
      
      {/* Avant-Garde Halos */}
      <div className="absolute bottom-1/4 right-1/3 w-[800px] h-[500px] bg-gradient-to-tr from-electric/10 via-ai-cyan/5 to-transparent rounded-full blur-[180px] pointer-events-none -z-10" />

      <div ref={sectionRef} className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Executive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <SectionLabel status="KYC_PIPELINE">10 // Strict Chain of Custody</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Trust-first <span className="text-signal underline">recycling</span>.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
            We do not syndicate scrap to unregulated acid-bath syndicates. Complete multi-tiered KYC filtering before any partner activates on the national radar.
          </p>
        </div>

        {/* Master Avant-Garde Cryptographic Timeline Deck */}
        <div className="relative pt-12">
          
          {/* Animated SVG Route Trace */}
          <div className="hidden lg:block absolute top-[135px] left-16 right-16 h-2 overflow-visible pointer-events-none z-0">
            <svg className="w-full h-8 overflow-visible">
              <path
                d="M0,4 L1200,4"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="trust-progress-line"
                d="M0,4 L1200,4"
                stroke="#B6FF3C"
                strokeWidth="6"
                strokeDasharray="1200"
                strokeDashoffset="1200"
                fill="none"
              />
            </svg>
          </div>

          {/* 5 Monolithic Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {TRUST_VERIFICATION_FLOW.map((step, i) => {
              const isActive = i <= activeNode;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "glass-panel p-8 sm:p-10 rounded-[40px] flex flex-col justify-between transition-all duration-500 border group shadow-2xl min-h-[420px]",
                    isActive ? "bg-surface-2/90 border-signal/80 shadow-[0_20px_60px_rgba(182,255,60,0.15)] scale-[1.02]" : "bg-surface/60 border-white/5 opacity-50"
                  )}
                >
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-8 z-10">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center font-display font-extrabold text-2xl transition-all shadow-lg shrink-0",
                        isActive ? "bg-signal text-void shadow-[0_0_20px_#B6FF3C]" : "bg-white/5 text-white/40"
                      )}
                    >
                      {step.step}
                    </div>
                    <div className="text-4xl filter drop-shadow group-hover:scale-110 transition-transform">
                      {getStepIcon(i)}
                    </div>
                  </div>

                  {/* Title & Copy */}
                  <div className="space-y-4 z-10">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                  {/* Seal */}
                  <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between font-mono text-[10px] z-10">
                    <span className="text-white/40">AUDIT_GATE</span>
                    <span className={cn("font-bold tracking-wider flex items-center gap-1", isActive ? "text-00FF8A" : "text-white/30")}>
                      {isActive ? <CheckCircle2 className="w-3.5 h-3.5 text-00FF8A" /> : <Lock className="w-3.5 h-3.5 text-white/30" />}
                      <span>{isActive ? "PASSED" : "LOCKED"}</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Master Guarantee Dashboard Monolith Lock */}
        <div className="glass-panel p-10 sm:p-14 rounded-[48px] border-2 border-signal/80 bg-gradient-to-r from-signal/15 via-surface-2 to-void flex flex-col sm:flex-row items-center justify-between gap-8 shadow-[0_20px_80px_rgba(182,255,60,0.2)]">
          <div className="space-y-3 text-center sm:text-left max-w-3xl">
            <span className="font-mono text-xs text-signal tracking-widest uppercase font-extrabold block">● 100% CPCB Compliance Guarantee</span>
            <h3 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">Every recycling certificate fulfills Extended Producer Responsibility mandates.</h3>
          </div>
          <button className="px-10 py-5 bg-signal text-void font-display font-black text-lg rounded-full hover:bg-electric transition-all shadow-2xl shrink-0 cursor-pointer flex items-center gap-3">
            <span>Inspect Audit Ledger</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}

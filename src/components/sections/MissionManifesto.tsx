"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import { Zap, RefreshCw } from "lucide-react";

export default function MissionManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pin and smooth sliding reveal without ANY blurry filter
      gsap.fromTo(
        ".manifesto-word",
        { opacity: 0.15, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: true,
          },
        }
      );

      // Vertical slicing laser line
      gsap.fromTo(
        ".manifesto-laser",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=200%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderEditorialWords = (text: string, highlights: string[]) => {
    return text.split(" ").map((word, i) => {
      const clean = word.replace(/[^a-zA-Z0-9-]/g, "");
      const isHighlight = highlights.some((h) => clean.toLowerCase().includes(h.toLowerCase()));
      return (
        <span
          key={i}
          className={cn(
            "manifesto-word inline-block mr-4 sm:mr-7 transition-all duration-300 will-change-transform preserve-3d",
            isHighlight ? "text-signal font-black drop-shadow-[0_0_40px_rgba(182,255,60,0.6)]" : "text-white"
          )}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <section
      id="mission"
      ref={containerRef}
      className="relative min-h-screen w-full bg-void flex flex-col items-center justify-center px-6 sm:px-16 py-32 overflow-hidden select-none border-t border-white/10 perspective-1000"
    >
      {/* Avant-Garde Background Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_0,transparent_100%)] pointer-events-none" />

      {/* Spotlights */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-signal/15 to-transparent rounded-full blur-[200px] pointer-events-none -z-10" />

      {/* Vertical Animated Slicing Neon Laser Line */}
      <div className="absolute left-8 sm:left-16 top-0 bottom-0 w-1 bg-white/5 pointer-events-none rounded-full overflow-hidden">
        <div className="manifesto-laser absolute top-0 left-0 w-full h-full bg-gradient-to-b from-signal via-electric to-ai-cyan origin-top shadow-[0_0_30px_#B6FF3C]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-16 pl-6 sm:pl-12">
        <div className="flex items-center gap-4">
          <SectionLabel status="DIRECTIVE_ONLINE">01 // The Core Directive</SectionLabel>
          <span className="font-mono text-xs text-00FF8A bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mb-8 font-bold animate-pulse">
            <Zap className="w-3.5 h-3.5 inline mr-1 fill-electric" /> O(1) ALGORTIHMIC EMPATHY
          </span>
        </div>

        {/* Massive Manifesto Monolith Text: Completely Legible, Razor Sharp */}
        <div className="font-display text-5xl sm:text-7xl lg:text-[88px] font-extrabold leading-[1.12] tracking-tight space-y-8 sm:space-y-12">
          
          <div className="block">
            {renderEditorialWords("Every drawer hides dead electronics.", ["dead", "electronics"])}
          </div>

          <div className="block">
            {renderEditorialWords("Every city hides invisible e-waste.", ["invisible", "e-waste"])}
          </div>

          <div className="block text-2xl sm:text-4xl lg:text-5xl text-white/80 leading-relaxed font-body font-light pt-8">
            {renderEditorialWords(
              "NIRMAN connects homes, verified recyclers, and impact — through one intelligent flow.",
              ["verified", "recyclers", "intelligent", "flow"]
            )}
          </div>

        </div>

        {/* Bottom Verification Claim */}
        <div className="pt-12 font-mono text-xs text-white/50 tracking-widest flex items-center justify-between border-t border-white/10 font-bold uppercase">
          <span className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-signal animate-spin-slow" />
            <span>TRANSFORMATION PROTOCOL // v4.0 STABLE</span>
          </span>
          <span className="text-signal">100% CHAIN OF CUSTODY SECURED</span>
        </div>
      </div>
    </section>
  );
}

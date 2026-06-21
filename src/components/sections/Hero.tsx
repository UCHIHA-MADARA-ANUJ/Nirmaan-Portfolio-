"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import HeroFluid from "@/components/canvas/HeroFluid";
import MagneticButton from "@/components/ui/MagneticButton";
import OrbitChips from "@/components/ui/OrbitChips";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowDownRight, Sparkles, Shield, Cpu, Activity, Zap, RefreshCw, Radio } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 40, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 }
      );

      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".hero-word");
        tl.fromTo(
          words,
          { opacity: 0, y: 120, rotateX: -60 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.08 },
          "-=0.6"
        );
      }

      tl.fromTo(
        ".hero-desc",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      )
        .fromTo(
          ".hero-ctas",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.8"
        );

      if (phoneRef.current) {
        tl.fromTo(
          phoneRef.current,
          { opacity: 0, z: -1000, scale: 0.5, rotateY: 45 },
          { opacity: 1, z: 0, scale: 1, rotateY: 0, duration: 2.2, ease: "elastic.out(1, 0.6)" },
          "-=1.2"
        );

        gsap.to(phoneRef.current, {
          y: -25,
          rotationX: 3,
          rotationY: -3,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      gsap.to(".hero-cyber-ring-1", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-cyber-ring-2", {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderSplitText = (text: string, highlight?: boolean) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className={`hero-char inline-block ${highlight ? "text-signal font-black drop-shadow-[0_0_35px_rgba(182,255,60,0.5)]" : "text-white"}`}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-void flex items-center justify-center pt-36 pb-24 overflow-hidden select-none perspective-1000">
      <HeroFluid />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-signal/20 via-electric/10 to-transparent blur-[200px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
          
          <div className="hero-badge inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface-2/95 border border-white/10 shadow-2xl backdrop-blur-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-signal animate-pulse shadow-[0_0_15px_#B6FF3C]" />
            <span className="font-mono text-xs tracking-widest text-white/90 uppercase font-bold">
              Algorithmic Sanctuary // Indic Core
            </span>
            <span className="px-3 py-1 rounded-full bg-signal text-void font-mono text-[10px] font-black animate-bounce shadow-md">
              v4.0 STABLE
            </span>
          </div>

          <h1 ref={headlineRef} className="font-display text-7xl sm:text-9xl lg:text-[120px] font-black tracking-tight leading-[0.88] text-white">
            <span className="hero-word block text-neon-xl text-signal preserve-3d">Sanctuary</span>
            <span className="hero-word block text-white/30 text-5xl sm:text-7xl font-extrabold my-2 preserve-3d">for dead</span>
            <span className="hero-word block preserve-3d">Electronics.</span>
          </h1>

          <p className="hero-desc font-body text-xl sm:text-3xl text-white/80 max-w-2xl font-light leading-snug mx-auto lg:mx-0">
            Eradicating high-tech vertical waste through high-performance, algorithmic CPCB recycling logistics. <span className="text-signal font-semibold">Chlorophyll meets silicon.</span>
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-6">
            <MagneticButton
              onClick={() => scrollTo("#final-cta")}
              strength={0.4}
              className="w-full sm:w-auto px-12 py-6 bg-signal text-void font-display font-black text-xl rounded-full hover:bg-electric shadow-[0_0_50px_rgba(182,255,60,0.5)] hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-3 group"
            >
              <span>Initialize Sequence</span>
              <ArrowDownRight className="w-6 h-6 stroke-[3] group-hover:rotate-[-45deg] transition-transform duration-300" />
            </MagneticButton>

            <button
              onClick={() => scrollTo("#product")}
              className="w-full sm:w-auto px-12 py-6 glass-panel text-white font-display font-black text-xl rounded-full hover:bg-white hover:text-void transition-all cursor-pointer border-2 border-white/20 flex items-center justify-center gap-3 shadow-2xl active:scale-95"
            >
              <Activity className="w-6 h-6 text-signal animate-pulse" />
              <span>Inspect OS Compendium</span>
            </button>
          </div>

          <div className="pt-10 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 font-mono text-xs text-white/60 font-bold">
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-signal animate-spin" /> 160MHz CLK
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-electric animate-pulse" /> CPCB VERIFIED
            </span>
            <span className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-ai-cyan animate-ping" /> NEURAL LINK
            </span>
          </div>

        </div>

        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[660px] sm:min-h-[750px]">
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="hero-cyber-ring-1 absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full border-2 border-white/10 border-t-signal/80 border-b-electric/80 shadow-[0_0_50px_rgba(182,255,60,0.2)]" />
            <div className="hero-cyber-ring-2 absolute w-[440px] sm:w-[560px] h-[440px] sm:h-[560px] rounded-full border border-white/5 border-l-ai-cyan/60" />
          </div>

          <div
            ref={phoneRef}
            className="relative z-20 w-[300px] sm:w-[340px] h-[620px] sm:h-[680px] rounded-[56px] bg-gradient-to-b from-[#18261E] via-[#0D1310] to-[#050706] p-4 border-2 border-white/20 shadow-[0_40px_120px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-hidden group hover:border-signal/80 transition-colors duration-500"
          >
            <div className="absolute inset-0 rounded-[56px] bg-gradient-to-tr from-signal/25 via-transparent to-white/10 opacity-60 pointer-events-none z-30" />

            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-40 h-7 bg-black/95 rounded-full border border-white/20 z-40 flex items-center justify-between px-4 shadow-lg">
              <span className="font-mono text-[9px] text-signal font-black tracking-widest uppercase">VERDE_OS</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-electric animate-ping" />
                <span className="w-2 h-2 rounded-full bg-signal" />
              </div>
            </div>

            <div className="relative w-full h-full rounded-[42px] bg-void overflow-hidden border border-white/15 flex flex-col justify-center shadow-2xl">
              <Image
                src="/images/screenshots/landing.png"
                alt="NIRMAN Platform Live Composer"
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-36 h-1 bg-white/50 rounded-full z-40 pointer-events-none" />
          </div>

          <div className="absolute -left-8 sm:-left-12 top-1/3 z-30 glass-panel p-5 rounded-3xl border border-signal/60 hidden sm:flex items-center gap-4 shadow-2xl animate-bounce">
            <div className="w-10 h-10 rounded-2xl bg-signal flex items-center justify-center text-void shadow-[0_0_20px_#B6FF3C] font-black">
              ⚡
            </div>
            <div className="font-display">
              <span className="text-[10px] text-white/50 block font-mono font-extrabold uppercase">AUTONOMOUS BIOSYNC</span>
              <span className="text-base font-black text-white tracking-tight">Zero Slag Protocol</span>
            </div>
          </div>

          <div className="absolute -right-8 sm:-right-12 bottom-1/4 z-30 glass-panel p-5 rounded-3xl border border-electric/60 hidden sm:flex items-center gap-4 shadow-2xl">
            <div className="w-10 h-10 rounded-2xl bg-electric flex items-center justify-center text-void shadow-[0_0_20px_#00FF8A] font-black">
              🏦
            </div>
            <div className="font-display">
              <span className="text-[10px] text-white/50 block font-mono font-extrabold uppercase">METALLURGICAL EXTRACTION</span>
              <span className="text-base font-black text-electric tracking-tight">Instant UPI Transfer</span>
            </div>
          </div>

          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-5/6 h-12 bg-void blur-3xl rounded-full -z-10 shadow-[0_0_120px_#000]" />
        </div>

      </div>
    </section>
  );
}

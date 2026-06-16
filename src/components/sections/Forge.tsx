"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { PRODUCT_JOURNEY_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ShieldCheck, Zap, ArrowRight, RefreshCw, Layers } from "lucide-react";

export default function Forge() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !phoneRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            Math.floor(progress * PRODUCT_JOURNEY_STEPS.length),
            PRODUCT_JOURNEY_STEPS.length - 1
          );
          setActiveStep(index);
        },
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: phoneRef.current,
        pinSpacing: false,
      });

      gsap.to(".forge-oled-sweep", {
        backgroundColor: "#051A14",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Background decorative SVGs continuous animations
      gsap.to(".forge-floating-gear", {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="product"
      ref={sectionRef}
      className="forge-oled-sweep relative w-full bg-void text-white select-none transition-colors duration-1000 border-t border-white/10 overflow-hidden"
      style={{ height: `${PRODUCT_JOURNEY_STEPS.length * 100}vh` }}
    >
      {/* Absolute Decorative Floating SVGs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 pointer-events-none opacity-20 -z-10">
        <div className="forge-floating-gear w-full h-full rounded-full border-4 border-dashed border-signal/40" />
      </div>

      {/* Master Center Pinned Monolith Showcase Frame */}
      <div
        ref={phoneRef}
        className="sticky top-0 h-screen w-full max-w-7xl mx-auto px-6 sm:px-16 flex flex-col lg:flex-row items-center justify-between py-12 pointer-events-none"
      >
        
        {/* Left Column: Asymmetric Pinned Copy (4 Cols) */}
        <div className="w-full lg:w-4/12 flex flex-col justify-center space-y-8 pointer-events-auto pt-16 lg:pt-0">
          <SectionLabel status="PROTOTYPE_LIVE">05 // The Digital Forge Walkthrough</SectionLabel>

          <div className="relative min-h-[300px] sm:min-h-[380px]">
            {PRODUCT_JOURNEY_STEPS.map((step, i) => {
              const isActive = i === activeStep;

              return (
                <div
                  key={step.step}
                  className={cn(
                    "absolute top-0 left-0 transition-all duration-700 ease-out flex flex-col justify-center will-change-transform",
                    isActive
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 translate-y-12 scale-90 pointer-events-none"
                  )}
                >
                  <div className="font-display text-8xl sm:text-9xl font-black text-signal/20 leading-none preserve-3d">
                    {step.step}
                  </div>
                  <h3 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-body text-base sm:text-xl text-white/70 mt-6 leading-relaxed font-light max-w-md">
                    {step.desc}
                  </p>

                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-signal/20 border border-signal/50 text-signal font-mono text-xs tracking-wider mt-10 w-fit font-bold shadow-[0_0_25px_rgba(182,255,60,0.3)]">
                    <Zap className="w-4 h-4 fill-signal" />
                    <span>STATUS // {step.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Column: Levitating Hardware Pinned Showcase (4 Cols) */}
        <div className="w-full lg:w-4/12 flex items-center justify-center relative my-auto pointer-events-auto">
          
          <div className="relative group hover:scale-105 transition-transform duration-700">
            <PhoneMockup className="shadow-[0_40px_120px_rgba(0,0,0,0.95)]">
              {PRODUCT_JOURNEY_STEPS.map((step, i) => {
                const isActive = i === activeStep;

                return (
                  <div
                    key={step.step}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 ease-in-out p-3 flex flex-col items-center justify-center bg-gradient-to-b from-[#141E18] to-void rounded-[32px] border border-white/10 shadow-2xl overflow-hidden",
                      isActive ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-10"
                    )}
                  >
                    {/* Glowing background behind image so UI elements inside phone are 100% luminous and legible */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(182,255,60,0.15)_0,transparent_100%)] pointer-events-none" />

                    <div className="relative w-full h-full max-h-[500px] flex items-center justify-center">
                      <Image
                        src={step.img}
                        alt={step.title}
                        fill
                        className="object-contain p-1 filter drop-shadow-xl"
                        priority={i === 0}
                      />
                    </div>
                  </div>
                );
              })}
            </PhoneMockup>

            {/* Faint Interactive Annotation Box */}
            <div className="absolute -right-14 top-1/2 glass-panel p-5 rounded-3xl border-2 border-signal/80 hidden sm:flex flex-col items-start gap-1 shadow-2xl animate-bounce bg-surface-2/95">
              <span className="font-mono text-[10px] text-signal font-extrabold tracking-widest uppercase flex items-center gap-1.5">
                <RefreshCw className="w-3 h-3 animate-spin" /> IOT SYNCED
              </span>
              <span className="font-display font-black text-base text-white tracking-tight">Stage #0{activeStep + 1} Telemetry</span>
            </div>
          </div>

        </div>

        {/* Right Column: Executive Rail Dashboard (4 Cols) */}
        <div className="w-full lg:w-4/12 flex flex-col items-end justify-center pointer-events-auto hidden lg:flex">
          <div className="glass-panel p-8 sm:p-10 rounded-[40px] space-y-8 w-80 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-3xl bg-surface-2/95">
            <div className="absolute top-0 right-0 w-32 h-32 bg-signal/20 rounded-full blur-3xl pointer-events-none" />

            <div className="font-mono text-xs text-signal tracking-widest flex items-center justify-between font-bold border-b border-white/10 pb-4">
              <span>MASTER_RAIL</span>
              <span className="text-white font-extrabold text-sm">
                {Math.floor(((activeStep + 1) / PRODUCT_JOURNEY_STEPS.length) * 100)}%
              </span>
            </div>

            <div className="w-full space-y-3 font-display">
              {PRODUCT_JOURNEY_STEPS.map((step, i) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    "w-full p-4 rounded-2xl text-left flex items-center justify-between transition-all cursor-pointer border font-bold text-sm",
                    i === activeStep
                      ? "bg-signal text-void font-extrabold border-signal shadow-[0_0_30px_rgba(182,255,60,0.5)] scale-105"
                      : "bg-surface text-white/60 border-white/5 hover:text-white hover:bg-white/5"
                  )}
                >
                  <div className="flex items-center gap-3 font-mono">
                    <span className={cn(i === activeStep ? "text-void/60" : "text-signal")}>{step.step}.</span>
                    <span className="font-display font-semibold">{step.title.split(" ")[0]}</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase">
                    {i === activeStep ? "ACTIVE ●" : "idle"}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-2 font-mono text-[10px] text-white/40 leading-relaxed font-bold">
              Operational in Indic pilot sectors. Cryptographic telemetry enabled.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

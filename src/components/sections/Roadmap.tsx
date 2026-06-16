"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { ROADMAP_MILESTONES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Roadmap() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const line = document.querySelector(".roadmap-central-line") as SVGPathElement;
      const cards = gsap.utils.toArray<HTMLDivElement>(".roadmap-milestone-card");
      const dots = gsap.utils.toArray<HTMLDivElement>(".roadmap-milestone-dot");

      if (line) {
        gsap.fromTo(
          line,
          { strokeDashoffset: 1800 },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              end: "bottom 80%",
              scrub: true,
            },
          }
        );
      }

      cards.forEach((card, idx) => {
        const isEven = idx % 2 === 0;
        gsap.fromTo(
          card,
          { opacity: 0, x: isEven ? -100 : 100, y: 40 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });

      dots.forEach((dot, idx) => {
        gsap.fromTo(
          dot,
          { scale: 0.5, opacity: 0.2, backgroundColor: "#121A16" },
          {
            scale: 1.3,
            opacity: 1,
            backgroundColor: idx === 0 ? "#B6FF3C" : idx === 1 ? "#00FF8A" : "#5AB2FF",
            duration: 0.5,
            scrollTrigger: {
              trigger: dot,
              start: "top 75%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="roadmap" ref={sectionRef} className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-16 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10">
      
      {/* Halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-gradient-to-tr from-signal/15 via-ai-cyan/10 to-transparent rounded-full blur-[200px] pointer-events-none -z-10" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#121A16_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <SectionLabel status="DEPLOYMENT_INDEX">14 // Strategic Execution Roadmap Deck</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Prototype to national <span className="text-signal underline">platform</span>.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
            How we transform an operational 2026 application into India&apos;s central e-waste circular logistics engine over the next 24 months.
          </p>
        </div>

        {/* Master Timeline Sequence Layout */}
        <div className="relative pt-12 max-w-6xl mx-auto">
          
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-4 z-0 pointer-events-none">
            <svg className="w-full h-full overflow-visible">
              <path
                d="M8,0 L8,2000"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="roadmap-central-line"
                d="M8,0 L8,2000"
                stroke="#B6FF3C"
                strokeWidth="8"
                strokeDasharray="2000"
                strokeDashoffset="2000"
                fill="none"
              />
            </svg>
          </div>

          <div className="space-y-16 sm:space-y-28 relative z-10">
            {ROADMAP_MILESTONES.map((milestone, i) => {
              const isEven = i % 2 === 0;
              const isDone = milestone.status === "COMPLETED";
              const isInProg = milestone.status === "IN PROGRESS";

              return (
                <div
                  key={milestone.title}
                  className={cn(
                    "relative flex flex-col md:flex-row items-center gap-8 md:gap-0",
                    isEven ? "md:justify-start" : "md:justify-end"
                  )}
                >
                  {/* Central Pinned Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-surface-2 border-2 border-white/20 items-center justify-center z-20 shadow-[0_0_30px_rgba(0,0,0,0.95)]">
                    <div
                      className={cn(
                        "roadmap-milestone-dot w-5 h-5 rounded-full transition-colors",
                        isDone ? "bg-signal shadow-[0_0_20px_#B6FF3C]" : isInProg ? "bg-electric animate-pulse shadow-[0_0_20px_#00FF8A]" : "bg-white/20"
                      )}
                    />
                  </div>

                  {/* Monolith Card */}
                  <div
                    className={cn(
                      "roadmap-milestone-card w-full md:w-5/12 glass-panel p-10 sm:p-12 rounded-[40px] border transition-all duration-300 group hover:scale-[1.02] shadow-2xl",
                      isDone ? "bg-surface-2/90 border-signal/80 shadow-[0_20px_80px_rgba(182,255,60,0.2)]" : isInProg ? "bg-surface/90 border-electric/80 shadow-[0_20px_80px_rgba(0,255,138,0.2)]" : "bg-surface-1/80 border-white/10 opacity-70 hover:opacity-100"
                    )}
                  >
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-xs sm:text-sm font-black tracking-widest text-white/50 group-hover:text-white transition-colors uppercase">
                        {milestone.time}
                      </span>
                      
                      <span
                        className={cn(
                          "px-4 py-1.5 rounded-full font-mono text-xs font-black tracking-wider shadow-md",
                          isDone ? "bg-signal text-void shadow-[0_0_15px_#B6FF3C]" : isInProg ? "bg-electric text-void shadow-[0_0_15px_#00FF8A] animate-pulse" : "bg-white/10 text-white/50"
                        )}
                      >
                        {milestone.status}
                      </span>
                    </div>

                    <div className="space-y-4 font-display">
                      <h3 className="font-black text-3xl sm:text-4xl text-white group-hover:text-signal transition-colors tracking-tight leading-snug">
                        {milestone.title}
                      </h3>
                      <p className="font-body text-base sm:text-lg text-white/70 leading-relaxed font-light">
                        {milestone.content}
                      </p>
                    </div>

                    <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/40 font-bold">
                      <span>PHASE_INDEX // 0{i + 1}</span>
                      <span className="group-hover:text-signal transition-colors">SECURED MCR GATE ●</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Claim */}
        <div className="text-center font-mono text-xs text-white/50 tracking-widest uppercase border-t border-white/10 pt-12">
          ● STRATEGIC ALLIANCES UNDERWAY WITH THE NATIONAL EXTENDED PRODUCER RESPONSIBILITY WING
        </div>

      </div>
    </section>
  );
}

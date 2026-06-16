"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function PhoneMockup({ children, className, glow = true }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative w-[300px] sm:w-[340px] h-[620px] sm:h-[680px] rounded-[56px] bg-gradient-to-b from-[#1E2B22] via-[#0D1310] to-[#050706] p-4 border-2 border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.95)] transition-all duration-500 flex flex-col justify-between overflow-hidden group perspective-1000 select-none",
        glow && "hover:shadow-[0_0_80px_rgba(182,255,60,0.35)] hover:border-signal/80",
        className
      )}
    >
      {/* Absolute high-end edge glare */}
      <div className="absolute inset-0 rounded-[56px] bg-gradient-to-tr from-signal/20 via-transparent to-white/10 opacity-50 pointer-events-none z-30" />

      {/* Screen Container: perfectly visible, no cutting, nice clean bezels */}
      <div className="relative w-full h-full rounded-[42px] bg-void overflow-hidden border border-white/15 flex flex-col z-10 shadow-2xl">
        
        {/* Dynamic Inner Top Bezel / Notch Deck */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-38 h-7 bg-black/90 rounded-full border border-white/20 z-40 flex items-center justify-between px-3.5 shadow-md backdrop-blur-md">
          <span className="font-mono text-[9px] text-signal font-extrabold tracking-widest uppercase">NIRMAN</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-electric animate-ping" />
            <div className="w-2 h-2 rounded-full bg-signal" />
          </div>
        </div>

        {/* Screen contents: perfectly structured, fully legible */}
        <div className="relative w-full h-full pt-12 pb-8 px-4 flex flex-col justify-between overflow-y-auto custom-scrollbar">
          {children}
        </div>

        {/* Bottom OS Home Indicator Bar */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-36 h-1 bg-white/50 rounded-full z-40 pointer-events-none" />
      </div>
    </div>
  );
}

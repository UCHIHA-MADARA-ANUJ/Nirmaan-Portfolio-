"use client";
import React from "react";
import dynamic from "next/dynamic";
import SectionLabel from "@/components/ui/SectionLabel";

// Dynamic import browser-only components without SSR
const LiveMapInner = dynamic(() => import("./LiveMapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <SectionLabel status="BOOTING_RADAR">07 // Live Radar Partner Discovery</SectionLabel>
        <h2 className="font-display text-5xl sm:text-7xl font-extrabold text-white tracking-tight">
          Verified centres. Mapped <span className="text-signal underline">live</span>.
        </h2>
      </div>
      <div className="w-full h-[750px] glass-panel rounded-[40px] flex flex-col items-center justify-center space-y-4 border border-white/10 animate-pulse">
        <div className="w-16 h-16 rounded-full border-4 border-signal/20 border-t-signal animate-spin" />
        <span className="font-mono text-sm text-signal tracking-widest uppercase">
          ● ESTABLISHING_SATELLITE_LINK...
        </span>
      </div>
    </div>
  ),
});

export default function Network() {
  return (
    <section id="network" className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-12 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10">
      <LiveMapInner />
    </section>
  );
}

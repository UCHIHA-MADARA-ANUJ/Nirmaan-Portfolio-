"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Maximize2, ExternalLink, Sparkles, Layers } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Lightbox from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

const PROTOTYPE_SCREENS = [
  {
    id: "screen-map",
    title: "Verified CPCB Processing Hub Discovery",
    caption: "Live GPS geofencing & autonomous real-time distance calculations for premium Indic extraction hubs.",
    src: "/images/screenshots/map.png",
    colSpan: "lg:col-span-8",
    rowSpan: "lg:row-span-2",
    aspect: "aspect-[16/10]",
    badge: "RADAR DISCOVERY",
  },
  {
    id: "screen-dashboard",
    title: "National Telemetry Dashboard",
    caption: "Inflow metric parsing, verified KYC authentication streams, and active fleet dispatches.",
    src: "/images/screenshots/dashboard.png",
    colSpan: "lg:col-span-4",
    rowSpan: "lg:row-span-1",
    aspect: "aspect-[4/3]",
    badge: "CONTROL LEDGER",
  },
  {
    id: "screen-ecobot",
    title: "EcoBot Multimodal AI",
    caption: "Instant visual component inspection, metallurgical market valuation, and rapid booking.",
    src: "/images/screenshots/ecobot.png",
    colSpan: "lg:col-span-4",
    rowSpan: "lg:row-span-1",
    aspect: "aspect-[3/4]",
    badge: "INDIC AI",
  },
  {
    id: "screen-verification",
    title: "Rigorous KYC Covenants",
    caption: "Zero-landfill compliance undertakings, document hashing, and CPCB official seals.",
    src: "/images/screenshots/verification.png",
    colSpan: "lg:col-span-4",
    rowSpan: "lg:row-span-1",
    aspect: "aspect-[3/4]",
    badge: "CHAIN OF CUSTODY",
  },
  {
    id: "screen-profile",
    title: "Household ESG Impact Flow",
    caption: "Personal carbon prevented metrics, diverted e-waste counters, and token rewards.",
    src: "/images/screenshots/profile.png",
    colSpan: "lg:col-span-4",
    rowSpan: "lg:row-span-1",
    aspect: "aspect-[3/4]",
    badge: "IMPACT LEDGER",
  },
  {
    id: "screen-landing",
    title: "Platform Live Composer Portal",
    caption: "Clear your clutter instantly. Ultra-lean, zero-effort e-waste logistics portal.",
    src: "/images/screenshots/landing.png",
    colSpan: "lg:col-span-4",
    rowSpan: "lg:row-span-1",
    aspect: "aspect-[3/4]",
    badge: "CONSUMER UX",
  },
];

export default function ProductScreens() {
  const [selectedScreen, setSelectedScreen] = useState<typeof PROTOTYPE_SCREENS[0] | null>(null);

  return (
    <section className="relative min-h-screen w-full bg-void py-32 px-6 sm:px-16 flex flex-col items-center justify-center overflow-hidden select-none border-t border-white/10">
      
      {/* Avant-Garde Background Halos */}
      <div className="absolute top-1/3 right-1/4 w-[900px] h-[500px] bg-gradient-to-br from-signal/15 via-electric/10 to-transparent blur-[180px] pointer-events-none -z-10 rounded-full" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#121A16_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        
        {/* Executive Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-6 max-w-4xl">
            <SectionLabel status="DEPLOYED_PROTOTYPE">06 // High-Fidelity UI Suite</SectionLabel>
            <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
              Not a concept. A working <span className="text-signal underline">prototype</span>.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
            Examine the fully production-ready graphical user interfaces currently functional in pilot sectors. Engage any interface tile for interactive lightbox inspection.
          </p>
        </div>

        {/* Avant-Garde Asymmetric Grid Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {PROTOTYPE_SCREENS.map((screen, i) => (
            <motion.div
              key={screen.id}
              layoutId={screen.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedScreen(screen)}
              className={cn(
                "group relative rounded-[40px] glass-panel p-8 sm:p-10 overflow-hidden cursor-pointer flex flex-col justify-between border border-white/10 hover:border-signal/80 hover:shadow-[0_20px_80px_rgba(182,255,60,0.2)] transition-all duration-500 bg-surface-2/80",
                screen.colSpan,
                screen.rowSpan
              )}
            >
              {/* Premium Top Micro Header */}
              <div className="flex items-start justify-between z-20 mb-8 gap-6">
                <div className="space-y-3">
                  <span className="font-mono text-[10px] font-extrabold text-signal bg-signal/10 px-3 py-1 rounded-full border border-signal/30 block w-fit">
                    ● {screen.badge}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-signal transition-colors tracking-tight">
                    {screen.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-white/60 font-light max-w-lg leading-relaxed">
                    {screen.caption}
                  </p>
                </div>

                <div className="w-14 h-14 rounded-full bg-void/80 border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-signal group-hover:text-void group-hover:scale-110 transition-all shrink-0 shadow-lg">
                  <Maximize2 className="w-6 h-6" />
                </div>
              </div>

              {/* Pristine Dark Framed Preview */}
              <div
                className={cn(
                  "relative w-full rounded-[28px] overflow-hidden bg-void border border-white/10 group-hover:scale-[1.02] transition-transform duration-700 ease-out shadow-2xl",
                  screen.aspect
                )}
              >
                <Image
                  src={screen.src}
                  alt={screen.title}
                  fill
                  className="object-cover sm:object-contain p-3"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="absolute bottom-6 right-8 font-mono text-[10px] text-white/30 group-hover:text-signal transition-colors">
                [CLICK TO ENGAGE INSPECTION]
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={!!selectedScreen}
        onClose={() => setSelectedScreen(null)}
        src={selectedScreen?.src || ""}
        alt={selectedScreen?.title || ""}
        layoutId={selectedScreen?.id}
        caption={selectedScreen?.caption}
      />
    </section>
  );
}

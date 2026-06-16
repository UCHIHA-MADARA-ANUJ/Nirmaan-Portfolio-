"use client";
import React from "react";
import { cn } from "@/lib/utils";

export default function GlassChip({
  children,
  className,
  active = false,
}: {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider glass-panel select-none transition-all duration-300 border",
        active ? "bg-signal/20 text-signal border-signal shadow-[0_0_20px_rgba(182,255,60,0.3)]" : "text-white/70 border-white/10 hover:border-white/30",
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", active ? "bg-signal animate-pulse" : "bg-white/40")} />
      {children}
    </div>
  );
}

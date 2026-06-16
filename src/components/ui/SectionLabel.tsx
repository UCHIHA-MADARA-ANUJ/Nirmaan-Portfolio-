"use client";
import React from "react";
import { cn } from "@/lib/utils";

export default function SectionLabel({
  children,
  className,
  status = "ONLINE",
}: {
  children: React.ReactNode;
  className?: string;
  status?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-panel mb-8 select-none", className)}>
      <div className="w-2 h-2 rounded-full bg-signal animate-ping" />
      <span className="font-mono text-xs tracking-widest uppercase text-signal font-semibold">
        {children}
      </span>
      {status && (
        <span className="font-mono text-[10px] text-white/50 bg-white/5 px-2 py-0.5 rounded-full">
          {status}
        </span>
      )}
    </div>
  );
}

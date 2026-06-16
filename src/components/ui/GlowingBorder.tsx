"use client";
import React from "react";
import { cn } from "@/lib/utils";

export default function GlowingBorder({
  children,
  className,
  rounded = "rounded-3xl",
}: {
  children: React.ReactNode;
  className?: string;
  rounded?: string;
}) {
  return (
    <div className={cn("relative group p-[2px] overflow-hidden", rounded, className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-signal via-ai-cyan to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
      <div className={cn("relative w-full h-full bg-void z-10", rounded)}>
        {children}
      </div>
    </div>
  );
}

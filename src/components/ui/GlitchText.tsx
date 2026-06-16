"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export default function GlitchText({ text, className }: { text: string; className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
      className={cn("relative inline-block cursor-crosshair select-none font-display", className)}
    >
      <span className={cn(isGlitching && "animate-glitch text-red-500 opacity-80 inline-block")}>{text}</span>
      {isGlitching && (
        <>
          <span className="absolute inset-0 text-ai-cyan opacity-50 translate-x-1 -translate-y-1 pointer-events-none mix-blend-screen">
            {text}
          </span>
          <span className="absolute inset-0 text-signal opacity-50 -translate-x-1 translate-y-1 pointer-events-none mix-blend-screen">
            {text}
          </span>
        </>
      )}
    </span>
  );
}

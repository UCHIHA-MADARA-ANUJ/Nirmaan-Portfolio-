"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  className,
  speed = 30,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={cn("relative flex overflow-x-hidden select-none", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-8 py-4 animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-8 py-4 animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}

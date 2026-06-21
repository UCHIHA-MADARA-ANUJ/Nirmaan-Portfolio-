"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function OrbitChips({
  chips = [],
  radius = 280,
  duration = 25,
}: {
  chips: string[];
  radius?: number;
  duration?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".orbit-chip-wrapper", {
        rotation: 360,
        duration: duration,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-chip-item", {
        rotation: -360,
        duration: duration,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [mounted, duration]);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 select-none">
      <div className="orbit-chip-wrapper absolute w-full h-full flex items-center justify-center">
        {chips.map((label, i) => {
          const angle = (i / chips.length) * (2 * Math.PI);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={label}
              className="absolute flex items-center justify-center"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="orbit-chip-item pointer-events-auto px-5 py-2.5 rounded-full glass-panel border border-signal/40 text-xs font-mono text-signal font-extrabold shadow-[0_0_30px_rgba(182,255,60,0.25)] whitespace-nowrap backdrop-blur-xl hover:scale-110 hover:border-signal transition-transform">
                {label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

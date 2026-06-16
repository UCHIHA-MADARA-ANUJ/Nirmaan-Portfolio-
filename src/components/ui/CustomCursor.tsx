"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.dataset.cursor === "hover" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (typeof window === "undefined" || window.innerWidth < 768) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden hidden md:block">
      {/* Outer Halo */}
      <motion.div
        className={cn(
          "absolute w-8 h-8 rounded-full border border-signal/60 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out flex items-center justify-center",
          isHovered && "w-16 h-16 bg-signal/15 border-signal scale-125"
        )}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      {/* Inner Dot */}
      <div
        className="absolute w-2 h-2 bg-signal rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#B6FF3C] transition-transform duration-100"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: isHovered ? "scale(0.5)" : "scale(1)",
        }}
      />
    </div>
  );
}

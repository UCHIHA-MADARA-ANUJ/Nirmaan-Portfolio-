"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full -z-10 mix-blend-screen opacity-30 blur-[120px]"
      animate={{
        x: mousePosition.x - 300,
        y: mousePosition.y - 300,
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.15,
      }}
      style={{
        background: "radial-gradient(circle, rgba(182,255,60,0.4) 0%, rgba(0,255,138,0.1) 50%, rgba(0,0,0,0) 100%)",
      }}
    />
  );
}

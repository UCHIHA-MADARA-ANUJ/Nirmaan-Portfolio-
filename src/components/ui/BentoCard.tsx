"use client";
import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps extends Omit<HTMLMotionProps<"div">, "onAnimationStart" | "style"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function BentoCard({
  children,
  className,
  glowColor = "rgba(182, 255, 60, 0.25)",
  ...props
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rY = ((mouseX / width) * 2 - 1) * 6;
    const rX = ((mouseY / height) * 2 - 1) * -6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.01 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{ transformStyle: "preserve-3d" }}
      className={cn(
        "relative rounded-3xl p-8 glass-panel overflow-hidden transition-shadow duration-300 border border-white/10",
        isHovered && "shadow-[0_0_40px_rgba(182,255,60,0.2)] border-signal/40",
        className
      )}
      {...(props as any)}
    >
      <div className="relative z-10 w-full h-full" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>

      {isHovered && (
        <div
          className="absolute pointer-events-none -inset-px rounded-3xl opacity-50 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at 50% 50%, ${glowColor}, transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
}

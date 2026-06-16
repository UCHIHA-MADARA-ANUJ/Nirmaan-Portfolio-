"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface DataCounterProps {
  value: string;
  duration?: number;
  className?: string;
  scrambleChars?: string;
}

export default function DataCounter({
  value,
  duration = 1.5,
  className,
  scrambleChars = "0123456789ABCDEF%$#@!*&^",
}: DataCounterProps) {
  const [displayed, setDisplayed] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let iterations = 0;
    const totalIterations = Math.floor(duration * 30);
    const interval = setInterval(() => {
      setDisplayed((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (char === " " || char === "." || char === "•" || char === "₹") return char;
            if (index < (iterations / totalIterations) * value.length) {
              return value[index];
            }
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join("")
      );

      iterations++;
      if (iterations >= totalIterations) {
        clearInterval(interval);
        setDisplayed(value);
      }
    }, 33);

    return () => clearInterval(interval);
  }, [value, duration, isInView, scrambleChars]);

  return <span ref={ref} className={cn("font-mono font-bold tracking-tight inline-block select-none", className)}>{displayed}</span>;
}

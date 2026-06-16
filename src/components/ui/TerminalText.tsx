"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TerminalTextProps {
  text: string;
  className?: string;
  speed?: number;
  onComplete?: () => void;
  prefix?: string;
}

export default function TerminalText({
  text,
  className,
  speed = 40,
  onComplete,
  prefix = "> ",
}: TerminalTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, speed);

    const cursorTimer = setInterval(() => {
      setCursorBlink((b) => !b);
    }, 530);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [text, speed, onComplete]);

  return (
    <span className={cn("font-mono tracking-wider", className)}>
      <span className="text-signal/70 mr-1">{prefix}</span>
      <span>{displayed}</span>
      <span className={cn("ml-1 font-bold text-signal", cursorBlink ? "opacity-100" : "opacity-0")}>_</span>
    </span>
  );
}

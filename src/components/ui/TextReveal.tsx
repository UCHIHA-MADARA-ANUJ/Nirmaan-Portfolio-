"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
  delay?: number;
}

export default function TextReveal({
  text,
  className,
  highlightWords = [],
  highlightClassName = "text-signal font-semibold",
  delay = 0,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
          },
        },
        hidden: {},
      }}
      className={cn("inline-block", className)}
    >
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9-]/g, "");
        const isHighlight = highlightWords.some((hw) => cleanWord.toLowerCase().includes(hw.toLowerCase()));
        return (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }}
            className={cn("inline-block mr-2", isHighlight && highlightClassName)}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

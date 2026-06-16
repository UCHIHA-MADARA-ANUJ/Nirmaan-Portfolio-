"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  layoutId?: string;
  caption?: string;
}

export default function Lightbox({ isOpen, onClose, src, alt, layoutId, caption }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-void/90 backdrop-blur-2xl p-4 sm:p-12 cursor-zoom-out"
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full glass-panel text-white hover:text-signal hover:bg-white/10 transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Main Modal Image */}
          <motion.div
            layoutId={layoutId}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[85vh] h-full rounded-[32px] overflow-hidden glass-panel border border-signal/30 shadow-[0_0_80px_rgba(182,255,60,0.2)] cursor-default flex flex-col justify-between"
          >
            <div className="relative w-full h-full min-h-[500px]">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            {caption && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-void via-void/80 to-transparent flex items-center justify-between border-t border-white/10">
                <span className="font-display font-bold text-xl text-white">{alt}</span>
                <span className="font-mono text-sm text-signal">{caption}</span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

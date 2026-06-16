"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ArrowDownRight, Layers, MapPin, Cpu, ShieldCheck } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "01. Directive", href: "#mission", icon: <Layers className="w-4 h-4" /> },
  { label: "02. Graveyard", href: "#problem", icon: <Cpu className="w-4 h-4" /> },
  { label: "03. Market Gaps", href: "#solution", icon: <ShieldCheck className="w-4 h-4" /> },
  { label: "04. Prototype", href: "#product", icon: <MapPin className="w-4 h-4" /> },
  { label: "05. Radar", href: "#network", icon: <MapPin className="w-4 h-4" /> },
  { label: "06. AI Cortex", href: "#ai", icon: <Cpu className="w-4 h-4" /> },
  { label: "07. Architects", href: "#team", icon: <Layers className="w-4 h-4" /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Floating Mac OS Vercel Dock scroll logic
      if (currentScrollY < lastScrollY || currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);

      // Section focus calculation
      const scrollPosition = currentScrollY + window.innerHeight / 3;
      for (const item of NAV_ITEMS) {
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Laser Top Scroll Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-signal via-electric to-ai-cyan z-[99999]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
      />

      {/* Main Premium Floating Vercel Dock */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -140 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-[9999] px-6 pointer-events-none flex justify-center select-none"
      >
        <nav className="pointer-events-auto w-full max-w-6xl glass-panel px-6 py-3 rounded-full flex items-center justify-between border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.95)] backdrop-blur-3xl">
          
          {/* Brand Monolith Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-signal text-void font-hindi font-black flex items-center justify-center text-xl shadow-[0_0_20px_rgba(182,255,60,0.5)] group-hover:scale-110 transition-transform">
              नि
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-white text-lg tracking-wider group-hover:text-signal transition-colors">
                {SITE_CONFIG.brand}
              </span>
              <span className="font-mono text-white/40 text-[9px] tracking-[0.25em] font-semibold">
                LOGISTICS CORE
              </span>
            </div>
          </a>

          {/* Desktop High-Fashion Navigation Dock */}
          <div className="hidden lg:flex items-center gap-1 bg-void/50 p-1.5 rounded-full border border-white/5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={cn(
                    "relative px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all duration-300 group cursor-pointer flex items-center gap-2",
                    isActive ? "text-void bg-signal shadow-[0_0_20px_rgba(182,255,60,0.4)]" : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop Executive Launch CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <MagneticButton
              onClick={() => scrollTo("#final-cta")}
              strength={0.3}
              className="px-7 py-3 bg-white hover:bg-signal text-void font-display font-extrabold text-sm rounded-full transition-all cursor-pointer flex items-center gap-2 shadow-lg"
            >
              <span>Initiate Dispatch</span>
              <ArrowDownRight className="w-4 h-4" />
            </MagneticButton>
          </div>

          {/* Mobile Fullscreen Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 text-white hover:text-signal transition-colors rounded-full bg-surface-2 border border-white/10 cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6 text-signal" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Avant-Garde Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9998] bg-void/95 backdrop-blur-3xl flex flex-col justify-between p-8 sm:p-12 lg:hidden overflow-y-auto select-none"
          >
            <div className="pt-24">
              <span className="font-mono text-xs tracking-widest text-signal uppercase mb-10 block">
                ● MASTER NAVIGATION INDEX
              </span>
              <div className="flex flex-col gap-6">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    onClick={() => scrollTo(item.href)}
                    className="text-left font-display text-4xl sm:text-6xl font-black text-white hover:text-signal transition-colors flex items-center gap-6 group cursor-pointer"
                  >
                    <span className="text-base font-mono text-signal/40 group-hover:text-signal">0{i + 1}</span>
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                onClick={() => scrollTo("#final-cta")}
                className="w-full sm:w-auto px-10 py-5 bg-signal text-void font-display font-black text-xl rounded-full hover:bg-electric transition-all text-center cursor-pointer"
              >
                Initiate Dispatch 🚀
              </button>
              <div className="text-center sm:text-right font-mono">
                <span className="text-white font-bold block text-sm">NIRMAN DIGITAL ALCHEMY</span>
                <span className="text-white/40 text-xs tracking-widest block">CPCB SECURED NETWORK</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

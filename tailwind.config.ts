import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#020302",
        deep: "#050706",
        surface: "#0A0F0C",
        "surface-highlight": "#111A14",
        signal: "#B6FF3C",
        electric: "#00FF8A",
        emerald: "#064E3B",
        "emerald-dark": "#022C22",
        "ai-cyan": "#5AB2FF",
        warning: "#FFB83D",
        // Extended from Spec 1
        "surface-2": "#141A16",
        lime: "#B6FF3C",
        "lime-strong": "#00FF8A",
        "lime-dark": "#7FCC1F",
        "white-soft": "#F4FFF7",
        "text-main": "#EAF7EE",
        "text-muted": "#8A938C",
        "ai-blue": "#5AB2FF",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        hindi: ["var(--font-noto-sans-devanagari)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-signal": "pulse-signal 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glitch: "glitch 1s linear infinite",
        scan: "scan 4s linear infinite",
      },
      keyframes: {
        "pulse-signal": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(182,255,60,0.4)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 40px rgba(182,255,60,0.8)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

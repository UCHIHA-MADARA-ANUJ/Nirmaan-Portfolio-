import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-sans-devanagari",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "NIRMAN | Autonomous E-Waste Sanctuary",
  description: "Eradicating electronic clutter through high-performance, algorithmic CPCB recycling logistics.",
  openGraph: {
    title: "NIRMAN Platform",
    description: "Turn India's e-waste into impact",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} ${notoSansDevanagari.variable} dark antialiased`}>
      <body className="antialiased bg-void text-white overflow-x-hidden relative selection:bg-signal selection:text-black min-h-screen flex flex-col">
        {/* Verde & Resonate Master Cyber Overlays */}
        <div className="bg-noise" />
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}

"use client";

import { motion } from "framer-motion";
import { Starfield } from "@/components/ui/Starfield";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden bg-[#060611]">
      {/* Starfield */}
      <Starfield />

      {/* Radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0A0A0A_90%)]" />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/[0.06] rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-sans"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HERO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Starfield } from "@/components/ui/Starfield";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060611]"
    >
      {/* Starfield canvas */}
      <Starfield />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#060611_80%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-brand-blue/8 rounded-full blur-[180px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-brand-indigo/8 rounded-full blur-[160px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] backdrop-blur-sm rounded-full px-4 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
          </span>
          <span className="text-sm text-white/60 font-sans">AI-native consulting</span>
        </motion.div>

        <AnimatedText
          text={HERO.headline[0]}
          as="h1"
          className="font-heading font-black text-white justify-center text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
        />
        <AnimatedText
          text={HERO.headline[1]}
          as="h1"
          delay={0.5}
          className="font-heading font-black text-primary justify-center mt-2 text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-sans"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-4 text-base md:text-lg text-white/30 max-w-2xl mx-auto font-sans"
        >
          {HERO.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href={HERO.cta1.href}>
            <Button variant="outline" size="lg">
              {HERO.cta1.label}
            </Button>
          </Link>
          <Link href={HERO.cta2.href}>
            <Button variant="primary" size="lg">
              {HERO.cta2.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/30 uppercase tracking-widest font-sans">scroll</span>
          <ChevronDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}

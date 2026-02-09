"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { REALITY } from "@/lib/constants";

export function Reality() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative gradient-subtle py-20 md:py-28 lg:py-32 scroll-mt-20 border-y border-white/[0.04] overflow-hidden"
    >
      {/* Animated background element */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/[0.04] rounded-full blur-[200px]" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-brand-blue/70 font-sans mb-6 block"
        >
          the truth
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-12 tracking-tight"
        >
          {REALITY.title}
        </motion.h2>

        <div className="space-y-6">
          {REALITY.lines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * idx, duration: 0.6 }}
              className={
                idx === 0
                  ? "text-xl md:text-2xl font-heading font-semibold text-primary"
                  : idx >= REALITY.lines.length - 2
                    ? "text-lg md:text-xl text-white/80 font-medium font-sans"
                    : "text-lg md:text-xl text-white/40 font-sans"
              }
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

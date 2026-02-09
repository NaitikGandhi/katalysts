"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WHY_DIFFERENT } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { Check, X } from "lucide-react";

function GlowLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex items-center justify-center my-8">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-24 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent"
      />
    </div>
  );
}

export function WhyDifferent() {
  return (
    <SectionWrapper id="why-different">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-brand-blue/70 font-sans mb-4 block"
        >
          our edge
        </motion.span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
          {WHY_DIFFERENT.title}
        </h2>
        <p className="mt-6 text-lg text-white/50 leading-relaxed font-sans">
          {WHY_DIFFERENT.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        <FadeIn direction="left">
          <div className="group gradient-card rounded-2xl border border-white/[0.06] p-6 md:p-8 h-full relative overflow-hidden transition-all duration-500 hover:border-white/10">
            {/* Subtle hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="text-xs font-medium text-white/40 uppercase tracking-wider font-sans">
                  {WHY_DIFFERENT.traditional.title}
                </span>
              </div>
              <p className="text-sm text-white/30 mb-4 font-medium font-sans">
                example: {WHY_DIFFERENT.traditional.example}
              </p>
              <ul className="space-y-3">
                {WHY_DIFFERENT.traditional.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/40 font-sans">
                    <X className="h-5 w-5 text-red-500/60 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right">
          <div className="group gradient-card rounded-2xl border border-primary/20 p-6 md:p-8 h-full relative overflow-hidden transition-all duration-500 hover:border-primary/30">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-[80px]" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-success" />
                <span className="text-xs font-medium text-white/40 uppercase tracking-wider font-sans">
                  {WHY_DIFFERENT.aiNative.title}
                </span>
              </div>
              <p className="text-sm text-white/30 mb-4 font-medium font-sans">
                example: {WHY_DIFFERENT.aiNative.example}
              </p>
              <ul className="space-y-3">
                {WHY_DIFFERENT.aiNative.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 font-sans">
                    <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>

      <GlowLine />

      <FadeIn delay={0.3}>
        <div className="text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 backdrop-blur-sm"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,229,1,0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="font-heading font-bold text-lg text-primary">
              {WHY_DIFFERENT.result}
            </span>
          </motion.div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}

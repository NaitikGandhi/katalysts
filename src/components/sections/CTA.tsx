"use client";

import { motion } from "framer-motion";
import { CTA_DATA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Multiple glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/[0.06] rounded-full blur-[150px]" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-primary/[0.03] rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-brand-blue/70 font-sans mb-4 block"
        >
          get started
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 tracking-tight"
        >
          {CTA_DATA.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-white/40 mb-10 font-sans"
        >
          {CTA_DATA.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button
            href={CTA_DATA.href}
            external
            variant="primary"
            size="lg"
            className="animate-pulse-glow"
          >
            {CTA_DATA.buttonLabel}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

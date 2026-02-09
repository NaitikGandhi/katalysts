"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FOUNDER_QUOTES } from "@/lib/constants";
import { Quote } from "lucide-react";

export function FounderQuotes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % FOUNDER_QUOTES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextQuote, 5000);
    return () => clearInterval(interval);
  }, [nextQuote]);

  const current = FOUNDER_QUOTES[currentIndex];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden border-t border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-blue/[0.04] rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-brand-blue/70 font-sans mb-4 block">
            words that inspire us
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white tracking-tight">
            from the minds that built the future
          </h2>
        </motion.div>

        {/* Quote display */}
        <div className="relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <Quote className="w-8 h-8 text-primary/30 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-white/80 font-heading font-medium leading-relaxed max-w-4xl mx-auto mb-8 text-balance">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-1">
                <span className="text-white font-heading font-semibold text-lg">
                  {current.name}
                </span>
                <span className="text-white/40 text-sm font-sans">
                  {current.title}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {FOUNDER_QUOTES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to quote ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

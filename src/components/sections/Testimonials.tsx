"use client";

import { TESTIMONIALS } from "@/lib/constants";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="gradient-subtle py-20 md:py-28 lg:py-32 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.2em] text-brand-blue/70 font-sans mb-4 block"
            >
              testimonials
            </motion.span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
              what our clients say
            </h2>
          </div>

          <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={staggerItemVariants}
                className="group gradient-card rounded-2xl border border-white/[0.06] p-6 md:p-8 flex flex-col transition-all duration-500 hover:border-white/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col flex-1">
                  {/* Quote mark */}
                  <span className="text-4xl text-primary/30 font-serif leading-none mb-4">
                    &ldquo;
                  </span>

                  {/* Quote text */}
                  <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6 font-sans">
                    {testimonial.quote}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-white/[0.06] pt-4">
                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    {/* Name and role */}
                    <p className="font-semibold text-white text-sm font-heading">
                      {testimonial.name}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5 font-sans">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </motion.div>
      </div>
    </section>
  );
}

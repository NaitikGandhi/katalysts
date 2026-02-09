"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { VALUES } from "@/lib/constants";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { Zap, Target, Eye, Users } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Target,
  Eye,
  Users,
};

export function Values() {
  return (
    <SectionWrapper>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-brand-blue/70 font-sans mb-4 block"
        >
          our values
        </motion.span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
          what drives us
        </h2>
      </div>

      <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {VALUES.map((value, idx) => {
          const Icon = iconMap[value.icon];
          return (
            <motion.div
              key={idx}
              variants={staggerItemVariants}
              className="group gradient-card rounded-2xl border border-white/[0.06] p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-blue/20 relative overflow-hidden"
              whileHover={{ boxShadow: "0 0 40px rgba(37,99,235,0.08)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-brand-blue/20 group-hover:scale-110">
                  {Icon && <Icon className="w-6 h-6 text-brand-blue" />}
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/50 leading-relaxed font-sans">
                  {value.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </StaggerChildren>
    </SectionWrapper>
  );
}

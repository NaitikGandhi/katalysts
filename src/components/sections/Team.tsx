"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TEAM_MEMBERS } from "@/lib/constants";
import { StaggerChildren, staggerItemVariants } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { Linkedin, RotateCcw } from "lucide-react";

function FlipIcon({ isFlipped, onClick }: { isFlipped: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group/icon relative w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-brand-blue/20 hover:border-brand-blue/40 hover:glow-blue cursor-pointer"
      aria-label={isFlipped ? "Flip back" : "Read more"}
    >
      <motion.div
        animate={{ rotate: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative"
      >
        <RotateCcw className="w-4 h-4 text-white/50 transition-colors duration-300 group-hover/icon:text-brand-blue" />
      </motion.div>
      {/* Pulsing ring on hover */}
      <span className="absolute inset-0 rounded-full border border-brand-blue/0 group-hover/icon:border-brand-blue/30 group-hover/icon:animate-ping" />
    </button>
  );
}

function FounderCard({ member, idx }: { member: typeof TEAM_MEMBERS[number]; idx: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      variants={staggerItemVariants}
      className="relative w-full"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT SIDE */}
        <div
          className="gradient-card rounded-2xl border border-white/[0.06] p-8 transition-all duration-300 hover:border-white/10"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center">
            <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/10">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              {member.name}
            </h3>
            <p className="text-white/40 mt-1 text-sm font-sans">{member.role}</p>

            <div className="mt-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-blue hover:text-brand-blue-light transition-colors"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Flip trigger - bottom left */}
          <div className="absolute bottom-4 left-4">
            <FlipIcon isFlipped={false} onClick={() => setIsFlipped(true)} />
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 gradient-card rounded-2xl border border-brand-blue/20 p-6 overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex flex-col h-full">
            {/* Photo cutout at top */}
            <div className="flex items-start gap-4 mb-4">
              <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden border-2 border-brand-blue/30">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="80px"
                />
              </div>
              <div className="pt-1">
                <h3 className="font-heading font-bold text-lg text-white leading-tight">
                  {member.name}
                </h3>
                <p className="text-brand-blue text-sm mt-0.5">{member.role}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed flex-1 font-sans">
              {member.bio}
            </p>

            {/* LinkedIn + flip back */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.06]">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-blue hover:text-brand-blue-light transition-colors"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <FlipIcon isFlipped={true} onClick={() => setIsFlipped(false)} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Team() {
  return (
    <SectionWrapper id="team">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          who we are
        </h2>
        <p className="mt-6 text-lg text-white/50 leading-relaxed font-sans">
          meet the founders building AI-native from the ground up.
        </p>
      </div>

      <StaggerChildren className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {TEAM_MEMBERS.map((member, idx) => (
          <FounderCard key={idx} member={member} idx={idx} />
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}

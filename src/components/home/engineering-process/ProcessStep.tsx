"use client";

import { motion, useReducedMotion } from "motion/react";

import type { EngineeringProcessStep } from "@/types/engineering-process";

interface ProcessStepProps {
  step: EngineeringProcessStep;
  index: number;
  isLast: boolean;
}

export default function ProcessStep({
  step,
  index,
  isLast,
}: ProcessStepProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              y: 36,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.04, 0.2),
        ease: "easeOut",
      }}
      className="
        relative
        grid
        grid-cols-[3rem_minmax(0,1fr)]
        gap-4
        pb-14
        md:grid-cols-[5rem_minmax(0,1fr)]
        md:gap-10
        md:pb-20
      "
    >
      <div className="relative z-10 flex justify-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-sm font-semibold text-primary md:h-12 md:w-12">
          {isLast ? "↻" : String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <article className="max-w-3xl">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {step.title}
        </h3>

        <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
          {step.description}
        </p>

        {step.emphasis && (
          <p className="mt-5 border-l-2 border-primary pl-5 text-lg font-medium leading-8 text-foreground">
            {step.emphasis}
          </p>
        )}
      </article>
    </motion.li>
  );
}

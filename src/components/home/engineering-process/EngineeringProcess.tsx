"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import ProcessStep from "@/components/home/engineering-process/ProcessStep";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { engineeringProcess } from "@/data/engineeringProcess";
import { cn } from "@/lib/utils";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";

export default function EngineeringProcess() {
  const processRef = useRef<HTMLOListElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 75%", "end 70%"],
  });

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.3,
  });

  return (
    <Section id="engineering-process" className="bg-background">
      <Container>
        <div className="max-w-3xl">
          <h2 className={typography.sectionHeadingBase}>
            {engineeringProcess.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
            {engineeringProcess.introduction}
          </p>
        </div>

        <div className={cn(spacing.sectionGap, "relative max-w-5xl")}>
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-8
              left-6
              top-6
              w-px
              -translate-x-1/2
              bg-border
              md:left-10
            "
          />

          <motion.div
            aria-hidden="true"
            style={{
              scaleY: prefersReducedMotion ? 1 : lineProgress,
            }}
            className="
              absolute
              bottom-8
              left-6
              top-6
              w-px
              -translate-x-1/2
              origin-top
              bg-primary
              md:left-10
            "
          />

          <ol ref={processRef}>
            {engineeringProcess.steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                step={step}
                index={index}
                isLast={index === engineeringProcess.steps.length - 1}
              />
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

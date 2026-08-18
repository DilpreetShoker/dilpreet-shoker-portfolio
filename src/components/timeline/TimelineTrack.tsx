"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useRef } from "react";

import TimelineEntry from "@/components/timeline/TimelineEntry";
import type { TimelineEntry as TimelineEntryData } from "@/types/timeline";

interface TimelineTrackProps {
  entries: readonly TimelineEntryData[];
}

export default function TimelineTrack({
  entries,
}: TimelineTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 70%"],
  });

  return (
    <div
      ref={trackRef}
      className="relative mt-14 max-w-6xl"
    >
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
          md:left-[10.5rem]
        "
      />

      <motion.div
        aria-hidden="true"
        style={{
          scaleY: prefersReducedMotion ? 1 : scrollYProgress,
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
          md:left-[10.5rem]
        "
      />

      <ol>
        {entries.map((entry, index) => (
          <TimelineEntry
            key={entry.id}
            entry={entry}
            index={index}
          />
        ))}
      </ol>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";

import TimelineGallery from "@/components/timeline/TimelineGallery";
import type { TimelineEntry as TimelineEntryData } from "@/types/timeline";
import { timelineTheme } from "@/theme/timeline";

interface TimelineEntryProps {
  entry: TimelineEntryData;
  index: number;
}

export default function TimelineEntry({
  entry,
  index,
}: TimelineEntryProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              y: 32,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.04, 0.16),
        ease: "easeOut",
      }}
      className="
        relative
        grid
        grid-cols-[3rem_minmax(0,1fr)]
        gap-x-4
        gap-y-3
        pb-16
        md:grid-cols-[9rem_3rem_minmax(0,1fr)]
        md:gap-x-8
        md:pb-24
      "
    >
      <p className="col-start-2 text-sm font-medium text-muted md:col-start-1 md:row-start-1 md:pt-1 md:text-right">
        {entry.period}
      </p>

      <div className="relative z-10 col-start-1 row-span-2 row-start-1 flex justify-center md:col-start-2 md:row-span-1">
        <span className={timelineTheme.node}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <article className="col-start-2 min-w-0 max-w-4xl border-t border-border pt-6 md:col-start-3 md:row-start-1 md:border-t-0 md:pt-0">
        <div>
          <h2 className={timelineTheme.title}>{entry.title}</h2>

          <p className={timelineTheme.organisation}>
            {entry.organisation}
            {entry.location && (
              <span className="font-normal text-muted">
                {" "}
                · {entry.location}
              </span>
            )}
          </p>
        </div>

        <p className={timelineTheme.summary}>{entry.summary}</p>

        <ul className={timelineTheme.highlights}>
          {entry.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              />

              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {entry.images?.length ? (
          <TimelineGallery images={entry.images} />
        ) : null}

        {entry.technologies?.length ? (
          <ul
            aria-label={`Technologies used as ${entry.title}`}
            className={timelineTheme.technologies}
          >
            {entry.technologies.map((technology) => (
              <li key={technology} className={timelineTheme.technology}>
                {technology}
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </motion.li>
  );
}

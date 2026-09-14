"use client";

import { useState } from "react";

import TimelineTrack from "@/components/timeline/TimelineTrack";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";
import { elevation } from "@/theme/elevation";
import type { TimelineCategory } from "@/types/timeline";

type TimelineFilter = TimelineCategory;

const filters: readonly TimelineFilter[] = [
  "career",
  "education",
  "other",
];

export default function Timeline() {
  const [activeFilter, setActiveFilter] =
    useState<TimelineFilter>("career");

  const visibleEntries = timeline.entries.filter(
    (entry) => entry.category === activeFilter,
  );

  return (
    <Section className={cn("relative bg-section", elevation.section)}>
      <Container>
        <div
          role="group"
          aria-label="Filter timeline"
          className="flex flex-wrap gap-2"
        >
          {filters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium capitalize transition-colors",
                  isActive
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-surface text-muted hover:bg-surface-hover hover:text-foreground",
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <TimelineTrack
          key={activeFilter}
          entries={visibleEntries}
        />
      </Container>
    </Section>
  );
}

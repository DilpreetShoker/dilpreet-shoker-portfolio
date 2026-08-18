import Image from "next/image";

import { about } from "@/theme/about";
import { effects } from "@/theme/effects";
import { motion } from "@/theme/motion";
import { responsive } from "@/theme/responsive";
import { typography } from "@/theme/typography";
import { cn } from "@/lib/utils";
import type { AboutItem } from "@/types/profile";

interface AboutCardProps {
  item: AboutItem;
}

export default function AboutCard({ item }: AboutCardProps) {
  return (
    <article className={cn("group relative overflow-hidden bg-surface", about.cardAspect)}>
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={cn(
          motion.smoothTransform,
          motion.imageHoverScale,
          "object-cover",
        )}
        style={{
          objectPosition: item.focus,
        }}
      />

      <div
        aria-hidden="true"
        className={cn(
          effects.imageOverlay,
          motion.smoothColor,
          "group-hover:bg-black/25",
        )}
      />

      <div
        aria-hidden="true"
        className={effects.imageGradient}
      />

      <div className={cn("absolute inset-x-0 bottom-0 z-10", about.cardContentPadding)}>
        <div
          className={cn(
            motion.quickTransform,
            motion.cardHoverLift,
          )}
        >
          <h3 className={cn(typography.aboutCardTitleBase, responsive.aboutCardTitle)}>
            {item.title}
          </h3>

          <p className="mt-2 max-w-lg text-sm leading-6 text-white/75 sm:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}

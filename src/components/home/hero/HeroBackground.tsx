import { effects } from "@/theme/effects";
import { hero } from "@/theme/hero";
import { cn } from "@/lib/utils";

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className={cn(
          "absolute rounded-full bg-primary/8",
          hero.primaryGlow,
          hero.primaryBlur,
        )}
      />

      <div
        className={cn(
          "absolute rounded-full bg-primary/5",
          hero.secondaryGlow,
          hero.secondaryBlur,
        )}
      />

      <div className={effects.heroFade} />
    </div>
  );
}

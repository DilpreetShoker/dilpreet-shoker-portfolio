import Link from "next/link";

import HeroBackground from "@/components/home/hero/HeroBackground";
import HeroMotto from "@/components/home/hero/HeroMotto";
import { buttonStyles } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { hero } from "@/theme/hero";
import { responsive } from "@/theme/responsive";
import { typography } from "@/theme/typography";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <Section className="relative flex h-full items-center overflow-hidden py-0">
      <HeroBackground />

      <Container>
        <div className={hero.contentWidth}>
          <h1 className={cn(typography.heroTitleBase, responsive.heroTitle)}>
            {profile.hero.greeting}
          </h1>

          <HeroMotto items={profile.hero.motto} />

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/timeline"
              className={buttonStyles({
                variant: "primary",
                size: "lg",
              })}
            >
              Explore my journey
            </Link>

            <a
              href={profile.cvPath}
              target="_blank"
              rel="noreferrer"
              className={buttonStyles({
                variant: "secondary",
                size: "lg",
              })}
            >
              View CV
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

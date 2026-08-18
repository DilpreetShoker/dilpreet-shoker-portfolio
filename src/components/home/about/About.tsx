import AboutCard from "@/components/home/about/AboutCard";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { about } from "@/theme/about";
import { elevation } from "@/theme/elevation";
import { responsive } from "@/theme/responsive";
import { typography } from "@/theme/typography";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <Section id="about" className={cn("relative bg-section", elevation.section)}>
      <Container>
        <h2 className={cn(typography.sectionHeadingBase, responsive.sectionHeading)}>
          {profile.about.title}
        </h2>

        <div className={cn(about.sectionGap, "grid gap-8 md:grid-cols-2")}>
          {profile.about.items.map((item) => (
            <AboutCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

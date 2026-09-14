import ToolboxGroup from "@/components/home/toolbox/ToolboxGroup";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { toolbox } from "@/data/toolbox";
import { cn } from "@/lib/utils";
import { spacing } from "@/theme/spacing";
import { toolboxTheme } from "@/theme/toolbox";
import { typography } from "@/theme/typography";

export default function Toolbox() {
  return (
    <Section id="toolbox" className="bg-background">
      <Container>
        <div className="max-w-3xl">
          <h2 className={typography.sectionHeadingBase}>
            {toolbox.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
            {toolbox.introduction}
          </p>
        </div>

        <div className={cn(spacing.sectionGap, "border-b border-border")}>
          {toolbox.groups.map((group) => (
            <ToolboxGroup key={group.title} group={group} />
          ))}
        </div>

        <p className={toolboxTheme.footer}>
          Tools evolve. Principles stay the same.
        </p>
      </Container>
    </Section>
  );
}

import Container from "@/components/ui/Container";
import { timeline } from "@/data/timeline";
import { typography } from "@/theme/typography";

export default function TimelineHeader() {
  return (
    <header className="relative flex h-full items-center overflow-hidden bg-background">
      <TimelineHeaderBackground />

      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {timeline.eyebrow}
          </p>

          <h1 className={`mt-4 ${typography.heroTitleBase}`}>
            {timeline.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">
            {timeline.introduction}
          </p>
        </div>
      </Container>
    </header>
  );
}

function TimelineHeaderBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-20 -top-40 h-[30rem] w-[30rem] rounded-full bg-primary/8 blur-[150px]" />

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

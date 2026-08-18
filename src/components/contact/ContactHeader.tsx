import Container from "@/components/ui/Container";
import { contact } from "@/data/contact";
import { contactTheme } from "@/theme/contact";
import { typography } from "@/theme/typography";

export default function ContactHeader() {
  return (
    <header className={contactTheme.header}>
      <ContactBackground />

      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {contact.eyebrow}
          </p>

          <h1 className={`mt-4 ${typography.heroTitleBase}`}>
            {contact.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">
            {contact.introduction}
          </p>
        </div>
      </Container>
    </header>
  );
}

function ContactBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-24 -top-40 h-[32rem] w-[32rem] rounded-full bg-primary/8 blur-[160px]" />
    </div>
  );
}

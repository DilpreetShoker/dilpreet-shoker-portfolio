import Container from "@/components/ui/Container";
import { aiPhilosophy } from "@/data/aiPhilosophy";
import { aiTheme } from "@/theme/ai";

export default function AIPhilosophy() {
  return (
    <section id="ai-philosophy" className={aiTheme.section}>
      <Container>
        <div className={aiTheme.content}>
          <p className={aiTheme.eyebrow}>
            {aiPhilosophy.eyebrow}
          </p>

          <h2 className={aiTheme.title}>
            {aiPhilosophy.title}
          </h2>

          <div className={aiTheme.body}>
            {aiPhilosophy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={aiTheme.closing}>
            <p className={aiTheme.closingText}>
              {aiPhilosophy.closing}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}


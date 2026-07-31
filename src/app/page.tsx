import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function HomePage() {
    return (
        <Section>
            <Container>
                <SectionHeader
                    eyebrow="Portfolio"
                    title="Shared layout is working"
                    description="The Navbar, Footer, typography, spacing and theme are now connected."
                />
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-border bg-surface p-6">
                        <h3 className="text-lg font-semibold text-foreground">
                            Surface
                        </h3>
                        <p className="mt-3 text-muted">
                            This card demonstrates the main surface and border colours.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-surface p-6">
                        <h3 className="text-lg font-semibold text-foreground">
                            Typography
                        </h3>
                        <p className="mt-3 text-muted">
                            Secondary copy uses a softer colour to create hierarchy.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-surface p-6">
                        <h3 className="text-lg font-semibold text-primary">
                            Accent
                        </h3>
                        <p className="mt-3 text-muted">
                            Sky blue is reserved for links, labels and key actions.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
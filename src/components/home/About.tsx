import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function About() {
    return (
        <Section fullHeight>
            <Container>
                <SectionHeader
                    eyebrow="About"
                    title="A little about me"
                    description="I'm a Software Engineer..."
                />
                <Button variant="secondary">View CV</Button>

                <Button variant="ghost">Contact Me</Button>
            </Container>
        </Section>

    );
}
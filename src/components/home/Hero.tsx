import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <Section fullHeight>
            <Container>
                <SectionHeader
                    eyebrow="Software Engineer"
                    title="Dilpreet Shoker"
                    description="Software Engineer at Sky specialising in Java, Spring Boot and distributed systems."
                />
                <Button>
                    View Timeline
                </Button>
            </Container>
        </Section>
    );
}
import ContactLink from "@/components/contact/ContactLink";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { contact } from "@/data/contact";
import { contactTheme } from "@/theme/contact";

export default function ContactLinks() {
  return (
    <Section className="bg-section !py-12 sm:!py-14 lg:!py-16">
      <Container>
        <ul className={contactTheme.linksGrid}>
          {contact.links.map((link) => (
            <ContactLink
              key={link.label}
              link={link}
            />
          ))}
        </ul>
      </Container>
    </Section>
  );
}

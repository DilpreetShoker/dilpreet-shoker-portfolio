import type { Metadata } from "next";

import ContactHeader from "@/components/contact/ContactHeader";
import ContactLinks from "@/components/contact/ContactLinks";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dilpreet Singh.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactLinks />
    </>
  );
}
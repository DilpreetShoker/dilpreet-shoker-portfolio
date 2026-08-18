import {
  ArrowUpRight,
  FileText,
  Link2,
  Mail,
  type LucideIcon,
} from "lucide-react";

import type {
  ContactIcon,
  ContactLink as ContactLinkData,
} from "@/types/contact";
import { contactTheme } from "@/theme/contact";

interface ContactLinkProps {
  link: ContactLinkData;
}

const icons: Record<ContactIcon, LucideIcon> = {
  email: Mail,
  linkedin: Link2,
  cv: FileText,
};

export default function ContactLink({
  link,
}: ContactLinkProps) {
  const Icon = icons[link.icon];

  return (
    <li>
      <a
        href={link.href}
        target={link.external ? "_blank" : undefined}
        rel={link.external ? "noreferrer noopener" : undefined}
        className={contactTheme.card}
      >
        <div
          aria-hidden="true"
          className={contactTheme.icon}
        >
          <Icon className="h-5 w-5" />
        </div>

        <div className={contactTheme.content}>
          <p className={contactTheme.label}>
            {link.label}
          </p>

          <p className={contactTheme.value}>
            {link.value}
          </p>
        </div>

        <ArrowUpRight
          aria-hidden="true"
          className={`h-4 w-4 ${contactTheme.arrow}`}
        />
      </a>
    </li>
  );
}

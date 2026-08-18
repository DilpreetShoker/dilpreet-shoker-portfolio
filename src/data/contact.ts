import type { ContactLink } from "@/types/contact";

export const contact = {
  eyebrow: "Contact",

  title: "Let's connect.",

  introduction:
    "I'm always happy to talk about backend engineering, software architecture, interesting technical problems or new opportunities.",

  links: [
    {
      label: "Email",
      value: "dilpreetshoker@outlook.com",
      href: "mailto:dilpreetshoker@outlook.com",
      icon: "email",
    },
    {
      label: "LinkedIn",
      value: "Connect with me on LinkedIn",
      href: "https://www.linkedin.com/in/dilpreet-singh-shoker/",
      icon: "linkedin",
      external: true,
    },
    {
      label: "CV",
      value: "View my CV",
      href: "/cv/dilpreet-cv.pdf",
      icon: "cv",
      external: true,
    },
  ] satisfies readonly ContactLink[],
} as const;

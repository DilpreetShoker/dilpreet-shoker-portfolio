export type ContactIcon =
  | "email"
  | "linkedin"
  | "cv";

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: ContactIcon;
  external?: boolean;
}

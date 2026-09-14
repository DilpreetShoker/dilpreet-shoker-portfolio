export type TimelineCategory = "career" | "education" | "other";

export interface TimelineImage {
  src: string;
  alt: string;
  focus?: string;
}

export interface TimelineEntry {
  id: string;
  category: TimelineCategory;
  period: string;
  title: string;
  organisation: string;
  location?: string;
  summary: string;
  highlights: readonly string[];
  technologies?: readonly string[];
  images?: readonly TimelineImage[];
}

import type { Metadata } from "next";

import TimelineIntroduction from "@/components/timeline/TimelineIntroduction";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "The career and education journey of Dilpreet Singh.",
};

export default function TimelinePage() {
  return <TimelineIntroduction />;
}
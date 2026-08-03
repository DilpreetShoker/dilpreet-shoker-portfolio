import type { AboutItem } from "@/types/profile";

const aboutItems = [
  {
    title: "Software Engineer",
    description: "Building production software at Sky.",
    image: "/images/f1-car.JPEG",
    imageAlt: "Dilpreet at the Sky office",
    focus: "center 35%",
  },
  {
    title: "Warwick Graduate",
    description: "BSc (Hons) Computer Science.",
    image: "/images/graduation-cap-throw.JPEG",
    imageAlt: "Dilpreet throwing his graduation cap at University of Warwick campus",
    focus: "center 35%",
  },
  {
    title: "Cricket Enthusiast",
    description:
      "Player. Captain. Supporter. And content creator at Hayes Cricket Club.",
    image: "/images/cricket-defence.JPEG",
    imageAlt: "Dilpreet playing cricket",
    focus: "center 45%",
  },
  {
    title: "Traveler",
    description:
      "Curious about the world and want to explore every little corner.",
    image: "/images/skiing.JPEG",
    imageAlt: "Dilpreet skiing in the alps",
    focus: "center 40%",
  },
] satisfies readonly AboutItem[];

export const profile = {
    name: "Dilpreet Singh",

    hero: {
        greeting: "Hi, I'm Dilpreet.",
        motto: [
            "Fueled by coffee",
            "Guided by Clean Code",
            "Protected by TDD",
        ],
    },

    about: {
        title: "A little more about me.",
        items: aboutItems,
    },

    cvPath: "/cv/dilpreet-singh-cv.pdf",
} as const;
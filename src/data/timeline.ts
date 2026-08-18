import type { TimelineEntry } from "@/types/timeline";

export const timeline = {
  eyebrow: "Timeline",
  title: "My journey so far.",

  introduction:
    "The experiences, education and opportunities that have shaped me as a software engineer.",

  entries: [
    {
      id: "software-engineer-sky",
      category: "career",
      period: "March 2026 — Present",
      title: "Software Engineer",
      organisation: "Sky",
      location: "London, UK",
      summary:
        "Earned an early promotion in recognition of strong technical performance, ownership and consistent delivery within the same engineering team.",
      highlights: [
        "Lead cross-team engineering initiatives from design through to production alongside Product Managers and Solution Architects.",
        "Implemented distributed observability across Spring Boot services using OpenTelemetry.",
        "Exported telemetry through Sky's Kafka-based observability platform and created Grafana dashboards backed by ClickHouse.",
        "Support colleagues through technical guidance, knowledge sharing and code reviews.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "OpenTelemetry",
        "Kafka",
        "Grafana",
        "ClickHouse",
      ],
      images: [
        {
          src: "/images/timeline/software-engineer/headshot.jpeg",
          alt: "Dilpreet presenting an engineering showcase at Sky",
          focus: "center 25%",
        },
      ],
    },
    {
      id: "associate-software-engineer-sky",
      category: "career",
      period: "January 2025 — March 2026",
      title: "Associate Software Engineer",
      organisation: "Sky",
      location: "London, UK",
      summary:
        "Worked within Sky's Entertainment Management System department, building backend services used across international markets, partners and devices.",
      highlights: [
        "Developed reactive APIs supporting content experiences across Sky and Comcast platforms.",
        "Delivered backend features involving content availability, metadata and personalised entertainment rails.",
        "Applied Test-Driven Development using JUnit, Cucumber and WireMock.",
        "Supported production releases, monitoring and post-release verification.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "WebFlux",
        "JUnit",
        "Cucumber",
        "WireMock",
      ],
      images: [
        {
          src: "/images/timeline/associate-engineer/f1-car.jpg",
          alt: "Dilpreet working with the Sky engineering team",
          focus: "center",
        },
      ],
    },
    {
      id: "sky-graduate-software-engineer",
      category: "career",
      period: "July 2024 — January 2025",
      title: "Graduate Software Engineer",
      organisation: "Sky",
      location: "London, UK",
      summary:
        "Worked within Sky's agile GenAI team, developing experimental software solutions involving digital twins, causal modelling and large language models.",
      highlights: [
        "Applied causal modelling techniques to build digital twins capable of simulating entities and predicting future activity.",
        "Used OpenAI assistant and completions APIs to improve the accuracy and performance of LLM-powered digital twins.",
        "Strengthened Python engineering skills, including object-oriented programming, polymorphism and automated testing.",
        "Developed accessible interfaces using Streamlit and Gradio, extending them with custom CSS, JavaScript and React components.",
        "Delivered iterative solutions in a Scrum environment while using a Kanban board to coordinate work across multiple projects.",
      ],
      technologies: [
        "Python",
        "OpenAI APIs",
        "Causal Modelling",
        "Digital Twins",
        "Streamlit",
        "Gradio",
        "React",
      ],
      images: [
        {
          src: "/images/timeline/graduate-engineer/sky.jpeg",
          alt: "Digital twin application developed during the Sky graduate programme",
          focus: "center top",
        },
      ],
    },
    {
      id: "sky-internship",
      category: "career",
      period: "Summer 2023",
      title: "Software Engineering Intern",
      organisation: "Sky",
      location: "London, UK",
      summary:
        "Joined the NOW engineering team and contributed to video experiences across Apple platforms.",
      highlights: [
        "Worked with the NOW iOS SDK Core Video team.",
        "Contributed to a reference application for Apple TV.",
        "Experienced professional software delivery within a large engineering organisation.",
      ],
      technologies: ["Swift", "iOS", "tvOS", "Git"],
      images: [
        {
          src: "/images/timeline/internship/sky.jpg",
          alt: "Dilpreet during his software engineering internship at Sky",
          focus: "center",
        },
        {
          src: "/images/timeline/internship/tvos-app.jpg",
          alt: "Apple TV reference application developed during the internship",
          focus: "center",
        },
      ],
    },
    {
      id: "university-of-warwick",
      category: "education",
      period: "September 2021 — July 2024",
      title: "BSc (Hons) Computer Science",
      organisation: "University of Warwick",
      location: "Coventry, UK",
      summary:
        "Graduated with an Upper Second Class degree, including a First Class final-year dissertation exploring artificial intelligence and cricket batting analysis.",
      highlights: [
        "Built an AI system for evaluating cricket batting techniques using computer vision and pose estimation.",
        "Worked with OpenPose, MediaPipe and segmented regression techniques.",
        "Completed projects across software engineering, machine learning and distributed applications.",
        "Won a Deutsche Bank team competition after developing a project-tracking solution incorporating K-nearest neighbours.",
      ],
      technologies: [
        "Python",
        "Computer Vision",
        "MediaPipe",
        "Machine Learning",
        "KNN",
      ],
      images: [
        {
          src: "/images/timeline/warwick/graduation-portrait.jpg",
          alt: "Dilpreet graduating from the University of Warwick",
          focus: "center 25%",
        },
        {
          src: "/images/timeline/warwick/graduation-with-parents.jpg",
          alt: "Dilpreet celebrating his graduation with family",
          focus: "center 42%",
        },
        {
          src: "/images/timeline/warwick/campus.jpg",
          alt: "Dilpreet graduating",
          focus: "center 30%",
        },
      ],
    },
    {
      id: "greenford-high-school",
      category: "education",
      period: "September 2019 — June 2021",
      title: "A Levels",
      organisation: "Greenford High School",
      location: "London, UK",
      summary:
        "Studied Mathematics, Computer Science and Physics, achieving A*, A and A respectively.",
      highlights: [
        "Competed in the Cyber Centurion competition.",
        "Represented the school cricket team.",
        "Worked as a Computer Science tutor.",
      ],
      technologies: [
        "Computer Science",
        "Mathematics",
        "Physics",
      ],
    },
    {
      id: "guru-nanak-sikh-academy",
      category: "education",
      period: "September 2014 — June 2019",
      title: "GCSEs",
      organisation: "Guru Nanak Sikh Academy",
      location: "London, UK",
      summary:
        "Completed ten GCSEs, achieving three grade 9s, three grade 8s, three grade 7s and one grade 5.",
      highlights: [
        "Captained the school cricket team.",
        "Participated in the BBC School News Report.",
        "Took part in Jack Petchey's Speak Out Challenge.",
      ],
    },
  ] satisfies readonly TimelineEntry[],
} as const;

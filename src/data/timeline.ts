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
        "Worked with and maintained services deployed across AWS EC2 and EKS as the platform transitioned towards Kubernetes-based deployments.",
        "Adopted and incorporated agentic AI solutions into existing engineering workflows, including spec-driven development with GitHub Copilot.",
        "Exported telemetry through Sky's Kafka-based observability platform and created Grafana dashboards backed by ClickHouse."
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "OpenTelemetry",
        "Kafka",
        "Grafana",
        "ClickHouse",
        "AWS",
        "EC2",
        "EKS",
        "Kubernetes",
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
          "Joined Sky's NOW engineering team, gaining hands-on experience building video technology across Apple's iOS and tvOS platforms within a large-scale production engineering environment.",
      highlights: [
        "Worked within the NOW iOS SDK Core Video team, contributing to the technology behind video experiences across Apple platforms.",
        "Developed in Swift and gained practical experience working within an established iOS codebase and SDK architecture.",
        "Contributed to the development of a tvOS reference application for Apple TV, applying the NOW SDK within a real client application.",
        "Worked alongside experienced software engineers, taking part in the development practices, collaboration and code review processes used within a production engineering team.",
        "Gained first-hand experience of how software is designed, developed, tested and delivered within a large engineering organisation.",
      ],
      technologies: [
        "Swift",
        "iOS",
        "tvOS",
        "Apple TV",
        "Git",
      ],
      images: [
        {
          src: "/images/timeline/internship/sky.jpg",
          alt: "Dilpreet during his software engineering internship at Sky",
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
      id: "southampton-data-science",
      category: "education",
      period: "June 2022 — July 2022",
      title: "Fundamentals of Data Science",
      organisation: "University of Southampton",
      location: "Southampton, UK",
      summary:
          "Completed a certified technical course covering the foundations of data science, statistics and practical data analysis.",
      highlights: [
        "Applied Python to collect, process and analyse data.",
        "Worked with MongoDB for data storage and management and Bokeh for data visualisation.",
        "Developed foundational knowledge of statistical and data science techniques, including linear regression.",
      ],
      technologies: [
        "Python",
        "MongoDB",
        "Bokeh",
        "Data Science",
        "Statistics",
        "Linear Regression",
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
    {
      id: "deutsche-bank-coding-challenge",
      category: "other",
      period: "University",
      title: "Competition Winner",
      organisation: "Deutsche Bank Coding Challenge",
      location: "University of Warwick",
      summary:
          "Won a university coding challenge hosted by Deutsche Bank as part of a four-person team.",
      highlights: [
        "Developed a project-tracking solution as part of a four-person team.",
        "Applied K-Nearest Neighbours (KNN) as part of the solution.",
        "Awarded first place in the competition.",
      ],
      technologies: [
        "Machine Learning",
        "K-Nearest Neighbours",
        "Teamwork",
      ],
    },
    {
      id: "warwick-punjabi-society",
      category: "other",
      period: "University",
      title: "President",
      organisation: "Warwick Punjabi Society",
      location: "University of Warwick",
      summary:
        "Led a 14-member executive team and helped coordinate events, transport and activities for a society of more than 120 members.",
      highlights: [
        "Directed a 14-member executive team across society operations.",
        "Helped coordinate events, transport and activities for 120+ members.",
        "Held responsibility for health and safety across social and charitable events.",
      ],
    },
    {
      id: "warwick-entrepreneurs",
      category: "other",
      period: "University",
      title: "Head of Technology",
      organisation: "Warwick Entrepreneurs",
      location: "University of Warwick",
      summary:
        "Led technology initiatives for the society and helped deliver its first website.",
      highlights: [
        "Led a software team to create the society's first website.",
        "Improved society operations through technology.",
      ],
    },
    {
      id: "cyber-centurion",
      category: "other",
      period: "A Levels",
      title: "Team Member",
      organisation: "Cyber Centurion",
      location: "London, UK",
      summary:
        "Competed in a nationwide cyber security competition focused on identifying and addressing operating-system vulnerabilities.",
      highlights: [
        "Explored vulnerabilities across Ubuntu, Windows and Windows Server environments.",
      ],
    },
    {
      id: "jack-petchey-speak-out",
      category: "other",
      period: "School",
      title: "Speaker",
      organisation: "Jack Petchey's Speak Out Challenge",
      location: "London, UK",
      summary:
        "Took part in a public-speaking competition and spoke about the importance of freedom of speech.",
      highlights: [
        "Presented a speech on the importance of freedom of speech in a competitive public-speaking format.",
      ],
    },
    {
      id: "hayes-cricket-club",
      category: "other",
      period: "Cricket",
      title: "Captain & Active Member",
      organisation: "Hayes Cricket Club",
      location: "Hayes, London",
      summary:
        "Long-term competitive cricketer with leadership experience across youth and adult teams.",
      highlights: [
        "Captain of Hayes CC 3XI.",
        "Played adult competitive cricket from the age of 15.",
      ],
    },
  ] satisfies readonly TimelineEntry[],
} as const;

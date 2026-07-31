export interface Experience {
    id: string;
    company: string;
    role: string;
    employmentType?: string;
    startDate: string;
    endDate: string;
    location?: string;
    summary: string;
    highlights: string[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: "sky-software-engineer",
        company: "Sky",
        role: "Software Engineer",
        employmentType: "Full-time",
        startDate: "March 2026",
        endDate: "Present",
        location: "London, UK",
        summary:
            "Promoted early within the same engineering team, taking greater ownership of cross-team initiatives and production systems.",
        highlights: [
            "Led cross-team engineering work from initial design through to production alongside Product Managers and Solution Architects.",
            "Integrated OpenTelemetry tracing into Spring Boot services and exported telemetry to Sky's Kafka-based observability platform.",
            "Created Grafana dashboards backed by ClickHouse to support end-to-end monitoring and troubleshooting.",
            "Supported colleagues and junior engineers through knowledge sharing, code reviews and technical guidance.",
        ],
        technologies: [
            "Java",
            "Spring Boot",
            "OpenTelemetry",
            "Kafka",
            "Grafana",
            "ClickHouse",
        ],
    },
    {
        id: "sky-associate-software-engineer",
        company: "Sky",
        role: "Associate Software Engineer",
        employmentType: "Full-time",
        startDate: "January 2025",
        endDate: "March 2026",
        location: "London, UK",
        summary:
            "Worked within Sky's Entertainment Management System department, building backend services used across multiple markets, partners and devices.",
        highlights: [
            "Developed reactive Spring Boot APIs serving content experiences across Sky and Comcast platforms.",
            "Worked with upstream services and cross-functional teams to deliver new content and availability features.",
            "Applied test-driven development using JUnit, Cucumber and WireMock across unit, contract and integration tests.",
            "Supported releases, production verification and ongoing monitoring of live services.",
        ],
        technologies: [
            "Java",
            "Spring Boot",
            "WebFlux",
            "JUnit",
            "Cucumber",
            "WireMock",
        ],
    },
    {
        id: "sky-graduate",
        company: "Sky",
        role: "Graduate Software Engineer",
        employmentType: "Graduate programme",
        startDate: "July 2024",
        endDate: "January 2025",
        location: "London, UK",
        summary:
            "Completed the early stages of Sky's graduate programme before progressing into a permanent engineering role.",
        highlights: [
            "Worked across software engineering teams and developed experience with production systems.",
            "Built a strong foundation in backend development, testing and collaborative delivery.",
            "Contributed to engineering work within Sky's entertainment technology organisation.",
        ],
        technologies: ["Java", "Spring Boot", "Git", "Agile"],
    },
    {
        id: "sky-intern",
        company: "Sky",
        role: "Software Engineering Intern",
        employmentType: "Internship",
        startDate: "Summer 2023",
        endDate: "Summer 2023",
        location: "London, UK",
        summary:
            "Worked on the NOW iOS SDK and contributed to a reference application for Apple TV.",
        highlights: [
            "Developed features within an iOS and tvOS engineering environment.",
            "Contributed to the design and development of a reference application.",
            "Gained experience working within a professional software engineering team.",
        ],
        technologies: ["Swift", "iOS", "tvOS", "Git"],
    },
];
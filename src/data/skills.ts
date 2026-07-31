export interface SkillGroup {
    title: string;
    description: string;
    skills: string[];
}

export const skillGroups: SkillGroup[] = [
    {
        title: "Backend Engineering",
        description:
            "Designing and building reliable APIs, services and integrations for production systems.",
        skills: [
            "Java",
            "Spring Boot",
            "Spring WebFlux",
            "RESTful APIs",
            "Reactive Programming",
            "SQL",
        ],
    },
    {
        title: "Distributed Systems",
        description:
            "Building observable, resilient and scalable systems across multiple services.",
        skills: [
            "Kafka",
            "OpenTelemetry",
            "Redis",
            "ClickHouse",
            "Grafana",
            "Jaeger",
        ],
    },
    {
        title: "Testing",
        description:
            "Using automated testing to deliver dependable and maintainable software.",
        skills: [
            "JUnit",
            "Cucumber",
            "WireMock",
            "TDD",
            "Integration Testing",
            "Contract Testing",
        ],
    },
    {
        title: "Frontend and Data",
        description:
            "Creating user-facing applications and experimenting with data-driven systems.",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Python",
            "Machine Learning",
            "Computer Vision",
        ],
    },
];
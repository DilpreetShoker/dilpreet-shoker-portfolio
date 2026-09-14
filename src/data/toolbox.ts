import type { ToolboxGroup } from "@/types/toolbox";

export const toolbox = {
  title: "My toolbox.",

  introduction:
    "Principles guide the way I build software. These are the tools and technologies I use to put those principles into practice.",

  groups: [
    {
      title: "Languages",
      description:
        "Languages I use across backend systems, artificial intelligence, data work and user-facing applications.",
      icon: "code",
      tools: [
        { name: "Java", icon: "java" },
        { name: "Python", icon: "python" },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Swift", icon: "swift" },
        { name: "SQL", icon: "database" },
      ],
    },
    {
      title: "Backend Engineering",
      description:
        "Building production APIs, reactive services and maintainable application boundaries.",
      icon: "spring",
      tools: [
        { name: "Spring Boot", icon: "spring" },
        { name: "Spring WebFlux", icon: "spring" },
        { name: "RESTful APIs", icon: "api" },
        { name: "OpenAPI", icon: "api" },
        { name: "Reactive Programming" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      description:
          "Working with production services across cloud infrastructure and containerised deployment environments.",
      icon: "cloud",
      tools: [
        { name: "AWS", icon: "cloud" },
        { name: "EC2", icon: "cloud" },
        { name: "EKS", icon: "kubernetes" },
        { name: "Kubernetes", icon: "kubernetes" },
        { name: "Docker", icon: "container" },
      ],
    },
    {
      title: "Distributed Systems",
      description:
        "Connecting services reliably while managing resilience, performance and scale.",
      icon: "kafka",
      tools: [
        { name: "Kafka", icon: "kafka" },
        { name: "Redis", icon: "redis" },
        { name: "Caffeine" },
        { name: "Caching", icon: "database" },
        { name: "Circuit Breaking", icon: "shield" },
        { name: "Service Integration", icon: "api" },
      ],
    },
    {
      title: "Testing",
      description:
        "Turning behaviour, requirements and design intent into executable specifications.",
      icon: "test",
      tools: [
        { name: "TDD", icon: "test" },
        { name: "BDD", icon: "test" },
        { name: "JUnit", icon: "test" },
        { name: "Cucumber", icon: "test" },
        { name: "WireMock", icon: "test" },
        { name: "Contract Testing", icon: "test" },
        { name: "Integration Testing", icon: "test" },
        { name: "Performance Testing", icon: "performance" },
      ],
    },
    {
      title: "Observability",
      description:
        "Understanding production systems through traces, metrics, logs and measurable evidence.",
      icon: "observability",
      tools: [
        { name: "OpenTelemetry", icon: "observability" },
        { name: "Grafana", icon: "observability" },
        { name: "ClickHouse", icon: "database" },
        { name: "Jaeger", icon: "observability" },
        { name: "ELK", icon: "observability" },
        { name: "Distributed Tracing", icon: "observability" },
      ],
    },
    {
      title: "Applied AI & Data",
      description:
        "Applying artificial intelligence, causal techniques and data-driven modelling to practical problems.",
      icon: "ai",
      tools: [
        { name: "OpenAI APIs", icon: "ai" },
        { name: "Large Language Models", icon: "ai" },
        { name: "Digital Twins", icon: "ai" },
        { name: "Causal Modelling", icon: "ai" },
        { name: "Machine Learning", icon: "ai" },
        { name: "Computer Vision", icon: "vision" },
        { name: "MediaPipe", icon: "vision" },
        { name: "K-Nearest Neighbours", icon: "ai" },
      ],
    },
    {
      title: "Frontend & Mobile",
      description:
        "Creating accessible user interfaces for web applications, AI prototypes and Apple platforms.",
      icon: "frontend",
      tools: [
        { name: "Next.js", icon: "frontend" },
        { name: "React", icon: "frontend" },
        { name: "Tailwind CSS", icon: "frontend" },
        { name: "Streamlit", icon: "frontend" },
        { name: "Gradio", icon: "frontend" },
        { name: "Custom CSS", icon: "frontend" },
        { name: "iOS", icon: "mobile" },
        { name: "tvOS", icon: "mobile" },
      ],
    },
    {
      title: "Engineering Delivery",
      description:
        "Delivering software iteratively through collaborative development, code review and production release practices.",
      icon: "delivery",
      tools: [
        { name: "Git", icon: "git" },
        { name: "Scrum", icon: "delivery" },
        { name: "Kanban", icon: "delivery" },
        { name: "Agile Delivery", icon: "delivery" },
        { name: "Code Reviews", icon: "review" },
        { name: "Release Management", icon: "delivery" },
      ],
    },
  ] satisfies readonly ToolboxGroup[],
} as const;

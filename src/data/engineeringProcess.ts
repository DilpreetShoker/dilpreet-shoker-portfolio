import type { EngineeringProcessStep } from "@/types/engineering-process";

export const engineeringProcess = {
  title: "How I build software.",

  introduction:
    "Every project is different, but the way I approach engineering remains consistent. My process has been shaped by Test-Driven Development, Uncle Bob's Clean Code principles and experience building production systems that need to evolve over time.",

  steps: [
    {
      title: "Understand the problem",
      description:
        "Before writing a single line of code, I make sure I understand the behaviour the software should exhibit. The goal is not to jump straight into implementation, but to understand what success actually looks like.",
    },
    {
      title: "Define the behaviour",
      description:
        "I describe the feature from the outside in using behaviour tests. These tests become an executable specification, giving me a clear target before I begin focusing on implementation details.",
    },
    {
      title: "Break complexity into smaller problems",
      description:
        "When a problem feels overwhelming, I do not try to solve it all at once. I break it into smaller, verifiable behaviours and work through them one at a time.",
      emphasis: "What is the smallest thing I can make pass?",
    },
    {
      title: "Prove each behaviour",
      description:
        "Each smaller problem gets its own focused unit test. These tests document intent, reduce uncertainty and give me confidence that each piece behaves correctly in isolation.",
    },
    {
      title: "Implement the minimum",
      description:
        "I write only enough production code to make the current test pass. This keeps the implementation focused, discourages speculative complexity and prevents me from solving problems that do not yet exist.",
    },
    {
      title: "Refactor with confidence",
      description:
        "Once the behaviour is protected by tests, I improve the internal design. This is where Uncle Bob's Clean Code principles become especially important: meaningful names, small focused functions, clear responsibilities and abstractions that reveal intent rather than hide it.",
      emphasis:
        "The tests protect behaviour. Refactoring improves the way that behaviour is expressed.",
    },
    {
      title: "Build software that is easy to change",
      description:
        "Software spends far longer being read, maintained and extended than it does being initially written. I aim for the qualities emphasised throughout Clean Code: readable code, clear boundaries, low coupling, high cohesion and components with one well-defined responsibility. Maintainability is not polish added at the end; it is what allows software to survive changing requirements.",
    },
    {
      title: "Ensure the behaviour still holds",
      description:
        "After refactoring, I run the broader behaviour tests again. Unit tests protect the smaller building blocks, while behaviour tests confirm that the system still delivers the outcome originally agreed.",
    },
    {
      title: "Observe production",
      description:
        "Shipping is not the finish line. Instrumentation, tracing, metrics and dashboards help me understand how the software behaves in the real world rather than relying on assumptions.",
      emphasis: "Instrument. Measure. Then improve.",
    },
    {
      title: "Repeat",
      description:
        "Every release creates new information. Production feedback, changing requirements and lessons from the previous iteration feed into the next problem, restarting the process with a better understanding than before.",
      emphasis: "Understand. Build. Observe. Learn. Repeat.",
    },
  ] satisfies readonly EngineeringProcessStep[],
} as const;

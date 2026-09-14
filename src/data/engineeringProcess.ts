import type { EngineeringProcessStep } from "@/types/engineering-process";

export const engineeringProcess = {
  title: "How I think software should be built.",

  introduction:
      "Good software starts with understanding the problem, not writing code. Complex problems should be broken into small, verifiable pieces, with real use cases driving the implementation. Tests should prove meaningful behaviour rather than chase coverage, and every change should be simple to understand, safe to evolve and observable in production.",

  steps: [
    {
      title: "Start with the problem",
      description:
          "Every piece of work should begin with a clear understanding of the problem being solved, the outcome that is needed and the boundaries around it. Implementation should come after that understanding, not before it.",
    },
    {
      title: "Break down the complexity",
      description:
          "Large problems should be decomposed into smaller, independently deliverable pieces. Each piece should be understandable, implementable and verifiable on its own so that complexity is reduced rather than carried forward.",
      emphasis:
          "Turn one difficult problem into several understandable ones.",
    },
    {
      title: "Describe the behaviour",
      description:
          "For each smaller problem, behaviour tests should describe the outcome that needs to be achieved. They do not need to cover every possible scenario; their purpose is to prove that the problem being worked on has actually been solved.",
    },
    {
      title: "Test the use cases",
      description:
          "Unit tests should be driven by real use cases rather than implementation details. Instead of testing every branch or if statement simply to increase coverage, the important question is what user or system scenario would actually cause the code to behave that way. If a meaningful scenario exists, it should be tested.",
      emphasis:
          "Don't ask: how do I test this branch? Ask: what use case gets me here?",
    },
    {
      title: "Implement only what is needed",
      description:
          "Production code should exist to satisfy real, defined use cases. If the tests already describe everything the system currently needs to do, there is little value in adding speculative behaviour or complexity for problems that do not yet exist.",
      emphasis:
          "Why write code for a problem that does not exist?",
    },
    {
      title: "Refactor once it works",
      description:
          "Once the required behaviour is working, the implementation should be improved without changing what it does. Clearer names, simpler responsibilities, better abstractions, reduced duplication and more readable or efficient approaches all make the software easier to evolve.",
      emphasis:
          "Make it work. Then make the design better without changing what works.",
    },
    {
      title: "Revalidate the behaviour",
      description:
          "After refactoring, the broader behaviour should be verified again. Unit tests protect the smaller use cases, while behaviour tests confirm that the original problem is still solved from the outside.",
    },
    {
      title: "Verify with QA",
      description:
          "Automated tests provide confidence, but software should also be validated in the context in which it will actually be used. QA provides another layer of verification before a change reaches production.",
    },
    {
      title: "Deliver to production",
      description:
          "Once the change has been validated, CI/CD should provide a repeatable and reliable path to production. Automated builds, tests and deployment checks help ensure that the same verified artefact progresses safely through each environment.",
    },
    {
      title: "Observe and learn",
      description:
          "Production is where assumptions meet reality. Logs, metrics, traces and dashboards provide evidence of how the software actually behaves after release and help feed new information back into the next iteration.",
      emphasis:
          "Ship. Observe. Learn. Repeat.",
    },
  ] satisfies readonly EngineeringProcessStep[],
} as const;
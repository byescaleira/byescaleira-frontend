export interface Experience {
  slug: string;
  company: string;
  codename: string;
  role: string;
  period: string;
  location: string;
  focus: string;
  summary: string;
  responsibilities: string[];
  stack: string[];
  outcomes?: string[];
  link?: string;
}

export interface Project {
  slug: string;
  codename: string;
  title: string;
  status: "Active" | "Experiment" | "Concept" | "Ongoing";
  description: string;
  longDescription: string;
  tags: string[];
  goals: string[];
  learnings: string[];
  link?: string;
}

export const experiences: Experience[] = [
  {
    slug: "globo",
    company: "Globo",
    codename: "Cartola",
    role: "iOS Specialist — Cartola FC",
    period: "Present",
    location: "Rio de Janeiro, Brazil",
    focus: "iOS architecture, performance, and scale",
    summary:
      "Cartola FC is the largest fantasy football game in Brazil. As an iOS Specialist at Globo, I work on the architecture, performance, and native craft of an app used by millions of fans every round.",
    responsibilities: [
      "Own iOS architecture decisions for feature teams.",
      "Drive modularization with Swift Package Manager.",
      "Improve CI/CD pipelines and TestFlight automation.",
      "Mentor developers and review code across squads.",
      "Profile and optimize performance under traffic spikes.",
    ],
    stack: ["Swift", "SwiftUI", "UIKit", "SPM", "Clean Architecture", "CI/CD", "Fastlane"],
    outcomes: [
      "Maintained a healthy, fast codebase at scale.",
      "Reduced build friction through modularization.",
      "Improved release confidence via automated pipelines.",
    ],
    link: "https://globo.com",
  },
  {
    slug: "deliver-it-letsbank",
    company: "Deliver IT / Letsbank",
    codename: "Letsbank",
    role: "iOS Developer",
    period: "Fintech",
    location: "Brazil",
    focus: "iOS, security, modular fintech features",
    summary:
      "Built iOS features for Letsbank, a fintech environment where security, reliability, and clean user flows matter. Worked on payment flows, account screens, and modular feature architecture.",
    responsibilities: [
      "Implement secure payment and account features.",
      "Collaborate with backend teams on API contracts.",
      "Write unit tests and participate in code review.",
      "Contribute to design-system adoption.",
    ],
    stack: ["Swift", "UIKit", "MVVM", "REST APIs", "Unit Testing", "CI/CD"],
    outcomes: [
      "Shipped stable features in a regulated fintech context.",
      "Improved shared component reuse across modules.",
    ],
  },
  {
    slug: "next",
    company: "Next",
    codename: "Next",
    role: "iOS Developer",
    period: "Product growth",
    location: "Brazil",
    focus: "Growth, onboarding, A/B experiments",
    summary:
      "Worked on product growth initiatives for Next, experimenting with engagement mechanics, onboarding improvements, and feature iteration cycles.",
    responsibilities: [
      "Build and iterate on growth-oriented features.",
      "Run A/B experiments and analyze adoption.",
      "Maintain UIKit-based feature modules.",
      "Ship incremental improvements fast.",
    ],
    stack: ["Swift", "UIKit", "MVVM", "Analytics", "Feature Flags"],
    outcomes: [
      "Improved onboarding completion through experiment iterations.",
      "Delivered several growth features on schedule.",
    ],
  },
  {
    slug: "tocalivros",
    company: "TocaLivros",
    codename: "Toca",
    role: "Mobile Developer",
    period: "Edtech",
    location: "Brazil",
    focus: "Reading and content discovery",
    summary:
      "Developed mobile features for TocaLivros, an education platform. Focused on student engagement, content discovery, and cross-platform consistency where native performance was required.",
    responsibilities: [
      "Implement native mobile features for iOS.",
      "Integrate content APIs and reading experiences.",
      "Work closely with product and design on UX details.",
    ],
    stack: ["Swift", "UIKit", "REST", "Core Data"],
    outcomes: [
      "Shipped reading and discovery features used by students.",
      "Improved app stability through focused bug fixes.",
    ],
  },
  {
    slug: "boviplan",
    company: "Boviplan",
    codename: "Bovi",
    role: "Mobile Developer",
    period: "Agtech",
    location: "Brazil",
    focus: "Offline-first field tools",
    summary:
      "Built mobile tools for Boviplan, an agtech product used by ranchers and field teams. The challenge was reliable data capture, offline handling, and simple UX in rough environments.",
    responsibilities: [
      "Build field data-capture features.",
      "Implement offline-first data handling.",
      "Design simple, durable interfaces for non-technical users.",
    ],
    stack: ["Swift", "UIKit", "Core Data", "Sync Engine"],
    outcomes: [
      "Reduced manual data entry errors in the field.",
      "Improved app reliability in low-connectivity areas.",
    ],
  },
  {
    slug: "aaa-ufms",
    company: "A.A.A. UFMS",
    codename: "TripleA",
    role: "Developer",
    period: "University",
    location: "Campo Grande, MS",
    focus: "Internal tooling",
    summary:
      "Developed internal tools for A.A.A. UFMS, the university athletic association. Worked on event management, member portals, and automating repetitive operational tasks.",
    responsibilities: [
      "Build internal web and mobile tools.",
      "Automate manual administrative workflows.",
      "Support events and member management.",
    ],
    stack: ["PHP", "JavaScript", "MySQL", "Mobile Web"],
    outcomes: [
      "Streamlined event registration for members.",
      "Reduced manual work for the operations team.",
    ],
  },
  {
    slug: "catwork",
    company: "CATWORK",
    codename: "Cat",
    role: "Developer",
    period: "Early career",
    location: "Campo Grande, MS",
    focus: "Web and mobile projects",
    summary:
      "Started my professional path at CATWORK, working on web and mobile projects for local clients. Learned how to ship real products, talk to stakeholders, and debug under pressure.",
    responsibilities: [
      "Develop client websites and mobile apps.",
      "Gather requirements directly with stakeholders.",
      "Deploy and maintain production projects.",
    ],
    stack: ["PHP", "JavaScript", "HTML/CSS", "Android"],
    outcomes: [
      "Delivered multiple client projects end-to-end.",
      "Built the foundation for product-focused engineering.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "prism",
    codename: "Prism",
    title: "Design System",
    status: "Experiment",
    description:
      "A personal design-system experiment: tokens, components, and patterns that bridge Figma and code with Apple-native aesthetics.",
    longDescription:
      "Prism is my ongoing exploration of how design tokens, components, and platform conventions can live in the same system. It borrows from SwiftUI composition patterns and applies them to a web-first component library built for the Deep Space / Liquid Glass look I use across byescaleira projects.",
    tags: ["Design Tokens", "Components", "SwiftUI", "Tailwind CSS", "Accessibility"],
    goals: [
      "Keep visual decisions as structured code.",
      "Build reusable components that feel native on Apple devices.",
      "Document patterns, not just properties.",
    ],
    learnings: [
      "Tokens reduce decision fatigue across projects.",
      "Component APIs are architecture decisions.",
      "Accessibility must be designed in, not added on.",
    ],
    link: "https://github.com/byescaleira",
  },
  {
    slug: "orbit",
    codename: "Orbit",
    title: "CLI / Automation",
    status: "Active",
    description:
      "Automation tooling for repetitive engineering tasks — scaffolding, standardization, and release helpers that keep teams moving.",
    longDescription:
      "Orbit is a set of CLI helpers and scripts for the boring parts of engineering: scaffolding modules, generating boilerplate, enforcing conventions, and automating releases. The goal is to remove friction so teams spend time on product problems instead of process.",
    tags: ["CLI", "Automation", "Developer Experience", "Swift", "Templates"],
    goals: [
      "Standardize project skeletons and module structure.",
      "Automate release tagging and changelog updates.",
      "Reduce setup time for new repositories.",
    ],
    learnings: [
      "Good DX compounds over time.",
      "CLI tools should fail loudly and recover cleanly.",
      "Conventions are cheaper than committees.",
    ],
    link: "https://github.com/byescaleira",
  },
  {
    slug: "cashly",
    codename: "Cashly",
    title: "Finance App",
    status: "Concept",
    description:
      "A finance app concept focused on clarity, speed, and native iOS craft. Built to explore architecture and polished UX in a real product shape.",
    longDescription:
      "Cashly is a concept for a personal finance app where the real exercise is architecture and interaction design. It explores Clean Architecture in SwiftUI, modular feature boundaries, and the kind of micro-interactions that make a native app feel alive.",
    tags: ["SwiftUI", "Architecture", "UX", "Clean Architecture", "SPM"],
    goals: [
      "Practice modular SwiftUI architecture end-to-end.",
      "Design interactions that feel native and immediate.",
      "Keep the codebase easy to test and extend.",
    ],
    learnings: [
      "State management is the hardest part of finance UIs.",
      "Motion should clarify, not decorate.",
      "Small modules force clearer contracts.",
    ],
  },
  {
    slug: "open-source",
    codename: "Open Source",
    title: "Experiments & Tools",
    status: "Ongoing",
    description:
      "Small tools, sample apps, and explorations shared on GitHub. Experiments in SwiftUI, concurrency patterns, and modular architecture.",
    longDescription:
      "My open-source work is a public lab: small SwiftUI samples, concurrency experiments, architecture templates, and tools I use to learn in the open. Not every repo is meant to be a product; some are meant to be read, forked, and challenged.",
    tags: ["Swift", "Samples", "GitHub", "SwiftUI", "Concurrency"],
    goals: [
      "Share learning in a reusable form.",
      "Build reference implementations for common patterns.",
      "Invite feedback and collaboration.",
    ],
    learnings: [
      "Teaching is the fastest way to find gaps in your own understanding.",
      "Small repos are easier to maintain than big promises.",
      "Documentation is part of the feature.",
    ],
    link: "https://github.com/byescaleira",
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiences.map((e) => e.slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

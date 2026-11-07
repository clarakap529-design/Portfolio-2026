// Edit this file to change the words, links, and projects on the homepage.
// Leave a link as "#" until you have a real destination for it.

export const site = {
  name: "Clara K.",
  title: "Clara K. — Principal UX Designer",
  description:
    "Principal UX Designer for enterprise reporting, analytics, and security. I untangle complex systems, then design what they become.",
  role: "Principal UX Designer | Enterprise, Reporting, Analytics & Security.",
  email: "#",
  linkedin: "#",
  about: [
    "Hi, thanks for visiting. I have 12+ years crafting enterprise UX, most recently designing AI-driven products at scale. I’m a strong advocate for human-centered AI — technology that amplifies human judgment, not replaces it.",
    "I’m actively building my AI fluency: using Lovable as part of my design workflow, and expanding into Cursor to build things like a chart-generating Figma plugin and this portfolio site.",
  ],
};

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  href: string;
  /** Placeholder panel color, shown until an image is added. */
  tone: "pale" | "stone";
  /** Optional path to an image in /public, e.g. "/work/security.png". */
  image?: string;
};

const placeholderSummary =
  "Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.";

export const recentWork: Project[] = [
  {
    title: "Security",
    summary: placeholderSummary,
    tags: ["Security", "Platform", "Systems"],
    href: "#",
    tone: "pale",
  },
  {
    title: "Reporting Analysis",
    summary: placeholderSummary,
    tags: ["Agentic", "Reporting"],
    href: "#",
    tone: "stone",
  },
  {
    title: "Colors & Governance",
    summary: placeholderSummary,
    tags: ["Charting", "Design Library", "Governance"],
    href: "#",
    tone: "pale",
  },
];

export const caseStudies: Project[] = [
  {
    title: "project 4",
    summary: placeholderSummary,
    tags: ["Security", "Platform", "Systems"],
    href: "#",
    tone: "pale",
  },
  {
    title: "project 5",
    summary: placeholderSummary,
    tags: ["Security", "Platform", "Systems"],
    href: "#",
    tone: "pale",
  },
];

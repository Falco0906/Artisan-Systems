import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How Intelligent Automations Can Transform Your Business",
    paragraph:
      "Discover how custom automations eliminate repetitive tasks, reduce errors, and free your team to focus on strategic growth.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Faisal Khan Pathan",
      image: "/images/blog/author-03.png",
      designation: "Co-Founder",
    },
    tags: ["automation"],
    publishDate: "2026",
  },
  {
    id: 2,
    title: "What Are Agentic Workflows and Why They Matter",
    paragraph:
      "Learn about autonomous AI agents that can reason, plan, and execute multi-step tasks — and how they can help your business scale.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Jayanth Adavi",
      image: "/images/blog/author-02.png",
      designation: "Co-Founder",
    },
    tags: ["AI"],
    publishDate: "2026",
  },
  {
    id: 3,
    title: "Building Modern Websites with Next.js and AI Integration",
    paragraph:
      "Explore how Artisan Systems builds high-performance websites with integrated AI features for a seamless user experience.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Artisan Systems",
      image: "/images/blog/author-03.png",
      designation: "Team",
    },
    tags: ["web"],
    publishDate: "2026",
  },
];
export default blogData;

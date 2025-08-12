import { BlogPost, Experience, Project, TechStack } from "@/app/types";

export const projects: Project[] = [
    {
        title: "E-commerce Platform",
        description: "Modern shopping experience with seamless checkout",
        tech: ["React", "Node.js", "PostgreSQL"],
        type: "Web App",
        year: "2024",
    },
    {
        title: "Analytics Dashboard",
        description: "Real-time data visualization for business insights",
        tech: ["Next.js", "TypeScript", "Prisma"],
        type: "SaaS",
        year: "2024",
    },
    {
        title: "Task Management App",
        description: "Collaborative workspace for remote teams",
        tech: ["Vue.js", "Express", "MongoDB"],
        type: "Web App",
        year: "2023",
    },
];

export const blogs: BlogPost[] = [
    {
        title: "Building Scalable React Apps",
        description:
            "Best practices for component architecture and state management",
        date: "Jan 15, 2024",
        readTime: "5 min",
    },
    {
        title: "TypeScript Tips & Tricks",
        description: "Advanced patterns for better type safety and DX",
        date: "Jan 10, 2024",
        readTime: "4 min",
    },
    {
        title: "Modern CSS Techniques",
        description: "Container queries, CSS Grid, and new layout methods",
        date: "Jan 5, 2024",
        readTime: "6 min",
    },
    {
        title: "API Design Patterns",
        description: "RESTful design principles and GraphQL best practices",
        date: "Dec 28, 2023",
        readTime: "7 min",
    },
];

export const experience: Experience[] = [
    {
        role: "Senior Full Stack Developer",
        company: "TechCorp",
        period: "2022 - Present",
        location: "San Francisco, CA",
    },
    {
        role: "Full Stack Developer",
        company: "StartupXYZ",
        period: "2020 - 2022",
        location: "Remote",
    },
    {
        role: "Frontend Developer",
        company: "AgencyABC",
        period: "2019 - 2020",
        location: "San Francisco, CA",
    },
];

export const techStack: TechStack = {
    Languages: ["JavaScript", "TypeScript", "Python", "Go"],
    Frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "FastAPI", "PostgreSQL"],
    Tools: ["Git", "Docker", "AWS", "Figma"],
    "Currently Exploring": ["Electron", "LLM"],
};

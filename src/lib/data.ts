import { BlogPost, ContactInfo, Experience, PersonalInfo, TechStack } from "@/app/types";
import { Github, Linkedin, Mail, X } from "lucide-react";

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
        role: "Full Stack Developer",
        company: "Maydit",
        period: "2025 June - Present",
        location: "Remote",
    },
    {
        role: "Full Stack Developer - Intern",
        company: "ABCDE Technologies",
        period: "2024 Dec - 2025 Mar",
        location: "Remote",
    },
   
];

export const techStack: TechStack = {
    "Currently working on": ["TypeScript", "Python", "React Native", "Electron JS"],
    "Experience with": ["React", "Next.js", "Gin", "GORM", "Tailwind CSS", "Git", "Javascript", "TypeScript", "React Native", "Electron",  "Prisma", "Supaebase", "Convex", "Express", "WebRTC", "Websockets", "Java", "Mysql", "HTML & CSS", "Docker"],
};


export const personal: PersonalInfo = {
    name: "Tholkappiar M",
    logo: "T",
    role: "Full Stack Developer",
    summary: "Crafting digital experiences with clean code and thoughtful design. Passionate about building scalable web applications.",
    location: "India, TamilNadu",
    location_preference: "Remote friendly",
    timezone: "IST",
    timezone_offset: "UTC +5:30",
}

export const contactMethods: ContactInfo[] = [
    {
    icon: Mail,
    label: "email",
    value: "tholkappiar2003@gmail.com",
    },
    {
        icon: Github,
        label: "github",
        value: "tholkappiar"
    },
    {
        icon: X,
        label: "x",
        value: "Tholkappiar2003"
    },
    {
        icon: Linkedin,
        label: "linkedin",
        value: "tholkappiar"
    }
]

export const availableServices: string[] = ["Full-time roles", "Remote work", "Contract work"];

export const responseTime: string = "24h"
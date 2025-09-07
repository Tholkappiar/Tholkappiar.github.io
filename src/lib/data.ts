import { ContactInfo, Experience, PersonalInfo, TechStack } from "@/app/types";
import { Github, Linkedin, Mail, X } from "lucide-react";

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
    "Experience with": ["React", "Next.js", "Gin", "GORM", "Tailwind CSS", "Git", "Javascript", "TypeScript", "React Native", "Electron",  "Prisma", "Supabase", "Convex", "Express", "WebRTC", "Websockets", "Java", "MySql", "HTML & CSS", "Docker"],
};


export const personal: PersonalInfo = {
    name: "Tholkappiar M",
    logo: "T",
    role: "Full Stack Developer",
    summary: "Crafting digital experiences with clean code and thoughtful design. Passionate about building scalable applications.",
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
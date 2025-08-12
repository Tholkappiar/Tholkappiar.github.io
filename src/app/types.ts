export interface Project {
    title: string;
    description: string;
    tech: string[];
    type: string;
    year: string;
}

export interface BlogPost {
    title: string;
    description: string;
    date: string;
    readTime: string;
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
}

export interface TechStack {
    [category: string]: string[];
}

export interface ContactInfo {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
}

// Component Props Types
export interface ModuleProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    size?: "small" | "default" | "large";
}

export interface TagProps {
    children: React.ReactNode;
    variant?: "default" | "accent" | "success";
}

export interface TabButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

// Utility Types
export type ModuleSize = "small" | "default" | "large";
export type TagVariant = "default" | "accent" | "success";
export type SectionType = "about" | "blogs" | "stack" | "contact";

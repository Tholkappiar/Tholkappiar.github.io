export interface Project {
    title: string;
    description: string;
    tech: string[];
    type: string;
    year: string;
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

export interface PersonalInfo {
    name: string;
    logo: string
    role: string
    summary: string
    location: string
    location_preference: string
    timezone: string
    timezone_offset: string
}

export interface FormDetails {
    subject: string
    email: string
    name: string
    message: string
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

// Github repo link
export type GithubRepo = {
    github_repo: string
    blogs_path: string
}

export interface BlogsListType {
    download_url: string
    git_url: string
    html_url: string
    name: string
    path: string
    sha: string
    size: number
    type: string
    url: string
    _links: {
        self: string,
        sha: string,
        size: number,
        url: string
    }
}

export type BlogPostType = {
    name: string
    date: string
}
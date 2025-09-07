import React from "react";
import type {
    ModuleProps,
    TagProps,
    TabButtonProps,
    ModuleSize,
    TagVariant,
} from "../types";
import { contactMethods } from "@/lib/data";

// Reusable Module component
export const Module: React.FC<ModuleProps> = ({
    children,
    className = "",
    hover = true,
    size = "default",
}) => {
    const sizes: Record<ModuleSize, string> = {
        small: "p-3",
        default: "p-4",
        large: "p-6",
    };

    return (
        <div
            className={`bg-card backdrop-blur-sm border border-border rounded-xl ${sizes[size]} ${hover ? "hover:border-border/70 hover:bg-card/95" : ""
                } transition-all duration-1000 ${className}`}
        >
            {children}
        </div>
    );
};

// Reusable Tag component
export const Tag: React.FC<TagProps> = ({ children, variant = "default" }) => {
    const variants: Record<TagVariant, string> = {
        default: "bg-card text-foreground border-border",
        accent: "bg-primary/15 text-primary-foreground border-border",
        success: "bg-accent text-foreground border-border",
    };

    return (
        <span
            className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border bg-[#1f3da8] text-white border-none`}
        >
            {children}
        </span>
    );
};

// Reusable Tab Button component
export const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-1000 ${active
            ? "bg-card text-foreground border border-border"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
            }`}
    >
        {children}
    </button>
);


export function getDetails(property: string): string | undefined {
    return contactMethods.find((value) => value.label === property)?.value
}
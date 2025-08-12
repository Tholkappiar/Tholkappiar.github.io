import React from "react";
import type {
    ModuleProps,
    TagProps,
    TabButtonProps,
    ModuleSize,
    TagVariant,
} from "../types";

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
            className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl ${
                sizes[size]
            } ${
                hover ? "hover:border-gray-700 hover:bg-gray-900/70" : ""
            } transition-all duration-300 ${className}`}
        >
            {children}
        </div>
    );
};

// Reusable Tag component
export const Tag: React.FC<TagProps> = ({ children, variant = "default" }) => {
    const variants: Record<TagVariant, string> = {
        default: "bg-gray-800/80 text-gray-300 border-gray-700",
        accent: "bg-blue-900/30 text-blue-400 border-blue-800",
        success: "bg-green-900/30 text-green-400 border-green-800",
    };

    return (
        <span
            className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${variants[variant]}`}
        >
            {children}
        </span>
    );
};

// Reusable Tab Button component
export const TabButton: React.FC<TabButtonProps> = ({
    active,
    onClick,
    children,
}) => (
    <button
        onClick={onClick}
        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
            active
                ? "bg-gray-800 text-white border border-gray-700"
                : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/50"
        }`}
    >
        {children}
    </button>
);

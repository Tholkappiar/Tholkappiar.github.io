import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { ThemeToggleButton } from "@/components/ToggleButton";

interface NavigationItem {
    id: string;
    label: string;
    icon: LucideIcon;
}

type SectionType = "about" | "blogs" | "stack" | "contact";

interface NavigationServerProps {
    navigation: NavigationItem[];
    activeSection: SectionType;
}

export const NavigationServer: React.FC<NavigationServerProps> = ({
    navigation,
    activeSection,
}) => {
    return (
        <nav className="flex space-x-1 p-1 bg-card backdrop-blur-sm rounded-xl border border-border transition-colors duration-500">
            {navigation.map((item) => (
                <Link
                    key={item.id}
                    href={`?section=${item.id}`}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-500 ${activeSection === item.id
                        ? "bg-primary text-white shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                >
                    <item.icon className="w-3 h-3" />
                    <span className={`${activeSection === item.id && "text-white"}`}>
                        {item.label}
                    </span>
                </Link>
            ))}
            <div className="ml-auto">
                <ThemeToggleButton />
            </div>
        </nav>
    );
};
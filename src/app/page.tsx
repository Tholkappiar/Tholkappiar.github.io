"use client";

import React, { JSX, useState } from "react";
import { User, FileText, Code2, Mail, LucideIcon } from "lucide-react";
import AboutPage from "./pages/about";
import BlogsPage from "./pages/blogs";
import ContactPage from "./pages/contact";
import StackPage from "./pages/stack";
import { ThemeToggleButton } from "@/components/ToggleButton";

interface NavigationItem {
    id: string;
    label: string;
    icon: LucideIcon;
}

type SectionType = "about" | "blogs" | "stack" | "contact";

const Portfolio: React.FC = () => {
    const [activeSection, setActiveSection] = useState<SectionType>("about");

    const navigation: NavigationItem[] = [
        { id: "about", label: "About", icon: User },
        { id: "blogs", label: "Blogs", icon: FileText },
        { id: "stack", label: "Stack", icon: Code2 },
        { id: "contact", label: "Contact", icon: Mail },
    ];

    const renderContent = (): JSX.Element => {
        switch (activeSection) {
            case "about":
                return <AboutPage changeSection={handleSectionChange} />;
            case "blogs":
                return <BlogsPage />;
            case "stack":
                return <StackPage />;
            case "contact":
                return <ContactPage />;
            default:
                return <AboutPage changeSection={handleSectionChange} />;
        }
    };

    const handleSectionChange = (sectionId: string): void => {
        setActiveSection(sectionId as SectionType);
    };

    return (
        <div className="flex flex-1">
            <div className="w-4xl mx-auto p-6">
                {/* Clean Header */}
                <header className="mb-10">
                    <div className="flex items-center justify-between mb-6">
                        <div className="text-xs text-gray-600 font-mono">
                            dev.portfolio
                        </div>
                    </div>

                    {/* Modern Navigation */}
                    <nav className="flex space-x-1 p-1 bg-card backdrop-blur-sm rounded-xl border border-border transition-colors duration-1000">
                        {navigation.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleSectionChange(item.id)}
                                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-1000 ${activeSection === item.id
                                    ? "bg-primary text-white shadow-lg"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    }`}
                            >
                                <item.icon className="w-3 h-3" />
                                <span className={`${activeSection === item.id && "text-white"}`}>{item.label}</span>
                            </button>
                        ))}
                        <div className="ml-auto">
                            <ThemeToggleButton />
                        </div>
                    </nav>

                </header>

                {/* Content */}
                <main className="">{renderContent()}</main>
            </div>
        </div>
    );
};

export default Portfolio;

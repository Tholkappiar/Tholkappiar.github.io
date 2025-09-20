import React from "react";
import AboutPage from "./pages/about";
import BlogsPage from "./pages/blogs";
import ContactPage from "./pages/contact";
import StackPage from "./pages/stack";
import { NavigationServer } from "@/components/NavigationServer";

interface NavigationItem {
    id: string;
    label: string;
    iconName: string;
}

type SectionType = "about" | "blogs" | "stack" | "contact";

interface PortfolioProps {
    searchParams: Promise<{ section?: string }>;
}

const Portfolio: React.FC<PortfolioProps> = async ({ searchParams }) => {
    const params = await searchParams;
    const activeSection = (params.section as SectionType) || "about";

    const navigation: NavigationItem[] = [
        { id: "about", label: "About", iconName: "User" },
        { id: "blogs", label: "Blogs", iconName: "FileText" },
        { id: "stack", label: "Stack", iconName: "Code2" },
        { id: "contact", label: "Contact", iconName: "Mail" },
    ];

    const renderContent = (): React.JSX.Element => {
        switch (activeSection) {
            case "about":
                return <AboutPage />;
            case "blogs":
                return <BlogsPage />;
            case "stack":
                return <StackPage />;
            case "contact":
                return <ContactPage />;
            default:
                return <AboutPage />;
        }
    };

    return (
        <div className="flex flex-1">
            <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6">
                <header className="mb-6 sm:mb-8 lg:mb-10">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="text-xs text-gray-600 font-mono">
                            dev.portfolio
                        </div>
                    </div>

                    <NavigationServer
                        navigation={navigation}
                        activeSection={activeSection}
                    />
                </header>

                <main className="w-full">{renderContent()}</main>
            </div>
        </div>
    );
};

export default Portfolio;
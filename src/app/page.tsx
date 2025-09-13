import React from "react";
import { User, FileText, Code2, Mail, LucideIcon } from "lucide-react";
import AboutPage from "./pages/about";
import BlogsPage from "./pages/blogs";
import ContactPage from "./pages/contact";
import StackPage from "./pages/stack";
import { NavigationServer } from "@/components/NavigationServer";

interface NavigationItem {
    id: string;
    label: string;
    icon: LucideIcon;
}

type SectionType = "about" | "blogs" | "stack" | "contact";

interface PortfolioProps {
    searchParams: { section?: string };
}

const Portfolio: React.FC<PortfolioProps> = async ({ searchParams }) => {
    const params = await searchParams;
    const activeSection = (params.section as SectionType) || "about";

    const navigation: NavigationItem[] = [
        { id: "about", label: "About", icon: User },
        { id: "blogs", label: "Blogs", icon: FileText },
        { id: "stack", label: "Stack", icon: Code2 },
        { id: "contact", label: "Contact", icon: Mail },
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
            <div className="w-4xl mx-auto p-6">
                <header className="mb-10">
                    <div className="flex items-center justify-between mb-6">
                        <div className="text-xs text-gray-600 font-mono">
                            dev.portfolio
                        </div>
                    </div>

                    <NavigationServer
                        navigation={navigation}
                        activeSection={activeSection}
                    />
                </header>

                <main className="">{renderContent()}</main>
            </div>
        </div>
    );
};

export default Portfolio;
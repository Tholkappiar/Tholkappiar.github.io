import React, { JSX } from "react";
import { Module, Tag } from "./shared";
import { techStack } from "@/lib/data";

const StackPage: React.FC = () => {
    const renderTechCategory = ([category, items]: [string, string[]]): JSX.Element => (
        <Module key={category}>
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${category === "Currently working" ? "bg-green-500" : "bg-primary"}`}
                />
                <h3 className="text-sm font-medium text-foreground">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {items.map((item: string) => (
                    <Tag key={item} variant="success">
                        {item}
                    </Tag>
                ))}
            </div>
        </Module>
    );

    const techCategories: [string, string[]][] = Object.entries(techStack);

    return (
        <div className="space-y-4 sm:space-y-6">
            <div className="mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Technology Stack</h2>
                <p className="text-sm text-muted">Tools I use to build products</p>
            </div>

            <div className="grid gap-3 sm:gap-4">{techCategories.map(renderTechCategory)}</div>
        </div>
    );
};

export default StackPage;

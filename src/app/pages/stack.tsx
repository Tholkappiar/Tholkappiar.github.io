import React, { JSX } from "react";
import { Module, Tag } from "./shared";
import { techStack } from "@/lib/data";

const StackPage: React.FC = () => {
    const renderTechCategory = ([category, items]: [
        string,
        string[]
    ]): JSX.Element => (
        <Module key={category}>
            <div className="flex items-center space-x-2 mb-4">
                <div
                    className={`w-2 h-2 rounded-full ${
                        category === "Currently working"
                            ? "bg-green-500"
                            : "bg-blue-500"
                    }`}
                ></div>
                <h3 className="text-sm font-medium text-white">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {items.map((item: string) => (
                    <Tag key={item} variant="accent">
                        {item}
                    </Tag>
                ))}
            </div>
        </Module>
    );

    const techCategories: [string, string[]][] = Object.entries(techStack);

    return (
        <div className="space-y-6">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-white mb-2">
                    Technology Stack
                </h2>
                <p className="text-sm text-gray-400">
                    Tools I use to build great products
                </p>
            </div>

            <div className="grid gap-4">
                {techCategories.map(renderTechCategory)}
            </div>
        </div>
    );
};

export default StackPage;

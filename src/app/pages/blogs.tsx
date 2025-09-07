'use client';

import React, { JSX, useEffect, useState } from "react";
import type { BlogPostType } from "../types";

const BlogsPage: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogPostType[]>([]);

    useEffect(() => {
        async function getBlogs() {
            try {
                const response = await fetch("/api/github/getBlogs");
                if (!response.ok) throw new Error("Failed to fetch blogs");

                const result: BlogPostType[] = await response.json();
                setBlogs(result);
            } catch (error) {
                console.error("Error loading blogs:", error);
            }
        }

        getBlogs();
    }, []);

    const renderBlogCard = ({ name, date }: BlogPostType, index: number): JSX.Element => (
        <div
            key={index}
            className="group cursor-pointer h-full flex gap-8 items-center select-none"
        >
            <div className="text-xs text-muted-foreground w-20">{date}</div>
            <h3 className="relative text-sm font-medium text-muted transition-colors
        after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
        after:h-[2px] after:w-full after:bg-current after:scale-x-0
        after:origin-left after:transition-transform after:duration-300 after:ease-linear
        group-hover:after:scale-x-100 group-hover:text-foreground"
            >
                {name}
            </h3>
        </div>
    );

    return (
        <div className="w-full space-y-6">
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-foreground mb-2">Blog Posts</h2>
                <p className="text-sm text-muted">Thoughts on development, design, and tech</p>
            </div>

            <div className="space-y-4">{blogs.map(renderBlogCard)}</div>
        </div>
    );
};

export default BlogsPage;

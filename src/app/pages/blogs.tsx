'use client';
import React, { JSX, useEffect, useState } from "react";
import type { BlogPostType } from "../types";
import { API } from "@/lib/utils";
import Link from "next/link";

const BlogsPage: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogPostType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getBlogs() {
            try {
                const response = await fetch(API.backend.getBlogs);
                if (!response.ok) throw new Error("Failed to fetch blogs");

                const result: BlogPostType[] = await response.json();
                setBlogs(result);
            } catch (error) {
                console.error("Error loading blogs:", error);
            } finally {
                setLoading(false);
            }
        }

        getBlogs();
    }, []);

    const renderBlogCard = (
        { post_name, date }: BlogPostType,
        index: number
    ): JSX.Element => {
        const slug = post_name.trim().replace(/ /g, "-");

        return (
            <Link
                key={index}
                href={`/blog/${(slug)}`}
                className="group cursor-pointer h-full flex gap-8 items-center select-none"
            >
                <div className="text-xs text-muted-foreground w-20">{date}</div>
                <h3
                    className="relative text-sm font-medium text-muted transition-colors
                     after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
                     after:h-[2px] after:w-full after:bg-current after:scale-x-0
                     after:origin-left after:transition-transform after:duration-500 after:ease-linear
                     group-hover:after:scale-x-100 group-hover:text-foreground"
                >
                    {post_name}
                </h3>
            </Link>
        );
    };

    const renderShimmerCard = (index: number) => (
        <div
            key={index}
            className="flex gap-8 items-center animate-pulse select-none"
        >
            <div className="w-20 h-4 bg-muted rounded"></div>
            <div className="h-4 w-full bg-muted rounded"></div>
        </div>
    );

    return (
        <div className="w-full space-y-6">
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-foreground mb-2">Blog Posts</h2>
                <p className="text-sm text-muted">Thoughts on development, design, and tech</p>
            </div>

            <div className="space-y-4">
                {loading
                    ? Array.from({ length: 5 }).map((_, i) => renderShimmerCard(i))
                    : blogs.map(renderBlogCard)}
            </div>
        </div>
    );
};

export default BlogsPage;

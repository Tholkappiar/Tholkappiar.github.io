import React, { JSX } from "react";
import { ExternalLink } from "lucide-react";
import type { BlogPost } from "../types";
import { blogs } from "@/lib/data";
import { Module, Tag } from "./shared";

const BlogsPage: React.FC = () => {
    const renderBlogCard = (blog: BlogPost, index: number): JSX.Element => (
        <Module key={index} className="group cursor-pointer h-full">
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                    <Tag>{blog.readTime}</Tag>
                    <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-gray-400 transition-colors" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2 group-hover:text-gray-300 transition-colors flex-1">
                    {blog.title}
                </h3>
                <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                    {blog.description}
                </p>
                <div className="text-xs text-gray-500 mt-auto">{blog.date}</div>
            </div>
        </Module>
    );

    const featuredBlog: BlogPost = blogs[0];
    const otherBlogs: BlogPost[] = blogs.slice(1);

    return (
        <div className="w-full space-y-6">
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-white mb-2">
                    Blog Posts
                </h2>
                <p className="text-sm text-gray-400">
                    Thoughts on development, design, and tech
                </p>
            </div>

            {/* Featured Blog */}
            <Module className="border-blue-800/50 bg-blue-900/10">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <Tag variant="accent">Featured</Tag>
                            <span className="text-xs text-gray-500">
                                Latest
                            </span>
                        </div>
                        <h3 className="text-base font-medium text-white mb-2 group-hover:text-gray-300 transition-colors">
                            {featuredBlog.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                            {featuredBlog.description}
                        </p>
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                            <span>{featuredBlog.date}</span>
                            <span>•</span>
                            <span>{featuredBlog.readTime} read</span>
                        </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-600 hover:text-blue-400 transition-colors ml-4" />
                </div>
            </Module>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-3">
                {otherBlogs.map(renderBlogCard)}
            </div>
        </div>
    );
};

export default BlogsPage;

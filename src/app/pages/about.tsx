import React, { JSX } from "react";
import { MapPin, Dot, GithubIcon, File } from "lucide-react";
import type { Experience } from "../types";
import { experience } from "@/lib/data";
import { Module } from "./shared";
import { GitHubActivityChart } from "@/components/githubActivityChart";
import Link from "next/link";

const AboutPage: React.FC = () => {
    const renderExperienceItem = (
        exp: Experience,
        index: number
    ): JSX.Element => (
        <div key={index} className="group">
            <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                <div className="flex flex-col items-center mt-1.5">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-white transition-colors"></div>
                    {index < experience.length - 1 && (
                        <div className="w-px h-6 bg-gray-800 mt-1"></div>
                    )}
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xs font-medium text-white">
                            {exp.role}
                        </h4>
                        <span className="text-xs text-gray-500 font-mono">
                            {exp.period}
                        </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-400">
                            {exp.company}
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="text-xs text-gray-500">
                            {exp.location}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-4">
            {/* Modular Bento Grid */}
            <div className="grid grid-cols-6 gap-3">
                {/* Main Profile */}
                <Module className="col-span-6 md:col-span-4">
                    <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                            AJ
                        </div>
                        <div className="flex-1">
                            <h1 className="text-lg font-semibold text-white mb-1">
                                Alex Johnson
                            </h1>
                            <p className="text-xs text-gray-400 mb-3">
                                Full Stack Developer
                            </p>
                            <p className="text-xs text-gray-300 leading-relaxed">
                                Crafting digital experiences with clean code and
                                thoughtful design. Passionate about building
                                scalable web applications.
                            </p>
                        </div>
                    </div>
                </Module>

                {/* Quick Status */}
                <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center gap-4">
                    <Module
                        className="col-span-3 md:col-span-2 w-full"
                        size="small"
                    >
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-3 h-3 text-gray-500" />
                            <div>
                                <div className="text-xs text-gray-300">
                                    San Francisco
                                </div>
                                <div className="text-xs text-gray-500">
                                    Remote friendly
                                </div>
                            </div>
                        </div>
                    </Module>
                    <Module
                        className="col-span-3 md:col-span-2 w-full"
                        size="small"
                    >
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-3 h-3 text-gray-500" />
                            <div>
                                <div className="text-xs text-gray-300">
                                    PST Timezone
                                </div>
                                <div className="text-xs text-gray-500">
                                    UTC-8
                                </div>
                            </div>
                        </div>
                    </Module>
                </div>

                {/* Info Cards */}
                <div className="col-span-6 md:col-span-2 flex flex-col items-center gap-4">
                    <Module
                        className="col-span-3 md:col-span-2 w-full flex flex-1 items-center justify-center py-2 bg-gray-800/50 rounded-lg"
                        size="small"
                    >
                        <div className="flex items-center justify-evenly w-full px-4">
                            <a
                                href="https://github.com/username"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my GitHub profile"
                                className="group relative flex flex-col items-center"
                            >
                                <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                <span className="text-xs text-gray-400 mt-1 group-hover:text-white">
                                    GitHub
                                </span>
                            </a>
                            <a
                                href="http://google.com"
                                download
                                aria-label="Download my resume"
                                className="group relative flex flex-col items-center"
                            >
                                <File className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                <span className="text-xs text-gray-400 mt-1 group-hover:text-white">
                                    Resume
                                </span>
                            </a>
                        </div>
                    </Module>

                    <Module
                        size="small"
                        className="col-span-6 md:col-span-2 w-full flex flex-1 items-center justify-center hover:cursor-pointer hover:border-blue-800"
                        hover={false}
                    >
                        <Link
                            href="/contact"
                            className="flex items-center space-x-4"
                        >
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="flex flex-col gap-1">
                                <div className="text-xs text-gray-300">
                                    Available for work
                                </div>
                                <div className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                                    Connect with me
                                </div>
                            </div>
                        </Link>
                    </Module>
                </div>

                <Module className="col-span-6 md:col-span-4">
                    <GitHubActivityChart />
                </Module>
            </div>

            {/* Experience Timeline */}
            <Module>
                <h3 className="text-sm font-medium text-white mb-4 flex items-center space-x-2">
                    <Dot className="w-4 h-4 text-gray-500" />
                    <span>Experience</span>
                </h3>
                <div className="space-y-3">
                    {experience.map(renderExperienceItem)}
                </div>
            </Module>
        </div>
    );
};

export default AboutPage;

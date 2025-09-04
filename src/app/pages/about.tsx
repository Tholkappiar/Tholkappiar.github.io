import React, { JSX } from "react";
import { MapPin, Dot, GithubIcon, File } from "lucide-react";
import type { Experience } from "../types";
import { experience, personal } from "@/lib/data";
import { getDetails, Module } from "./shared";
import { GitHubActivityChart } from "@/components/githubActivityChart";
import Link from "next/link";

const AboutPage: React.FC = () => {
    const renderExperienceItem = (
        exp: Experience,
        index: number
    ): JSX.Element => (
        <div key={index} className="group">
            <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex flex-col items-center mt-1.5">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full group-hover:bg-foreground transition-colors"></div>
                    {index < experience.length - 1 && (
                        <div className="w-px h-6 bg-border mt-1"></div>
                    )}
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xs font-medium text-foreground">
                            {exp.role}
                        </h4>
                        <span className="text-xs text-muted-foreground font-mono">
                            {exp.period}
                        </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-muted-foreground">
                            {exp.company}
                        </span>
                        <span className="text-border">•</span>
                        <span className="text-xs text-muted">
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
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/80 to-primary rounded-lg flex items-center justify-center text-primary-foreground text-sm font-bold">
                            {personal.logo}
                        </div>
                        <div className="flex-1">
                            <h1 className="text-lg font-semibold text-foreground mb-1">
                                {personal.name}
                            </h1>
                            <p className="text-xs text-muted-foreground mb-3">
                                {personal.role}
                            </p>
                            <p className="text-xs text-muted leading-relaxed">
                                {personal.summary}
                            </p>
                        </div>
                    </div>
                </Module>

                {/* Quick Status */}
                <div className="col-span-6 md:col-span-2 flex flex-col items-center justify-center gap-4">
                    <Module className="col-span-3 md:col-span-2 w-full" size="small">
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-3 h-3 text-muted-foreground" />
                            <div>
                                <div className="text-xs text-foreground">{personal.location}</div>
                                <div className="text-xs text-muted">{personal.location_preference}</div>
                            </div>
                        </div>
                    </Module>
                    <Module className="col-span-3 md:col-span-2 w-full" size="small">
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-3 h-3 text-muted-foreground" />
                            <div>
                                <div className="text-xs text-foreground">{personal.timezone} Timezone</div>
                                <div className="text-xs text-muted">{personal.timezone_offset}</div>
                            </div>
                        </div>
                    </Module>
                </div>

                {/* Info Cards */}
                <div className="col-span-6 md:col-span-2 flex flex-col items-center gap-4">
                    <Module className="col-span-3 md:col-span-2 w-full flex flex-1 items-center justify-center py-2" size="small">
                        <div className="flex items-center justify-evenly w-full px-4">
                            <a
                                href={`https://github.com/${getDetails('github')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my GitHub profile"
                                className="group relative flex flex-col items-center"
                            >
                                <GithubIcon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                                <span className="text-xs text-muted-foreground mt-1 group-hover:text-foreground">
                                    GitHub
                                </span>
                            </a>
                            <a
                                href="http://google.com"
                                download
                                aria-label="Download my resume"
                                className="group relative flex flex-col items-center"
                            >
                                <File className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                                <span className="text-xs text-muted-foreground mt-1 group-hover:text-foreground">
                                    Resume
                                </span>
                            </a>
                        </div>
                    </Module>

                    <Module
                        size="small"
                        className="col-span-6 md:col-span-2 w-full flex flex-1 items-center justify-center"
                        hover={false}
                    >
                        <Link href="/contact" className="flex items-center space-x-4">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <div className="flex flex-col gap-1">
                                <div className="text-xs text-foreground">Available for work</div>
                                <div className="text-xs text-primary hover:text-primary-hover transition-colors">Connect with me</div>
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
                <h3 className="text-sm font-medium text-foreground mb-4 flex items-center space-x-2">
                    <Dot className="w-4 h-4 text-muted-foreground" />
                    <span>Experience</span>
                </h3>
                <div className="space-y-3">{experience.map(renderExperienceItem)}</div>
            </Module>
        </div>
    );
};

export default AboutPage;

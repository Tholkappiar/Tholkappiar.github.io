"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Contribution {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

interface GitHubContributionResponse {
    total: {
        [year: number]: number;
        lastYear?: number;
    };
    contributions: Contribution[];
}

export const GitHubActivityChart = () => {
    const [activityData, setActivityData] = useState<Contribution[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchGitHubActivity = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get<GitHubContributionResponse>(
                    `https://github-contributions-api.jogruber.de/v4/hkirat?y=last`,
                    { headers: { Accept: "application/json" } }
                );

                const contributions = response.data.contributions;
                if (contributions && contributions.length > 0) {
                    setActivityData(contributions);
                    setError(null);
                } else {
                    setError("No contribution data available for this user.");
                    setActivityData([]);
                }
            } catch (err) {
                console.error("Error fetching GitHub activity:", err);
                setError("Failed to fetch GitHub activity. Please try again later.");
                setActivityData([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGitHubActivity();
    }, []);

    // fixed palette (won't change with theme)
    const palette = [
        "#cbd5e1", // level 0 (none) — visible on both themes
        "#16a34a", // level 1
        "#059669", // level 2
        "#10b981", // level 3
        "#34d399", // level 4
    ];

    const getColorStyle = (level: number) => {
        const color = palette[level] ?? palette[0];
        return { backgroundColor: color };
    };

    // Group data by weeks (7 days per column)
    const weeks: Contribution[][] = [];
    for (let i = 0; i < activityData.length; i += 7) {
        weeks.push(activityData.slice(i, i + 7));
    }

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <h4 className="text-xs font-medium text-foreground">GitHub Activity</h4>
                <div className="flex items-center space-x-2 text-xs text-muted">
                    <span>Less</span>
                    <div className="flex items-center space-x-0.5">
                        {[0, 1, 2, 3, 4].map((level) => (
                            <div
                                key={level}
                                style={getColorStyle(level)}
                                className="w-2 h-2 rounded-sm"
                                aria-hidden
                            />
                        ))}
                    </div>
                    <span>More</span>
                </div>
            </div>

            {isLoading ? (
                <div className="text-xs text-muted">Loading contributions...</div>
            ) : error ? (
                <div className="text-xs text-destructive">{error}</div>
            ) : (
                <div className="flex space-x-0.5 overflow-x-auto">
                    {weeks.map((week, wi) => (
                        <div key={wi} className="flex flex-col space-y-0.5">
                            {week.map((day) => (
                                <div
                                    key={day.date}
                                    style={getColorStyle(day.level)}
                                    className="w-2 h-2 rounded-sm hover:scale-110 transition-transform cursor-pointer"
                                    title={`${day.count} contributions on ${day.date}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            )}

            <div className="text-xs text-muted">
                {activityData.reduce((sum, d) => sum + d.count, 0)} contributions in the last year
            </div>
        </div>
    );
};

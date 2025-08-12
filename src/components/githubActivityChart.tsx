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
                // Fetch contributions from github-contributions-api
                const response = await axios.get<GitHubContributionResponse>(
                    `https://github-contributions-api.jogruber.de/v4/hkirat?y=last`,
                    {
                        headers: {
                            Accept: "application/json",
                        },
                    }
                );

                const contributions = response.data.contributions;

                // Validate and set data
                if (contributions && contributions.length > 0) {
                    setActivityData(contributions);
                    setError(null);
                } else {
                    setError("No contribution data available for this user.");
                    setActivityData([]);
                }
            } catch (err) {
                console.error("Error fetching GitHub activity:", err);
                setError(
                    "Failed to fetch GitHub activity. Please try again later."
                );
                setActivityData([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchGitHubActivity();
    }, []);

    const getColorClass = (level: number): string => {
        const colors = [
            "bg-gray-800", // 0 contributions
            "bg-green-900", // 1-2 contributions
            "bg-green-700", // 3-4 contributions
            "bg-green-500", // 5-6 contributions
            "bg-green-400", // 7+ contributions
        ];
        return colors[level] || colors[0];
    };

    // Group data by weeks
    const weeks = [];
    for (let i = 0; i < activityData.length; i += 7) {
        weeks.push(activityData.slice(i, i + 7));
    }

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <h4 className="text-xs font-medium text-white">
                    GitHub Activity
                </h4>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                    <span>Less</span>
                    <div className="flex space-x-0.5">
                        {[0, 1, 2, 3, 4].map((level) => (
                            <div
                                key={level}
                                className={`w-2 h-2 rounded-sm ${getColorClass(
                                    level
                                )}`}
                            />
                        ))}
                    </div>
                    <span>More</span>
                </div>
            </div>

            {isLoading ? (
                <div className="text-xs text-gray-400">
                    Loading contributions...
                </div>
            ) : error ? (
                <div className="text-xs text-red-400">{error}</div>
            ) : (
                <div className="flex space-x-0.5 overflow-x-auto">
                    {weeks.map((week, weekIndex) => (
                        <div
                            key={weekIndex}
                            className="flex flex-col space-y-0.5"
                        >
                            {week.map((day) => (
                                <div
                                    key={day.date}
                                    className={`w-2 h-2 rounded-sm ${getColorClass(
                                        day.level
                                    )} hover:ring-1 hover:ring-white/20 transition-all cursor-pointer`}
                                    title={`${day.count} contributions on ${day.date}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            )}

            <div className="text-xs text-gray-400">
                {activityData.reduce((sum, day) => sum + day.count, 0)}{" "}
                contributions in the last year
            </div>
        </div>
    );
};

"use client";

import { useEffect, useState } from "react";

export const GitHubActivityChart = () => {
    const [activityData, setActivityData] = useState([]);

    useEffect(() => {
        // Generate mock GitHub activity data for the past year
        const generateMockData = () => {
            const data = [];
            const today = new Date();

            for (let i = 364; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);

                // Random contribution count (0-10)
                const contributions = Math.floor(Math.random() * 11);

                data.push({
                    date: date.toISOString().split("T")[0],
                    contributions,
                    level:
                        contributions === 0
                            ? 0
                            : contributions <= 2
                            ? 1
                            : contributions <= 4
                            ? 2
                            : contributions <= 6
                            ? 3
                            : 4,
                });
            }
            return data;
        };

        setActivityData(generateMockData());
    }, []);

    const getColorClass = (level) => {
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

            <div className="flex space-x-0.5 overflow-x-auto">
                {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col space-y-0.5">
                        {week.map((day, dayIndex) => (
                            <div
                                key={day.date}
                                className={`w-2 h-2 rounded-sm ${getColorClass(
                                    day.level
                                )} hover:ring-1 hover:ring-white/20 transition-all cursor-pointer`}
                                title={`${day.contributions} contributions on ${day.date}`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <div className="text-xs text-gray-400">
                {activityData.reduce((sum, day) => sum + day.contributions, 0)}{" "}
                contributions in the last year
            </div>
        </div>
    );
};

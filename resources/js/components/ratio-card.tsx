import { cn } from "@/lib/utils";
import React from "react";

const gradientColors = {
    red: "from-red-400 to-red-600",
    yellow: "from-yellow-400 to-yellow-600",
    green: "from-green-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
    purple: "from-purple-400 to-purple-600",
    lightBlue: "from-blue-300 to-blue-500",
    darkBlue: "from-blue-700 to-blue-900",
};

const labelColors: Record<keyof typeof gradientColors, string> = {
    red: "text-red-500",
    yellow: "text-yellow-500",
    green: "text-green-500",
    orange: "text-orange-500",
    purple: "text-purple-500",
    lightBlue: "text-blue-500",
    darkBlue: "text-blue-800",
};

interface RatioCardProps {
    title: string;
    isPercentage?: boolean;
    items: {
        label: string;
        value: number;
        color: keyof typeof gradientColors;
    }[];
}

const RatioCard: React.FC<RatioCardProps> = ({
    title,
    isPercentage,
    items,
}) => {
    return (
        <div className="p-4 bg-white rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-600">
                {title}
            </h3>
            <div className="flex h-8 justify-between space-x-1">
                {items.map((item, index) => {
                    const percentage =
                        (item.value /
                            items.reduce((acc, curr) => acc + curr.value, 0)) *
                        100;

                    return (
                        <div
                            key={index}
                            className={cn(
                                "flex justify-center items-center rounded-md bg-gradient-to-b",
                                gradientColors[
                                    item.color as keyof typeof gradientColors
                                ]
                            )}
                            style={{
                                minWidth: `${percentage}%`,
                            }}
                        >
                            <span className="text-sm text-primary-foreground font-bold ">
                                {Math.floor(percentage)}%
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-between mt-2">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="block leading-5">
                            <div
                                className={`font-bold ${
                                    labelColors[item.color]
                                }`}
                            >
                                {item.label}
                            </div>
                            <div className="font-bold text-gray-700">
                                {item.value}
                                {isPercentage ? "%" : ""}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RatioCard;

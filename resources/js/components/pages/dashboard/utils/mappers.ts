import { gradientColors } from "@/components/ratio-card";
import { Co2Levels, Sector } from "@/types/services";

export const labelsMap: Record<Sector, string> = {
    [Sector.PowerPlant]: "Power Plant",
    [Sector.Agriculture]: "Agriculture",
    [Sector.Refinery]: "Refinery",
    [Sector.Transportation]: "Transportation",
};

export const sectorColors = {
    [Sector.PowerPlant]: "from-purple-400 to-purple-600",
    [Sector.Agriculture]: "from-green-400 to-green-600",
    [Sector.Refinery]: "from-yellow-400 to-yellow-600",
    [Sector.Transportation]: "from-blue-400 to-blue-600",
};

export const co2LevelsLabels: Record<keyof Co2Levels, string> = {
    poor: "Poor",
    normal: "Normal",
    good: "Good",
};

export const co2LevelsColors: Record<
    keyof Co2Levels,
    keyof typeof gradientColors
> = {
    poor: "red",
    normal: "yellow",
    good: "green",
};

export const emissionBySectorColors: Record<
    Sector,
    keyof typeof gradientColors
> = {
    [Sector.PowerPlant]: "purple",
    [Sector.Transportation]: "darkBlue",
    [Sector.Agriculture]: "green",
    [Sector.Refinery]: "lightBlue",
};

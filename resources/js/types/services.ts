export enum Sector {
    PowerPlant = "power_plant",
    Refinery = "refinery",
    Transportation = "transportation",
    Agriculture = "agriculture",
}

export interface Co2Levels {
    poor: number;
    normal: number;
    good: number;
}

export interface ChartData {
    labels: string[];
    data: number[];
}

export interface RatioChartData {
    sector: Sector;
    emissions: number;
}

export interface EmissionsData {
    daily: number;
    monthly: number;
    average: number;
    co2_levels: Co2Levels;
    emissions_over_time: ChartData;
    power_plant: ChartData;
    emissions_by_sector: RatioChartData[];
    emissions_by_sector_and_month: {
        sector: Sector;
        labels: string[];
        data: number[];
    }[];
}

export interface Sensor {
    id: number;
    name: string;
    status: string;
    type: string;
    emission_24h: number;
    yearly_usage: number;
    capacity: number;
}

export interface SensorType {
    type: string;
    quantity: number;
}

export interface SensorsData {
    sensor_types: SensorType[];
    sensors: Sensor[];
}

export interface AddSensorResponse {
    message: string;
    sensor: Sensor;
}

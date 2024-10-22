import { ChartData, ScriptableContext } from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";

import DualSidedStaffGauge from "./rule";

type LineChartProps = {
    data: { labels: string[]; data: number[] };
};

type CtxGetGradient = {
    createLinearGradient: (
        arg0: number,
        arg1: number,
        arg2: number,
        arg3: number
    ) => {
        addColorStop: (arg0: number, arg1: string) => void;
    };
};

type ChartAreaGradient = {
    right: number;
    left: number;
    bottom: number;
    top: number;
};

const getGradient = (ctx: CtxGetGradient, chartArea: ChartAreaGradient) => {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    const gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
    );
    gradient.addColorStop(0, "#3b82f6");
    gradient.addColorStop(0.5, "#eab308");
    gradient.addColorStop(1, "#ef4444");
    return gradient;
};

const handleTickCallback = function (
    this: { max: number; min: number },
    value: string | number,
    setMaxNumber: (num: number) => void,
    setStartNumber: (num: number) => void
) {
    setMaxNumber(this.max);
    setStartNumber(this.min);
    return `${value} %`;
};

const getPointRadius = (context: ScriptableContext<"line">) => {
    const pointsLength = (context.chart.data.labels as string[]).length - 1;
    return Array(pointsLength).fill(0).concat(5);
};

const LineChart = ({ data }: LineChartProps) => {
    const stepSize = 30;
    const [maxNumber, setMaxNumber] = useState(200);
    const [startNumber, setStartNumber] = useState(100);

    const chartData: ChartData<"line", number[], string> = {
        labels: data.labels,
        datasets: [
            {
                label: "Emissions Over Time",
                animation: { easing: "easeOutQuad" },
                data: data.data,
                fill: false,
                pointStyle: "circle",
                backgroundColor: (context) => {
                    const { ctx, chartArea } = context.chart;
                    return chartArea ? getGradient(ctx, chartArea) : undefined;
                },
                borderJoinStyle: "bevel",
                tension: 0.3,
                borderColor: (context) => {
                    const { ctx, chartArea } = context.chart;
                    return chartArea ? getGradient(ctx, chartArea) : undefined;
                },
                pointRadius: getPointRadius as any,
            },
        ],
    };

    return (
        <div className="relative bg-white rounded p-4">
            <Line
                data={chartData}
                options={{
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: (tooltipItem) => {
                                    const emissions = tooltipItem.dataset
                                        .data as number[];
                                    return `${tooltipItem.dataset.label} ${
                                        emissions[tooltipItem.dataIndex]
                                    } kg`;
                                },
                            },
                        },
                    },
                    scales: {
                        x: {
                            border: { display: false },
                            grid: { display: false },
                            ticks: { display: false },
                        },
                        y: {
                            border: { display: false },
                            grid: { display: false },
                            ticks: {
                                stepSize,
                                display: false,
                                callback: function (value) {
                                    return handleTickCallback.call(
                                        this,
                                        value,
                                        setMaxNumber,
                                        setStartNumber
                                    );
                                },
                            },
                        },
                    },
                }}
            />
            <DualSidedStaffGauge
                gap={stepSize}
                gapDistance={1}
                maxNumber={maxNumber}
                startNumber={startNumber}
            />
        </div>
    );
};

export default LineChart;

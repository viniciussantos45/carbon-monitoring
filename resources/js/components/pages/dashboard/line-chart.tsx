import { Line } from "react-chartjs-2";

type LineChartProps = {
    data: { labels: string[]; data: number[] };
};

const LineChart = ({ data }: LineChartProps) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: "Emissions Over Time",
                data: data.data,
                fill: false,
                backgroundColor: "#4F46E5",
                borderColor: "#6366F1",
            },
        ],
    };

    return (
        <div className="bg-white shadow rounded p-4">
            <Line data={chartData} />
        </div>
    );
};

export default LineChart;

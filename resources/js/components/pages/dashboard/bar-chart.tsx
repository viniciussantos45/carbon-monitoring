import { Bar } from "react-chartjs-2";

type BarChartProps = {
    data: { type: string; quantity: number }[];
};

const BarChart = ({ data }: BarChartProps) => {
    const chartData = {
        labels: data.map((item) => item.type),
        datasets: [
            {
                label: "Sensor Types",
                data: data.map((item) => item.quantity),
                backgroundColor: ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const, // or 'bottom', 'left', 'right'
            },
            title: {
                display: true,
                text: "Sensor Types Proportion",
            },
        },
    };

    return (
        <div className="bg-white shadow rounded p-4">
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;

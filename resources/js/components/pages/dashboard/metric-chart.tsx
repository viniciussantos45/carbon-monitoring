import { FaCalendarDay, FaChartLine, FaLeaf } from "react-icons/fa";

type MetricCardsProps = {
    data: { daily: number; monthly: number; average: number };
};

const MetricCards = ({ data }: MetricCardsProps) => {
    const metrics = [
        {
            title: "Daily Emissions",
            value: data.daily,
            icon: <FaCalendarDay />,
        },
        { title: "Monthly Emissions", value: data.monthly, icon: <FaLeaf /> },
        {
            title: "Average Emissions",
            value: data.average,
            icon: <FaChartLine />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
                <div
                    key={index}
                    className="bg-gradient-to-r from-white to-green-100  rounded-lg p-6 transform transition-transform hover:scale-105 border-green-100 border-2"
                >
                    <div className="flex items-center mb-2">
                        <div className="text-green-600 text-2xl mr-2">
                            {metric.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-700">
                            {metric.title}
                        </h3>
                    </div>
                    <p className="text-3xl font-semibold text-green-600">
                        {metric.value} tons
                    </p>
                </div>
            ))}
        </div>
    );
};

export default MetricCards;

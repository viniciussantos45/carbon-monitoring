type MetricCardsProps = {
    data: { daily: number; monthly: number; average: number };
};

const MetricCards = ({ data }: MetricCardsProps) => {
    const metrics = [
        { title: "Daily Emissions", value: data.daily },
        { title: "Monthly Emissions", value: data.monthly },
        { title: "Average Emissions", value: data.average },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
                <div key={index} className="bg-white shadow rounded p-4">
                    <h3 className="text-lg font-semibold">{metric.title}</h3>
                    <p className="text-2xl">{metric.value} tons</p>
                </div>
            ))}
        </div>
    );
};

export default MetricCards;

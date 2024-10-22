import LineChart from "@/components/pages/dashboard/line-chart";
import MetricCards from "@/components/pages/dashboard/metric-chart";
import SensorTable from "@/components/pages/dashboard/sensor-table";
import RatioCard from "@/components/ratio-card";
import { EmissionsData, SensorsData } from "@/types/services";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [emissionsData, setEmissionsData] = useState<EmissionsData | null>(
        null
    );
    const [sensorsData, setSensorsData] = useState<SensorsData | null>(null);

    useEffect(() => {
        axios.get<EmissionsData>("/api/emissions").then((response) => {
            setEmissionsData(response.data);
        });

        axios.get<SensorsData>("/api/sensors").then((response) => {
            setSensorsData(response.data);
        });
    }, []);

    if (!emissionsData || !sensorsData) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    }

    return (
        <div className="p-4">
            <MetricCards data={emissionsData} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <LineChart data={emissionsData.emissions_over_time} />
                <div>
                    <RatioCard
                        title="CO2 Ratio"
                        isPercentage
                        items={[
                            {
                                label: "Poor",
                                value: 45,
                                color: "red",
                            },
                            {
                                label: "Normal",
                                value: 30,
                                color: "orange",
                            },
                            {
                                label: "Good",
                                value: 25,
                                color: "green",
                            },
                        ]}
                    />
                    <RatioCard
                        title="Ratio of sensor types"
                        items={[
                            {
                                label: "Power Plant",
                                value: 540,
                                color: "purple",
                            },
                            {
                                label: "Steel Plant",
                                value: 276,
                                color: "darkBlue",
                            },
                            {
                                label: "Airport",
                                value: 252,
                                color: "lightBlue",
                            },
                        ]}
                    />
                </div>
            </div>
            <SensorTable sensors={sensorsData.sensors} />
            {/* <AddNewObjectModal setSensorsData={setSensorsData} /> */}
        </div>
    );
};

export default Dashboard;

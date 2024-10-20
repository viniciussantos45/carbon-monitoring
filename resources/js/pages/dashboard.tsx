import BarChart from "@/components/pages/dashboard/bar-chart";
import LineChart from "@/components/pages/dashboard/line-chart";
import MetricCards from "@/components/pages/dashboard/metric-chart";
import SensorTable from "@/components/pages/dashboard/sensor-table";
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
                <BarChart data={sensorsData.sensor_types} />
            </div>
            <SensorTable
                sensors={sensorsData.sensors}
                // setSensorsData={setSensorsData}
            />
            {/* <AddNewObjectModal setSensorsData={setSensorsData} /> */}
        </div>
    );
};

export default Dashboard;

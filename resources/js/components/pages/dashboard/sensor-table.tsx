type Sensor = {
    name: string;
    status: string;
    type: string;
    emission_24h: number;
    yearly_usage: number;
    capacity: number;
};

type SensorTableProps = {
    sensors: Sensor[];
};

const SensorTable = ({ sensors }: SensorTableProps) => {
    return (
        <div className="bg-white shadow rounded p-4 my-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Type</th>
                        <th className="px-4 py-2">Emissions (24h)</th>
                        <th className="px-4 py-2">Yearly Usage</th>
                        <th className="px-4 py-2">Capacity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {sensors.map((sensor, index) => (
                        <tr key={index} className="text-center">
                            <td className="px-4 py-2">{sensor.name}</td>
                            <td className="px-4 py-2">{sensor.status}</td>
                            <td className="px-4 py-2">{sensor.type}</td>
                            <td className="px-4 py-2">{sensor.emission_24h}</td>
                            <td className="px-4 py-2">{sensor.yearly_usage}</td>
                            <td className="px-4 py-2">{sensor.capacity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SensorTable;

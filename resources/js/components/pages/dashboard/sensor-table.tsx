import { columns } from "./data-table/columns";
import { DataTable } from "./data-table/table";

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
    return <DataTable data={sensors} columns={columns as any} />;
};

export default SensorTable;

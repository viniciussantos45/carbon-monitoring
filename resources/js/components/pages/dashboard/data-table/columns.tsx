import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Sensor } from "@/types/services";
import { CheckIcon, Cross2Icon, MinusCircledIcon } from "@radix-ui/react-icons";
import { DataTableColumnHeader } from "./column-header";

const colorMap: Record<string, string> = {
    red: "border-red-300 text-red-500 bg-red-50",
    green: "border-green-300 text-green-500 bg-green-50",
    orange: "border-orange-300 text-orange-500 bg-orange-50",
};

const statuses = [
    { value: "online", label: "Online", color: "green", icon: CheckIcon },
    {
        value: "offline",
        label: "Offline",
        color: "red",
        icon: Cross2Icon,
    },
    {
        value: "maintenance",
        label: "Maintenance",
        color: "orange",
        icon: MinusCircledIcon,
    },
];

export const columns: ColumnDef<Sensor>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ID" />
        ),
        enableSorting: false,
        enableHiding: false,
        cell: ({ row }) => (
            <span className="text-gray-500">{row.getValue("id")}</span>
        ),
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => (
            <div className="font-normal">{row.getValue("name")}</div>
        ),

        enableSorting: false,
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            const statusValue = row.getValue("status") as string;
            const status = statuses.find((s) => s.value === statusValue);

            if (!status) return null;

            return (
                <div className="flex items-center" key={row.id}>
                    <Badge
                        variant="outline"
                        className={`font-normal ${colorMap[status.color]}`}
                    >
                        {status.label}
                    </Badge>
                </div>
            );
        },

        enableSorting: false,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "type",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Type" />
        ),
        cell: ({ row }) => <span>{row.getValue("type")}</span>,
        enableSorting: false,
    },
    {
        accessorKey: "emission_24h",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Emissions (24h)" />
        ),
        cell: ({ row }) => <span>{row.getValue("emission_24h")}kg</span>,
        enableSorting: false,
    },
    {
        accessorKey: "yearly_usage",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Yearly Usage" />
        ),
        cell: ({ row }) => <span>{row.getValue("yearly_usage")}mt</span>,
        enableSorting: false,
    },
    {
        accessorKey: "capacity",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Capacity (%)" />
        ),
        cell: ({ row }) => <span>{row.getValue("capacity")}%</span>,
        enableSorting: false,
    },
];

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Sensor } from "@/types/services";
import { CheckIcon, Cross2Icon, MinusCircledIcon } from "@radix-ui/react-icons";
import { DataTableColumnHeader } from "./column-header";
import { DataTableRowActions } from "./row-actions";

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
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected()
                        ? true
                        : table.getIsSomePageRowsSelected()
                        ? "indeterminate"
                        : false
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <div className="flex align-middle">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => (
            <div className="font-normal">{row.getValue("name")}</div>
        ),
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
                <div className="flex items-center">
                    <Badge
                        variant="outline"
                        className={`font-normal border-${status.color}-300 text-${status.color}-500`}
                    >
                        {status.label}
                    </Badge>
                </div>
            );
        },
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
    },
    {
        accessorKey: "emission_24h",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Emissions (24h)" />
        ),
        cell: ({ row }) => <span>{row.getValue("emission_24h")}</span>,
    },
    {
        accessorKey: "yearly_usage",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Yearly Usage" />
        ),
        cell: ({ row }) => <span>{row.getValue("yearly_usage")}</span>,
    },
    {
        accessorKey: "capacity",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Capacity (%)" />
        ),
        cell: ({ row }) => <span>{row.getValue("capacity")}%</span>,
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
];

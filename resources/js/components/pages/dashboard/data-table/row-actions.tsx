import { Button } from "@/components/ui/button";
import { Row } from "@tanstack/react-table";

interface DataTableRowActionsProps<TData> {
    row: Row<TData>;
}

export function DataTableRowActions<TData>({
    row,
}: DataTableRowActionsProps<TData>) {
    return (
        <div className="flex space-x-2">
            <Button variant="ghost" size="sm">
                Edit
            </Button>
            <Button variant="ghost" size="sm">
                Delete
            </Button>
        </div>
    );
}

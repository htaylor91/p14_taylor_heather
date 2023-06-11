import type { ColumnDef } from "@tanstack/react-table"
import type { Employee } from '@/data/employee'
import ColumnHeader from "./ColumnHeader"

export const tableColumns: ColumnDef<Employee, any>[] = [
    {
        accessorKey: "firstName",
        header: ({ column }) => (
            <ColumnHeader column={column} title="First Name" />
        ),
        sortingFn: "text",
    },
    {
        accessorKey: "lastName",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Last Name" />
        ),
        sortingFn: "text"
    },
    {
        accessorKey: "startDate",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Start Date" />
        ),
        cell: info => info.getValue().toLocaleDateString("en-US"),
        sortingFn: "datetime",
    },
    {
        accessorKey: "department",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Department" />
        ),
        sortingFn: "basic"
    },
    {
        accessorKey: "dateOfBirth",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Date of Birth" />
        ),
        cell: info => info.getValue().toLocaleDateString("en-US"),
        sortingFn: "datetime",
    },
    {
        accessorKey: "street",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Street" />
        ),
        sortingFn: "alphanumeric"
    },
    {
        accessorKey: "city",
        header: ({ column }) => (
            <ColumnHeader column={column} title="City" />
        ),
        sortingFn: "text",
    },
    {
        accessorKey: "state",
        header: ({ column }) => (
            <ColumnHeader column={column} title="State" />
        ),
        sortingFn: "text"
    },
    {
        accessorKey: "zipCode",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Zip Code" />
        )
    },
]
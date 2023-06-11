"use client"

import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useCallback, useState } from "react"
import type { Employee } from "@/data/employee"
import TablePagination from "./Pagination"
import SelectEntries from './SelectEntries';
import Search from "./Search"
import TotalEntries from "./TotalEntries"

export default function DataTable({
  data,
  columns,
}: { data: Employee[]; columns: ColumnDef<Employee, any>[] }) {
  const [sorting, setSorting] = useState<SortingState>([{ id: "firstName", desc: false }])
  const [globalFilter, setGlobalFilter] = useState('')
  const [highlightedColumn, setHighlightedColumn] = useState<string | null>(null)
  const [highlightedRow, setHighlightedRow] = useState<string | null>(null);

  const handleRowClick = useCallback((rowId: string) => {
    setHighlightedRow((prevHighlightedRow) => (prevHighlightedRow === rowId ? null : rowId));
  }, []);

  const handleColumnHeaderClick = useCallback((columnId: string) => {
    setHighlightedColumn(columnId);
  }, []);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-between py-4">
        <SelectEntries table={table} />
        <Search globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      </div>

      <Table>
        <TableCaption id="table-caption">Current Employees</TableCaption>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHeader
                    key={header.id}
                    className={
                      header.column.id === highlightedColumn
                        ? "bg-brand-medium/20 w-full"
                        : "bg-brand-medium/0 w-full"
                    }
                    scope="col"
                    onClick={() => handleColumnHeaderClick(header.id)}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHeader>
                )
              })}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className={highlightedRow === row.id
                  ? 'bg-brand-medium/20'
                  : 'bg-brand-medium/0'
                }
                onClick={() => handleRowClick(row.id)}
              >
                {row.getVisibleCells().map((cell) => (

                  <TableCell
                    key={cell.id}
                    className={
                      cell.column.id === highlightedColumn
                        ? "bg-brand-medium/20"
                        : "bg-brand-medium/0"
                    }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between pt-2 flex-wrap">
        <TotalEntries table={table} totalEntries={data.length} />
        <TablePagination table={table} />
      </div>
    </>
  )
}

import type { Employee } from "@/data/employee"
import type { Table } from "@tanstack/react-table"

function TotalEntries({ table, totalEntries }:
  { table: Table<Employee>, totalEntries: number }) {

  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const endIndex = Math.min((pageIndex + 1) * pageSize, totalEntries)
  const startIndex = totalEntries === 0 ? 0 : pageIndex * pageSize + 1

  return (
    <div>
      Showing {startIndex} to {endIndex} of {totalEntries} entries
    </div>
  )
}

export default TotalEntries
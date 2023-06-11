import type { Employee } from "@/data/employee"
import type { Table } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"

function Pagination({ table }: { table: Table<Employee> }) {
  return (
    <div className="flex gap-2">

      {/** First page, render if there are 3+ pages*/
        table.getPageCount() > 2 &&
        <Button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'First'}
        </Button>
      }
      {/** Previous page button */}
      <Button
        type="button"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        className="border rounded p-1"
      >
        {'Previous'}
      </Button>

      {/** Next Page */}
      <Button
        type="button"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        className="border rounded p-1"
      >
        {'Next'}
      </Button>

      {/** Last page, render if there are 3+ pages */
        table.getPageCount() > 2 &&
        <Button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'Last'}
        </Button>
      }
    </div>
  )
}

export default Pagination
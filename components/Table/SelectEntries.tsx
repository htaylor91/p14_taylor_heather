import type { Table } from "@tanstack/react-table"
import type { Employee } from "@/data/employee"
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent, SelectGroup } from "@/components/ui/select"

function SelectEntries({ table }: { table: Table<Employee> }) {

  const pageSize = table.getState().pagination.pageSize;

  const handlePageSizeChange = (e: { target: { value: string } }) => {
    const newPageSize = Number(e.target.value);
    table.setPageSize(newPageSize);
  };
  return (

    <label className='flex gap-1 items-center mr-4'>
      <span>Show</span>
      <Select
        value={pageSize.toString()}
        onValueChange={(value) => handlePageSizeChange({ target: { value } })}>
        <SelectTrigger className="w-[80px]" aria-label="choose number of entries">
          <SelectValue placeholder={pageSize} />
        </SelectTrigger>
        <SelectContent className="w-[80px]">
          <SelectGroup className="w-[80px]">
            {[5, 10, 25, 50, 100].map(pageSize => (
              <SelectItem key={pageSize} value={pageSize.toString()}>{pageSize}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <span>entries</span>
    </label>
  )
}

export default SelectEntries
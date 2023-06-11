import { Input } from "@/components/ui/input"

function Search(
  { globalFilter, setGlobalFilter }:
    { globalFilter: string, setGlobalFilter: (value: string) => void }) {
  return (
    <>
      <label htmlFor="search" className="sr-only">Search employees</label>
      <Input
        placeholder="Filter employees"
        value={globalFilter ?? ''}
        onChange={e => setGlobalFilter(e.target.value)}
        id="search"
        className="min-w-[9rem]"
      />
    </>
  )
}

export default Search
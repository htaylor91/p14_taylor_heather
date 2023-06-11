import Button from "@/components/Button/Button"
import type { Employee } from "@/data/employee";
import type { Column } from "@tanstack/react-table";
import { ChevronDown, ChevronUp } from "lucide-react"

function ColumnHeader({ column, title }: { column: Column<Employee, any>; title: string }) {
    return (
        <div className="w-full flex flex-col pt-2 pr-2 pb-2 items-left">
            <span className="pl-2">{title}</span>
            <div className="flex gap-2">
                <Button
                    type="button"
                    className={"text-white rounded grid place-items-center font-bold h-12 w-12"}
                    ariaAttributes={{ "aria-label": `Sort ${title} ascending` }}
                    onClick={() => column.toggleSorting(false)}
                >
                    <ChevronUp
                        className={
                            column.getIsSorted() === "asc"
                                ? "h-8 w-8 bg-brand-medium/100 rounded"
                                : "h-8 w-8 bg-brand-medium/30 rounded"
                        }
                    />
                </Button>

                <Button
                    type="button"
                    className={"text-white rounded grid place-items-center font-bold h-12 w-12"}
                    ariaAttributes={{ "aria-label": `Sort ${title} descending` }}
                    onClick={() => column.toggleSorting(true)}
                >
                    <ChevronDown
                        className={
                            column.getIsSorted() === "desc"
                                ? "h-8 w-8 bg-brand-medium/100 rounded"
                                : "h-8 w-8 bg-brand-medium/30 rounded"
                        }
                    />
                </Button>
            </div>
        </div>
    )
}

export default ColumnHeader
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const Table = forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <>
    <section
      aria-controls="employee-table"
      aria-describedby="scrollable-table-description"
      className={cn(
        "bg-inherit block mx-auto whitespace-nowrap w-full h-[55vh] overflow-x-auto overflow-y-auto outline outline-3 rounded-md",
        className
      )}
    >
      <table
        id="employee-table"
        aria-describedby="scrollable-table-description"
        ref={ref}
        className={cn(
          "table-auto w-full border-collapse",
          className
        )}
        {...props}
      />
    </section>
    <p
      id="scrollable-table-description"
      className="sr-only">Use right and left arrow keys to
      scroll horizontally if there is overflowing table content.</p>
  </>
))
Table.displayName = "Table"

const TableHead = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b-brand-light/100  sticky top-0 bg-white text-black dark:bg-black dark:text-white z-10",
    className
  )}
    {...props} />
))
TableHead.displayName = "TableHead"

const TableBody = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0",
      className
    )}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableRow = forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b cursor-pointer transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHeader = forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "font-medium text-muted-foreground text-left cursor-pointer",
      className
    )}
    {...props}
  />
))
TableHeader.displayName = "TableHeader"

const TableCell = forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("py-4 pl-2 pr-4 text-left", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("sr-only", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

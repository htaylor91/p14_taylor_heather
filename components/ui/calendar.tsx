"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { addMonths, isSameMonth } from 'date-fns';
import { buttonVariants } from '@/components/ui/button';
export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,

  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const today = new Date();
  const nextMonth = addMonths(new Date(), 0);
  const [month, setMonth] = useState<Date>(nextMonth);

  const footer = (
    <button
      type="button"
      className={'flex justify-center w-full cursor-pointer'}
      disabled={isSameMonth(today, month)}
      onClick={() => setMonth(today)}
      aria-label="Go back to current month"
    >
      <Home className="h-4 w-4" />
    </button>
  );

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      month={month}
      captionLayout="dropdown-buttons"
      onMonthChange={setMonth}
      footer={footer}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "hidden",
        caption_dropdowns: "flex justify-between gap-1",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected:
          "bg-brand-light/100 text-black/100 hover:bg-primary hover:text-content focus:bg-primary focus:text-content",
        day_today: "border-2 border-brand-medium/100",
        day_outside: "opacity-50",
        day_disabled: " opacity-50",
        day_hidden: "invisible",
        vhidden: "sr-only",
        dropdown_icon: "hidden",
        dropdown: "border rounded h-full"

      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar }

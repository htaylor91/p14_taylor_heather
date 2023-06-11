import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Control } from "react-hook-form"


function SelectDropdown({ label, name, position, options, control }: {
  label: string,
  name: string,
  position: "popper" | "item-aligned",
  options: string[],
  control: Control<any>
}) {

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={'w-full'}>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className={'w-full'} aria-label="select">
                <SelectValue placeholder={label} />
              </SelectTrigger>
            </FormControl>

            <SelectContent position={position}>
              {options?.map((option: string) => (
                <SelectItem
                  key={option}

                  value={option}>{option}</SelectItem>
              ))
              }
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default SelectDropdown

/**
 *                   className={
                    index === options.length - 1
                      ? "rounded-b-md" : index === 0 ? "rounded-t-md" : ""
                  }
 */
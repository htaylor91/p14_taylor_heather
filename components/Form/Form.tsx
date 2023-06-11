"use client"
import dynamic from 'next/dynamic'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
const SelectDropdown = dynamic(() => import('./inputFields/SelectDropdown'))
const DatePicker = dynamic(() => import('./inputFields/DatePicker'))
const TextInput = dynamic(() => import('./inputFields/TextInput'))
const Button = dynamic(() => import('@/components/ui/button').then((mod) => mod.Button),);
import { FormProvider } from '@/components/ui/form'
import { states, stateNames } from '@/data/states'
import { departments } from '@/data/departments'
import { addEmployee } from '@/lib/useEmployeeStore'
import { EmployeeFormValidationSchema } from './schema'
import type { FormSchema } from './schema'

export default function EmployeeForm({ setShowModal }: { setShowModal: (show: boolean) => void }) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(EmployeeFormValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
      startDate: new Date(),
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    },
  })

  function onSubmit(data: FormSchema) {
    const { state } = data
    const fullState = states.find(s => s.name === state);
    if (!fullState) return
    const abbreviatedState = fullState.abbreviation;
    const formattedEmployee = { ...data, state: abbreviatedState }
    addEmployee(formattedEmployee)
    setShowModal(true)
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"w-full flex flex-col"}>
        <div className={'w-full flex flex-col md:flex-row'}>
          <TextInput control={form.control} label={"First Name"} name={"firstName"} />
          <TextInput control={form.control} label={"Last Name"} name={"lastName"} />
        </div>
        <div className={'w-full flex flex-col md:flex-row'}>
          <DatePicker control={form.control} label={"Date of birth"} name={"dateOfBirth"} />
          <DatePicker control={form.control} label={"Start Date"} name={"startDate"} />
        </div>
        <div className={'w-full flex flex-col md:flex-row'}>
          <TextInput control={form.control} label={"Street"} name={"street"} />
          <TextInput control={form.control} label={"City"} name={"city"} />
        </div>
        <div className={'w-full flex flex-col md:flex-row'}>
          <SelectDropdown control={form.control} label={"State"} name={"state"}
            options={stateNames} position="item-aligned" />
          <TextInput control={form.control} label={"Zip Code"} name={"zipCode"} />
          <SelectDropdown control={form.control} label={"Department"} name={"department"}
            options={departments} position="popper" />
        </div>
        <div className={'w-full flex flex-col'}>
          <Button type="submit" className={'w-1/4 mt-4 font-bold text-lg self-center border-2 rounded-md border-brand-light/100 hover:bg-brand-light hover:text-black'}>Submit</Button>
        </div>
      </form>
    </FormProvider>
  )
}
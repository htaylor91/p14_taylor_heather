import { create } from 'zustand'
import type { Employee } from '@/data/employee'
import mockEmployees from '@/data/mockEmployees';

interface EmployeeStoreState {
  employees: Employee[]
}

/**
 * @hint
 * Replace the store with the version below to log the store's state changes to the console.
 * 
 * import { logger } from '@/lib/logger'
 * 
 * export const useEmployeeStore = create<EmployeeStoreState>()(
 * logger((set, get) => ({
 * employees: [...mockEmployees,],
 * }),
 * 'employeeStore')
 * )
 */

export const useEmployeeStore = create<EmployeeStoreState>()(
  (set, get) => ({
    employees: [...mockEmployees,],
  }),
)

export const addEmployee = (employee: Employee) =>
  useEmployeeStore.setState((state) => ({ employees: [...state.employees, { ...employee, },] }))

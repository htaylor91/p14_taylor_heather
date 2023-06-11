export type Employee = {
    id?: string
    firstName: string
    lastName: string
    /**
     * @format YYYY-MM-DD
     */
    startDate: string | Date
    /**
     * "Sales" | "Marketing" | "Engineering" | "Human Resources" | "Legal"
     */
    department: string
    /**
     * String 
     * @format YYYY-MM-DD
     */
    dateOfBirth: string | Date
    street: string
    city: string
    state: string
    zipCode: string
}

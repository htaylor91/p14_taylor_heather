import * as z from "zod"

export const EmployeeFormValidationSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters",
  }),
  dateOfBirth:
    z.date({
      required_error: "Please select a date",
      invalid_type_error: "That's not a date!",
    }),
  startDate:
    z.date({
      required_error: "Please select a date",
      invalid_type_error: "That's not a date!",
    }),
  street: z.string().min(2, {
    message: "Street must be at least 2 characters",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters",
  }),
  state:
    z.string(
    ).nonempty({
      message: "State is required"
    }),
  zipCode:
    z.string(
      {
        required_error: "Zip code is required",
      }
    ).regex(/^[0-9]{5}$/, {
      message: "Zip code must be 5 digits",
    }),
  department:
    z.string(
    ).nonempty({
      message: "Department is required"
    }),
}).refine((data) => data.dateOfBirth < data.startDate, {
  message: "Start date must be after date of birth",
  path: ["startDate"], // path of error
});

export type FormSchema = z.infer<typeof EmployeeFormValidationSchema>

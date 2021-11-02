import { object, string, ref } from 'yup'

export const createEmployeeSchema = object({
  body: object({
    name: string().required('Name is required'),
    firstName: string().required('FirstName is required'),
    department: string().required('Department is required'),
  }),
})

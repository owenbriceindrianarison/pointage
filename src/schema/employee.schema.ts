import { isDate } from 'lodash'
import { object, string, ref, date } from 'yup'

export const createEmployeeSchema = object({
  body: object({
    name: string().required('Name is required'),
    firstName: string().required('FirstName is required'),
    department: string().required('Department is required'),
  }),
})

export const getEmployeesSchema = object({
  query: object({
    date: date().optional(),
  }),
})

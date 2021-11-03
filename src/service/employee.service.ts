import { DocumentDefinition } from 'mongoose'
import Employee, { EmployeeDocument } from '../model/employee.model'

export async function createEmployee(
  input: DocumentDefinition<EmployeeDocument>
) {
  try {
    return Employee.create(input)
  } catch (err: any) {
    throw new Error(err)
  }
}

export async function getEmployees(date?: Date) {
  try {
    if (date) {
      const tomorrow = new Date(date)
      tomorrow.setDate(date.getDate() + 1)
      return Employee.find({
        createdAt: {
          $gt: date,
          $lt: tomorrow,
        },
      })
    } else return Employee.find()
  } catch (err: any) {
    throw new Error(err)
  }
}

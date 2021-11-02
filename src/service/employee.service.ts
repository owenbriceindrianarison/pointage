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

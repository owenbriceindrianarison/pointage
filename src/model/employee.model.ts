import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config'

export interface EmployeeDocument extends mongoose.Document {
  name: string
  firstName: string
  department: string
  createdAt: Date
  updatedAt: Date
}

const EmployeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    firstName: { type: String, required: true },
    department: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Employee = mongoose.model<EmployeeDocument>('Employee', EmployeeSchema)

export default Employee

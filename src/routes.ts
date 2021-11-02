import { Express, Request, Response } from 'express'
import { createEmployeeHandler } from './controller/employee.controller'
import { createEmployee } from './service/employee.service'
import validateRequest from './middleware/validateRequest'
import { createEmployeeSchema } from './schema/employee.schema'

export default function (app: Express) {
  // Create an employee
  app.post(
    '/api/employees',
    validateRequest(createEmployeeSchema),
    createEmployeeHandler
  )
}

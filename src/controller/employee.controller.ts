import { Request, Response } from 'express'
import { createEmployee, getEmployees } from '../service/employee.service'
import log from '../logger'

export async function createEmployeeHandler(req: Request, res: Response) {
  try {
    const employee = await createEmployee(req.body)
    return res.send(employee)
  } catch (err: any) {
    log.error(err)
    res.status(409).send(err.message)
  }
}

export async function getEmployeesHandler(req: Request, res: Response) {
  const { date } = req.query

  try {
    if (date) {
      const [y, m, d] = date.toString().split('-')
      const createdAt = new Date(`${y}-${m}-${d}`)
      const employees = await getEmployees(createdAt)
      return res.send(employees)
    } else {
      const employees = await getEmployees()
      return res.send(employees)
    }
  } catch (err: any) {
    log.error(err)
    res.status(409).send(err.message)
  }
}

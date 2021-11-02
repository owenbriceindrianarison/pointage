import { Request, Response } from 'express'
import { createEmployee } from '../service/employee.service'
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

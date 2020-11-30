import { Request, Response } from 'express'

export const handle404 = (req: Request, res: Response): Response => {
  return res.status(404).send('Could not find route')
}

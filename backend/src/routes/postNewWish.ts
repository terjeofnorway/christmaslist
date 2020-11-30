import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

import { ChristmasList } from '../types/christmasList'

export const postNewWish = (req: Request, res: Response): Response<ChristmasList> => {
  const { token } = req.params
  const { body } = req

  console.log(body)

  return res.json(body)
}

import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

import { ChristmasList } from '../types/christmasList'

export const getMyChristmasList = (req: Request, res: Response): Response<ChristmasList> => {
  const { token } = req.params

  const dummyList = [{ id: uuid(), title: 'Thick wollen socks', created: 1606767571 }]
  return res.json(dummyList)
}

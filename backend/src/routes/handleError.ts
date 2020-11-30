import { NextFunction, Request, Response } from 'express'

interface HttpException extends Error {
  status: number
  message: string
}

export const handleError = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log(err.status)
  next()
}

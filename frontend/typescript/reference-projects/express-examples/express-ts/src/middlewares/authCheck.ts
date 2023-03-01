import { NextFunction, Request, Response } from 'express'

export const requireAuth = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  if (!request?.session?.user) {
    response.status(403).send(`
        <div>
            <h1>Not Permitted...</h1>
        </div>
    `)
    return
  } else {
    next()
  }
}

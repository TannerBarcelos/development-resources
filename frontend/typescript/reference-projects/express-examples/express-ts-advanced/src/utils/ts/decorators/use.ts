import 'reflect-metadata'
import { RequestHandler } from 'express'
import { URI_METADATA } from '../types'

export const use = (middleware: RequestHandler) => {
  /**
   * target = the protoype of the object the decorator is attached to
   * key = the actual function, variable, etc. definition
   * desc =
   */
  return (target: any, key: string, desc: PropertyDescriptor) => {
    const middlewares =
      Reflect.getMetadata(URI_METADATA.MIDDLEWARE, target, key) || []

    middlewares.push(middleware)
    Reflect.defineMetadata(
      URI_METADATA.MIDDLEWARE,
      [...middlewares, middleware],
      target,
      key,
    )
  }
}

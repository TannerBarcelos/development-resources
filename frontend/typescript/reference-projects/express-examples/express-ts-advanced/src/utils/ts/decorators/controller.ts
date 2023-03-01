import 'reflect-metadata'
import { Router } from '../../Router'
import { HTTP_METHOD, URI_METADATA } from '../types'
import { RequestHandler, Request, Response, NextFunction } from 'express'

// Used to validate 1 or many request body values that any endpoint might need - negates need to check for undefined body values in our api logic
const bodyValidator = (keys: string[]): RequestHandler => {
  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.body)
      return response.status(422).json({ message: 'Invalid request' })

    // Loop every key (property or request body to parse)
    for (let key of keys) {
      if (!request.body[key]) {
        return response.status(422).json({ message: `Missing property ${key}` })
      }
    }
    next()
  }
}

// controller decorator - defines a controller in our api
export const controller = (routePrefix: string) => {
  // decorator - target is a class / constructor function (our controllers in our apis)
  return (target: Function) => {
    // Create express router instance - using only one router for the whole app as a singleton
    const controllerRouter = Router.getExpressRouterInstance()
    // Get all the keys (methods, properties, accessors ) in the controller - remember
    // target references the PROTOTYPE OBJECT OF THE OBJECT IT IS TAGGED TO
    for (let key in target.prototype) {
      const apiHandler = target.prototype[key] // method name for the api endpoint
      const path = Reflect.getMetadata(URI_METADATA.PATH, target.prototype, key) // the method endpoint path i.e - /login
      const method = Reflect.getMetadata(
        URI_METADATA.METHOD,
        target.prototype,
        key,
      ) as HTTP_METHOD // the actual http method of the endpoint - passed in to second arg of @route(pathName, methodType)
      // Register the route to the express router using the method, endpoint path and the route apiHandler
      // this generates a full router, bundles up all endpoints and uris and everything else to be used as a single
      // snippet of middleware in our server.ts file (index.ts in this case)
      const middlewares =
        Reflect.getMetadata(URI_METADATA.MIDDLEWARE, target.prototype, key) ||
        []

      const validator = bodyValidator(
        Reflect.getMetadata(URI_METADATA.VALIDATOR, target.prototype, key) ||
          [],
      )

      if (path) {
        controllerRouter[method](
          `${routePrefix}${path}`,
          ...middlewares, // attach any middlewares to the route middleware might be needed on - i.e an auth check middleware for a protected route
          validator,
          apiHandler,
        )
      }
    }
  }
}

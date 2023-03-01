import express from 'express'

// Singleton - one router only for whole app
export class Router {
  private static expressRouterInstance: express.Router

  public static getExpressRouterInstance(): express.Router {
    if (!Router.expressRouterInstance)
      Router.expressRouterInstance = express.Router()
    return this.expressRouterInstance
  }
}

import 'reflect-metadata'
import { HTTP_METHOD, URI_METADATA, RouteDescriptor } from '../types'

/**
 * Get http method decorator
 * @param path
 * @returns
 */
export const route = (path: string, httpMethod: HTTP_METHOD) => {
  return (target: any, key: string, desc: RouteDescriptor) => {
    Reflect.defineMetadata(URI_METADATA.PATH, path, target, key)
    Reflect.defineMetadata(URI_METADATA.METHOD, httpMethod, target, key)
  }
}

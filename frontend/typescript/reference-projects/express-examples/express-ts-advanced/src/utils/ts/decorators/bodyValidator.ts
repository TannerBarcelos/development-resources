import 'reflect-metadata'
import { URI_METADATA } from '../types'

export const bodyValidator = (...keys: string[]) => {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    Reflect.defineMetadata(URI_METADATA.VALIDATOR, keys, target, key)
  }
}

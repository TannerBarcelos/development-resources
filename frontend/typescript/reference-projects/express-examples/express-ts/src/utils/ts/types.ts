/**
 * Express session library does not support TS assignment directly to the session
 * object. We are doing req.session.user = {...} however this fails as it says
 * 'user' is not of type SessionData.
 *
 * To resolve this, the official docs say to add this snippet of code to override the
 * SessionData interface and define what data will be in the session.
 *
 * Step two is to add typeRoots configuration to tsconfig -
 *     "typeRoots": ["./src/ts/types", "./node_modules/@types"]
 *  ./src/<type_file_dest>
 */
// ./src/typings/express-session/index.d.ts
import 'express-session'

declare module 'express-session' {
  interface SessionData {
    user: {
      email?: string
      password?: string
    }
  }
}

export interface AuthBodyPayload {
  email?: string
  password?: string
}

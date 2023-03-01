import { Request, Response } from 'express'
import { AuthBodyPayload } from '../utils/ts/types'

export const isLoggedIn = (request: Request, response: Response) => {
  if (request?.session?.user) {
    response.send(`
        <div>
            <h3>You are logged in</h3>
            <a href="/auth/logout">Logout</a>
        </div>
    `)
  } else {
    response.send(`
        <div>
            <h3>Not authorized</h3>
            <a href="/auth/login">Login</a>
        </div>
    `)
  }
}

export const createLogin = (request: Request, response: Response) => {
  response.send(`
    <form method="POST">
        <h1>Welcome to the TS + Express sample tutorial App!</h1>
        <div>
            <label>Email</label>
            <input name="email" />
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password"/>
        </div>
        <button>Login</button>
    </form>
  `)
}

export const login = (request: Request, response: Response) => {
  const { email, password } = request.body as AuthBodyPayload

  if (
    email &&
    password &&
    email === 'test@test.com' &&
    password === 'password'
  ) {
    request.session.user = { email, password }
    response.json({ email, password, message: 'Logged in' })
  } else {
    response.json({ message: 'Credentials are not valid or do not exist' })
  }
}

export const logout = (request: Request, response: Response) => {
  request.session.destroy((err) => {
    console.log('Session destroyed')
    response.redirect('/auth/login')
    if (err) {
      console.error(err)
    }
  })
}

export const getUserCredentials = (
  request: Request,
  response: Response,
): void => {
  const { user } = request.session
  response.send(`
        <div>
            <h1>Hello there!</h1>
            <p>email: ${user?.email}<p>
        </div>
    `)
}

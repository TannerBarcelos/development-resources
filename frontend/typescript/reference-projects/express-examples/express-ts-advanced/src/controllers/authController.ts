import { AuthBodyPayload } from '../utils/ts/types'
import { HTTP_METHOD } from '../utils/ts/types'
import { Request, Response } from 'express'
import { requireAuth } from '../middlewares/authCheck'
import { route, controller, use, bodyValidator } from '../utils/ts/decorators'

@controller('/auth')
export class AuthController {
  @route('/login', HTTP_METHOD.GET)
  public getLogin(request: Request, response: Response): void {
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

  @route('/login', HTTP_METHOD.POST)
  @bodyValidator('email', 'password') // validates if request body contains email and password
  public login(request: Request, response: Response): void {
    const { email, password } = request.body as AuthBodyPayload

    // No need to check if email and password exist in body = we now have a body validator middleware custom made to handle any body params needed
    if (email === 'test@test.com' && password === 'password') {
      request.session.user = { email, password }
      response.json({ email, password, message: 'Logged in' })
    } else {
      response.json({ message: 'Credentials are not valid or do not exist' })
    }
  }

  @route('/logout', HTTP_METHOD.GET)
  public logout(request: Request, response: Response): void {
    request.session.destroy((err) => {
      console.log('Session destroyed')
      response.redirect('/auth/login')
      if (err) {
        console.error(err)
      }
    })
  }

  @route('/credentials', HTTP_METHOD.GET)
  @use(requireAuth)
  public credentials(request: Request, response: Response): void {
    const { user } = request.session
    response.send(`
          <div>
              <h1>Hello there!</h1>
              <p>email: ${user?.email}<p>
          </div>
      `)
  }
}

export const isLoggedIn = (request: Request, response: Response): void => {
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

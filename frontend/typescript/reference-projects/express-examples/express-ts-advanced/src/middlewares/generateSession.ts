import session from 'express-session'

export const appSession = session({
  secret: 'super-secret-key',
  name: 'sid',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 24,
  },
})

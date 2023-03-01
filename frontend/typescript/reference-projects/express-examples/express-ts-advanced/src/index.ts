import './controllers/authController'
import express from 'express'
import { appSession } from './middlewares/generateSession'
import { Router } from './utils/Router'

const app = express()

app.use(appSession)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(Router.getExpressRouterInstance())

app.listen(3000, () => console.log('Listening on port 3000'))

/**
 * this app re-implements our own custom decorator based express backend
 * from scratch. To do this not from scratch and leverage an npm library
 * ts-express-decorators is an option. I am inclined to say this code we wrote
 * is actually impressive and should be published as our own tool
 */

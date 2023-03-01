import express from 'express'
import authRoutes from './routes/authRoutes'
import { appSession } from './middlewares/generateSession'

const app = express()

app.use(appSession)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', authRoutes)

app.listen(3000, () => console.log('Listening on port 3000'))

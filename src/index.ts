import { PrismaClient } from '@prisma/client'
import bodyParser from 'body-parser'
import express from 'express'
import logger from 'morgan'
import errorHandler from './middlewares/errorHandler'
import sessionController from './routes/sessions'


const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use('/api/session',sessionController)
app.use(errorHandler)


const server = app.listen(process.env.PORT || 3000, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3000\n⭐️',
  ),
)

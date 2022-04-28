import express, { Request, Response } from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

import { AppError } from '@shared/errors/AppError'
import { router } from '@shared/infra/http/routes'

import '@shared/infra/typeorm'

import '@shared/container'

const app = express()

const swaggerDocumentation = YAML.load('./src/docs/swagger.yaml')

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentation))

app.use(router)

app.use((err: Error, _request: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message })
  }

  return response
    .status(500)
    .json({ message: `Internal Server Error - ${err.message}` })
})

app.listen(3333, () => console.log('Server running'))

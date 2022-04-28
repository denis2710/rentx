import { AppError } from '@errors/AppError';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import "reflect-metadata"
import { router } from './routes';
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs';

import './database'

import '@shared/container'

const app = express();

const swaggerDocumentation = YAML.load('./src/docs/swagger.yaml')

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));

app.use(router)

app.get('/',( request, response) => {
    return response.json({"msg" : "Hello"})
})

app.post('/courses', (req, res) => {
    const {name} = req.body;
    return res.json({name: name})
})

app.use((err: Error, _request: Request, response: Response, _next: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({message: err.message})
    }

    return response.status(500).json({message: `Internal Server Error - ${err.message}`})
})

app.listen(3333, ()=> console.log('Server running'))


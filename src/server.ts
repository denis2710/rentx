import express from 'express';
import "reflect-metadata"
import { router } from './routes';
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs';

import './database'

import './shared/container'

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

app.listen(3333, ()=> console.log('Server running'))


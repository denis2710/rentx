import express from 'express';

const app = express();

app.use(express.json());

app.get('/',( request, response) => {
    return response.json({"msg" : "Hello"})
})

app.post('/courses', (req, res) => {
    const {name} = req.body;
    return res.json({name: name})
})

app.listen(3333, ()=> console.log('Server running'))
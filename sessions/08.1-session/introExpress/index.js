const express = require('express');

const app = express();

const port = 8080;

//handler para la ruta localhost:8080/
app.get('/', (req, res) => {
    res.send('Hello Koders!')
})

app.get('/koders', (req, res) => {
    res.send('Aquí están todos los koders')
})

app.post('/', (req, res) => {
    res.send('Aquí puedes crear koders')
})

app.post('/koders', (req, res) => {
    res.send('Aquí puedes crear koders')
})

app.put('/koders', (req, res) => {
    res.send({response: 'Aquí puedes sustituir un koder'})
})

// funciona igual que el anterior
app.put('/koders', (req, res) => {
    res.send({response: 'Aquí puedes no sustituir un koder'})
})

//Aquí se inicia su server o app
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
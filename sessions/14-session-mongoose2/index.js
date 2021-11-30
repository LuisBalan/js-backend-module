const mongoose = require('mongoose');
const express = require('express')
const Koder = require('./koder.model')
const PORT = 8080;

const DB_USER = 'luis'
const DB_PASSWORD = 'bln1.618';
const DB_HOST = 'cluster0.jtdjp.mongodb.net';
const DB_NAME = 'kodemia';
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.get('/', (req, res) => {
    res.end('endpoint de express')
});

app.get('/koders', async (req, res) => {

    //cargar los koders
    const koders = await Koder.find({});
    console.log(koders)
   
    //mandar msj de respuesta
    res.json(koders)
})



mongoose
.connect(URL)
    .then(async (connection) => {
    console.log('DB Connected!');
    
    
    // se arranca el servidor hasta que ya existe conexión con la base de datos
    app.listen(PORT, () => {
        console.log('Server is running')
    })



    })
    .catch((error) => {
        console.error(error)
    })

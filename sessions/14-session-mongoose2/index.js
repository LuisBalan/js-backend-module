require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express')
const Koder = require('./koder.model')


const PORT = process.env.PORT;

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
console.log('Username: ', DB_USER)
console.log('Password: ', DB_PASSWORD)
console.log('Puerto: ', PORT)


const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.get('/', (req, res) => {
    res.end('endpoint de express')
});

app.get('/koders', async (req, res) => {

    try{
        //cargar los koders
        const koders = await Koder.find({});
        console.log(koders)
       
        //mandar msj de respuesta
        res.json(koders)

    }catch(error){

    }
    
})

app.post('/koders', (req, res) => {
    res.statusCode = 201;
    res.json({success: true})
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


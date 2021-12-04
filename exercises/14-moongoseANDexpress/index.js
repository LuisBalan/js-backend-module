const express = require('express');
const mongoose = require('mongoose');
const Koder = require('./koder.model');
const PORT = 8080;

const DB_USER = 'luis';
const DB_PASSWORD = 'bln1.618';
const DB_HOST = 'cluster0.jtdjp.mongodb.net';
const DB_NAME = 'kodemia';
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.get('/', (req, res) => {
    res.end('Express Endpoint: First Test')
})




app.get('/koders', async(req, res) => {

    try{
        const koders = await Koder.find({});
        console.log(koders)
    
        const testMessage = 'test koders path'
        res.json(koders)


    }catch(error){

    }
})

app.get('/koders', async(req, res) => {

    try{

        const {gender, age} = req.query;
        const filter = {};
    
        if(gender) filters.gender = gender
        if(age) filters.age = age
        console.log('Filtros', filters)
    
        const koders = await Koder.find(filters)
    
        res.json(koders)
    }catch(error){
        console.error(error)
        res.statusCode = 500
        res.end()

    }
})

// app.get('/coders', async (req, res) => {
//     const gender = req.query.gender
//     if(gender === 1){
//         res.end('success')
//     }
// })


app.post('/koders', async (req, res) => {
    try{
        const {name, lastName, gender, age} = req.body
        const newKoder = await Koder.create({
            name,
            lastName,
            gender,
            age,
        })

        res.statusCode = 201;
        res.json({
            success: true,
            data: {
                koder: newKoder,
            }
        })
    }catch (error){
        res.statusCode = 400
        res.json({
            success: false,
            error,
        })
    }
})

mongoose
.connect(URL)
    .then(async (connection) => {
    console.log('DB connected!');

    app.listen(PORT, () => {
        console.log('Server is running')
    
    })
    })
    .catch((error) => {
        console.error(error)
    })
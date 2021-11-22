const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs/promises');
const encoding = 'utf-8';
const bodyParser = require('body-parser');
// const multer = require('multer');
// const upload = multer();

const addContent = async = (fileName, newContent) => {
    try{
     await fs.appendFile(fileName, newContent)

    }catch{
        console.log(`Error`)
    }
    
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/koders', (req, res) => {
    res.send('Here you can add a new koder');
    const contenido = req.body;
    console.log(contenido)
})

app.listen(port, () => {
    console.log(`Starting POST endpoint.`)
})


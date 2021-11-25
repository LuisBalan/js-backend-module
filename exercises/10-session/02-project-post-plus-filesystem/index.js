const express = require('express');
const fs = require('fs/promises');
const app = express();
const port = 8080;
const encoding = 'utf-8';
const bodyParser = require('body-parser');
// const multer = require('multer');
// const upload = multer();

const readFile = async (fileName) => {
    try{
        const readedContent = await fs.readFile(fileName, encoding);
        // console.log(`File content:\n${readedContent}`)
        const koderObject = JSON.parse(readedContent)
        console.log(koderObject)
        
    }catch{
        console.log(`Error to read ${fileName} file.`)
    }
}

const addContent = async (fileName, newContent) => {
    
    try{
     await fs.appendFile(fileName, newContent)

    }catch{
        console.log(`Error adding new content`)
    }    
}

const makeRequest = () => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    
    app.post('/koders', (req, res) => {
        res.send('Here you can add a new koder');
        const contenido = req.body;
        console.log(contenido)
        // console.log(JSON.bodyParser(contenido))
        
        // addContent('koders.json', contenido)
        
    })
    
    app.listen(port, () => {
        console.log(`Starting POST endpoint.`)
    })
}

readFile('koders.json')
// makeRequest()
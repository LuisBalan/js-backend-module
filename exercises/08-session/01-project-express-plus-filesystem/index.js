const express = require('express');
const app = express();
const PORT = 8080;
const fs = require('fs/promises');
const ENCODING = 'utf-8';
const KODERS_FILE = 'koders.json'

// function to read the content of koders.json
const getFileContent = async (KODERS_FILE) => {
    try{
        const fileContent = await fs.readFile(KODERS_FILE, ENCODING);
        console.log(fileContent)
        return fileContent

    }catch{
        console.log(`Error to read ${KODERS_FILE}.`)

    }
}

//testing
const fileContent = getFileContent('koders.json')
console.log(fileContent)

//response maker function
const makeResponse = (fileContent) => {

    app.get('/koders', (req, res) => {
        res.json(JSON.parse(fileContent))
    })
    
    app.listen(PORT, () => {
        console.log(`Response from localhost:${PORT}`)
    })

    
}

//trigger function
const sendResponse = async (contentToSend) => {
    try{
        const fileContent = await getFileContent(contentToSend)
         makeResponse(fileContent)
    }catch{
        console.log(`Error`)
    }
}

sendResponse('koders.json');
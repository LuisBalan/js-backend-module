const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs/promises');
const encoding = 'utf-8'

// function to read the content of koders.json
const getFileContent = async (fileName) => {
    try{
        const fileContent = await fs.readFile(fileName, encoding);
        console.log(fileContent)
        return fileContent

    }catch{
        console.log(`Error to read ${fileName}.`)

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
    
    app.listen(port, () => {
        console.log(`Response from localhost:${port}`)
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
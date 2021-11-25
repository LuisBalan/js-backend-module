const express = require('express');
const app = express();
const PORT = 8080;
const fs = require('fs/promises');
const ENCODING = 'utf-8'
const KODERS_FILE = 'koder.json'

const loadKoders = async () => {
    try{
        const content = await fs.readFile(KODERS_FILE, ENCODING);
        const parsedFile = JSON.parse(content);
        return parsedFile.koders;
    }catch(error){
        console.error('Error on loading koders names');
        console.error(error);

        return [];
    }
}
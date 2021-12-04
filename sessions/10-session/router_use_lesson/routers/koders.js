const express = require('express');
const fs = require('fs/promises');
const ENCODING = 'utf-8';
const KODERS_FILE = 'koders.json';


router.get('/:genero123', (req, res) => {
    const genero = req.params.genero123

    console.log('Parametro: ', genero)
    res.end(genero)
})

router.patch('/:name', async (req, res) => {
    const koders = await loadKoders()

    const newKoder = req.body // Ya es un objeto, gracias al middleware
    const koderName = req.params.name

    if (!isValidKoder(newKoder)) {
        res.statusCode = 400
        res.end('Please provide a valid Koder object')

        return
    }

    const koderIndex = koders.findIndex((koder) => koder.nombre === koderName)

    if (koderIndex === -1) {
        res.statusCode = 404
        res.end('Koder Not Found')

        return
    }

    koders[koderIndex].nombre = newKoder.nombre
    koders[koderIndex].genero = newKoder.genero

    await saveKoders(koders)

    res.json(newKoder)
})






















async function loadKoders() {
    try {
        const content = await fs.readFile(KODERS_FILE, ENCODING) // texto JSON string
        const parsedFile = JSON.parse(content)

        return parsedFile.koders
    } catch (error) {
        console.error('No se pudieron cargar los koders')
        console.error(error)

        return []
    }
}

async function saveKoders(koders) {
    try {
        // const mentores = await loadMentores()
        const mentores = []
        const newObject = { koders, mentores } // creamos un nuevo objeto
        const newContent = JSON.stringify(newObject, null, 4) // para mantener formato de JSON

        await fs.writeFile(KODERS_FILE, newContent, ENCODING)
    } catch (error) {
        console.error('No se pudieron guardar los koders')
        console.error(error)
    }
}
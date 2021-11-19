
const { dir } = require('console');
const { rm, fdatasync } = require('fs');
const fs = require('fs/promises');
const encoding = 'utf-8'


//================ create file ===========================

async function crearArchivo(nombre, contenido) {
    await fs.writeFile(nombre, contenido, 'utf8', (error) => {
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log('Se creo el archivo correctamente');
        }
    });
}


// another solution

const createFile = async (name, content) => {
    try{
        await fs.writeFile(name, content, encoding)
        console.log(`The file ${name} was created.`)
    }catch{
        console.log('The file was not created.')
    }
}

//=================== read file ==========================

async function leer(archivo) {
    await fs.readFile(archivo, 'utf-8', (err, data) => {
        if(err){
            console.log('error al leer el archivo')
        }else{
            console.log(data)
        }
    })
}

const readFile = async (fileName) => {
    try{
        const readedContent = await fs.readFile(fileName, encoding);
        console.log(`File content:\n${readedContent}`)
    }catch{
        console.log(`Error to read ${fileName} file.`)
    }
}

// readFile('otroArchivo.txt')

//======================= edit file ===================

async function editar(archivo, nuevoContenido) {
    await fs.appendFile(archivo, nuevoContenido, (err) => {
        if(err){
            console.log('error al editor el archivo')
        }else{
            console.log(`${nuevoContenido}\n ha sido agregado a ${archivo}`)
        }

    });
}

const editFile = async (fileName, content) => {
    try{
        await fs.appendFile(fileName, content)
        console.log(`\'${content}\' was added to ${fileName} file.`)
    }catch{
        console.log(`Error to edit ${fileName} file.`)
    }
}

// editFile('unArchivo.txt', '\nEste es nuevo contenido\nOtro nuevo contenido\nUna vez más nuevo contenido')

//======================== delete file ========================

async function borrar(archivo) {
    await fs.unlink(archivo, (err) =>{
        if(err){
            console.log('error al eliminar el archivo')
        }else{
            console.log('el archivo ha sido eliminado')
        }
    })
}

const deleteFile = async (fileName) => {   
    try{
        await fs.unlink(fileName)
        console.log(`The ${fileName} file has been deleted.`)

    }catch{
        console.log(`Error to delete ${fileName} file.`)
    }

}

// deleteFile('oneEnglishFile')


//======================== create directory ==============

const createDir = async (dirName) => {
    try{
        fs.mkdir(dirName);
        console.log(`The ${dirName} directory has been created succesfully`)

    }catch{
        console.log(`Error to delete ${dirName} directory.`)
    }
}

//======================== read directory content ===============

const readDirContent = async (dirName) => {
    try{
        const dirContent =  await fs.readdir(dirName);
        console.log(`The content of ${dirName} is:`)
        dirContent.forEach((item) =>{return console.log(item)});

    }catch{
        console.log('error')
    }
}
//==================== delete empty directory =================

const deleteDir = async (dirName) => {
    try{
        fs.rmdir(dirName);
        console.log(`The ${dirName} directory has been succesfully deleted.`)
    }catch{
        console.log(`Error to delete ${dirName} directory.`)
    }
}

//======================== delete non empty directory =========


const deleteNonEmptyDir = async (dirName) => {
    try{
        await fs.rm(dirName, {recursive: true})
        console.log(`${dirName} has been succesfully deleted.`)
    }catch{
        console.log('Error to open the directory')
    }
    
}

//================== open directory =============================

const openDir = async(dirName) => {
    try{
        await fs.opendir(dirName)
        console.log(fs.dir.path)
    
    }catch{
        console.log(`${dirName} could not be opened.`)
    }
}

const closeDir = async(dirName) => {
    try{
        await dir.close(dirName);
    }catch{
        console.log(`error to close the ${dirName} file`)
    }
}

const createAndReadFile = async (name, content) => {
    await createFile(name, content);
    await readFile(name);
}

// createAndReadFile('randoTextFile.txt', 'content of the file')
openDir('randomDirectory')
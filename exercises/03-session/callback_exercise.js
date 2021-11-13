// crear un CRUD 

const fs = require('fs');

function crearArchivo(nombre, contenido) {
    fs.writeFile(nombre, contenido, 'utf8', (error) => {
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log('Se creo el archivo correctamente');
        }
    });
}

function borrar(archivo) {
    fs.unlink(archivo, (err) =>{
        if(err){
            console.log('error al eliminar el archivo')
        }else{
            console.log('el archivo ha sido eliminado')
        }
    })
}

function editar(archivo, nuevoContenido) {
    fs.appendFile(archivo, nuevoContenido, (err) => {
        if(err){
            console.log('error al editor el archivo')
        }else{
            console.log(`${nuevoContenido} ha sido agregado a ${archivo}`)
        }

} )
}

function leer(archivo) {
    fs.readFile(archivo, 'utf-8', (err, data) => {
        if(err){
            console.log('error al leer el archivo')
        }else{
            console.log(data)
        }
    })

}


crearArchivo('ejercicio.txt', 'Este sera su ejercicio de manana')
leer('ejercicio.txt')
editar('ejercicio.txt', "nuevo contenido")
leer('ejercicio.txt')
borrar('ejercicio.txt')
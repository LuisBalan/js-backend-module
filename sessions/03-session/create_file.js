const fs = require('fs');
fs.writeFile('hola.txt', 'Hola desde FS', 'utf-8', (error) => {
    if(error){
        console.log('Error: ' + error )
    }else{
        console.log('File was correctly created.')
    }
});

// exite un estándar para la escritura de callbacks
const http = require('http');
const port = 8080;

const server = http.createServer((request, response) => {
    const metodo = request.method;
    console.log(metodo)

    const url = request.url

    response.setHeader('Content-type', 'text/json')
    response.statusCode = 200;
    
    const mensaje = {
        message: ''
    }

    if(metodo === 'GET' && url === '/koders'){
        mensaje.message = 'Aquí están todos los koders'
    }else if(metodo === 'POST' && url === '/koders'){
        mensaje.message === 'Aquí puedes crear koders'
    }else{
        response.statusCode = 400;
        mensaje.message = 'No sé qué hacer, ayuda.'
    }

    const respuesta = JSON.stringify(mensaje)
    console.log(respuesta)

    response.write(respuesta)
    response.end()


})

server.listen(port, () => {
    console.log('Server launchet at 8080 port')
})
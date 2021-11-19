const http = require('http')

const port = 8080

// Creamor un servidor, usando createServer
const server = http.createServer((request, response) => {
    const metodo = request.method
    console.log(metodo)
    const content = request.content
    console.log(content)

    const url = request.url;
    console.log('URL: ${url}')
    
    // le definimos un todo el header, con writeHead
    // response.writeHead(200, {})
    response.statusCode = 202
    response.setHeader('Content-Type', 'text/json')

    // response.write('Hello World!')
    response.end('{"hola": "a todos"}')
})

// arrancamos el servidor
server.listen(port, () => {
    console.log(`El servidor arranco en el puerto ${port}`)
})
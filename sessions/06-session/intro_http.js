const http = require('http');

//Create a server

const server = http.createServer((request, response) => {
    response.writeHead(200, {})

    response.write('Hello World!')
    
    response.end()
})

server.listen(8080, () => {
    console.log('Server launched at 8080 port')
});
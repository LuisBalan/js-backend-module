const http = require('http');
const port = 8080;

const server = http.createServer((request, response) => {
    const url = request.url;
    const metodo = request.method;
    
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');

    if(url === `/koder` && metodo === 'GET'){
        response.write('Aquí están todos los koders')
    }else if(url === '/koder' && metodo === 'POST'){
        response.write('Aquí puedes crear koders')
    }else{
        response.statusCode = 400
        response.write('Ayuda, no sé qué hacer.')
    }

    response.end()
    
})

server.listen(port, () => {
    console.log('Server launched at 8080 port.')
})

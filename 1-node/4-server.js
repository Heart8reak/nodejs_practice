const http = require('http') 

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hola Mundo')
})

server.listen(5000, () => {
    console.log('Seerver is listening on port : 5000....');
})
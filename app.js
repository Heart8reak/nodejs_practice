const http = require('http') 

const server = http.createServer((req, res) => {
    console.log('User hit the Server! :-)');
    res.end('<h1>Home Page</h1>')
})

server.listen(5000)
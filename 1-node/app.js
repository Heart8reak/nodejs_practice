const http = require('http') 
const {readFileSync} = require('fs')

// Get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    const url = req.url 
    
    // Home Page
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    } 

    // About Page
    else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    
    // 404 Error Page
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page Not Found!</h1>')
        res.end()
    }
})

server.listen(5000)
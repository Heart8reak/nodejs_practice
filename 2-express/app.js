const express = require('express')
const app = express() 
const logger = require('../logger')
const authorize = require('../authorize')

// req => middlewate => 
app.use([logger, authorize])


app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/contact', (req, res) => {
    res.send('Contact')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('Items')
})

app.listen(5000, () => {
    console.log('\nServer is up and Running!\n');
})
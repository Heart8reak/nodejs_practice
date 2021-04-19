const express = require('express')
const app = express()
const { products } =require('./data')

// #################################################################################
// Home Page
// #################################################################################

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

// #################################################################################
// A List of Products
// #################################################################################

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product 
        return {id, name, image}
    })
    res.json(newProducts)
})

// #################################################################################
// Products ID 
// #################################################################################

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params

    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist!')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.query);
    res.send('Hola Mundo')
})

// #################################################################################
// Query Search of products
// #################################################################################

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('No Products matched your search!')
        return res.status(200).json({ success: true, data:[]})
    }
    res.status(200).json(sortedProducts)
    res.send('Hello World')
})

app.listen(5000, (req, res) => {
    console.log('\nServer is listening on port 5000...\n');
})
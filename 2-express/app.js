const express = require('express')
const app = express()
let { people } = require('./data')

// static asset
app.use(express.static('./methods-public'))
// parse form data 
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

// ####################
// GET
// ####################

app.get('/api/people', (req, res) => {
    res.status(200).json({ succes: true, data: people })
})

// ####################
// POST
// ####################

app.post('/javascript.html/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' })
    }
    res.status(201).send({ success: true, person: name })
})

app.post('/login', (req, res) => {
    console.log(req.body);
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials!')
    res.send('POST')
})

app.listen(5000, () => {
    console.log('\n##### Server is up and Running! #####\n');
})
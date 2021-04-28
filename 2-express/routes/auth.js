const express = require('express')
const router = express.Router()

// ####################
// POST for login
// ####################

router.post('/login', (req, res) => {
    console.log(req.body);
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials!')
    res.send('POST')
}) 


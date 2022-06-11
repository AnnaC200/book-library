const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json('Hello book library world')
})

module.exports = app
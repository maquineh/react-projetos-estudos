const express = require('express')
const app = express()
const bodyParder = require('body-parser')

app.use(bodyParder.json())

app.post('/blabla/:valor', (req, res, next) => {
    console.log('Func 0')
    next()
})

app.post('/blabla/:valor', (req, res) => {
    console.log('Func 1')
    res.status(200).send('Meu Backend = ' + req.body.sobrenome)
})

app.listen(3000, () => {
    console.log('Backend executando.....')
})
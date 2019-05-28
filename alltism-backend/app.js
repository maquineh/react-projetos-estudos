const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// faz o parse application/json
app.use(bodyParser.json());
//faz o parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// rota default
app.get('/', function(req, res) {
  res.json({ message: 'Servidor no ar!!!' });
});

// inicializa o app
app.listen(3000, function() {
  console.log('Servidor iniciado na porta 3000');
});
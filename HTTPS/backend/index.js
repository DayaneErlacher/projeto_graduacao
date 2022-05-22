const fs = require("fs");
const https = require("https");
const express = require("express");
const bodyParser = require('body-parser');
const port = require('config').get('server.port');
const app = express();

// SETANDO VARIÁVEIS DA APLICAÇÃO
app.set('port', process.env.PORT || port);

// MIDDLEWARES
app.use(bodyParser.json());

// TEMOS APENAS UM CAMINHO // APLICAÇÃO SIMPLES
require('./api/routes/users.routes')(app);

// Carrega o certificado e a key necessários para a configuração.
const options = {
    key: fs.readFileSync('./config/keys/key.pem'),
    cert: fs.readFileSync('./config/keys/cert.pem')
};

// Cria a instância do server e escuta na porta
https.createServer(options, app).listen(port);
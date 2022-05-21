const app = require('./config/express')();
const port = app.get('port');
const fs = require("fs");
const https = require("https");

// Carrega o certificado e a key necessários para a configuração.
const options = {
    key: fs.readFileSync('./config/keys/key.pem'),
    cert: fs.readFileSync('./config/keys/cert.pem')
};

// Cria a instância do server e escuta na porta
https.createServer(options, app).listen(port);
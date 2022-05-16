// https://localhost:8080
const fs = require("fs");
const https = require("https");
const express = require("express");
  // module.exports = () => {
  const app = express();
  app.get("/", (req, res) => {
    res.send("Hello world using HTTPS!");
  });
  
  // Carrega o certificado e a key necessários para a configuração.
  const options = {
    key: fs.readFileSync('./keys/key.pem'),
    cert: fs.readFileSync('./keys/cert.pem')
  };
  
  // Cria a instância do server e escuta na porta
  https.createServer(options, app).listen(8080);
  //   return app;
  // };



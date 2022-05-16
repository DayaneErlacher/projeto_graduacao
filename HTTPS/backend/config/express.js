// const fs = require("fs");
// const https = require("https");
// const express = require("express");
// try {
//   // module.exports = () => {
//   const app = express();
//   app.get("/", (req, res) => {
//     res.send("Hello world using HTTPS!");
//   });
  
//   // Carrega o certificado e a key necessários para a configuração.
//   const options = {
//     key: fs.readFileSync("keys/certificado.key"),
//     cert: fs.readFileSync("keys/certificado.cert")
//   };
  
//   // Cria a instância do server e escuta na porta
//   https.createServer(options, app).listen(8080);
//   //   return app;
//   // };

// } catch(err) {
//   console.log(err)
// }

const https = require('node:https');
const fs = require('node:fs');

const options = {
  key: fs.readFileSync('keys/certificado.key'),
  cert: fs.readFileSync('keys/certificado.cert')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8080);


// const bodyParser = require('body-parser');

//   const app = express();
//   const cors = require("cors");
  
//   // SETANDO VARIÁVEIS DA APLICAÇÃO
//   app.set('port', process.env.PORT || config.get('server.port'));
  
//   // MIDDLEWARE TO ENABLE CORS
//   app.use(cors());

//   // MIDDLEWARES
//   app.use(bodyParser.json());

//   // TEMOS APENAS UM CAMINHO // APLICAÇÃO SIMPLES
//   require('../api/routes/users.routes')(app);

const express = require("express");
const bodyParser = require('body-parser');
const port = require('config').get('server.port');


module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || port);

  // MIDDLEWARES
  app.use(bodyParser.json());

  // TEMOS APENAS UM CAMINHO // APLICAÇÃO SIMPLES
  require('../api/routes/users.routes')(app);

  return app;
};



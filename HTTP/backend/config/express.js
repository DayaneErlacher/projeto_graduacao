const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
  const app = express();
  const cors = require("cors");
  
  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));
  
  // MIDDLEWARE TO ENABLE CORS
  app.use(cors());

  // MIDDLEWARES
  app.use(bodyParser.json());

  // TEMOS APENAS UM CAMINHO // APLICAÇÃO SIMPLES
  require('../api/routes/users.routes')(app);

  return app;
};
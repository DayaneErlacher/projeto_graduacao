const express = require('express');
const rateLimit  = require('express-rate-limit');
const bodyParser = require('body-parser');
const port = require('config').get('server.port');

const app = express();
const cors = require("cors");

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// SETANDO VARIÁVEIS DA APLICAÇÃO
app.set('port', process.env.PORT || port);

// LIMITAR REQUISIÇÕES
// app.use(limiter)

// MIDDLEWARE TO ENABLE CORS
app.use(cors());

// MIDDLEWARES
app.use(bodyParser.json());

// TEMOS APENAS UM CAMINHO // APLICAÇÃO SIMPLES
require('./api/routes/users.routes')(app);

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});
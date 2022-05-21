const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 10000;

const USERS_API_URL = 'http://localhost:8080'
// const PRODUCTS_API_URL = 'http://localhost:8080/api/users'
const userServiceProxy = httpProxy(USERS_API_URL);
// const productsServiceProxy = httpProxy(PRODUCTS_API_URL);

app.get('/', (req, res) => res.send('Hello Gateway API'));

app.get('/api/users', (req, res, next) => userServiceProxy(req, res, next));
// app.get('/products', (req, res, next) => productsServiceProxy(req, res, next));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
const https = require("https");
const fs = require("fs");
const axios = require('axios');
const USERS_API_URL = require('config').get('server.USERS_API_URL');

const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // (NOTE: this will disable client verification)
    cert: fs.readFileSync("./config/keys/cert.pem"),
    key: fs.readFileSync("./config/keys/key.pem"),
    passphrase: "YYY"
})

module.exports = app => {

    app.route('/api/users').get(async function (req, res) {
        axios
            .get(`${USERS_API_URL}/api/users`, { httpsAgent })
            .then(data => { res.status(200).json((data.data)) })
            .catch(err => { res.status(400).json(err) });
    });

    app.route('/api/users').post(async function (req, res) {
        axios
            .post(`${USERS_API_URL}/api/users`,req.body, { httpsAgent })
            .then(data => { res.status(200).json((data.data)) })
            .catch(err => { res.status(400).json(err) });
    });

}
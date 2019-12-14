const express = require('express');
const http = require('https');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./lib/config.js');
const router = require('./lib/api/router.js');
const app = express();

// configure webserver
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, config.env.webContentDir)));

// use EJS as view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

// set public router
app.use('/', router);

// start server
app.listen(config.env.port, function () {
    console.log('Server started at Port 3000');
});
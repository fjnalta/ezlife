const express = require('express');
const session = require('express-session');
const memoryStore = new session.MemoryStore();
const Keycloak = require('keycloak-connect');

//const http = require('https');
const bodyParser = require('body-parser');
const path = require('path');

const config = require('./lib/config');

const router = require('./lib/api/router');

// setup keycloak
const keycloak = new Keycloak({store: memoryStore}, config.env.keycloak);

// setup authentication middleware
const authHandler = new (require('./lib/middleware/authHandler'))();

// handle cookies - DSGVO
const handleCookies = new (require('./lib/services/handleCookies'))();

// reference express app
const app = express();

// setup express session
app.use(session({
    secret: config.env.sessionSecret,
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

// setup keycloak middleware
app.use(keycloak.middleware());

// configure webserver
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, config.env.webContentDir)));

// use EJS as view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

// reverse proxy configuration
app.set('trust proxy', '127.0.0.1');

// setup static path
app.use('/node_modules', express.static('node_modules'));

// setup keycloak protected url's
app.use('/settings', keycloak.protect());
app.use('/password', keycloak.protect());
app.use('/delete', keycloak.protect());

// setup keycloak to always check for session except on registration
// TODO - improve SSO implementation / currently disabled
app.use(authHandler.checkLogin);

// handle cookies
app.use(handleCookies.setCookieState);


// setup public router
app.use('/', router);

// start server
app.listen(config.env.port, function () {
    console.log('Server started at Port 3000');
});

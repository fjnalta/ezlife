"use strict";

const shell = require('shelljs');
const r2 = require('r2');
const config = require('../config');
const querystring = require('querystring');

let keycloak;

class UserHandler {

    constructor(ref) {
        console.log('UserHandler initialized');
        ref = keycloak;
    }

    register = (req, res) => {
        // do registration
        shell.exec('./lib/tools/create_mail_user_OpenLDAP.sh ' +
            req.body.username + ' ' +
            req.body.password + ' ' +
            req.body.name + ' ' +
            req.body.surname,
            function (code, stdout, stderr) {
                let tmp = code;
                if (tmp === 0) {
                    res.sendStatus(200);
                } else {
                    res.sendStatus(500);
                }
            });
    };

    login = async (req, res, next) => {

        next();

    }
}

module.exports = UserHandler;
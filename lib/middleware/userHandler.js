"use strict";

const shell = require('shelljs');

class UserHandler {
    constructor() {
        console.log('RegistrationMiddleware initialized');
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

    changePassword = (req, res) => {
        shell.exec('./lib/tools/change_user_password_OpenLDAP.sh ' +
            req.body.username + ' ' +
            req.body.password + ' ' +
            req.body.newPassword,
            function (code, stdout, stderr) {
                let tmp = code;
                if (tmp === 0) {
                    res.redirect('/');
                } else {
                    res.sendStatus(500);
                }
            });
    };

    deleteAccount = (req, res) => {
        shell.exec('./lib/tools/delete_user_OpenLDAP.sh ' +
            req.body.username,
            function (code, stdout, stderr) {
                let tmp = code;
                if (tmp === 0) {
                    res.redirect('/');
                    // TODO - logout keycloak session
                } else {
                    res.sendStatus(500);
                }
        });
    };

    // TODO - send mail
    sendMail = async (req, res) => {
        console.log('send Mail');
        console.log(req.body.ppnCheck);
        console.log(req.body.username);
        console.log(req.body.email);
        console.log(req.body.message);
        res.redirect('/');
    };
}

module.exports = UserHandler;
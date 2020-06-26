/**
 * Authentication Middleware
 * Executed on every page call. Handles sessions and connection to identity management.
 */
const config = require('../config');
const shell = require('shelljs');

class AuthenticationMiddleware {

    constructor(ref) {
        console.log("Auth Middleware initialized");
    }

    register = (req, res, next) => {
        // do registration
        shell.exec('./lib/tools/create_mail_user_OpenLDAP.sh ' +
            req.body.username + ' ' +
            req.body.password + ' ' +
            req.body.name + ' ' +
            req.body.surname,
            function (code, stdout, stderr) {
                console.log(stdout);
                console.log(stderr);
                console.log(code);
                let tmp = code;
                if (tmp === 0) {
                    req.body.registration = true;
                    next();
                } else {
                    req.body.registration = false;
                    next();
                }
            });
    };

    handleRegistrationInput = (req, res, next) => {
        let checkUser = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))$/.test(req.body.username);
        let checkUsername = (req.body.username).length > 2;
        let checkName = (req.body.name).length >= 3;
        let checkSurname = (req.body.surname).length >= 3;
        let checkPassword = (req.body.password).length >= 5;
        let checkMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email);

        if(checkUser && checkUsername && checkName && checkSurname && checkPassword && checkMail) {
            if(req.body.password == req.body.password2) {
                next();
            } else {
                res.sendStatus(500);
            }

        } else {
            res.sendStatus(500);
        }
    };

    checkLogin = (req, res, next) => {
        if(this.isEmpty(req.kauth)) {
            next();
        } else {
            res.auth = req.kauth.grant.access_token.content;
            next();
        }
    };

    // helper functions
    isEmpty = (obj) => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    };
}

module.exports = AuthenticationMiddleware;
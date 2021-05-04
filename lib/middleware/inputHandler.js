"use strict";

class InputHandler {
    constructor() {
        console.log('InputMiddleware initialized');
    }

    handlePasswordInput = (req, res, next) => {
        // Check passwords match
        let newPassword = req.body.newPassword;
        let newPassword2 = req.body.newPassword2;

        if(newPassword != newPassword2) {
            res.sendStatus(500);
        }

        // Check password policy
        let checkNewPassword = (req.body.newPassword).length >= 5;
        if(checkNewPassword) {
            next();
        } else {
            res.sendStatus(500);
        }
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
                console.log("Passwords don't match!");
                res.sendStatus(500);
            }
        } else {
            console.log("Basic checks not passed");
            res.sendStatus(500);
        }
    };

    handleContactInput = (req, res, next) => {
        // email regex
        let checkMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // check input
        if (req.body.username && req.body.email && req.body.message && req.body.ppnCheck === 'true' && checkMail.test(req.body.email)) {
            next();
        } else {
            res.sendStatus(500);
        }
    };
}

module.exports = InputHandler;
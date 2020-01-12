"use strict";

class HandleContactFormular {

    handleUserInput = (req, res, next) => {
        // email regex
        let checkMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // check input
        if (req.body.username && req.body.email && req.body.message && req.body.ppnCheck === 'true' && checkMail.test(req.body.email)) {
            next();
        } else {
            res.sendStatus(500);
        }
    };

    // TODO - send mail
    sendMail = async (req, res, next) => {
        console.log('send Mail');

        console.log(req.body.ppnCheck);
        console.log(req.body.username);
        console.log(req.body.email);
        console.log(req.body.message);
        next();
    };
}

module.exports = HandleContactFormular;
"use strict";

const config = require('../config');

class HandleCookies {

    setCookieState = (req,res,next) => {
        if(req.url === '/about' || req.url === '/privacy') {
            config.runtime.cookies = false;
        } else {
            config.runtime.cookies = true;
        }
        next();
    };
}

module.exports = HandleCookies;
"use strict";

const config = require('../config');

class HandleCookies {

    setCookieState = (req,res,next) => {
        if(req.url === '/about' || req.url === '/privacy' || req.url === '/contact') {
            config.runtime.cookies = false;
        } else {
            config.runtime.cookies = true;
        }
        next();
    };
}

module.exports = HandleCookies;
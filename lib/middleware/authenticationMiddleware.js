/**
 * Authentication Middleware
 * Executed on every page call. Handles sessions and connection to identity management.
 */
const config = require('../config');

class AuthenticationMiddleware {

    constructor(ref) {
        console.log("Auth Middleware initialized");
    }

    checkLogin = (req,res,next) => {
        if(this.isEmpty(req.kauth)) {
            next();
        } else {
            //console.log(req.kauth);
            //console.log(req.kauth.grant.access_token.content);
            //console.log(req.kauth.grant.access_token);

            res.auth = req.kauth.grant.access_token.content;
            next();
            //console.log(req.kauth.grant.access_token.content);
            //console.log(req.kauth.grant.access_token.content.resource_access);
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
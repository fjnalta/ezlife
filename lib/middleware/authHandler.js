/**
 * Authentication Middleware
 * Executed on every page call. Handles sessions and connection to identity management.
 */
class AuthHandler {
    constructor(ref) {
        console.log("Auth middleware initialized");
    }

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

module.exports = AuthHandler;
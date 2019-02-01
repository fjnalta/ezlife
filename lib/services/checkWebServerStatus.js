/**
 * Called in publicRouter.js
 * Function: TODO
 */

const http = require('https');
const config = require('../config.js');

function init() {
    for(var i = 0; i < config.runtime.webServices.length; i++) {
        checkServerStatus(config.runtime.webServices[i].name);
    }
}

// TODO - WTF semantic error
function checkServerStatus(serviceName) {
    http.get(config.env.appBaseUrl + serviceName, function (res) {
        for(var i = 0; i < config.runtime.webServices.length; i++) {
            if(config.runtime.webServices[i].name == serviceName) {
                config.runtime.webServices[i].status = true;
            }
        }
    }).on('error', function (err) {
        for(var i = 0; i < config.runtime.webServices.length; i++) {
//            if(config.runtime.webServices[i].name == url) {
//                config.runtime.webServices[i].status = false;
//            }
        }
    });
};

module.exports = {
    init: init,
    checkServerStatus : checkServerStatus
}

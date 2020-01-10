"use strict";

const request = require('request');
const config = require('../config');
const xmlParser = require('xml2json');

class HandleGitlabCommits {

    getCommits = async (req,res,next) => {
        for(let i=0;i<config.runtime.gitUrls.length;i++) {
            let options = {
                method : 'GET',
                uri : config.runtime.gitUrls[i].url,
                headers: {
                    'Content-Type': 'application/xml; charset=utf-8',
                }
            };
            request.get(options, (error, response, body) => {
                if (error) {
                    // calling gitLab API failed
                    res.sendStatus(500);
                } else {
                    let tmp = xmlParser.toJson(body);
                    config.runtime.gitUrls[i].feed = JSON.parse(tmp).feed;
                    if(i==config.runtime.gitUrls.length-1) {
                        next();
                    }
                }
            });
        }
    };
}

module.exports = HandleGitlabCommits;
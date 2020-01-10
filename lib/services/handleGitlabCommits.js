"use strict";

const request = require('request');
const config = require('../config');
const xmlParser = require('xml2json');

class HandleGitlabCommits {

    parseISOString = (s) => {
        let split = s.split(/\D+/);
        let date = new Date(split[0], --split[1], split[2], split[3], split[4], split[5], split[6]);
        // Convert to local string
        return date.toLocaleString();
    };

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
                    let json = xmlParser.toJson(body);
                    let tmpFeed = JSON.parse(json).feed;

                    if(tmpFeed !== undefined && tmpFeed.entry !== undefined) {
                        // Parse Date
                        for(let i=0; i<tmpFeed.entry.length;i++) {
                                tmpFeed.entry[i].updated = this.parseISOString(tmpFeed.entry[i].updated);
                            }
                    }

                    // Save modified Feed
                    config.runtime.gitUrls[i].feed = tmpFeed;

                    if(i==config.runtime.gitUrls.length-1) {
                        next();
                    }
                }
            });
        }
    };
}

module.exports = HandleGitlabCommits;
"use strict";

const r2 = require('r2');
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
        let gitResponse;
        for(let i=0;i<config.runtime.gitFeed.length;i++) {
            let options = {
                method : 'GET',
                url : config.runtime.gitFeed[i].url,
                headers: {
                    'Content-Type': 'application/xml; charset=utf-8',
                }
            };

            try {
                gitResponse = await r2(options).text;
            } catch (e) {
                res.sendStatus(500);
                console.log(e);
            }

            let json = xmlParser.toJson(gitResponse);
            let tmpFeed = JSON.parse(json).feed;

            if(tmpFeed !== undefined && tmpFeed.entry !== undefined) {
                // Parse Date
                for(let i=0; i<tmpFeed.entry.length;i++) {
                    tmpFeed.entry[i].updated = this.parseISOString(tmpFeed.entry[i].updated);
                }
            }

            // Save modified Feed
            config.runtime.gitFeed[i].feed = tmpFeed;

            if(i==config.runtime.gitFeed.length-1) {
                next();
            }
        }
    };
}

module.exports = HandleGitlabCommits;
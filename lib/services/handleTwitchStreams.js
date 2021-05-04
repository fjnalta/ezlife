"use strict";

const config = require('../config');
const r2 = require('r2');

class HandleTwitchStreams {

    getStreamStatus = async (req, res, next) => {
        this.resetStreamStatus();
        let streamResponse;
        // build URI from config
        let uri = '';
        for (let i = 0; i < config.runtime.twitchStreams.length; i++) {
            if (i !== 0) {
                uri += '&';
            }
            uri += 'user_login=' + config.runtime.twitchStreams[i].name;
        }

        // Get online streams
        let options = {
            url: 'https://api.twitch.tv/helix/streams?' + uri,
            headers: {
                'Client-ID': config.env.twitchClientID,
                'Authorization':'Bearer ' + config.env.twitchSecret
            }
        };

        try {
            streamResponse = await r2(options).json;
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }

        //console.log(streamResponse);
        this.setStreamStatus(streamResponse.data);

        // Get stream names
        // build URI from response
        if (streamResponse && streamResponse.data) {
            let gameUri = '';
            for (let k = 0; k < streamResponse.data.length; k++) {
                if (k !== 0) {
                    gameUri += '&';
                }
                gameUri += 'id=' + streamResponse.data[k].game_id;
            }

            let gameResponse;
            let gameOptions = {
                url: 'https://api.twitch.tv/helix/games?' + gameUri,
                headers: {
                    'Client-ID': config.env.twitchClientID,
                    'Authorization':'Bearer ' + config.env.twitchSecret
                }
            };

            try {
                gameResponse = await r2(gameOptions).json;
                //console.log(gameResponse);
            } catch (e) {
                res.sendStatus(500);
                console.log(e);
            }

            if(gameResponse && gameResponse.data) {
                this.setGameName(gameResponse.data);
                //console.log(config.runtime.twitchStreams);
            }
            next();
        } else {
            next();
        }
    };

    setStreamStatus = (data) => {
        if(data) {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < config.runtime.twitchStreams.length; j++) {
                    if (data[i].user_name === config.runtime.twitchStreams[j].name) {
                        // set stream status
                        config.runtime.twitchStreams[j].online = true;
                        config.runtime.twitchStreams[j].game_id = data[i].game_id;
                        config.runtime.twitchStreams[j].description = data[i].title;

                        let img = data[i].thumbnail_url;
                        let myImg = img.replace(/{width}x{height}/i, "256x144");
                        config.runtime.twitchStreams[j].img = myImg;
                    }
                }
            }
        }
    };

    setGameName = (game) => {
        // set game name
        for (let i = 0; i < game.length; i++) {
            for (let j = 0; j < config.runtime.twitchStreams.length; j++) {
                if (game[i].id === config.runtime.twitchStreams[j].game_id) {
                    config.runtime.twitchStreams[j].game = game[i].name;
                }
            }
        }
    };

    resetStreamStatus = () => {
        for (let i = 0; i < config.runtime.twitchStreams.length; i++) {
            config.runtime.twitchStreams[i].game = 'n/a';
            config.runtime.twitchStreams[i].img = '/img/twitch/stream_offline.png';
            config.runtime.twitchStreams[i].description = 'offline';
            config.runtime.twitchStreams[i].online = false;
        }
    };

    getAllLatestClips = async (req, res, next) => {
        let twitchUsers = await this.getAllUsers();
        // setup data array for clips
        req.twitchClips = [];
        // only get clips if a valid answer was received
        if(twitchUsers && twitchUsers.data && twitchUsers.data.length > 0) {
            // clips need to be fetched for each user separately
            for(let i=0; i<twitchUsers.data.length;i++) {
                let clipOptions = {
                    url: 'https://api.twitch.tv/helix/clips?broadcaster_id=' + twitchUsers.data[i].id + '&first=100',
                    headers: {
                        'Client-ID': config.env.twitchClientID,
                        'Authorization':'Bearer ' + config.env.twitchSecret
                    }
                };
                let clipResponse;
                try {
                    clipResponse = await r2(clipOptions).json;
                } catch (e) {
                    res.sendStatus(500);
                    console.log(e);
                }
                let clips = {
                    name : twitchUsers.data[i].display_name,
                    clips : [clipResponse.data]
                };
                // push object
                req.twitchClips.push(clips);

            }
            //console.log(req.twitchClips);
        }
        next();
    };

    getAllUsers = async () => {
        let uri = '';
        for (let i = 0; i < config.runtime.twitchStreams.length; i++) {
            if (i !== 0) {
                uri += '&';
            }
            uri += 'login=' + config.runtime.twitchStreams[i].name;
        }

        let options = {
            url: 'https://api.twitch.tv/helix/users?' + uri,
            headers: {
                'Client-ID': config.env.twitchClientID,
                'Authorization':'Bearer ' + config.env.twitchSecret
            }
        };
        let apiResponse;
        try {
            apiResponse = await r2(options).json;
        } catch (e) {
            res.sendStatus(500);
            console.log(e);
        }
        return apiResponse;
    };
}

module.exports = HandleTwitchStreams;
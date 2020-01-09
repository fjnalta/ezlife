"use strict";

const config = require('../config');
const request = require('request');

class HandleTwitchStreams {


    getStreamStatus = async (req, res, next) => {
        this.resetStreamStatus();
        let streamResponse;
        // build URI from config
        let uri = '';
        for(let i=0; i<config.runtime.twitchStreams.length; i++) {
            if(i!==0) {
                uri += '&';
            }
            uri += 'user_login=' + config.runtime.twitchStreams[i].name;
        }

        let options = {
            url: 'https://api.twitch.tv/helix/streams?' + uri,
            headers: {
                'Client-ID': config.env.twitchClientID
            }
        };
        // Get online streams
        request.get(options, (error, response, body) => {
            if (error) {
                // calling twitch api failed
                res.sendStatus(500);
            } else {
                streamResponse = JSON.parse(body);
                this.setStreamStatus(streamResponse.data);
                // Get stream names
                // build URI from response
                if(streamResponse && streamResponse.data.length > 0) {
                    let gameUri = '';
                    for(let k=0; k<streamResponse.data.length; k++) {
                        if(k!==0) {
                            gameUri += '&';
                        }
                        gameUri += 'id=' + streamResponse.data[k].game_id;
                    }

                    let gameOptions = {
                        url: 'https://api.twitch.tv/helix/games?' + gameUri,
                        headers: {
                            'Client-ID': config.env.twitchClientID
                        }
                    };
                    request.get(gameOptions, (error2, response2, body2) => {
                        if (error2) {
                            // calling twitch api failed
                            res.sendStatus(500);
                            //next();
                        } else {
                            let gameResponse = JSON.parse(body2);
                            this.setGameName(gameResponse.data);
                            //console.log(config.runtime.twitchStreams);
                            next();
                        }
                    });
                } else {
                    next();
                }
            }
        });
    };

    setStreamStatus = (data) => {
        for(let i=0;i<data.length; i++) {
            for(let j=0; j<config.runtime.twitchStreams.length; j++) {
                if(data[i].user_name === config.runtime.twitchStreams[j].name) {
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
    };

    setGameName = (game) => {
        // set game name
        for(let i=0; i<game.length; i++) {
            for(let j=0; j<config.runtime.twitchStreams.length; j++) {
                if(game[i].id === config.runtime.twitchStreams[j].game_id) {
                    config.runtime.twitchStreams[j].game = game[i].name;
                }
            }
        }
    };

    resetStreamStatus = () => {
        for(let i=0;i<config.runtime.twitchStreams.length; i++) {
            config.runtime.twitchStreams[i].game = 'n/a';
            config.runtime.twitchStreams[i].img = '/img/twitch/stream_offline.png';
            config.runtime.twitchStreams[i].description = 'offline';
            config.runtime.twitchStreams[i].online = false;
        }
    };
}

module.exports = HandleTwitchStreams;
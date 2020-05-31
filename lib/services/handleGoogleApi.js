const youtubeMedia = require('../data/youtubeMedia');
const request = require('request');
const config = require('../config');

class HandleGoogleApi {

    loadData = async (req, res, next) => {
        let i, j;

        let playlists = youtubeMedia.youtubePlaylists;
        let playlistItems = [];

        for (i = 0; i < youtubeMedia.youtubePlaylistItems.length; i++) {
            for (j = 0; j < youtubeMedia.youtubePlaylistItems[i].length; j++) {
                playlistItems.push(youtubeMedia.youtubePlaylistItems[i][j]);
            }
        }

        for (i=0; i<playlists.length; i++) {
            playlists[i]["videos"] = [];
            for(j=0; j<playlistItems.length; j++) {
                if(playlists[i].id === playlistItems[j].snippet.playlistId) {
                    playlists[i].videos.push(playlistItems[j]);
                }
            }
        }

        req.youtubeMedia = playlists;
        next();
    };

    verifyToken = async (req, res, next) => {
        let response = res;
        let token = req.body.token;
        if (req.body.token && config.env.recaptcha) {
            await request.post('https://www.google.com/recaptcha/api/siteverify', {
                form: {
                    secret : config.env.recaptcha,
                    response : token
                }
            }, (error, res, body) => {
                if (error) {
                    // calling google api failed
                    response.sendStatus(500);
                }
                let tokenResponse = JSON.parse(body);
                if (tokenResponse.success) {
                    //console.log(`statusCode: ${res.statusCode}`);
                    //console.log(body);
                    next();
                }
            });
        } else {
            // token or recaptcha token not provided
            res.sendStatus(500);
        }
    };


}

module.exports = HandleGoogleApi;
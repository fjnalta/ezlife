const youtubeMedia = require('../data/youtubeMedia');

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
}

module.exports = HandleGoogleApi;
const config = require('../config.js');;
const router = require('express').Router();
const TwitchStreams = require('../services/handleTwitchStreams');
const twitchStreams = new TwitchStreams();

const YoutubeMedia = require('../services/handleGoogleApi');
const youtubeMedia = new YoutubeMedia();

const HandleGitlabCommits = require('../services/handleGitlabCommits');
const handleGitlabCommits = new HandleGitlabCommits();

// set web service status
//wss.init();

// Routes
router.get('/', handleGitlabCommits.getCommits, twitchStreams.getOnlineStreams, function (req, res) {
    res.render('index', {
        appServerStatus : config.runtime.appServices,
        webServerStatus : config.runtime.webServices,
        gameServerStatus : config.runtime.gameServices,
        data : config.about,
        services : config.runtime.services,
        twitchStreams: config.runtime.twitchStreams,
        gitFeed : config.runtime.gitUrls
    });
});

router.get('/about',function (req, res) {
    res.render('about', { data : config.about });
});

router.get('/contact',function (req, res) {
    res.render('contact', { data : config.about });
});

router.get('/media', youtubeMedia.loadData, function (req, res) {
    res.render('media', {
        data : config.about,
        youtubeMedia : req.youtubeMedia
    });
});

router.get('/stream', twitchStreams.getStreamStatus, function (req, res) {
    res.render('stream', {
        data : config.about,
        twitchStreams: config.runtime.twitchStreams });
});

router.get('/services',function (req, res) {
    res.render('services', { data : config.about });
});

router.get('/development', handleGitlabCommits.getCommits, function (req, res) {
    res.render('development', {
        data : config.about,
        gitFeed : config.runtime.gitUrls
    });
});

module.exports = router;
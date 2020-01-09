const config = require('../config.js');
const wss = require('../services/checkWebServerStatus.js');
const router = require('express').Router();
const TwitchStreams = require('../services/handleTwitchStreams');
const twitchStreams = new TwitchStreams();

// set web service status
wss.init();

// Routes
router.get('/',twitchStreams.getOnlineStreams, function (req, res) {
    res.render('index', {
        appServerStatus : config.runtime.appServices,
        webServerStatus : config.runtime.webServices,
        gameServerStatus : config.runtime.gameServices,
        data : config.about,
        services : config.runtime.services,
        twitchStreams: config.runtime.twitchStreams
    });
});

router.get('/about',function (req, res) {
    res.render('about', { data : config.about });
});

router.get('/contact',function (req, res) {
    res.render('contact', { data : config.about });
});

router.get('/media',function (req, res) {
    res.render('media', { data : config.about });
});

router.get('/stream', twitchStreams.getStreamStatus, function (req, res) {
    res.render('stream', {
        data : config.about,
        twitchStreams: config.runtime.twitchStreams });
});

router.get('/services',function (req, res) {
    res.render('services', { data : config.about });
});

router.get('/development',function (req, res) {
    res.render('development', { data : config.about });
});

module.exports = router;
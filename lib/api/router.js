const config = require('../config.js');;
const router = require('express').Router();
const TwitchStreams = require('../services/handleTwitchStreams');
const twitchStreams = new TwitchStreams();

const HandleGoogleApi = require('../services/handleGoogleApi');
const handleGoogleApi = new HandleGoogleApi();

const HandleGitlabCommits = require('../services/handleGitlabCommits');
const handleGitlabCommits = new HandleGitlabCommits();

const HandleCookies = require('../services/handleCookies');
const handleCookies = new HandleCookies();

const HandleContactFormular = require('../services/handleContactFormular');
const handleContactFormular = new HandleContactFormular();

// Routes
router.get('/', handleCookies.setCookieState, twitchStreams.getOnlineStreams, function (req, res) {
    res.render('index', {
        data : config.about,
        services : config.runtime.services,
        twitchStreams: config.runtime.twitchStreams,
        cookies : config.runtime.cookies
    });
});

router.get('/about',handleCookies.setCookieState, function (req, res) {
    res.render('about', {
        data : config.about,
        cookies : config.runtime.cookies
    });
});

router.get('/privacy', handleCookies.setCookieState, function (req, res) {
    res.render('privacy', {
        data : config.about,
        cookies : config.runtime.cookies
    });
});

router.get('/contact',handleCookies.setCookieState, function (req, res) {
    res.render('contact', {
        data : config.about,
        cookies : config.runtime.cookies
    });
});

router.get('/media', handleCookies.setCookieState, handleGoogleApi.loadData, function (req, res) {
    res.render('media', {
        data : config.about,
        youtubeMedia : req.youtubeMedia,
        cookies : config.runtime.cookies
    });
});

router.get('/stream', handleCookies.setCookieState, twitchStreams.getStreamStatus, function (req, res) {
    res.render('stream', {
        data : config.about,
        twitchStreams: config.runtime.twitchStreams,
        cookies : config.runtime.cookies
    });
});

router.get('/services', handleCookies.setCookieState, function (req, res) {
    res.render('services', {
        data : config.about,
        cookies : config.runtime.cookies
    });
});

router.get('/development', handleCookies.setCookieState, handleGitlabCommits.getCommits, function (req, res) {
    res.render('development', {
        data : config.about,
        gitFeed : config.runtime.gitUrls,
        cookies : config.runtime.cookies
    });
});


router.post('/contact', handleGoogleApi.verifyToken, handleContactFormular.handleUserInput, handleContactFormular.sendMail, function (req, res) {
    res.render('index', {
        data : config.about,
        services : config.runtime.services,
        twitchStreams: config.runtime.twitchStreams,
        cookies : config.runtime.cookies
    });
});

module.exports = router;
const config = require('../config');
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
router.get('/', handleCookies.setCookieState, twitchStreams.getStreamStatus, function (req, res) {
    res.render('index', {
        data : config.runtime
    });
});

router.get('/about',handleCookies.setCookieState, function (req, res) {
    res.render('about', {
        data : config.runtime
    });
});

router.get('/privacy', handleCookies.setCookieState, function (req, res) {
    res.render('privacy', {
        data : config.runtime
    });
});

router.get('/contact',handleCookies.setCookieState, function (req, res) {
    res.render('contact', {
        data : config.runtime
    });
});

router.get('/media', handleCookies.setCookieState, handleGoogleApi.loadData, twitchStreams.getAllLatestClips, function (req, res) {
    res.render('media', {
        data : config.runtime,
        youtubeMedia : req.youtubeMedia,
        twitchClips : req.twitchClips,
    });
});

router.get('/stream', handleCookies.setCookieState, twitchStreams.getStreamStatus, function (req, res) {
    res.render('stream', {
        data : config.runtime
    });
});

router.get('/statistics', handleCookies.setCookieState, function (req, res) {
    res.render('stats', {
        data : config.runtime
    });
});

router.get('/development', handleCookies.setCookieState, handleGitlabCommits.getCommits, function (req, res) {
    res.render('development', {
        data : config.runtime
    });
});

/*
    Integrated Services
*/
router.get('/cloud', handleCookies.setCookieState, function (req, res) {
    res.render('includes/cloud', {
        data : config.runtime
    });
});

router.get('/cooking', handleCookies.setCookieState, function (req, res) {
    res.render('includes/cooking', {
        data : config.runtime
    });
});

router.get('/git', handleCookies.setCookieState, function (req, res) {
    res.render('includes/git', {
        data : config.runtime
    });
});

router.get('/mail', handleCookies.setCookieState, function (req, res) {
    res.render('includes/mail', {
        data : config.runtime
    });
});

router.get('/monitoring', handleCookies.setCookieState, function (req, res) {
    res.render('includes/monitoring', {
        data : config.runtime
    });
});

router.get('/register', handleCookies.setCookieState, function (req, res) {
    res.render('includes/login', {
        data : config.runtime
    });
});



router.post('/contact', handleGoogleApi.verifyToken, handleContactFormular.handleUserInput, handleContactFormular.sendMail, function (req, res) {
    res.render('index', {
        data : config.runtime
    });
});

module.exports = router;
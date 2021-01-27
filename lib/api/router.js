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

// setup authentication middleware
const authenticationMiddleware = new (require('../middleware/authenticationMiddleware'))();

// TODO - move custom middleware to app.js
// TODO - implement middleware handler

// Routes
router.get('/', handleCookies.setCookieState, twitchStreams.getStreamStatus, function (req, res) {
    //console.log(res.auth);
    res.render('index', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/about', handleCookies.setCookieState, function (req, res) {
    res.render('about', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/privacy', handleCookies.setCookieState, function (req, res) {
    res.render('privacy', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/contact',handleCookies.setCookieState, function (req, res) {
    res.render('contact', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/register', handleCookies.setCookieState, function (req, res) {
    res.render('register', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/media', handleCookies.setCookieState, handleGoogleApi.loadData, twitchStreams.getAllLatestClips, function (req, res) {
    res.render('media', {
        session : res.auth,
        data : config.runtime,
        youtubeMedia : req.youtubeMedia,
        twitchClips : req.twitchClips,
    });
});

router.get('/stream', handleCookies.setCookieState, twitchStreams.getStreamStatus, function (req, res) {
    res.render('stream', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/voice', handleCookies.setCookieState, function (req, res) {
    res.render('voice', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/statistics', handleCookies.setCookieState, function (req, res) {
    res.render('stats', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/development', handleCookies.setCookieState, handleGitlabCommits.getCommits, function (req, res) {
    res.render('development', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/settings', handleCookies.setCookieState, function (req, res) {
    res.render('settings', {
        session : res.auth,
        data : config.runtime
    });
});

/*
    Integrated Services
*/
router.get('/cloud', handleCookies.setCookieState, function (req, res) {
    res.render('includes/cloud', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/cooking', handleCookies.setCookieState, function (req, res) {
    res.render('includes/cooking', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/git', handleCookies.setCookieState, function (req, res) {
    res.render('includes/git', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/mail', handleCookies.setCookieState, function (req, res) {
    res.render('includes/mail', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/monitoring', handleCookies.setCookieState, function (req, res) {
    res.render('includes/monitoring', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/jira', handleCookies.setCookieState, function (req, res) {
    res.render('includes/jira', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/wiki', handleCookies.setCookieState, function (req, res) {
    res.render('includes/wiki', {
        session : res.auth,
        data : config.runtime
    });
});

// User Settings
//router.post('/password', handleCookies.setCookieState, handleGoogleApi.verifyToken, inputMiddleware.handleChangePasswordInput, setti.changePassword)

router.post('/contact', handleGoogleApi.verifyToken, handleContactFormular.handleUserInput, handleContactFormular.sendMail, function (req, res) {
    res.render('index', {
        session : res.auth,
        data : config.runtime
    });
});

router.post('/register', handleGoogleApi.verifyToken, authenticationMiddleware.handleRegistrationInput, authenticationMiddleware.register, function (req, res) {
    if(req.body.registration) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;
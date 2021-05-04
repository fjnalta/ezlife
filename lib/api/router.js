const config = require('../config');
const router = require('express').Router();

const twitchStreams = new (require('../services/handleTwitchStreams'))();
const handleGoogleApi = new (require('../services/handleGoogleApi'))();
const handleGitlabCommits = new (require('../services/handleGitlabCommits'))();
const handleCookies = new (require('../services/handleCookies'))();
const handleContactFormular = new (require('../services/handleContactFormular'))();
const authenticationMiddleware = new (require('../middleware/authenticationMiddleware'))();

// Routes
router.get('/', handleCookies.setCookieState, twitchStreams.getStreamStatus, function (req, res) {
    res.render('general/index', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/about', handleCookies.setCookieState, function (req, res) {
    res.render('general/about', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/privacy', handleCookies.setCookieState, function (req, res) {
    res.render('general/privacy', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/contact',handleCookies.setCookieState, function (req, res) {
    res.render('general/contact', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/media', handleCookies.setCookieState, handleGoogleApi.loadData, twitchStreams.getAllLatestClips, function (req, res) {
    res.render('general/media', {
        session : res.auth,
        data : config.runtime,
        youtubeMedia : req.youtubeMedia,
        twitchClips : req.twitchClips,
    });
});

router.get('/stream', handleCookies.setCookieState, twitchStreams.getStreamStatus, function (req, res) {
    res.render('general/stream', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/voice', handleCookies.setCookieState, function (req, res) {
    res.render('general/voice', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/development', handleCookies.setCookieState, handleGitlabCommits.getCommits, function (req, res) {
    res.render('general/development', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/register', handleCookies.setCookieState, function (req, res) {
    res.render('user/register', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/settings', handleCookies.setCookieState, function (req, res) {
    res.render('user/settings', {
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

router.get('/mail', handleCookies.setCookieState, function (req, res) {
    res.render('includes/mail', {
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
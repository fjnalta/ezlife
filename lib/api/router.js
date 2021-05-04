const config = require('../config');
const router = require('express').Router();

const inputHandler = new (require('../middleware/inputHandler'))();
const userHandler = new (require('../middleware/userHandler'))();

const handleTwitch = new (require('../services/handleTwitchStreams'))();
const handleGoogleApi = new (require('../services/handleGoogleApi'))();
const handleGitlabCommits = new (require('../services/handleGitlabCommits'))();

// Routes
router.get('/', handleTwitch.getStreamStatus, function (req, res) {
    res.render('general/index', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/about', function (req, res) {
    res.render('general/about', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/privacy', function (req, res) {
    res.render('general/privacy', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/contact',function (req, res) {
    res.render('general/contact', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/media', handleGoogleApi.loadData, handleTwitch.getAllLatestClips, function (req, res) {
    res.render('general/media', {
        session : res.auth,
        data : config.runtime,
        youtubeMedia : req.youtubeMedia,
        twitchClips : req.twitchClips,
    });
});

router.get('/stream', handleTwitch.getStreamStatus, function (req, res) {
    res.render('general/stream', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/voice', function (req, res) {
    res.render('general/voice', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/development', handleGitlabCommits.getCommits, function (req, res) {
    res.render('general/development', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/register', function (req, res) {
    res.render('user/register', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/settings', function (req, res) {
    res.render('user/settings', {
        session : res.auth,
        data : config.runtime
    });
});

/*
    Integrated Services
*/
router.get('/cloud', function (req, res) {
    res.render('includes/cloud', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/cooking', function (req, res) {
    res.render('includes/cooking', {
        session : res.auth,
        data : config.runtime
    });
});

router.get('/mail', function (req, res) {
    res.render('includes/mail', {
        session : res.auth,
        data : config.runtime
    });
});



router.post('/contact', handleGoogleApi.verifyToken, inputHandler.handleContactInput, userHandler.sendMail);

// User Settings
router.post('/password', handleGoogleApi.verifyToken, inputHandler.handlePasswordInput, userHandler.changePassword);
router.post('/register', handleGoogleApi.verifyToken, inputHandler.handleRegistrationInput, userHandler.register);

module.exports = router;
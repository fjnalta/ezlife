const config = require('../config.js');
const wss = require('../services/checkWebServerStatus.js');
const router = require('express').Router();

// set web service status
wss.init();

// Routes
router.get('/',function (req, res) {
    res.render('index', { webServerStatus : config.runtime.webServices});
});

router.get('/about',function (req, res) {
    res.render('about', { data : config.about });
});

router.get('/contact',function (req, res) {
    res.render('contact');
});

router.get('/chat',function (req, res) {
    res.render('chat');
});

router.get('/stream',function (req, res) {
    res.render('stream');
});

router.get('/services',function (req, res) {
    res.render('services');
});

router.get('/development',function (req, res) {
    res.render('development');
});

module.exports = router;
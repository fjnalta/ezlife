'use strict'
const config = require('../config.js');
const wss = require('../services/checkWebServerStatus.js');
const router = require('express').Router();

// set web service status
wss.init();

// Routes
router.get('/',function (req, res) {

    res.render('index', { webServerStatus: config.runtime.webServices});
});

router.get('/about',function (req, res) {
    res.render('about');
});

router.get('/chat',function (req, res) {
    res.render('chat');
});

router.get('/contact',function (req, res) {
    res.render('contact');
});

router.get('/stream',function (req, res) {
    res.render('stream');
});

router.get('/services',function (req, res) {
    res.render('services');
});

router.get('/status',function (req, res) {
    res.render('status');
});

router.get('/development',function (req, res) {
    res.render('development');
});

router.get('/merch', function (req,res) {
    res.render('merchandise');
});

router.get('/news',function (req, res) {
    res.render('news');
});

module.exports = router;
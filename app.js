var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


// Use EJS as View Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/',function (req, res) {
    res.render('index');
});

app.get('/about',function (req, res) {
    res.render('about');
});

app.get('/chat',function (req, res) {
    res.render('chat');
});

app.get('/contact',function (req, res) {
    res.render('contact');
});

app.get('/stream',function (req, res) {
    res.render('stream');
});

app.get('/services',function (req, res) {
    res.render('services');
});

app.get('/status',function (req, res) {
    res.render('status');
});

app.get('/development',function (req, res) {
    res.render('development');
});

app.get('/news',function (req, res) {
    res.render('news');
});

// Start server

app.listen(3000,function () {
    console.log('Server started at Port 3000');
})
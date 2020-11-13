const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('hello, from express');
});

app.get('/about', function(req, res) {
    res.send('this is the about page');
});

app.get('/blog', (req, res) => {
    res.send('Welcome to my blog');
});

app.listen(8000);
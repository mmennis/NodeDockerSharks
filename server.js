const express = require('express');
const router = express.Router();
const db = require('./db');

const path = __dirname + '/views/';
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

router.use(function (req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function(req, res, next) { 
    res.sendFile(path + 'index.html');
});

router.get('/sharks', function (req, res, next) {
    res.sendFile(path + 'sharks.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Running on ${HOST}:${PORT}`);
})
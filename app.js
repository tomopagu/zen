var express = require('express');
var cors = require('cors')
var app = express();
const { PORT = 3000 } = process.env;

var zen = require('./zen.js');

app.use(cors());
app.use(express.static('public'));
app.set('views', './views')
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    var today = new Date().getDate();
    var todayThought = zen(today);

    res.render('index', todayThought);
});

app.get('/api', function (req, res) {
    var today = new Date().getDate();
    var todayThought = zen(today);
    res.json(todayThought);
});

app.get('/api/:day', function (req, res) {
    var thought = zen(req.params.day);
    res.json(thought);
});

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.listen(PORT);

var _ = require('lodash');
var express = require('express');
var app = express();

var zen = require('./zen.js').zen;

app.use(express.static('public'));
app.set('views', './views')
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
	var today = new Date().getDate();
	var todayThought = _.find(zen, { 'day': today });

	var jpthought = todayThought.thought_jp.replace(/\|/g, '<br>');
	var enthought = todayThought.thought_en.replace(/\|/g, '<br>');

	res.render('index', {
		jpthought: jpthought,
		enthought: enthought,
	});
});

app.get('/api', function (req, res) {
	var today = new Date().getDate();
	var todayThought = _.find(zen, { 'day': today });
	res.json(todayThought);
});

app.get('/api/:day', function (req, res) {
	var day = _.toInteger(req.params.day);

	var thought = _.find(zen, { 'day': day });
	res.json(thought);
});

app.use(function(req, res, next) {
	res.status(404).send('Sorry cant find that!');
});

app.listen(3000);

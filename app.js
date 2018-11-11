const fs = require('fs');
const express = require('express');
const Handlebars = require('handlebars');
const cors = require('cors');

const app = express();
const { PORT = 3000 } = process.env;

const zen = require('./zen.js');

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
  const today = new Date().getDate();
  const todayThought = zen(today);

  const template = Handlebars.compile(fs.readFileSync('./views/index.hbs', {encoding: 'utf8'}));
  const result = template(todayThought);
  res.send(result);
});

app.get('/api', (req, res) => {
  const today = new Date().getDate();
  const todayThought = zen(today);
  res.json(todayThought);
});

app.get('/api/:day', (req, res) => {
  const thought = zen(req.params.day);
  res.json(thought);
});

app.use((req, res) => {
  res.status(404).send('Sorry cant find that!');
});

app.listen(PORT);
